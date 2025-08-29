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

The [C%2B%2B](https://en.wikipedia.org/wiki/C%2B%2B) language is one of the most powerful programming languages available today. It was created by Danish computer scientist [Bjarne_Stroustrup](https://en.wikipedia.org/wiki/Bjarne_Stroustrup) and first released in 1985. 

C++ is widely used, high level, general purpose language that can write code to runs from the glass (building apps with graphical user interfaces) down to the metal (direct control of hardware and manipulation of memory).

There are simpler programming languages to learn; but once have learned to code in C++ subsequent programming languages are much easier to pick up.

````{tab} C++
```{code-block} c++
#include <iostream>
int main() {
  std::cout << "Hello, World!" << std::endl;
}
```
````
````{tab} Java
```{code-block} java
public class HelloWorldProgram {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}
```
````
````{tab} Javascript
```{code-block} javascript
console.log("Hello, World!");
```
````
````{tab} Python
```{code-block} python
print("Hello, World!")
```
````
````{tab} R
```{code-block} r
print("Hello, World!")
```
````
````{tab} julia
```{code-block} julia
"Hello, World!"
```
````

Languages like Julia, have a more modern syntax, and great for writing scripts for scientific computing or machine learning.

C++ is a more versatile general purpose language, that is platform independent, allows for precise control of hardware and memory.

If you had to pick one language to learn - the one that provides more career options and a stronger foundation for picking up other languages is best.

```{note}
:class: magin
{attribution="Bjarne Stroustrup - Creator of C++"}
> There are only two kinds of languages: the ones people complain about and the ones nobody uses. 
```
All the `C++ language syntax is detailed the official C++ Standard Reference Documentation [here](https://en.cppreference.com/w/) - NB Although it may look daunting, this reference does have some useful information for beginnerss, and will become more accessible as you work through the basic concepts covered in this module.

```{admonition} Note
:class: note margin
Computational A will be using `C++20`
```
```{admonition} Note
:class: note margin
The evolution of the C++ language is detailed in: [Evolution of the C++ language](https://en.cppreference.com/w/cpp/language/history.html)
```
***

The live code editor on the following pages, uses a C++ Kernel that runs in Jupyter Notebook. This is not the usual way to work and has signifiant limits.

In later weeks we will move to Visual Studio and start writing complete computer programs that can be compiled into executables - the following notes apply then.

You might want to down load the Community Edition (free) of Visual Studio in advance.

## Structure of the C++ Language

In the `C++` programming language, consist of two parts: the **{term}`core language`** and the **{term}`standard library`**.

The **C++ Standard Library** is a collection of classes and functions, which are written in the **core language**.

The entire `Cc++` language is defined by the **C++ ISO Standard**. 

The standard is regularly updated and improved, so you must check which version of the language your code is written in - there may be compatibility issues between versions.

A large part of the **C++ Standard Library** is based on the **Standard Template Library (STL)**. 

Useful tools provided by the STL include containers as the collections of objects (such as vectors and lists), iterators that provide array-like access to containers, and algorithms that perform operations such as searching and sorting.


## Structure of C++ Programmes

A C++ program is a sequence of text files written in the human-readble C++ language, with file endings such as `.cpp` for source files and `.h` for header files. 

Each c++ language file is called a {term}`translation unit`, contains a series of declarations. Each {term}`declaration` is a statement written in the C++ language, which together form a program.

`C++` is a {term}`compiled language`. The {term}`compiler` converts the (basically) **human-readable** `C++` translation units into machine language files, called {term}`object files` that have endings `.obj in Windows and `.o` in Linux.

The collection of object files are then linked together by the {term}`linker` into an {term}`executable file`; ending `.exe` in Windows. 

The `.cpp` source code is platform agnostic, but the object files and executable files are not portable amongst platforms, not even amongst generations, therefore a different compiler is required for each different platform, i.e. OS, Windows, Linux, ... .

The collection of object files are then linked together by the {term}`linker` into an {term}`executable file`;  `.exe` in windows or `.app` etc.. 

```{mermaid}
:align: center
:zoom:
flowchart LR
    A(["Source Files"]) --> B["Compiler"]
    B -- Object files --> E["Linker"]
    C(["Header Files"]) --> D["Compiler"]
    D -- Object files --> E
    E --> F(["Executable Files"])

     A:::Pine
     B:::Pine
     E:::Pine
     C:::Pine
     D:::Pine
     F:::Pine
    classDef Pine stroke-width:1px, stroke-dasharray:none, stroke:#254336, fill:#27654A, color:#FFFFFF
    linkStyle 0 stroke:#00C853,fill:none
    linkStyle 1 stroke:#00C853,fill:none
    linkStyle 2 stroke:#00C853,fill:none
    linkStyle 3 stroke:#00C853,fill:none
    linkStyle 4 stroke:#00C853

```

```{admonition} Additonal Information
:class: note dropdown

Header files with a `.h`, `.hpp`, or `.hxx` extension,  are sources files that containing entity declarations and/or definitions that need to be visible to multiple {term}`translation units`.

The C and C++ compilers only compile a single file at a time. 

Source files may include header files, which are substituted in place for the #include statement and other directives by the preprocessor, resulting in a single "file" which is then fed to the compiler. 

The source file must contain all type and all object declarations that are referenced, which is the meaning of the undeclared reference compiler error. 

Compilation only requires complete {term}`declarations` to succeed; {term}`definitions` are handled at a later stage in the build process.

{term}`Resource files` are things like pictures, bitmaps.

Other useful extensions: .lib for library files, `.a` for archive file (similar to library), `.so` for shared object files (like libraries), `.c` for `c` source code,  `.cc` for `c` with classes,  `.hpp` for header for cpp not also c.

```

```{admonition} Implementations
:class: note dropdown
C++ implementations are either "hosted" or "free-standing".

A hosted implementation includes all the standard-library facilities.

Freestanding implementations are used when your code require the most minimal operating system support. 

A freestanding implementations generally provide fewer standard-library facilities, but must include certain basic requirements, provided by this minimal list of headers from the standard library:  `<cstddef>`, `<cfloat>`, `<limits>`, `<climits>`, `<cstdint>`, `<cstdlib>`, `<new>`, `<typeinfo>`, `<exception>`, `<initializer_list>`, `<cstdalign>`, `<cstdarg>`, `<cstdbool>`, `<type_traits>`, and `<atomic>`.

Some implementations provide a non-standard option that does not use exceptions for really minimal, bare metal programming (directly implemented on hardware).

The C++ standard leaves some important features and rules to be implementation-defined. There is therefore much scope for unexpected behaviours between implementations.

Programs often rely upon on implementation-defined behaviours. 

To enable portability the programmed should always understand be clear about which features , it is wise to be explicit about what implementation-defined features are being used and to try to isolate implementation specific features to specific parts of the program - in separate files, functions etc. - then only these sections need be changed.

```



````{admonition} Memory Management
:class: note dropdown

Historically, computer memory was much smaller and more expensive. It was necessary to plan how even small programs would manage memory. 

Today computers have relatively large and cheap memory, and memory management need only be considered for more demanding applications, or for embedded devices.

Assigning objects to the computer's memory (RAM) is called allocating e.g. allocatd on the stack, allocated on the free store

In C++, methods are available for allocation and freeing memory during the execution of a program.

Memory is divided into:
* {term}`static memory` - memory allocated for the program, before it starts execution - region called the data segment - also global memory - controlled by programmer.
* Automatic local variable memory - region called the {term}`stack` - controlled by logical execution of the program.
* {term}`Dynamic memory` - called the {term}`free store` - managed by the programmer (region of memory sometimes called the {term}`heap`).


Objects are allocated to the free store using `new` and persist until specicially deleted. Failing to deallocate memory in the free store, during execution causes memory resource issues, `delete` must be use to deallocate to prevent a memory leak. 

The stack is memory allocated at run time to hold local variables and arguments for any function call including the `main()` function. The stack is automatically freed when the function execution ends.

```{admonition} Out-of-Memory Errors
:class: note dropdown

Memory is a finite resource and programmers often need to consider how objects are allocated into different types of memory in order to make it possible to run a program on a given device.

Each type of memory has a different impact on memory resources. 

The amount of static memory required is determined by the static data structures that are required to exist in the computer's RAM during execution.

The amount of stack memory required depends on the size of the local variables be and the interaction of the functions that are called. A function that uses a large array and calles itself repeatedly will use up a lot of the available stack. Programs can usuall by rewritten to minimise stack requirement - sometimes by increased static memory.

In C++, the most likely cause of unexpected "out of memory errors" is running out of memory on the heap as a result of not deallocating objects properly.
Memory leaks occur when memory remains allocated after it is no longer needed, due to the failure of the program to release memory back to the heap with delete when the object is no longer required (after a function has been executed). Leak in the sense that the program has a decreasig amount of memory available to it. Some lanaguages handle this issue using a process called automatic garbage collection.
```
````
 
