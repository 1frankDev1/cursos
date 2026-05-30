const coursesData = [
    {
        "id": "programming",
        "title": "Programación",
        "icon": "code",
        "color": "#4CAF50",
        "topics": [
            {
                "id": "prog-fund",
                "title": "Fundamentos de Programación",
                "lessons": [
                    {
                        "id": "p-l1",
                        "title": "Intro",
                        "content": "Variables y tipos.",
                        "exercises": []
                    }
                ]
            },
            {
                "id": "prog-poo",
                "title": "Programación Orientada a Objetos",
                "lessons": [
                    {
                        "id": "p-l2",
                        "title": "Clases",
                        "content": "Objetos.",
                        "exercises": []
                    }
                ]
            },
            {
                "id": "algo-full",
                "title": "Curso Maestro de Algoritmos",
                "lessons": [
                    {
                        "id": "algo-1",
                        "title": "¿Qué es un algoritmo?",
                        "content": "### MÓDULO 1 — FUNDAMENTOS\n\nUn algoritmo es una serie de pasos ordenados para resolver un problema.\n\nEjemplos cotidianos:\n* Seguir una receta.\n* Atarse los zapatos.\n* Buscar un contacto en el celular.\n\n**Características de un buen algoritmo**\n1. Debe tener pasos claros.\n2. Debe terminar.\n3. Debe resolver el problema.\n4. Debe ser eficiente.",
                        "details": "### Ejemplo intuitivo\nProblema: Encontrar el número mayor entre 3 números.\nAlgoritmo:\n1. Guardar el primer número como mayor.\n2. Comparar con el segundo.\n3. Si el segundo es mayor, actualizar.\n4. Comparar con el tercero.\n5. Mostrar el mayor.",
                        "pseudocode": "INICIO\nleer a, b, c\nmayor = a\nsi b > mayor\n   mayor = b\nsi c > mayor\n   mayor = c\nmostrar mayor\nFIN",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 1: Escribe tu algoritmo.",
                                "answer": "ok"
                            }
                        ]
                    },
                    {
                        "id": "algo-2",
                        "title": "Variables y tipos de datos",
                        "content": "### MÓDULO 1 — FUNDAMENTOS\n\n¿Qué es una variable?\nUna variable es un espacio donde almacenamos información.\n\nEjemplo:\n```text\nedad = 20\nnombre = 'Ana'\n```",
                        "details": "### Tipos de datos\n* **Enteros:** 5, -10, 100\n* **Decimales:** 3.14, 9.99\n* **Texto:** 'Hola'\n* **Booleanos:** Verdadero, Falso",
                        "pseudocode": "nombre = 'Luis'\nedad = 25\naltura = 1.75\nes_estudiante = Verdadero",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 2: Escribe tu algoritmo.",
                                "answer": "ok"
                            }
                        ]
                    },
                    {
                        "id": "algo-3",
                        "title": "Operadores",
                        "content": "### MÓDULO 1 — FUNDAMENTOS\n\nOperadores matemáticos (+, -, *, /, %), relacionales (>, <, >=, <=, ==, !=) y lógicos (AND, OR, NOT).",
                        "details": "### Ejemplo\n```text\nedad = 20\nsi edad >= 18\n   mostrar 'Mayor de edad'\n```",
                        "pseudocode": "",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 3: Escribe tu algoritmo.",
                                "answer": "ok"
                            }
                        ]
                    },
                    {
                        "id": "algo-4",
                        "title": "Condicionales",
                        "content": "### MÓDULO 2 — CONTROL DE FLUJO\n\n¿Qué son?\nPermiten tomar decisiones.\n\nEstructura:\n```text\nsi condición\n   acción\nsi no\n   otra acción\n```",
                        "details": "### Ejemplo\n```text\nsi temperatura > 30\n   mostrar 'Hace calor'\nsi no\n   mostrar 'No hace calor'\n```",
                        "pseudocode": "",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 4: Escribe tu algoritmo.",
                                "answer": "ok"
                            }
                        ]
                    },
                    {
                        "id": "algo-5",
                        "title": "Bucles",
                        "content": "### MÓDULO 2 — CONTROL DE FLUJO\n\n¿Qué son?\nPermiten repetir acciones.\n\nBucle FOR:\n```text\npara i desde 1 hasta 5\n   mostrar i\n```\n\nBucle WHILE:\n```text\nmientras contador < 5\n   mostrar contador\n```",
                        "details": "### Ejemplo intuitivo\nImagínate contando escalones:\n1. Subes.\n2. Aumentas contador.\n3. Revisas si terminaste.",
                        "pseudocode": "",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 5: Escribe tu algoritmo.",
                                "answer": "ok"
                            }
                        ]
                    },
                    {
                        "id": "algo-6",
                        "title": "Big O",
                        "content": "### MÓDULO 3 — COMPLEJIDAD ALGORÍTMICA\n\n¿Qué es Big O?\nMide qué tan eficiente es un algoritmo.\n\nEjemplo:\nBuscar una carta:\n* Revisar una por una -> lento.\n* Buscar en un mazo ordenado -> rápido.",
                        "details": "### Tipos de complejidad\n* O(1): Tiempo constante.\n* O(n): Lineal.\n* O(n²): Dos bucles anidados.\n* O(log n): Divide el problema.",
                        "pseudocode": "",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 6: Escribe tu algoritmo.",
                                "answer": "ok"
                            }
                        ]
                    },
                    {
                        "id": "algo-7",
                        "title": "Arreglos",
                        "content": "### MÓDULO 4 — ESTRUCTURAS DE DATOS\n\n¿Qué son?\nColecciones de elementos.\n```text\n[5, 10, 15, 20]\n```",
                        "details": "### Acceso\narreglo[0]\n\n**Ventajas:** Acceso rápido.\n**Desventajas:** Tamaño fijo en algunos lenguajes.",
                        "pseudocode": "",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 7: Escribe tu algoritmo.",
                                "answer": "ok"
                            }
                        ]
                    },
                    {
                        "id": "algo-8",
                        "title": "Listas enlazadas",
                        "content": "### MÓDULO 4 — ESTRUCTURAS DE DATOS\n\nIdea intuitiva: Cada elemento apunta al siguiente.\n```text\n[5] -> [10] -> [20]\n```",
                        "details": "**Ventajas:** Inserciones rápidas.\n**Desventajas:** Acceso lento.",
                        "pseudocode": "",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 8: Escribe tu algoritmo.",
                                "answer": "ok"
                            }
                        ]
                    },
                    {
                        "id": "algo-9",
                        "title": "Pilas y colas",
                        "content": "### MÓDULO 4 — ESTRUCTURAS DE DATOS\n\n**Pilas (Stack)**: Último en entrar, primero en salir. Ejemplo: Pila de platos.\n**Colas (Queue)**: Primero en entrar, primero en salir. Ejemplo: Fila del supermercado.",
                        "details": "Operaciones Pila: push, pop, top.\nOperaciones Cola: enqueue, dequeue.",
                        "pseudocode": "",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 9: Escribe tu algoritmo.",
                                "answer": "ok"
                            }
                        ]
                    },
                    {
                        "id": "algo-10",
                        "title": "Búsqueda lineal",
                        "content": "### MÓDULO 5 — ALGORITMOS DE BÚSQUEDA\n\nIdea: Revisar elemento por elemento.",
                        "details": "### Pseudocódigo\n```text\npara cada elemento\n   si elemento == objetivo\n      encontrado\n```\nComplejidad: O(n)",
                        "pseudocode": "",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 10: Escribe tu algoritmo.",
                                "answer": "ok"
                            }
                        ]
                    },
                    {
                        "id": "algo-11",
                        "title": "Búsqueda binaria",
                        "content": "### MÓDULO 5 — ALGORITMOS DE BÚSQUEDA\n\nIdea intuitiva: Buscar en una lista ordenada dividiendo a la mitad. Como buscar una palabra en un diccionario.",
                        "details": "### Pasos\n1. Revisar centro.\n2. Si el objetivo es menor: Ir izquierda.\n3. Si es mayor: Ir derecha.\nComplejidad: O(log n)",
                        "pseudocode": "",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 11: Escribe tu algoritmo.",
                                "answer": "ok"
                            }
                        ]
                    },
                    {
                        "id": "algo-12",
                        "title": "Bubble Sort",
                        "content": "### MÓDULO 6 — ALGORITMOS DE ORDENAMIENTO\n\nIdea: Comparar vecinos e intercambiar.",
                        "details": "5 3 8 -> 3 5 8\nComplejidad: O(n²)",
                        "pseudocode": "",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 12: Escribe tu algoritmo.",
                                "answer": "ok"
                            }
                        ]
                    },
                    {
                        "id": "algo-13",
                        "title": "Selection Sort",
                        "content": "### MÓDULO 6 — ALGORITMOS DE ORDENAMIENTO\n\nIdea: Buscar el menor elemento y colocarlo al inicio.",
                        "details": "Complejidad: O(n²)",
                        "pseudocode": "",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 13: Escribe tu algoritmo.",
                                "answer": "ok"
                            }
                        ]
                    },
                    {
                        "id": "algo-14",
                        "title": "Insertion Sort",
                        "content": "### MÓDULO 6 — ALGORITMOS DE ORDENAMIENTO\n\nIdea intuitiva: Como ordenar cartas en la mano.",
                        "details": "Complejidad: O(n²)",
                        "pseudocode": "",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 14: Escribe tu algoritmo.",
                                "answer": "ok"
                            }
                        ]
                    },
                    {
                        "id": "algo-15",
                        "title": "Merge Sort",
                        "content": "### MÓDULO 6 — ALGORITMOS DE ORDENAMIENTO\n\nIdea: Dividir y conquistar.\n1. Dividir.\n2. Ordenar.\n3. Combinar.",
                        "details": "Complejidad: O(n log n)",
                        "pseudocode": "",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 15: Escribe tu algoritmo.",
                                "answer": "ok"
                            }
                        ]
                    },
                    {
                        "id": "algo-16",
                        "title": "Quick Sort",
                        "content": "### MÓDULO 6 — ALGORITMOS DE ORDENAMIENTO\n\nIdea: Elegir pivote. Separar menores y mayores.",
                        "details": "Complejidad promedio: O(n log n)",
                        "pseudocode": "",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 16: Escribe tu algoritmo.",
                                "answer": "ok"
                            }
                        ]
                    },
                    {
                        "id": "algo-17",
                        "title": "Recursión",
                        "content": "### MÓDULO 7 — RECURSIÓN\n\n¿Qué es?\nUna función que se llama a sí misma.",
                        "details": "### Ejemplo factorial\n```text\nfactorial(5) = 5 * factorial(4)\n```\n**Caso base**: Necesario para detener la recursión.",
                        "pseudocode": "",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 17: Escribe tu algoritmo.",
                                "answer": "ok"
                            }
                        ]
                    },
                    {
                        "id": "algo-18",
                        "title": "Árboles",
                        "content": "### MÓDULO 8 — ÁRBOLES\n\nIdea intuitiva: Como un árbol familiar.\n* Raíz.\n* Hijos.\n* Hojas.",
                        "details": "Árbol binario: Cada nodo tiene máximo 2 hijos.",
                        "pseudocode": "",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 18: Escribe tu algoritmo.",
                                "answer": "ok"
                            }
                        ]
                    },
                    {
                        "id": "algo-19",
                        "title": "Árbol binario de búsqueda",
                        "content": "### MÓDULO 8 — ÁRBOLES\n\nPropiedad:\n* Izquierda menor.\n* Derecha mayor.",
                        "details": "Operaciones: Insertar, Buscar, Eliminar.",
                        "pseudocode": "",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 19: Escribe tu algoritmo.",
                                "answer": "ok"
                            }
                        ]
                    },
                    {
                        "id": "algo-20",
                        "title": "Introducción a grafos",
                        "content": "### MÓDULO 9 — GRAFOS\n\n¿Qué es un grafo?\nConjunto de Nodos y Conexiones.",
                        "details": "Ejemplos: Redes sociales, mapas, Internet.\nTipos: Dirigidos, No dirigidos, Ponderados.",
                        "pseudocode": "",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 20: Escribe tu algoritmo.",
                                "answer": "ok"
                            }
                        ]
                    },
                    {
                        "id": "algo-21",
                        "title": "BFS y DFS",
                        "content": "### MÓDULO 9 — GRAFOS\n\n**BFS**: Búsqueda por niveles. Usa cola.\n**DFS**: Explora profundidad. Usa pila o recursión.",
                        "details": "",
                        "pseudocode": "",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 21: Escribe tu algoritmo.",
                                "answer": "ok"
                            }
                        ]
                    },
                    {
                        "id": "algo-22",
                        "title": "Introducción Programación Dinámica",
                        "content": "### MÓDULO 10 — PROGRAMACIÓN DINÁMICA\n\nIdea: Guardar resultados para evitar repetir cálculos.",
                        "details": "Conceptos: Memoización, Tabulación.",
                        "pseudocode": "",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 22: Escribe tu algoritmo.",
                                "answer": "ok"
                            }
                        ]
                    },
                    {
                        "id": "algo-23",
                        "title": "Algoritmos voraces",
                        "content": "### MÓDULO 11 — GREEDY\n\nIdea: Tomar la mejor decisión local.",
                        "details": "Ejemplos: Cambio de monedas, selección de actividades.",
                        "pseudocode": "",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 23: Escribe tu algoritmo.",
                                "answer": "ok"
                            }
                        ]
                    },
                    {
                        "id": "algo-24",
                        "title": "Dijkstra",
                        "content": "### MÓDULO 12 — ALGORITMOS AVANZADOS\n\nObjetivo: Camino más corto.",
                        "details": "Aplicaciones: GPS, Redes, Rutas.",
                        "pseudocode": "",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 24: Escribe tu algoritmo.",
                                "answer": "ok"
                            }
                        ]
                    },
                    {
                        "id": "algo-25",
                        "title": "Algoritmos de cadenas",
                        "content": "### MÓDULO 12 — ALGORITMOS AVANZADOS\n\nProblemas comunes: Buscar palabras, comparar textos, detectar patrones.",
                        "details": "",
                        "pseudocode": "",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 25: Escribe tu algoritmo.",
                                "answer": "ok"
                            }
                        ]
                    },
                    {
                        "id": "algo-26",
                        "title": "Cómo resolver problemas",
                        "content": "### MÓDULO 13 — PRÁCTICA REAL\n\nMétodo recomendado: Entender, ejemplos, patrones, eficiencia, pseudocódigo, implementar, probar.",
                        "details": "",
                        "pseudocode": "",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 26: Escribe tu algoritmo.",
                                "answer": "ok"
                            }
                        ]
                    },
                    {
                        "id": "algo-27",
                        "title": "Problemas clásicos",
                        "content": "### MÓDULO 14 — ENTREVISTAS TÉCNICAS\n\nTemas frecuentes: Arrays, Hash maps, Recursión, Árboles, Grafos.",
                        "details": "Estrategia: Explicar idea, resolver caso simple, optimizar, analizar complejidad.",
                        "pseudocode": "",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 27: Escribe tu algoritmo.",
                                "answer": "ok"
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
                "id": "eng-v",
                "title": "Vocabulario",
                "lessons": [
                    {
                        "id": "e-v-1",
                        "title": "Clase 1: Vocabulario",
                        "content": "Aprenderemos nuevas palabras.",
                        "exercises": []
                    },
                    {
                        "id": "e-v-2",
                        "title": "Clase 2: Vocabulario",
                        "content": "Aprenderemos nuevas palabras.",
                        "exercises": []
                    },
                    {
                        "id": "e-v-3",
                        "title": "Clase 3: Vocabulario",
                        "content": "Aprenderemos nuevas palabras.",
                        "exercises": []
                    },
                    {
                        "id": "e-v-4",
                        "title": "Clase 4: Vocabulario",
                        "content": "Aprenderemos nuevas palabras.",
                        "exercises": []
                    },
                    {
                        "id": "e-v-5",
                        "title": "Clase 5: Vocabulario",
                        "content": "Aprenderemos nuevas palabras.",
                        "exercises": []
                    },
                    {
                        "id": "e-v-6",
                        "title": "Clase 6: Vocabulario",
                        "content": "Aprenderemos nuevas palabras.",
                        "exercises": []
                    },
                    {
                        "id": "e-v-7",
                        "title": "Clase 7: Vocabulario",
                        "content": "Aprenderemos nuevas palabras.",
                        "exercises": []
                    },
                    {
                        "id": "e-v-8",
                        "title": "Clase 8: Vocabulario",
                        "content": "Aprenderemos nuevas palabras.",
                        "exercises": []
                    },
                    {
                        "id": "e-v-9",
                        "title": "Clase 9: Vocabulario",
                        "content": "Aprenderemos nuevas palabras.",
                        "exercises": []
                    },
                    {
                        "id": "e-v-10",
                        "title": "Clase 10: Vocabulario",
                        "content": "Aprenderemos nuevas palabras.",
                        "exercises": []
                    }
                ]
            },
            {
                "id": "eng-g",
                "title": "Gramática",
                "lessons": [
                    {
                        "id": "e-g-11",
                        "title": "Clase 11: Gramática",
                        "content": "Construcción de frases.",
                        "exercises": []
                    },
                    {
                        "id": "e-g-12",
                        "title": "Clase 12: Gramática",
                        "content": "Construcción de frases.",
                        "exercises": []
                    },
                    {
                        "id": "e-g-13",
                        "title": "Clase 13: Gramática",
                        "content": "Construcción de frases.",
                        "exercises": []
                    },
                    {
                        "id": "e-g-14",
                        "title": "Clase 14: Gramática",
                        "content": "Construcción de frases.",
                        "exercises": []
                    },
                    {
                        "id": "e-g-15",
                        "title": "Clase 15: Gramática",
                        "content": "Construcción de frases.",
                        "exercises": []
                    },
                    {
                        "id": "e-g-16",
                        "title": "Clase 16: Gramática",
                        "content": "Construcción de frases.",
                        "exercises": []
                    },
                    {
                        "id": "e-g-17",
                        "title": "Clase 17: Gramática",
                        "content": "Construcción de frases.",
                        "exercises": []
                    },
                    {
                        "id": "e-g-18",
                        "title": "Clase 18: Gramática",
                        "content": "Construcción de frases.",
                        "exercises": []
                    },
                    {
                        "id": "e-g-19",
                        "title": "Clase 19: Gramática",
                        "content": "Construcción de frases.",
                        "exercises": []
                    },
                    {
                        "id": "e-g-20",
                        "title": "Clase 20: Gramática",
                        "content": "Construcción de frases.",
                        "exercises": []
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
                "id": "db-m",
                "title": "Modelo E-R y SQL",
                "lessons": [
                    {
                        "id": "d-l1",
                        "title": "Modelo Entidad Relación",
                        "content": "Diseño.",
                        "exercises": []
                    },
                    {
                        "id": "d-l2",
                        "title": "Consultas SQL",
                        "content": "SELECT, FROM, WHERE.",
                        "exercises": []
                    }
                ]
            }
        ]
    }
];
