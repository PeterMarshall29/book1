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
:class: seealso dropdown margin
See the  [Wikipedia](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program) page for the history of the "Hello, world!" program.
```


```{tip}
:class: margin
To run a code block that has been edited, select the block (mouse click inside it), then simulaneously press {kbd}`Shift` + {kbd}`Enter`. 
```
```{code-block} cpp
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
Type the following code into the empty code window below.

Please type the code exactly as shown - the code will fail if you have any mistakes in the syntax. 

In {ref}`Code 1<codea1>` the highlighted statement is the code that the programmer actually wanted implemented - everything else is require for all C++ programmes just to work.

```{code-cell} c++
:tags: [remove-output]
Type code here!
```

````{admonition} Code Explanation
:class: dropdown
```{code-block} c++
#include <iostream>
```
C++ programs rely upon libraries – you will not get far without at least one of these, because they include basic ‘facilities’ needed such as the code required to allow you to print out a value to the computer.

`#include` provide access to the libraries required by your code.
It is an instruction that the contents of a header file are copied into the `.cpp` file when the code is compiled.

```{code-block} cpp
int main() {
**code statements go here**
}
```
`main()` is a function.
All `c++` programs require a `main()` function (or an equivalent).

For longer programs that have many functions - the `main()` function is the starting point for the logical implementation of the code.

Functions are explained {doc}`here <../jupyternotebooks/introduction_to_functions>`, but you can safely leave this topic until week 2. we will cover functions properly next week. 

Briefly:
- "main" is the name of the function.
- The empty parentheses (parens) `main()' indicates that the main function takes no inputs.
- `main() returns an integer value `int`, and (usually) the code must make that true.

```{code-block} cpp
std :: cout << "Hello, World!\n";
```
`cout` is the code used for writing to screen.

`<<` is the "write to" operator (or the "gets from" operator, which makes a little more sense when your are typing left to right!).

`"Hello, World!\n"` is a `string`. String literals are delimited (bracketed) by `""`; explained {doc}`here <../jupyternotebooks/data_types>`.

`\n` is an escape character - this escape character tells the computer to print anything after it on a newline. 
```{code-block} cpp
return 0;
```
The return `keyword` specifies what the function produces (returns).

If a function definition has declared that a particular type of data (an integer value in this case) will be returned, then whatever comes after the reurn keyword must equate to that type. In this case we just type a value, but a variable or code that yields the required value is more common.

````

`````{exercise} 
:class: dropdown
:label: exercisea1
Try making the following changes to the above code - note what happens.

1. Remove the semicolon in line 3 or 4. 
2. Remove `std::` from line 3.
3. Replace the angle brackets `<>` in the first line with speechmarks `""`.
4. Change the returned value from 0 to 1, and then to a letter.
5. Remove the return line.
6. Add some whitespace (spaces) to the code.

Add or remove spaces anywhere in your code and run the code again. \
Or try somthing else\
or something other

````{solution} exercisea1 
:class: hint dropdown
:label: solutiona1

1.A semicolon is required need at the end of each statement – exceptions `include`, `includes` and after `{` or `}`. 
2.`cout` is not part of the c++ core language and comes instead from the **Standard Library**. 

`std::` denotes the namespace that `cout` belongs to (similar to a folder designation, provided you have included it). 
3. To include components of the standard library angle brackets `<>` are used, but we can also include additional code written by the programmer in {doc}`**header files** <../jupyternotebooks/header_files>`, which are included using speechmarks `""`, i.e. `#include "myheaderfile.h"`.
```{seealso}
:class: dropdown
More on the structure of the C++ language can be found {doc}`here <../jupyternotebooks/the_cpp_language>`
```
4. Any number you return is converted to an integer, so a float is fine, but a string literal will cause failure. 
The returned value is reported to whoever called the function, in the case of main() the system is the caller. In linux the returned value is used to confirm successful termination, 0 indicated success – anything else failure.
5. This is usually only possible in the main function, but not on every platform.
6. Whitespace is ignored in C++ - not true in other languages!
````
`````

```{seealso}
:class: margin
More on the structure of the C++ [testtext](#cpplanguage) `language can be found {doc}`here <../jupyternotebooks/the_cpp_language>`
```




`````{exercise-start}
:label: exercisea2
:class: dropdown
`````
This code is incorrect. Alter the code so that it runs without error and prints your name.
````{code-cell} cpp
:tags: [remove-output]
include "iostreams"
main(){
cout << "my name is, \n"
return "Peter";
}
````
````{solution} exercisea2
:class: hint dropdown
:label: solutiona2
```{code} cpp
#include <iostream>
int main()
{
	std :: cout << "Put your name here!\n";
	return 0;
}
```
````
`````{exercise-end}
`````

```{admonition} An extra exercise
:class: extra-credit
An "extra credit" exercise is presented here.
```

```{admonition} Useful Info
An "extra credit" exercise is presented here.
```
