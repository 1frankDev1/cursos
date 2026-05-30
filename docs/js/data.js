const coursesData = [
    {
        "id": "programming",
        "title": "Programación",
        "icon": "code",
        "color": "#4CAF50",
        "topics": [
            {
                "id": "fund",
                "title": "Fundamentos de Programación",
                "lessons": [
                    { "id": "f1", "title": "1. Introducción y Variables", "content": "Las variables son el primer paso. Permiten guardar información con un nombre.\n\n### Ejemplo:\n`let nombre = 'Juan';`", "exercises": [{ "type": "code", "question": "Crea una variable 'puntos' con valor 100.", "answer": "puntos = 100" }] },
                    { "id": "f2", "title": "2. Tipos de Datos", "content": "Existen números, textos (strings) y valores lógicos (booleanos).\n\n### Tipos:\n* Strings: \"Hola\"\n* Numbers: 42\n* Booleans: true/false", "exercises": [{ "type": "quiz", "question": "¿Qué tipo de dato es 3.14?", "options": ["String", "Number", "Boolean"], "answer": 1 }] },
                    { "id": "f3", "title": "3. Operadores Aritméticos", "content": "Suma (+), Resta (-), Multiplicación (*) y División (/).", "exercises": [{ "type": "code", "question": "Calcula 10 multiplicado por 5.", "answer": "10 * 5" }] },
                    { "id": "f4", "title": "4. Condicionales Simple (If)", "content": "Permite ejecutar código solo si se cumple una condición.\n\n`if (puntos > 50) { ... }`", "exercises": [{ "type": "code", "question": "Escribe un IF que verifique si 'edad' es mayor a 18.", "answer": "if (edad > 18)" }] },
                    { "id": "f5", "title": "5. Estructura Else", "content": "Qué hacer si la condición NO se cumple.\n\n`else { ... }`", "exercises": [{ "type": "quiz", "question": "¿Cuándo se ejecuta el bloque ELSE?", "options": ["Si el IF es true", "Si el IF es false", "Siempre"], "answer": 1 }] },
                    { "id": "f6", "title": "6. Bucles: For", "content": "Repetir código un número determinado de veces.\n\n`for (let i=0; i<5; i++) { ... }`", "exercises": [{ "type": "code", "question": "Escribe el inicio de un bucle FOR que use 'i' hasta 10.", "answer": "for (let i = 0; i < 10; i++)" }] },
                    { "id": "f7", "title": "7. Bucles: While", "content": "Repetir mientras una condición sea verdadera.", "exercises": [{ "type": "code", "question": "Escribe el inicio de un bucle WHILE que dependa de 'activo'.", "answer": "while (activo)" }] },
                    { "id": "f8", "title": "8. Funciones", "content": "Bloques de código reutilizables.\n\n`function saludar() { ... }`", "exercises": [{ "type": "code", "question": "Declara una función llamada 'inicio'.", "answer": "function inicio()" }] },
                    { "id": "f9", "title": "9. Parámetros en Funciones", "content": "Pasar información a las funciones para que la procesen.", "exercises": [{ "type": "quiz", "question": "¿Dónde se definen los parámetros?", "options": ["En el nombre", "Entre los paréntesis", "Dentro de las llaves"], "answer": 1 }] },
                    { "id": "f10", "title": "10. Retorno de Valores", "content": "La palabra clave `return` devuelve un resultado al exterior.", "exercises": [{ "type": "code", "question": "Escribe el comando para devolver el valor 0.", "answer": "return 0" }] }
                ]
            },
            {
                "id": "algo",
                "title": "Algoritmos (27 Lecciones)",
                "lessons": [
                    { "id": "algo-1", "title": "1. ¿Qué es un Algoritmo?", "content": "Serie de pasos finitos y precisos.\n\n### Pseudocódigo:\n1. Inicio\n2. Paso A\n3. Fin", "exercises": [{ "type": "quiz", "question": "¿Un algoritmo debe ser infinito?", "options": ["No, debe ser finito", "Sí, siempre"], "answer": 0 }] },
                    { "id": "algo-2", "title": "2. Variables en Algoritmos", "content": "Identificadores de espacios en memoria.", "exercises": [{ "type": "code", "question": "Asigna 5 a la variable 'a'.", "answer": "a = 5" }] },
                    { "id": "algo-3", "title": "3. Operadores Lógicos", "content": "AND (Y), OR (O), NOT (NO).", "exercises": [{ "type": "quiz", "question": "¿Qué devuelve True AND False?", "options": ["True", "False"], "answer": 1 }] },
                    { "id": "algo-4", "title": "4. Condicionales", "content": "Toma de decisiones lógicas.", "exercises": [{ "type": "code", "question": "Escribe SI x > 0 ENTONCES", "answer": "si x > 0 entonces" }] },
                    { "id": "algo-5", "title": "5. Bucles", "content": "Iteración de procesos.", "exercises": [{ "type": "code", "question": "Escribe PARA i DESDE 1 HASTA 10", "answer": "para i desde 1 hasta 10" }] },
                    { "id": "algo-6", "title": "6. Introducción a Big O", "content": "Mide eficiencia temporal y espacial.", "exercises": [{ "type": "quiz", "question": "¿Qué es más rápido?", "options": ["O(n)", "O(1)"], "answer": 1 }] },
                    { "id": "algo-7", "title": "7. Arreglos (Arrays)", "content": "Estructuras lineales contiguas.", "exercises": [{ "type": "code", "question": "Accede al índice 0 de 'arr'.", "answer": "arr[0]" }] },
                    { "id": "algo-8", "title": "8. Listas Enlazadas", "content": "Nodos con punteros.", "exercises": [{ "type": "quiz", "question": "¿Cómo se llama el último puntero?", "options": ["Null/Nulo", "Next"], "answer": 0 }] },
                    { "id": "algo-9", "title": "9. Pilas (Stacks)", "content": "LIFO: Last In, First Out.", "exercises": [{ "type": "quiz", "question": "¿Cuál sale primero?", "options": ["El primero en entrar", "El último en entrar"], "answer": 1 }] },
                    { "id": "algo-10", "title": "10. Colas (Queues)", "content": "FIFO: First In, First Out.", "exercises": [{ "type": "code", "question": "Método para agregar a la cola.", "answer": "enqueue" }] },
                    { "id": "algo-11", "title": "11. Búsqueda Lineal", "content": "Revisión secuencial.", "exercises": [{ "type": "quiz", "question": "Complejidad de búsqueda lineal.", "options": ["O(1)", "O(n)"], "answer": 1 }] },
                    { "id": "algo-12", "title": "12. Búsqueda Binaria", "content": "Divide y vencerás en listas ordenadas.", "exercises": [{ "type": "quiz", "question": "¿Requiere ordenamiento previo?", "options": ["Sí", "No"], "answer": 0 }] },
                    { "id": "algo-13", "title": "13. Bubble Sort", "content": "Intercambio de adyacentes.", "exercises": [{ "type": "quiz", "question": "Complejidad en peor caso.", "options": ["O(n)", "O(n^2)"], "answer": 1 }] },
                    { "id": "algo-14", "title": "14. Selection Sort", "content": "Busca el mínimo y lo posiciona.", "exercises": [{ "type": "quiz", "question": "¿Cuántos intercambios hace por vuelta?", "options": ["Uno", "Muchos"], "answer": 0 }] },
                    { "id": "algo-15", "title": "15. Insertion Sort", "content": "Inserción ordenada.", "exercises": [{ "type": "quiz", "question": "¿Es eficiente para listas casi ordenadas?", "options": ["Sí", "No"], "answer": 0 }] },
                    { "id": "algo-16", "title": "16. Merge Sort", "content": "División recursiva y mezcla.", "exercises": [{ "type": "quiz", "question": "Complejidad.", "options": ["O(n^2)", "O(n log n)"], "answer": 1 }] },
                    { "id": "algo-17", "title": "17. Quick Sort", "content": "Uso de pivote.", "exercises": [{ "type": "code", "question": "¿Cómo se llama el elemento base?", "answer": "pivote" }] },
                    { "id": "algo-18", "title": "18. Recursión", "content": "Auto-llamada con caso base.", "exercises": [{ "type": "code", "question": "¿Qué evita el bucle infinito?", "answer": "caso base" }] },
                    { "id": "algo-19", "title": "19. Árboles Binarios", "content": "Un padre, dos hijos.", "exercises": [{ "type": "quiz", "question": "¿Cómo se llama el nodo superior?", "options": ["Hoja", "Raíz"], "answer": 1 }] },
                    { "id": "algo-20", "title": "20. Árboles BST", "content": "Izquierda menor, derecha mayor.", "exercises": [{ "type": "quiz", "question": "¿Dónde va el 5 si la raíz es 10?", "options": ["Izquierda", "Derecha"], "answer": 0 }] },
                    { "id": "algo-21", "title": "21. Grafos", "content": "Vértices y Aristas.", "exercises": [{ "type": "code", "question": "¿Cómo se llaman las conexiones?", "answer": "aristas" }] },
                    { "id": "algo-22", "title": "22. BFS", "content": "Búsqueda en amplitud.", "exercises": [{ "type": "quiz", "question": "¿Qué estructura usa BFS?", "options": ["Pila", "Cola"], "answer": 1 }] },
                    { "id": "algo-23", "title": "23. DFS", "content": "Búsqueda en profundidad.", "exercises": [{ "type": "quiz", "question": "¿Qué estructura usa DFS?", "options": ["Pila", "Cola"], "answer": 0 }] },
                    { "id": "algo-24", "title": "24. Dijkstra", "content": "Camino más corto.", "exercises": [{ "type": "quiz", "question": "¿Funciona con pesos negativos?", "options": ["Sí", "No"], "answer": 1 }] },
                    { "id": "algo-25", "title": "25. Greedy", "content": "Optimización local.", "exercises": [{ "type": "quiz", "question": "¿Siempre encuentra el óptimo global?", "options": ["Sí", "No"], "answer": 1 }] },
                    { "id": "algo-26", "title": "26. Dinámica", "content": "Memoización de subproblemas.", "exercises": [{ "type": "code", "question": "¿Cómo se llama guardar resultados?", "answer": "memoizacion" }] },
                    { "id": "algo-27", "title": "27. Problemas P vs NP", "content": "Teoría de la complejidad computacional.", "exercises": [{ "type": "quiz", "question": "¿P = NP?", "options": ["Probablemente sí", "Probablemente no"], "answer": 1 }] }
                ]
            },
            {
                "id": "poo",
                "title": "Programación Orientada a Objetos",
                "lessons": [
                    { "id": "p1", "title": "1. Clases y Objetos", "content": "Plano vs Construcción.", "exercises": [{ "type": "code", "question": "Escribe class Coche", "answer": "class coche" }] },
                    { "id": "p2", "title": "2. Abstracción", "content": "Enfocarse en lo esencial.", "exercises": [{ "type": "quiz", "question": "¿Qué es abstracción?", "options": ["Ocultar detalles", "Mostrar todo"], "answer": 0 }] },
                    { "id": "p3", "title": "3. Encapsulamiento", "content": "Protección de datos (private).", "exercises": [{ "type": "code", "question": "Usa # para campo privado en JS.", "answer": "#" }] },
                    { "id": "p4", "title": "4. Herencia", "content": "Reutilizar código de clases padre.", "exercises": [{ "type": "code", "question": "Palabra clave en JS para heredar.", "answer": "extends" }] },
                    { "id": "p5", "title": "5. Polimorfismo", "content": "Muchas formas para un mismo método.", "exercises": [{ "type": "quiz", "question": "¿Qué permite el polimorfismo?", "options": ["Diferentes resultados con misma llamada", "Copiar código"], "answer": 0 }] }
                ]
            }
        ]
    },
    {
        "id": "english",
        "title": "Inglés Técnico",
        "icon": "translate",
        "color": "#2196F3",
        "topics": [
            {
                "id": "eng-main",
                "title": "20 Clases de Inglés",
                "lessons": [
                    { "id": "e1", "title": "1. Greetings & Introductions", "content": "Hello, Hi, Good morning.", "exercises": [{ "type": "quiz", "question": "Formal greeting:", "options": ["Sup", "How do you do?", "Hey"], "answer": 1 }] },
                    { "id": "e2", "title": "2. Numbers and Time", "content": "One, Two, Three... It's five o'clock.", "exercises": [{ "type": "code", "question": "Write '12' in English.", "answer": "twelve" }] },
                    { "id": "e3", "title": "3. Personal Information", "content": "I am... I live in...", "exercises": [{ "type": "code", "question": "Translate 'Mi nombre es'", "answer": "my name is" }] },
                    { "id": "e4", "title": "4. Colors and Descriptions", "content": "Red, Blue, Big, Small.", "exercises": [{ "type": "quiz", "question": "Opposite of Big:", "options": ["Large", "Small"], "answer": 1 }] },
                    { "id": "e5", "title": "5. The Family", "content": "Father, Mother, Brother.", "exercises": [{ "type": "code", "question": "Translate 'Hermana'", "answer": "sister" }] },
                    { "id": "e6", "title": "6. Food and Drinks", "content": "Water, Bread, Apple.", "exercises": [{ "type": "quiz", "question": "Is it a fruit?", "options": ["Bread", "Banana"], "answer": 1 }] },
                    { "id": "e7", "title": "7. Daily Routine", "content": "I wake up, I go to work.", "exercises": [{ "type": "code", "question": "Translate 'Despertar'", "answer": "wake up" }] },
                    { "id": "e8", "title": "8. Hobbies", "content": "Reading, Swimming, Coding.", "exercises": [{ "type": "code", "question": "Translate 'Nadar'", "answer": "swim" }] },
                    { "id": "e9", "title": "9. The House", "content": "Kitchen, Bedroom, Living room.", "exercises": [{ "type": "quiz", "question": "Where do you cook?", "options": ["Kitchen", "Garden"], "answer": 0 }] },
                    { "id": "e10", "title": "10. In the City", "content": "Bank, Hospital, Park.", "exercises": [{ "type": "code", "question": "Translate 'Hospital'", "answer": "hospital" }] },
                    { "id": "e11", "title": "11. Transport", "content": "Car, Bus, Plane.", "exercises": [{ "type": "quiz", "question": "It flies:", "options": ["Train", "Plane"], "answer": 1 }] },
                    { "id": "e12", "title": "12. The Weather", "content": "Sunny, Rainy, Cold.", "exercises": [{ "type": "code", "question": "Translate 'Soleado'", "answer": "sunny" }] },
                    { "id": "e13", "title": "13. Jobs", "content": "Doctor, Engineer, Developer.", "exercises": [{ "type": "code", "question": "Translate 'Ingeniero'", "answer": "engineer" }] },
                    { "id": "e14", "title": "14. Parts of the Body", "content": "Head, Shoulders, Knees.", "exercises": [{ "type": "code", "question": "Translate 'Cabeza'", "answer": "head" }] },
                    { "id": "e15", "title": "15. Clothes", "content": "Shirt, Pants, Shoes.", "exercises": [{ "type": "quiz", "question": "For your feet:", "options": ["Hat", "Shoes"], "answer": 1 }] },
                    { "id": "e16", "title": "16. Present Simple", "content": "I work, You work, He works.", "exercises": [{ "type": "code", "question": "Add 's' to 'play' for 'He'.", "answer": "plays" }] },
                    { "id": "e17", "title": "17. Present Continuous", "content": "I am working.", "exercises": [{ "type": "code", "question": "Add 'ing' to 'run'.", "answer": "running" }] },
                    { "id": "e18", "title": "18. Past Simple", "content": "I worked.", "exercises": [{ "type": "code", "question": "Past of 'go'.", "answer": "went" }] },
                    { "id": "e19", "title": "19. Future with Will", "content": "I will go.", "exercises": [{ "type": "code", "question": "Future of 'eat'.", "answer": "will eat" }] },
                    { "id": "e20", "title": "20. Tech English", "content": "Merge, Commit, Deploy.", "exercises": [{ "type": "quiz", "question": "Send to production:", "options": ["Delete", "Deploy"], "answer": 1 }] }
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
                "id": "db-er",
                "title": "Modelo Entidad Relación",
                "lessons": [
                    { "id": "d1", "title": "1. Entidades", "content": "Objetos del mundo real.", "exercises": [{ "type": "code", "question": "Nombre de entidad para usuarios.", "answer": "usuario" }] },
                    { "id": "d2", "title": "2. Atributos", "content": "Propiedades de las entidades.", "exercises": [{ "type": "quiz", "question": "¿Es un atributo de Persona?", "options": ["Caminar", "Nombre"], "answer": 1 }] },
                    { "id": "d3", "title": "3. Relaciones", "content": "Vínculos entre entidades.", "exercises": [{ "type": "code", "question": "Verbo para relación Cliente-Pedido.", "answer": "hace" }] },
                    { "id": "d4", "title": "4. Cardinalidad", "content": "1:1, 1:N, N:M.", "exercises": [{ "type": "quiz", "question": "Un país tiene muchos ciudadanos:", "options": ["1:1", "1:N"], "answer": 1 }] }
                ]
            },
            {
                "id": "db-sql",
                "title": "Lenguaje SQL",
                "lessons": [
                    { "id": "d5", "title": "5. SELECT", "content": "Obtener datos.", "exercises": [{ "type": "code", "question": "Selecciona todo de 'users'.", "answer": "select * from users" }] },
                    { "id": "d6", "title": "6. WHERE", "content": "Filtrar datos.", "exercises": [{ "type": "code", "question": "Filtra donde id sea 1.", "answer": "where id = 1" }] },
                    { "id": "d7", "title": "7. ORDER BY", "content": "Ordenar resultados.", "exercises": [{ "type": "code", "question": "Ordena por 'nombre'.", "answer": "order by nombre" }] },
                    { "id": "d8", "title": "8. INSERT", "content": "Agregar registros.", "exercises": [{ "type": "code", "question": "Comando para insertar.", "answer": "insert into" }] },
                    { "id": "d9", "title": "9. UPDATE", "content": "Modificar registros.", "exercises": [{ "type": "code", "question": "Comando para actualizar.", "answer": "update" }] },
                    { "id": "d10", "title": "10. DELETE", "content": "Eliminar registros.", "exercises": [{ "type": "code", "question": "Comando para borrar.", "answer": "delete from" }] }
                ]
            }
        ]
    }
];
