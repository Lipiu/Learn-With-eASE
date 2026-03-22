-- Section 1 exercises
INSERT INTO coding_exercise (coding_exercise_title
                            , description, starter_code, expected_output, section_number)
SELECT 'Hello World',
       'Write a program that prints exactly: Hello, World!',
       E'public class Main {\n    public static void main(String[] args) {\n        // write your code here\n    }\n}',
    'Hello, World!',
       1
    WHERE NOT EXISTS (SELECT 1 FROM coding_exercise WHERE coding_exercise_title
     = 'Hello World');

INSERT INTO coding_exercise (coding_exercise_title
                            , description, starter_code, expected_output, section_number)
SELECT 'Print Your Name',
       'Create variables for your first name, last name, and age. Print them in this exact format: Name: John Doe, Age: 20',
       E'public class Main {\n    public static void main(String[] args) {\n        // declare a String variable for first name\n        // declare a String variable for last name\n        // declare an int variable for age\n        // print the result\n    }\n}',
    'Name: John Doe, Age: 20',
       1
    WHERE NOT EXISTS (SELECT 1 FROM coding_exercise WHERE coding_exercise_title
     = 'Print Your Name');

INSERT INTO coding_exercise (coding_exercise_title
                            , description, starter_code, expected_output, section_number)
SELECT 'Even or Odd',
       'Using an if/else statement, check if the number 7 is even or odd. Print exactly: Odd',
       E'public class Main {\n    public static void main(String[] args) {\n        int number = 7;\n        // write your if/else statement here\n    }\n}',
    'Odd',
       1
    WHERE NOT EXISTS (SELECT 1 FROM coding_exercise WHERE coding_exercise_title
     = 'Even or Odd');

INSERT INTO coding_exercise (coding_exercise_title
                            , description, starter_code, expected_output, section_number)
SELECT 'Sum with For Loop',
       'Use a for loop to calculate the sum of numbers from 1 to 5 and print the result. Expected output: 15',
       E'public class Main {\n    public static void main(String[] args) {\n        int sum = 0;\n        // write your for loop here\n        System.out.println(sum);\n    }\n}',
    '15',
       1
    WHERE NOT EXISTS (SELECT 1 FROM coding_exercise WHERE coding_exercise_title
     = 'Sum with For Loop');

INSERT INTO coding_exercise (coding_exercise_title
                            , description, starter_code, expected_output, section_number)
SELECT 'Countdown with While Loop',
       'Use a while loop to print a countdown from 3 to 1, each number on a new line.',
       E'public class Main {\n    public static void main(String[] args) {\n        int i = 3;\n        // write your while loop here\n    }\n}',
    E'3\n2\n1\n',
    1
    WHERE NOT EXISTS (SELECT 1 FROM coding_exercise WHERE coding_exercise_title
     = 'Countdown with While Loop');

-- Section 2 exercises
INSERT INTO coding_exercise (coding_exercise_title
                            , description, starter_code, expected_output, section_number)
SELECT 'Create a Car Object',
       'Create a Car class with a brand field (String) and a method called drive() that prints: Toyota is driving. Then create a Car object in main, set the brand to Toyota and call drive().',
       E'public class Main {\n    public static void main(String[] args) {\n        // create a Car object here and call drive()\n    }\n}\n\n// create the Car class below with a brand field and drive() method',
    'Toyota is driving',
       2
    WHERE NOT EXISTS (SELECT 1 FROM coding_exercise WHERE coding_exercise_title
     = 'Create a Car Object');

INSERT INTO coding_exercise (coding_exercise_title
                            , description, starter_code, expected_output, section_number)
SELECT 'Encapsulation - Person',
       'Create a Person class with a private name field, a getter and a setter. In main, create a Person, set the name to Alice and print: Person name: Alice',
       E'public class Main {\n    public static void main(String[] args) {\n        Person person = new Person();\n        // set name to Alice\n        // print "Person name: " + person.getName()\n    }\n}\n\n// create the Person class below with a private name field, getter and setter',
    'Person name: Alice',
       2
    WHERE NOT EXISTS (SELECT 1 FROM coding_exercise WHERE coding_exercise_title
     = 'Encapsulation - Person');

