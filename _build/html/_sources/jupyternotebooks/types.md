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

Types defined in the {term}`core language` are the fundamental types:
- Integral Types: `int`, `char`, `bool`, and variants.
- Floating-point Types: `float`, `double`, etc..

The types in the {term}`standard library` are **derived types** contructed using the types in the core language.

Programmers can define their one 'user-defined' types. Using a {term}`class` or a {term}`template` etc..


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

Some types are automatically converted by the compiler if their is a mismatch and the type conversion required is one of the permitted built-in conversions - called implicit casting.

Implicit casting occurs when a single expression is found to include multiple types. e.g. attempted addition of an `int` to a `double` - although they are both numbers, a decision needs to made about the type of the result, and some possible operations behave differently beteen types, such as division.

The compiler has to have a set of rules for each possible conversion - programmers need to be aware of what might be applied.

For numeric values - this is called type promotion - the type with the smallest precision is converted to the type with the larger precision.

Type promotion occurs in arithmetic expressions, when the types are mismatched, but convertable, and in functions, if the passed in types is smaller than the expected type.

````{admonition} Type Promotion Hierarchy
:class: note margin
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
For example, in the following code, a has been promoted to type `double from type `int`.
```{code-cell} c++
:tags: [remove-output]
#include <iostream>
#include <typeinfo>
int main() {
    int a = 2;
    double b = 2.0;
    std::cout << typeid(a + b).name() << '\t' << a + b  << '\n'; 
}
```
```{exercise}
:class: dropdown

Try the following:

- Used some other types and check the hierarchy in the margin is correct.
- What happen if you use (a + 6l)
```

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


```{code-cell} c++
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

```

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



