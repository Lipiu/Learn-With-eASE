import "../Section1/SectionTheory.css";

function Section2Theory() {
    return (
        <div className="theory-container">
            <h2 className="theory-title">
                Section 2 – Object-Oriented Programming Basics
            </h2>

            <section>
                <h3>1. What is Object-Oriented Programming?</h3>
                <p>
                    Object-oriented programming (OOP) in Java is a programming paradigm
                    that uses <strong>objects</strong> to represent data and methods to
                    manipulate that data.
                    Key concepts include classes, encapsulation, inheritance,
                    and polymorphism, which help organize code and promote reusability.
                </p>
            </section>

            <section>
                <h3>2. Classes and Objects</h3>
                <p>
                    A <strong>class</strong> is a blueprint for creating objects.
                    An <strong>object</strong> is an instance of a class.
                </p>

                <pre>
                    { 'class Car {\n' +
                        '\tString brand;\n' +
                        '\tint year;\n\n' +
                        '\tvoid start() {\n' +
                        '\t\tSystem.out.println("Car started");\n' +
                        '\t}\n' +
                        '}\n\n' +
                        'public class Garage {\n'+
                        '\tpublic static void main(String args[]){\n'+

                        '\t\tCar myCar = new Car();\n' +
                        '\t\tmyCar.start();' +
                        '\n\t}' +
                        '\n}'
                    }
                </pre>
                <p>
                    Code section flow:
                </p>
                <ul>
                    <li><strong>Step 1:</strong> We define a <code>Car</code> class with two fields: <code>brand</code> (String) and <code>year</code> (int).</li>
                    <li>
                        <strong>Step 2:</strong> We define a method <code>start()</code> inside <code>Car</code> that prints <em>"Car started"</em> to the console when called.
                    </li>
                    <li>
                        <strong>Step 3:</strong> We create a <code>Garage</code> class with a <code>main</code> method to run the program.
                    </li>
                    <li>
                        <strong>Step 4:</strong> Inside <code>main</code>, we create an object called <code>myCar</code> of type <code>Car</code>.
                    </li>
                    <li>
                        <strong>Step 5:</strong> We call the <code>start()</code> method on <code>myCar</code>, which outputs <em>"Car started"</em> to the console.
                    </li>
                </ul>
            </section>

            <section>
                <h3>3. Encapsulation</h3>
                <p>
                    <strong>Encapsulation</strong> is the principle of hiding
                    internal details of a class and controlling access to its data.
                    In Java, this is usually done by declaring fields as
                    <code>private</code> and providing <em>getter</em> and <em>setter</em> methods
                    to access and modify them safely.
                    This ensures that the internal state of an object
                    cannot be changed in unexpected ways.
                </p>

                <p>
                    <strong>Note on Java access levels:<br></br></strong>
                    Besides <code>private</code> and <code>public</code>, Java has:
                    <ul>
                        <li><code>protected</code>: accessible within the same package and by subclasses.</li>
                        <li><code>package-private</code> (default, no modifier): accessible only within the same package.</li>
                    </ul>
                </p>

                <pre>
                    { 'class Person {\n' +
                        '\tprivate String name;\n\n' +
                        '\tpublic String getName() {\n' +
                        '\t\treturn name;\n' +
                        '\t}\n\n' +
                        '\tpublic void setName(String name) {\n' +
                        '\t\tthis.name = name;\n' +
                        '\t}\n' +
                        '}'
                    }
                </pre>

                <p>
                    Step by step explanation:
                </p>

                <ul>
                    <li><strong>Step 1:</strong> The field <code>name</code> is declared <code>private</code>, meaning it cannot be accessed directly from outside the <code>Person</code> class.</li>
                    <li><strong>Step 2:</strong> The <code>getName()</code> method is <code>public</code>, allowing code outside the class to read the value of <code>name</code> safely.</li>
                    <li><strong>Step 3:</strong> The <code>setName(String name)</code> method is <code>public</code>, allowing external code to modify <code>name</code> in a controlled way.</li>
                    <li><strong>Step 4:</strong> Using getters and setters ensures that you can validate or modify the input/output without exposing internal fields directly.</li>
                </ul>

                <pre>
                    {'public class TestPerson {\n' +
                        '\tpublic static void main(String[] args) {\n' +
                        '\t\t// Step 1: Create a Person object\n' +
                        '\t\tPerson person = new Person();\n\n' +
                        '\t\t// Step 2: Set the name using the setter\n' +
                        '\t\tperson.setName("Alice");\n\n' +
                        '\t\t// Step 3: Get the name using the getter and print it\n' +
                        '\t\tSystem.out.println("Person name: " + person.getName());\n' +
                        '\t}\n' +
                        '}' }
                </pre>
                <p>After using the getters and setters, can you guess what the output will be?</p>

            </section>

            <section>
                <h3>4. Inheritance</h3>
                <p>
                    <strong>Inheritance</strong> allows one class to inherit properties and methods
                    from another class using the <strong>extends</strong> keyword.
                </p>

                <pre>
                    { 'class Animal {\n' +
                        '\tvoid sound() {\n' +
                        '\t\tSystem.out.println("Animal makes sound");\n' +
                        '\t}\n' +
                        '}\n\n' +
                        'class Dog extends Animal {\n' +
                        '\tvoid bark() {\n' +
                        '\t\tSystem.out.println("Dog barks");\n' +
                        '\t}\n' +
                        '}'
                    }
                </pre>

                <p>
                    Step by step explanation:
                </p>
                <ul>
                    <li><strong>Step 1:</strong> We define the parent class <code>Animal</code> which has a method <code>sound()</code>.
                        This represents a generic behavior all animals might have.</li>
                    <li><strong>Step 2:</strong> We define child class <code>Dog</code> that <code>extends Animal</code>.
                        This means <code>Dog</code> automatically inherits all methods from <code>Animal</code>, including <code>sound()</code>.</li>
                    <li><strong>Step 3:</strong> The <code>Dog</code> class also has its own method <code>bark()</code>, which is specific to dogs.</li>
                    <li><strong>Step 4:</strong> Now, a <code>Dog</code> object can call both <code>sound()</code> (inherited from Animal) and <code>bark()</code> (defined in Dog).</li>
                </ul>

                <pre>
                    { 'public class TestInheritance {\n' +
                        '\tpublic static void main(String[] args) {\n' +
                        '\t\tDog myDog = new Dog();\n' +
                        '\t\tmyDog.sound(); // Calls method inherited from Animal\n' +
                        '\t\tmyDog.bark();  // Calls method from Dog class\n' +
                        '\t}\n' +
                        '}' }
                </pre>
                <p>Try and guess the output for myDog.sound() and myDog.bark()</p>

            </section>

            <section>
                <h3>5. Polymorphism</h3>
                <p>
                    <strong>Polymorphism</strong> is a core concept in Java where an
                    object can take many forms.
                    It allows a variable of a parent class type to refer to objects of child classes.
                    This enables methods to behave differently depending on the actual object
                    type at runtime.
                </p>

                <pre>
                    { 'class Human {\n' +
                        '\tvoid info() {\n' +
                        '\t\tSystem.out.println("I am a human!");\n' +
                        '\t}\n' +
                        '}\n\n' +
                        'class Student extends Human {\n' +
                        '\t@Override\n' +
                        '\tvoid info() {\n' +
                        '\t\tSystem.out.println("I am a student"); // Overrides the info() method from Human\n' +
                        '\t}\n' +
                        '}' }
                </pre>

                <ul>
                    <li><strong>Step 1:</strong> We define the parent class <code>Human</code> which has a method <code>info()</code>.</li>
                    <li><strong>Step 2:</strong> We define the child class <code>Student</code> that <code>extends Human</code>.
                        This means <code>Student</code> automatically inherits all methods from <code>Human</code>, including <code>info()</code>.</li>
                    <li><strong>Step 3:</strong> The <code>Student</code> class <strong>overrides</strong> the <code>info()</code> method to provide its own implementation.
                        We use <code>@Override</code> to indicate that this method replaces the parent class method.</li>
                    <li><strong>Step 4:</strong> Now, calling <code>info()</code> on a <code>Student</code> object prints "I am a student",
                        while calling <code>info()</code> on a <code>Human</code> object prints "I am a human!".</li>
                    <li><strong>Step 5 (Polymorphism):</strong> A <code>Human</code> reference can hold a <code>Student</code> object.
                        When calling <code>info()</code> on this reference, Java uses the actual object type (<code>Student</code>) at runtime, printing "I am a student".</li>
                </ul>


            </section>
        </div>
    );
}

export default Section2Theory;
