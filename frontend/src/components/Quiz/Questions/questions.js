const questions = [
    {
        id: 1,
        question: "What is Java?",
        answers: [
            { text: "A low-level programming language", isCorrect: false },
            { text: "A high-level, object-oriented programming language", isCorrect: true },
            { text: "An operating system", isCorrect: false },
            { text: "A database management system", isCorrect: false }
        ]
    },
    {
        id: 2,
        question: "Why is Java platform-independent?",
        answers: [
            { text: "Because it runs only on Windows", isCorrect: false },
            { text: "Because it is interpreted directly by the OS", isCorrect: false },
            { text: "Because it is compiled into bytecode executed by the JVM", isCorrect: true },
            { text: "Because it does not require compilation", isCorrect: false }
        ]
    },
    {
        id: 3,
        question: "Which programming paradigm is Java primarily based on?",
        answers: [
            { text: "Procedural Programming", isCorrect: false },
            { text: "Object-Oriented Programming", isCorrect: true },
            { text: "Assembly Programming", isCorrect: false },
            { text: "Logic Programming", isCorrect: false }
        ]
    },
    {
        id: 4,
        question: "Which of the following is NOT a principle of Object-Oriented Programming?",
        answers: [
            { text: "Encapsulation", isCorrect: false },
            { text: "Inheritance", isCorrect: false },
            { text: "Compilation", isCorrect: true },
            { text: "Polymorphism", isCorrect: false }
        ]
    },
    {
        id: 5,
        question: "What does the JVM do?",
        answers: [
            { text: "Compiles Java source code", isCorrect: false },
            { text: "Executes Java bytecode", isCorrect: true },
            { text: "Creates Java documentation", isCorrect: false },
            { text: "Designs graphical interfaces", isCorrect: false }
        ]
    },
    {
        id: 6,
        question: "What is included in the JDK?",
        answers: [
            { text: "Only the JVM", isCorrect: false },
            { text: "Only development tools", isCorrect: false },
            { text: "JRE plus development tools like javac and javadoc", isCorrect: true },
            { text: "Only runtime libraries", isCorrect: false }
        ]
    },
    {
        id: 7,
        question: "Which variable type is used to store decimal numbers with higher precision?",
        answers: [
            { text: "int", isCorrect: false },
            { text: "float", isCorrect: false },
            { text: "double", isCorrect: true },
            { text: "boolean", isCorrect: false }
        ]
    },
    {
        id: 8,
        question: "What will the following code snippet print?",
        image: "src/components/Quiz/Questions/Assets/if_question.png",
        answers: [
            { text: "10", isCorrect: false },
            { text: "20", isCorrect: true },
            { text: "Nothing", isCorrect: false },
            { text: "Compilation Error", isCorrect: false }
        ]
    },
    {
        id: 9,
        question: "What happens in a switch statement if the break keyword is omitted?",
        answers: [
            { text: "The program stops immediately", isCorrect: false },
            { text: "Only the first case executes", isCorrect: false },
            { text: "The program continues executing the following cases (fall-through)", isCorrect: true },
            { text: "The switch becomes invalid", isCorrect: false }
        ]
    },
    {
        id: 10,
        question: "What is the main difference between a for loop and a while loop?",
        answers: [
            { text: "For loops are slower than while loops", isCorrect: false },
            { text: "For loops are used when the number of iterations is known in advance", isCorrect: true },
            { text: "While loops cannot create infinite loops", isCorrect: false },
            { text: "There is no difference", isCorrect: false }
        ]
    }
];

export default questions;