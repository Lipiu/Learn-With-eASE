import '../Section1/SectionTheory.css';

function Section4Theory(){
    return(
        <div className="theory-container">
            <h2 className="theory-title">
                Section 4 – Streams, Lambdas & Exceptions
            </h2>

            <section>
                <h3>1. What are Streams?</h3>

                <p>
                    <strong>Streams</strong> (introduced in Java 8) allow functional-style
                    operations on collections. They help process data in a declarative way.
                </p>

                <ul>
                    <li>Do not store data (they operate on collections).</li>
                    <li>Support operations like filter, map, sorted, reduce.</li>
                    <li>Can be chained together.</li>
                </ul>

                <h2>Stream Example</h2>
                <pre>
                    {
                        'class StreamExample {\n' +
                        '\tpublic static void main(String[] args) {\n' +
                        '\t\tList<String> names = Arrays.asList("Ana", "John", "Alex", "Maria");\n\n' +
                        '\t\tnames.stream()\n' +
                        '\t\t\t.filter(name -> name.startsWith("A"))\n' +
                        '\t\t\t.sorted()\n' +
                        '\t\t\t.forEach(System.out::println);\n' +
                        '\t}\n' +
                        '}\n'
                    }
                </pre>

                <p>
                    In this example, we create a stream from a list.
                    We filter names that start with "A", sort them,
                    and print them using <code>forEach()</code>.
                </p>


                <h3>2. What are Lambda Expressions?</h3>

                <p>
                    <strong>Lambda expressions</strong> provide a short way to implement
                    functional interfaces (interfaces with one abstract method).
                </p>

                <ul>
                    <li>Reduce boilerplate code.</li>
                    <li>Commonly used with Streams.</li>
                    <li>Syntax: (parameters) -> expression</li>
                </ul>

                <h2>Lambda Example</h2>
                <pre>
                    {
                        'class LambdaExample {\n' +
                        '\tpublic static void main(String[] args) {\n' +
                        '\t\tList<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);\n\n' +
                        '\t\tnumbers.forEach(n -> System.out.println(n * 2));\n' +
                        '\t}\n' +
                        '}\n'
                    }
                </pre>

                <p>
                    Here, <code>n {'->'} System.out.println(n * 2)</code>
                    is a lambda expression. It takes a number and prints
                    its double value.
                </p>

                <h3>3. What are Exceptions?</h3>

                <p>
                    <strong>Exceptions</strong> are events that occur during program execution
                    and disrupt the normal flow of instructions.
                </p>

                <ul>
                    <li>Checked exceptions (must be handled).</li>
                    <li>Unchecked exceptions (RuntimeException).</li>
                    <li>Handled using try-catch-finally blocks.</li>
                </ul>

                <h2>Exception Example</h2>
                <pre>
                    {
                        'class ExceptionExample {\n' +
                        '\tpublic static void main(String[] args) {\n' +
                        '\t\ttry {\n' +
                        '\t\t\tint result = 10 / 0;\n' +
                        '\t\t\tSystem.out.println(result);\n' +
                        '\t\t} catch (ArithmeticException e) {\n' +
                        '\t\t\tSystem.out.println("Cannot divide by zero!");\n' +
                        '\t\t} finally {\n' +
                        '\t\t\tSystem.out.println("Execution finished.");\n' +
                        '\t\t}\n' +
                        '\t}\n' +
                        '}\n'
                    }
                </pre>

                <p>
                    The division by zero throws an <code>ArithmeticException</code>.
                    The <code>catch</code> block handles the error,
                    and <code>finally</code> always executes.
                </p>

            </section>
        </div>
    )
}

export default Section4Theory;
