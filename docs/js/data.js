const coursesData = [
    {
        id: "programming",
        title: "Programación",
        icon: "code",
        color: "#4CAF50",
        topics: [
            {
                id: "prog-fundamentals",
                title: "Fundamentos de Programación",
                lessons: [
                    {
                        id: "intro-logic",
                        title: "Introducción a la Lógica",
                        content: "La programación se basa en la lógica. Un algoritmo es una serie de pasos ordenados para resolver un problema.",
                        pseudocode: "ALGORITMO Saludo\n  ESCRIBIR 'Hola Mundo'\nFIN ALGORITMO",
                        flowchart: "Inicio -> [Escribir 'Hola Mundo'] -> Fin",
                        code: "console.log('Hola Mundo');",
                        exercises: [
                            {
                                type: "quiz",
                                question: "¿Qué es un algoritmo?",
                                options: ["Un lenguaje", "Una serie de pasos ordenados", "Un tipo de computadora"],
                                answer: 1
                            }
                        ]
                    },
                    {
                        id: "variables-types",
                        title: "Variables y Tipos de Datos",
                        content: "Las variables son contenedores para almacenar datos. Existen tipos como Entero, Cadena, Booleano, etc.",
                        pseudocode: "ENTERO edad = 25\nCADENA nombre = 'Juan'",
                        code: "let edad = 25;\nlet nombre = 'Juan';",
                        exercises: [
                            {
                                type: "code",
                                question: "Declara una variable llamada 'x' con el valor 10 en JavaScript.",
                                placeholder: "let x = ...",
                                answer: "let x = 10;"
                            }
                        ]
                    }
                ]
            },
            {
                id: "prog-poo",
                title: "Programación Orientada a Objetos",
                lessons: [
                    {
                        id: "classes-objects",
                        title: "Clases y Objetos",
                        content: "Una clase es una plantilla. Un objeto es una instancia de esa clase.",
                        pseudocode: "CLASE Persona\n  ATRIBUTO nombre\n  METODO saludar()\n    ESCRIBIR 'Hola'\n  FIN METODO\nFIN CLASE",
                        code: "class Persona {\n  constructor(nombre) {\n    this.nombre = nombre;\n  }\n  saludar() {\n    console.log('Hola');\n  }\n}",
                        exercises: [
                            {
                                type: "quiz",
                                question: "¿Qué es una instancia de una clase?",
                                options: ["Un método", "Un objeto", "Un atributo"],
                                answer: 1
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "english",
        title: "Inglés",
        icon: "translate",
        color: "#2196F3",
        topics: [
            {
                id: "eng-basic",
                title: "Basic English (A1)",
                lessons: [
                    {
                        id: "greetings",
                        title: "Greetings and Introductions",
                        content: "Learn how to say hello and introduce yourself. Common phrases: 'Hello', 'My name is...', 'Nice to meet you'.",
                        exercises: [
                            {
                                type: "quiz",
                                question: "How do you say 'Hola' in English?",
                                options: ["Goodbye", "Hello", "Thanks"],
                                answer: 1
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "databases",
        title: "Bases de Datos",
        icon: "storage",
        color: "#FF9800",
        topics: [
            {
                id: "db-relational",
                title: "Modelo Relacional",
                lessons: [
                    {
                        id: "entity-relationship",
                        title: "Modelo Entidad-Relación",
                        content: "El modelo E-R representa los datos como entidades y sus relaciones.",
                        image: "https://upload.wikimedia.org/wikipedia/commons/7/72/ER_Diagram_Example.png",
                        exercises: [
                            {
                                type: "quiz",
                                question: "¿Qué representa un rectángulo en un diagrama E-R?",
                                options: ["Atributo", "Relación", "Entidad"],
                                answer: 2
                            }
                        ]
                    },
                    {
                        id: "sql-basics",
                        title: "Fundamentos de SQL",
                        content: "SQL (Structured Query Language) se usa para gestionar bases de datos relacionales.",
                        code: "SELECT * FROM usuarios WHERE edad > 18;",
                        exercises: [
                            {
                                type: "code",
                                question: "Escribe una consulta para obtener todos los campos de la tabla 'productos'.",
                                placeholder: "SELECT ...",
                                answer: "SELECT * FROM productos;"
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
