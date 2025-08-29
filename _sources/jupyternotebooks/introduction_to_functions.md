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

# Functions 

Programmers often want to use the same lines of code repeatedly in the same program, and possibly in a lot of different programs.

A sequence of statements (code block) can be made reusable by encapsulating them into a function.

At its simplest, a function is just a sequence of statement collected and given a name - to identify the statement.

When a function is called (or invoked) the statements are executed as though they had been types at the same point in your program.

Functions may be identified in code by finding a name suffixed by parentheses, which may be empty or contain arguments, e.g. `main()`

***

Functions offer many benefits to the programmer. Functions: 

* Make programming more efficient by enabling the reuse of code blocks.
* Reduce the complexity of the overall programme by separating concerns
* Make the program easier to understand because individual parts are separated and identified by a name.We define a function when we want a separate computation with a name because doing so:
* Make it easier to test the program - testing reduces to testing functions and their interactions.

Real-world programs use thousands of functions, some even hundreds of thousands of functions. We would never be able to write or understand such programs if their parts (e.g., computations) were not clearly separated and named.

***
```{note}
:class: margin
Functional programming is a programming paradigm that constructs programs from only functions.

C++ is a multiparadigm language - we will use a combination of functional programming and object-oriented programming. Possibly with some Generic programming.
```

``````{exercise-start}
:label: exerciseu1
:class: dropdown
``````
Run this code.

`````{code-cell} c++
:linenos:
:tags: [remove-output]
#include <iostream> 
#include <string>

void myFirstFunction () {
	std::cout << "Hello, World!" << '\n';
}

int main() {
	myFirstFunction();
	return 0;
}
`````
`````{admonition} Code Explanation
:class: note dropdown
```{code-block} c++
void myFirstFunction () {
	std::cout << "Hello, World!" << '\n';
}
```
This is the {term}`function definition`. 

The statements inside the curly braces `{}` (a code block) are the function body.

````{tip}
:class: margin
Not shown in this example - the statement before the function body, followed by a `;` is a {term}`function declaration`.
```{code-block} c++
void myFirstFunction (); 
```
````Not shown in this example - the statement before the function body, followed by a `;` is a {term}`function declaration`.````

The funtion {term}`identifier` (name) is 'myFirstFuncton' - which is user-defined.

The {term}`keyword` before the identifier, specfies the type of the value that will be returned when the function completes its execution.

`Void` indicates that nothing is returned by this function, and therefore we do not need to use the `return` keyword. 

The type of this function is `void()`. 

`int` indicates that `main()` returns an integer, hence we need `return 0;`, and the type is `int()`.

The empty parentheses `()` indicate that this function takes no {term}`arguments`. (more below on arguments)

```{code-block} c++
{
	std::cout << "Hello, World!" << '\n';
}
```
This the function body - the code that will be executed every time the function is **called**.

If there are nested blocks inside the function, the outermost block is the function body.

```{code-block} c++
	myFirstFunction();
```
This is a {term}`function call`. To call a function we state its name followed by `()`. If the function takes arguments, their values must be supplied in the parentheses

```{important}
The function must be placed outside of the main function. 
```
For now we will place the functions above the main function, but in future all functions should be placed in {term}`header files`, using the `#include` directive to make them available to `main()`.


`````
``````{exercise-end}
``````
Functions are much more useful when variable are passed into them and value are returned from them.

because inforation can be passed into the function when they are called.

Functions would be less useful if they could only use the variables that were defined in the function body - global variables could be used, but these are generally to be avoided.

When a function is called values may be **passed in** as {term}`function arguments` to the function. These values become local variables that can be used within the function. The outcome of the function call thus changes in response to the supplied variables

A result can also be returned.



```{admonition} Using values returend by a function.
:class: dropdown note

Where the function call is encountered in the execution of a program, the program calls the function, and then substitues the returned value at that point in the code.

The `return` statement intialises a variable of the return type. This is identical to copy initialisation, but the variable is unnamed

It is often enough to just have the function call, see the next example, however the returned value is then not available later in the program.

