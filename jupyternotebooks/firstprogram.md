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

The first program that most people ever write simply prints "Hello, World!" to a display device, mainly because it has become a tradition to teach this first. Printing words to screen is also the simplest way to confirm that your software is correctly installed on your system.
```{Admonition} History of the Hello World Program
:class: seealso margin
See the [Hello, World! program](https://en.wikipedia.org/wiki/"Hello,_World!"_program) page for the history of the "Hello, world!" program.
```
```{tip}
:class: margin
When you move to a new page on this website - click on the rocket icon at the top to start the Live Code Editors - this can take a few minutes to start, but when its ready, hitting 'run' should be very quick.
```
`````{code_example-start} First Program
:label: examplea1
:nonumber:
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

Please type the code exactly as shown - the program will fail if there are any mistakes in the 'syntax'. 

In {ref}`Listing 1<codea1>` - the highlighted statement is the instruction that the programmer actually wanted to implement - everything else is required to create a working C++ program.

````{code-cell} c++
:tags: [remove-output]
Type code here!
````
````{code_explanation} examplea1
:label: explanationa1
:class: dropdown
The parts of the "Hello, World!" program:
```{code-block} c++
#include <iostream>
```
C++ programs rely upon libraries - you will not get far without at least one of these, because the additional libraries include basic 'facilities' that your program is going to need, such as the code for the commands required to allow you to print out a value to the computer's display.

`#include` instructs the computer to provide access to the library named in the angle brackets `<>`. 

```{syntax} `#include`
:class: dropdown
`#include` is a {term}`directive` instructing the {term}`preprocessor` to copy the contents of the named library or header file into the source file.

Use `#include <facility_name_here>` to include {term}`standard library facilities` and `#include "header_file_name.h"` for user-defined {term}`header files`.

{term}`standard library facilities` are components of the {term}`standard library`.
```
`<iostream>` is the part of the {term}`standard library` that contains specific functions for {term}`input` and {term}`output` i.e. writing to the computer's display and accepting inputs from the keyboard etc.

```{code-block} c++
int main() {
**code statements go here**
return 0;
}
```
`main()` is a {term}`function`. Functions are explained {doc}`here <../jupyternotebooks/introduction_to_functions>`, but you can safely leave this topic until week 3.

All C++ programs require a `main()` function (or an equivalent). Longer programs may have many functions - but the `main()` function is always the starting point for the logical implementation of every program.

Briefly:
- "main" is the name of the function.
- The empty parentheses (parens) `main()' indicate that the main function takes no inputs.
- The leading {term}`keyword` `int` indicates that when the rest of the instructions in the `main()` function have been executed, the program will be end by sending (returning) an integer value.

To get started - just add `return 0;` to the bottom of all your `main()` functions.

```{code-block} cpp
std :: cout << "Hello, World!\n";
```
`cout` is called the **character output stream**, pronounced "see-out” - this is the command used to instruct the program to write to the screen.

`std` identifies that `cout` is found in the standard library facilities - there is no need to specify which facility. 

`::` is the {term}`scope resolution operator` - think of it as a way of describing the location or ownership of parts of the syntax in order to access them.

`<<` is the {term}`insertion operator`; often called the ‘write to’ operator.

`"Hello, World!\n"` is a `string`. String {term}`literals` are delimited (bracketed) by `""`; explained {doc}`here <../jupyternotebooks/char_and_string>`.

`\n` is an {term}`escape sequence` - the escaped character `n` instructs the computer to print anything after it on a new line. 

````
`````{code_example-end}
`````
```{seealso}
:class: margin
More information about the structure of the [C++ language](#the_cpp_language).
```
`````{exercise} First Program - Syntax Rules
:class: dropdown
:label: exercisea1
:nonumber:
Try making the following changes to the above code - run the code after each change and note what happens.

- Remove the semicolon in line 3 or 4. 
- Remove `std::` from line 3.
- Replace the angle brackets `<>` in the first line with speech marks `""`.
- Remove the return line.
- Add some whitespace (spaces) to the code.
- Change some letters to capitals
- Change the returned value from 0 to 1, then to 2.0, and then to a letter.
- Change the return value to `'r'` and then to `"r"`.
- Change the return value to `'0'` and `"0"` - note the code number stated in the terminal output. 


````{solution} exercisea1 
:class: dropdown
:label: solutiona1

- A semicolon is required at the end of each statement – exceptions after directive such as `#include` and after `{}`. 
- `cout` is not part of the **C++ core language** and comes instead from the **Standard Library**. Only parts of the core languages do not require `std::`. `std::` denotes the {term}`namespace` that `cout` belongs to (like a folder designation but only works if you ‘included’ the required library component). 
- To include components of the standard library angle brackets `<>` are used, but we can also include additional code written by the programmer in {doc}`**header files** <../jupyternotebooks/header_files>`, which are included using speech marks `""` instead i.e. `#include "myheaderfile.h"`.
- This is usually only possible in the main function, but not on every platform.
- Whitespace is ignored in C++ - not true in other languages!
- C++ is {term}`case sensitive`.

Note: The following works differently in the 'Live Code' editor. 
- Only `0` and `0.0` working in `Live Code`.

In Visual Studio, or Xcode, you would find the following:
- Any number you return is converted to an integer, so a {term}`floating-point number` will work, but a non-numeric character cause failure because it will be interpreted as a variable name. 
- Single quotes denote the 'char' type which is used for single characters only. 'char' converts to `int`, so is acceptable. Double quotes denote the `string` type or an array of `char` type, which do not convert to `int`.
- `'0'` has code 48 and `"0"` does not work. Again not in live editor. 
- The returned value is reported to whoever called the function, in the case of main() the system is the caller. In Linux the returned value is used to confirm successful termination, 0 indicated success – anything else failure.

````
`````
``````{exercise-start} Practice Fixing Syntax Errors
:label: exercisea2
:class: dropdown
:nonumber:
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
:class: dropdown
:label: solutiona2
Try not to look at the solutions until you have attempted the exercise... you will find that both your understanding and retention are improved compared to just looking at a solution.
```{code-block} c++
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

{term}`Comments` are plain text added to a C++ source file that will be not part of the program - they are removed before the source code is compiled.

Comments are used as notes for anyone trying to understand the program, and reminders to the authors of what they meant when they wrote the code.

When developing a program, it is useful to be able to temporarily hide sections of the code from the compiler by 'commenting them out`.

Some suggest that good code does not require comments, but this is unlikely to be true. Remember that programs can be very long, and you may want to return to a program that you wrote years ago; a small investment in comments usually makes the code more maintainable, and easier for others to use.

Since the comments are ignored, there are no special rules for them, except that they must be identified as {term}`comments`.

````{syntax-start} Comments
:class: dropdown
:nonumber:
`````
Comments may be added to a C++ program in two ways:
```{code-block} ruby
// A C++ style single line comment
// Another one
include <iostream> // This comment does not affect anything before it on the same line!

/* C-style comments are also used 
*/

/* Best 
when 
a 
multi-line comment is needed
*/

```

For a single line comment just put `//` at the start of the comment - this can be after a line of code, even after an opening curly brace `{`.

Multiline comments can be created by surrounding any text with `/*` and `*/`
```{important}
Multiline comments may not be nested!
```
Most editors will create a multiline comment for you - highlight the code by clicking and dragging the mouse across it and then simultaneously pressing {kbd}`Ctrl` + {kbd}`/`.
````{syntax-end}
`````
