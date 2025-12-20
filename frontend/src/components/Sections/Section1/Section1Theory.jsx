import "./SectionTheory.css";

function Section1Theory() {
    return (
        <div className="theory-container">


            <section id="title">
                <h2 className="theory-title">
                    Section 1 – Introduction to Java
                </h2>
            </section>

            {/* ---------------- Java intro ---------------- */}
            <section id="intro">
                <h3>1. What is Java?</h3>
                <p>
                    <strong>Java</strong> is a high-level, object-oriented programming language used to build
                    a wide range of applications, including desktop software, web applications, mobile apps,
                    and backend systems. It was designed with the goal of being easy to learn, reliable,
                    and efficient.
                </p>

                <p>
                    One of Java’s key strengths is its <strong>platform independence</strong>.
                    Java programs are compiled into an intermediate form called <strong>bytecode</strong>,
                    which can run on any system that has a Java Virtual Machine (JVM).
                    This is why Java follows the motto:
                    <strong>“Write once, run anywhere.”</strong>
                </p>

                <p>
                    Java is known for being <strong>simple</strong> through its clear syntax,
                    <strong>secure</strong> through built-in security features,
                    and <strong>portable</strong> because Java applications can run across different
                    operating systems without modification.
                </p>
            </section>


            {/* ---------------- Programming paradigms ---------------- */}
            <section id="paradigms">
                <p>
                    <h3>2. Java Programming Paradigms</h3>
                    Java follows the <strong>Object-Oriented</strong> Programming paradigm, as well as other programming paradigms
                    such as: <strong>Imperative</strong>, <strong>Functional</strong>, and <strong>Concurrent programming</strong>.
                </p>

                <p>
                    <strong>I. Object-Oriented Programming Paradigm:</strong><br></br>
                    Object-Oriented Programming is a programming paradigm that uses "objects" to represent data and methods.
                    Java is a prominent language that implements OOP principles, making it easier to manage and reuse code.<br></br>
                    <strong>Main principles of Object-Oriented Programming</strong>
                    <ul>
                        <li><strong>Encapsulation</strong> - Bundles data and methods within a single unit class. It restricts direct access to some of the object's components.</li>
                        <li><strong>Inheritance</strong> -  Allows a new class to inherit properties and methods from an existing class, promoting code reuse.</li>
                        <li><strong>Polymorphism</strong> - Enables methods to do different things based on the object it is acting upon, allowing for method overloading and overriding.</li>
                        <li><strong>Abstraction</strong> - Hides complex implementation details and shows only the essential features of an object.</li>
                    </ul>
                </p>

                <p>
                    <strong>II. Imperative Programming Paradigm</strong><br></br>
                    Imperative Programming Paradigm involved writing step-by-step instructions that the computer follows to achieve a specific outcome.
                    This paradigm focuses on how to perform tasks through commands that change the program's state, making it suitable for detailed
                    control over program execution.
                </p>

                <p>
                    <strong>III. Functional Programming Paradigm</strong><br />
                    Functional programming is a programming paradigm that focuses on using
                    <strong> functions</strong> to process data instead of changing program state step by step.
                    It encourages writing code with fewer side effects and more predictable behavior.

                    In Java, functional programming is mainly implemented using
                    <strong> lambda expressions</strong> and <strong>streams</strong>,
                    which allow developers to pass functions as values and operate on collections
                    in a clean and concise way.

                    Java introduced functional programming features in <strong>Java 8</strong>,
                    making it easier to write readable and maintainable code using a functional style.
                </p>

                <p>
                    <strong>IV. Concurrent Programming Paradigm</strong><br></br>
                    Java Concurrent Programming is a paradigm that allows multiple tasks to be executed simultaneously within a program,
                    improving efficiency and responsiveness.
                    It utilizes <strong>threads</strong> as the basic units of execution, establishing better resource utilization and
                    performance on multi-core processors.
                </p>
            </section>

            {/* ---------------- JVM, JRE, JDK ---------------- */}
            <section id="jvm-jre-jdk">
                <h3>3. JVM, JRE, and JDK</h3>
                <p>
                    To understand how Java works, it is important to know three key components:
                    the <strong>JVM</strong>, <strong>JRE</strong>, and <strong>JDK</strong>.
                </p>

                <p>
                    The <strong>Java Virtual Machine (JVM)</strong> is responsible for running
                    Java programs. It executes Java <strong>bytecode</strong>, not Java source
                    code directly. This is what allows Java programs to run on different
                    operating systems.
                </p>

                <p>
                    The <strong>Java Runtime Environment (JRE)</strong> contains the JVM and
                    core libraries required to <strong>run</strong> Java applications.
                    End users need the JRE, but not the tools for development.
                </p>

                <p>
                    The <strong>Java Development Kit (JDK)</strong> is used by developers.
                    It includes the JRE plus tools such as:
                </p>
                <ul>
                    <li><strong>javac</strong> – the Java compiler</li>
                    <li><strong>java</strong> – the program launcher</li>
                    <li><strong>javadoc</strong> – documentation generator</li>
                    <li><strong>jshell</strong> – interactive Java shell</li>
                </ul>
            </section>


            {/* ---------------- Variables ---------------- */}
            <section id="variables">
                <h3>4. Variables in Java</h3>
                <p>
                    A <strong>variable</strong> is used to store data in a Java program.
                    Every variable has a <strong>type</strong> and a <strong>name</strong>.
                </p>

                <p>
                    Java is a <strong>statically typed</strong> language, which means the type
                    of a variable must be defined before it is used.
                </p>

                <p>Examples of common variable types:</p>
                <ul>
                    <li><strong>int</strong> – stores whole numbers</li>
                    <li><strong>float</strong> - stores decimal numbers with lower precision</li>
                    <li><strong>double</strong> – stores decimal numbers with higher precision</li>
                    <li><strong>char</strong> – stores a single character</li>
                    <li><strong>boolean</strong> – stores true or false</li>
                    <li><strong>String</strong> – stores text</li>
                </ul>

                <p>
                    Example:
                </p>
                <pre>
                {`int age = 20;
double price = 9.99;
boolean isStudent = true;
String name = "Alex";`}
            </pre>
            </section>


            {/* ---------------- Control Flow ---------------- */}
            <section id="control">
                <h3>5. Control Flow</h3>
                <p>
                    <strong>Control flow</strong> determines how a program decides what code
                    to execute and how many times.
                </p>

                <p>
                    Java provides several control flow structures:
                </p>
                <ul>
                    <li><strong>if / else</strong> – decision making</li>
                    <li><strong>switch</strong> – multiple conditions</li>
                    <li><strong>for</strong> loops – repeat code a known number of times</li>
                    <li><strong>while</strong> loops – repeat code while a condition is true</li>
                </ul>

                <p>Example:</p>
                <pre>
                {`int score = 85;
                
if (score >= 50) {
    System.out.println("Passed");
} 
else {
    System.out.println("Failed");
}`}
            </pre>

                <p>
                    Control flow allows programs to make decisions, repeat tasks, and react to
                    different inputs.
                </p>
            </section>

        </div>
    );
}

export default Section1Theory;