The alternative is to assign the returned value by copy assignment to a variable.
```

`````{exercise-start}
:label: exerciseu2
:class: dropdown
`````
Run this code. 
````{code-cell} cpp
:linenos:
:tags: [remove-output]
#include <iostream>

int squareOf(int x) {
	return x * x;
}
int main()
{
	for (int i = 0; i < 20; ++i) {
		std::cout << i << "\t" << squareOf(i) << "\n";
		++i;
	}
	return 0;
}
````
````{admonition} Code Explanation
:class: note dropdown

The `squareOf()` function returns an integer value when it is called, and that value is then used by the character output stream, in the same fashion as the result of evaluating an expression.

The return value of a function can also be used by copy assignment.

If a return value is not used, it is better practice to declare return type as `void`. It is also common practice to put `return;` at the end of a void function - though not strictly necessary. 

```{admonition} Ways to exit a function
:class: note dropdown
There are 4 ways for the program to exit a function.

- Executing a `return` statement - `return can be positioned a more than one point in a function that uses selection and iteration statements.
- {term}`Falling through`
- Throwing an {term}`exception` - this can be handled programmatically.
- By invoking another function that fails to return.
; for a void function it is acceptable to just drop through

The programmer should always ensrue there is a `return`, or an `error`, for every possible logical way out of a function.
```
The definiton of `squareOf()` has a single parameter called 'x' of type `int`. Parameters names are local variables that may be used in the body of the function - have the value that was passed in.
***
The type of `squareOf()` is `int (int)`.
***
To call `squareOf()` its name must be included in a code statement followed by `()` with either an integer value in the parentheses or an integer type variable, that must have been initialised with a value before the call.

````
- Try moving the definition of squareOf() to below the main function. 
- Try moving the definition of squareOf() to inside the main function.
- Try changing the function declaration so that it expects a paramater of type `double`.
- Find two ways to make the above code print the square of all of the values from 1 to 100.

````{solution} exerciseu2
:class: note dropdown
:label: solutionu2

The function could only be placed above `main()` - because a function cannot be used before it has been declared.

Integers can be converted to doubles at run time, so the code works.

The loop-variable `i` is being incremented in two places - this is bad practice.

Removing the `++i` would be the best approach. 

Alternatively letting the loop run to 200 but 
````
`````{exercise-end}
`````

```{tip}
:class: margin
Declaration: Statement of the functions name and input/output types.
A definition requires the declaration (again) followed by the code body.

"Declarations are not defintitions".
```
## Declarations and Definitions
Every entity, including functions, must be declared before they may be used. 

Reason: Two functions may be called in each others definiton, but they cannot both be defined first. 

The solution is to declare both functions before defining either one.

Since the declaration does not refer to the other function, the problems disappears.

Having been apprised of the name and type of the function, the program can look for the definition.

The declaration is just an interface; it describes what the definition has to conform to.

***

A definition requires the code body also. ‘Declarations are not definitions’.
```{code-block} c++
int myFunction(int); // is a declaration

//This is the corresponding defintion.
int myFunction(int x) {
	std::cout << "Hello Class!";
	return x;
} 
```
```{important}
An entity may be declared more than once - but a defintion cannot be repeated, or the code will not compile.

A second declaration may not have a different type pattern to the first for a given identifier.
```
***

Another possible definition would be:
```{code-block} c++
int myFunction(int) {
	std::cout << "Hello Class!";
	return 0;
}
```
If the parameter type in the declaration is not named in the definition, then it cannot be used in the function, and does not have to be passed in. 

 A value return is a form of initialisation – types must of course be matched.
 
But now an integer value that absolutely must be passed in - cannot be accessed/used.

Parameter names are not formally necessary in the declaration, and in fact are ignored by the compiler - they are only required in the corresponding definition.

```{code-block} c++
int myFunction(int);
```
So this is an acceptable declaration.

However, the safest way to ensure your declaration and definiton type patterns and name spellings match, is to cut & paste from one to other. It also helps the reader to understand a program
***
````{note}
```{code-block} c++
extern int myFunction(int);
```
The `extern` keyword means the myFunction declaration is not a definition. It is rarely used.
````

````{admonition} Notes on the Syntax of a Function Declaration and Call
:class: dropdown note

Declaration Syntax: `returnType functionIdentifier ( parameter-list );`

Definition Syntax: `returnType functionIdentifier ( parameter-list ) {function-body}`

The paramater list includes the type followed by a placeholder variable name, separated by a space, for each required input argument, comma delimited.

