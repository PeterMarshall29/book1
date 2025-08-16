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

# Glossary

```{glossary}

Camel Case
  [Camel Case](<https://en.wikipedia.org/wiki/Camel_case) is one of the naming conventions used to improve the readability of code, whilst avoiding underscores. 

Class
  A

Comments
  Comments are text in a computer program that is only intended as a note to the progammer. Comments are useful as in-code documentation, and also allow part of program to be hidden from the compiler temporarily during development.

Compiler
  The part of a C++ implementation that produces object code from a translation unit

Declaration
  Declarations introduce names into a C++ program. Each kind of entity is declared differently.

Definition
  Definitions are declarations that are sufficient to use the entity identified by the name.

Free store
  {term}`memory` allocated by `new`; also called dynamic memory. Often standard library facilities, such as `vector`, can be used to avoid explicit use of free store.

Function
  A named sequence of statements that can be invoked/called given arguments and that might return a value. The type of the function includes the number and types of argument and the type of the value returned, if any

Identifier
  The

Iteration
  Iteration

Keyword
  An identifier used by the C++ language standard. Keywords are reserved; they may not be declared as an identifier by a programmer. [Keywords in the C++ language](https://en.cppreference.com/w/cpp/keywords.html).

Linkage
  The process of merging code from separately compiled translation units into a program or part of a program. 

Linker
  The part of the C++ implementation that merges the code generated from separately compiled translation units into a program. or part of a program

Local Variables
  Definition

Memory
  Definition needed

Memory Management
  Methods of allocating and freeing memory. In C++ memory is either static, allocated on the stack, or allocated on the free store. When people talk about memory management, they usually think of free store or even specifically about garbage collection. Memory can often be effectively managed through standard library containers, such as vector or string, or through general resource management techniques.

Name
  An identifier. (A minority of names are not identifiers - advanced). 

Objects
  - A contiguous region of memory holding a value of some type. Objects can be allocated in {term}`static memory`, on the {term}`stack`, on on the {term}`free store`. 
  - A named or unnamed variable of some type; an object of a type with a constructor is not considered an object before the constructor has completed and is no longer considered an object once a destructor has started executing for it. Objects can be allocated in static memory, on the stack, on on the free store. 

Object file
  The file produced by a compiler - the result of compiling a source file.

Stack
  - {term}`memory` used to hold {term}`local variables` for a {term}`function`
  - standard library first-in-last-out sequence.

Static Memory
  Memory allocated by the {term}`linker`

Syntax
  The set of gramatical rules specifying how the text of a program must be composed. For example, specifying the form of a declaration or the form of a for-statement.

Translation unit
  Part of a program that can be separately compiled. Individual source or header files.

Type
 A type defines the proper use of a name or an expression.

Variable
  A variable is an object or a reference that is not a non-static data member, that is introduced by a declaration.


```





