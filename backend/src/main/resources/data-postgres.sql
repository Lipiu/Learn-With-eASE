INSERT INTO coding_exercise (title, description, starter_code, expected_output, section_number)
SELECT 'Hello World',
       'Write a program that prints exactly: Hello, World!',
       E'public class Main {\n    public static void main(String[] args) {\n        // write your code here\n    }\n}',
    'Hello, World!',
       1
    WHERE NOT EXISTS (SELECT 1 FROM coding_exercise WHERE title = 'Hello World');

INSERT INTO coding_exercise (title, description, starter_code, expected_output, section_number)
SELECT 'Print Your Name',
       'Create variables for your first name, last name, and age. Print them in this exact format: Name: John Doe, Age: 20',
       E'public class Main {\n    public static void main(String[] args) {\n        // declare a String variable for first name\n        // declare a String variable for last name\n        // declare an int variable for age\n        // print the result\n    }\n}',
    'Name: John Doe, Age: 20',
       1
    WHERE NOT EXISTS (SELECT 1 FROM coding_exercise WHERE title = 'Print Your Name');

INSERT INTO coding_exercise (title, description, starter_code, expected_output, section_number)
SELECT 'Even or Odd',
       'Using an if/else statement, check if the number 7 is even or odd. Print exactly: Odd',
       E'public class Main {\n    public static void main(String[] args) {\n        int number = 7;\n        // write your if/else statement here\n    }\n}',
    'Odd',
       1
    WHERE NOT EXISTS (SELECT 1 FROM coding_exercise WHERE title = 'Even or Odd');

INSERT INTO coding_exercise (title, description, starter_code, expected_output, section_number)
SELECT 'Sum with For Loop',
       'Use a for loop to calculate the sum of numbers from 1 to 5 and print the result. Expected output: 15',
       E'public class Main {\n    public static void main(String[] args) {\n        int sum = 0;\n        // write your for loop here\n        System.out.println(sum);\n    }\n}',
    '15',
       1
    WHERE NOT EXISTS (SELECT 1 FROM coding_exercise WHERE title = 'Sum with For Loop');

INSERT INTO coding_exercise (title, description, starter_code, expected_output, section_number)
SELECT 'Countdown with While Loop',
       'Use a while loop to print a countdown from 3 to 1, each number on a new line.',
       E'public class Main {\n    public static void main(String[] args) {\n        int i = 3;\n        // write your while loop here\n    }\n}',
    E'3\n2\n1\n',
    1
    WHERE NOT EXISTS (SELECT 1 FROM coding_exercise WHERE title = 'Countdown with While Loop');