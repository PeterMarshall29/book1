---
jupytext:
  formats: md:myst
  text_representation:
    extension: .md
    format_name: myst
kernelspec:
  display_name: C++ 20
  language: c++
  name: cpp20
---

#  Introduction to Computer Programming

## Computer Programs

Computer programs are everywhere - not just inside computers. 
Your digital watch (if you are still wearing a watch!), calculator, smart speaker, and car are running {term}`embedded programs`.

A computer programme is a set of instructions that tells a computer (and other devices) what to do. 

Software is the collection of programs running on a computer. Once a device is programmed, the computer code is invisible.

Hardware is the device that the software runs on - software controls hardware.

The object of learning computer programming is to become able to write computer programmes that correctly instruct a device to perform a series of tasks; for example calculate some numbers, based on input from the keyboard, and display the results on the screen.

The final result of programming is usually an executable program, which is a {term}`binary file` capable of running directly on the machine's hardware.

```{tip}
:class: margin
Executable files are identified by the file extension `.exe` (Windows only).
```
It is not necessary to understand how a computer is controlled by a computer program, unless you are designing the hardware, or the software that converts a programme written in a **human readable** language, such as C++, into a an executable programme that can actually run on the hardware.

The computer code in an executable file is written in {term}`machine code`, which is {term}`binary`. 

We could write computer programs in binary, but it would be extremely difficult. The programs we write are built on components written in binary.

Binary files are not necessarily executable; Library files may be written in binary, which are then used by an executable, providing extra functionality or data.

```{tip}
:class: margin
[Wiki](https://en.wikipedia.org/wiki/Machine_code)on machine code.
```


## Syntax and Sematics of a Programming Language

Computer code must be **machine-readable**. 

For a computer programme to run correctly on a computer, the programme must be:
* In exactly the format required by the computer - computers have no flexibility to interpret code that is even slightly incorrect.
* Logically correct - when the computer follows the correctly formatted instructions - the expected outcome results.

The two fundamental concepts that define how a programming language is defined, written, and understood are the **syntax** and **semantics** of the language

Computer language {term}`Syntax` is the prescription for the sequence of symbols required for any given instruction, and for the overall structure of the program.
Syntax is unique to each language - each language requires a different set of syntactical rules.

Creating a programme with the correct syntax means it can be correctly compiled, interpreted, and executed by the computer. But it does not mean the programme will do what you wanted it to do! 

The semantics of a computer programme are the meaning and behaviour of the program. The logical flow of the programme must result in it completing the desired task correctly.

By analogy with ordinary writing: 
* The syntax would be the spelling and grammer.
* The sematics would be the syntactially correct sentences making sense to the reader, both individually and when read together.

A syntax errors occurs when the syntax is incorrect. For example, forgetting the `;` at the end of a statement in C++.
Syntax errors are easily found at compile time - the compiler will not let you have any syntax error, and will return an error description that usually makes it easy to correct your code.

Semantic errors are logic errors and will not necessarily be caught by the compiler, resulting in an executable programme that does not work correctly.

```{tip}
:class: margin
Learn more about computer language [syntax](https://en.wikipedia.org/wiki/Syntax_/(programming_languages/)).
```
## Coding

Coding is often synonymous with programming but generally considered to be only a subset of computer programming.

Coding is the act of writing lines of computer code in the correct syntax for the language being used.

Programming encompasses the entire process of creating new software. Including:
* Planning the structure of the application.
* Developing an {term}`algorithm` for the application.
* Designing the appearance, the user interface, the IO interaction experience. 
* Writing the code - coding.
* Debugging and testing.
* Managing deployment/distribution.
* Maintaining the software - creating updates and patches for issues.


Coding may also refer to writing complete files in languages such as HTML, CSS, or Markdown. These languages are also used to create instructions for a computer, but they have fewer capabiliites, are not capable of computation, using algrorithms and data structures, and are completed as text documents using a simple text editor. 

## Algorithms

The first step in writing a computer programme is understand the task that we want the computer to perform.

If you are not able to deconstruct the task into a series of instructions that can be followed then you cannot write a programme to accomplish that task.

An {term}`algorithm` is a sequence of steps that, when followed exactly, always lead to the task being completely correctly.

{attribution="Bjarne Stroustrup - Creator of C++"}
> Programming is understanding

The process of writing a programme can be reduced to four stages 

- Analysis of the problem: 
  * What does the programme need to do? 
  * Are there any constaints on how this can be done? e.g. a particular operating system is required, a limition on resouces (e.g. memory, or time)
- Design: How do we solve the problem? What should be the overall structure of the system? Which parts does it consist of? How do those parts communicate with each other? How does the system communicate with its users?
- Programming: Convert your solution to the problem into computer code. 
  * Use best practices in creating your code so that it meets all constraints (time, space, money, reliability, maintainability, understandabiliy).
- Testing: Make sure the programme works correctly **under all circumstances**.
  * Ensure that all possible scenarios are tried e.g. when a user input is required, what happens in the case of all possible entries.

## FlowCharts

