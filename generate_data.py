import json

def get_prog_fundamentals():
    topics = [
        {
            "id": "intro",
            "title": "1. Introducción a la Programación",
            "lessons": [
                {
                    "id": "what-is-prog",
                    "title": "¿Qué es la Programación?",
                    "content": "La programación es el proceso de crear un conjunto de instrucciones que le dicen a una computadora cómo realizar una tarea. Se trata de resolver problemas mediante el pensamiento lógico.",
                    "exercises": [{"type": "quiz", "question": "¿Cuál es el objetivo principal de la programación?", "options": ["Comprar hardware", "Resolver problemas", "Ver videos"], "answer": 1}]
                }
            ]
        },
        {
            "id": "algorithms",
            "title": "2. Algoritmos y Lógica",
            "lessons": [
                {
                    "id": "algo-def",
                    "title": "Definición de Algoritmo",
                    "content": "Un algoritmo es una secuencia finita de pasos bien definidos, ordenados y finitos que permite realizar una actividad o resolver un problema.",
                    "pseudocode": "Inicio\n  Paso 1: Abrir la puerta\n  Paso 2: Salir\nFin",
                    "exercises": [{"type": "quiz", "question": "Un algoritmo debe ser...", "options": ["Infinito", "Ambiguo", "Finito y ordenado"], "answer": 2}]
                }
            ]
        },
        {
            "id": "variables",
            "title": "3. Variables y Constantes",
            "lessons": [
                {
                    "id": "vars",
                    "title": "Concepto de Variable",
                    "content": "Una variable es un espacio de memoria con un nombre que almacena un valor que puede cambiar durante la ejecución del programa.",
                    "code": "let puntuacion = 0;\npuntuacion = 10;",
                    "exercises": [{"type": "code", "question": "Declara una variable llamada 'nombre' y asígnale el valor 'Ana'.", "placeholder": "let ...", "answer": "let nombre = 'Ana';"}]
                }
            ]
        },
        {
            "id": "data-types",
            "title": "4. Tipos de Datos",
            "lessons": [
                {
                    "id": "types",
                    "title": "Tipos Primitivos",
                    "content": "Los lenguajes tienen tipos básicos: Enteros (int), Decimales (float/double), Cadenas (string) y Booleanos (true/false).",
                    "exercises": [{"type": "quiz", "question": "¿Qué tipo de dato usarías para 'verdadero'?", "options": ["String", "Boolean", "Integer"], "answer": 1}]
                }
            ]
        },
        {
            "id": "operators",
            "title": "5. Operadores y Expresiones",
            "lessons": [
                {
                    "id": "ops",
                    "title": "Operadores Aritméticos",
                    "content": "Permiten realizar cálculos: + (suma), - (resta), * (multiplicación), / (división), % (módulo).",
                    "code": "let total = 5 + 3 * 2; // total es 11",
                    "exercises": [{"type": "code", "question": "Calcula el resto de 10 dividido por 3 usando el operador módulo.", "placeholder": "let resto = ...", "answer": "let resto = 10 % 3;"}]
                }
            ]
        },
        {
            "id": "conditionals",
            "title": "6. Estructuras de Control: Condicionales",
            "lessons": [
                {
                    "id": "if-else",
                    "title": "La sentencia If",
                    "content": "Permite ejecutar un bloque de código solo si se cumple una condición.",
                    "code": "if (edad >= 18) {\n  console.log('Eres mayor de edad');\n} else {\n  console.log('Eres menor');\n}",
                    "exercises": [{"type": "quiz", "question": "¿Qué bloque se ejecuta si la condición es falsa?", "options": ["if", "else", "ambos"], "answer": 1}]
                }
            ]
        },
        {
            "id": "loops",
            "title": "7. Estructuras de Control: Bucles",
            "lessons": [
                {
                    "id": "for-loop",
                    "title": "Bucle For",
                    "content": "Se usa cuando conocemos de antemano el número de iteraciones.",
                    "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
                    "exercises": [{"type": "code", "question": "Escribe un bucle for que se ejecute 3 veces (de i=0 a i<3).", "placeholder": "for...", "answer": "for(let i=0; i<3; i++) {}"}]
                }
            ]
        },
        {
            "id": "functions",
            "title": "8. Funciones",
            "lessons": [
                {
                    "id": "func-def",
                    "title": "Declaración de Funciones",
                    "content": "Una función es un bloque de código diseñado para realizar una tarea específica que puede ser reutilizado.",
                    "code": "function saludar() {\n  return 'Hola';\n}",
                    "exercises": [{"type": "code", "question": "Crea una función llamada 'test' que no reciba parámetros.", "placeholder": "function ...", "answer": "function test() {}"}]
                }
            ]
        },
        {
            "id": "arrays",
            "title": "9. Arreglos y Listas",
            "lessons": [
                {
                    "id": "array-intro",
                    "title": "Introducción a Arreglos",
                    "content": "Un arreglo es una estructura que permite almacenar múltiples valores en una sola variable.",
                    "code": "let frutas = ['manzana', 'pera'];",
                    "exercises": [{"type": "quiz", "question": "¿Cuál es el índice del primer elemento en la mayoría de lenguajes?", "options": ["1", "0", "-1"], "answer": 1}]
                }
            ]
        },
        {
            "id": "debugging",
            "title": "10. Debugging",
            "lessons": [
                {
                    "id": "debug-def",
                    "title": "¿Qué es el Debugging?",
                    "content": "Es el proceso de encontrar y corregir errores (bugs) en el código.",
                    "exercises": [{"type": "quiz", "question": "A un error en el código se le conoce como:", "options": ["Feature", "Bug", "Script"], "answer": 1}]
                }
            ]
        }
    ]
    return topics

