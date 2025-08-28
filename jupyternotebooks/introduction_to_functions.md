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

A sequence of statement (code block) can be made reusable by encapsulating them into a function.

At its simplest, a function is just a sequence of statement collected and given a name that can be used to cause the statement to be executed.

When a function is called (or invoked) the statements are executed as though they had been types at the same point in your program.

Functions may be identified in code by finding a name suffixed by parentheses, which may be empty or contain arguments, e.g. `main()`

Functions offer many benefits to the programmer. Functions: 

* Make programming more efficient by enabling the reuse of code blocks.
* Reduce the complexity of the overall programme by separating concerns
* Make the program easier to understand because individual parts are separated and identified by a name.We define a function when we want a separate computation with a name because doing so:
* Make it easier to test the program - testing reduces to testing functions and their interactions.

Real-world programs use thousands of functions, some even hundreds of thousands of functions. We would never be able to write or understand such programs if their parts (e.g., computations) were not clearly separated and named.

Functional programming is a programming paradigm that constructs programs from only functions.

C++ is a multi=paradigm language - we will use a combination of functional programming and object-oriented programming. Possibly with some Generic programming.

Run this code..

```{code-cell} c++
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
```

`````{admonition} Code Explanation
:class: note dropdown
```{code-block} c++
void myFirstFunction () 
```
This is the {term}`function declaration`. If it is not followed by the function body, then it must be followed by `;`.

When immediately followed by the {term}`function body`, the two parts form the function {term}`definition`.

The funtion identifier (name) is 'myFirstFuncton' - user-defined.

The keyword before the name, specfies the type of the value that will be returned when the function completes its execution.

`Void` indicates that nothing is returned by this function, and therefore we do not need to use the `return` keyword. 

The type of this function is `void()`. 

`int` indicates that `main()` returns an integer, hence we need `return 0;`.

The empty parentheses `()` indicate that this function takes no {term}`arguments` (more below on arguments)

```{code-block} c++
{
	std::cout << "Hello, World!" << '\n';
}
```
This the function body - This code that will be executed every time that the function is called.

If there are nested blocks inside the function, the outermost block is the function body.

```{code-block} c++
	myFirstFunction();
```
This is function call. To call a function we state its name followed by `()`. If the function takes arguments, their values must be supplied in the parentheses

```{important}
The function must be placed outside of the main function. 
```
For now we will place the functions above the main function, but in future all functions should be placed in {term}`header files`, using the `#include` directive to make them available to `main()`.

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
`````

Run this code. 
```{code-cell} cpp
:linenos:
:tags: [remove-output]
#include <iostream>

int squareOf(int x) {
	return x * x;
}
int main()
{
	for (int i = 0; i < 100; ++i) {
		std::cout << i << "\t" << squareOf(i) << "\n";
		++i;
	}
	return 0;
}
```
````{admonition} Code Explanation
:class: note dropdown

The `squareOf()` function returns an integer value when it is called, and that value is then used by the character output stream.

If a return value is not used, it is better practice to declare return type as `void`. It is also common practice to put `return;` at the end of a void function - though not strictly necessary. 

The definiton of `squareOf()` has a single parameter called 'x' of type `int`.

The type of `squareOf()` is `int (int)`.

To call `squareOf()` its name must be included in a code statement followed by `()` with either an integer value in the parentheses or an integer type variable, that must have been initialised with a value before the call.

The value returned from the call to `squareOf()` is used by the output stream. Similar to the evaluation of an expression, the function is called and it value used.

````

````{exercise}
:label: exerciseu3
- Try moving the definition of squareOf() to below the main function. 
- Try moving the definition of squareOf() to inside the main function.
- Try changing the function declaration so that it expects a paramater of type `double`.
- Find two ways to make the above code print the square of all of the values from 1 to 100.

```{solution} exerciseu3
:label: solutionu3
:class: dropdown
You should have found that the function must go above `main()` - because a function cannot be used before it has been declared.

Integers can be converted to doubles at run time, so the code works.

```
````


`````{exercise-start}
:label: exerciseu2
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
````{solution} exerciseu2
:class: note dropdown
:label: solutionu2
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


TRY moving the square definition after main – what happens?

```{tip}
:class: margin
Declaration: Statement of the functions name and input/output types.
A definition requires the declaration (again) followed by the code body.

"Declarations are not defintitions".
```
```{code-cell} c++
int myFunction(int); // is a declaration

int myFunction(int x) {
	std::cout << "Hello Class!";
	return x;
}
Is a definition.

We could also have,
 
int myFunction(int) {
	std::cout << "Hello Class!";
	return 0;
}
But then the integer that must be passed in cannot be accessed or used…
```

