document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    const pageTitle = document.getElementById('page-title');
    const backButton = document.getElementById('back-button');
    const navItems = document.querySelectorAll('.nav-item');

    let currentState = {
        view: 'home',
        courseId: null,
        topicId: null,
        lessonId: null
    };

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const view = item.getAttribute('data-view');
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            navigateTo({ view, courseId: null, topicId: null, lessonId: null });
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

        if (view === 'home') renderHome();
        else if (view === 'courses') renderCourses();
        else if (view === 'course-details') renderCourseDetails(courseId);
        else if (view === 'topic') renderTopic(courseId, topicId);
        else if (view === 'lesson') renderLesson(courseId, topicId, lessonId);
    }

    function renderHome() {
        pageTitle.innerText = 'EduApp';
        mainContent.innerHTML = `
            <div class="hero">
                <h2>Aprende a pensar como un programador 💻</h2>
                <p>Cursos completos de Algoritmos, Inglés y Bases de Datos.</p>
            </div>
            <div class="grid">
                ${coursesData.map(course => `
                    <div class="card" onclick="app.viewCourse('${course.id}')">
                        <span class="material-icons" style="color: ${course.color}">${course.icon}</span>
                        <h3>${course.title}</h3>
                        <p>Curso Profesional</p>
                    </div>
                `).join('')}
            </div>
        `;
    }

    function renderCourses() {
        pageTitle.innerText = 'Mis Cursos';
        mainContent.innerHTML = `
            <div class="course-stack">
                ${coursesData.map(course => `
                    <div class="course-row" onclick="app.viewCourse('${course.id}')">
                        <div class="icon-box" style="background: ${course.color}">
                            <span class="material-icons">${course.icon}</span>
                        </div>
                        <div class="row-info">
                            <h4>${course.title}</h4>
                            <p>${course.topics[0].lessons.length} Lecciones disponibles</p>
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
            <div class="syllabus">
                ${course.topics.map(topic => `
                    <div class="topic-box">
                        <h3>${topic.title}</h3>
                        <div class="lesson-grid">
                            ${topic.lessons.map(lesson => `
                                <div class="lesson-card" onclick="app.viewLesson('${courseId}', '${topic.id}', '${lesson.id}')">
                                    <span class="material-icons">description</span>
                                    <p>${lesson.title}</p>
                                </div>
                            `).join('')}
                        </div>
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

        let html = `
            <div class="workspace">
                <div class="reader-pane">
                    <div class="content-block">
                        <p class="intro-text">${lesson.content}</p>
                        ${lesson.details ? `<div class="details-text">${lesson.details.replace(/\n/g, '<br>')}</div>` : ''}
                    </div>
        `;

        if (lesson.pseudocode) {
            html += `
                <div class="code-header">PSEUDOCÓDIGO</div>
                <div class="code-view"><pre><code>${lesson.pseudocode}</code></pre></div>
            `;
        }

        if (lesson.code) {
            html += `
                <div class="code-header">EJEMPLO EN CÓDIGO</div>
                <div class="code-view"><pre><code>${lesson.code}</code></pre></div>
            `;
        }

        html += `</div>`; // Close reader-pane

        if (lesson.exercises && lesson.exercises.length > 0) {
            html += `
                <div class="editor-pane">
                    <div class="pane-header">INTERACTIVO</div>
                    ${lesson.exercises.map((ex, i) => renderExercise(ex, i)).join('')}
                </div>
            `;
        }

        html += `</div>`; // Close workspace
        mainContent.innerHTML = html;
    }

    function renderExercise(ex, idx) {
        if (ex.type === 'quiz') {
            return `
                <div class="exercise-card" id="ex-${idx}">
                    <p class="question">${ex.question}</p>
                    <div class="quiz-options">
                        ${ex.options.map((opt, i) => `
                            <button class="btn-opt" onclick="app.checkQuiz(${idx}, ${i}, ${ex.answer})">${opt}</button>
                        `).join('')}
                    </div>
                    <div class="feedback-box hidden"></div>
                </div>
            `;
        } else if (ex.type === 'code') {
            return `
                <div class="exercise-card" id="ex-${idx}">
                    <p class="question">${ex.question}</p>
                    <div class="ide-container">
                        <div class="ide-gutter">
                            ${[1, 2, 3, 4, 5, 6].map(n => `<div>${n}</div>`).join('')}
                        </div>
                        <textarea class="ide-input" id="ide-${idx}" placeholder="${ex.placeholder || '// Escribe aquí...'}" spellcheck="false"></textarea>
                    </div>
                    <button class="btn-run" onclick="app.checkCode(${idx}, '${ex.answer}')">EJECUTAR</button>
                    <div class="feedback-box hidden"></div>
                </div>
            `;
        }
    }

    window.app = {
        viewCourse: (id) => navigateTo({ view: 'course-details', courseId: id }),
        viewLesson: (cid, tid, lid) => navigateTo({ view: 'lesson', courseId: cid, topicId: tid, lessonId: lid }),

        checkQuiz: (idx, sel, ans) => {
            const box = document.querySelector(`#ex-${idx} .feedback-box`);
            box.classList.remove('hidden', 'success', 'error');
            if (sel === ans) {
                box.innerText = '✓ Correcto';
                box.classList.add('success');
            } else {
                box.innerText = '✗ Inténtalo de nuevo';
                box.classList.add('error');
            }
        },

        checkCode: (idx, ans) => {
            const val = document.getElementById(`ide-${idx}`).value;
            const box = document.querySelector(`#ex-${idx} .feedback-box`);
            box.classList.remove('hidden', 'success', 'error');

            // Simple check
            if (val.trim().length > 5) {
                box.innerText = '✓ Código ejecutado. ¡Bien hecho!';
                box.classList.add('success');
            } else {
                box.innerText = '✗ Escribe un algoritmo más completo';
                box.classList.add('error');
            }
        }
    };

    render();
});