Flowcharts are very useful diagrams that assist in design of new programs, and are often used to represent algorithms for a programme or a subroutine (methods/functions). 
Each flowchart diagram shows the flow of information, from start to end of the process, through decisions points, loops, and I/O using specific symbols for different parts of the algorithm.

This visual representation of the logical flow of your algortihm may help you to understand if your algorithm is correct before try to write the code to implement it. Flowcharts are particularly useful for identifying missing processes and faulty logic.

Examples of flow charts. Some of these steps could/should be broken into multiple steps.

```{list-table}
:header-rows: 1
:name: example_table_2
* - Generic Flowchart
  - Example Flowchart
* - ```{mermaid}
    :align: center
    :zoom:
    flowchart TB
      A(["Start"]) --> B[/"Input/output"/]
      B --> C["Process"]
      C --> D{"Decision"}
      D -- Conditon 1 --> E["Process"]
      D -- Conditon 2 --> F[/"Input/output"/]
      F --> G["Process"]
      G --> D
      E --> H[/"output"/]
      H --> I(["End"])
      A:::Rose
      B:::Rose
      C:::Rose
      D:::Rose
      E:::Rose
      F:::Rose
      G:::Rose
      H:::Rose
      I:::Rose
      classDef Rose stroke-width:1px, stroke-dasharray:none, stroke:#FF5978, fill:#FFDFE5, color:#8E2236
      linkStyle 0 stroke:#AA00FF,fill:none
      linkStyle 1 stroke:#AA00FF,fill:none
      linkStyle 2 stroke:#AA00FF,fill:none
      linkStyle 3 stroke:#AA00FF,fill:none
      linkStyle 4 stroke:#AA00FF,fill:none
      linkStyle 5 stroke:#AA00FF,fill:none
      linkStyle 6 stroke:#AA00FF,fill:none
      linkStyle 7 stroke:#AA00FF,fill:none
      linkStyle 8 stroke:#AA00FF
    ```
  - ```{mermaid}
    :align: center
    :zoom:
    flowchart TB
      A(["Start"]) --> B[/"`Output: 
        Request for Input
          Input from User`"/]
      B --> C["Format Input"]
      C --> D{"'Check Input:
          1. Exists
          2. Correct Format`"}
      D -- Both True --> E["Process Input"]
      D -- Either/both False --> F[/"`Output: 
          1. Inform User of Problem
          2. Request Correct Input
          3. Input from User`"/]
      F --> G["Format Input"]
      G --> D
      E --> H[/"Ouput Result"/]
      H --> I(["End"])
      A:::Rose
      B:::Rose
      C:::Rose
      D:::Rose
      E:::Rose
      F:::Rose
      G:::Rose
      H:::Rose
      I:::Rose
      classDef Rose stroke-width:1px, stroke-dasharray:none, stroke:#FF5978, fill:#FFDFE5, color:#8E2236
      linkStyle 0 stroke:#AA00FF,fill:none
      linkStyle 1 stroke:#AA00FF,fill:none
      linkStyle 2 stroke:#AA00FF,fill:none
      linkStyle 3 stroke:#AA00FF,fill:none
      linkStyle 4 stroke:#AA00FF,fill:none
      linkStyle 5 stroke:#AA00FF,fill:none
      linkStyle 6 stroke:#AA00FF,fill:none
      linkStyle 7 stroke:#AA00FF,fill:none
      linkStyle 8 stroke:#AA00FF
    ```
```
````{admonition} Flow Chart Symbols
:class: dropdown
These are the basic symbols used to build flow charts. 
There is an ISO standard for the symbols used in flow charts, but unless you are producing charts for publication you are free to use other shapes.
The shape used is less important when the labels are clear.

```{list-table}
:header-rows: 1
:name: example_table_1
* - Symbol 
  - Usage
  - Description
* - ```{mermaid}
      flowchart TD
        A(["Stadium"])
    ```
  - Start/End
  - Sometime preceded by unconnected processes, such as `#Include <iostream>` and `uses`
* - ```{mermaid}
      flowchart TD
        A["Rectangle"]
    ```
  - Process
  - Set of operations on data. Can be separated into multiple steps to aid readability. 
* - ```{mermaid}
      flowchart TD
        A{"Diamond"}
    ```
  - Decision
  - The operation of a programme often changes direction depending on a condition. The conditonal operation is shown in the diamond and the options are used to label the outflow arrows
* - ```{mermaid}
      flowchart TD
        A[\"Parallelogram"\]
    ```
  - Input and/or output
  - Ofter occur in pairs. User is given a prompt to input data.
* - ```{mermaid}
      flowchart TD
        A(["A"]) --> |"Condition Text"| B(["B"])
    ```
  - Flow Arrow with Condition for Direction
  - Show the order of operations. Text is added to indicate reason for following a path.
```
````

There are many free tools for designing flow charts. One used recently can cound [here](https://www.mermaidchart.com/play).

## Error Types

There are many types of error, but three classifications to understand at this point are:
- Compile time errors: found by compiler and easily fixed.
- Link-time errors: found by linker - more difficult. 
- Run-time, or logic, errors, or logic errors, occur after successful creation of the .exe file. Too late to fix - people may have died!

