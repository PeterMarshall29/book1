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

# Objects, Values, and Types


Copied





Certain words in a C++ program have special meaning, and these are known as keywords. Others can be used as identifiers. Comments are ignored during translation. C++ programs also contain literals, the values of characters inside them are determined by character sets and encodings. Certain characters in the program have to be represented with escape sequences.

The entities of a C++ program are values, objects, references, structured bindings(since C++17), result bindings(since C++26), functions, enumerators, types, class members, templates, template specializations, packs(since C++11), and namespaces. Preprocessor macros are not C++ entities.

Declarations may introduce entities, associate them with names and define their properties. The declarations that define all properties required to use an entity are definitions. A program must contain only one definition of any non-inline function or variable that is odr-used.

Definitions of functions usually include sequences of statements, some of which include expressions, which specify the computations to be performed by the program.

Names encountered in a program are associated with the declarations that introduced them using name lookup. Each name is only valid within a part of the program called its scope. Some names have linkage which makes them refer to the same entities when they appear in different scopes or translation units.

Each object, reference, function, expression in C++ is associated with a type, which may be fundamental, compound, or user-defined, complete or incomplete, etc.

Declared objects and declared references that are not non-static data members are variables ﻿.

C++ programs create, destroy, refer to, access, and manipulate {term}`objects`.

An object, in C++, has

* A type
* A name (optional)
* A value (which may be indeterminate, e.g. for default-initialized non-class types)
* A size (can be determined with sizeof);

* Storage duration (automatic, static, dynamic, thread-local);
lifetime (bounded by storage duration or temporary);
alignment requirement (can be determined with alignof);




The following c++ {term}`entities` are not objects: values, references, functions, enumerators, types, non-static class members, templates, namespaces, and `this`. [And some others]



A variable is an object or a reference that is not a non-static data member, that is introduced by a declaration.
***
end of copied



## Objects and Variables

An **object** is a region of memory with a **type** that specifies what kind of information can be placed in it.

The object is a region of memory holding a value of a specified type.

A named object is called a variable.

In C++ A variable is declared by stating its **type** followed by its **name** followed by {kbd}`;`. 

Objects and variables are very similar and confusion may arise. 

Unlike in maths, computer programming variables may well be constants; the value of the variable is made immutable, and cannot be changed after initialisation - but it is still a named object.

```{note}
:class: margin
For the moment we do not need to worry about computer memory - what it is, how it works, or how the computer program uses it.
In the past, computer memory was a more limited resource that had to carefully managed. Today, we do not have to worry about memory until we go to work programs that use a lot of memory, and need to perform a lot of computations as quickly as possible.
```


## Identifiers

```{admonition} No Spaces in Names!
:class: margin warning
Whitespace is not permitted in names.
Longer names are broken up using underscores or [Camel Case2](https://en.wikipedia.org/wiki/Camel_case).
Special symbols are not permitted.
```

An identifier is an arbitrarily long sequence of digits, underscores, lowercase and uppercase Latin letters, and most Unicode characters.

"Name" is generally synonymous with "identifier" - the exceptions are beyond the scope of this book.

Indentifiers are used to identify user defined entities in the program text, such as variables, functions and classes.

````{admonition} Rules For Valid Identifiers
:class: dropdown note
The options for the first character are: 

* Any uppercase Latin letter, i.e. `A-Z`
* Any lowercase Latin letters, i.e `a-z`
* An underscore `_`
* Some Unicode characters

After the initial character the options become:

* Any digit `0-9`
* Any uppercase Latin letter, i.e. `A-Z`
* Any lowercase Latin letters, i.e `a-z`
* An underscore `_`
* Some Unicode characters

Identifiers are case-sensitive. Any difference in the pattern of symols creates a new identifier.
The variabless named `www` and `WWW` are not the same.

```{admonition} Convention for use of Identifiers
:class: dropdown tip

It is considered best practive to use a consistant wrting format for indentifiers of the same type - this is called a naming convention.

In C++:

* An intial capital letter is only used for a {term}`class`. This makes it easy to distinguish a class from a function etc.
* Names of functions and variables start with lower case
* Longer names are generally written in Camel Case, where the name is composed of a series of words, and later words start with captial letters.
[Camel Case](https://en.wikipedia.org/wiki/Camel_case)
* Pointer variables should be prepended with 'p' and the asterisk '*' should be position next to the variable name instead of the pointer type.
* Reference variables should be prepended with 'r'. This helps to differentiate between the method returning a modifiable object and the same method returning a non-modifiable object
* Static variables should be prepended with 's'
* Global constants should be all capital letters separated with '_'

```
````


