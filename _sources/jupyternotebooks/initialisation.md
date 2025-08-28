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

# Initialisation

*** code from other pages to be fit in
```{code-cell} c++
:tags: [remove-output]
#include <iostream>
int main(){
int x = 5;
int y;
if (x == 5);
{ y = 3; }
std::cout << y;
return 0;
}
```



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







## Initialisers
If an initializer is specified for an object, that initializer determines the initial value of an object.
An initializer can use one of four syntactic styles:
X a1 {v};
X a2 = {v};
X a3 = v;
X a4(v);
Of these, only the first can be used in every context
Anything more complicated than initialising a simple variable is is better done using {}. Initialization using {} is called “list initialization” and does not allow narrowing. That is:
* An integer cannot be converted to another integer that cannot hold its value. For example, char to int is allowed, but not int to char.
* A floating-point value cannot be converted to another floating-point type that cannot hold its value. For example, float to double is allowed, but not double to float. 
* A floating-point value cannot be converted to an integer type.
* An integer value cannot
The = form is traditional and dates back to C, but if in doubt, use the general {}-list form (§6.3.5.2).
If nothing else, it saves you from conversions that lose information (narrowing conversions; §10.5): be converted to a floating-point type.

If an initializer is specified for an object, that initializer determines the initial value of an object.
An initializer can use one of four syntactic styles:

char a1{ 'p'};
int a2 = { 2 };
std::string a3 = "Hello";
double a4(2.0);
Of these, only the first can be used in every context. 
Narrowing Conversion: The = form is traditional and dates back to C, but if in doubt, use the general { } list form . If nothing else, it saves you from conversions that lose information (narrowing conversions). 



## Auto
When defining a variable, you don’t actually need to state its type explicitly when it can be deduced from the initializer:
auto b = true; // a bool
auto ch = 'x'; // a char
auto i = 123; // an int
auto d = 1.2; // a double
auto z = sqrt(y); // z has the type of whatever sqrt(y) returns

Warning Be careful – best to always specify type and initialise immediately!

With auto, we use the = syntax because there is no type conversion involved that might cause problems.
We use auto where we don’t hav e a specific reason to mention the type explicitly. ‘‘Specific reasons’’ include:
* The definition is in a large scope where we want to make the type clearly visible to readers of our code.
* We want to be explicit about a variable’s range or precision (e.g., double rather than float).
Using auto, we avoid redundancy and writing long type names. This is especially important in generic programming where the exact type of an object can be hard for the programmer to know and the type names can be quite long (§4.5.1).
There is no advantage to using {} initialization, and one trap, when using auto to get the type determined by the initializer. The trap is that if the initializer is a {}-list, we may not want its type deduced (§6.3.6.2). For example:
So prefer = when using auto.
auto z1{ 99 }; // z1 is an initializer_list<int> //Student’s to find out what it is.

auto z2 = 99; // z2 is an int



## Empty initialiser

Empty Initialiser List {} is used to indicate that a default value is desired. For example:
int x4{}; // x4 becomes 0
double d4{}; // d4 becomes 0.0
char* p{}; //p becomes nullptr
std::vector<int> v4{}; // v4 becomes the empty vector
std::string s4{}; // s4 becomes ""
Most types have a default value. For integral types, the default value is a suitable representation of
zero. For pointers, the default value is nullptr . 
For user-defined types, the default value (if any) is determined by the type’s constructors.
For user-defined types, there can be a distinction between direct initialization (where implicit conversions are allowed) and copy initialization (where they are not).

## missing inialiser

If no initializer is specified, a global (§6.3.4), namespace (§14.3.1), local static (§12.1.8), or static member (§16.2.12) (collectively called static objects) is initialized to {} of the appropriate type. For example:
int a; // means ‘‘int a{};’’ so that a becomes 0
double d; // means ‘‘double d{};’’ so that d becomes 0.0

Local variables and objects created on the free store (sometimes called dynamic objects or heap objects; §11.2) are not initialized by unless they are of user-defined types with a default constructor (§17.3.3). For example:
int x; // x does not have a well-defined value
char buf[1024]; // buf[i] does not have a well-defined value
int* p{ new int }; //*p does not have a well-defined value
char* q{ new char[1024] }; // q[i] does not have a well-defined value
std::string s; // s=="" because of string’s default constructor
std::vector<char> v; // v=={} because of vector’s default constructor
std::string* ps{ new std::string }; // *ps is "" because of string’s default constructor
If you want initialization of local variables of built-in type or objects of built-in type created with new, use {}.

## Initialiser Lists
More complicated
objects can require more than one value as an initializer. This is primarily handled by initializer
Lists delimited by { and }. For example:
int a[] = { 1, 2 }; // array initializer
struct S { int x; std::string s; };
S s = { 1, "Helios" }; // struct initializer
std::complex<double> z = { 0, pi }; // use constructor
std::vector<double> v = { 0.0, 1.1, 2.2, 3.3 }; // use list constructor

In some cases, function-style argument lists can also be used (§2.3, §16.2.5). For example:
std::complex<double> z(0, std::numbers::pi); // use constructor
std::vector<double> v(10, 3.3); // use constructor : v gets 10 elements initialized to 3.3st constructor 

To access pi – you need to include numbers and GOTO properties, c++language standard, select version 20++.
 In a declaration, an empty pair of parentheses, (), always means ‘‘function’’ (§12.1). So, if you
want to be explicit about ‘‘use default initialization’’ you need {}. For example:
std::complex<double> z1(1, 2); // function-style initializer (initialization by constructor)
std::complex<double> f1(); // function declaration
std::complex<double> z2{ 1,2 }; // initialization by constructor to {1,2}
std::complex<double> f2{}; // initialization by constructor to the default value {0,0}
Note that initialization using the {} notation does not narrow (§6.3.5). When using auto, a {}-list has its type deduced to std::initializer_list<T>. For example:
 auto x1{ 1,2,3,4 }; // x1 is an initializer_list<int>
auto x2{ 1.0, 2.25, 3.5 }; // x2 is an initializer_list of<double>
auto x3{ 1.0,2 }; // error : cannot deduce the type of {1.0,2} (§6.3.6.2)
 

