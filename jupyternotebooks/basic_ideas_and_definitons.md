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

# Extending the Introductory Concepts

Once you have learned some basic components of the C++ language, understanding the language becomes much easier, because you will be able to write simple programmes to try out each new concept.

This page leads you through some basic exercises, much of the explanation is left until later chapters - this page is not intended to present the full syntax.

In the Computational Physics module, we are mainly concerned with writing programmes that will take user inputs, perform calculations, and then return the 'answers' to the user, which requires us to learn only a subset of the C++ language and programming concepts.

## Expressions and Statements

A computer programme is a sequence of statements, which are executed sequentially when the programme runs.
````{admonition} Types of Statement
:class: dropdown note
C++ includes the following types of statements:
* Labelled statements - adds a label to another type of statement, to allow control of the flow.
* Expression statements
* Compound statements
* [Selection](selection) statements
* [Iteration](iteration) statements
* [Jump statements]
````
The simplest type of statement is an {term}`expression statement` - i.e. an {term}`expression` followed by a {term}`terminator`.

Expressions are sequences of {term}`operators` and their {term}`operands`, which specify a computation e.g. `a+b` is an expression, `a` and `b` are operands and `+` is an operator.

When the expression statement is executed, the expression is evaluated by the computer, producing a result, which will have a {term}`value` and a {term}`type`.

Statements are always terminated by either a semicolon `;` or by a {term}`code-block` {...some code here...}, which may be empty or contain statements.
```{tip}
:class: margin
Only {term}`directives` do not require termination.
For example: `#include <iostream>
```
```{tip}
:class: margin
The Visual Studio IDE indicates a missing `;` by highlighting the start of the next line of code.
```
Forgetting to terminate a statement, will result in a compile-time error. 

A semicolon is a statement terminator, and by itself a statement, an {term}`empty statement` (null statement). 

An expression statement without an expression is called a {term}`null statement`, which may be used to provide an empty body to a for or while loop, or to carry a label in the end of a compound statement.

## Basic Arithmetic Operations

All programming languages carry out basic arithmetic operations. Normally we do not use a computer as a simple calculator, but most programmes carry out some arithmetic operations as part of their execution.

`std::cout` can be used to demonstrate the basic arithmetic operations. 

`````{code_example-start}
:label: exampleb1
:class: dropdown
`````
Type in the following and try the exercise.
````{code-block} cpp
:linenos: 
#include <isotream>
int main() {
    std::cout << 4 + 7;
    return 0;
}
````
````{code-cell} c++
:tags: [remove-output]
Type code here!
````
The programme evaluates the expression `4 + 7` before sending the result to the character output stream (the screen).
````{exercise-start}
:class: dropdown
````
- Try the operators -,*,/ and %. 
- What does the % operator do? 
- Why might that be useful?
```{code_explanation} exampleb1
:class: dropdown
The {term}`Modulo operator` may be new to you. See Wiki for more information:

