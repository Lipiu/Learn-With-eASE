export const headings = [
    { id: "read-write", label: "1. Reading and writing files" },
    { id: "streams-readers", label: "2. File streams/Readers" },
];

export const tips = [
    "BufferedReader is much faster than reading character by character — it reads a whole chunk into memory at once, reducing the number of disk operations.",
    "Java's NIO (New I/O) package introduced in Java 4 and improved in Java 7 with the Files class — you can now read an entire file in one line: Files.readAllLines(Path.of('file.txt')).",
    "Serialization in Java has been controversial for years due to security vulnerabilities — Java's own chief architect called it a 'horrible mistake' and Java 17+ actively discourages it.",
];