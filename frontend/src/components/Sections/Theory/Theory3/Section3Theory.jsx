import '../../Section/SectionTheory.css';

function Section3Theory(){
    return(
        <div className="theory-container">
            <h2 className="theory-title">
                Section 3 – Java Collections & Generics
            </h2>

            <section id="collections">
                <h3>1. What are Java Collections?</h3>
                <p>
                    <strong>Java Collection Framework (JCF)</strong> is a set of classes and interfaces
                    that provide ready-made data structures to store and manipulate groups of objects efficiently.
                    Java provides collection interfaces like:
                </p>
                <ul>
                    <li>
                        <strong>List</strong> - An ordered collection (sequence).
                        You have precise control over where each element is inserted.<br/>
                        Elements can be accessed by their integer index (zero-based).<br/>
                        Lists typically allow duplicate elements (e.g., e1.equals(e2)).<br/>
                        May allow multiple null elements (depending on implementation).<br/>
                        Provides positional access, search operations, and a special ListIterator for bidirectional traversal, insertion, and replacement.<br/>
                        Some implementations may restrict nulls or element types and throw runtime exceptions (e.g., NullPointerException, ClassCastException).
                    </li>
                    <li>
                        <strong>Set</strong> - A collection that contains no duplicate elements.<br/>
                        No two elements e1 and e2 such that e1.equals(e2).<br/>
                        Allows at most one null element (depending on implementation).<br/>
                        Constructors must create sets without duplicates.<br/>
                        Mutable elements that affect equals() should not be modified while in the set.<br/>
                        Some implementations may restrict nulls or element types and throw runtime exceptions.
                    </li>
                    <li>
                        <strong>Map</strong> - An object that maps keys to values (no duplicate keys are allowed).<br/>
                        Each key can map to at most one value.<br/>
                        Provides collection views: set of keys, collection of values, and set of key-value pairs.<br/>
                        Some implementations guarantee order (e.g., TreeMap), others do not (e.g., HashMap).<br/>
                        Mutable keys that affect equals()/hashCode() must not be modified while in the map.<br/>
                        May restrict nulls or certain key/value types and throw runtime exceptions (e.g., NullPointerException, ClassCastException).<br/>
                        Modifying operations may throw UnsupportedOperationException if not supported.
                    </li>
                    <li>
                        <strong>Queue</strong> - A collection designed for holding elements prior to processing.<br/>
                        Provides insertion, removal, and inspection operations in two forms:<br/>
                        • add(e) / offer(e) – insert (offer returns false if it fails)<br/>
                        • remove() / poll() – remove head (remove throws exception if empty, poll returns null)<br/>
                        • element() / peek() – examine head without removing (element throws exception, peek returns null)<br/>
                        Typically FIFO, but may use other orderings (e.g., PriorityQueue, LIFO).<br/>
                        Usually does not allow null elements (null is used as a special return value).<br/>
                        Blocking operations are defined in BlockingQueue, not Queue.
                    </li>
                </ul>

                <h3>Now let's see an example for each</h3>

                <h2>List</h2>
                <pre>
                    { 'class MyList {\n' +
                        '\tpublic static void main(String[] args){\n' +
                        '\t\tList<String> myFirstList = new ArrayList<>();\n\n' +
                        '\t\tmyFirstList.add("Java");\n' +
                        '\t\tmyFirstList.add("Python");\n' +
                        '\t\tmyFirstList.add("C++");\n' +
                        '\t\tSystem.out.println("Programming languages: ");\n\n' +
                        '\t\t//Now we print the elements of the list\n'+
                        '\t\tfor(String language : myFirstList){\n'+
                        '\t\t\tSystem.out.println(language)\n'+
                        '\t\t}\n' +
                        '\t}\n' +
                        '}\n'
                    }
                </pre>

                <p>
                    In this example, we create an <strong>ArrayList</strong> that stores strings.
                    We add three programming languages using <code>add()</code>.
                    Lists allow duplicates and preserve insertion order.
                    We iterate through the list using a for-each loop and print each element.
                </p>

                <h2>Set</h2>
                <pre>
                    {
                        'class MySet {\n' +
                        '\tpublic static void main(String[] args){\n' +
                        '\t\tSet<String> set = new HashSet<>();\n\n' +
                        '\t\tset.add("Java");\n' +
                        '\t\tset.add("Python");\n' +
                        '\t\tset.add("Java"); // duplicate, will not be added\n\n' +
                        '\t\tSystem.out.println("Programming languages: ");\n\n' +
                        '\t\tfor(String language : set){\n' +
                        '\t\t\tSystem.out.println(language);\n' +
                        '\t\t}\n' +
                        '\t}\n' +
                        '}\n'
                    }
                </pre>

                <p>
                    Here we use a <strong>HashSet</strong>, which does not allow duplicate elements.
                    When we try to add "Java" twice, the second insertion is ignored.
                    Sets do not guarantee insertion order (in the case of HashSet).
                    We iterate through the set using a for-each loop.
                </p>

                <h2>Map</h2>
                <pre>
                    {
                        'class MyMap {\n' +
                        '\tpublic static void main(String[] args){\n' +
                        '\t\tMap<Integer, String> map = new HashMap<>();\n\n' +
                        '\t\tmap.put(1, "Java");\n' +
                        '\t\tmap.put(2, "Python");\n' +
                        '\t\tmap.put(3, "C++");\n\n' +
                        '\t\tSystem.out.println("Programming languages: ");\n\n' +
                        '\t\tfor(Map.Entry<Integer, String> entry : map.entrySet()){\n' +
                        '\t\t\tSystem.out.println(entry.getKey() + " -> " + entry.getValue());\n' +
                        '\t\t}\n' +
                        '\t}\n' +
                        '}\n'
                    }
                </pre>

                <p>
                    In this example, we use a <strong>HashMap</strong> to store key-value pairs.
                    Each key is unique and maps to exactly one value.
                    We insert elements using <code>put()</code>.
                    We iterate through the map using <code>entrySet()</code> to access both keys and values.
                </p>


                <h2>Queue</h2>
                <pre>
                    {
                        'class MyQueue {\n' +
                        '\tpublic static void main(String[] args){\n' +
                        '\t\tQueue<String> queue = new LinkedList<>();\n\n' +
                        '\t\tqueue.offer("Java");\n' +
                        '\t\tqueue.offer("Python");\n' +
                        '\t\tqueue.offer("C++");\n\n' +
                        '\t\tSystem.out.println("Head of queue: " + queue.peek());\n\n' +
                        '\t\twhile(!queue.isEmpty()){\n' +
                        '\t\t\tSystem.out.println(queue.poll());\n' +
                        '\t\t}\n' +
                        '\t}\n' +
                        '}\n'
                    }
                </pre>

                <p>
                    Here we use a <strong>Queue</strong> implemented with <strong>LinkedList</strong>.
                    Elements are inserted using <code>offer()</code>.
                    The method <code>peek()</code> shows the head of the queue without removing it.
                    The method <code>poll()</code> removes elements in FIFO order (First-In-First-Out)
                    until the queue becomes empty.
                </p>
            </section>
                <section id="generics">
                <h3>2. What are Generics?</h3>

                <p>
                    <strong>Generics</strong> allow classes, interfaces, and methods to operate on types
                    specified by the user. They provide <strong>type safety</strong> and eliminate the need
                    for explicit casting.
                </p>

                <ul>
                    <li>Enable compile-time type checking.</li>
                    <li>Eliminate ClassCastException at runtime (in most cases).</li>
                    <li>Improve code readability and reusability.</li>
                </ul>

                <h2>Generic Class Example</h2>
                <pre>
                    {
                        'class Box<T> {\n' +
                        '\tprivate T value;\n\n' +
                        '\tpublic void set(T value) {\n' +
                        '\t\tthis.value = value;\n' +
                        '\t}\n\n' +
                        '\tpublic T get() {\n' +
                        '\t\treturn value;\n' +
                        '\t}\n' +
                        '}\n\n' +
                        'class TestBox {\n' +
                        '\tpublic static void main(String[] args) {\n' +
                        '\t\tBox<String> stringBox = new Box<>();\n' +
                        '\t\tstringBox.set("Hello Generics");\n' +
                        '\t\tSystem.out.println(stringBox.get());\n' +
                        '\t}\n' +
                        '}\n'
                    }
                </pre>

                <p>
                    In this example, <code>&lt;T&gt;</code> represents a generic type.
                    The class <strong>Box</strong> can store any type specified when the object is created.
                    Here, we create a <code>Box&lt;String&gt;</code>, so it only accepts String values.
                </p>

                <h2>Generic Method Example</h2>
                <pre>
                    {
                        'class MyGenericMethod {\n' +
                        '\tpublic static <T> void printArray(T[] array) {\n' +
                        '\t\tfor (T element : array) {\n' +
                        '\t\t\tSystem.out.println(element);\n' +
                        '\t\t}\n' +
                        '\t}\n\n' +
                        '\tpublic static void main(String[] args) {\n' +
                        '\t\tInteger[] numbers = {1, 2, 3};\n' +
                        '\t\tString[] words = {"Java", "Python"};\n\n' +
                        '\t\tprintArray(numbers);\n' +
                        '\t\tprintArray(words);\n' +
                        '\t}\n' +
                        '}\n'
                    }
                </pre>

                <p>
                    Here we define a <strong>generic method</strong> using <code>&lt;T&gt;</code>
                    before the return type. The method works with any type of array.
                    This improves reusability and keeps the code type-safe.
                </p>


            </section>
        </div>
    )
}
export default Section3Theory;