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

# First C++ Program

The first program that most people ever write prints "Hello, World!" the first program that most people ever write, because it is traditionally the first one taught - printing words to screen is as simple as it gets, but proves the software is correctly installed.
```{Admonition} History of the Hello World Program
:class: seealso margin
See the [Hello, World! program](https://en.wikipedia.org/wiki/"Hello,_World!"_program) page for the history of the "Hello, world!" program.
```
```{tip}
:class: margin
To run a code block that has been edited, select the block (mouse click inside it), then simulaneously press {kbd}`Shift` + {kbd}`Enter`. 
```
`````{code_example-start}
`````
```{code-block} c++
:linenos: 
:emphasize-lines: 3
:name: codea1
:caption: Hello World program

#include <iostream>
int main() {
	std :: cout << "Hello, World!\n";
	return 0;
}
```
Type the above code into the empty code window below. Turn on the Live Code editor using the Rocket Icon at the top of the page.

Please type the code exactly as shown - the code will fail if there are any mistakes in the syntax. 

In {ref}`Code 1<codea1>` the highlighted statement is the code that the programmer actually wanted implemented - everything else is require for all C++ programmes just to work.

````{code-cell} c++
:tags: [remove-output]
Type code here!
````
````{admonition} Code Explanation
:class: dropdown
```{code-block} c++
#include <iostream>
```
C++ programs rely upon libraries - you will not get far without at least one of these, because they include basic 'facilities' needed such as the code required to allow you to print out a value to the computer.

`#include` provide access to the libraries required by your code. It is an instruction that the contents of a header file are copied into the `.cpp` file when the code is compiled.

```{tip}
:class: dropdown
Use `#include <..faciltiy_name_here..>` to include {term}`standard library facilities` and `#include "<header_file_name.h"` for user defined {term}`header files`
```
`<iostream>` is the {term}`standard library facility` containing the functions needed for input and output (writing to the computer screen and accepting input from the keyboard etc..)

```{code-block} cpp
int main() {
**code statements go here**
}
```
`main()` is a {term}`function`.
All c++ programs require a `main()` function (or an equivalent).

For longer programs that have many functions - the `main()` function is the starting point for the logical implementation of the code.

Functions are explained {doc}`here <../jupyternotebooks/introduction_to_functions>`, but you can safely leave this topic until week 2. we will cover functions properly next week. 

Briefly:
- "main" is the name of the function.
- The empty parentheses (parens) `main()' indicates that the main function takes no inputs.
- `main()` returns an integer value `int`, and (usually) the code must make that true.

```{code-block} cpp
std :: cout << "Hello, World!\n";
```
`cout` is the code used for writing to screen; pronounced '" - out", and called the character output stream.

`std` identifes that `cout` is found in the standard library facilities.

`::` is the 

`<<` is the "write to" operator (or the "gets from" operator, which makes a little more sense when your are typing left to right!).

`"Hello, World!\n"` is a `string`. String literals are delimited (bracketed) by `""`; explained {doc}`here <../jupyternotebooks/types>`.

`\n` is an escape character - this escape character tells the computer to print anything after it on a newline. 
```{code-block} cpp
return 0;
```
The `return` {term}`keyword` specifies what the function produces (returns).

If a function definition has declared that a particular type of data (an integer value in this case) will be returned, then whatever comes after the reurn keyword must equate to that type. In this case we just type a value, but a variable or code that yields the required value is more common.

````
`````{code_example-end}
`````
```{seealso}
:class: margin
More information about the structure of the [C++ language](#the_cpp_language).
```
`````{exercise} 
:class: dropdown
:label: exercisea1
Try making the following changes to the above code - run the code after each change and note what happens.

- Remove the semicolon in line 3 or 4. 
- Remove `std::` from line 3.
- Replace the angle brackets `<>` in the first line with speechmarks `""`.
- Change the returned value from 0 to 1, and then to a letter.
- Remove the return line.
- Add some whitespace (spaces) to the code.
- Change some letters to capitals



````{solution} exercisea1 
:class: hint dropdown
:label: solutiona1

- A semicolon is required need at the end of each statement – exceptions `include`, `includes` and after `{` or `}`. 
- `cout` is not part of the **c++ core language** and comes instead from the **Standard Library**. 

`std::` denotes the namespace that `cout` belongs to (similar to a folder designation, provided you have included it). 
- To include components of the standard library angle brackets `<>` are used, but we can also include additional code written by the programmer in {doc}`**header files** <../jupyternotebooks/header_files>`, which are included using speechmarks `""`, i.e. `#include "myheaderfile.h"`.
- Any number you return is converted to an integer, so a float is fine, but a string literal will cause failure. 
The returned value is reported to whoever called the function, in the case of main() the system is the caller. In linux the returned value is used to confirm successful termination, 0 indicated success – anything else failure.
- This is usually only possible in the main function, but not on every platform.
- Whitespace is ignored in C++ - not true in other languages!
- C++ is {term}`case sensitive`.
````
`````
``````{exercise-start}
:label: exercisea2
:class: dropdown
``````
This code is incorrect. Correct the mistakes in the syntax so that the code will run and print your name.
`````{code-cell} c++
:tags: [remove-output]
include "iostreams"
main(){
cout << "my name is, \n"
return "Peter";
}
`````
`````{solution} exercisea2
:class: note dropdown
:label: solutiona2
pre comment
```{code-block} cpp
#include <iostream>
int main()
{
	std :: cout << "Put your name here!\n";
	return 0;
}
```
`````
``````{exercise-end}
``````
## C++ Comments

{term}`Comments` are plain text added to a C++ source or header file that will be ignored by the compiler.

Comments are used are notes and reminders for people who are trying to understand and use the code.

When developing a program it is useful to be able to termporarily hide sections of the code from the compiler by 'commenting them out`.

Some suggest that good code does not require comments, but this is unlikely to be true. Remember that programs can be very long, and you may want to return to a program that you wrote years ago; a small investment in comments usually makes the code more maintainable and definitely easier for others to use.

Since the comments are ignore, there are no special rules for them, except that they must be identidied as {term}`comments`.

````{admonition} How to Insert Comments
:class: note dropdown

Comments may be added to code in two ways:

C++ style comments have `//` at the start of the comment.

Multiline comments can be created by surround any text with `/*` and `*/`. These may not be nested!

Most editors will create a multiline comment if you highlight the code by dragging clicking and dragging the mouse accross it and then simulaneously pressing {kbd}`Ctrl` + {kbd}`/`.

```{code-block} ruby
// A C++ style single line comment
// Another one
include <iostream> // This comments does not affect anything before it on the same line

/* C-style codes are also used 
*/

/* Best 
when 
a 
multi-line comment is needed
*/

```
````