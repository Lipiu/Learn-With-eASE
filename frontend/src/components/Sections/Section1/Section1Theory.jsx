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
                <h3>2. Java Programming Paradigms</h3>
                Java follows the <strong>Object-Oriented</strong> Programming paradigm, as well as other programming paradigms
                such as: <strong>Imperative</strong>, <strong>Functional</strong>, and <strong>Concurrent programming</strong>.

                <p>
                    <strong>I. Object-Oriented Programming Paradigm:</strong><br></br>
                    Object-Oriented Programming is a programming paradigm that uses "objects" to represent data and methods.
                    Java is a prominent language that implements OOP principles, making it easier to manage and reuse code.<br></br>
                </p>
                <p>
                    <strong>Main principles of Object-Oriented Programming</strong>
                </p>
                    <ul>
                        <li><strong>Encapsulation</strong> - Bundles data and methods within a single unit class. It restricts direct access to some of the object's components.</li>
                        <li><strong>Inheritance</strong> -  Allows a new class to inherit properties and methods from an existing class, promoting code reuse.</li>
                        <li><strong>Polymorphism</strong> - Enables methods to do different things based on the object it is acting upon, allowing for method overloading and overriding.</li>
                        <li><strong>Abstraction</strong> - Hides complex implementation details and shows only the essential features of an object.</li>
                    </ul>

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

                <br></br>

                <p>
                    <strong>The if-else statement</strong> is used to execute different blocks of code based on whether
                    a condition is true or false.
                    If the condition in the if statement is true,
                    the code inside the if block runs; if it's false, the code inside the else block executes instead.
                </p>
                <p><strong>if/else example:</strong></p>
                <pre>
                    {'int score = 85;\n' +
                        '        \n' +
                        '        if (score >= 50) {\n' +
                        '            System.out.println("Passed");\n' +
                        '        } \n' +
                        '        else {\n' +
                        '            System.out.println("Failed");\n' +
                        '        }'}
                </pre>

                <p>
                    Control flow allows programs to make decisions, repeat tasks, and react to
                    different inputs. Try to guess what this program will output!
                </p>
                <br></br>

                <p>
                    <strong>The switch case</strong> is a control statement that allows you to execute
                    different parts of code based on the value of a variable or expression.
                </p>
                <p><strong>switch example:</strong></p>
                <pre>
                    {'int weekDay = 4;\n' +
                        '\t\t\n' +
                        '\t\tswitch(weekDay) {\n' +
                        '\t\tcase 1:\n' +
                        '\t\t\tSystem.out.println("Monday");\n' +
                        '\t\t\tbreak;\n' +
                        '\t\t\t\n' +
                        '\t\tcase 2:\n' +
                        '\t\t\tSystem.out.println("Tuesday");\n' +
                        '\t\t\tbreak;\n' +
                        '\t\t\t\n' +
                        '\t\tcase 3:\n' +
                        '\t\t\tSystem.out.println("Wednesday");\n' +
                        '\t\t\tbreak;\n' +
                        '\t\t\t\n' +
                        '\t\tcase 4:\n' +
                        '\t\t\tSystem.out.println("Thursday");\n' +
                        '\t\t\tbreak;\n' +
                        '\t\t\t\n' +
                        '\t\tcase 5:\n' +
                        '\t\t\tSystem.out.println("Friday");\n' +
                        '\t\t\tbreak;\n' +
                        '\t\t\t\n' +
                        '\t\tcase 6:\n' +
                        '\t\t\tSystem.out.println("Saturday");\n' +
                        '\t\t\tbreak;\n' +
                        '\t\t\t\n' +
                        '\t\tcase 7:\n' +
                        '\t\t\tSystem.out.println("Sunday");\n' +
                        '\t\t\tbreak;\n' +
                        '\t\t}'}
                </pre>
                <p>
                    Try and guess the output. What if we change the value of weekDay with 7?
                </p>
                <br></br>

                <p>
                    <strong>
                        What is the difference between if/else statements and switch cases, and in what situations should each be used?
                    </strong>
                </p>
                <ul>
                    <li>
                        <strong>if/else</strong> is used for general decision making while <strong>switch</strong>
                        is used for matching a single variable against fixed values.
                    </li>
                    <li>
                        <strong>if/else</strong> conditions can be: relational, logical, function calls,
                        while <strong>switch</strong> works with exact matches only, (typically: byte, int, char, String, enum)
                    </li>
                    <li>
                        <strong>switch case</strong> is generally more compact that lots of nested <strong>if/else</strong> statements,
                        thus improving readability and maintainability.
                    </li>
                    <li>
                        In a <strong>switch case</strong>, if the <strong>break</strong> keyword is not used, the program continues executing the
                        following cases until it finds a break or reaches the end of the switch block.
                    </li>
                    <li>
                        Unlike a <strong>switch</strong>, in an <strong>if–else statement</strong>, once a condition evaluates to true,
                        the other else if and else blocks are not executed.
                    </li>
                </ul>


                <br></br>

                <p><strong>Repetitive structures - for loops:</strong></p>
                <p>
                    A for loop is a control structure that allows you to execute a block of code
                    repeatedly for a specified number of iterations. It consists of three main parts: initialization,
                    a condition to check before each iteration, and an increment or decrement operation to update the loop variable.
                </p>
                <p><strong>for loop example:</strong></p>
                <pre>
                    {'for(int i = 0; i < 20; i++) {\n' +
                        '\tif(i % 2 == 0) {\n' +
                        '\t\tSystem.out.println(i);\n' +
                        '\t}\n' +
                        '}'
                    }
                </pre>
                <p>
                    This basic program prints the even numbers that are strictly less than 20.
                    Although for loops can do much more, this example is intentionally simple.
                    <br></br>
                    Try and adjust this program to print odd numbers instead of even numbers.
                </p>

                <br></br>
                <p><strong>Repetitive structures - while loops:</strong></p>
                <p>
                    A while loop in Java is a control flow statement that repeatedly executes a block of code as long as a specified condition is true.
                    The loop checks the condition before each iteration, and if it evaluates to false, the loop terminates.
                </p>
                <pre>
                    {'int i = 10;\n' +
                        'while(i < 20) {\n' +
                        '\tSystem.out.println("I am learning Java");\n' +
                        '\ti++;\n' +
                        '}'
                    }
                </pre>
                <p>
                    This program uses a <strong>while loop</strong> to repeatedly check whether i is strictly less than 20.
                    As long as the condition evaluates to true, the message "I am learning Java" is printed to the screen.
                    After each iteration, i is incremented by 1.
                    Once i reaches 20, the condition becomes false and the loop terminates.
                    <br></br>
                    <strong>The increment operation</strong> is essential—without it, the value of i would never change,
                    causing the condition to remain true forever and resulting in an <strong>infinite loop</strong>.
                </p>

                <br></br>
                <p>
                    <strong>
                        What is the difference between for loops and while loops?
                    </strong>
                </p>
                    <ul>
                        <li>
                            <strong>The for loop</strong> is used when you know in advance how many times you want to execute
                            the block of code <strong>(known number of steps)</strong>.
                        </li>
                        <li>
                            <strong>The while loop</strong> is used when you do not know how many steps you want to execute
                            the block of code <strong>(unknown number of steps)</strong>.
                            It continues to execute as long as the specified condition is true.
                        </li>
                        <li>
                            <strong>In a while loop</strong>, it is essential to make sure that the condition eventually becomes
                            <strong> false</strong>; otherwise, the loop will run indefinitely, resulting in an infinite loop.
                        </li>
                    </ul>
            </section>
        </div>
    );
}

export default Section1Theory;
