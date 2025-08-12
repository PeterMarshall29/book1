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

We define a function when we want a separate computation with a name because doing so:
* Makes the computation logically separate
* Makes the program text clearer (by naming the computation)
* Makes it possible to use the function in more than one place in our program
* Eases testing
Real-world programs use thousands of functions, some even hundreds of thousands of functions. We would never be able to write or understand such programs if their parts (e.g., computations) were not clearly separated and named.

## Syntax of a Function Call
Syntax of a function call:  returnType functionIdentifier ( parameter-list ) {function-body}
The function identifier is mainly its name – use camel case – though used slightly differently the term identifier can include the two types.
The list of arguments (values/types) to be passed to the function is put in the parameter list. The parameter list is comma separated – for each argument put the type then a parameter (variable name that one argument will have inside the function) space separated.
The identifier is just the name of the function, though strictly the two types are part of the identifier too.
The arguments specified in a function call must be delivered exactly – type and number matched.
The returned value from a function need not be used for anything. Compiler may cite it as an error if unused.
A function that returns nothing can be declared as void – better practice.

Example
int square(int x) {
	return x * x;
}
int main()
{
	for (int i = 0; i < 100; ++i) {
		std::cout << i << "\t" << square(i) << "\n";
		++i;
	}
	return 0;
}

TRY moving the square definition after main – what happens?


Statement of name and input/output types is called a declaration.
A definition requires the code body also.
‘Declarations are not defintitions’.

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













