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

Start with ideas like syntax...




All the `C++ language syntax is detailed here: [cppreference.com](https://en.cppreference.com/w/)
```{admonition} Note
:class: note margin
Computational A will be using `C++20`  .
```
This will only be useful after you have learned the basics – please ignore until then.




***

In the `C++` programming language, consist of two parts: the **core language** and the **standard library**.

The **C++ Standard Library** is a collection of classes and functions, which are written in the **core language**.
The entire `Cc++` language is defined by the **C++ ISO Standard**. 
The standard is regularly updated and improved, so you must check which version of the language your code is written in - there may be compatibility issues between versions.
A large part of the **C++ Standard Library** is based on the **Standard Template Library (STL)**. Useful tools provided by the STL include containers as the collections of objects (such as vectors and lists), iterators that provide array-like access to containers, and algorithms that perform operations such as searching and sorting.

***

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

