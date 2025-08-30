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

# Identifiers and Declarations

Most entities in the C++ language have an identifier (a name).

Writing a program usually required additional instances of entities to be created by the programmer and each must be given unique identifier.

```{admonition} No Spaces in Identfiers!
:class: margin warning
Whitespace is not permitted in identifiers/names.
Longer names are broken up using underscores or [Camel Case2](https://en.wikipedia.org/wiki/Camel_case).
Special symbols are not permitted.
```
Identifiers are then used to identify entities in the program text, such as variables, functions and classes.

An identifier is an arbitrarily long sequence of digits, underscores, lowercase and uppercase Latin letters, and most Unicode characters.

Identifiers encountered in a program are associated with the declarations that introduced them using a name lookup. 

"Name" is generally synonymous with "identifier" - the exceptions are beyond the scope of this book.

Each name is only valid within a part of the program called its {term}`scope`. 

Some names have linkage which makes them refer to the same entities when they appear in different scopes or translation units.

## User-defined Identifiers

Certain words in a C++ program have special meaning, and these are known as {term}`keywords`. 

Keywords may not be used as an identifier.

Other words may beused as identifiers, unless they have already been used in the same {term}`scope`.


````{admonition} Rules For Valid Identifiers
:class: dropdown note
The options for the first character are: 

* Any uppercase Latin letter, i.e. `A-Z`
* Any lowercase Latin letters, i.e `a-z`
* An underscore `_`
* Some Unicode characters

After the initial character the options become:

* Any digit `0-9`
* Any uppercase Latin letter, i.e. `A-Z`
* Any lowercase Latin letters, i.e `a-z`
* An underscore `_`
* Some Unicode characters

Identifiers are case-sensitive. Any difference in the pattern of symols creates a new identifier.
The variabless named `www` and `WWW` are not the same.

```{admonition} Convention for use of Identifiers
:class: dropdown tip

It is considered best practive to use a consistant wrting format for indentifiers of the same type - this is called a naming convention.

In C++:

* An intial capital letter is only used for a {term}`class`. This makes it easy to distinguish a class from a function etc.
* Names of functions and variables start with lower case
* Longer names are generally written in Camel Case, where the name is composed of a series of words, and later words start with captial letters.
[Camel Case](https://en.wikipedia.org/wiki/Camel_case)
* Pointer variables should be prepended with 'p' and the asterisk '*' should be position next to the variable name instead of the pointer type.
* Reference variables should be prepended with 'r'. This helps to differentiate between the method returning a modifiable object and the same method returning a non-modifiable object
* Static variables should be prepended with 's'
* Global constants should be all capital letters separated with '_'

```
````

Note: Support of Unicode identifiers is limited in most implementations, e.g. gcc (until 10).

## Keywords

Certain words in a C++ program have special meaning, known as {term}`keywords`, which are reserved

The reserved keywords may not be used as object names.

There are a list of reserved [Keywords in the C++ language](https://en.cppreference.com/w/cpp/keyword.html).

## Declaration
```{tip}
:class: margin
Before the `main()` function put:
* Constant declarations
* Function prototype declarations
Inside the `main()` function put:
*Variable declarations
```
Before a name (identifier) can be used in a C++ program, it must be declared. That is, its type must be specified to inform the compiler what kind of entity the name refers to. 

````{admonition} Examples of Declarations
:class: dropdown note

```{code-block} c++
:linenos:
#include <iostream>
#include <vector>
#include <cmath>
char myChar;
std::string myString;
auto count = 1;  
const double pi {3.1415926535897};
const char* myPlace = "lboro";
const char* season[] = { "spring", "summer", "fall", "winter" };
std::vector<std::string> ourPeople{ "Kelly", "Sasha", "Mark", "Anna", "Steve", "Sarah", "Peter" };
double std::sqrt(double);  //function declaration - parameter name optional
struct Date { int d = 3, m, y; };    //struct declaration
int day(Date * p) { return p −> d; };
template<class T> T abs(T a) { return a < 0 ? −a : a; };
constexpr int fac(int n) { return (n < 2) ? 1 : n*fac(n−1); } ;
```
````
### The Structure of Declarations

The structure of a declaration is defined by the C++ grammar, and has 5 basics part.

* Optional prefix specifiers (e.g., static or virtual)
* A base type (e.g., vector<double> or const int)
* A declarator optionally including a name (e.g., p[7], n, or ∗(∗)[])
* Optional suffix function specifiers (e.g., const or noexcept)
* An optional initializer or function body (e.g., ={7,5,3} or {return x;})
Except for function and namespace definitions, a declaration is terminated by a semicolon.

## Declarators

A declarator is just the name specficied for the new entity in the declaration.

A declarator may be composed of both the ame and some optional declarator operators/modifiers. 

The most common declarator operators are:

````{admonition} Declarator Operators
:class: note dropdown
```{list-table}
:header-rows: 1
:name: Decalarator OperatorsValue of an object containing `01110000`
* - Position
  - Symbol
  - Name
* - Prefix
  - *
  - Pointer
* - Prefix
  - *const
  - Constant pointer
* - Prefix
  - *volatile
  - Volatile pointer
* - Prefix
  - &
  - lvalue reference
* - Prefix
  - &&
  - rvalue reference
* - Prefix
  - auto
  - function
* - Postfix
  - []
  - Array
* - Postfix
  - ()
  - Function
* - Postfix
  - ->
  - Returns from function
```
````
Declarators are tricky because they are designed to mirror their use in expressions; for example ∗ is prefix and [] and () are postfix. 

The postfix declarator operators bind tighter than the prefix ones. 

Consequently, char∗kings[] is an array of pointers to char, whereas char(∗kings)[] is a pointer to an array of char. 

We have to use parentheses to express types such as ‘‘pointer to array’’ and ‘‘pointer to function’




