import '../../Section/SectionTheory.css';

function Section5Theory(){
    return(
        <div className="theory-container">
            <h2 className="theory-title">
                Section 5 – Files
            </h2>

            <section id="read-write">
                <h3>1. Reading and Writing Files</h3>

                <p>
                    Java provides classes from <strong>java.io</strong> and <strong>java.nio.file</strong> packages to read and write files.
                </p>

                <ul>
                    <li>Text files → store readable characters.</li>
                    <li>Binary files → store raw bytes.</li>
                    <li>JSON files → structured data format (key-value).</li>
                    <li>Use try-with-resources to automatically close files.</li>
                </ul>

                <h2>Text File Example</h2>

                <pre>
                    {
                        'class TextFileExample {\n' +
                        '\tpublic static void main(String[] args) throws IOException {\n\n' +
                        '\t\t// Writing to a file\n' +
                        '\t\tFileWriter writer = new FileWriter("example.txt");\n' +
                        '\t\twriter.write("Hello File!");\n' +
                        '\t\twriter.close();\n\n' +
                        '\t\t// Reading from a file\n' +
                        '\t\tBufferedReader reader = new BufferedReader(new FileReader("example.txt"));\n' +
                        '\t\tString line;\n' +
                        '\t\twhile((line = reader.readLine()) != null){\n' +
                        '\t\t\tSystem.out.println(line);\n' +
                        '\t\t}\n' +
                        '\t\treader.close();\n' +
                        '\t}\n' +
                        '}\n'
                    }
                </pre>

                <p>
                    <strong>FileWriter</strong> writes text into a file. <strong>BufferedReader</strong> reads text line by line.
                    Always close streams to prevent resource leaks.
                </p>

                <h2>Binary File Example</h2>

                <pre>
                    {
                        'class BinaryFileExample {\n' +
                        '\tpublic static void main(String[] args) throws IOException {\n\n' +
                        '\t\t// Writing binary data\n' +
                        '\t\tDataOutputStream out = new DataOutputStream(\n' +
                        '\t\t\tnew FileOutputStream("data.bin"));\n' +
                        '\t\tout.writeInt(100);\n' +
                        '\t\tout.writeDouble(3.14);\n' +
                        '\t\tout.close();\n\n' +
                        '\t\t// Reading binary data\n' +
                        '\t\tDataInputStream in = new DataInputStream(\n' +
                        '\t\t\tnew FileInputStream("data.bin"));\n' +
                        '\t\tSystem.out.println(in.readInt());\n' +
                        '\t\tSystem.out.println(in.readDouble());\n' +
                        '\t\tin.close();\n' +
                        '\t}\n' +
                        '}\n'
                    }
                </pre>

                <p>
                    Binary files store raw data (numbers, bytes).
                    <strong>DataOutputStream</strong> and <strong>DataInputStream</strong>
                    allow writing and reading primitive data types.
                </p>

                <h2>JSON File Example</h2>

                <pre>
                    {
                        'class JsonExample {\n' +
                        '\tpublic static void main(String[] args) throws IOException {\n\n' +
                        '\t\tString json = "{\\"name\\":\\"John\\", \\"age\\":25}";\n\n' +
                        '\t\tFileWriter writer = new FileWriter("user.json");\n' +
                        '\t\twriter.write(json);\n' +
                        '\t\twriter.close();\n\n' +
                        '\t\tBufferedReader reader = new BufferedReader(new FileReader("user.json"));\n' +
                        '\t\tSystem.out.println(reader.readLine());\n' +
                        '\t\treader.close();\n' +
                        '\t}\n' +
                        '}\n'
                    }
                </pre>

                <p>
                    JSON (JavaScript Object Notation) stores structured data
                    in key-value format.
                    In real applications, libraries like <strong>Jackson</strong>
                    or <strong>Gson</strong> are used to parse JSON automatically.
                </p>
            </section>

            <section id="streams-readers">
                <h3>2. Understanding File Streams and Readers</h3>

                <p>
                    Java file handling is based on the concept of <strong>streams</strong>.
                    A stream represents a flow of data between a program and a file.
                    There are two main categories:
                </p>

                <ul>
                    <li><strong>Byte Streams</strong> – used for binary data (images, audio, numbers).</li>
                    <li><strong>Character Streams</strong> – used for text data (characters, strings).</li>
                </ul>

                <h4>Byte Streams (Binary Data)</h4>

                <ul>
                    <li>
                        <strong>InputStream</strong> – reads raw bytes from a source.
                    </li>
                    <li>
                        <strong>OutputStream</strong> – writes raw bytes to a destination.
                    </li>
                    <li>
                        <strong>FileInputStream</strong> – reads bytes from a file.
                    </li>
                    <li>
                        <strong>FileOutputStream</strong> – writes bytes to a file.
                    </li>
                    <li>
                        <strong>BufferedInputStream</strong> – improves performance by reading data in chunks.
                    </li>
                    <li>
                        <strong>BufferedOutputStream</strong> – improves performance by writing data in chunks.
                    </li>
                </ul>

                <p>
                    Buffered streams reduce the number of disk access operations,
                    making file operations faster and more efficient.
                </p>


                <h4>Character Streams (Text Data)</h4>

                <ul>
                    <li>
                        <strong>Reader</strong> – abstract class for reading characters.
                    </li>
                    <li>
                        <strong>Writer</strong> – abstract class for writing characters.
                    </li>
                    <li>
                        <strong>FileReader</strong> – reads characters from a file.
                    </li>
                    <li>
                        <strong>FileWriter</strong> – writes characters to a file.
                    </li>
                    <li>
                        <strong>BufferedReader</strong> – reads text efficiently, line by line.
                    </li>
                    <li>
                        <strong>BufferedWriter</strong> – writes text efficiently using a buffer.
                    </li>
                </ul>

                <p>
                    <strong>BufferedReader</strong> is commonly used with
                    <code>readLine()</code> to read text files line by line.
                </p>


                <h4>Data Streams</h4>

                <ul>
                    <li>
                        <strong>DataInputStream</strong> – reads primitive data types (int, double, etc.).
                    </li>
                    <li>
                        <strong>DataOutputStream</strong> – writes primitive data types.
                    </li>
                </ul>

                <p>
                    These are useful when working with structured binary data.
                </p>


                <h4>Object Streams (Serialization)</h4>

                <ul>
                    <li>
                        <strong>ObjectOutputStream</strong> – writes Java objects to a file.
                    </li>
                    <li>
                        <strong>ObjectInputStream</strong> – reads Java objects from a file.
                    </li>
                </ul>

                <p>
                    To serialize an object, the class must implement
                    <code>Serializable</code>.
                </p>


                <h4>Try-With-Resources</h4>

                <p>
                    Since Java 7, it is recommended to use
                    <strong>try-with-resources</strong> to automatically close streams:
                </p>

                <pre>
                    {
                        'try (BufferedReader reader = new BufferedReader(new FileReader("example.txt"))) {\n' +
                        '\tString line;\n' +
                        '\twhile((line = reader.readLine()) != null) {\n' +
                        '\t\tSystem.out.println(line);\n' +
                        '\t}\n' +
                        '} catch(IOException e) {\n' +
                        '\te.printStackTrace();\n' +
                        '}\n'
                    }
                </pre>

                <p>
                    This ensures the file is automatically closed even if an exception occurs.
                </p>

            </section>
        </div>
    )
}

export default Section5Theory;
