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

Most entities in the C++ language, such as variables, functions, and classes, have an identifier (a name).

Writing a program usually requires multiple instances of different entities to be created - each must be given a unique identifier, which is then used within the program text to represent the entity, or its value.

```{admonition} No Whitespace in Identifiers!
:class: margin warning
Whitespace is not permitted in identifiers/names.

Longer names are broken up using underscores (bad) or [Camel Case](https://en.wikipedia.org/wiki/Camel_case) (good).

Special symbols are not permitted.
```
Identifiers are arbitrarily long sequences of characters - including the digits, underscores, lowercase and uppercase Latin letters, and most Unicode characters.

Identifiers encountered in a program are associated with the declarations that introduced them using a 'name lookup'. 

"Name" is generally synonymous with "identifier" - but also encompasses keywords, operators, literals, and other things which are not entities.

Each name is normally valid within a part of the program called its {term}`scope`; unless its use has been extended by {term}`linkage`, which enables an identifier to refer to the same entities when they appear in different scopes or translation units.

## User-defined Identifiers

Certain words in a C++ program have special meaning and are 'reserved' - meaning they cannot be used as identifiers - these are called {term}`keywords`. 

Any other words may be used as identifiers, unless they have already been used in the same {term}`scope`.

A compilation error occurs if the compiler finds two identical identifiers - sometimes called a 'naming collision' or a 'naming conflict' (error).
```{note}
:class: margin
An identifier cannot start with a number!
```

````{syntax-start} Rules For Valid Identifiers
:class: dropdown 
:nonumber:
````
The options for the first character of a valid identifier are: 

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

Identifiers are case-sensitive. Any difference in the pattern of symbols creates a new identifier.
The variables named `www` and `WWW` are not the same.

```{admonition} Naming Conventions for Creating Identifiers
:class: dropdown note

It is considered best practice to use a consistent writing format for identifiers of the same type - this is called a naming convention.

In C++, common practices are:

* An initial capital letter is only used for a {term}`class`. This makes it easy to distinguish a class from a function etc.
* Names of functions and variables start with a lower-case letter.
* Longer names are generally written in Camel Case, where the name is composed of a series of words, and later words start with capital letters.
[Camel Case](https://en.wikipedia.org/wiki/Camel_case)
* Pointer variables should be prepended with 'p' or 'ptr' and the asterisk '*' should be positioned consistently - either next to the pointer type or next to the variable name.
* Reference variables should be prepended with 'r', or 'ref'. This helps to differentiate between the method returning a modifiable object and the same method returning a non-modifiable object
* Static variables should be prepended with 's', or 'static'.
* Global constants should be all capital letters separated with '_'.

```
````{Syntax-end}
````

Note: Support of Unicode identifiers is limited in most implementations, e.g. gcc (until 10.x).

## Keywords

Certain words in C++ have special meaning, known as {term}`keywords`, which are reserved for the use of the Language Standard.

The reserved keywords may not be used as object names.

Here is a list of reserved [keywords](https://en.cppreference.com/w/cpp/keyword.html) in the C++ language from the CPP reference.

## Declaration
```{tip}
:class: margin
Before the `main()` function put:
* Constant declarations.
* Function prototype declarations.

Inside the `main()` function put:
*Variable declarations.
```
Before an identifier (name) can be used in a C++ program, it must be declared. 

Declaration informs the compiler of the existence of an instance of a specified type of entity and establishes its identifier.

````{code_example-start} Examples of Declarations
:class: dropdown 
:nonumber:
````
These are only declarations - most of them cannot be used yet.


```{code-block} 
:linenos:
#include <iostream>
#include <vector>
#include <cmath>
#include <string>
double std::sqrt(double);  //function declaration - parameter name optional
struct Date { int d , m, y; };    //struct declaration
template<class T> T abs(T a) { return a < 0 ? -a : a; }
int fac(int n) ;
int main() {
    char myChar;
    std::string myString;
    auto count = 1;
    const double pi{ 3.1415926535897 };
    const char* myPlace;
    const char* season[4];
    std::vector<std::string> ourPeople;
    return 0;
}
```
Most declarations do not include any values, but some cannot be completed without them.

If the type is `auto` or declared as `const` then the declaration must include initialisation (a value).

````{code_example-end}
````
### The Structure of Declarations

The structure of a declaration is defined by the C++ grammar and has 5 basics part.

* Optional prefix specifiers e.g. `static` or `virtual`.
* A base type e.g. `vector<double>` or `const int`.
* A declarator a name and optionally some declarator operators e.g. `p[7]`, `n`.
* Optional suffix function specifiers e.g. `const` or `noexcept`.
* An optional initializer or function body e.g. `={7,5,3}` or `{return x;}`.

Except for functions and namespace definitions, a declaration is terminated by a semicolon.

## Declarators

A declarator is the 'name' of the new object found in its declaration, combined with any declarator operators/modifiers. 

The type and any type-modifiers are not part of the declarator.
`````{syntax-start} Declarators
:nonumber:
:class: dropdown
`````
Examples of Declarators vs Identifiers
```{code-block} c++
int myInt;                    // myInt is the declarator
double *myDouble;             //myDouble is the identifier, *myDouble is the declarator
int myIntArray[256];          //myIntArray[256] is the declarator, myIntArray is the identifier
volatile int * sequence [5];  //*sequence[5] is the declarator
```
The most common declarator operators are:

````{admonition} Declarator Operators
:class: note dropdown
```{list-table}
:header-rows: 1
:name: Declarator Operators
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
Declarators are tricky because they are designed to mirror their use in expressions; for example, `∗` is a ‘prefix’ and `[]` and `()` are both are ‘postfix’ operators. 

The postfix declarator operators bind tighter than the prefix ones. 

Consequently, `char∗kings[]` is an array of pointers to `char`, whereas `char(∗kings)[]` is a pointer to an array of `char`. 

It is necessary to use parentheses to express types such as ‘pointer to array’ and ‘pointer to function’.

`decl-specifier-seq` is the sequence of whitespace separated specifiers, found in a declaration before the declarator, and including the type-specifier and any modifiers.

`````{syntax-end}
`````