INSERT INTO coding_exercise (coding_exercise_title
                            , description, starter_code, expected_output, section_number)
SELECT 'Inheritance - Animal and Dog',
       'Create an Animal class with a sound() method that prints: Animal makes sound. Create a Dog class that extends Animal and adds a bark() method that prints: Dog barks. Call both methods on a Dog object.',
       E'public class Main {\n    public static void main(String[] args) {\n        Dog myDog = new Dog();\n        myDog.sound();\n        myDog.bark();\n    }\n}\n\n// create Animal class with sound() method\n// create Dog class that extends Animal with bark() method',
    E'Animal makes sound\nDog barks',
    2
    WHERE NOT EXISTS (SELECT 1 FROM coding_exercise WHERE coding_exercise_title
     = 'Inheritance - Animal and Dog');

INSERT INTO coding_exercise (coding_exercise_title
                            , description, starter_code, expected_output, section_number)
SELECT 'Polymorphism - Override info()',
       'Create a Human class with an info() method that prints: I am a human!. Create a Student class that extends Human and overrides info() to print: I am a student. Use a Human reference to hold a Student object and call info().',
       E'public class Main {\n    public static void main(String[] args) {\n        Human h = new Student();\n        h.info();\n    }\n}\n\n// create Human class with info() method\n// create Student class that extends Human and overrides info()',
    'I am a student',
       2
    WHERE NOT EXISTS (SELECT 1 FROM coding_exercise WHERE coding_exercise_title
     = 'Polymorphism - Override info()');

INSERT INTO coding_exercise (coding_exercise_title
                            , description, starter_code, expected_output, section_number)
SELECT 'Putting it all together',
       'Create a BankAccount class with a private balance field (double), a deposit(double amount) method that adds to the balance, and a getBalance() method. Deposit 500.0 and print: Balance: 500.0',
       E'public class Main {\n    public static void main(String[] args) {\n        BankAccount account = new BankAccount();\n        // deposit 500.0\n        // print "Balance: " + account.getBalance()\n    }\n}\n\n// create BankAccount class with private balance, deposit() and getBalance()',
    'Balance: 500.0',
       2
    WHERE NOT EXISTS (SELECT 1 FROM coding_exercise WHERE coding_exercise_title
     = 'Putting it all together');

-- Section 3 exercises
INSERT INTO coding_exercise (coding_exercise_title
                            , description, starter_code, expected_output, section_number)
SELECT 'ArrayList of Languages',
       'Create an ArrayList of Strings, add Java, Python and C++ to it, then print each element on a new line.',
       E'import java.util.ArrayList;\nimport java.util.List;\n\npublic class Main {\n    public static void main(String[] args) {\n        // create an ArrayList of Strings\n        // add Java, Python, C++\n        // print each element\n    }\n}',
    E'Java\nPython\nC++',
    3
    WHERE NOT EXISTS (SELECT 1 FROM coding_exercise WHERE coding_exercise_title
     = 'ArrayList of Languages');

INSERT INTO coding_exercise (coding_exercise_title
                            , description, starter_code, expected_output, section_number)
SELECT 'HashSet - No Duplicates',
       'Create a HashSet of Strings, add Java, Python and Java again. Print the size of the set. Expected output: 2',
       E'import java.util.HashSet;\nimport java.util.Set;\n\npublic class Main {\n    public static void main(String[] args) {\n        // create a HashSet of Strings\n        // add Java, Python, Java\n        // print the size\n    }\n}',
    '2',
       3
    WHERE NOT EXISTS (SELECT 1 FROM coding_exercise WHERE coding_exercise_title
     = 'HashSet - No Duplicates');

INSERT INTO coding_exercise (coding_exercise_title
                            , description, starter_code, expected_output, section_number)
