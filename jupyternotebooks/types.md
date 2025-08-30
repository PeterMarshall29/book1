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

# Types in C++

The **type** of a variable defines its properties, the rules it must obey, and the set of operators and functions availabe to members of each type.

For example, `+` behaves differently when used an an {term}`infix operator` between two integers, compared to between two strings.

Also the addition of integers yield a different numerical value than the addition of the `char` reprentation of the same numbers.

It would not make much sense to be able to add string-type to double-type variables, and the `type system` helps by preventing this.

Each object, reference, function, expression in C++ is associated with a type, which may be fundamental, compound, or user-defined, complete or incomplete, etc.
## Fundamental Types in C++

Types defined in the {term}`core language` are the {term}`fundamental types`:
- Integral Types: `int`, `char`, `bool`, and variants.
- Floating-point Types: `float`, `double`, etc..
- Void

{term}`Void` is a type  used to signify the absence of information.

The integral and floating-point types are collectively called the arithmetic types.

Other 'built-in' types, are constructed using declarator operators, including: pointer types `int*`, simple array type, `char[]`, and reference types `double&` and `vector<int>&&`.

The types in the {term}`standard library` are **derived types** contructed using the types in the core language.

Programmers can define their own 'user-defined' types. Using a {term}`class` or a {term}`template` etc..

## C++ is a **strongly-typed language**. 

Once a variable type is set, for example when a number is cast as a **double**, the type cannot be changed.

However type conversion is possible - by copying a the value from a variable of one type, to a new variable of the different type.

This is called {term}`casting to type`. Casting required conversion from one type to another - there are some inbuilt conversions, and others may be created by the user.

Strict type enforcement offer benefits to both efficiency and safety. It would be difficult to keep track of the type of a variable if it could be changed, and would required frequent type checking to ensure no errors, which takes time and resources.

## Type System and Type Safety

All expressions (including literal values) are implicitly given a type by the compiler before they're evaluated.

The C++ type system is a fundamental aspect of the language - a set of rules applied by the compliler that ensure every variable, function argument, return value, and expression has a specific type.

The C++ type system keeps track of the size of the memory block, and how to interpret the value in it. The binary code in a memory block could represent the integer value 33 or be the ASCII code for '!' - the type tells the computer which was intended. This system provides structure, safety, and meaning to the code. 

Also, all expressions (including literal values) are implicitly given a type by the compiler before they're evaluated.

The type system ensure type safety - the guarantee that an object can be accessed only according to its definition. 

C++ is higly type safe, but a programmer can still violate type safety by explicit casting, by using an uninitialized variable, by using a pointer that doesn't point to an object, by accessing beyond the end of an array, and by misusing a union. Type safety must be preserved for a program to be correct and maintainable.

## Casting to Type

Although the type of a variable cannot be changed.

The value of a variable can be copy assigned to another variable that has a differnt type  - not all permutations are permitted.

Casting to type, means conversion from the original type to the type of the variable that the value is being assigned.

This is often useful, and often necessary when working with numeric types.

Casting may be implicit or explicit.

### Implicit Casting
````{admonition} Type Promotion Hierarchy
:class: tip margin 
```{mermaid}
:align: center
:zoom:
flowchart BT
    A["bool"] --> B["char"]
    B --> C["int"]
    C --> D["long"]
    D --> E["float"]
    E --> F["double"]
    F --> G["long double"]

     A:::Pine
     B:::Pine
     C:::Pine
     D:::Pine
     E:::Pine
     F:::Pine
     G:::Pine
    classDef Pine stroke-width:1px, stroke-dasharray:none, stroke:#254336, fill:#27654A, color:#FFFFFF
    linkStyle 0 stroke:#00C853,fill:none
    linkStyle 1 stroke:#00C853,fill:none
    linkStyle 2 stroke:#00C853,fill:none
    linkStyle 3 stroke:#00C853,fill:none
    linkStyle 4 stroke:#00C853,fill:none
    linkStyle 5 stroke:#00C853,fill:none
```
````
Some types are automatically converted by the compiler if their is a mismatch and the type conversion required is one of the permitted built-in conversions - called implicit casting.

