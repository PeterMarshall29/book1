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

# Scope

Different distinguishable parts of a program's structure are called {term}`scopes`; for example, the statements inside different functions are said to have different scope.

The location of a declaration introduces the identified entity into the scope at that location.

Objects declared in different scopes can use the same identifier i.e. you can have lots of variables called `i`. The purpose of a scope is to keep names 'local", so that they cannot interfere with identical names declared elsewhere.

```{admonition} Good Practice
:class: tip margin
Always use indenting to reinforce scoping changes.
```
The scope of each named object determines where the object may be used - named objects can only be accessed within their own scope.

```{important}
:class: margin
A named object can only be used within its scope.
```

The main scopes are:

* Global: Names declared outside of all other scopes i.e. outside of any function or class; sometimes called the global namespace.
* Namespace: A named scope - creates a separate scope within the global scope or within another namespace.
* Class: Everything with the class definition - may be subclasses with the area of text within a class.
* Local scope: Accessible only within the block where they are declared i.e. between `{ }`, or in a function argument list.
* Statement scopes: e.g. in a for-statement.

Scope names are often used as adjectives describing entities: e.g. global variable, local variable, statement (loop) variable.

Function scopes:
* A function declared on its own, has global scope - a 'global' function. 
* A (member) function declared inside a class only has class scope and can only be accessed through an object of that class.
* Namespace functions are accessed using the namespace name e.g. `std::cout`.
* Lamda functions have local scope being anonymous functions declared inside other functions and only accessible to the function. 

```{Note}
:class: margin
`::` is the scope resolution operator - used to access a named object in a particular namespace.
```

`````{code_example-start} Scope
:label: exampleg1
:class: dropdown
:nonumber:
`````
Run this code, then un-comment the `std::string` line and run it again.
````{code-cell} c++
:tags: [remove-output]
#include <iostream>
#include <string>
int x = 10;
int main()
{
  //std::string x = "hello";
    std :: cout << x;
  return 0;
}
````
````{code_explanation} exampleg1
:class: dropdown
An object of integer type with {term}`global scope` called `x` is declared:
```{code-block} c++
int x = 10;
```
The first time you run the program, this global variable x is accessed and printed.
```{code-block} c++
  std::string x = "hello";
```
This statement declares a local variable also called `x`.

The print statement is only told to find a variable called `x` - the variable named `x` with the innermost scope is always selected.

To print the global `x` instead use `::x` in `std::cout`
````
`````{code_example-end}
`````
## Global Variables
A variable with {term}`global scope` is declared outside of all functions and classes. 

Global variables are accessible throughout the program, unless shadowed by a local variable with the same name. 

Global variables are best avoided unless necessary because they may result in unintended consequences in execution. 

Global variables should have long descriptive names - adding the word 'global' at the end of the name is good practice.

```{tip}
:class: margin
Give global variable have long detailed names starting with word 'global'.
```

Do not use global variables, if possible, it's often difficult to keep track of which functions may be altering their values.

The quality of a program is often said to be inversely proportional to the number of global variables as the index of an exponential – you should never have more than one or two global variables.

```{admonition} Reasons to Avoid Global Variables
:class: Note dropdown
Namespace Pollution - Risks naming collisions, when your global variable's identifier matches one used in a library you include.

Maintenance - Reduces the modularity, making programmes more difficult to maintain. Modular programmes encapsulate everything needed by individual functions and classes into them relying only on information passed on call. 

Debugging - Global variables can be modified by any part of the program, making it difficult to track down bugs caused by unintended changes.

Execution speed - Accessing global variables is often slower than accessing local variables to the scope chain lookup.

Memory Consumption - Global variables occupy space for the lifetime of the program - but may never be needed or used rarely.

Multi-threaded programs - Global variables can cause data races.
```
```{admonition} Scoping Best Practices
:class: tip dropdown
Use local variables whenever possible.

Encapsulate variables within functions, modules, or classes.

Use a namespace object to group related global variables and avoid collisions.
```


## Shadowing
It is usually possible to use the same identifier more than once, provided each declaration has different scope.

An exception is the loop variable in a `for` statement.

## Hidden or Shadowed Names
Scope allows the definition of multiple entities with the same name.

The compiler associates each name with the version of the name in the current scope.

The declaration of a name in a block shadows the same name declared in an enclosing block or a global name.

Shadowing hides the names in the higher scopes.

A hidden global name can still be referred to using the scope resolution operator, `::` For example:

`````{code_example-start} Shadowing
:label: exampleg2
:class: dropdown
:nonumber:
`````
Run this code and make changes...
````{code-cell} c++
:tags: [remove-output]
int x;
void main() {
    int x = 3; // Initialise local x
    ::x = 5;   // Initialise global x
    x = 10;     // Assign to local x

    std::cout << x << '\n'; // print local x
    std::cout << ::x;      // print global x
}
````
````{code_explanation} exampleg2
:class: dropdown
`void` is allowed in Visual Studio - replace with `int`.
````
`````{code_example-end}
`````

An exception is the loop variable in a `for` loop. Another variable cannot use its identifier or shadow the loop variable.

## Namespace
Namespace is a language feature exclusively used to express scoping. A namespace is a named scope, which is a separate container for related entities (variables, functions, classes etc.).

Creating a namespace allows the programmer to write a part of a longer program separately and not worry about repeating a variable name.
 
Entities declared in a namespace can only be accessed by using the namespace's identifier and the {term}`scope resolution operator`. 

Namespaces can also be nested if needed. 

The {term}`standard library facilities` are defined in namespace `std`, so to use entities from the {term}`standard library` we must use the explicit qualification `std::`.

## Accessing Entities in a Namespace
There are three ways to access the entities contained within a namespace

- By explicit qualification, e.g. `myNamespace::myEntity`.
- By a using declaration
- By a using directive:

`````{code_example-start} Namespace Example
:label: exampleg3
:class: dropdown
:nonumber:
`````
How to create and use a namespace:
````{code-block} c++
std::string s; // explicit qualification

using std::vector; // using declaration
vector<int> myVector(10);   // instead of std::vector<int> myVector(10);

using namespace std; // using directive
map<string, double> m;   //instead of std::map
````
````{tip}
:class: dropdown
It is bad practice to use a 'using directive'.

The programmer can no longer reuse any of the identifiers in that namespace.

It becomes difficult to keep track of where an identifier comes from.
````
`````{code_example-end}
`````

`````{code_example-start} Defining a Namespace
:label: exampleg4
:class: dropdown
:nonumber:
`````
Members of a namespace must be introduced using this notation:
```{code-block} c++
:linenos:

namespace namespaceName {
  // declaration and definitions
}
namespace Parser {
  double expr(bool); // declaration
  double term(bool);
  double prim(bool);
}
double val = Parser::expr(1); // use
double Parser::expr(bool b) // definition
{
  // ...
}
 
std::string s;
//using std::vector;
using namespace std;
namespace Peter {
double piper(bool);
double pepper(bool) { return 5.0; }
}

double Peter::piper(bool) {
return 4.0;
}
```

`````{code_example-end}
`````