SELECT 'HashMap - Get Value',
       'Create a HashMap with Integer keys and String values. Add the entry (1, Java). Print the value for key 1. Expected output: Java',
       E'import java.util.HashMap;\nimport java.util.Map;\n\npublic class Main {\n    public static void main(String[] args) {\n        // create a HashMap\n        // add (1, Java)\n        // print the value for key 1\n    }\n}',
    'Java',
       3
    WHERE NOT EXISTS (SELECT 1 FROM coding_exercise WHERE coding_exercise_title
     = 'HashMap - Get Value');

INSERT INTO coding_exercise (coding_exercise_title
                            , description, starter_code, expected_output, section_number)
SELECT 'Queue - FIFO Order',
       'Create a Queue using LinkedList, add Java, Python and C++ using offer(). Poll all elements and print each one on a new line.',
       E'import java.util.LinkedList;\nimport java.util.Queue;\n\npublic class Main {\n    public static void main(String[] args) {\n        // create a Queue using LinkedList\n        // add Java, Python, C++\n        // poll and print each element\n    }\n}',
    E'Java\nPython\nC++',
    3
    WHERE NOT EXISTS (SELECT 1 FROM coding_exercise WHERE coding_exercise_title
     = 'Queue - FIFO Order');

INSERT INTO coding_exercise (coding_exercise_title
                            , description, starter_code, expected_output, section_number)
SELECT 'Generic Box',
       'Create a generic Box<T> class with a private value field, a set() method and a get() method. In main, create a Box<String>, set the value to Hello Generics and print it.',
       E'public class Main {\n    public static void main(String[] args) {\n        Box<String> box = new Box<>();\n        // set value to "Hello Generics"\n        // print the value\n    }\n}\n\n// create the Box<T> class with a private value field, set() and get() methods',
    'Hello Generics',
       3
    WHERE NOT EXISTS (SELECT 1 FROM coding_exercise WHERE coding_exercise_title
     = 'Generic Box');

-- Section 4 exercises
INSERT INTO coding_exercise (coding_exercise_title
                            , description, starter_code, expected_output, section_number)
SELECT 'Filter with Stream',
       'Use a stream to filter names that start with A from the list [Ana, John, Alex, Maria], sort them and print each on a new line.',
       E'import java.util.Arrays;\nimport java.util.List;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList("Ana", "John", "Alex", "Maria");\n        // use stream to filter names starting with A, sort and print\n    }\n}',
    E'Alex\nAna',
    4
    WHERE NOT EXISTS (SELECT 1 FROM coding_exercise WHERE coding_exercise_title
     = 'Filter with Stream');

INSERT INTO coding_exercise (coding_exercise_title
                            , description, starter_code, expected_output, section_number)
SELECT 'Lambda - Double Numbers',
       'Use a lambda expression with forEach to print each number doubled from the list [1, 2, 3, 4, 5].',
       E'import java.util.Arrays;\nimport java.util.List;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);\n        // use forEach with a lambda to print each number doubled\n    }\n}',
    E'2\n4\n6\n8\n10',
    4
    WHERE NOT EXISTS (SELECT 1 FROM coding_exercise WHERE coding_exercise_title
     = 'Lambda - Double Numbers');

INSERT INTO coding_exercise (coding_exercise_title
                            , description, starter_code, expected_output, section_number)
SELECT 'Stream - Count Elements',
       'Use a stream to count how many names in the list [Ana, John, Alex, Maria] start with A. Print the count.',
       E'import java.util.Arrays;\nimport java.util.List;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList("Ana", "John", "Alex", "Maria");\n        // use stream filter and count\n        // print the result\n    }\n}',
    '2',
       4
    WHERE NOT EXISTS (SELECT 1 FROM coding_exercise WHERE coding_exercise_title
     = 'Stream - Count Elements');

INSERT INTO coding_exercise (coding_exercise_title
                            , description, starter_code, expected_output, section_number)
