const quiz6questions = [
    {
        id: 1,
        type: "single",
        question: "Which Java package provides networking support?",
        answers: [
            { text: "java.io", isCorrect: false },
            { text: "java.util", isCorrect: false },
            { text: "java.net", isCorrect: true },
            { text: "java.nio", isCorrect: false }
        ]
    },
    {
        id: 2,
        type: "single",
        question: "What is a socket in Java networking?",
        answers: [
            { text: "A type of file stream", isCorrect: false },
            { text: "An endpoint of communication between two machines", isCorrect: true },
            { text: "A class for reading JSON data", isCorrect: false },
            { text: "A method for sending emails", isCorrect: false }
        ]
    },
    {
        id: 3,
        type: "single",
        question: "Which of the following best describes TCP?",
        answers: [
            { text: "Fast, connectionless, no delivery guarantee", isCorrect: false },
            { text: "Reliable, connection-oriented, ordered data transmission", isCorrect: true },
            { text: "Used only for video streaming", isCorrect: false },
            { text: "Does not use sockets", isCorrect: false }
        ]
    },
    {
        id: 4,
        type: "single",
        question: "Which method does a TCP server use to wait for a client connection?",
        answers: [
            { text: "socket.connect()", isCorrect: false },
            { text: "socket.receive()", isCorrect: false },
            { text: "serverSocket.accept()", isCorrect: true },
            { text: "serverSocket.listen()", isCorrect: false }
        ]
    },
    {
        id: 5,
        type: "single",
        question: "How does a TCP client connect to a server?",
        answers: [
            { text: "new DatagramSocket(host, port)", isCorrect: false },
            { text: "new ServerSocket(port)", isCorrect: false },
            { text: "new Socket(host, port)", isCorrect: true },
            { text: "InetAddress.getByName(host)", isCorrect: false }
        ]
    },
    {
        id: 6,
        type: "single",
        question: "Which of the following best describes UDP?",
        answers: [
            { text: "Reliable, connection-oriented, slower", isCorrect: false },
            { text: "Connectionless, fast, no delivery guarantee", isCorrect: true },
            { text: "Used only for file transfers", isCorrect: false },
            { text: "Requires a ServerSocket to work", isCorrect: false }
        ]
    },
    {
        id: 7,
        type: "single",
        question: "Which classes are used for UDP communication in Java?",
        answers: [
            { text: "ServerSocket and Socket", isCorrect: false },
            { text: "BufferedReader and PrintWriter", isCorrect: false },
            { text: "DatagramSocket and DatagramPacket", isCorrect: true },
            { text: "FileInputStream and FileOutputStream", isCorrect: false }
        ]
    },
    {
        id: 8,
        type: "single",
        question: "Which protocol would you choose for a real-time online game?",
        answers: [
            { text: "TCP, because it guarantees delivery", isCorrect: false },
            { text: "UDP, because it is faster and low latency", isCorrect: true },
            { text: "Neither, games don't use sockets", isCorrect: false },
            { text: "TCP, because it is connectionless", isCorrect: false }
        ]
    },
    {
        id: 9,
        type: "single",
        question: "Which protocol would you choose for sending an email?",
        answers: [
            { text: "UDP, because emails need to be fast", isCorrect: false },
            { text: "UDP, because emails are small packets", isCorrect: false },
            { text: "TCP, because emails require reliable and ordered delivery", isCorrect: true },
            { text: "Neither protocol is used for emails", isCorrect: false }
        ]
    },
    {
        id: 10,
        type: "single",
        question: "What is the key difference between TCP and UDP?",
        answers: [
            { text: "TCP uses DatagramSocket, UDP uses ServerSocket", isCorrect: false },
            { text: "TCP is reliable and ordered, UDP is fast with no delivery guarantee", isCorrect: true },
            { text: "UDP is connection-oriented, TCP is connectionless", isCorrect: false },
            { text: "There is no difference", isCorrect: false }
        ]
    }
];

export default quiz6questions;