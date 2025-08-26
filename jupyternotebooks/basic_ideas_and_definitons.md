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

# Basic Ideas and Definitions

To continue learning C++ it is helpful to learn a few more basic concepts before delving into what they mean, so we can used these basic ideas to demonstrate them later

All of the concepts we now introduce will be expanded on in future chapters - this page is not intended to present fully decriptions and definitions. 

Basic arithmetic.

We can use `cout` and some basic arithmetic operators to write a simple programs for calculation.

```{code-block} cpp
:linenos: 
#include <isotream>
int main() {
    std::cout << 4 + 7;
    return 0;
}
```

```{code-cell} c++
:tags: [remove-output]
Type code here!
```
The program evaluates the expressions `4 + 7` before sending the result to the output stream

Try the operators -,*,/ and %. What does the % operator do? Why might that be useful?

The try using `-` as a prefix on a number, what effect does that have?


Variables

A computer program that can only perform arithmetic on the values written into the original program code would not be much use.

Instead programs must be able ask for the numbers to be used in the calculations. 

This requires the computer to store the number, and be able to identify and manipulate it later.

Computers use variables for this purpose. In simplest terms, like in maths, the variable is a name (single character or string of characters) that represent an unspecified value that can be used some way.

To get started we will look at creating two types of variable.

To create a variable called 'a' that holds an integer value 5, we can used the statement : `int a = 5;`

Then we can use `a` anywhere we want to use its value.

Type in the following code.

```{code-block} cpp
:linenos: 
#include <isotream>
int main() {
    int a = 5;
    std::cout << a;
    return 0;
}
```

```{code-cell} c++
:tags: [remove-output]
Type code here!
```

When the program gets to `a` following the `<<` operator it sends the value of a to the screen, not the letter a.

Try declaring a second variable `b` and printing out the value of `a + b`.


Another useful type of variable is the `string` type. A string is a series of characters. 

To use string-type variables we need an additional component of the standard library, `<string>` to be included.

The string literal must be enclosed in `""`. 

Try 

```{code-block} cpp
:linenos: 
#include <isotream>
#include <string>
int main() {
    std::string a = "Fish";
    std::cout << a;
    return 0;
}
```

```{code-cell} c++
:tags: [remove-output]
Type code here!
```

`````{exercise-start}
:label: exercised2
:class: dropdown
`````
Try adding a second variable b, with a value of "-fingers" and printing out the value of `a + b` again.

Demonstrating that the `+` operator behaves differently when used with differnt data types. For numeric types it performs 'addition', but for string types it performs 'concatenation'.
````{solution} exercised2
:class: dropdown
:label: note solutiond2
```{code} c++

Type code here!
```
````
`````{exercise-end}
`````

`````{exercise-start}
:label: exercised1
:class: dropdown
`````
Try to fix this code:
````{code-cell} cpp
:tags: [remove-output]
:linenos: 
#include <iostream>
int main(){
std::int age = 52;
string firstName = 12.0;
std::float = 12.5;
return 0;
}
````
````{solution} exercised1
:class: note dropdown
:label: solutiond1
Strings are part of the standard library, and must be referenced by prefixing `std::` .
`int`, `float`, `double`, and `char` are all part of the {term}`core language`, and should not have `std::` attached.
```{code} c++

Type code here!
```
````
`````{exercise-end}
`````




