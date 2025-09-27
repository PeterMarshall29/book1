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

# Basic Concepts

Once you have mastered some basic components of the C++ language, learning the language becomes much easier, because you will be able to write simple programmes to try out each new concept.

This page leads you through some basic exercises, much of the explanation is left until later chapters - this page is not intended to present the full syntax.

In the Computational Physics module, we are mainly concerned with writing programmes that will take user inputs, perform calculations, and then return the 'answers' to the user, which requires us to learn only a subset of the C++ language.

## Expressions and Statements

A computer program is a sequence of statements, which are executed sequentially when the program runs.
````{syntax} Types of Statement
:class: dropdown
:nonumber: 
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

Statements are always terminated by either a semicolon `;` or by `{}` which represents a {term}`code-block` i.e. {...some code here...}, which may be empty or contain statements.
```{tip}
:class: margin
Only {term}`directives` do not require termination.

For example: `#include <iostream>`.
```
```{tip}
:class: margin
The Visual Studio IDE indicates a missing `;` by highlighting the start of the next line of code.
```

```{warning}
:class: margin
Forgetting to terminate a statement, will result in a compile-time error. 
```

A semicolon is a statement terminator, and by itself a statement, an {term}`empty statement` (null statement). 

An expression statement without an expression is called a {term}`null statement`, which may be used to provide an empty body to a for or while loop, or to carry a label in the end of a compound statement.

## Basic Arithmetic Operations

All programming languages carry out basic arithmetic operations. Normally we do not use a computer as a simple calculator, but most programmes carry out some arithmetic operations as part of their execution.


`````{code_example-start} Arithmetic Operations
:label: exampleb1
:class: dropdown
:nonumber:
`````
`std::cout` can be used to demonstrate the basic arithmetic operations. 

Type in the following and try the exercise.
````{code-block} cpp
:linenos: 
#include <iostream>
int main() {
    std::cout << 4 + 7;
    return 0;
}
````
````{code-cell} c++
:tags: [remove-output]
Type code here!
````
The program evaluates the expression `4 + 7` before sending the result to the character output stream (to display on the screen).
````{exercise-start}
:class: dropdown
````
- Try the operators -,*,/ and %. 
- What does the % operator do? 
- Why might that be useful?
```{code_explanation} exampleb1
:class: dropdown
The `%` operator is called the {term}`Modulo operator` or the remainder operator.