SELECT 'Handle ArithmeticException',
       'Write a program that tries to divide 10 by 0. Catch the ArithmeticException and print: Cannot divide by zero! Then in the finally block print: Execution finished.',
       E'public class Main {\n    public static void main(String[] args) {\n        // write try-catch-finally block here\n    }\n}',
    E'Cannot divide by zero!\nExecution finished.',
    4
    WHERE NOT EXISTS (SELECT 1 FROM coding_exercise WHERE coding_exercise_title
     = 'Handle ArithmeticException');

INSERT INTO coding_exercise (coding_exercise_title
                            , description, starter_code, expected_output, section_number)
SELECT 'Stream - Sum with Reduce',
       'Use a stream with reduce to calculate the sum of [1, 2, 3, 4, 5] and print the result.',
       E'import java.util.Arrays;\nimport java.util.List;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);\n        // use stream and reduce to calculate the sum\n        // print the result\n    }\n}',
    '15',
       4
    WHERE NOT EXISTS (SELECT 1 FROM coding_exercise WHERE coding_exercise_title
     = 'Stream - Sum with Reduce');

-- Section5 exercises
INSERT INTO coding_exercise (coding_exercise_title
                            , description, starter_code, expected_output, section_number)
SELECT 'BufferedReader from String',
       'Use a BufferedReader with a StringReader to read and print two lines from the string "Hello\nWorld". Print each line on a new line.',
       E'import java.io.BufferedReader;\nimport java.io.StringReader;\nimport java.io.IOException;\n\npublic class Main {\n    public static void main(String[] args) throws IOException {\n        String text = "Hello\\nWorld";\n        // create a BufferedReader using new StringReader(text)\n        // read and print each line\n    }\n}',
    E'Hello\nWorld',
    5
    WHERE NOT EXISTS (SELECT 1 FROM coding_exercise WHERE coding_exercise_title
     = 'BufferedReader from String');

INSERT INTO coding_exercise (coding_exercise_title
                            , description, starter_code, expected_output, section_number)
SELECT 'Try-With-Resources',
       'Use try-with-resources to open a BufferedReader from the string "Java Files". Print the first line.',
       E'import java.io.BufferedReader;\nimport java.io.StringReader;\nimport java.io.IOException;\n\npublic class Main {\n    public static void main(String[] args) {\n        String text = "Java Files";\n        // use try-with-resources with BufferedReader and StringReader\n        // print the first line\n    }\n}',
    'Java Files',
       5
    WHERE NOT EXISTS (SELECT 1 FROM coding_exercise WHERE coding_exercise_title
     = 'Try-With-Resources');

INSERT INTO coding_exercise (coding_exercise_title
                            , description, starter_code, expected_output, section_number)
SELECT 'Count Lines',
       'Use a BufferedReader with a StringReader to count how many lines are in the string "Line1\nLine2\nLine3". Print the count.',
       E'import java.io.BufferedReader;\nimport java.io.StringReader;\nimport java.io.IOException;\n\npublic class Main {\n    public static void main(String[] args) throws IOException {\n        String text = "Line1\\nLine2\\nLine3";\n        // use BufferedReader to count lines\n        // print the count\n    }\n}',
    '3',
       5
    WHERE NOT EXISTS (SELECT 1 FROM coding_exercise WHERE coding_exercise_title
     = 'Count Lines');

INSERT INTO coding_exercise (coding_exercise_title
                            , description, starter_code, expected_output, section_number)
SELECT 'Handle IOException',
       'Use a try-catch block to catch an IOException. Inside the try block throw new IOException("File not found"). In the catch block print: Error: File not found',
       E'import java.io.IOException;\n\npublic class Main {\n    public static void main(String[] args) {\n        // try-catch block\n        // throw new IOException("File not found") inside try\n        // print "Error: File not found" in catch\n    }\n}',
    'Error: File not found',
       5
    WHERE NOT EXISTS (SELECT 1 FROM coding_exercise WHERE coding_exercise_title
     = 'Handle IOException');

INSERT INTO coding_exercise (coding_exercise_title
                            , description, starter_code, expected_output, section_number)
