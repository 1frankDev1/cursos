const coursesData = [
    {
        "id": "programming",
        "title": "Algoritmos",
        "icon": "terminal",
        "color": "#38bdf8",
        "topics": [
            {
                "id": "algo-main",
                "title": "Curso Maestro de Algoritmos",
                "lessons": [
                    {
                        "id": "algo-1",
                        "title": "Lección 1 — ¿Qué es un algoritmo?",
                        "section": "MÓDULO 1 — FUNDAMENTOS",
                        "content": "Un algoritmo es una serie de pasos ordenados para resolver un problema. Características: Pasos claros, debe terminar, debe resolver el problema, debe ser eficiente.",
                        "details": "Pseudocódigo:\nINICIO\nleer a, b, c\nmayor = a\nsi b > mayor -> mayor = b\nsi c > mayor -> mayor = c\nmostrar mayor\nFIN",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 1: Implementa la idea básica.",
                                "answer": "¿qué es un algoritmo?"
                            },
                            {
                                "type": "quiz",
                                "question": "¿Cuál es el concepto clave de la Lección 1?",
                                "options": [
                                    "¿Qué es un algoritmo?",
                                    "Otro tema",
                                    "Nada"
                                ],
                                "answer": 0
                            }
                        ]
                    },
                    {
                        "id": "algo-2",
                        "title": "Lección 2 — Variables y tipos de datos",
                        "section": "MÓDULO 1 — FUNDAMENTOS",
                        "content": "Una variable es un espacio donde almacenamos información. Tipos: Enteros, Decimales, Texto, Booleanos.",
                        "details": "Ejemplo:\nnombre = 'Luis'\nedad = 25\naltura = 1.75",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 2: Implementa la idea básica.",
                                "answer": "variables y tipos de datos"
                            },
                            {
                                "type": "quiz",
                                "question": "¿Cuál es el concepto clave de la Lección 2?",
                                "options": [
                                    "Variables y tipos de datos",
                                    "Otro tema",
                                    "Nada"
                                ],
                                "answer": 0
                            }
                        ]
                    },
                    {
                        "id": "algo-3",
                        "title": "Lección 3 — Operadores",
                        "section": "MÓDULO 1 — FUNDAMENTOS",
                        "content": "Matemáticos (+, -, *, /), Relacionales (>, <, ==, !=) y Lógicos (AND, OR, NOT).",
                        "details": "si edad >= 18\n  mostrar 'Mayor de edad'",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 3: Implementa la idea básica.",
                                "answer": "operadores"
                            },
                            {
                                "type": "quiz",
                                "question": "¿Cuál es el concepto clave de la Lección 3?",
                                "options": [
                                    "Operadores",
                                    "Otro tema",
                                    "Nada"
                                ],
                                "answer": 0
                            }
                        ]
                    },
                    {
                        "id": "algo-4",
                        "title": "Lección 4 — Condicionales",
                        "section": "MÓDULO 2 — CONTROL DE FLUJO",
                        "content": "Permiten tomar decisiones. Estructura: si condición -> acción, si no -> otra acción.",
                        "details": "si temperatura > 30\n  mostrar 'Hace calor'",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 4: Implementa la idea básica.",
                                "answer": "condicionales"
                            },
                            {
                                "type": "quiz",
                                "question": "¿Cuál es el concepto clave de la Lección 4?",
                                "options": [
                                    "Condicionales",
                                    "Otro tema",
                                    "Nada"
                                ],
                                "answer": 0
                            }
                        ]
                    },
                    {
                        "id": "algo-5",
                        "title": "Lección 5 — Bucles",
                        "section": "MÓDULO 2 — CONTROL DE FLUJO",
                        "content": "Permiten repetir acciones. Bucle FOR (para i desde 1 hasta 5) y Bucle WHILE (mientras contador < 5).",
                        "details": "para i desde 1 hasta 100\n  mostrar i",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 5: Implementa la idea básica.",
                                "answer": "bucles"
                            },
                            {
                                "type": "quiz",
                                "question": "¿Cuál es el concepto clave de la Lección 5?",
                                "options": [
                                    "Bucles",
                                    "Otro tema",
                                    "Nada"
                                ],
                                "answer": 0
                            }
                        ]
                    },
                    {
                        "id": "algo-6",
                        "title": "Lección 6 — Big O",
                        "section": "MÓDULO 3 — COMPLEJIDAD ALGORÍTMICA",
                        "content": "Mide qué tan eficiente es un algoritmo. O(1) Constante, O(n) Lineal, O(n²) Cuadrático, O(log n) Logarítmico.",
                        "details": "Buscar en mazo ordenado -> Rápido (log n)",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 6: Implementa la idea básica.",
                                "answer": "big o"
                            },
                            {
                                "type": "quiz",
                                "question": "¿Cuál es el concepto clave de la Lección 6?",
                                "options": [
                                    "Big O",
                                    "Otro tema",
                                    "Nada"
                                ],
                                "answer": 0
                            }
                        ]
                    },
                    {
                        "id": "algo-7",
                        "title": "Lección 7 — Arreglos",
                        "section": "MÓDULO 4 — ESTRUCTURAS DE DATOS",
                        "content": "Colecciones de elementos. [5, 10, 15, 20]. Acceso por índice: arreglo[0].",
                        "details": "Ventajas: Acceso rápido. Desventajas: Tamaño fijo.",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 7: Implementa la idea básica.",
                                "answer": "arreglos"
                            },
                            {
                                "type": "quiz",
                                "question": "¿Cuál es el concepto clave de la Lección 7?",
                                "options": [
                                    "Arreglos",
                                    "Otro tema",
                                    "Nada"
                                ],
                                "answer": 0
                            }
                        ]
                    },
                    {
                        "id": "algo-8",
                        "title": "Lección 8 — Listas enlazadas",
                        "section": "MÓDULO 4 — ESTRUCTURAS DE DATOS",
                        "content": "Idea intuitiva: Cada elemento apunta al siguiente. [5] -> [10] -> [20].",
                        "details": "Incersiones rápidas, acceso lento.",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 8: Implementa la idea básica.",
                                "answer": "listas enlazadas"
                            },
                            {
                                "type": "quiz",
                                "question": "¿Cuál es el concepto clave de la Lección 8?",
                                "options": [
                                    "Listas enlazadas",
                                    "Otro tema",
                                    "Nada"
                                ],
                                "answer": 0
                            }
                        ]
                    },
                    {
                        "id": "algo-9",
                        "title": "Lección 9 — Pilas y colas",
                        "section": "MÓDULO 4 — ESTRUCTURAS DE DATOS",
                        "content": "Pilas (Stack): LIFO (Último en entrar, primero en salir). Colas (Queue): FIFO (Primero en entrar, primero en salir).",
                        "details": "Pila: platos. Cola: fila super.",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 9: Implementa la idea básica.",
                                "answer": "pilas y colas"
                            },
                            {
                                "type": "quiz",
                                "question": "¿Cuál es el concepto clave de la Lección 9?",
                                "options": [
                                    "Pilas y colas",
                                    "Otro tema",
                                    "Nada"
                                ],
                                "answer": 0
                            }
                        ]
                    },
                    {
                        "id": "algo-10",
                        "title": "Lección 10 — Búsqueda lineal",
                        "section": "MÓDULO 5 — ALGORITMOS DE BÚSQUEDA",
                        "content": "Revisar elemento por elemento hasta encontrar el objetivo. Complejidad: O(n).",
                        "details": "para cada elemento\n  si el == obj -> encontrado",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 10: Implementa la idea básica.",
                                "answer": "búsqueda lineal"
                            },
                            {
                                "type": "quiz",
                                "question": "¿Cuál es el concepto clave de la Lección 10?",
                                "options": [
                                    "Búsqueda lineal",
                                    "Otro tema",
                                    "Nada"
                                ],
                                "answer": 0
                            }
                        ]
                    },
                    {
                        "id": "algo-11",
                        "title": "Lección 11 — Búsqueda binaria",
                        "section": "MÓDULO 5 — ALGORITMOS DE BÚSQUEDA",
                        "content": "Buscar en una lista ordenada dividiendo a la mitad. Complejidad: O(log n).",
                        "details": "1. Revisar centro\n2. Si obj < centro -> Ir izq\n3. Si obj > centro -> Ir der",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 11: Implementa la idea básica.",
                                "answer": "búsqueda binaria"
                            },
                            {
                                "type": "quiz",
                                "question": "¿Cuál es el concepto clave de la Lección 11?",
                                "options": [
                                    "Búsqueda binaria",
                                    "Otro tema",
                                    "Nada"
                                ],
                                "answer": 0
                            }
                        ]
                    },
                    {
                        "id": "algo-12",
                        "title": "Lección 12 — Bubble Sort",
                        "section": "MÓDULO 6 — ALGORITMOS DE ORDENAMIENTO",
                        "content": "Idea: Comparar vecinos e intercambiar. Es intuitivo pero lento. Complejidad: O(n²).",
                        "details": "5 3 8 -> 3 5 8",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 12: Implementa la idea básica.",
                                "answer": "bubble sort"
                            },
                            {
                                "type": "quiz",
                                "question": "¿Cuál es el concepto clave de la Lección 12?",
                                "options": [
                                    "Bubble Sort",
                                    "Otro tema",
                                    "Nada"
                                ],
                                "answer": 0
                            }
                        ]
                    },
                    {
                        "id": "algo-13",
                        "title": "Lección 13 — Selection Sort",
                        "section": "MÓDULO 6 — ALGORITMOS DE ORDENAMIENTO",
                        "content": "Idea: Buscar el menor elemento y colocarlo al inicio repetidamente.",
                        "details": "O(n²)",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 13: Implementa la idea básica.",
                                "answer": "selection sort"
                            },
                            {
                                "type": "quiz",
                                "question": "¿Cuál es el concepto clave de la Lección 13?",
                                "options": [
                                    "Selection Sort",
                                    "Otro tema",
                                    "Nada"
                                ],
                                "answer": 0
                            }
                        ]
                    },
                    {
                        "id": "algo-14",
                        "title": "Lección 14 — Insertion Sort",
                        "section": "MÓDULO 6 — ALGORITMOS DE ORDENAMIENTO",
                        "content": "Como ordenar cartas en la mano. Se inserta cada elemento en su posición correcta.",
                        "details": "O(n²)",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 14: Implementa la idea básica.",
                                "answer": "insertion sort"
                            },
                            {
                                "type": "quiz",
                                "question": "¿Cuál es el concepto clave de la Lección 14?",
                                "options": [
                                    "Insertion Sort",
                                    "Otro tema",
                                    "Nada"
                                ],
                                "answer": 0
                            }
                        ]
                    },
                    {
                        "id": "algo-15",
                        "title": "Lección 15 — Merge Sort",
                        "section": "MÓDULO 6 — ALGORITMOS DE ORDENAMIENTO",
                        "content": "Dividir y conquistar. Dividir, Ordenar, Combinar. Complejidad: O(n log n).",
                        "details": "Muy eficiente para grandes listas.",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 15: Implementa la idea básica.",
                                "answer": "merge sort"
                            },
                            {
                                "type": "quiz",
                                "question": "¿Cuál es el concepto clave de la Lección 15?",
                                "options": [
                                    "Merge Sort",
                                    "Otro tema",
                                    "Nada"
                                ],
                                "answer": 0
                            }
                        ]
                    },
                    {
                        "id": "algo-16",
                        "title": "Lección 16 — Quick Sort",
                        "section": "MÓDULO 6 — ALGORITMOS DE ORDENAMIENTO",
                        "content": "Elegir un pivote y separar menores de mayores. Complejidad promedio: O(n log n).",
                        "details": "Rápido en la mayoría de casos.",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 16: Implementa la idea básica.",
                                "answer": "quick sort"
                            },
                            {
                                "type": "quiz",
                                "question": "¿Cuál es el concepto clave de la Lección 16?",
                                "options": [
                                    "Quick Sort",
                                    "Otro tema",
                                    "Nada"
                                ],
                                "answer": 0
                            }
                        ]
                    },
                    {
                        "id": "algo-17",
                        "title": "Lección 17 — Recursión",
                        "section": "MÓDULO 7 — RECURSIÓN",
                        "content": "Una función que se llama a sí misma. Requiere un caso base para detenerse.",
                        "details": "factorial(5) = 5 * factorial(4)",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 17: Implementa la idea básica.",
                                "answer": "recursión"
                            },
                            {
                                "type": "quiz",
                                "question": "¿Cuál es el concepto clave de la Lección 17?",
                                "options": [
                                    "Recursión",
                                    "Otro tema",
                                    "Nada"
                                ],
                                "answer": 0
                            }
                        ]
                    },
                    {
                        "id": "algo-18",
                        "title": "Lección 18 — Árboles",
                        "section": "MÓDULO 8 — ÁRBOLES",
                        "content": "Como un árbol familiar: Raíz, Hijos, Hojas. Árbol binario: máximo 2 hijos.",
                        "details": "Recorridos: Inorden, Preorden, Postorden.",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 18: Implementa la idea básica.",
                                "answer": "árboles"
                            },
                            {
                                "type": "quiz",
                                "question": "¿Cuál es el concepto clave de la Lección 18?",
                                "options": [
                                    "Árboles",
                                    "Otro tema",
                                    "Nada"
                                ],
                                "answer": 0
                            }
                        ]
                    },
                    {
                        "id": "algo-19",
                        "title": "Lección 19 — Árbol binario de búsqueda",
                        "section": "MÓDULO 8 — ÁRBOLES",
                        "content": "Propiedad: Izquierda menor, Derecha mayor. Facilita la búsqueda rápida.",
                        "details": "Insertar, Buscar, Eliminar.",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 19: Implementa la idea básica.",
                                "answer": "árbol binario de búsqueda"
                            },
                            {
                                "type": "quiz",
                                "question": "¿Cuál es el concepto clave de la Lección 19?",
                                "options": [
                                    "Árbol binario de búsqueda",
                                    "Otro tema",
                                    "Nada"
                                ],
                                "answer": 0
                            }
                        ]
                    },
                    {
                        "id": "algo-20",
                        "title": "Lección 20 — Introducción a grafos",
                        "section": "MÓDULO 9 — GRAFOS",
                        "content": "Conjunto de Nodos y Conexiones. Ejemplos: Redes sociales, mapas.",
                        "details": "Tipos: Dirigidos, No dirigidos, Ponderados.",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 20: Implementa la idea básica.",
                                "answer": "introducción a grafos"
                            },
                            {
                                "type": "quiz",
                                "question": "¿Cuál es el concepto clave de la Lección 20?",
                                "options": [
                                    "Introducción a grafos",
                                    "Otro tema",
                                    "Nada"
                                ],
                                "answer": 0
                            }
                        ]
                    },
                    {
                        "id": "algo-21",
                        "title": "Lección 21 — BFS y DFS",
                        "section": "MÓDULO 9 — GRAFOS",
                        "content": "BFS: Búsqueda por niveles (Usa cola). DFS: Explora profundidad (Usa pila/recursión).",
                        "details": "BFS: Fila. DFS: Laberinto.",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 21: Implementa la idea básica.",
                                "answer": "bfs y dfs"
                            },
                            {
                                "type": "quiz",
                                "question": "¿Cuál es el concepto clave de la Lección 21?",
                                "options": [
                                    "BFS y DFS",
                                    "Otro tema",
                                    "Nada"
                                ],
                                "answer": 0
                            }
                        ]
                    },
                    {
                        "id": "algo-22",
                        "title": "Lección 22 — Introducción Programación Dinámica",
                        "section": "MÓDULO 10 — PROGRAMACIÓN DINÁMICA",
                        "content": "Guardar resultados para evitar repetir cálculos (Memoización).",
                        "details": "Fibonacci dinámico es mucho más rápido.",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 22: Implementa la idea básica.",
                                "answer": "introducción programación dinámica"
                            },
                            {
                                "type": "quiz",
                                "question": "¿Cuál es el concepto clave de la Lección 22?",
                                "options": [
                                    "Introducción Programación Dinámica",
                                    "Otro tema",
                                    "Nada"
                                ],
                                "answer": 0
                            }
                        ]
                    },
                    {
                        "id": "algo-23",
                        "title": "Lección 23 — Algoritmos voraces (Greedy)",
                        "section": "MÓDULO 11 — GREEDY",
                        "content": "Tomar la mejor decisión local en cada paso.",
                        "details": "Cambio de monedas, selección de tareas.",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 23: Implementa la idea básica.",
                                "answer": "algoritmos voraces (greedy)"
                            },
                            {
                                "type": "quiz",
                                "question": "¿Cuál es el concepto clave de la Lección 23?",
                                "options": [
                                    "Algoritmos voraces (Greedy)",
                                    "Otro tema",
                                    "Nada"
                                ],
                                "answer": 0
                            }
                        ]
                    },
                    {
                        "id": "algo-24",
                        "title": "Lección 24 — Dijkstra",
                        "section": "MÓDULO 12 — ALGORITMOS AVANZADOS",
                        "content": "Encuentra el camino más corto en un grafo ponderado.",
                        "details": "Aplicación: GPS, Rutas de red.",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 24: Implementa la idea básica.",
                                "answer": "dijkstra"
                            },
                            {
                                "type": "quiz",
                                "question": "¿Cuál es el concepto clave de la Lección 24?",
                                "options": [
                                    "Dijkstra",
                                    "Otro tema",
                                    "Nada"
                                ],
                                "answer": 0
                            }
                        ]
                    },
                    {
                        "id": "algo-25",
                        "title": "Lección 25 — Algoritmos de cadenas",
                        "section": "MÓDULO 12 — ALGORITMOS AVANZADOS",
                        "content": "Problemas comunes: Buscar palabras, detectar palíndromos, patrones.",
                        "details": "Cuenta vocales, busca subcadenas.",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 25: Implementa la idea básica.",
                                "answer": "algoritmos de cadenas"
                            },
                            {
                                "type": "quiz",
                                "question": "¿Cuál es el concepto clave de la Lección 25?",
                                "options": [
                                    "Algoritmos de cadenas",
                                    "Otro tema",
                                    "Nada"
                                ],
                                "answer": 0
                            }
                        ]
                    },
                    {
                        "id": "algo-26",
                        "title": "Lección 26 — Cómo resolver problemas",
                        "section": "MÓDULO 13 — PRÁCTICA REAL",
                        "content": "Método: Entender, ejemplos, patrones, eficiencia, pseudocódigo, implementar, probar.",
                        "details": "Evita errores comunes y casos extremos.",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 26: Implementa la idea básica.",
                                "answer": "cómo resolver problemas"
                            },
                            {
                                "type": "quiz",
                                "question": "¿Cuál es el concepto clave de la Lección 26?",
                                "options": [
                                    "Cómo resolver problemas",
                                    "Otro tema",
                                    "Nada"
                                ],
                                "answer": 0
                            }
                        ]
                    },
                    {
                        "id": "algo-27",
                        "title": "Lección 27 — Problemas clásicos",
                        "section": "MÓDULO 14 — ENTREVISTAS TÉCNICAS",
                        "content": "Entrevistas técnicas: Two Sum, Valid Parentheses, Reverse Linked List.",
                        "details": "Estrategia: Explicar, resolver, optimizar, analizar.",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "Reto Lección 27: Implementa la idea básica.",
                                "answer": "problemas clásicos"
                            },
                            {
                                "type": "quiz",
                                "question": "¿Cuál es el concepto clave de la Lección 27?",
                                "options": [
                                    "Problemas clásicos",
                                    "Otro tema",
                                    "Nada"
                                ],
                                "answer": 0
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
        "icon": "language",
        "color": "#fbbf24",
        "topics": [
            {
                "id": "eng-main",
                "title": "Practical English",
                "lessons": [
                    {
                        "id": "eng-0",
                        "title": "Lesson 1: Greetings",
                        "content": "In this lesson we learn about Greetings.",
                        "details": "Hello, Hi, Good morning, How are you?",
                        "exercises": [
                            {
                                "type": "quiz",
                                "question": "Translate: Greetings",
                                "options": [
                                    "Op 1",
                                    "Op 2"
                                ],
                                "answer": 0
                            }
                        ]
                    },
                    {
                        "id": "eng-1",
                        "title": "Lesson 2: Personal Info",
                        "content": "In this lesson we learn about Personal Info.",
                        "details": "My name is..., I am ... years old, I live in...",
                        "exercises": [
                            {
                                "type": "quiz",
                                "question": "Translate: Personal Info",
                                "options": [
                                    "Op 1",
                                    "Op 2"
                                ],
                                "answer": 0
                            }
                        ]
                    },
                    {
                        "id": "eng-2",
                        "title": "Lesson 3: Numbers",
                        "content": "In this lesson we learn about Numbers.",
                        "details": "One, two, three, four, five...",
                        "exercises": [
                            {
                                "type": "quiz",
                                "question": "Translate: Numbers",
                                "options": [
                                    "Op 1",
                                    "Op 2"
                                ],
                                "answer": 0
                            }
                        ]
                    },
                    {
                        "id": "eng-3",
                        "title": "Lesson 4: Time",
                        "content": "In this lesson we learn about Time.",
                        "details": "What time is it? It is 5 o'clock.",
                        "exercises": [
                            {
                                "type": "quiz",
                                "question": "Translate: Time",
                                "options": [
                                    "Op 1",
                                    "Op 2"
                                ],
                                "answer": 0
                            }
                        ]
                    },
                    {
                        "id": "eng-4",
                        "title": "Lesson 5: Family",
                        "content": "In this lesson we learn about Family.",
                        "details": "Mother, Father, Brother, Sister, Parents.",
                        "exercises": [
                            {
                                "type": "quiz",
                                "question": "Translate: Family",
                                "options": [
                                    "Op 1",
                                    "Op 2"
                                ],
                                "answer": 0
                            }
                        ]
                    },
                    {
                        "id": "eng-5",
                        "title": "Lesson 6: Daily Routine",
                        "content": "In this lesson we learn about Daily Routine.",
                        "details": "I wake up, I have breakfast, I go to work.",
                        "exercises": [
                            {
                                "type": "quiz",
                                "question": "Translate: Daily Routine",
                                "options": [
                                    "Op 1",
                                    "Op 2"
                                ],
                                "answer": 0
                            }
                        ]
                    },
                    {
                        "id": "eng-6",
                        "title": "Lesson 7: Food",
                        "content": "In this lesson we learn about Food.",
                        "details": "Apple, Bread, Milk, Water, Pizza.",
                        "exercises": [
                            {
                                "type": "quiz",
                                "question": "Translate: Food",
                                "options": [
                                    "Op 1",
                                    "Op 2"
                                ],
                                "answer": 0
                            }
                        ]
                    },
                    {
                        "id": "eng-7",
                        "title": "Lesson 8: Jobs",
                        "content": "In this lesson we learn about Jobs.",
                        "details": "Doctor, Teacher, Programmer, Engineer.",
                        "exercises": [
                            {
                                "type": "quiz",
                                "question": "Translate: Jobs",
                                "options": [
                                    "Op 1",
                                    "Op 2"
                                ],
                                "answer": 0
                            }
                        ]
                    },
                    {
                        "id": "eng-8",
                        "title": "Lesson 9: Places",
                        "content": "In this lesson we learn about Places.",
                        "details": "Park, School, Hospital, Supermarket.",
                        "exercises": [
                            {
                                "type": "quiz",
                                "question": "Translate: Places",
                                "options": [
                                    "Op 1",
                                    "Op 2"
                                ],
                                "answer": 0
                            }
                        ]
                    },
                    {
                        "id": "eng-9",
                        "title": "Lesson 10: Past Tense",
                        "content": "In this lesson we learn about Past Tense.",
                        "details": "I was, You were, He was. I worked, I went.",
                        "exercises": [
                            {
                                "type": "quiz",
                                "question": "Translate: Past Tense",
                                "options": [
                                    "Op 1",
                                    "Op 2"
                                ],
                                "answer": 0
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
        "color": "#a855f7",
        "topics": [
            {
                "id": "db-main",
                "title": "SQL & DB Design",
                "lessons": [
                    {
                        "id": "db-0",
                        "title": "DB Lesson 1: Intro",
                        "content": "Deep dive into Intro.",
                        "details": "What is a database? A structured set of data.",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "SQL for Intro",
                                "answer": "SELECT"
                            }
                        ]
                    },
                    {
                        "id": "db-1",
                        "title": "DB Lesson 2: E-R Model",
                        "content": "Deep dive into E-R Model.",
                        "details": "Entity-Relationship model. Entities, Attributes.",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "SQL for E-R Model",
                                "answer": "SELECT"
                            }
                        ]
                    },
                    {
                        "id": "db-2",
                        "title": "DB Lesson 3: Relational Model",
                        "content": "Deep dive into Relational Model.",
                        "details": "Tables, Rows, Columns, Keys.",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "SQL for Relational Model",
                                "answer": "SELECT"
                            }
                        ]
                    },
                    {
                        "id": "db-3",
                        "title": "DB Lesson 4: SQL SELECT",
                        "content": "Deep dive into SQL SELECT.",
                        "details": "SELECT * FROM users;",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "SQL for SQL SELECT",
                                "answer": "SELECT"
                            }
                        ]
                    },
                    {
                        "id": "db-4",
                        "title": "DB Lesson 5: SQL WHERE",
                        "content": "Deep dive into SQL WHERE.",
                        "details": "SELECT * FROM users WHERE age > 18;",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "SQL for SQL WHERE",
                                "answer": "SELECT"
                            }
                        ]
                    },
                    {
                        "id": "db-5",
                        "title": "DB Lesson 6: Joins",
                        "content": "Deep dive into Joins.",
                        "details": "INNER JOIN, LEFT JOIN, RIGHT JOIN.",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "SQL for Joins",
                                "answer": "SELECT"
                            }
                        ]
                    },
                    {
                        "id": "db-6",
                        "title": "DB Lesson 7: Normalization",
                        "content": "Deep dive into Normalization.",
                        "details": "1NF, 2NF, 3NF. Avoid redundancy.",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "SQL for Normalization",
                                "answer": "SELECT"
                            }
                        ]
                    },
                    {
                        "id": "db-7",
                        "title": "DB Lesson 8: NoSQL",
                        "content": "Deep dive into NoSQL.",
                        "details": "Document based, Key-Value, Graphs.",
                        "exercises": [
                            {
                                "type": "code",
                                "question": "SQL for NoSQL",
                                "answer": "SELECT"
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
