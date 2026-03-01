const quiz2questions = [
    {
        id: 1,
        question: "What is a class in Java?",
        answers: [
            { text: "An instance of an object", isCorrect: false },
            { text: "A blueprint for creating objects", isCorrect: true },
            { text: "A method that creates data", isCorrect: false },
            { text: "A type of variable", isCorrect: false }
        ]
    },
    {
        id: 2,
        question: "What is an object in Java?",
        answers: [
            { text: "A blueprint for creating classes", isCorrect: false },
            { text: "A primitive data type", isCorrect: false },
            { text: "An instance of a class", isCorrect: true },
            { text: "A static method", isCorrect: false }
        ]
    },
    {
        id: 3,
        question: "What does encapsulation mean in OOP?",
        answers: [
            { text: "Allowing a class to inherit from another class", isCorrect: false },
            { text: "Hiding internal details and controlling access to a class's data", isCorrect: true },
            { text: "Allowing methods to behave differently at runtime", isCorrect: false },
            { text: "Creating multiple objects from one class", isCorrect: false }
        ]
    },
    {
        id: 4,
        question: "How is encapsulation typically achieved in Java?",
        answers: [
            { text: "By declaring fields as public", isCorrect: false },
            { text: "By using the extends keyword", isCorrect: false },
            { text: "By declaring fields as private and using getters and setters", isCorrect: true },
            { text: "By using the @Override annotation", isCorrect: false }
        ]
    },
    {
        id: 5,
        question: "Which access modifier makes a field accessible only within the same package and by subclasses?",
        answers: [
            { text: "private", isCorrect: false },
            { text: "public", isCorrect: false },
            { text: "protected", isCorrect: true },
            { text: "static", isCorrect: false }
        ]
    },
    {
        id: 6,
        question: "Which keyword is used in Java to inherit from another class?",
        answers: [
            { text: "implements", isCorrect: false },
            { text: "extends", isCorrect: true },
            { text: "inherits", isCorrect: false },
            { text: "super", isCorrect: false }
        ]
    },
    {
        //image to be added with code snippet
        id: 7,
        question: "If Dog extends Animal, what can a Dog object access?",
        answers: [
            { text: "Only its own methods", isCorrect: false },
            { text: "Only Animal's methods", isCorrect: false },
            { text: "Both its own methods and inherited methods from Animal", isCorrect: true },
            { text: "Neither, inheritance doesn't work that way", isCorrect: false }
        ]
    },
    {
        id: 8,
        question: "What does the @Override annotation indicate?",
        answers: [
            { text: "The method is static", isCorrect: false },
            { text: "The method replaces a method from the parent class", isCorrect: true },
            { text: "The method cannot be called", isCorrect: false },
            { text: "The method is private", isCorrect: false }
        ]
    },
    {
        id: 9,
        question: "What is polymorphism in Java?",
        answers: [
            { text: "The ability to create multiple classes", isCorrect: false },
            { text: "The ability to hide fields using private", isCorrect: false },
            { text: "The ability of an object to take many forms and methods to behave differently at runtime", isCorrect: true },
            { text: "The ability to use the extends keyword", isCorrect: false }
        ]
    },
    {
        //image to be added
        id: 10,
        question: "Given a Human reference holding a Student object, which info() method gets called?",
        answers: [
            { text: "Human's info() method", isCorrect: false },
            { text: "Student's info() method, because Java uses the actual object type at runtime", isCorrect: true },
            { text: "Both methods get called", isCorrect: false },
            { text: "Neither, it throws an error", isCorrect: false }
        ]
    }
];

export default quiz2questions;