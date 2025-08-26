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

Different distinguishable parts of a programs structure are called scopes. 

The location of a declaration introduces the name into the scope at that location.

The purpose of a scope is to keep names "local", so that they won’t interfere with names declared elsewhere; i.e. same names can be used in different local scopes.

Try to always use indenting to reinforce scoping changes.
 
For example, the statements inside different functions are said to have different scope.

The scope of names determines where the name can be used. Named objects can only be accessed with their own scope.

```{important}
A named object can only be used with its scope.
```

The main scopes are:

* Global: Names declared outside of all other scopes i.e. Outside of any function or class, sometimes called the global namespac
* Namespace: A named scope - creates a separate scope within the global scope or within another namespace
* Class: Everything with the class definition - may be subclasses with the area of text within a class
* Local scope: Accessible only with the block where they are declaredin a block i.e. between `{ }`, or in a function argument list
* Statement scopes: e.g., in a for-statement

Scopes are used as to describe the corresponding names: e.g. global variable, local variable, statement (loop) variable.

Function scopes:
* A function declared on its own, has global scope, and called a global function. 
* A (member) function declared inside a class only has class scope, and can only be accessed through an object of that class.
* Namespace functions are accessed using the namespace name e.g. `std::cout`.
* Lamda function have local scope being anonymous functions declared inside other functions and only accessible to the function. 

```{Note}
`::` is the scope resolution operator.
Used to access a named object in a
```



Because of scope, the same name can there be used mutiple times throughout a program, even for objects of different types, provided each has a different scope.
or different objects in different scopes - but this leads to unnecessary confusion and should be avoided.

```{code-cell} c++
#include <iostream>
#include <string>
int x = 10;
int main()
{
	std::string x = "hello";
    std :: cout << x;
	return 0;
}
```

````{admonition} Code Explanation
:class: dropdown
```{code-block} c++
int x = 10;
```
Declares an object of integer type with {term}`global scope`.

```{code-block} cpp
int main() {
**code statements go here**
}
```


````


Objects may have the same name if they are different types - but this is unhelpful and to be avoided.

Using the same name with a different type

## Scope
A named object is declared "in scope". A “scope” is a region of program text, e.g. inside a single function. The object is only valid within that region of the program unless it is defined to have “global scope”.
The main purpose of a scope is to keep names “local”, so that they won’t interfere with names declared elsewhere; i.e. same names can be used in different local scopes.

Try to always use indenting to reinforce scoping changes.
 
 
There are several kinds of scopes that we use to control where our names can
be used:
• The global scope: the area of text outside any other scope
• A namespace scope: a named scope nested in the global scope or in another namespace
• A class scope: the area of text within a class
• A local scope: between { . . . } braces of a block or in a function argument list
• A statement scope: e.g., in a for-statement




## Scoping Rules and Exceptions

A variable with {term}`global scope`  Variables declared outside of all functions or classes have global scope. Global variables are accessible throughout the program, unless shadowed by a local variable with the same name. Global variables are best avoided unless necessary because they may result in unintended consequences in execution.



You need to keep in mind the following rules:

In each scope, local variables are used in preference to others with the same name, this is called {term}`shadowing`.
A local variable will be used in preference to a global variable of the same name.

Variables cannot be accessed outside of their scope, loop variable, function parameters only exist inside their scope. Class and struct variables can be accessed by indexing in.

Make global variable have long detailed names.

Do not use global variables if possible, its hard to keep track of which functions may be altering their values.

The quality of a program is often said to be inversely proportional to the number of global variables as the index of an exponential – keep it to one or two at most.
 
Blocks: Blocks within functions (nested blocks) or other block have their own scope
Functions: Local or nested functions
Classes: Classes can have member classes; classes within another class, also called nested classes.
Local classes are those declared with in functions – best avoided – function is too long if it benefits from the use of a class.
A member definition can be outside its class, provided it is declared inside the class.

Inside: Void f(); // declaration
Outside: Void MyClassName::f() {} // the definition.


## Shadowing

It is usually possible to use the same name more than once, provided each declaration has different scope.


An exception is the loop variable in a `for` loop. Another type with the s




## Namespace
Namespace is a language feature exclusively used to express scoping.
Creating a namespace allows you to write sperate parts of a longer program without fear that the names used will not have been used elsewhere.
 
The standard library facilities are defined in namespace std, so to use them, you need an explicit qualification, a using declaration, or a using directive:

std::string s; // explicit qualification

using std::vector; // using declaration
vector<int>v(7);

using namespace std; // using directive
map<string, double> m; 
 
A member can be declared within a namespace definition and defined later using the namespacename :: member-name notation. Members of a namespace must be introduced using this notation:

namespace namespace−name {
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