[Modulo](https://en.wikipedia.org/wiki/Modulo) : See Wiki for more information:

The try using `-` as a prefix on a number, what effect does that have?
```
````{exercise-end}
````
`````{code_example-end}
`````
## Mathematical Functions

To access additional mathematical functions, we can include the `<cmath>` component of the standard library.

````{syntax-start} <cmath> Functions
:class: dropdown
:nonumber:
````
```{list-table}
:header-rows: 1
:name: <cmath>
* - Function
  - Description
* - fabs(x) 
  - Absolute value of real value x
* - pow(x, y)
  - x raised to power y
* - sqrt(x) 
  - Square root of x
* - ceil(x) 
  - Least integer greater than or equal to x
* - floor(x)
  - Greatest integer less than or equal to x
* - exp(x)
  - Exponential function ex
* - log(x)
  - Natural logarithm of x
* - log10(x)
  - Base-10 logarithm of x
* - sin(x)
  - Sine of x (in radians)
* - cos(x)
  - Cosine of x (in radians)
* - tan(x)
  - Tangent of x (in radians)
* - asin(x)
  - Inverse sine of x
* - acos(x)
  - Inverse cosine of x
* - atan(x)
  - Inverse tangent of x
* - sinh(x)
  - Hyperbolic sine of x
* - cosh(x)
  - Hyperbolic cosine of x
* - tanh(x)
  - Hyperbolic tangent of x
```
````{syntax-end}
````
There are more useful functions and constants in the `<numbers>` component.

For example `std::numbers::pi`. To access 'pi' – you need to include numbers and change "c++language standard" in Visual Studio under "project properties" to "c++20".

## Variables
A computer programme that can only perform arithmetic on {term}`literal` values written into the original programme code would not be very useful. 

Instead, programmes must be able ask for the numeric values that are to be used in the calculations. 

This requires the computer to store the number, and to be able to identify and manipulate it later.

Computers use {term}`variables` for this purpose. 

At its simplest: like in maths, the {term}`variable` is a {term}`name` that represents a value that will be stored by the computer.

To get started we will look at creating two types of variables.

To create a variable named `a` that holds the integer value of '5', we can used the statement `int a = 5;`.

After this statement in the programme, the variable `a` may be used anywhere (see {term}`scope`) that we want to use its value of `5`.

`````{code_example-start}
:label: Exampleb2
:class: dropdown
`````
Type in the following code and try the exercise.

````{code-block} cpp
:linenos: 
#include <isotream>
int main() {
    int a = 5;
    std::cout << a;
    return 0;
}
````
````{code-cell} c++
:tags: [remove-output]
Type code here!
````

When the programme gets to `a` following the `<<` operator it sends the value of `a` to the screen, not the letter 'a'.

````{exercise}
:label: exerciseb1
:class: dropdown
Using the live code editor above, find out what happens when:
- You define a second integer variable `b`, with a value and instruct the program to print out `a + b`? Try it in the live-code space above.
- What would happen if you declared the second variable after the `std::cout` statement? Find out.

After a variable has been declared and given a value, the value can be changed.

- Add `a = 10;` after the first `std::cout` and another output statement to print the value of `a` again.

```{solution} exerciseb1
:label: solutionb1
:class: dropdown 
- Now the program has evaluated the arithmetic sum of the values contained in `a` and `b` - and sent that single value to the character output stream.
- 

```
````
`````{code_example-end}
`````
## Strings
Another useful type of variable is the `string` type. A {term}`string` is a series of individual characters. 

To use string-type variables we need an additional component of the standard library, `<string>` to be included.

The string literal must be enclosed in `""`. 

`````{code_example-start}
:label: exampleb3
:class: dropdown
`````
Try the following Code and complete the exercise.
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
````{exercise}
Try adding a second variable, b, with a value of "-fingers", and then try printing out the value of `a + b` again.

```{code_explanation} exampleb3
:class: dropdown
If done correctly, you will have demonstrated that `+` operator behaves differently when used with different data types. 

For a {term}`numeric data type` it performs 'addition', but for the {term}`string data type` it performs {term}`concatenation`.
```
````
`````{code_example-end}
`````

## More Data Types

In addition to strings, and integers, we need variable from the {term}`floating-point number types` and {term}`char type`.

`````{code_example-start}
:label: exampleb4
:class: dropdown
`````
Correct the following code and add a line to print out all the named variables, separated by tabs.
````{code-cell} c++
:tags: [remove-output, skip-execution]
int main(){
int age = 58;
std::string firstName = "Peter";
float shoeSize = 10.5;
double c = 3.0e-8;
char middleInitial = 'J';
return 0;
}
````
````{code_explanation} exampleb4
:class: note dropdown
Single quotes denote a {term}`char type`. 

`Float` and `double` are both used for {term}`floating-point numbers` - "double" denoting double precision (twice as many bits required for their representation in binary).

Scientific notation is formatted using a lower or upper case `e` between the significant and the index WITHOUT ANY SPACES!!   

`int` is the keyword for the {term}`integer type`. 

`int` may be preceded by one or two modifiers - `signed`, `unsigned`, `short`, `long, `long long`. The modifiers may be used on their own, and `int` is implied; but `signed` and `unsigned` may also precede `char, and `long` may precede `double`.
````
`````{code_example-end}
`````
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
:label: solutionb3
:class: dropdown
`string` type variables are part of the standard library and must be referenced by prefixing with `std::`
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
`int`, `float`, `double`, and `char` are all part of the {term}`core language`  - do not use `std::`
````
`````{exercise-end}
`````

## Escape Characters

````{note}
:class: margin

Waka poetry consists of five lines, with a syllable count of 5-7-5-7-7; similar to a Haiku, but with two additional lines.

A poll conducted among INFOCUS readers established "waka" as the
proper pronunciation for the angle-bracket characters `<` and `>`.

The Waka Waka Poem " by Fred Bremmer and Steve Kroeze. 
```{card}
<>!*''#

^"`$$-

!*=@$_

%*<>~#4

&[]../

|{,,SYSTEM HALTED
```
Translation:
```{card}
Waka waka bang splat tick tick hash,

Caret quote back-tick dollar dollar dash,

Bang splat equals at dollar underscore,

Percent splat waka waka tilde number four,

Ampersand bracket bracket dot dot slash,

Vertical-bar curly-bracket comma comma CRASH .

From: https://ascii.co.uk/art/poem
```
````

{term}`Escape sequences`, or 'escaped characters', are used to represent special characters within a string or character literal.

Certain characters in the program must be represented with {term}`escape sequences` because they are {term}`reserved characters` that have specific meaning to the compiler.

Each escape sequence is identified to the program by prefixing `\` to the escaped character.

These are mostly used in formatting output. A full list of escape characters in C++ can be found [here](https://en.cppreference.com/w/cpp/language/escape.html).

`````{syntax-start} Escape Sequences
:nonumber:
:class: dropdown
`````
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
* - `\a`
  - Alert. 
  - Instructs the computer to produce an 'Beep' alert sound - will not always work - depends on environment. 
* - `\r`
  - Carriage Return. 
  - Instructs the computer to move the cursor to the beginning of the current line - used to overwrite a line. 
* - `\\`
  - Backslash
  - Identifies intention of a literal backslash
* - `'`, `"`
  - Single and double quote marks
  - Identifies intention of a literal quote mark
```
`````{syntax-end}
`````