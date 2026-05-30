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
            if (view === 'profile') return;
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

    function simpleMarkdown(text) {
        if (!text) return '';
        return text
            .replace(/^### (.*$)/gim, '<h3 style="margin: 15px 0 10px; color: var(--p);">$1</h3>')
            .replace(/^## (.*$)/gim, '<h2 style="margin: 20px 0 10px; color: var(--p);">$1</h2>')
            .replace(/^# (.*$)/gim, '<h1 style="margin: 25px 0 15px; color: var(--p);">$1</h1>')
            .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
            .replace(/^\* (.*$)/gim, '<li style="margin-left: 20px;">$1</li>')
            .replace(/\n/g, '<br>');
    }

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
                <h2>¡Bienvenido! 🚀</h2>
                <p>Domina Programación, Inglés y Bases de Datos con lecciones interactivas.</p>
            </div>
            <div class="section-title">Tu progreso</div>
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
        pageTitle.innerText = 'Explorar';
        mainContent.innerHTML = `
            <div class="course-list">
                ${coursesData.map(course => `
                    <div class="list-item" onclick="app.viewCourse('${course.id}')">
                        <div class="icon-circle" style="background: ${course.color}">
                            <span class="material-icons">${course.icon}</span>
                        </div>
                        <div class="list-item-info">
                            <h4>${course.title}</h4>
                            <p>Curso profesional completo</p>
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
            <div class="section-title">Contenido del Curso</div>
            <div class="topic-list">
                ${course.topics.map((topic, index) => `
                    <div class="list-item" onclick="app.viewTopic('${courseId}', '${topic.id}')">
                        <div class="icon-circle" style="background: ${course.color}22; color: ${course.color}">
                            ${index + 1}
                        </div>
                        <div class="list-item-info">
                            <h4>${topic.title}</h4>
                            <p>${topic.lessons.length} lecciones</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    function renderTopic(courseId, topicId) {
        const course = coursesData.find(c => c.id === courseId);
        const topic = course.topics.find(t => t.id === topicId);
        pageTitle.innerText = 'Lecciones';
        backButton.classList.remove('hidden');

        mainContent.innerHTML = `
            <div class="topic-header" style="background: ${course.color}; color: white; padding: 20px; border-radius: 0 0 20px 20px; margin: -20px -20px 20px;">
                <h2>${topic.title}</h2>
            </div>
            <div class="lesson-list">
                ${topic.lessons.map(lesson => `
                    <div class="list-item" onclick="app.viewLesson('${courseId}', '${topicId}', '${lesson.id}')">
                        <div class="icon-circle" style="background: #fff; color: ${course.color}; border: 1px solid #eee">
                            <span class="material-icons">menu_book</span>
                        </div>
                        <div class="list-item-info">
                            <h4>${lesson.title}</h4>
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
        pageTitle.innerText = 'Aprender';
        backButton.classList.remove('hidden');

        let html = `
            <div class="lesson-immersive">
                <div class="progress-bar-container"><div class="progress-bar" style="width: 100%; background: ${course.color}"></div></div>
                <h2 class="lesson-title">${lesson.title}</h2>
                <div class="lesson-body">
                    <div class="main-content-text" style="font-size: 16px; line-height: 1.6; color: #333;">
                        ${simpleMarkdown(lesson.content)}
                    </div>
        `;

        if (lesson.details) {
            html += `<div class="lesson-details" style="margin: 20px 0; background: #f9f9f9; padding: 15px; border-radius: 12px; border-left: 4px solid ${course.color};">
                ${simpleMarkdown(lesson.details)}
            </div>`;
        }

        if (lesson.image) {
            html += `<div class="lesson-media" style="margin: 20px 0;"><img src="${lesson.image}" alt="visual aid" style="width: 100%; border-radius: 15px;"></div>`;
        }

        if (lesson.pseudocode) {
            html += `<div class="editor-label">Pseudocódigo</div>${renderCode(lesson.pseudocode, 'python')}`;
        }

        if (lesson.code) {
            html += `<div class="editor-label">Código Real</div>${renderCode(lesson.code, 'javascript')}`;
        }

        if (lesson.exercises) {
            html += `<div class="divider" style="height: 1px; background: #ddd; margin: 40px 0 20px;"></div><div class="section-title">¡Desafío!</div>`;
            lesson.exercises.forEach((ex, i) => html += renderExercise(ex, i));
        }

        html += `</div></div>`;
        mainContent.innerHTML = html;
    }

    function renderCode(code, lang) {
        return `
            <div class="modern-editor" style="background: #1e1e1e; border-radius: 12px; overflow: hidden; margin-bottom: 20px;">
                <div class="editor-top" style="background: #333; padding: 5px 15px; color: #aaa; font-family: monospace; font-size: 12px;"><span>index.${lang === 'python' ? 'txt' : 'js'}</span></div>
                <div class="editor-content" style="padding: 15px; color: #d4d4d4; font-family: 'Fira Code', monospace; font-size: 14px; overflow-x: auto;"><pre><code>${code}</code></pre></div>
            </div>
        `;
    }

    function renderExercise(ex, idx) {
        let interaction = '';
        if (ex.type === 'quiz') {
            interaction = `
                <div class="quiz-grid" style="display: grid; gap: 10px;">
                    ${ex.options.map((opt, i) => `
                        <button class="game-btn" onclick="app.checkQuiz(${idx}, ${i}, ${ex.answer})">${opt}</button>
                    `).join('')}
                </div>
            `;
        } else if (ex.type === 'code') {
            interaction = `
                <div class="code-game">
                    <textarea class="game-input" id="code-${idx}" style="width: 100%; min-height: 100px; padding: 15px; background: #000; color: #38bdf8; border: none; border-radius: 12px; font-family: monospace; margin-bottom: 10px;" placeholder="${ex.placeholder || 'Escribe tu respuesta aquí...'}"></textarea>
                    <button class="submit-btn" style="width: 100%; padding: 15px; background: var(--p); color: white; border: none; border-radius: 12px; font-weight: bold; cursor: pointer;" onclick="app.checkCode(${idx}, '${ex.answer}')">Validar Solución</button>
                </div>
            `;
        }

        return `
            <div class="exercise-box" id="ex-${idx}" style="background: #f0f0f0; padding: 20px; border-radius: 20px; margin-bottom: 20px;">
                <p class="question" style="font-weight: bold; margin-bottom: 15px;">${ex.question}</p>
                ${interaction}
                <div class="feedback-msg hidden" style="margin-top: 15px; padding: 10px; border-radius: 8px; text-align: center; font-weight: bold;"></div>
            </div>
        `;
    }

    window.app = {
        viewCourse: (id) => navigateTo({ view: 'course-details', courseId: id }),
        viewTopic: (cid, tid) => navigateTo({ view: 'topic', courseId: cid, topicId: tid }),
        viewLesson: (cid, tid, lid) => navigateTo({ view: 'lesson', courseId: cid, topicId: tid, lessonId: lid }),

        showFeedback: (idx, success, msg) => {
            const fb = document.querySelector(`#ex-${idx} .feedback-msg`);
            fb.innerText = msg;
            fb.className = `feedback-msg ${success ? 'success' : 'error'}`;
            fb.style.display = 'block';
            fb.style.background = success ? '#d4edda' : '#f8d7da';
            fb.style.color = success ? '#155724' : '#721c24';
        },

        checkQuiz: (idx, sel, ans) => {
            const ok = sel === ans;
            app.showFeedback(idx, ok, ok ? '✨ ¡Correcto! Buen trabajo.' : '❌ Respuesta incorrecta.');
        },

        checkCode: (idx, ans) => {
            const val = document.getElementById(`code-${idx}`).value.toLowerCase();
            const ok = val.includes(ans.toLowerCase()) || val.length > 5;
            app.showFeedback(idx, ok, ok ? '🚀 ¡Increíble! Lo lograste.' : '⚠️ Revisa tu código.');
        }
    };

    render();
});
