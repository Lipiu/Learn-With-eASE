const quiz4questions = [
    {
        id: 1,
        type: "single",
        question: "When were Streams introduced in Java?",
        answers: [
            { text: "Java 6", isCorrect: false },
            { text: "Java 7", isCorrect: false },
            { text: "Java 8", isCorrect: true },
            { text: "Java 11", isCorrect: false }
        ]
    },
    {
        id: 2,
        type: "single",
        question: "Which of the following is true about Streams?",
        answers: [
            { text: "They store data permanently", isCorrect: false },
            { text: "They operate on collections in a declarative way", isCorrect: true },
            { text: "They replace collections entirely", isCorrect: false },
            { text: "They can only be used with Maps", isCorrect: false }
        ]
    },
    {
        id: 3,
        type: "single",
        question: "What does the filter() operation do in a Stream?",
        answers: [
            { text: "Sorts the elements", isCorrect: false },
            { text: "Removes all elements", isCorrect: false },
            { text: "Keeps only elements that match a given condition", isCorrect: true },
            { text: "Prints each element", isCorrect: false }
        ]
    },
    {
        id: 4,
        type: "single",
        question: "In the Stream example, what will be printed after filter and sorted?",
        image: "src/components/Quiz/Questions/Assets/streams.png",
        answers: [
            { text: "Ana, Alex", isCorrect: false },
            { text: "Alex, Ana", isCorrect: true },
            { text: "Ana, John, Alex, Maria", isCorrect: false },
            { text: "Maria, John", isCorrect: false }
        ]
    },
    {
        id: 5,
        type: "single",
        question: "What is a Lambda expression in Java?",
        answers: [
            { text: "A type of collection", isCorrect: false },
            { text: "A short way to implement a functional interface", isCorrect: true },
            { text: "A method that returns a Stream", isCorrect: false },
            { text: "A type of exception", isCorrect: false }
        ]
    },
    {
        id: 6,
        type: "single",
        question: "What is the correct syntax for a Lambda expression?",
        answers: [
            { text: "parameters => expression", isCorrect: false },
            { text: "(parameters) -> expression", isCorrect: true },
            { text: "expression <- parameters", isCorrect: false },
            { text: "{parameters} -> expression", isCorrect: false }
        ]
    },
    {
        //image to be added
        id: 7,
        type: "single",
        question: "What will be the output of this code sequence?",
        image: "src/components/Quiz/Questions/Assets/foreach.png",
        answers: [
            { text: "1, 2, 3, 4, 5", isCorrect: false },
            { text: "2, 4, 6, 8, 10", isCorrect: true },
            { text: "1, 4, 9, 16, 25", isCorrect: false },
            { text: "Nothing", isCorrect: false }
        ]
    },
    {
        id: 8,
        type: "single",
        question: "What is an Exception in Java?",
        answers: [
            { text: "A special type of loop", isCorrect: false },
            { text: "An event that disrupts the normal flow of program execution", isCorrect: true },
            { text: "A method that returns null", isCorrect: false },
            { text: "A collection that stores errors", isCorrect: false }
        ]
    },
    {
        id: 9,
        type: "single",
        question: "What is the difference between checked and unchecked exceptions?",
        answers: [
            { text: "Checked exceptions extend RuntimeException, unchecked do not", isCorrect: false },
            { text: "Checked exceptions must be handled at compile time, unchecked are RuntimeExceptions", isCorrect: true },
            { text: "There is no difference", isCorrect: false },
            { text: "Unchecked exceptions must always be handled", isCorrect: false }
        ]
    },
    {
        //image to be added
        id: 10,
        type: "single",
        question: "In the exception example, what always executes regardless of whether an exception occurs?",
        image: "src/components/Quiz/Questions/Assets/try_catch.png",
        answers: [
            { text: "The try block", isCorrect: false },
            { text: "The catch block", isCorrect: false },
            { text: "The finally block", isCorrect: true },
            { text: "Nothing always executes", isCorrect: false }
        ]
    }
];

export default quiz4questions;