Note: Support of Unicode identifiers is limited in most implementations, e.g. gcc (until 10).

## Types and Declarations
For the compiler to make sense of the C++ code you have written, every named object must have a type, and be declared before use, and the types declared must have associated methods that match those you try to use.


`variable1 = variable2 + myFunction(variable3);`


Only works if the named variable exist and of a type that is assignable and where the operator `+` has meaning. 
`=`  is the assignment operator. Works for most but not simple arrays.
`+` is the addition operator for most numeric types and the concatenation operator for string type, but does nothing for char or bool types.

## Fundamental Types in C++

The fundamental types in c++ correspond to the most common basic storage units of a computer and the most common ways of using them to hold data; these are available from the core language:
The boolean type: bool.
The character types: char, wchar_t.
The integer types: int, long long; quite a few others...
The floating-point types: double,long double.
void a type used to signify the absence of information.
The Boolean, character, and integer types are collectively called integral types. 
The integral and floating-point types are collectively called arithmetic types.

Other 'built-in' types, are constructed using declarator operators:
The pointer types : `int*`.
The simple array type: `char[]`.
The reference type: `double&` and `vector<int>&&`.

User-defined types, must be defined before use by the user:
Structure types.
Class types. 
Enumeration types: enum and enum class.


Now try: 
```{code-cell} c++
:tags: [remove-output]
#include <iostream>
int main(){

int age = 58;
std::string firstName = "Peter";
float shoeSize = 10.5;
double c = 3.0e-8;
char example = 'p';


return 0;
}
```

Notice the single quotes for a char type, and one option for scientific notation.
Float is smaller than double – depends on bits of system – double precision floating point number.
Int has many qualifiers – Int can be dropped and the qualifier used on its own.

Variable Names cannot start with a number, contain a whitespace or special symbols – only letters, numbers and underscore are permitted.
Names are case sensitive – keep leading capitals for classes.
Never start with an underscore – it will work, but that pattern is reserved for implementation and system entities, so you risk clashing with something with the same name you did not expect.
Lastly keywords are protected and cannot be reused.


```{code-cell} c++
:tags: [remove-output]
#include <iostream>
int main(){

std::cout << "Please type your first name followed by your surname!\n"; 
std::string surname; 
//std::cin >> surname;
std::cout << "Hello, " << surname << "!\n";

return 0;
}
```

The string input ends when a white space is detected, so TRY

The convention is that the reading of strings is terminated by any whitespace i.e. space, tab, or newline '\t', '\n'.

```{code-cell} c++
:tags: [remove-output]
#include <iostream>
int main(){
int age = 58;
std::cout << "Please type your first name followed by your surname!\n"; 
std::string firstName = "Peter";
std::string surname;       
//std::cin >> firstName >> surname; //input before space to first variable and input after space to second variable 
std::cout << "Hello, " << firstName << " " << surname << ", you are " << age << " years old!\n";
return 0;
}
```

Now change to ask for an name followed by an age.

```{code-cell} c++
:tags: [remove-output]
#include <iostream>
int main(){
int age = 58;
std::string firstName = "Peter";
std::cout << "Please type your first name followed by your age!\n"; 
std::string surname; 
//std::cin >> firstName >> age; 
std::cout << "Hello, " << firstName << " " << surname << ", you are " << age << " years old!\n";
return 0;
}
```


Respond with a name "whitespace" age. Then try again but type in two names.

A string is not an integer, so is recorded as integral value 0. 

Older C++ version might give a random value such as -96738…. Unfortunately this overwrites an initial value if you have used one.

Handling input format errors is a separate lesson.

4 Ways to convert an integer to a string: 3 more to discuss later.
Add this to header file.
template<class T> std::string to_string(const T& t)
{
std::ostringstream os;
os << t;
return os.str();
}
This code creates a generic template for conversion to a string – we will circle back to how it works.

Then replace cout line in the previous code with:

