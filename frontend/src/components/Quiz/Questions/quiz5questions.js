const quiz5questions = [
    {
        id: 1,
        type: "single",
        question: "Which Java packages provide classes for reading and writing files?",
        answers: [
            { text: "java.util and java.lang", isCorrect: false },
            { text: "java.io and java.nio.file", isCorrect: true },
            { text: "java.net and java.sql", isCorrect: false },
            { text: "java.io and java.util", isCorrect: false }
        ]
    },
    {
        id: 2,
        type: "single",
        question: "Which class is used to write text into a file in Java?",
        answers: [
            { text: "BufferedReader", isCorrect: false },
            { text: "FileInputStream", isCorrect: false },
            { text: "FileWriter", isCorrect: true },
            { text: "DataOutputStream", isCorrect: false }
        ]
    },
    {
        id: 3,
        type: "single",
        question: "What does BufferedReader's readLine() method return when it reaches the end of a file?",
        answers: [
            { text: "An empty string", isCorrect: false },
            { text: "0", isCorrect: false },
            { text: "null", isCorrect: true },
            { text: "It throws an exception", isCorrect: false }
        ]
    },
    {
        id: 4,
        type: "single",
        question: "Which classes are used to read and write primitive data types in binary files?",
        answers: [
            { text: "FileReader and FileWriter", isCorrect: false },
            { text: "DataInputStream and DataOutputStream", isCorrect: true },
            { text: "BufferedReader and BufferedWriter", isCorrect: false },
            { text: "ObjectInputStream and ObjectOutputStream", isCorrect: false }
        ]
    },
    {
        id: 5,
        type: "single",
        question: "What format does JSON use to store data?",
        answers: [
            { text: "Table format with rows and columns", isCorrect: false },
            { text: "Binary format with raw bytes", isCorrect: false },
            { text: "Key-value format", isCorrect: true },
            { text: "XML format with tags", isCorrect: false }
        ]
    },
    {
        id: 6,
        type: "single",
        question: "What is the difference between Byte Streams and Character Streams?",
        answers: [
            { text: "Byte Streams are faster, Character Streams are slower", isCorrect: false },
            { text: "Byte Streams handle binary data, Character Streams handle text data", isCorrect: true },
            { text: "There is no difference", isCorrect: false },
            { text: "Character Streams handle binary data, Byte Streams handle text", isCorrect: false }
        ]
    },
    {
        id: 7,
        type: "single",
        question: "What is the benefit of using Buffered streams?",
        answers: [
            { text: "They encrypt the data automatically", isCorrect: false },
            { text: "They reduce disk access operations by reading/writing data in chunks", isCorrect: true },
            { text: "They allow reading JSON files directly", isCorrect: false },
            { text: "They replace the need for try-catch blocks", isCorrect: false }
        ]
    },
    {
        id: 8,
        type: "single",
        question: "What must a class implement to be serializable in Java?",
        answers: [
            { text: "Cloneable", isCorrect: false },
            { text: "Comparable", isCorrect: false },
            { text: "Serializable", isCorrect: true },
            { text: "Iterable", isCorrect: false }
        ]
    },
    {
        id: 9,
        type: "single",
        question: "Since which Java version is try-with-resources available?",
        answers: [
            { text: "Java 5", isCorrect: false },
            { text: "Java 6", isCorrect: false },
            { text: "Java 7", isCorrect: true },
            { text: "Java 8", isCorrect: false }
        ]
    },
    {
        id: 10,
        type: "single",
        question: "What is the main advantage of try-with-resources?",
        answers: [
            { text: "It makes the code run faster", isCorrect: false },
            { text: "It automatically closes streams even if an exception occurs", isCorrect: true },
            { text: "It prevents all exceptions from occurring", isCorrect: false },
            { text: "It allows reading binary and text files at the same time", isCorrect: false }
        ]
    }
];

export default quiz5questions;