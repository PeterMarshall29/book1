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

The individual examples of each entity needed by a program are introduced by a {term}`declaration`, which associates each one with a unique {term}`identifier` and defines its {term}`type`.

If the declaration includes all the properties (values) required to use that example of the entity then it is a {term}`definition`. 

A program must contain only one definition of any non-inline function or variable.

Definitions of functions usually include sequences of statements, some of which include expressions, which specify the computations to be performed by the program.

## Values

The data stored in an object is called the `value` – values need not be numbers. 

A value is a set of bits interpreted according to a type. For example, the value of an object containing the binary code `01110000`:

````{sidebar} My sidebar title
```{list-table}
:header-rows: 1
:name: Value of an object containing `01110000`
* - char
  - `p`
* - int
  - 112
```
````

C++ programs also contain {term}`literals`, the values of characters inside them are determined by character sets and encodings.

## Objects

An **object** is a region of memory holding a value of a specific **type** - the {term}`type` prescribes what kind of information can be placed in the object.

We can do nothing of interest with a computer without storing data (information). The places in which data is stored are called “objects”.

C++ programs create, destroy, refer to, access, and manipulate {term}`objects`.

```{note}
:class: margin
For the moment we do not need to worry about computer memory - what it is, how it works, or how the computer program uses it.
In the past, computer memory was a more limited resource that had to carefully managed. Today, we do not have to worry about memory until we go to work programs that use a lot of memory, and need to perform a lot of computations as quickly as possible.
```

An object, in C++, has
* A type
* An identifier (optional - sometimes)
* A value (which may be indeterminate)
* A size ;
* An address - location in the memory

The following c++ {term}`entities` are not objects: values, references, functions, enumerators, types, non-static class members, templates, namespaces, and `this` [And some others].
```{note}
:class: margin
This simple and low-level definition of an object should not be confused with the concept of `class object`.
```
The ‘type’ of an object determines what it can store, but also what operations are available to work with that type of data. 

The compiler will not allow you to put values of the wrong form into a type.
## Variables

A {term}`named object` is called a {term}`variable`.

In C++ A variable is declared by stating its **type** followed by its **name** followed by {kbd}`;`. 

````{admonition} Variable Declarations
```{code-block}
char myChar;
int myInt;
std::string myString;
std::vector<int> myIntegerVector;
```
````
Objects and variables are very similar and confusion may arise. 

## Constants

In computer programming, variables may well be constants; i.e. the value of the variable is made {term}`immutable`, and cannot be changed after initialisation - but it is still a named object.

To create a constant, called a ‘symbolic constant’ – i.e. a name representing a constant, we can use either `constexpr` or `const` , both of which are modifiers that precede the type.

````{admonition} Constant Declarations
```{code-block}
constexpr double c = 299792458;
const double c = 299792458;

```
````

`c` will not be reassignable/modifiable in both cases, but there is a key difference.

constexpr double c = 299792458;

Constant expression `constexpr` must be initialised prior to compilation i.e their assigmnent cannot be left until runtime.

Constant variables `const` are those whose value might only become known at run-time.

These do not have to be initialised prior to compilation, making run-time errors more likely. 

There is no good reason for using `const`!

They can also be applied to functions creating the same rule for the return.