std::cout << "Study " + to_string(c2) + " times harder " + motivator + "!\n";
Try typing two names in a row again. Why does the code fail?

Char type is created using single quotes.
Try the following code.

char a = 'x';
char b = 'y';
int c = a + b;
std::cout << a << b << c;
return 0;

Change the letter to try to make senses of the output.
Try numbers instead – what is the sum of 1 and 1 anyway?
But a least its half as much as 2 and 2 still, right?

Try this code
int x = 5;
int y;
if (x == 5);
{ y = 3; }
std::cout << y;
{ …code here…} identifies a code block, or an in initialiser.
Prints 3 – now change x to 4. The semicolon after the if is a mistake, its like putting {} instead. 
{} is called the empty block – sometimes used into code to register that nothing should be done, like when it’s the else loop that is really wanted – instead of using NOT logic.
The second {} does nothing special.

## declaration from cppreference

Declarations are how names are introduced (or re-introduced) into the C++ program. Not all declarations actually declare anything, and each kind of entity is declared differently. Definitions are declarations that are sufficient to use the entity identified by the name.

A declaration is one of the following:

Function definition
Template declaration (including Partial template specialization)
Explicit template instantiation
Explicit template specialization
Namespace definition
Linkage specification
Attribute declaration (attr ;)
(since C++11)
Empty declaration (;)
A function declaration without a decl-specifier-seq ﻿:

## Declaration
Before a name (identifier) can be used in a C++ program, it must be declared. That is, its type must be specified to inform the compiler what kind of entity the name refers to. For example:
char ch;
std::string s;
auto count = 1;
const double pi{ 3.1415926535897 };
extern int error_number;
const char* name = "Njal";
const char* season[] = { "spring", "summer", "fall", "winter" };
std::vector<std::string> people{ name, "Skarphedin", "Gunnar" };
double std::sqrt(double);
struct Date { int d = 3, m, y; };
int day(Date * p) { return p− > d; };
template<class T> T abs(T a) { return a < 0 ? −a : a; }
constexpr int fac(int n) { return (n < 2) ? 1 : n*fac(n−1); } // possible compile-time evaluation (§2.2.3)
constexpr double zz{ ii∗fac(7) }; // compile-time initialization

using Cmplx = std::complex<double>; // type alias (§3.4.5, §6.5)
struct User; // type name
enum class Beer { Carlsberg, Tuborg, Thor };
namespace NS { int a; }

### The Structure of Declarations

The structure of a declaration is defined by the C++ grammar (§iso.A). This grammar evolved over four decades, starting with the early C grammars, and is quite complicated. However, without too many radical simplifications, we can consider a declaration as having five parts (in order):
* Optional prefix specifiers (e.g., static or virtual)
* A base type (e.g., vector<double> or const int)
* A declarator optionally including a name (e.g., p[7], n, or ∗(∗)[])
* Optional suffix function specifiers (e.g., const or noexcept)
* An optional initializer or function body (e.g., ={7,5,3} or {return x;})
Except for function and namespace definitions, a declaration is terminated by a semicolon.


A declarator is composed of a name and optionally some declarator operators. The most common declarator operators are:
link to image6


Their use would be simple if they were all either prefix or postfix. However, ∗, [], and () were designed to mirror their use in expressions (§10.3). Thus, ∗ is prefix and [] and () are postfix. The postfix declarator operators bind tighter than the prefix ones. Consequently, char∗kings[] is an array of pointers to char, whereas char(∗kings)[] is a pointer to an array of char. We have to use parentheses to express types such as ‘‘pointer to array’’ and ‘‘pointer to function’




## 6.3.6 Deducing a Type: auto and decltype()

C++ provides two mechanisms for deducing a type from an expression:
auto for deducing a type of an object from its initializer; the type can be the type of a variable, a const, or a constexpr.
decltype(expr) for deducing the type of something that is not a simple initializer, such as the return type for a function, or the type of a class member.
The deduction done here is very simple: auto and decltype() simply report the type of an expression already known to the compiler.
There is not much advantage in using auto instead of int for an expression as simple as 123. The harder the type is to write and the harder the type is to know, the more useful auto becomes. For example:
template<class T> void f1(std::vector<T>&arg)
{
for (std::vector<T>::iterator p = arg.begin(); p != arg.end(); ++p)
*p = 7;
for (auto p = arg.begin(); p != arg.end(); ++p)
*p = 7;
}
The loop using auto is the more convenient to write and the easier to read. Also, it is more resilient to code changes. 