If Modulo os new to you, the Wiki has a good description - [Modulo](https://en.wikipedia.org/wiki/Modulo).

The `%` operator only works with integers - there are also functions available for floating-point number.

Modulo is very useful in computing - it is used to determine whether a number is even, or a multiple of 10 etc. by checking if the corresponding remainder value is zero.

```
- Add `#include <cmath>` and replace `4+7` with `pow(4,7)` and rerun. See next section for details.
- Try using `-` as a prefix on a number, what effect does that have?

````{exercise-end}
````
`````{code_example-end}
`````
## Mathematical Functions

To access additional mathematical functions, we can include the `<cmath>` component of the standard library.

It may be necessary to use `std::` to access these functions in some compilers - but not in 'Live Code' or in Visual Studio.

````{syntax-start} std::cmath - Mathematical Functions
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
More useful functions and constants are provided by `<numbers>`, e.g. `std::numbers::pi`. 

Note: In Visual Studio you will need to change the 'c++language standard' under 'project properties' to 'c++20'.

## Variables
A computer program that can only perform arithmetic on {term}`literal` values written into the original program code would not be very useful. Instead, programmes must be able ask the user for the numeric values that are to be used in the calculations, or read values in from files, which requires the program to store this information and to be able to access and manipulate it later.

Computers use {term}`variables` to store the values needed by a program. At its simplest: like in maths, a {term}`variable` is a {term}`name` that represents a value. The difference is that in maths the variable 'x' represents an unknown value, but in computing the variable called 'x' represents a specific value of a particular {term}`type` that is stored in the computer's memory.

The {term}`name` allows the {term}`value` to be identified when needed, and the value of 'x' may be accessed (read or copied) or changed (not always permitted). 

When a computer program is running: each time a variable name occurs - it is an instruction to the computer to fetch and use the value that is stored under that name at the time when that that line of code is executed.

``````{code_example-start} Working with Variables
:label: Exampleb2
:class: dropdown
:nonumber:
``````
Lets look at creating two types of variables in C++:

To create a variable named `a` that holds the integer value of '5', use the statement `int a = 5;`.

`int` specifies that the type of the variable named 'a' is going to be an integer.

After this statement in the program, the variable `a` may be used anywhere (see {term}`scope`) that we want to use its value of `5`.

Type in following program into the 'Live Code' editor and hit {kbd}`run`.

````{code-block} c++
:linenos: 
#include <iostream>
int main() {
    int a = 5;
    std::cout << a << '\n';
    return 0;
}
````
`````{code-cell} c++
:tags: [remove-output]
Type code here!
`````

When the program gets to the instance of the variable `a` following the `<<` operator it sends the value of `a` to the screen, not the letter 'a'.

`````{exercise} Working with Variables
:label: exerciseb1
:class: dropdown
:nonumber:
After a variable has been declared and given a value, the value can be changed.

1. After line 4 - `std::cout`: 
- Add `a = 10;`
- Add a second output statement to print the value of `a` again.
- Find out what happens if you put the statements in a different order?

2. Define a second variable of integer type called `b` and give it a value.
- Instruct the program to print out `a + b`.
- What would happen if you declared the second variable after the `std::cout` statement? Find out.

The value of a variable can be changed by using another variable.

3. Add the statement `a = b;` and repeat the outputs.

````{solution} exerciseb1
:label: solutionb1
:class: dropdown 

1.  The program executes statements sequentially, starting at the top. If the second output statement precedes the change of value, the number 5 is printed twice. If both output statements come after the change in value, then the number 10 is printed twice.

2. Your program should now look like this:
```{code-block} c++
#include <iostream>
int main() {
    int a = 5;
    int b = 10;
    std::cout << a + b << '\n';
    return 0;
}
```
The program now evaluates the arithmetic sum of the values contained in `a` and `b` - and sends the result to the character output stream.

3. The value of variable `b` has been copied into the variable `a`. `b` is not affected by this operation.

````
`````
``````{code_example-end}
``````
## Strings

A {term}`string` is a sequence of characters. In C++ strings are represented by the type `std::string`.

`std::` indicates that a standard library facility is needed - in this case `<string>`.

A string {term}`literal` must be enclosed in `""`.

`````{code_example-start} Strings
:label: exampleb3
:class: dropdown
:nonumber:
`````
Try the following Code and complete the exercise.
````{code-block} c++
:linenos: 
#include <iostream>
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
:class: dropdown
:nonumber:
- Add a second variable, `b`, of value "-fingers".
- Output the value of `a + b` again.

```{code_explanation} exampleb3
:class: dropdown
If done correctly, you will have demonstrated that `+` operator behaves differently when used with different data types. 

For a {term}`numeric data type` it performs 'addition', but for the {term}`string data type` it performs {term}`concatenation`.
```
````
`````{code_example-end}
`````

## More Data Types

In addition to strings, and integers, we need variables from the {term}`floating-point number types` and the {term}`char type`.

`````{code_example-start} Other Types
:label: exampleb4
:class: dropdown
:nonumber:
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
:class: dropdown
Single quotes denote a {term}`char` type, which may only hold a single character.

`Float` and `double` are both used for {term}`floating-point numbers` - 'double' means double-precision (using twice as many bits to represent the number in binary). You will only need to use `double`

Scientific notation is formatted using a lower case `e` (or upper case `E`) between the mantissa and the exponent WITHOUT ANY SPACES!!   

````
`````{code_example-end}
`````
`````{exercise-start} Data Types
:label: exerciseb3
:class: dropdown
:nonumber:
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
```{code-block} c++
#include <iostream>
#include <string>
int main(){
    int age = 52;
    std::string firstName = 12.0;
    float = 12.5;
return 0;
}
```
`int`, `float`, `double`, and `char` are all part of the {term}`core language` - do not use `std::`
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

{term}`Escape sequences`, or 'escaped characters', are used to represent special characters within a string or character literal. Certain characters in the program must be represented with {term}`escape sequences` because they are {term}`reserved characters` that have specific meaning to the compiler. These are mostly used in formatting output. A full list of escape characters in C++ can be found [here](https://en.cppreference.com/w/cpp/language/escape.html).

Each escape sequence is identified to the program by prefixing `\` to the escaped character. 

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
  - Instructs the computer to produce a 'Beep' alert sound - will not always work - depends on environment. 
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