SELECT 'Read and Process Lines',
       'Use a BufferedReader with StringReader to read "10\n20\n30", convert each line to an integer and print the sum.',
       E'import java.io.BufferedReader;\nimport java.io.StringReader;\nimport java.io.IOException;\n\npublic class Main {\n    public static void main(String[] args) throws IOException {\n        String text = "10\\n20\\n30";\n        // use BufferedReader to read each line\n        // convert to int and sum them\n        // print the sum\n    }\n}',
    '60',
       5
    WHERE NOT EXISTS (SELECT 1 FROM coding_exercise WHERE coding_exercise_title
     = 'Read and Process Lines');

-- Section 6 exercises
INSERT INTO coding_exercise (coding_exercise_title
                            , description, starter_code, expected_output, section_number)
SELECT 'TCP vs UDP - Print Differences',
       'Print the following 4 lines describing TCP and UDP:\nTCP: reliable, connection-oriented\nUDP: fast, connectionless\nTCP uses: ServerSocket and Socket\nUDP uses: DatagramSocket and DatagramPacket',
       E'public class Main {\n    public static void main(String[] args) {\n        // print the 4 lines describing TCP and UDP\n    }\n}',
    E'TCP: reliable, connection-oriented\nUDP: fast, connectionless\nTCP uses: ServerSocket and Socket\nUDP uses: DatagramSocket and DatagramPacket',
    6
    WHERE NOT EXISTS (SELECT 1 FROM coding_exercise WHERE coding_exercise_title
     = 'TCP vs UDP - Print Differences');

INSERT INTO coding_exercise (coding_exercise_title
                            , description, starter_code, expected_output, section_number)
SELECT 'InetAddress - Parse Address',
       'Use InetAddress.getByName() to get the address of "127.0.0.1" and print its host address.',
       E'import java.net.InetAddress;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // use InetAddress.getByName("127.0.0.1")\n        // print the host address using getHostAddress()\n    }\n}',
    '127.0.0.1',
       6
    WHERE NOT EXISTS (SELECT 1 FROM coding_exercise WHERE coding_exercise_title
     = 'InetAddress - Parse Address');

DELETE FROM coding_exercise WHERE coding_exercise_title
                                      = 'InetAddress - Get Localhost';

INSERT INTO coding_exercise (coding_exercise_title
                            , description, starter_code, expected_output, section_number)
SELECT 'DatagramPacket - Message Length',
       'Create a byte array from the string "Hello UDP". Create a DatagramPacket using the byte array. Print the length of the packet data.',
       E'import java.net.DatagramPacket;\n\npublic class Main {\n    public static void main(String[] args) {\n        String message = "Hello UDP";\n        // convert message to byte array\n        // create a DatagramPacket\n        // print the packet length\n    }\n}',
    '9',
       6
    WHERE NOT EXISTS (SELECT 1 FROM coding_exercise WHERE coding_exercise_title
     = 'DatagramPacket - Message Length');

INSERT INTO coding_exercise (coding_exercise_title
                            , description, starter_code, expected_output, section_number)
SELECT 'URL - Parse Components',
       'Create a URL object from "https://www.example.com" and print its protocol and host on separate lines.',
       E'import java.net.URL;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        URL url = new URL("https://www.example.com");\n        // print the protocol\n        // print the host\n    }\n}',
    E'https\nwww.example.com',
    6
    WHERE NOT EXISTS (SELECT 1 FROM coding_exercise WHERE coding_exercise_title
     = 'URL - Parse Components');

INSERT INTO coding_exercise (coding_exercise_title
                            , description, starter_code, expected_output, section_number)
SELECT 'Socket Exception Handling',
       'Try to connect to a socket at localhost port 9999. Catch the IOException and print: Connection failed',
       E'import java.net.Socket;\nimport java.io.IOException;\n\npublic class Main {\n    public static void main(String[] args) {\n        // try to create a Socket connecting to localhost port 9999\n        // catch IOException and print "Connection failed"\n    }\n}',
    'Connection failed',
       6
    WHERE NOT EXISTS (SELECT 1 FROM coding_exercise WHERE coding_exercise_title
     = 'Socket Exception Handling');