Call Syntax: `functionIdentifier (argument-list).

The argument list includes only the values, comma delimited - arguments must be supplied in the same order in the function call as in the parameter list in the function declaration.

***

The type of a function is given as `returnType (parameter types (comma delimited))`

The same function identifer can be used for two functions provided they are of different types.

```{code-block} c++
void myFunction();
int myFunction(int a, int b);
```
These are the declaration of two different functions. The program will identify which one is required by a function call based on the types of the arguments supplied.

````

## Pass by Reference and Passing by Constant Reference

Sometimes it is better not to pass a value directly into a function. For instance you might be sending a long array of large numbers, or a very lareg image.

When a value is passed into a function, a new copy of that values is created in the memory - a local copy for the use of the function.

This can be use up too many resources and too much time unnecessarily. Programs run faster when function parameter as passed by reference.

The alternative approach is to only pass in a reference to the location of the variable. This is calle {term}`passing by reference`.

The {term}`reference` is the {term}`memory address` of a named object. 

***
To declare that a parameter will by passed by reference, its type is declared with an ampersand attached to the end.

Passing by reference poses one risk - the original object is not affected by a function call when passed by a value, because a local copy is generated

To prevent the function altering the name object that is referenced the paramater must be listed as {term}`constant`, by putting the `const` keyword before, space separated.

This is called {term}`passing by constant reference`.

````{admonition} Passing by Constant Reference Example
:class: note dropdown

```{code-block} c++
:linenos:
:dedent:
void myPrinter(const std::vector<double>& v)
{
	std::cout << "{";
	for (int i = 0; i < v.size(); ++i) {
		std::cout << v[i];
		if (i != v.size() - 1) std::cout << ",";
	}
	std::cout << "}\n";
}
int main() {
	std::vector<double> a = { 5.9,8,1.1,2.3,4.5,5.6 };
	myPrinter(a);	
	return 0;
}
````
`````{admonition} Passing by Reference Examples
:class: note dropdown
Pass by reference allows us to modify the original values.

Example: two ways for a program to modify some named variable

To be accessible by a function the variable must be global, which means declaring it before the main function, otherwise the myPrint functions could not alter it, only its copy.


````{admonition} Method 1 – Alter a Global Variable
:class: note dropdown
```{code-block} c++
:linenos:
std::vector<double> a = { 5.9,8,1.1,2.3,4.5,5.6 };
void myPrinter(std::vector<double> v)
{
	std::cout << "{";
	for (int i = 0; i < v.size(); ++i) {
		std::cout << v[i];
		if (i != v.size() - 1) std::cout << ",";
	}
	std::cout << "}\n";
}

void myPrinter2(std::vector<double> v)
{
	std::cout << "{";
	for (int i = 0; i < v.size(); ++i) {
		a[i] = a[i] + 1;
		std::cout << v[i];
		
		if (i != v.size() - 1) std::cout << ",";
	}
	std::cout << "}\n";
}
 int main() {
	myPrinter(a);
	myPrinter2(a);	
	myPrinter(a);
	return 0;
}
```
````
Notice that it does not matter whether the a[i] = a[i] + 1;

Line is before or after the print, since a copy of the original is being printed. This method still works if you pass by reference, but not the order matters since you are accessing the original for each output.

This is not helpful, because now you have a global variable.

Method 2 - Change the local parameter – which is a reference to the external value.

````{admonition} Method 2 - Change the local parameter
:class: note dropdown
```{code-block} c++
:linenos:

void myPrinter(std::vector<double>& v)
{
	std::cout << "{";
	for (int i = 0; i < v.size(); ++i) {
		std::cout << v[i];
		if (i != v.size() - 1) std::cout << ",";
	}
	std::cout << "}\n";
}

void myPrinter2(std::vector<double>& v)
{
	std::cout << "{";
	for (int i = 0; i < v.size(); ++i) {
		v[i] = v[i] + 1;
		std::cout << v[i];
		if (i != v.size() - 1) std::cout << ",";
	}
	std::cout << "}\n";
}
 
int main() {
	std::vector<double> a = { 5.9,8,1.1,2.3,4.5,5.6 };
	myPrinter(a);
	myPrinter2(a);
	myPrinter(a);
		return 0;
}

```
````
`````

## `constexpr` Functions






<!-- 
`````{exercise-start}
:label: exerciseu3
:class: dropdown
`````
This code is incorrect. Correct the mistakes in the syntax so that the code will run and print your name.
````{code-cell} c++
:tags: [remove-output]
include "iostreams"
main(){
cout << "my name is, \n"
return "Peter";
}
````
````{solution} exerciseu3
:class: note dropdown
:label: solutionu3
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
````` -->