def get_english_course():
    classes = []
    topics_titles = [
        "Greetings & Introductions", "Numbers & Time", "Personal Information", "My Family",
        "Colors & Clothing", "The Home", "Food & Drink", "Daily Routine", "Hobbies & Sports",
        "Jobs & Occupations", "Places in Town", "Giving Directions", "Health & Body",
        "Weather & Seasons", "Travel & Holidays", "Shopping", "Past Events", "Future Plans",
        "Comparatives", "Course Review"
    ]
    for i, title in enumerate(topics_titles):
        classes.append({
            "id": f"eng-class-{i+1}",
            "title": f"Class {i+1}: {title}",
            "lessons": [
                {
                    "id": f"eng-lesson-{i+1}",
                    "title": "Explanation",
                    "content": f"Learning about {title}. This lesson covers the vocabulary and grammar necessary to master this topic.",
                    "exercises": [{"type": "quiz", "question": f"Is {title} important?", "options": ["No", "Yes", "Maybe"], "answer": 1}]
                }
            ]
        })
    return classes

data = [
    {
        "id": "programming",
        "title": "Programación",
        "icon": "code",
        "color": "#4CAF50",
        "topics": get_prog_fundamentals() + [
            {
                "id": "poo-adv",
                "title": "Programación Orientada a Objetos",
                "lessons": [
                    {"id": "encapsulation", "title": "Encapsulamiento", "content": "Ocultar los detalles internos de un objeto."},
                    {"id": "inheritance", "title": "Herencia", "content": "Una clase hereda propiedades de otra."},
                    {"id": "polymorphism", "title": "Polimorfismo", "content": "Diferentes clases pueden ser tratadas como instancias de una misma clase a través de interfaces."}
                ]
            },
            {
                "id": "data-struct",
                "title": "Estructuras de Datos",
                "lessons": [
                    {"id": "stacks-queues", "title": "Pilas y Colas", "content": "LIFO y FIFO."},
                    {"id": "linked-lists", "title": "Listas Enlazadas", "content": "Nodos que apuntan al siguiente."}
                ]
            }
        ]
    },
    {
        "id": "english",
        "title": "Inglés",
        "icon": "translate",
        "color": "#2196F3",
        "topics": get_english_course()
    },
    {
        "id": "databases",
        "title": "Bases de Datos",
        "icon": "storage",
        "color": "#FF9800",
        "topics": [
            {
                "id": "db-intro",
                "title": "Introducción a DB",
                "lessons": [{"id": "db-what", "title": "¿Qué es una BD?", "content": "Almacén de datos estructurados."}]
            },
            {
                "id": "normalization",
                "title": "Normalización",
                "lessons": [{"id": "norm-1", "title": "1NF, 2NF, 3NF", "content": "Proceso para evitar redundancia."}]
            },
            {
                "id": "sql-adv",
                "title": "SQL Avanzado",
                "lessons": [{"id": "joins", "title": "Joins", "content": "Combinar tablas.", "code": "SELECT * FROM A INNER JOIN B ON A.id = B.id"}]
            }
        ]
    }
]

print("const coursesData = " + json.dumps(data, indent=4, ensure_ascii=False) + ";")
