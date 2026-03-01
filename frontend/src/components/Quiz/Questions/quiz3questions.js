const quiz3questions = [
    {
        id: 1,
        type: "single",
        question: "What is the Java Collection Framework (JCF)?",
        answers: [
            { text: "A set of classes and interfaces providing ready-made data structures", isCorrect: true },
            { text: "A tool for compiling Java programs", isCorrect: false },
            { text: "A framework for building user interfaces", isCorrect: false },
            { text: "A database management system", isCorrect: false }
        ]
    },
    {
        id: 2,
        type: "single",
        question: "Which collection type allows duplicate elements and preserves insertion order?",
        answers: [
            { text: "Set", isCorrect: false },
            { text: "Map", isCorrect: false },
            { text: "List", isCorrect: true },
            { text: "Queue", isCorrect: false }
        ]
    },
    {
        id: 3,
        type: "single",
        question: "What happens when you add a duplicate element to a HashSet?",
        answers: [
            { text: "It throws an exception", isCorrect: false },
            { text: "It replaces the existing element", isCorrect: false },
            { text: "It is silently ignored", isCorrect: true },
            { text: "It is added at the end", isCorrect: false }
        ]
    },
    {
        id: 4,
        type: "single",
        question: "Which collection maps unique keys to values?",
        answers: [
            { text: "List", isCorrect: false },
            { text: "Set", isCorrect: false },
            { text: "Queue", isCorrect: false },
            { text: "Map", isCorrect: true }
        ]
    },
    {
        id: 5,
        type: "single",
        question: "Which method is used to insert elements into a Map?",
        answers: [
            { text: "add()", isCorrect: false },
            { text: "insert()", isCorrect: false },
            { text: "put()", isCorrect: true },
            { text: "offer()", isCorrect: false }
        ]
    },
    {
        id: 6,
        type: "single",
        question: "What order does a Queue follow when removing elements?",
        answers: [
            { text: "LIFO – Last In First Out", isCorrect: false },
            { text: "FIFO – First In First Out", isCorrect: true },
            { text: "Random order", isCorrect: false },
            { text: "Alphabetical order", isCorrect: false }
        ]
    },
    {
        id: 7,
        type: "single",
        question: "What does queue.peek() do?",
        answers: [
            { text: "Removes and returns the head of the queue", isCorrect: false },
            { text: "Adds an element to the queue", isCorrect: false },
            { text: "Returns the head of the queue without removing it", isCorrect: true },
            { text: "Checks if the queue is empty", isCorrect: false }
        ]
    },
    {
        id: 8,
        type: "single",
        question: "What is the main benefit of using Generics in Java?",
        answers: [
            { text: "They make programs run faster", isCorrect: false },
            { text: "They provide type safety and eliminate the need for explicit casting", isCorrect: true },
            { text: "They allow duplicate elements in collections", isCorrect: false },
            { text: "They replace the need for collections", isCorrect: false }
        ]
    },
    {
        id: 9,
        type: "single",
        question: "In the generic class Box<T>, what does T represent?",
        answers: [
            { text: "A fixed type that must be a String", isCorrect: false },
            { text: "A placeholder for any type specified when the object is created", isCorrect: true },
            { text: "A method name", isCorrect: false },
            { text: "A collection type", isCorrect: false }
        ]
    },
    {
        id: 10,
        type: "single",
        question: "Which collection implementation does NOT guarantee insertion order?",
        answers: [
            { text: "ArrayList", isCorrect: false },
            { text: "LinkedList", isCorrect: false },
            { text: "HashSet", isCorrect: true },
            { text: "Queue", isCorrect: false }
        ]
    }
];

export default quiz3questions;