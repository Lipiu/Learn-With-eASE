import React from "react";
import ReactMarkdown from "react-markdown";
import "./Section1.css";

const javaIntroduction = `
# What is Java and why is it so widely used?

* **Java** is a high-level, general-purpose programming language designed to be
  concurrent, class-based, and object-oriented.

  One of its most important features is **platform independence**.
  Java programs are compiled into **bytecode** that runs on any system with a
  **Java Virtual Machine (JVM)**, following the principle **_“write once, run anywhere”_**.
  This allows the same application to run on different operating systems
  **without modification**.

* Java is widely used because of its **reliability**, **strong static typing**, and
  **mature ecosystem**. It provides:
  - Extensive standard libraries
  - Strong tooling support
  - Automatic memory management via the **Garbage Collector**

* Java’s ecosystem also includes powerful frameworks such as **Spring Boot**,
  which simplifies the development of **standalone**, **production-ready**
  applications. Spring Boot reduces configuration overhead and is widely used
  for building **REST APIs**, **microservices**, and **enterprise applications**.

* These features make Java well-suited for building **large-scale**, **secure**, and
  **maintainable** applications.

* As a result, Java is commonly used in:
  - Enterprise software
  - Web services and backend systems
  - Android development
  - Large distributed systems
`;

const javaRuntimeOverview = `
# JVM, JRE, and JDK

* The **Java Virtual Machine (JVM)** is the cornerstone of the Java platform.
  It is responsible for Java’s **platform independence**, allowing Java programs
  to run on different operating systems and hardware.

  The JVM does not understand Java source code directly.
  Instead, it executes **bytecode**, which is stored in compiled **.class** files.
  This bytecode format is the same on all platforms.

* The **Java Runtime Environment (JRE)** provides everything needed to **run**
  a Java application.
  It includes the **JVM**, core **class libraries**, and supporting files.
  The JRE does **not** include tools for developing Java applications.

* The **Java Development Kit (JDK)** is a superset of the JRE and is used to
  **develop** Java applications. Developers install the JDK to write, compile, and run Java programs.
  
  It includes the JRE along with development tools such as:
  - javac -> Java compiler
  - java -> Application Launcher
  - javadoc -> Documentation generator
  - jshell -> Interactive Java shell
  
`;

const dataTypes = `
# Data Types in Java

* In java there are two data types: **Primitive Data Types** and **Non-Primitive Data Types**
* **Primitive Data Types** are the fundamental data types that store single values. Java defines eight primitive data types:
    * **Integer Types**
        * byte: 8-bit | Small integer values
        * short: 16-bit | Larger integer values
        * int: 32-bit | Default integer type
        * long: 64-bit | Very large integer values
    
    * **Floating-Point Types**
        * float: 32-bit | Decimal numbers (lower precision)
        * double: 64-bit | Decimal numbers (higher precision)
        
    * **Character Type**
        * char: 16-bit | Single Unicode character
    
    * **Boolean Type**
        * boolean: 1-bit | True or False values (size is JVM-dependent)
        
* **Non-Primitive Data Types** (Reference Data Types) store references to objects:
    * String
    * Arrays
    * Classes
    * Interfaces
    
* Additionally, Java also provides **Wrapper Classes** that represent primitives as **objects**.
Wrapper Classes are part of the java.lang package and are commonly used when working with collections, generics, and APIs
that require objects.
    * Wrapper Classes Examples:
        * Byte
        * Short
        * Integer
        * Long
        * Float
        * Double
        * Character
        * Boolean

* You may be wondering what is the difference between Primitive Types and Wrapper Classes. Besides the fact that Wrapper Classes have
the first letter capitalized, here are some key differences:
    - **Primitive types** store values directly and are more memory-efficient.
    - **Wrapper classes** store objects and provide useful methods.
    - Wrapper classes can be **null**, primitives cannot.
    - Wrapper classes are required for use with **collections** (e.g., ArrayList<Integer>).
`;
// const control;

function Section1(){
    return(
        <section className="javaIntro">
            <ReactMarkdown>
                {javaIntroduction}
            </ReactMarkdown>

            <hr className="sectionDivider"/>
            <ReactMarkdown>
                {javaRuntimeOverview}
            </ReactMarkdown>

            <hr className="sectionDivider"/>
            <ReactMarkdown>
                {dataTypes}
            </ReactMarkdown>
        </section>
    );
}

export default Section1;