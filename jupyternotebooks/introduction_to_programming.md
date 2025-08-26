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
Your digital watch, or calculator, are running embedded computer programs.

A computer program is a set of instructions that tells a computer (and other devices) what to do. 

Software is the collection of programs running on a computer. Once a device is programmed, the computer code is invisible.

Harware is the device that the software runs on. Software controls hardware.

The object of learning computer programming is to become able to write code that correctly instructs a device to perform a series of tasks that it is capable of performing.

The final result of programming is usually an executable program, which is a binary file capable of running directly on the machine's hardware.

```{tip}
:class: margin
Executable files are identified by the file extension `.exe` on PC's.
```
It is not necessary to understand how a computer is controlled by a computer program, unless you are designing the hardware, or the software that turns programs written in a computer language like C++ into the binary code actually used by the hardware.

Binary files, are written in {term}`binary`, but are not necessarily executable. Library files may be written in binary, but are then used by an executable, to provide extra functions or data.

```{tip}
:class: margin
[Wiki](https://en.wikipedia.org/wiki/Machine_code)on machine code.
```

The code inside an executable file is written in {term}`machine code`, which is in {term}`binary`. We could write computer programs in binary, but it would be extremely difficult.




Start with ideas like syntax...
syntax - the set of gramatical rules specifying how the text of a program must be composed. For example, specifying the form of a declaration or the form of a for-statement.


In the Compuational Physics module, we are mainly concerned with writing code that will take user inputs, perform calculations, and then return 'answers' to the user. This requires us to learn only a subset of the C++ langugage and programming concepts.


## Syntax and Sematics of a Programming Language

Computer code must be **machine-readable**.

For a computer to use a piece of software, the computer program must be:
* Written in exactly the form expected by the computer
* Written correctly

Computers and other devices that run software are only capable of following instructions that a

```{tip}
:class: margin
[Wiki](https://en.wikipedia.org/wiki/Syntax_/(programming_languages/)) on computer language syntax.
```
## Coding

Coding is often synonymous with programming but generally considered to be only a subset of computer programming.

Coding is the act of writing lines of computer code in the correct syntax for the language being used.

Programming encompasses the entire process of creating new software. Including
* Planning the structure of the application
* Developing an algorithm for the application
* Designing the appearance, user interface, IO interaction experience. 
* Writing the code - coding
* Debugging and testing
* Managing deployment/distribution
* Maintaining the software - creating updates and patch for issues.


Coding may also refer to writing complete files in languages such as HTML, CSS, or Markdown. These languages are also used to create instructions for a computer, but they have fewer capabiliites, are not capable of computation, using algrorithms and data structures, and are completed as text documents using a simple text editor. 

## Algorithms

The first step in writing a computer program is understand the task that we want the computer to perform.

If you are not able to deconstruct the task into a series of instruction that can be followed then you cannot write a program to accomplish that task.

Algorithm: A sequence of steps or rules to solve a problem, often implemented using STL (Standard Template Library).

{attribution="Bjarne Stroustrup - Creator of C++"}
> Programming is understanding

The process of writing a program can be reduced to four stages 

- Analysis of the problem: 
* What does the program need to do? 
* Are there any constaints on how this can be done? e.g. a particular operating system is required, a limition on resouces (e.g. memory, or time)
- Design: How do we solve the problem? What should be the overall struc
ture of the system? Which parts does it consist of? How do those parts 
communicate with each other? How does the system communicate with 
its users?
- Programming: Convert your solution to the problem into computer code. 
* Use best practices in creating your code so that it meets all constraints (time, space, money, reliability, maintainability, understandabiliyt)
- Testing: Make sure the program works correctly **under all circumstances** 
* Ensure that all possible scenarios are tried e.g. when a user input is required, what happens in the case of all possible entries.

## FlowCharts

Flowcharts are very useful diagrams that assist in design of new programs. 

Flow charts are often used to represent algorithms for a program or for a subroutine (methods/functions). 

The diagram show the flow of information, from start to end of the process, through decisions points, loops and I/O using specific symbols for different parts of the algorithm.

This visual representation of the logical flow of your algortihm may help you to understand if your algorithm is correct before try to write the code to implement it.
They are particularly useful for identifying missing processes and faulty logic.

Examples of flow charts. Some of these steps could be broken into multiple steps.

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
  - The operation of a program often changes direction depending on a condition. The conditonal operation is shown in the diamond and the options are used to label the outflow arrows
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

Online [Flowchart](https://www.mermaidchart.com/play) design tool.

## Error Types

There are many types of error, but three classifications to understand at this point are:
- Compile time – found by compiler – easily fixed.
- Link-time errors found by linker – more difficult. 
- Run-time errors, or logic errors, occur after successful creation of the .exe file. Too late to fix – people have died!




<!-- 
<script type="module">
    var config = {
      theme: neutral, 
      flowchart:{
            useMaxWidth:false,
            htmlLabels:true
        }
      width: 400, 
      backgroundColor : transparent, 
    };
    mermaid.initialize(config);
</script>
-->