## Function Call and Return

Examples:
double fct(int a, double d) { return a*d; }

If the function returns nothing label it with void.
List all values to be passed in – in the order that they will used in the call. 
Names of parameters in the function declaration are the local names used within the function.

int myFunc1(std::vector<std::string> vs, std::string s, int hint); // naming arguments
int myFunc2(std::vector<std::string>, std::string, int); // not naming arguments

Names are not formally necessary in the declaration, but must be given in the definition part. 
Names in the declaration help us understand the intention of the programmer.

If the parameter type in the declaration is not named in the definition, then it is not used in the function, and does not have to be passed in.  A value return is a form of initialisation – types must of course be matched.

You should have a return or an error for every possible way out of a function. Except for a void function, where it is acceptable to just drop through.

## Pass by Constant Reference

If you are not passing small values, then passing by value is costly because it creates a new local copy – could be an image with gigabytes. A memory address of a name is called a reference.
A parameter type that has & attached, indicated that a reference to a name is being passed in.
Const is used to stop the function altering the name referenced.
All programs run faster when function parameters are references not values (i.e. copied).

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

## Pass by Reference

Pass by reference allows us to modify the original values.
Example: two ways for a program to modify some named variable
To be accessible by a function the variable must be global, which means declaring it before the main function, otherwise the myPrint functions could not alter it, only its copy.
Example 1 – altering a global variable.
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
Notice that it does not matter whether the a[i] = a[i] + 1;
Line is before or after the print, since a copy of the original is being printed. This method still works if you pass by reference, but not the order matters since you are accessing the original for each output.

This is not helpful, because now you have a global variable.
Way number 2 - Change the local parameter – which is a reference to the external value.

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

## Declarations and Definition

A definition requires the code body also. ‘Declarations are not definitions’.

int myFunction(int); // is a declaration

int myFunction(int x) {
	std::cout << "Hello Class!";
	return x;
} //Is a definition.

We could also have 
int myFunction(int) {
	std::cout << "Hello Class!";
	return 0;
}
But then the integer that must be passed in cannot be accessed or used…
 
You can declare anything as often as you want – only definitions cannot be repeated. 
And you cannot declare a second time, for the same name that does not match the pattern of an existing definition.

## Declarations

Everything must be declared before it can be used. 
Reason: what if you call two functions in each others definition – one definition must come first – the solution is declare both – then it does not matter, which is defined first. And the declaration does not involve the other functions, so no issues there.
 
Kinds of declarations
There are many kinds of entities that a programmer can define in C++. The most interesting are:
Variables
Constants
Functions 
Namespaces 
Types (classes and enumerations)
Templates

The declaration is just an interface – describes what the definition has to conform to.
extern int myFunction(int);
extern keyword means the myFunction declaration is not a definition. It is rarely used.

## Initialisation

Always initialise your variables – prevents accidental use before definition.

Only exception are strings and vectors; which by default have empty conditions initialised, “” for strings, v.capacity() = 0 for vector.

This is done by a ‘default constructor’.

Global built-in type variables are initialised with default of 0 – but you should not use global variables in the first place and 0 is just as problematic as no value..

Examples of Declarations – some do not work in current location – others need set up to proceed them.

## Structure of Declarations
The structure of a declaration is defined by the C++ grammar (§iso.A). This grammar evolved over four decades, starting with the early C grammars, and is quite complicated. However, without too many radical simplifications, we can consider a declaration as having five parts (in order):
• Optional prefix specifiers (e.g., static or virtual)
• A base type (e.g., vector<double> or const int)
• A declarator optionally including a name (e.g., p[7], n, or ∗(∗)[])
• Optional suffix function specifiers (e.g., const or noexcept)
• An optional initializer or function body (e.g., ={7,5,3} or {return x;})
Except for function and namespace definitions, a declaration is terminated by a semicolon.

## Declaration Good Practice

Before the main() put:


Constant declarations
Function prototype declarations

Inside main() put:

Variable declarations

Remember that choice of position affects scope

## Hidden or Shadowed Names
A declaration of a name in a block can hide a declaration in an enclosing block or a global name.
That is, a name can be redefined to refer to a different entity within a block. After exit from the block, the name resumes its previous meaning.

A hidden global name can be referred to using the scope resolution operator, ::. For example:
int x;
void main()
{
int x = 1; // hide global x
::x = 2; // assign to global x
x = 3; // assign to local x

std::cout << x << '\n';
std::cout << ::x;
// ...
} 

There is no way to use a hidden local name.













