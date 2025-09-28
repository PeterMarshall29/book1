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

# Objects, Values, Variables, and Constants

The C++ language is composed of a large number of {term}`entities`, including: {term}`values`, {term}`objects`, {term}`references`, {term}`functions`, {term}`enumerations`, {term}`types`, {term}`class members`, {term}`templates`, and {term}`namespaces` (and a few more advanced examples).

Each instance of an any entity needed by the program is introduced by a {term}`declaration` e.g. an integer type variable called 'myInt' would be declared using `int myInt;`. A declaration is not enough for the variable to be used, but it is useful to separate the announcement of the variable type and name, from the details of its implementation.

The declaration associates that instance with a unique {term}`identifier` and defines its {term}`type` i.e. when three integer variables are need - three `int` names are declared.

Before named entity can be used it must be given a value - this is called initialisation. 

A {term}`definition` is a declaration extended to include all the properties (values) required to use the named entity. Declarations may be repeated, but there can only be one definition for each entity. 

For definitions, a strict rule is "there can be only one!” Programmes contain only one definition of any non-inline function or variable.
```{Tip}
:class: margin
Definitions are like Highlanders - there can be only one!
```
Definitions of functions usually include sequences of statements, some of which include expressions, which specify the computations to be performed by the program.


## Objects

We can do nothing of interest with a computer without storing data (information). The data is stored in the computer's memory.

An {term}`object` is a region of memory holding a {term}`value` of a specific {term}`type`.

C++ programs create, destroy, refer to, access, and manipulate {term}`objects`.

```{note}
:class: margin
For the moment we do not need to worry about computer memory - what it is, how it works, or how the computer program uses it.
In the past, computer memory was a more limited resource that had to be carefully managed. Today, we do not have to worry about memory until we go to work programs that use a lot of memory and need to perform a lot of computations as quickly as possible.
```

An object, in C++, has
* A type.
* An identifier (rarely optional – see anonymous or temporary objects).
* A value (which may be indeterminate).
* A size.
* An address - location in the memory.

The following C++ {term}`entities` are not objects: values, references, functions, enumerators, types, non-static class members, templates, namespaces, and `this` [And some others].
```{note}
:class: margin
This simple and low-level definition of an object should not be confused with the concept of an object being an instance of a `class`.
```
The {term}`type` of an object determines what type of data it can store, and what operations are available to work with that type of data. 

The compiler will not allow you to put values of the wrong form into an object of a specific type.

## Values

The data stored in an {term}`object` is called the {term}`value` – values need not be numbers. 

A value is a set of bits interpreted according to a {term}`type`. For example, the value of an object containing the binary code `01110000`:
`````{admonition} Type Interpretation of Values
````{card} 
```{list-table}
:header-rows: 1
:name: Value of an object containing `01110000`
* - type
  - interpretation
* - char
  - `p`
* - int
  - 112
```
````
`````

C++ programs also contain {term}`literals`, the values of characters inside them are determined by character sets and encodings.

## Variables

A {term}`named object` is called a {term}`variable`.

In C++ a variable is declared by stating its **type** followed by its **name** followed by {kbd}`;`. 

`````{syntax-start} Variable Declarations
:class: dropdown
:nonumber:
````` 
Examples of Variable Declarations:
```{code-block}
char myChar;
int myInt;
std::string myString;
std::vector<int> myIntegerVector;
```
`````{syntax-end}
````` 
Objects and variables are very similar, and confusion may arise. 

## Constants

In computer programming, variables may well be constants, i.e. the value of the variable is made {term}`immutable` and cannot be changed after initialisation - but it is still a 'named object'.

To create a constant, called a 'symbolic constant' – i.e. a name representing a constant, we can use either `constexpr` or `const`, both of which are modifiers that precede the type.
`````{syntax-start} Constant Declarations
:class: dropdown
:nonumber:
`````
Constant Declarations:
```{code-block}
constexpr double c = 299792458;
const double c = 299792458;
```
`c` will not be reassign-able/modifiable in both cases, but there is a key difference.

Constant expressions `constexpr` must be initialised prior to compilation i.e. their assignment cannot be left until run-time.

Constant variables `const` are those whose value might only become known at run-time. These do not have to be initialised prior to compilation, making run-time errors more likely. 

There is no good reason for using `const`!

These modifiers may also be applied to functions creating the same rules for the return.
`````{syntax-end}
`````







