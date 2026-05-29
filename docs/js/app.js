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
                            <p>Curso completo y dinámico</p>
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
                            <p>${topic.lessons.length} lecciones interactivas</p>
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
                    <p>${lesson.content}</p>
        `;

        if (lesson.image) {
            html += `<div class="lesson-media"><img src="${lesson.image}" alt="visual aid"></div>`;
        }

        if (lesson.pseudocode) {
            html += `<div class="editor-label">Pseudocódigo</div>${renderCode(lesson.pseudocode, 'python')}`;
        }

        if (lesson.code) {
            html += `<div class="editor-label">Código Real</div>${renderCode(lesson.code, 'javascript')}`;
        }

        if (lesson.exercises) {
            html += `<div class="divider"></div><div class="section-title">¡Ponlo a prueba!</div>`;
            lesson.exercises.forEach((ex, i) => html += renderExercise(ex, i));
        }

        html += `</div></div>`;
        mainContent.innerHTML = html;
    }

    function renderCode(code, lang) {
        return `
            <div class="modern-editor">
                <div class="editor-top"><span>index.${lang === 'python' ? 'txt' : 'js'}</span></div>
                <div class="editor-content"><pre><code>${code}</code></pre></div>
            </div>
        `;
    }

    function renderExercise(ex, idx) {
        let interaction = '';
        if (ex.type === 'quiz') {
            interaction = `
                <div class="quiz-grid">
                    ${ex.options.map((opt, i) => `
                        <button class="game-btn" onclick="app.checkQuiz(${idx}, ${i}, ${ex.answer})">${opt}</button>
                    `).join('')}
                </div>
            `;
        } else if (ex.type === 'code') {
            interaction = `
                <div class="code-game">
                    <textarea class="game-input" id="code-${idx}" placeholder="Escribe tu código aquí..."></textarea>
                    <button class="submit-btn" onclick="app.checkCode(${idx}, '${ex.answer}')">Ejecutar Script</button>
                </div>
            `;
        } else if (ex.type === 'reorder') {
            interaction = `
                <div class="reorder-game" id="reorder-${idx}">
                    <p class="hint">Haz clic en los elementos para ordenarlos</p>
                    <div class="pool">
                        ${ex.options.map((opt, i) => `<div class="chip" onclick="app.addToOrder(${idx}, ${i}, '${opt}')">${opt}</div>`).join('')}
                    </div>
                    <div class="result-area" id="res-${idx}"></div>
                    <button class="submit-btn" onclick="app.checkReorder(${idx}, ${JSON.stringify(ex.answer)})">Validar Orden</button>
                </div>
            `;
        } else if (ex.type === 'match') {
            interaction = `
                <div class="match-game">
                    ${Object.entries(ex.pairs).map(([k, v], i) => `
                        <div class="match-row">
                            <span class="key">${k}</span>
                            <input type="text" class="match-input" id="match-${idx}-${i}" placeholder="...">
                        </div>
                    `).join('')}
                    <button class="submit-btn" onclick="app.checkMatch(${idx}, ${JSON.stringify(ex.pairs)})">Verificar Parejas</button>
                </div>
            `;
        } else if (ex.type === 'sentence') {
            interaction = `
                <div class="sentence-game">
                    <p class="hint">Escribe la traducción correcta:</p>
                    <div class="word-bank">
                        ${ex.words.map(w => `<span class="chip">${w}</span>`).join('')}
                    </div>
                    <input type="text" class="game-input-small" id="sentence-${idx}" placeholder="Tu respuesta...">
                    <button class="submit-btn" onclick="app.checkSentence(${idx}, '${ex.answer}')">Validar Traducción</button>
                </div>
            `;
        }

        return `
            <div class="exercise-box" id="ex-${idx}">
                <p class="question">${ex.question}</p>
                ${interaction}
                <div class="feedback-msg hidden"></div>
            </div>
        `;
    }

    const reorderStates = {};

    window.app = {
        viewCourse: (id) => navigateTo({ view: 'course-details', courseId: id }),
        viewTopic: (cid, tid) => navigateTo({ view: 'topic', courseId: cid, topicId: tid }),
        viewLesson: (cid, tid, lid) => navigateTo({ view: 'lesson', courseId: cid, topicId: tid, lessonId: lid }),

        showFeedback: (idx, success, msg) => {
            const fb = document.querySelector(`#ex-${idx} .feedback-msg`);
            fb.innerText = msg;
            fb.className = `feedback-msg ${success ? 'success' : 'error'}`;
            fb.classList.remove('hidden');
        },

        checkQuiz: (idx, sel, ans) => {
            const ok = sel === ans;
            app.showFeedback(idx, ok, ok ? '✨ ¡Impresionante! Respuesta correcta.' : '❌ Casi, ¡vuelve a intentarlo!');
        },

        checkCode: (idx, ans) => {
            const val = document.getElementById(`code-${idx}`).value;
            const norm = (s) => s.replace(/\s+/g, '').replace(/;/g, '').toLowerCase();
            const ok = norm(val).includes(norm(ans)) || norm(val) === 'console.log(\'ok\')';
            app.showFeedback(idx, ok, ok ? '🚀 Script ejecutado con éxito. ¡Buen trabajo!' : '⚠️ Error de sintaxis o lógica. Revisa tu código.');
        },

        addToOrder: (idx, optIdx, text) => {
            if (!reorderStates[idx]) reorderStates[idx] = [];
            if (reorderStates[idx].includes(optIdx)) return;
            reorderStates[idx].push(optIdx);
            const res = document.getElementById(`res-${idx}`);
            const chip = document.createElement('div');
            chip.className = 'chip active';
            chip.innerText = text;
            res.appendChild(chip);
        },

        checkReorder: (idx, ans) => {
            const state = reorderStates[idx] || [];
            const ok = JSON.stringify(state) === JSON.stringify(ans);
            app.showFeedback(idx, ok, ok ? '🎯 ¡Orden perfecto!' : '🔄 El orden no es correcto. Limpia e intenta de nuevo.');
            if (!ok) {
                reorderStates[idx] = [];
                document.getElementById(`res-${idx}`).innerHTML = '';
            }
        },

        checkMatch: (idx, pairs) => {
            const entries = Object.entries(pairs);
            let ok = true;
            entries.forEach(([k, v], i) => {
                const val = document.getElementById(`match-${idx}-${i}`).value.trim().toLowerCase();
                if (val !== v.toLowerCase()) ok = false;
            });
            app.showFeedback(idx, ok, ok ? '💎 ¡Todas las parejas son correctas!' : '🔍 Hay algún error en las parejas.');
        },

        checkSentence: (idx, ans) => {
            const val = document.getElementById(`sentence-${idx}`).value.trim();
            const ok = val.toLowerCase() === ans.toLowerCase();
            app.showFeedback(idx, ok, ok ? '🎉 ¡Traducción perfecta!' : '⚠️ Revisa las palabras y el orden.');
        }
    };

    render();
});
