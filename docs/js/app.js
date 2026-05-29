document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    const pageTitle = document.getElementById('page-title');
    const backButton = document.getElementById('back-button');
    const navItems = document.querySelectorAll('.nav-item');

    let currentState = {
        view: 'home', // home, courses, topic, lesson
        courseId: null,
        topicId: null,
        lessonId: null
    };

    // Navigation logic
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const view = item.getAttribute('data-view');
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            navigateTo({ view });
        });
    });

    backButton.addEventListener('click', () => {
        window.history.back();
    });

    function navigateTo(state, pushState = true) {
        currentState = { ...currentState, ...state };
        if (pushState) {
            window.history.pushState(currentState, '', '');
        }
        render();
    }

    window.addEventListener('popstate', (event) => {
        if (event.state) {
            currentState = event.state;
            render();
        }
    });

    function render() {
        const { view, courseId, topicId, lessonId } = currentState;
        mainContent.innerHTML = '';
        backButton.classList.add('hidden');

        if (view === 'home') {
            renderHome();
        } else if (view === 'courses') {
            renderCourses();
        } else if (view === 'course-details') {
            renderCourseDetails(courseId);
        } else if (view === 'topic') {
            renderTopic(courseId, topicId);
        } else if (view === 'lesson') {
            renderLesson(courseId, topicId, lessonId);
        } else if (view === 'profile') {
            renderProfile();
        }
    }

    function renderHome() {
        pageTitle.innerText = 'EduApp';
        mainContent.innerHTML = `
            <div class="welcome-card">
                <h2>¡Hola, Estudiante!</h2>
                <p>Continúa dominando tus asignaturas hoy.</p>
            </div>
            <div class="section-title">Cursos Destacados</div>
            <div class="course-grid">
                ${coursesData.map(course => `
                    <div class="course-card" onclick="app.viewCourse('${course.id}')" style="border-left: 5px solid ${course.color}">
                        <span class="material-icons" style="color: ${course.color}">${course.icon}</span>
                        <h3>${course.title}</h3>
                        <p>${course.topics.length} Temas</p>
                    </div>
                `).join('')}
            </div>
        `;
    }

    function renderCourses() {
        pageTitle.innerText = 'Mis Cursos';
        mainContent.innerHTML = `
            <div class="course-list">
                ${coursesData.map(course => `
                    <div class="course-item" onclick="app.viewCourse('${course.id}')">
                        <span class="material-icons" style="background: ${course.color}">${course.icon}</span>
                        <div class="course-info">
                            <h4>${course.title}</h4>
                            <p>${course.topics.length} Temas</p>
                        </div>
                        <span class="material-icons">chevron_right</span>
                    </div>
                `).join('')}
            </div>
        `;
    }

    function renderCourseDetails(courseId) {
        const course = coursesData.find(c => c.id === courseId);
        pageTitle.innerText = course.title;
        backButton.classList.remove('hidden');

        mainContent.innerHTML = `
            <div class="section-title">Temas del Curso</div>
            <div class="topic-list">
                ${course.topics.map(topic => `
                    <div class="topic-item" onclick="app.viewTopic('${courseId}', '${topic.id}')">
                        <div class="topic-info">
                            <h4>${topic.title}</h4>
                            <p>${topic.lessons.length} Lecciones</p>
                        </div>
                        <span class="material-icons">chevron_right</span>
                    </div>
                `).join('')}
            </div>
        `;
    }

    function renderTopic(courseId, topicId) {
        const course = coursesData.find(c => c.id === courseId);
        const topic = course.topics.find(t => t.id === topicId);
        pageTitle.innerText = topic.title;
        backButton.classList.remove('hidden');

        mainContent.innerHTML = `
            <div class="lesson-list">
                ${topic.lessons.map(lesson => `
                    <div class="lesson-item" onclick="app.viewLesson('${courseId}', '${topicId}', '${lesson.id}')">
                        <div class="lesson-circle">${lesson.title.charAt(0)}</div>
                        <div class="lesson-info">
                            <h4>${lesson.title}</h4>
                        </div>
                        <span class="material-icons">play_circle_outline</span>
                    </div>
                `).join('')}
            </div>
        `;
    }

    function renderLesson(courseId, topicId, lessonId) {
        const course = coursesData.find(c => c.id === courseId);
        const topic = course.topics.find(t => t.id === topicId);
        const lesson = topic.lessons.find(l => l.id === lessonId);
        pageTitle.innerText = lesson.title;
        backButton.classList.remove('hidden');

        let contentHtml = `
            <div class="lesson-content">
                <p>${lesson.content}</p>
        `;

        if (lesson.image) {
            contentHtml += `
                <div class="lesson-image">
                    <img src="${lesson.image}" alt="${lesson.title}" style="max-width: 100%; border-radius: 8px; margin-bottom: 16px;">
                </div>
            `;
        }

        if (lesson.pseudocode) {
            contentHtml += `
                <div class="code-block pseudocode">
                    <label>Pseudocódigo</label>
                    <pre><code>${lesson.pseudocode}</code></pre>
                </div>
            `;
        }

        if (lesson.flowchart) {
            contentHtml += `
                <div class="flowchart">
                    <label>Diagrama de Flujo</label>
                    <div class="flowchart-box">${lesson.flowchart}</div>
                </div>
            `;
        }

        if (lesson.code) {
            contentHtml += `
                <div class="code-block code">
                    <label>Código</label>
                    <pre><code>${lesson.code}</code></pre>
                </div>
            `;
        }

        contentHtml += `
                <div class="exercise-section">
                    <h3>Ejercicios</h3>
                    <div id="exercises-container">
                        ${lesson.exercises.map((ex, index) => renderExercise(ex, index)).join('')}
                    </div>
                </div>
            </div>
        `;

        mainContent.innerHTML = contentHtml;
    }

    function renderExercise(ex, index) {
        if (ex.type === 'quiz') {
            return `
                <div class="exercise quiz" id="ex-${index}">
                    <p>${ex.question}</p>
                    <div class="options">
                        ${ex.options.map((opt, i) => `
                            <button onclick="app.checkQuiz(${index}, ${i}, ${ex.answer})">${opt}</button>
                        `).join('')}
                    </div>
                    <div class="feedback"></div>
                </div>
            `;
        } else if (ex.type === 'code') {
            return `
                <div class="exercise code-ex" id="ex-${index}">
                    <p>${ex.question}</p>
                    <textarea id="code-input-${index}" placeholder="${ex.placeholder}"></textarea>
                    <button onclick="app.checkCode(${index}, '${ex.answer}')">Ejecutar y Validar</button>
                    <div class="feedback"></div>
                </div>
            `;
        }
    }

    function renderProfile() {
        pageTitle.innerText = 'Mi Perfil';
        mainContent.innerHTML = `
            <div class="profile-header">
                <div class="profile-pic"><span class="material-icons">person</span></div>
                <h2>Usuario</h2>
                <p>Nivel: Principiante</p>
            </div>
        `;
    }

    // Expose functions to global scope for onclick handlers
    window.app = {
        viewCourse: (courseId) => {
            navigateTo({ view: 'course-details', courseId });
        },
        viewTopic: (courseId, topicId) => {
            navigateTo({ view: 'topic', courseId, topicId });
        },
        viewLesson: (courseId, topicId, lessonId) => {
            navigateTo({ view: 'lesson', courseId, topicId, lessonId });
        },
        checkQuiz: (exIndex, selected, correct) => {
            const exDiv = document.getElementById(`ex-${exIndex}`);
            const feedback = exDiv.querySelector('.feedback');
            if (selected === correct) {
                feedback.innerText = '¡Correcto!';
                feedback.className = 'feedback success';
            } else {
                feedback.innerText = 'Inténtalo de nuevo.';
                feedback.className = 'feedback error';
            }
        },
        checkCode: (exIndex, correct) => {
            const input = document.getElementById(`code-input-${exIndex}`).value;
            const exDiv = document.getElementById(`ex-${exIndex}`);
            const feedback = exDiv.querySelector('.feedback');
            // Robust check: normalize all whitespace
            const normalize = (s) => s.replace(/\s+/g, '').replace(/;/g, '').trim();
            if (normalize(input) === normalize(correct).replace(/;/g, '')) {
                feedback.innerText = '¡Correcto! Código válido.';
                feedback.className = 'feedback success';
            } else {
                feedback.innerText = 'El código no coincide con lo esperado. Revisa la sintaxis.';
                feedback.className = 'feedback error';
            }
        }
    };

    // Initial render
    render();
});
