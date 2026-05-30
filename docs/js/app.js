document.addEventListener('DOMContentLoaded', () => {
    const courseApp = document.getElementById('course-app');
    if (!courseApp) return;

    const filename = window.location.pathname.split('/').pop() || 'index.html';
    const courseIdMap = {
        'programming.html': 'programming',
        'english.html': 'english',
        'database.html': 'databases'
    };
    const courseId = courseIdMap[filename];
    const course = coursesData.find(c => c.id === courseId);

    if (!course) return;

    let currentTopicIndex = 0;
    let currentLessonIndex = 0;

    function init() {
        renderLayout();
        handleRouting();
        window.addEventListener('popstate', handleRouting);
    }

    function renderLayout() {
        courseApp.innerHTML = `
            <div class="course-layout">
                <aside class="sidebar-syllabus">
                    <div class="sidebar-header">
                        <h3 class="section-title">${course.title}</h3>
                        <p style="font-size: 12px; color: var(--text-muted);">${course.topics.length} Módulos</p>
                    </div>
                    <div id="syllabus-list"></div>
                </aside>
                <section class="lesson-workspace" id="lesson-workspace">
                    <div id="lesson-container"></div>
                </section>
            </div>
        `;
    }

    function handleRouting() {
        const params = new URLSearchParams(window.location.search);
        const lessonId = params.get('lesson');

        if (lessonId) {
            let found = false;
            course.topics.forEach((topic, tIdx) => {
                const lIdx = topic.lessons.findIndex(l => l.id === lessonId);
                if (lIdx !== -1) {
                    currentTopicIndex = tIdx;
                    currentLessonIndex = lIdx;
                    found = true;
                }
            });
            if (!found) { currentTopicIndex = 0; currentLessonIndex = 0; }
        } else {
            currentTopicIndex = 0;
            currentLessonIndex = 0;
        }

        const lesson = course.topics[currentTopicIndex].lessons[currentLessonIndex];
        renderSyllabus();
        renderLesson(lesson);
        window.scrollTo(0, 0);
    }

    function renderSyllabus() {
        const list = document.getElementById('syllabus-list');
        list.innerHTML = '';
        course.topics.forEach((topic, tIdx) => {
            const topicEl = document.createElement('div');
            topicEl.className = 'topic-group';
            topicEl.innerHTML = `<div class="topic-label">${topic.title}</div>`;

            topic.lessons.forEach((lesson, lIdx) => {
                const isActive = currentTopicIndex === tIdx && currentLessonIndex === lIdx;
                const item = document.createElement('div');
                item.className = `syllabus-item ${isActive ? 'active' : ''}`;
                item.innerHTML = `
                    <span class="material-icons" style="font-size: 18px;">${lesson.exercises?.length ? 'auto_awesome' : 'menu_book'}</span>
                    <h4>${lesson.title}</h4>
                `;
                item.onclick = () => {
                    const url = new URL(window.location);
                    url.searchParams.set('lesson', lesson.id);
                    window.history.pushState({}, '', url);
                    handleRouting();
                };
                topicEl.appendChild(item);
            });
            list.appendChild(topicEl);
        });
    }

    function renderLesson(lesson) {
        const container = document.getElementById('lesson-container');
        container.innerHTML = `
            <div class="lesson-body fade-in">
                <div class="lesson-header">
                    <span class="badge">${course.topics[currentTopicIndex].title}</span>
                    <h2>${lesson.title}</h2>
                </div>
                <div class="content-text">${simpleMarkdown(lesson.content)}</div>

                ${lesson.exercises?.length ? `
                    <div class="interactive-pane">
                        <div class="pane-header">
                            <span class="material-icons">psychology</span>
                            <h3>Práctica y Refuerzo</h3>
                        </div>
                        ${lesson.exercises.map((ex, i) => renderExercise(ex, i)).join('')}
                    </div>
                ` : `
                    <div class="next-step-box">
                        <p>¿Listo para continuar?</p>
                        <button class="run-btn" onclick="app.nextLesson()">Siguiente Lección</button>
                    </div>
                `}
            </div>
        `;
    }

    function renderExercise(ex, idx) {
        if (ex.type === 'code') {
            return `
                <div class="exercise-card" id="ex-${idx}">
                    <p class="question">${ex.question}</p>
                    <div class="ide-box">
                        <div class="ide-head">editor_v1.js</div>
                        <div class="ide-body">
                            <textarea class="ide-input" id="ide-${idx}" placeholder="Escribe tu código aquí..."></textarea>
                        </div>
                    </div>
                    <div class="exercise-actions">
                        <button class="run-btn" onclick="app.checkCode(${idx}, '${ex.answer}')">EJECUTAR Y VALIDAR</button>
                        <div class="feedback-msg hidden" id="fb-${idx}"></div>
                    </div>
                </div>
            `;
        }
        if (ex.type === 'quiz') {
            return `
                <div class="exercise-card" id="ex-${idx}">
                    <p class="question">${ex.question}</p>
                    <div class="quiz-grid">
                        ${ex.options.map((opt, i) => `
                            <button class="quiz-option" onclick="app.checkQuiz(${idx}, ${i}, ${ex.answer})">${opt}</button>
                        `).join('')}
                    </div>
                    <div class="feedback-msg hidden" id="fb-${idx}"></div>
                </div>
            `;
        }
    }

    function simpleMarkdown(text) {
        if (!text) return '';
        return text
            .replace(/^### (.*$)/gim, '<h3 class="md-h3">$1</h3>')
            .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
            .replace(/^\* (.*$)/gim, '<li class="md-li">$1</li>')
            .replace(/```([\s\S]*?)```/gim, '<pre class="md-code"><code>$1</code></pre>')
            .replace(/\n/g, '<br>');
    }

    window.app = {
        checkCode: (idx, ans) => {
            const val = document.getElementById(`ide-${idx}`).value.trim().toLowerCase();
            const fb = document.getElementById(`fb-${idx}`);
            fb.classList.remove('hidden', 'success', 'error');

            // Basic fuzzy matching for educational purposes
            if (val.includes(ans.toLowerCase()) || (val.length > 3 && ans === 'ok')) {
                fb.innerHTML = '<span class="material-icons">check_circle</span> ¡Excelente trabajo! Código validado.';
                fb.classList.add('success');
            } else {
                fb.innerHTML = '<span class="material-icons">error</span> La respuesta no coincide. ¡Inténtalo de nuevo!';
                fb.classList.add('error');
            }
        },
        checkQuiz: (idx, sel, ans) => {
            const fb = document.getElementById(`fb-${idx}`);
            const options = document.querySelectorAll(`#ex-${idx} .quiz-option`);
            fb.classList.remove('hidden', 'success', 'error');

            options.forEach(opt => opt.classList.remove('selected-wrong', 'selected-right'));

            if (sel === ans) {
                fb.innerHTML = '<span class="material-icons">stars</span> ¡Correcto! Has comprendido el concepto.';
                fb.classList.add('success');
                options[sel].classList.add('selected-right');
            } else {
                fb.innerHTML = '<span class="material-icons">close</span> Respuesta incorrecta. Revisa el contenido arriba.';
                fb.classList.add('error');
                options[sel].classList.add('selected-wrong');
            }
        },
        nextLesson: () => {
            let nextT = currentTopicIndex;
            let nextL = currentLessonIndex + 1;

            if (nextL >= course.topics[nextT].lessons.length) {
                nextT++;
                nextL = 0;
            }

            if (nextT < course.topics.length) {
                const nextLesson = course.topics[nextT].lessons[nextL];
                const url = new URL(window.location);
                url.searchParams.set('lesson', nextLesson.id);
                window.history.pushState({}, '', url);
                handleRouting();
            } else {
                alert("¡Felicidades! Has completado el curso.");
            }
        }
    };

    init();
});
