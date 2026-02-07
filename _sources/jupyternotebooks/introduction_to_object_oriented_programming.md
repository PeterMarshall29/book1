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
# OOP

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


## File Management - Best Practice in OOP

Best practice for writing an object-oriented program in C++ is to split your code into three sections, and to place each section in a separate file:

- Class definitions should be put into an interface file, which is a .h header file - includes the declaration of the data members and member functions. It defines the number and types of the members and is normally named after the class itself i.e. the Bubble class would be defined in the Bubble.h interface file.
- Member function definitions should be located in implementation .cpp files.
- The application i.e. the main() is then in the application file.

The interface file defines the number and types of the members and is normally named after the class itself i.e. the Bubble class would be defined in the Bubble.h interface file.

The implementation file contains the definition of all the member function required by class and is usually named after the class, but differentiated by have a .cpp file type, e.g. Bubble.cpp.

The application file is the core program file containing the `main()` function, which has a name that matches its purpose/project.

The interface file must be included in both the implementation and application files, which are separately compiled into .obj object files before being the linker creates the executable file.
 
## Creating an Interface file

The interface file may be included in multiple compilation files, which will cause a compiler error unless handled correctly. 

To avoid this problem the interface file containing the class definition should contain the following preprocessor directives.
```{code-block} cpp
#ifndef ClassName_H
#define ClassName_H
// Contents of ClassName.h go here - i.e. the class definition.
#endif
```

When ClassName.h is included in both an implementation file and an application file, the instruction of include subsequent copies, after the first, will be ignored by the compiler.

Most compiler allow a simpler alternative - the above 3 directives can be replaced by the single directive:
```{code-block} cpp
#pragma once
```
`Pragma` is not a part of the C++ standard, so you need to be able to use the full version, which will always work.

### Encapsulation

The purpose of separate compilations is to allow {term}`encapsulation`, which is the separation of the design of the class from the use of the class.

Encapsulation is the process of wrapping data and the methods into a single unit, usually a class, for the purpose of preventing that data being accessed by external code i.e. code outside the encapsulation (the class).

Encapsulation is achieved by hiding the data as private members of class so that it may only be accessed through any public member functions provided in the same class in which it was declared.

Encapsulation is not just useful for your own programmes, but is extremely valuable for any software that may be distributed.

The designer of the class, may make the interface and implementation files public, but only the source code for the interface file needs to be shared i.e. crucial details of the implementation are hidden from other programmers because they are in compiled object files i.e. in binary.

It should be possible to change an implementation file without affecting applications that depend on it, provided the interface remains unchanged, and the code is well written and maintained.

Users, including the authoring programmer, can then include the interface in their application file before compilation, which links the application object file to the implementation file to produce the executable.

Benefits of encapsulation:
- Because there are two copies of the interface, one inside the already compiled implementation file, and the second inside the application file, any alteration to the interface is prevented.
- The more complicated implementation code is protected because it is not accessible to generaly users.

To make an encapsulated class useful, it is necessry to provide documentation, which is generally a text document called the public interface, that provides names and details of the available member functions etc..