Implicit casting occurs when a single expression is found to include multiple types. e.g. attempted addition of an `int` to a `double` - although they are both numbers, a decision needs to made about the type of the result, and some possible operations behave differently beteen types, such as division.

The compiler has to have a set of rules for each possible conversion - programmers need to be aware of what might be applied.

For numeric values - this is called type promotion - the type with the smallest precision is converted to the type with the larger precision.

Type promotion occurs in arithmetic expressions, when the types are mismatched, but convertable, and in functions, if the passed in types is smaller than the expected type.

`````{example-start}
:label: examplef1
:class: dropdown
`````
In the following code, 'a' has been promoted to type `double` from type `int`.
````{code-cell} c++
:tags: [remove-output]
#include <iostream>
#include <typeinfo>
int main() {
    int a = 2;
    double b = 2.0;
    std::cout << typeid(a + b).name() << '\t' << a + b  << '\n'; 
}
````
```{exercise}
:class: dropdown
Try the following:
- Used some other types and check the hierarchy in the margin is correct.
- What happen if you use (a + 6l)
```
`````{example-end}
`````
Type promotion can cause problems, and needs to be considered carefully if you want to rely on your calculations - but less often than type demotion.

### Explicit Casting

Some types may be explicitly cast to another, using a type conversion function

There are several ways to direct that a value is us

Function style casting is the simplest. Inserting the variable who type is to be changed in the following functions, in the expressions where the new type is required.

`int()`, `double()`. The functions do not alter the original type, just the copy used in the expression.

c-stlye cast can also be used:
`(int)2.0` yields the integer value '2'.

## Determining the Type of a Variable

It is tremendously useful to be able to check the type of a variable.

`````{example-start}
:label: examplef2
:class: dropdown
`````
````{code-cell} c++
:tags: [remove-output]
#include <iostream>
#include <string>
#include <typeinfo>

int main() {
    int myInt = 99;
    char myChar = 'P';
    double myDouble = 3.14;
    std::string myString = "when's lunch?";
    bool myBool = true;
    std::cout << typeid(myInt).name()  << '\t' << typeid(myBool).name() << '\t' << typeid(myDouble).name() << '\t' << typeid(myChar).name() << '\t' << typeid(myString).name() << '\n';
    return 0;
}
````
This produces more easily understood values for the primitive types. 
````{exercise}
:class: dropdown
Use typid on a function.
```{hint}
Only use the functions name - no parentheses!
```
```{admonition} Code Explanation
:class: note dropdown
On a function such as: 
```{code-block} cpp
int myFunction(int x, double y) {
    return 2;
}
```
`typeid(square).name()` returns `int --cdecl(int, double)`.

The function type is `int (int, double)`.

`__cdecl` refers to the calling convention of a function, different compilers may handle this differently - not important now.
```
````
`````{example-end}
`````
## Deducing a Type: auto and decltype()

C++ provides two mechanisms for deducing a type from an expression - or rather for reporting the type that is already known to the compiler.

`auto` is used to deduce an object's type from its initializer; the type can be the type of a variable, a const, or a constexpr.

`decltype(expr)` is used to deduce the of something that is not a simple initializer, such as the return type for a function, or the type of a class member.

There is not much advantage in using auto instead of int for an expression as simple as 123. 

For types that are more difficult to write and therefore harder to know, auto is much more useful. 

Example


template<class T> void f1(std::vector<T>&arg)
{
for (std::vector<T>::iterator p = arg.begin(); p != arg.end(); ++p)
*p = 7;
for (auto p = arg.begin(); p != arg.end(); ++p)
*p = 7;
}
The loop using auto is the more convenient to write and the easier to read. Also, it is more resilient to code changes. 



