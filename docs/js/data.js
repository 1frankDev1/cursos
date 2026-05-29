const coursesData = [
    {
        "id": "programming",
        "title": "Programación",
        "icon": "code",
        "color": "#4CAF50",
        "topics": [
            {
                "id": "intro",
                "title": "1. Introducción y Lógica",
                "lessons": [
                    {
                        "id": "what-is-prog",
                        "title": "¿Qué es programar?",
                        "content": "Programar es el arte de darle instrucciones a una computadora para que resuelva un problema por nosotros. Imagina que es como darle una receta de cocina a alguien que nunca ha cocinado: debes ser extremadamente preciso y no saltarte ningún paso. Las computadoras son muy rápidas, pero no son listas; solo hacen exactamente lo que les dices.",
                        "exercises": [
                            {
                                "type": "quiz",
                                "question": "Si una computadora no entiende una instrucción, ¿qué sucede?",
                                "options": [
                                    "Lo adivina",
                                    "Lanza un error o se detiene",
                                    "Sigue adelante"
                                ],
                                "answer": 1
                            }
                        ]
                    },
                    {
                        "id": "thinking-logic",
                        "title": "Pensamiento Computacional",
                        "content": "Consiste en descomponer un problema grande en otros más pequeños (descomposición), encontrar patrones y diseñar pasos lógicos para resolverlo. Esto es más importante que el lenguaje de programación en sí. Sin lógica, el código es solo un montón de palabras sin sentido.",
                        "exercises": [
                            {
                                "type": "reorder",
                                "question": "Ordena los pasos para hacer café:",
                                "options": [
                                    "Verter agua",
                                    "Poner café en filtro",
                                    "Calentar agua",
                                    "Servir"
                                ],
                                "answer": [
                                    2,
                                    1,
                                    0,
                                    3
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id": "algorithms",
                "title": "2. Algoritmos en Detalle",
                "lessons": [
                    {
                        "id": "algo-concepts",
                        "title": "Características de un Algoritmo",
                        "content": "Un algoritmo debe ser: 1. Finito (tiene un principio y un fin), 2. Definido (siempre produce el mismo resultado bajo las mismas condiciones) y 3. Preciso (cada paso está claramente especificado). Los algoritmos están en todas partes, desde cómo Google busca información hasta cómo tu microondas calienta la comida.",
                        "pseudocode": "Algoritmo Suma\n  Escribir 'Dime A'\n  Leer A\n  Escribir 'Dime B'\n  Leer B\n  Resultado = A + B\n  Escribir Resultado\nFinAlgoritmo",
                        "exercises": [
                            {
                                "type": "quiz",
                                "question": "¿Qué significa que sea 'Finito'?",
                                "options": [
                                    "Que nunca termina",
                                    "Que tiene un número limitado de pasos",
                                    "Que es muy pequeño"
                                ],
                                "answer": 1
                            }
                        ]
                    },
                    {
                        "id": "flowcharts",
                        "title": "Diagramas de Flujo",
                        "content": "Un diagrama de flujo es la representación visual de un algoritmo. Utiliza símbolos estándar: el óvalo para el Inicio y el Fin, el rombo para tomar decisiones (Sí/No) y el rectángulo para acciones o procesos. Es la mejor herramienta para planear tu código antes de escribir una sola línea.",
                        "image": "https://upload.wikimedia.org/wikipedia/commons/9/91/Flowchart_en.png",
                        "exercises": [
                            {
                                "type": "quiz",
                                "question": "¿Qué figura se usa para una decisión (Sí/No)?",
                                "options": [
                                    "Rectángulo",
                                    "Rombo",
                                    "Círculo"
                                ],
                                "answer": 1
                            }
                        ]
                    }
                ]
            },
            {
                "id": "variables-const",
                "title": "3. El mundo de las Variables",
                "lessons": [
                    {
                        "id": "variables-concept",
                        "title": "Cajas de Memoria",
                        "content": "Imagina una variable como una caja con una etiqueta (su nombre) donde guardas algo (su valor). En programación, usamos variables para recordar datos que necesitaremos más tarde. El valor de una variable puede cambiar (variar) a medida que el programa avanza.",
                        "code": "let puntuacion = 100;\npuntuacion = 150; // Ahora el valor en la caja es 150",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Crea una variable llamada 'puntos' con el valor inicial de 50.",
                                "placeholder": "let ...",
                                "answer": "let puntos = 50;"
                            }
                        ]
                    },
                    {
                        "id": "constants",
                        "title": "Constantes: Lo que no cambia",
                        "content": "A veces queremos valores que permanezcan fijos durante toda la vida de nuestro programa, como el valor de PI, el nombre de un servidor o la tasa del IVA. Para esto usamos 'const'. Intentar cambiar una constante resultará en un error de ejecución.",
                        "code": "const PI = 3.1416;\n// PI = 4; // Esto causaría un error",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Declara una constante 'IVA' con el valor numérico 21.",
                                "placeholder": "const ...",
                                "answer": "const IVA = 21;"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "data-types",
                "title": "4. Tipos de Datos",
                "lessons": [
                    {
                        "id": "primitives",
                        "title": "Datos Primitivos",
                        "content": "Los datos pueden ser de diferentes naturalezas. Los más comunes son: 'Strings' (texto entre comillas), 'Numbers' (números con o sin decimales) y 'Booleans' (solo pueden ser true o false). Conocer el tipo de dato es crucial para saber qué operaciones podemos hacer con ellos.",
                        "exercises": [
                            {
                                "type": "match",
                                "question": "Une el dato con su tipo:",
                                "pairs": {
                                    "'Hola'": "String",
                                    "42": "Number",
                                    "true": "Boolean"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "id": "operators",
                "title": "5. Operadores",
                "lessons": [
                    {
                        "id": "arithmetic",
                        "title": "Operadores Aritméticos",
                        "content": "Son los símbolos que usamos para hacer cálculos: + para sumar, - para restar, * para multiplicar, / para dividir y % (módulo) para obtener el resto de una división. El módulo es muy útil para saber, por ejemplo, si un número es par o impar.",
                        "code": "let resto = 10 % 3; // El resto es 1",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Asigna a la variable 'x' el resultado de multiplicar 5 por 4.",
                                "placeholder": "let x = ...",
                                "answer": "let x = 5 * 4;"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "conditionals",
                "title": "6. Estructuras de Control: Condicionales",
                "lessons": [
                    {
                        "id": "if-statement",
                        "title": "La sentencia If-Else",
                        "content": "Los condicionales permiten que nuestro programa tome decisiones. Si la condición dentro del paréntesis es verdadera, se ejecuta el primer bloque de código; si es falsa, se ejecuta el bloque dentro del 'else'. Es como decir: 'Si llueve, lleva paraguas, si no, lleva gafas de sol'.",
                        "code": "if (edad >= 18) {\n  console.log('Puedes pasar');\n} else {\n  console.log('Eres menor');\n}",
                        "exercises": [
                            {
                                "type": "quiz",
                                "question": "¿Qué pasa si la condición del 'if' no se cumple?",
                                "options": [
                                    "Se salta el código",
                                    "Se ejecuta el 'else'",
                                    "El programa explota"
                                ],
                                "answer": 1
                            }
                        ]
                    }
                ]
            },
            {
                "id": "loops",
                "title": "7. Estructuras de Control: Bucles",
                "lessons": [
                    {
                        "id": "while-loop",
                        "title": "El Bucle While",
                        "content": "Un bucle repite un bloque de código mientras se cumpla una condición. El bucle 'while' es ideal cuando no sabemos exactamente cuántas veces necesitamos repetir algo, pero sabemos hasta cuándo.",
                        "code": "let contador = 0;\nwhile (contador < 3) {\n  console.log('Hola');\n  contador++;\n}",
                        "exercises": [
                            {
                                "type": "quiz",
                                "question": "¿Qué pasa si nunca cambiamos la condición dentro de un bucle?",
                                "options": [
                                    "Se detiene solo",
                                    "Se crea un bucle infinito",
                                    "Va más rápido"
                                ],
                                "answer": 1
                            }
                        ]
                    }
                ]
            },
            {
                "id": "functions",
                "title": "8. Funciones",
                "lessons": [
                    {
                        "id": "func-intro",
                        "title": "Funciones y Reutilización",
                        "content": "Una función es un conjunto de instrucciones agrupadas bajo un nombre que podemos invocar en cualquier momento. Nos ayudan a evitar repetir código y a hacer nuestros programas más legibles y organizados.",
                        "code": "function saludar(nombre) {\n  return 'Hola ' + nombre;\n}\nsaludar('Ana');",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Crea una función llamada 'miApp' que no haga nada (bloque vacío).",
                                "placeholder": "function ...",
                                "answer": "function miApp() {}"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "arrays",
                "title": "9. Arreglos y Listas",
                "lessons": [
                    {
                        "id": "array-basics",
                        "title": "Colecciones de Datos",
                        "content": "Un arreglo (array) es una lista ordenada de valores. En lugar de tener una variable para cada fruta, podemos tener un solo arreglo 'frutas'. Recuerda que en programación empezamos a contar desde 0.",
                        "code": "let frutas = ['Manzana', 'Pera', 'Plátano'];\nconsole.log(frutas[0]); // Muestra Manzana",
                        "exercises": [
                            {
                                "type": "quiz",
                                "question": "¿Cuál es el índice del primer elemento de un array?",
                                "options": [
                                    "1",
                                    "0",
                                    "A"
                                ],
                                "answer": 1
                            }
                        ]
                    }
                ]
            },
            {
                "id": "objects",
                "title": "10. Objetos",
                "lessons": [
                    {
                        "id": "obj-intro",
                        "title": "Modelando la Realidad",
                        "content": "Los objetos nos permiten agrupar datos y comportamientos relacionados. Un objeto 'Coche' puede tener propiedades como 'color', 'marca' y 'modelo'. Es la base de la Programación Orientada a Objetos.",
                        "code": "let coche = {\n  marca: 'Toyota',\n  color: 'Rojo'\n};",
                        "exercises": [
                            {
                                "type": "quiz",
                                "question": "¿Cómo se llaman las características de un objeto?",
                                "options": [
                                    "Funciones",
                                    "Propiedades",
                                    "Arrays"
                                ],
                                "answer": 1
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": "english",
        "title": "Inglés",
        "icon": "translate",
        "color": "#2196F3",
        "topics": [
            {
                "id": "eng-class-1",
                "title": "Clase 1: Greetings",
                "lessons": [
                    {
                        "id": "eng-lesson-1-1",
                        "title": "Vocabulary: Greetings",
                        "content": "En esta clase aprenderemos el vocabulario esencial para hablar sobre Greetings. La pronunciación es fundamental, así que intenta decir las palabras en voz alta mientras las lees.",
                        "exercises": [
                            {
                                "type": "match",
                                "question": "Une las palabras de Greetings con su traducción:",
                                "pairs": {
                                    "Hello": "Hola",
                                    "Apple": "Manzana",
                                    "Dog": "Perro"
                                }
                            }
                        ]
                    },
                    {
                        "id": "eng-lesson-1-2",
                        "title": "Grammar: Using Greetings",
                        "content": "Ahora que conoces las palabras, vamos a ver cómo construir frases reales usando el tema de Greetings. Presta atención al orden de las palabras.",
                        "exercises": [
                            {
                                "type": "sentence",
                                "question": "Traduce la frase: 'Hello, how are you?'",
                                "words": [
                                    "Hello,",
                                    "how",
                                    "are",
                                    "you?"
                                ],
                                "answer": "Hello, how are you?"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "eng-class-2",
                "title": "Clase 2: Colors",
                "lessons": [
                    {
                        "id": "eng-lesson-2-1",
                        "title": "Vocabulary: Colors",
                        "content": "En esta clase aprenderemos el vocabulario esencial para hablar sobre Colors. La pronunciación es fundamental, así que intenta decir las palabras en voz alta mientras las lees.",
                        "exercises": [
                            {
                                "type": "match",
                                "question": "Une las palabras de Colors con su traducción:",
                                "pairs": {
                                    "Hello": "Hola",
                                    "Apple": "Manzana",
                                    "Dog": "Perro"
                                }
                            }
                        ]
                    },
                    {
                        "id": "eng-lesson-2-2",
                        "title": "Grammar: Using Colors",
                        "content": "Ahora que conoces las palabras, vamos a ver cómo construir frases reales usando el tema de Colors. Presta atención al orden de las palabras.",
                        "exercises": [
                            {
                                "type": "sentence",
                                "question": "Traduce la frase: 'Hello, how are you?'",
                                "words": [
                                    "Hello,",
                                    "how",
                                    "are",
                                    "you?"
                                ],
                                "answer": "Hello, how are you?"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "eng-class-3",
                "title": "Clase 3: Family",
                "lessons": [
                    {
                        "id": "eng-lesson-3-1",
                        "title": "Vocabulary: Family",
                        "content": "En esta clase aprenderemos el vocabulario esencial para hablar sobre Family. La pronunciación es fundamental, así que intenta decir las palabras en voz alta mientras las lees.",
                        "exercises": [
                            {
                                "type": "match",
                                "question": "Une las palabras de Family con su traducción:",
                                "pairs": {
                                    "Hello": "Hola",
                                    "Apple": "Manzana",
                                    "Dog": "Perro"
                                }
                            }
                        ]
                    },
                    {
                        "id": "eng-lesson-3-2",
                        "title": "Grammar: Using Family",
                        "content": "Ahora que conoces las palabras, vamos a ver cómo construir frases reales usando el tema de Family. Presta atención al orden de las palabras.",
                        "exercises": [
                            {
                                "type": "sentence",
                                "question": "Traduce la frase: 'Hello, how are you?'",
                                "words": [
                                    "Hello,",
                                    "how",
                                    "are",
                                    "you?"
                                ],
                                "answer": "Hello, how are you?"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "eng-class-4",
                "title": "Clase 4: Numbers",
                "lessons": [
                    {
                        "id": "eng-lesson-4-1",
                        "title": "Vocabulary: Numbers",
                        "content": "En esta clase aprenderemos el vocabulario esencial para hablar sobre Numbers. La pronunciación es fundamental, así que intenta decir las palabras en voz alta mientras las lees.",
                        "exercises": [
                            {
                                "type": "match",
                                "question": "Une las palabras de Numbers con su traducción:",
                                "pairs": {
                                    "Hello": "Hola",
                                    "Apple": "Manzana",
                                    "Dog": "Perro"
                                }
                            }
                        ]
                    },
                    {
                        "id": "eng-lesson-4-2",
                        "title": "Grammar: Using Numbers",
                        "content": "Ahora que conoces las palabras, vamos a ver cómo construir frases reales usando el tema de Numbers. Presta atención al orden de las palabras.",
                        "exercises": [
                            {
                                "type": "sentence",
                                "question": "Traduce la frase: 'Hello, how are you?'",
                                "words": [
                                    "Hello,",
                                    "how",
                                    "are",
                                    "you?"
                                ],
                                "answer": "Hello, how are you?"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "eng-class-5",
                "title": "Clase 5: Time",
                "lessons": [
                    {
                        "id": "eng-lesson-5-1",
                        "title": "Vocabulary: Time",
                        "content": "En esta clase aprenderemos el vocabulario esencial para hablar sobre Time. La pronunciación es fundamental, así que intenta decir las palabras en voz alta mientras las lees.",
                        "exercises": [
                            {
                                "type": "match",
                                "question": "Une las palabras de Time con su traducción:",
                                "pairs": {
                                    "Hello": "Hola",
                                    "Apple": "Manzana",
                                    "Dog": "Perro"
                                }
                            }
                        ]
                    },
                    {
                        "id": "eng-lesson-5-2",
                        "title": "Grammar: Using Time",
                        "content": "Ahora que conoces las palabras, vamos a ver cómo construir frases reales usando el tema de Time. Presta atención al orden de las palabras.",
                        "exercises": [
                            {
                                "type": "sentence",
                                "question": "Traduce la frase: 'Hello, how are you?'",
                                "words": [
                                    "Hello,",
                                    "how",
                                    "are",
                                    "you?"
                                ],
                                "answer": "Hello, how are you?"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "eng-class-6",
                "title": "Clase 6: Daily Routine",
                "lessons": [
                    {
                        "id": "eng-lesson-6-1",
                        "title": "Vocabulary: Daily Routine",
                        "content": "En esta clase aprenderemos el vocabulario esencial para hablar sobre Daily Routine. La pronunciación es fundamental, así que intenta decir las palabras en voz alta mientras las lees.",
                        "exercises": [
                            {
                                "type": "match",
                                "question": "Une las palabras de Daily Routine con su traducción:",
                                "pairs": {
                                    "Hello": "Hola",
                                    "Apple": "Manzana",
                                    "Dog": "Perro"
                                }
                            }
                        ]
                    },
                    {
                        "id": "eng-lesson-6-2",
                        "title": "Grammar: Using Daily Routine",
                        "content": "Ahora que conoces las palabras, vamos a ver cómo construir frases reales usando el tema de Daily Routine. Presta atención al orden de las palabras.",
                        "exercises": [
                            {
                                "type": "sentence",
                                "question": "Traduce la frase: 'Hello, how are you?'",
                                "words": [
                                    "Hello,",
                                    "how",
                                    "are",
                                    "you?"
                                ],
                                "answer": "Hello, how are you?"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "eng-class-7",
                "title": "Clase 7: Food",
                "lessons": [
                    {
                        "id": "eng-lesson-7-1",
                        "title": "Vocabulary: Food",
                        "content": "En esta clase aprenderemos el vocabulario esencial para hablar sobre Food. La pronunciación es fundamental, así que intenta decir las palabras en voz alta mientras las lees.",
                        "exercises": [
                            {
                                "type": "match",
                                "question": "Une las palabras de Food con su traducción:",
                                "pairs": {
                                    "Hello": "Hola",
                                    "Apple": "Manzana",
                                    "Dog": "Perro"
                                }
                            }
                        ]
                    },
                    {
                        "id": "eng-lesson-7-2",
                        "title": "Grammar: Using Food",
                        "content": "Ahora que conoces las palabras, vamos a ver cómo construir frases reales usando el tema de Food. Presta atención al orden de las palabras.",
                        "exercises": [
                            {
                                "type": "sentence",
                                "question": "Traduce la frase: 'Hello, how are you?'",
                                "words": [
                                    "Hello,",
                                    "how",
                                    "are",
                                    "you?"
                                ],
                                "answer": "Hello, how are you?"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "eng-class-8",
                "title": "Clase 8: Hobbies",
                "lessons": [
                    {
                        "id": "eng-lesson-8-1",
                        "title": "Vocabulary: Hobbies",
                        "content": "En esta clase aprenderemos el vocabulario esencial para hablar sobre Hobbies. La pronunciación es fundamental, así que intenta decir las palabras en voz alta mientras las lees.",
                        "exercises": [
                            {
                                "type": "match",
                                "question": "Une las palabras de Hobbies con su traducción:",
                                "pairs": {
                                    "Hello": "Hola",
                                    "Apple": "Manzana",
                                    "Dog": "Perro"
                                }
                            }
                        ]
                    },
                    {
                        "id": "eng-lesson-8-2",
                        "title": "Grammar: Using Hobbies",
                        "content": "Ahora que conoces las palabras, vamos a ver cómo construir frases reales usando el tema de Hobbies. Presta atención al orden de las palabras.",
                        "exercises": [
                            {
                                "type": "sentence",
                                "question": "Traduce la frase: 'Hello, how are you?'",
                                "words": [
                                    "Hello,",
                                    "how",
                                    "are",
                                    "you?"
                                ],
                                "answer": "Hello, how are you?"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "eng-class-9",
                "title": "Clase 9: Animals",
                "lessons": [
                    {
                        "id": "eng-lesson-9-1",
                        "title": "Vocabulary: Animals",
                        "content": "En esta clase aprenderemos el vocabulario esencial para hablar sobre Animals. La pronunciación es fundamental, así que intenta decir las palabras en voz alta mientras las lees.",
                        "exercises": [
                            {
                                "type": "match",
                                "question": "Une las palabras de Animals con su traducción:",
                                "pairs": {
                                    "Hello": "Hola",
                                    "Apple": "Manzana",
                                    "Dog": "Perro"
                                }
                            }
                        ]
                    },
                    {
                        "id": "eng-lesson-9-2",
                        "title": "Grammar: Using Animals",
                        "content": "Ahora que conoces las palabras, vamos a ver cómo construir frases reales usando el tema de Animals. Presta atención al orden de las palabras.",
                        "exercises": [
                            {
                                "type": "sentence",
                                "question": "Traduce la frase: 'Hello, how are you?'",
                                "words": [
                                    "Hello,",
                                    "how",
                                    "are",
                                    "you?"
                                ],
                                "answer": "Hello, how are you?"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "eng-class-10",
                "title": "Clase 10: Weather",
                "lessons": [
                    {
                        "id": "eng-lesson-10-1",
                        "title": "Vocabulary: Weather",
                        "content": "En esta clase aprenderemos el vocabulario esencial para hablar sobre Weather. La pronunciación es fundamental, así que intenta decir las palabras en voz alta mientras las lees.",
                        "exercises": [
                            {
                                "type": "match",
                                "question": "Une las palabras de Weather con su traducción:",
                                "pairs": {
                                    "Hello": "Hola",
                                    "Apple": "Manzana",
                                    "Dog": "Perro"
                                }
                            }
                        ]
                    },
                    {
                        "id": "eng-lesson-10-2",
                        "title": "Grammar: Using Weather",
                        "content": "Ahora que conoces las palabras, vamos a ver cómo construir frases reales usando el tema de Weather. Presta atención al orden de las palabras.",
                        "exercises": [
                            {
                                "type": "sentence",
                                "question": "Traduce la frase: 'Hello, how are you?'",
                                "words": [
                                    "Hello,",
                                    "how",
                                    "are",
                                    "you?"
                                ],
                                "answer": "Hello, how are you?"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "eng-class-11",
                "title": "Clase 11: Clothes",
                "lessons": [
                    {
                        "id": "eng-lesson-11-1",
                        "title": "Vocabulary: Clothes",
                        "content": "En esta clase aprenderemos el vocabulario esencial para hablar sobre Clothes. La pronunciación es fundamental, así que intenta decir las palabras en voz alta mientras las lees.",
                        "exercises": [
                            {
                                "type": "match",
                                "question": "Une las palabras de Clothes con su traducción:",
                                "pairs": {
                                    "Hello": "Hola",
                                    "Apple": "Manzana",
                                    "Dog": "Perro"
                                }
                            }
                        ]
                    },
                    {
                        "id": "eng-lesson-11-2",
                        "title": "Grammar: Using Clothes",
                        "content": "Ahora que conoces las palabras, vamos a ver cómo construir frases reales usando el tema de Clothes. Presta atención al orden de las palabras.",
                        "exercises": [
                            {
                                "type": "sentence",
                                "question": "Traduce la frase: 'Hello, how are you?'",
                                "words": [
                                    "Hello,",
                                    "how",
                                    "are",
                                    "you?"
                                ],
                                "answer": "Hello, how are you?"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "eng-class-12",
                "title": "Clase 12: House",
                "lessons": [
                    {
                        "id": "eng-lesson-12-1",
                        "title": "Vocabulary: House",
                        "content": "En esta clase aprenderemos el vocabulario esencial para hablar sobre House. La pronunciación es fundamental, así que intenta decir las palabras en voz alta mientras las lees.",
                        "exercises": [
                            {
                                "type": "match",
                                "question": "Une las palabras de House con su traducción:",
                                "pairs": {
                                    "Hello": "Hola",
                                    "Apple": "Manzana",
                                    "Dog": "Perro"
                                }
                            }
                        ]
                    },
                    {
                        "id": "eng-lesson-12-2",
                        "title": "Grammar: Using House",
                        "content": "Ahora que conoces las palabras, vamos a ver cómo construir frases reales usando el tema de House. Presta atención al orden de las palabras.",
                        "exercises": [
                            {
                                "type": "sentence",
                                "question": "Traduce la frase: 'Hello, how are you?'",
                                "words": [
                                    "Hello,",
                                    "how",
                                    "are",
                                    "you?"
                                ],
                                "answer": "Hello, how are you?"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "eng-class-13",
                "title": "Clase 13: City",
                "lessons": [
                    {
                        "id": "eng-lesson-13-1",
                        "title": "Vocabulary: City",
                        "content": "En esta clase aprenderemos el vocabulario esencial para hablar sobre City. La pronunciación es fundamental, así que intenta decir las palabras en voz alta mientras las lees.",
                        "exercises": [
                            {
                                "type": "match",
                                "question": "Une las palabras de City con su traducción:",
                                "pairs": {
                                    "Hello": "Hola",
                                    "Apple": "Manzana",
                                    "Dog": "Perro"
                                }
                            }
                        ]
                    },
                    {
                        "id": "eng-lesson-13-2",
                        "title": "Grammar: Using City",
                        "content": "Ahora que conoces las palabras, vamos a ver cómo construir frases reales usando el tema de City. Presta atención al orden de las palabras.",
                        "exercises": [
                            {
                                "type": "sentence",
                                "question": "Traduce la frase: 'Hello, how are you?'",
                                "words": [
                                    "Hello,",
                                    "how",
                                    "are",
                                    "you?"
                                ],
                                "answer": "Hello, how are you?"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "eng-class-14",
                "title": "Clase 14: Transport",
                "lessons": [
                    {
                        "id": "eng-lesson-14-1",
                        "title": "Vocabulary: Transport",
                        "content": "En esta clase aprenderemos el vocabulario esencial para hablar sobre Transport. La pronunciación es fundamental, así que intenta decir las palabras en voz alta mientras las lees.",
                        "exercises": [
                            {
                                "type": "match",
                                "question": "Une las palabras de Transport con su traducción:",
                                "pairs": {
                                    "Hello": "Hola",
                                    "Apple": "Manzana",
                                    "Dog": "Perro"
                                }
                            }
                        ]
                    },
                    {
                        "id": "eng-lesson-14-2",
                        "title": "Grammar: Using Transport",
                        "content": "Ahora que conoces las palabras, vamos a ver cómo construir frases reales usando el tema de Transport. Presta atención al orden de las palabras.",
                        "exercises": [
                            {
                                "type": "sentence",
                                "question": "Traduce la frase: 'Hello, how are you?'",
                                "words": [
                                    "Hello,",
                                    "how",
                                    "are",
                                    "you?"
                                ],
                                "answer": "Hello, how are you?"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "eng-class-15",
                "title": "Clase 15: Health",
                "lessons": [
                    {
                        "id": "eng-lesson-15-1",
                        "title": "Vocabulary: Health",
                        "content": "En esta clase aprenderemos el vocabulario esencial para hablar sobre Health. La pronunciación es fundamental, así que intenta decir las palabras en voz alta mientras las lees.",
                        "exercises": [
                            {
                                "type": "match",
                                "question": "Une las palabras de Health con su traducción:",
                                "pairs": {
                                    "Hello": "Hola",
                                    "Apple": "Manzana",
                                    "Dog": "Perro"
                                }
                            }
                        ]
                    },
                    {
                        "id": "eng-lesson-15-2",
                        "title": "Grammar: Using Health",
                        "content": "Ahora que conoces las palabras, vamos a ver cómo construir frases reales usando el tema de Health. Presta atención al orden de las palabras.",
                        "exercises": [
                            {
                                "type": "sentence",
                                "question": "Traduce la frase: 'Hello, how are you?'",
                                "words": [
                                    "Hello,",
                                    "how",
                                    "are",
                                    "you?"
                                ],
                                "answer": "Hello, how are you?"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "eng-class-16",
                "title": "Clase 16: Work",
                "lessons": [
                    {
                        "id": "eng-lesson-16-1",
                        "title": "Vocabulary: Work",
                        "content": "En esta clase aprenderemos el vocabulario esencial para hablar sobre Work. La pronunciación es fundamental, así que intenta decir las palabras en voz alta mientras las lees.",
                        "exercises": [
                            {
                                "type": "match",
                                "question": "Une las palabras de Work con su traducción:",
                                "pairs": {
                                    "Hello": "Hola",
                                    "Apple": "Manzana",
                                    "Dog": "Perro"
                                }
                            }
                        ]
                    },
                    {
                        "id": "eng-lesson-16-2",
                        "title": "Grammar: Using Work",
                        "content": "Ahora que conoces las palabras, vamos a ver cómo construir frases reales usando el tema de Work. Presta atención al orden de las palabras.",
                        "exercises": [
                            {
                                "type": "sentence",
                                "question": "Traduce la frase: 'Hello, how are you?'",
                                "words": [
                                    "Hello,",
                                    "how",
                                    "are",
                                    "you?"
                                ],
                                "answer": "Hello, how are you?"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "eng-class-17",
                "title": "Clase 17: Past",
                "lessons": [
                    {
                        "id": "eng-lesson-17-1",
                        "title": "Vocabulary: Past",
                        "content": "En esta clase aprenderemos el vocabulario esencial para hablar sobre Past. La pronunciación es fundamental, así que intenta decir las palabras en voz alta mientras las lees.",
                        "exercises": [
                            {
                                "type": "match",
                                "question": "Une las palabras de Past con su traducción:",
                                "pairs": {
                                    "Hello": "Hola",
                                    "Apple": "Manzana",
                                    "Dog": "Perro"
                                }
                            }
                        ]
                    },
                    {
                        "id": "eng-lesson-17-2",
                        "title": "Grammar: Using Past",
                        "content": "Ahora que conoces las palabras, vamos a ver cómo construir frases reales usando el tema de Past. Presta atención al orden de las palabras.",
                        "exercises": [
                            {
                                "type": "sentence",
                                "question": "Traduce la frase: 'Hello, how are you?'",
                                "words": [
                                    "Hello,",
                                    "how",
                                    "are",
                                    "you?"
                                ],
                                "answer": "Hello, how are you?"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "eng-class-18",
                "title": "Clase 18: Future",
                "lessons": [
                    {
                        "id": "eng-lesson-18-1",
                        "title": "Vocabulary: Future",
                        "content": "En esta clase aprenderemos el vocabulario esencial para hablar sobre Future. La pronunciación es fundamental, así que intenta decir las palabras en voz alta mientras las lees.",
                        "exercises": [
                            {
                                "type": "match",
                                "question": "Une las palabras de Future con su traducción:",
                                "pairs": {
                                    "Hello": "Hola",
                                    "Apple": "Manzana",
                                    "Dog": "Perro"
                                }
                            }
                        ]
                    },
                    {
                        "id": "eng-lesson-18-2",
                        "title": "Grammar: Using Future",
                        "content": "Ahora que conoces las palabras, vamos a ver cómo construir frases reales usando el tema de Future. Presta atención al orden de las palabras.",
                        "exercises": [
                            {
                                "type": "sentence",
                                "question": "Traduce la frase: 'Hello, how are you?'",
                                "words": [
                                    "Hello,",
                                    "how",
                                    "are",
                                    "you?"
                                ],
                                "answer": "Hello, how are you?"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "eng-class-19",
                "title": "Clase 19: Conditionals",
                "lessons": [
                    {
                        "id": "eng-lesson-19-1",
                        "title": "Vocabulary: Conditionals",
                        "content": "En esta clase aprenderemos el vocabulario esencial para hablar sobre Conditionals. La pronunciación es fundamental, así que intenta decir las palabras en voz alta mientras las lees.",
                        "exercises": [
                            {
                                "type": "match",
                                "question": "Une las palabras de Conditionals con su traducción:",
                                "pairs": {
                                    "Hello": "Hola",
                                    "Apple": "Manzana",
                                    "Dog": "Perro"
                                }
                            }
                        ]
                    },
                    {
                        "id": "eng-lesson-19-2",
                        "title": "Grammar: Using Conditionals",
                        "content": "Ahora que conoces las palabras, vamos a ver cómo construir frases reales usando el tema de Conditionals. Presta atención al orden de las palabras.",
                        "exercises": [
                            {
                                "type": "sentence",
                                "question": "Traduce la frase: 'Hello, how are you?'",
                                "words": [
                                    "Hello,",
                                    "how",
                                    "are",
                                    "you?"
                                ],
                                "answer": "Hello, how are you?"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "eng-class-20",
                "title": "Clase 20: Final Review",
                "lessons": [
                    {
                        "id": "eng-lesson-20-1",
                        "title": "Vocabulary: Final Review",
                        "content": "En esta clase aprenderemos el vocabulario esencial para hablar sobre Final Review. La pronunciación es fundamental, así que intenta decir las palabras en voz alta mientras las lees.",
                        "exercises": [
                            {
                                "type": "match",
                                "question": "Une las palabras de Final Review con su traducción:",
                                "pairs": {
                                    "Hello": "Hola",
                                    "Apple": "Manzana",
                                    "Dog": "Perro"
                                }
                            }
                        ]
                    },
                    {
                        "id": "eng-lesson-20-2",
                        "title": "Grammar: Using Final Review",
                        "content": "Ahora que conoces las palabras, vamos a ver cómo construir frases reales usando el tema de Final Review. Presta atención al orden de las palabras.",
                        "exercises": [
                            {
                                "type": "sentence",
                                "question": "Traduce la frase: 'Hello, how are you?'",
                                "words": [
                                    "Hello,",
                                    "how",
                                    "are",
                                    "you?"
                                ],
                                "answer": "Hello, how are you?"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": "databases",
        "title": "Bases de Datos",
        "icon": "storage",
        "color": "#FF9800",
        "topics": [
            {
                "id": "db-intro",
                "title": "1. Introducción a Bases de Datos",
                "lessons": [
                    {
                        "id": "db-history",
                        "title": "Historia y Necesidad",
                        "content": "Una Base de Datos es un sistema diseñado para almacenar y gestionar grandes volúmenes de información de forma organizada. A diferencia de un simple archivo de texto, una BD nos permite buscar, filtrar y relacionar datos en milisegundos. Es el cerebro de cualquier aplicación moderna como Facebook, Amazon o Netflix.",
                        "exercises": [
                            {
                                "type": "quiz",
                                "question": "¿Por qué usamos BD en lugar de archivos normales?",
                                "options": [
                                    "Porque son gratis",
                                    "Por integridad, seguridad y velocidad",
                                    "Porque son más fáciles de escribir"
                                ],
                                "answer": 1
                            }
                        ]
                    }
                ]
            },
            {
                "id": "db-er",
                "title": "2. Modelo Entidad Relación (E-R)",
                "lessons": [
                    {
                        "id": "er-elements",
                        "title": "Entidades, Atributos y Relaciones",
                        "content": "Para diseñar una base de datos, primero creamos un mapa conceptual. Una 'Entidad' es un objeto (Usuario, Producto). Un 'Atributo' es una característica (Nombre, Precio). Una 'Relación' es cómo se conectan (Un Usuario 'Compra' un Producto).",
                        "exercises": [
                            {
                                "type": "match",
                                "question": "Relaciona los conceptos del modelo E-R:",
                                "pairs": {
                                    "Usuario": "Entidad",
                                    "Email": "Atributo",
                                    "Tiene": "Relación"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "id": "sql-basics",
                "title": "3. SQL: El Lenguaje de las BD",
                "lessons": [
                    {
                        "id": "select-from",
                        "title": "SELECT y FROM",
                        "content": "SQL (Structured Query Language) es el idioma universal para hablar con las bases de datos relacionales. Con SELECT elegimos qué columnas queremos ver y con FROM indicamos de qué tabla provienen los datos.",
                        "code": "SELECT nombre, email FROM usuarios;",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Escribe la consulta para traer todas las columnas (*) de la tabla llamada 'productos'.",
                                "placeholder": "...",
                                "answer": "SELECT * FROM productos;"
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
