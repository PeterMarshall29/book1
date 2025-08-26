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

(cpplanguage)=
#  The C++ Language

[Wiki](https://en.wikipedia.org/wiki/C++) The C++ language is one of the most powerful programming languages available today. It was created by Danish computer scientist [Tippy.Wiki Bjarne Stroustrup](https://en.wikipedia.org/wiki/Bjarne_Stroustrup) and first released in 1985. 

C++ is widely used, high level, general purpose language that can write code to runs from the glass (building apps with graphical user interfaces) down to the metal (direct control of hardware and manipulation of memory).

There are simpler programming languages to learn; but once have learned to code in C++ subsequent programming languages are much easier to pick up.

```{note}
:class: magin
{attribution="Bjarne Stroustrup - Creator of C++"}
> There are only two kinds of languages: the ones people complain about and the ones nobody uses. 
```
All the `C++ language syntax is detailed here: [The Official C++ Standard Reference Documentation](https://en.cppreference.com/w/) - NB Although it may look daunting, this reference does have some useful information for beginnerss, and will become more accessible as you work through the basic concepts convered in this module.

```{admonition} Note
:class: note margin
Computational A will be using `C++20`
```
```{admonition} Note
:class: note margin
The evolution of the C++ language is detailed in: [Description of the evolution of C++ language](https://en.cppreference.com/w/cpp/language/history.html)
```
***

The live code editor on the following pages, uses a C++ Kernel that runs in Jupyter Notebook. This is not the usual way to work and has signifiant limits.

In later weeks we will move to Visual Studio and start writing complete computer programs that can be compiled into executables - the following notes apply then.

## Structure of C++ Programmes

This section provides definitions for the specific terminology and the concepts used when describing the C++ programming language.

A C++ program is a sequence of text files (typically header and source files) that contain {term}`declaration`s. 
The declarations are statements written in the C++ language.

In these text files you write the They undergo translation to become an executable program, which is executed when the C++ implementation calls its main function.

Certain words in a C++ program have special meaning, and these are known as keywords. Others can be used as identifiers. Comments are ignored during translation. C++ programs also contain literals, the values of characters inside them are determined by character sets and encodings. Certain characters in the program have to be represented with escape sequences.

The entities of a C++ program are values, objects, references, structured bindings(since C++17), result bindings(since C++26), functions, enumerators, types, class members, templates, template specializations, packs(since C++11), and namespaces. Preprocessor macros are not C++ entities.

Declarations may introduce entities, associate them with names and define their properties. The declarations that define all properties required to use an entity are definitions. A program must contain only one definition of any non-inline function or variable that is odr-used.

Definitions of functions usually include sequences of statements, some of which include expressions, which specify the computations to be performed by the program.

Names encountered in a program are associated with the declarations that introduced them using name lookup. Each name is only valid within a part of the program called its scope. Some names have linkage which makes them refer to the same entities when they appear in different scopes or translation units.

Each object, reference, function, expression in C++ is associated with a type, which may be fundamental, compound, or user-defined, complete or incomplete, etc.

Declared objects and declared references that are not non-static data members are variables ﻿.


***


In the `C++` programming language, consist of two parts: the **core language** and the **standard library**.

The **C++ Standard Library** is a collection of classes and functions, which are written in the **core language**.
The entire `Cc++` language is defined by the **C++ ISO Standard**. 
The standard is regularly updated and improved, so you must check which version of the language your code is written in - there may be compatibility issues between versions.
A large part of the **C++ Standard Library** is based on the **Standard Template Library (STL)**. Useful tools provided by the STL include containers as the collections of objects (such as vectors and lists), iterators that provide array-like access to containers, and algorithms that perform operations such as searching and sorting.

***

C++ programs create, destroy, refer to, access, and manipulate {term}`objects`.

An object, in C++, has

* A type
* A name (optional)
* A value (which may be indeterminate, e.g. for default-initialized non-class types)
* A size (can be determined with sizeof);

* Storage duration (automatic, static, dynamic, thread-local);
lifetime (bounded by storage duration or temporary);
alignment requirement (can be determined with alignof);




The following c++ {term}`entities` are not objects: values, references, functions, enumerators, types, non-static class members, templates, namespaces, and `this`. [And some others]



A variable is an object or a reference that is not a non-static data member, that is introduced by a declaration.


***
## Introduction to the basic structure of computer program written in the C++ language.


`C++` is a compiled language. 
The code in each of the `.cpp` (and `.h`) pages in your project is first converted to an object file, a file with a `.obj` ending (`.o`) if you are linux, by the compiler, which convers the basically readable `C++` code into machine language – in an object file.
The `cpp` source code is platform agnostic – but the object and executable files are not portable amongst platforms – not even amongst generations.
The collection of object files are then linked together by the linker into an executable file;  `.exe` in windows or `.app` etc.. 
Other useful extensions: .lib for library files,  `.a` for archive file (similar to library), `.so` for shared object files (like libraries), `.c` for `c` source code,  `.cc` for `c` with classes,  `.hpp` for header for cpp not also c.

Header files with a .h, .hpp or .hxx extension,  are sources files that containing entity declarations and/or definitions that need to be visible to multiple translation units (see below). 
Each file with the extension .c, .cpp or .cxx defines a translation unit. 
The C and C++ compilers only compile a single file at a time. 
Source files may include header files, which are substituted in place for the #include statement and other directives by the preprocessor, resulting in a single "file" which is then fed to the compiler. 
The source file must contain all type and all object declarations that are referenced, which is the meaning of the undeclared reference compiler error. 
Note that it only requires complete declarations to succeed; definitions are handled at a later stage in the build process.
Resource files are things like pictures, bitmaps, mp

***
C++ implementations are either “hosted” or “free-standing”.
A hosted implementation includes all the standard-library facilities.
Freestanding implementations are used when your code require the most minimal operating system support. Some implementations provide a non-standard option that does not use exceptions for really minimal, bare metal programming (directly implemented on hardware). 
A freestanding implementations generally provide fewer standard-library facilities, but must include certain basic requirements, provided by this minimal list of headers from the standard library. .
#include <cstddef> <cfloat> <limits> <climits> <cstdint> <cstdlib> <new> <typeinfo> <exception <initializer_list> <cstdalign> <cstdarg> <cstdbool> <type_traits> <atomic>

***

Memory Management
  Methods of allocating and freeing memory. In C++ memory is either static, allocated on the stack, or allocated on the free store. When people talk about memory management, they usually think of free store or even specifically about garbage collection. Memory can often be effectively managed through standard library containers, such as vector or string, or through general resource management techniques.