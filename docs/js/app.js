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
            if (view === 'profile') return; // Profile not implemented
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
        mainContent.scrollTop = 0;

        if (view === 'home') renderHome();
        else if (view === 'courses') renderCourses();
        else if (view === 'course-details') renderCourseDetails(courseId);
        else if (view === 'topic') renderTopic(courseId, topicId);
        else if (view === 'lesson') renderLesson(courseId, topicId, lessonId);
    }

    function renderHome() {
        pageTitle.innerText = 'EduApp';
        mainContent.innerHTML = `
            <div class="welcome-card">
                <h2>¡Hola! 👋</h2>
                <p>¿Qué quieres aprender hoy? Tienes 3 cursos esperándote.</p>
            </div>
            <div class="section-title">Cursos Disponibles</div>
            <div class="course-grid">
                ${coursesData.map(course => `
                    <div class="course-card" onclick="app.viewCourse('${course.id}')">
                        <span class="material-icons" style="color: ${course.color}">${course.icon}</span>
                        <h3>${course.title}</h3>
                        <p>${course.topics.length} temas</p>
                    </div>
                `).join('')}
            </div>
        `;
    }

    function renderCourses() {
        pageTitle.innerText = 'Cursos';
        mainContent.innerHTML = `
            <div class="course-list">
                ${coursesData.map(course => `
                    <div class="list-item" onclick="app.viewCourse('${course.id}')">
                        <div class="icon-circle" style="background: ${course.color}">
                            <span class="material-icons">${course.icon}</span>
                        </div>
                        <div class="list-item-info">
                            <h4>${course.title}</h4>
                            <p>${course.topics.length} temas para dominar</p>
                        </div>
                        <span class="material-icons" style="color: #ccc">chevron_right</span>
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
            <div class="section-title">Plan de Estudios</div>
            <div class="topic-list">
                ${course.topics.map((topic, index) => `
                    <div class="list-item" onclick="app.viewTopic('${courseId}', '${topic.id}')">
                        <div class="icon-circle" style="background: ${course.color}33; color: ${course.color}">
                            ${index + 1}
                        </div>
                        <div class="list-item-info">
                            <h4>${topic.title}</h4>
                            <p>${topic.lessons.length} lecciones</p>
                        </div>
                        <span class="material-icons" style="color: #ccc">chevron_right</span>
                    </div>
                `).join('')}
            </div>
        `;
    }

    function renderTopic(courseId, topicId) {
        const course = coursesData.find(c => c.id === courseId);
        const topic = course.topics.find(t => t.id === topicId);
        pageTitle.innerText = 'Contenido';
        backButton.classList.remove('hidden');

        mainContent.innerHTML = `
            <div class="section-title">${topic.title}</div>
            <div class="lesson-list">
                ${topic.lessons.map(lesson => `
                    <div class="list-item" onclick="app.viewLesson('${courseId}', '${topicId}', '${lesson.id}')">
                        <div class="icon-circle" style="background: #eee; color: #666">
                            <span class="material-icons">play_arrow</span>
                        </div>
                        <div class="list-item-info">
                            <h4>${lesson.title}</h4>
                        </div>
                        <span class="material-icons" style="color: #ccc">chevron_right</span>
                    </div>
                `).join('')}
            </div>
        `;
    }

    function renderLesson(courseId, topicId, lessonId) {
        const course = coursesData.find(c => c.id === courseId);
        const topic = course.topics.find(t => t.id === topicId);
        const lesson = topic.lessons.find(l => l.id === lessonId);
        pageTitle.innerText = 'Lección';
        backButton.classList.remove('hidden');

        let html = `
            <div class="lesson-content">
                <h3>${lesson.title}</h3>
                <p>${lesson.content}</p>
        `;

        if (lesson.image) {
            html += `<img src="${lesson.image}" style="width:100%; border-radius:12px; margin-bottom:20px;">`;
        }

        if (lesson.pseudocode) {
            html += renderCodeBlock(lesson.pseudocode, 'Pseudocódigo');
        }

        if (lesson.code) {
            html += renderCodeBlock(lesson.code, 'Código');
        }

        if (lesson.exercises && lesson.exercises.length > 0) {
            html += `<div class="section-title">Práctica</div>`;
            lesson.exercises.forEach((ex, i) => {
                html += renderExercise(ex, i);
            });
        }

        html += `</div>`;
        mainContent.innerHTML = html;
    }

    function renderCodeBlock(code, label) {
        return `
            <div class="section-title">${label}</div>
            <div class="code-editor">
                <div class="editor-header">
                    <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
                </div>
                <div class="editor-body"><pre><code>${code}</code></pre></div>
            </div>
        `;
    }

    function renderExercise(ex, index) {
        let content = '';
        if (ex.type === 'quiz') {
            content = `
                <div class="options-group">
                    ${ex.options.map((opt, i) => `
                        <button class="option-btn" onclick="app.checkQuiz(${index}, ${i}, ${ex.answer})">${opt}</button>
                    `).join('')}
                </div>
            `;
        } else if (ex.type === 'code') {
            content = `
                <textarea class="modern-textarea" id="code-input-${index}" placeholder="${ex.placeholder || 'Escribe tu código aquí...'}"></textarea>
                <button class="action-btn" onclick="app.checkCode(${index}, '${ex.answer}')">Validar Solución</button>
            `;
        }

        return `
            <div class="exercise-card" id="ex-${index}">
                <h4>${ex.question}</h4>
                ${content}
                <div class="feedback-toast hidden"></div>
            </div>
        `;
    }

    window.app = {
        viewCourse: (id) => navigateTo({ view: 'course-details', courseId: id }),
        viewTopic: (cid, tid) => navigateTo({ view: 'topic', courseId: cid, topicId: tid }),
        viewLesson: (cid, tid, lid) => navigateTo({ view: 'lesson', courseId: cid, topicId: tid, lessonId: lid }),
        checkQuiz: (idx, sel, ans) => {
            const fb = document.querySelector(`#ex-${idx} .feedback-toast`);
            fb.classList.remove('hidden', 'success', 'error');
            if (sel === ans) {
                fb.innerText = '✨ ¡Excelente! Respuesta correcta.';
                fb.classList.add('success');
            } else {
                fb.innerText = '❌ Inténtalo de nuevo.';
                fb.classList.add('error');
            }
        },
        checkCode: (idx, ans) => {
            const val = document.getElementById(`code-input-${idx}`).value;
            const fb = document.querySelector(`#ex-${idx} .feedback-toast`);
            fb.classList.remove('hidden', 'success', 'error');
            const norm = (s) => s.replace(/\s+/g, '').replace(/;/g, '').toLowerCase();
            if (norm(val) === norm(ans)) {
                fb.innerText = '🚀 ¡Perfecto! Código validado.';
                fb.classList.add('success');
            } else {
                fb.innerText = '⚠️ El código no coincide. Revisa la sintaxis.';
                fb.classList.add('error');
            }
        }
    };

    render();
});