The language provides two mechanisms for deducing a type from an expression:
auto for deducing a type of an object from its initializer; the type can be the type of a vari- able, a const, or a constexpr.
decltype(expr) for deducing the type of something that is not a simple initializer, such as the return type for a function or the type of a class member.
The deduction done here is very simple: auto and decltype() simply report the type of an expression already known to the compiler.

6.3.6.1 The auto Type Specifier
When a declaration of a variable has an initializer, we don’t need to explicitly specify a type. Instead, we can let the variable have the type of its initializer. Consider:
int a1 = 123; 
char a2 = 123;
auto a3 = 123; // the type of a3 is ‘‘int’’int a1 = 123; char a2 = 123;
auto a3 = 123; // the type of a3 is ‘‘int’’
The type of the integer literal 123 is int, so a3 is an int. That is, auto is a placeholder for the type of the initializer.
There is not much advantage in using auto instead of int for an expression as simple as 123. The harder the type is to write and the harder the type is to know, the more useful auto becomes. For example:
template<class T> void f1(std::vector<T>&arg)
{
for (std::vector<T>::iterator p = arg.begin(); p != arg.end(); ++p)
*p = 7;
for (auto p = arg.begin(); p != arg.end(); ++p)
*p = 7;
}
The loop using auto is the more convenient to write and the easier to read. Also, it is more resilient to code changes. 

## `lvalue` and `rvalue`

The c++ term ‘‘lvalue’’ was originally coined to mean ‘‘something that can be on the left-hand side of an assignment.’’ – an Lvalue is any object with a memory allocation – i.e. any named object, or an unnamed objected created using new is an lvalue. 
However, not every lvalue may be used on the left-hand side of an assignment; e.g. an lvalue can refer to a constant. An lvalue that has not been declared const is often called a modifiable lvalue. This simple and low-level notion of an object should not be confused with the notions of class object and object of polymorphic type.
Rvalue means ‘‘a value that is not an lvalue,’’ such as a temporary value (e.g., the value returned by a function). 
If you need to be more technical because you want to read the ISO C++ standard a deeper definition is required. There are two properties that matter for an object when it comes to addressing, copying, and moving: 
• Has identity: The program has the name of, pointer to, or reference to the object so that it is possible to determine if two objects are the same, whether the value of the object has changed, etc.
• Movable: The object may be moved from (i.e., we are allowed to move its value to another location and leave the object in a valid but unspecified state, rather than copying). 
For practical programming, thinking in terms of rvalue and lvalue is usually sufficient. Note that every expression is either an lvalue or an rvalue, but not both.

It turns out that three of the four possible combinations of those two properties are needed to precisely describe the C++ language rules (we have no need for objects that do not have identity and cannot be moved). Using ‘‘m for movable’’ and ‘‘i for has identity,’’ we can represent this classification of expressions graphically:

diagram from week 2 slide 66
So, a classical lvalue is something that has identity and cannot be moved (because we could examine it after a move), and a classical rvalue is anything that we are allowed to move from. 
The other alternatives are prvalue (‘‘pure rvalue’’), glvalue (‘‘generalized lvalue’’), and xvalue (‘‘x’’ for ‘‘extraordinary’’ or ‘‘expert only’’; the suggestions for the meaning of this ‘‘x’’ have been quite imaginative). For example:
void f(std::vector<std::string>& vs)
{
	std::vector<std::string>& v2 = std::move(vs); // move vs to v2
	// ...
}
Here, std::move(vs) is an xvalue: it clearly has identity (we can refer to it as vs), but we have explicitly given permission for it to be moved from by calling std::move().

## Type Aliases

Sometimes, we need a new name for a type. Possible reasons include:
* The original name is too long, complicated, or ugly (in some programmer’s eyes).
* A programming technique requires different types to have the same name in a context.
* A specific type is mentioned in one place only to simplify maintenance.

For example:
using Pchar = char∗; // pointer to character
using PF = int(∗)(double); // pointer to function taking a double and returning an int



