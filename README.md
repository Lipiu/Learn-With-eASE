# Interactive Java E-Learning Platform
## Bachelor's Degree Thesis Project - Learn With eASE

## Project Overview

This project represents an interactive web-based E-Learning platform designed to help students learn,
practice, and solidify their knowledge of Java programming.

The platform is structured into 6 progressive sections,
starting from basic programming concepts and advancing toward more complex topics such as networking and file handling.
Each section contains:

- Structured theory chapters
- Code snippets + explanations meant to ease the learning process
- Quiz system
- Practical coding problems

The main goal of this project is to create a modern, accessible, and structured learning environment that
simplifies complex Java concepts and encourages active learning.

---

### How to use
**Frontend**\
In frontend directory open terminal and run the command: `npm i`\
Upon successfully downloading all dependencies run the command `npm run dev` -> this will open the frontend

**Database + Backend**\
Choose a PostgreSQL GUI (in this case I use `DBeaver` but `pgAdmin4` works great too)\
Check `application.properties` which is located inside `resources` directory (here you will find the credentials for the database) \
Create a local database in `DBeaver/pgAdmin4` and then run the backend program (just click on the green triangle in IntellijIDEA) \
Upon successfully starting the backend, the application will become fully functional

**AI Chat** (Optional)\
In ai-chat directory run the following commands:\
install all dependencies provided in `requirements.txt`\
starting the virtual env: `source venv/bin/source.fish` (in my case I use CachyOS with fish terminal)\
then run: `uvicorn main:app --reload --port 8000`

---

### Architecture & Tech Stack

The platform follows a full-stack architecture:

- **Frontend:** `React + Vite`
- **Backend:** `Spring Boot`
- **Database:** `PostgreSQL`
- **Sandbox API:** `Judge0`, `Monaco Editor`
- **AI Chat API:** `Groq API`
---

# Platform Sections

## Section 1 – Introduction to Java

This section builds the foundation of Java programming. It introduces:

- What Java is and why it is platform-independent
- JVM, JRE, and JDK
- Programming paradigms (OOP, Imperative, Functional, Concurrent)
- Variables and data types
- Control flow structures (if/else, switch, for, while)

The objective is to help beginners understand how Java programs are structured and executed.

---

## Section 2 – Object-Oriented Programming Basics

This section focuses on core OOP principles:

- Classes and objects
- Encapsulation
- Inheritance
- Polymorphism
- Access modifiers

Students learn how to design structured, reusable, and maintainable code using object-oriented concepts.

---

## Section 3 – Java Collections & Generics

Here, students explore advanced data handling concepts:

- Java Collection Framework (List, Set, Map, Queue)
- Differences between data structures
- Iteration techniques
- Generics for type safety and reusability
- Generic classes and methods

This section strengthens understanding of how data is stored, organized, and processed efficiently.

---

## Section 4 – Streams, Lambdas & Exceptions

This section introduces modern Java features:

- Stream API for functional-style data processing
- Lambda expressions
- Functional interfaces
- Exception handling (checked vs unchecked)
- try-catch-finally

Students learn how to write cleaner, more expressive, and robust Java code.

---

## Section 5 – Files

This section covers file handling and data persistence:

- Reading and writing text files
- Binary file operations
- JSON file handling
- Streams (byte and character streams)
- Serialization
- Try-with-resources

The goal is to teach how applications interact with the file system and manage data storage safely and efficiently.

---

## Section 6 – Networking (TCP & UDP)

The final section introduces networking concepts in Java:

- Sockets and communication models
- TCP (connection-oriented, reliable)
- UDP (connectionless, faster but unreliable)
- Client-server architecture

Students gain insight into how distributed systems and network-based applications work.

---

# Educational Objectives

- Provide structured and progressive Java learning.
- Encourage active problem-solving.
- Combine theory with practical examples.
- Prepare students for backend development and software engineering.
