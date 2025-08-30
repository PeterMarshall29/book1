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

# Learing the Basics

Once you have learned a few more basic parts of the C++ language, understanding the language becomes much easier, because you will be able to write simple programmes to try out the new concepts.

This page leads you through some basic exercies, much of the explanation is left until later chapters, this page is not intended to present fully decriptions and definitions.

In the Compuational Physics module, we are mainly concerned with writing code that will take user inputs, perform calculations, and then return 'answers' to the user. This requires us to learn only a subset of the C++ langugage and programming concepts.

## Expressions and Statements

A computer programme is a sequences of statements, which are executed sequentially.
````{admonition} Types of Statement
:class: dropdown
C++ includes the following types of statements:
* Labeled statements - adds a label to another type of statement, to allow control of the flow.
* Expression statements
* Compound statements
* [Selection](selection) statements
* [Iteration](iteration) statements
* [Jump statements]
````
The simplest type of statement is an {term}`expression statement` - an expression followed by a terminator.

Expression are sequences of operators and their operands, that specifies a computation.

When the expression statement is executed, the expression is evaluated, producing a result which will have a {term}`value` and a {term}`type`.

Statements are always terminated by either a semicolon `;` or by a {term}`code block` {...some code here...}, which may be empty or contain statements.

Forgetting to terminate a statement correctly will result in a compile-time error. 
```{tip}
:class: margin
The Visual Studio IDE indicates a missing `;` by highlighting the start of the next line of code.
```
A semicolon is a statement terminator, and by itself a statement, an {term}`empty statement` (null statement). 

An expression statement without an expression is called a {term}`null statement`, which may be used to provide an empty body to a for or while loop, or to carry a label in the end of a compound statement.

## Basic Arithmetic Operations

All programmeming languages carry out basic arithmetic operations. Normally we do not use a computer as a simple calculator, but most programmes carry out some arithmetic operations as part of their execution.

`cout` can be used demonstrate the basic arithmetic operations. 

Type in the following and try the exercise.

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
The programme evaluates the expression `4 + 7` before sending the result to the character output stream (the screen).

```{exercise}
:class: dropdown
Try the operators -,*,/ and %. What does the % operator do? Why might that be useful?

The {term}`Modulo operator` may be new to you. See Wiki for more information:

[Modulo](https://en.wikipedia.org/wiki/Modulo) : See Wiki for more information:

The try using `-` as a prefix on a number, what effect does that have?
```

## Variables

A computer programme that can only perform arithmetic on the values written into the original programme code would not be very useful.

Instead programmes must be able ask for the numberic values that are to be used in the calculations. 

This requires the computer to store the number, and to be able to identify and manipulate it later.

Computers use variables for this purpose. In simplest terms, like in maths, the variable is a name (single character or string of characters) that represent an unspecified value that can be used in some way.

To get started we will look at creating two types of variable.

To create a variable named 'a' that holds the integer value of 5, we can used the statement : `int a = 5;`

After this statement in the programme, the variable `a` may be used anywhere that we want to use it's value of `5`

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

When the programme gets to `a` following the `<<` operator it sends the value of `a` to the screen, not the letter 'a'.

````{exercise}
:label: exercised0
:class: dropdown
What would happen if you now declaring a second variable `b` and intstruct the program to print out `a + b`?

Try it in the code space above.
```{solution} exercised0
:label: solutiond0
:class: dropdown
Now the program has evaluated the arithmetic sum of the values contained in `a` and `b` - and sent that single value to the character output stream.
```
````
## Strings
Another useful type of variable is the `string` type. A {term}`string` is a series of individual characters. 

To use string-type variables we need an additional component of the standard library, `<string>` to be included.

The string literal must be enclosed in `""`. 

`````{exercise-start}
:label: exerciseb1
:class: dropdown
`````
````{code-block} cpp
:linenos: 
#include <isotream>
**!! Insert code to add string library here !!**
int main() {
    std::string a = "Fish";
    std::cout << a;
    return 0;
}
````
````{code-cell} c++
:tags: [remove-output, skip-execution]
Type code here!
````
`````{exercise-end}
`````



`````{exercise-start}
:label: exerciseb2
:class: dropdown
`````
Try adding a second variable, b, with a value of "-fingers", and then try printing out the value of `a + b` again.

```{code-cell} c++
:tags: [remove-output]
Type code here!
```
````{admonition} Code Explanation
:class: dropdown
If done correctly, you will have demonstrated that `+` operator behaves differently when used with differnt data types. 

For a {term}`numeric data type` it performs 'addition', but for the {term}`string data type` it performs {term}`concatenation`.
````
`````{exercise-end}
`````

## More Data Types

In addition to strings, and integers, we need variable from the {term}`floating-point number types` and {term}`char type`.

Correct the following code and add a line to print out all the named variables, separated by tabs.

```{code-cell} c++
:tags: [remove-output, skip-execution]
int main(){
int age = 58;
std::string firstName = "Peter";
float shoeSize = 10.5;
double c = 3.0e-8;
char middleInitial = 'J';
return 0;
}
```
```{admonition} Code Explanation
:class: note dropdown

Single quotes denote a {term}`char type`. 

`Float` and `double` are both used for {term}`floating-point numbers` - "double" denoting double precision (twice as many bits equired for their reprentation in binary).

Scientific notation is formated using a lower or upper case `e` between the significant and the index WITHOUT ANY SPACES!!   

`int` is the keyword for the {term}`integer type`. 

`int` may be preceded by one or two modifiers - `signed`, `unsigned`, `short`, `long, `long long`. The modifiers may be used on their own, and `int` is implied; but `signed` and `unsigned` may also precede `char, and `long` may precede `double`.

```



`````{exercise-start}
:label: exerciseb3
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
````{solution} exerciseb3
:class: note dropdown
:label: solutionb3
```{code-block} cpp
#include <iostream>
#include <string>
int main(){
    int age = 52;
    std::string firstName = 12.0;
    float = 12.5;
return 0;
}
```
`string` type variables are part of the standard library, and must be referenced by prefixing with `std::`.

`int`, `float`, `double`, and `char` are all part of the {term}`core language`, and should not have `std::` attached.
````
`````{exercise-end}
`````

## Escape Characters

{term}`Escape sequences`, or 'escape characters', are used to represent special characters within a string or character literal.

Certain characters in the program have to be represented with {term}`escape sequences` because the are {term}`reserved characters` that have specific meaning to the compiler.

Each escape character is identifed to the program by prefixing `\` to the character.

These are mostly used in formating output. A full list of escape characters in c++ can be found [here](https://en.cppreference.com/w/cpp/language/escape.html).

```{list-table}
:header-rows: 1
:name: Escape Sequence
* - Character
  - Name
  - Effect/Description
* - `\n`
  - Newline. 
  - Instructs the computer to print any following outputs on the next line.
* - `\t`
  - Tab (Horizontal). 
  - Instructs the computer to put a horizontal tab before any further output to the screen or file. 
* - `\v`
  - Vertical Tab. 
  - Instructs the computer to put a vertical tab before any further output to the screen or file. 
* - `\\`
  - Backslash
  - Indentifies intention of a literal backslash
* - `'`, `"`
  - Single and double quote marks
  - Indentifies intention of a literal quote marks
```