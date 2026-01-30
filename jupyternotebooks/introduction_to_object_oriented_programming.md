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
(Object-oriented Programming)=
# OOP in C++

Programs are written to solve specific problems, and for all but the simplest tasks, we can take different approaches, each potentially offering benefits over the others.

Before the implementation of the basic syntactic statements, we can take different approaches to the overall design of any program.

These different styles of programming are called **programming paradigms** - the four most common paradigms are:

* Procedural programming.
* Data abstraction.
* Object-oriented programming.
* Generic programming.

Procedural programming is the basic top-down implementation of the code inside the `main(int argc, char* argv[])` function - calling other functions as required.

Data abstraction: the idea of creating types, specific to the application/requirement and writing the program based on these i.e. classes and structs, but also header files. This is called "abstraction" because the type is used through an interface, rather than by directly accessing its implementation.

**Object-oriented Programming** is the idea of organizing types into hierarchies thereby expressing their inter-relations directly in code.

This is most valuable when the types do have fundamental hierarchical relationships. The OOP principle is often overused in cases that make less sense i.e. there is no valid base/derived connection and distinction, but it is argued that is make code simpler, which is not the worst argument.

In **Generic Programming** concrete algorithms and elevated to a higher level of abstraction by adding parameters to represent things that can be varied without changing the basic process of the algorithm. 

Clearly there are links between these paradigms. OOP is built on classes, that embody data abstraction etc.

Object-oriented programming can provide advantages over procedural programming but is only useful for longer programmes and projects that you intend to develop and reuse.

Using classes can provide a clear and logical structure, making the code easier to understand, maintain, and debug, by creating reusable components, reducing effort and increasing efficiency in the longer term.

However, for beginners, concepts such as classes, objects, inheritance, and polymorphism can add confusion, and time - there is a learning curve to anything worth knowing, but the investments will pay off if you are serious about coding or using computational physics. Object oriented programmes are often harder to debug, but will be more easily 