The language provides two mechanisms for deducing a type from an expression:
auto for deducing a type of an object from its initializer; the type can be the type of a vari- able, a const, or a constexpr.
decltype(expr) for deducing the type of something that is not a simple initializer, such as the return type for a function or the type of a class member.
The deduction done here is very simple: auto and decltype() simply report the type of an expression already known to the compiler.

6.3.6.1 The auto Type Specifier
When a declaration of a variable has an initializer, we don’t need to explicitly specify a type. Instead, we can let the variable have the type of its initializer. Consider:
int a1 = 123; 
char a2 = 123;
auto a3 = 123; // the type of a3 is ‘‘int’’int a1 = 123; char a2 = 123;
auto a3 = 123; // the type of a3 is ‘‘int’’
The type of the integer literal 123 is int, so a3 is an int. That is, auto is a placeholder for the type of the initializer.
There is not much advantage in using auto instead of int for an expression as simple as 123. The harder the type is to write and the harder the type is to know, the more useful auto becomes. For example:
template<class T> void f1(std::vector<T>&arg)
{
for (std::vector<T>::iterator p = arg.begin(); p != arg.end(); ++p)
*p = 7;
for (auto p = arg.begin(); p != arg.end(); ++p)
*p = 7;
}
The loop using auto is the more convenient to write and the easier to read. Also, it is more resilient to code changes. 

## `lvalue` and `rvalue`

The c++ term ``lvalue` was originally coined to mean **something that can be on the left-hand side of an assignment.** 

An `lvalue` is a named object, or an unnamed objected created using `new`.

Not all `lvalue` may be used on the left-hand side of an assignment, for example if the `lvalue` refers to a constant.

An `lvalue` that has not been declared const is called a modifiable `lvalue`. 

This simple and low-level notion of an object should not be confused with the notions of class object and object of polymorphic type.


Rvalue means ‘‘a value that is not an lvalue,’’ such as a temporary value (e.g., the value returned by a function). 
If you need to be more technical because you want to read the ISO C++ standard a deeper definition is required. There are two properties that matter for an object when it comes to addressing, copying, and moving: 
• Has identity: The program has the name of, pointer to, or reference to the object so that it is possible to determine if two objects are the same, whether the value of the object has changed, etc.
• Movable: The object may be moved from (i.e., we are allowed to move its value to another location and leave the object in a valid but unspecified state, rather than copying). 
For practical programming, thinking in terms of rvalue and lvalue is usually sufficient. Note that every expression is either an lvalue or an rvalue, but not both.

It turns out that three of the four possible combinations of those two properties are needed to precisely describe the C++ language rules (we have no need for objects that do not have identity and cannot be moved). Using ‘‘m for movable’’ and ‘‘i for has identity,’’ we can represent this classification of expressions graphically:

diagram from week 2 slide 66
So, a classical lvalue is something that has identity and cannot be moved (because we could examine it after a move), and a classical rvalue is anything that we are allowed to move from. 
The other alternatives are prvalue (‘‘pure rvalue’’), glvalue (‘‘generalized lvalue’’), and xvalue (‘‘x’’ for ‘‘extraordinary’’ or ‘‘expert only’’; the suggestions for the meaning of this ‘‘x’’ have been quite imaginative). For example:
void f(std::vector<std::string>& vs)
{
	std::vector<std::string>& v2 = std::move(vs); // move vs to v2
	// ...
}
Here, std::move(vs) is an xvalue: it clearly has identity (we can refer to it as vs), but we have explicitly given permission for it to be moved from by calling std::move().

## Type Aliases

Sometimes, we need a new name for a type. Possible reasons include:

* The original name is too long, or complicated in some way.
* A programming technique requires different types to have the same name in a context.
* A specific type is mentioned in one place only to simplify maintenance.

For example:
using Pchar = char∗; // pointer to character
using PF = int(∗)(double); // pointer to function taking a double and returning an int





