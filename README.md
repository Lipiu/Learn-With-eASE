# 📚 Learn With eASE
## Interactive Java E-Learning Platform
### Bachelor's Degree Thesis Project

## 📖 Project Overview

**Learn With eASE** is an interactive web-based e-learning platform designed to help students learn, practice, and strengthen their Java programming skills through a structured and engaging learning experience.

The platform is divided into **six progressive learning sections**, starting with fundamental programming concepts and gradually advancing to topics such as file handling and networking.

Each section includes:

- 📚 Structured theory chapters
- 💻 Code examples with detailed explanations
- 📝 Interactive quizzes
- 🚀 Practical coding exercises

The primary goal of this project is to provide a modern, accessible, and well-organized learning environment that simplifies complex Java concepts while encouraging active learning and hands-on practice.

---

# 🚀 Getting Started

## Frontend

Navigate to the `frontend` directory and install the project dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

This will launch the frontend application.

---

## Backend & Database

This project uses **PostgreSQL**.

1. Install a PostgreSQL GUI such as:
    - DBeaver *(recommended)*
    - pgAdmin 4

2. Open the `application.properties` file located in:

```
src/main/resources/
```

and configure or verify the database credentials.

3. Create a local PostgreSQL database.

4. Run the Spring Boot backend (for example, by clicking the ▶ Run button in IntelliJ IDEA).

Once the backend starts successfully, the application will be fully functional.

---

## AI Chat (Optional)

The project also includes an optional AI assistant.

Navigate to the `ai-chat` directory.

Install the required dependencies:

```bash
pip install -r requirements.txt
```

Activate your virtual environment.

Example (Fish shell):

```bash
source venv/bin/activate.fish
```

Start the API server:

```bash
uvicorn main:app --reload --port 8000
```

---

# 🏗️ Architecture & Tech Stack

| Layer | Technologies |
|--------|--------------|
| **Frontend** | React 19, JavaScript, Vite |
| **Backend** | Java 21, Spring Boot 4, Spring Security (JWT), Hibernate, Spring Data JPA |
| **Database** | PostgreSQL |
| **Code Execution** | Judge0 API, Monaco Editor |
| **AI Integration** | Groq API |

---

# 📚 Learning Sections

## 1. Introduction to Java

Build a solid foundation in Java programming.

Topics covered:

- Introduction to Java
- Platform independence
- JVM, JRE and JDK
- Programming paradigms
    - Object-Oriented
    - Imperative
    - Functional
    - Concurrent
- Variables and data types
- Control flow
    - `if / else`
    - `switch`
    - `for`
    - `while`

**Goal:** Understand how Java programs are written, compiled, and executed.

---

## 2. Object-Oriented Programming Basics

Learn the core principles of object-oriented programming.

Topics covered:

- Classes and objects
- Encapsulation
- Inheritance
- Polymorphism
- Access modifiers

**Goal:** Learn how to design reusable, maintainable, and well-structured applications.

---

## 3. Java Collections & Generics

Explore Java's powerful data structures.

Topics covered:

- Java Collections Framework
    - List
    - Set
    - Map
    - Queue
- Collection comparison
- Iteration techniques
- Generics
- Generic classes and methods

**Goal:** Understand how data is stored, organized, and manipulated efficiently.

---

## 4. Streams, Lambdas & Exceptions

Discover modern Java programming techniques.

Topics covered:

- Stream API
- Lambda expressions
- Functional interfaces
- Exception handling
- Checked vs. unchecked exceptions
- `try-catch-finally`

**Goal:** Write cleaner, more expressive, and robust Java applications.

---

## 5. File Handling

Learn how Java applications interact with the file system.

Topics covered:

- Reading and writing text files
- Binary files
- JSON files
- Byte and character streams
- Serialization
- Try-with-resources

**Goal:** Understand data persistence and safe resource management.

---

## 6. Networking (TCP & UDP)

Learn the fundamentals of network programming in Java.

Topics covered:

- Sockets
- Client-server architecture
- TCP communication
- UDP communication

**Goal:** Gain an understanding of distributed applications and network communication.

---

# 🎯 Educational Objectives

The platform aims to:

- 📈 Provide a structured and progressive Java learning path.
- 💡 Encourage active problem-solving through practical exercises.
- 📚 Combine theory with real-world coding examples.
- 🧩 Reinforce concepts using quizzes and programming challenges.
- 🚀 Prepare students for backend development and software engineering careers.