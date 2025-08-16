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

A computer program is a set of instructions that tells a computer (and other devices) what to do. Once a device is programmed, the computer code is invisible.

 Software is the collection of programs running on a computer.
 Harware is the device that the software runs on. Software controls hardware.

It is not necessary to understand how a computer is controlled by a computer program, unless you are designing the hardware, or the software that turns programs written in a computer language into the binary code used by the hardware.

The object of learning computer programming is to become able to write code that correctly instructs a device to perform a series of tasks that it is capable of performing.

In the Compuational Physics module, we are mainly concerned with writing code that will take user inputs, perform calculations, and then return 'answers' to the user. This requires us to learn only a subset of the C++ langugage and programming concepts.




```{mermaid}
  flowchart TD
    A["Start"] --> B{"Is it?"}
    B -- Yes --> C["OK"]
    C --> D["Rethink"]
    D --> B
    B -- No ----> E["End"]
    D --> n1["Untitled Node"]

```


Start with ideas like syntax...


## Coding Algorithms

The first step in writing a computer program is understand the task that we want the computer to perform.

If you are not able to deconstruc the task into a series of instruction that can be followed then you cannot write a program to accomplish that task.

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


```{list-table}
:header-rows: 1
:name: example-table
* - Symbol 
  - Usage
* - ```{mermaid}
      flowchart TD
        n1["Start/End"]
    ```
  - ```{mermaid}
      flowchart TD
        n2["Decision"]
    ```
* - Row2 under Col1
  - Row2 under Col2
```

Online [tool for desiging flowcharts](https://www.mermaidchart.com/play)

## Error Types

There are many types of error, but three classifications to understand at this point are:
- Compile time – found by compiler – easily fixed.
- Link-time errors found by linker – more difficult. 
- Run-time errors, or logic errors, occur after successful creation of the .exe file. Too late to fix – people have died!




