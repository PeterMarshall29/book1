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

{term}`Initialisation` is the setting of the intial value of a variable for the first time (at the time of {term}`construction`).

{term}`Definiton` is therefore {term}`decalaration` combined with initialisation.

Initialisation is different from assignment - the object has no previous value AND initialization is done by a {term}`constructor`.

Best practice is to always initialise your variables – the benefits include preventing you from accidentally tyring to use a variable that has been declared, but not defined.

```{tip}
:class: margin
Don't declare a variable until you have a value for it.
```
The exceptions are the `string` and `vector` tyeps - both are initialised by 'default' as 'empty' i.e. `""` for a `string`, `v.capacity() = 0` for a `vector`.

This is done by a 'default constructor'. We will learn about contructors when we study {term}`classes`.

Global built-in type variables are initialised with default of 0 – but you should not use global variables in the first place and '0' can be just as problematic as no value.

The initial value may be provided in the initializer section of a declarator or by a new expression. 

Initialisation also takes place during function calls: function parameters and the function return values are both initialized.

## Initialisers
There a differnt ways to intialise an object.

If an {term}`initialiser` is specified for an object, that initializer determines the initial value of an object.

The initialiser is just the syntax and values used to initialise the object.

An initialiser can use one of four syntactic styles:

`````{code_example-start}
:label: examplem1
:class: dropdown
`````
````{code-cell} C++
:tags: [remove-output]
#include <iostream>
int main() {
  iny myInt = 99;  
  int myFirstInt {5};         // List initialisation
  int mySecondInt = {55};     // Copy initialisaton
  int myThirdInt = 555;       // Copy initialisaton 
  int myFourthInt (5555);     // Direct initialisation
  std::cout << myFirstInt << '\n' << mySecondInt  << '\n' << myThirdInt << '\n' << myFourthInt; 
  return 0;
}
````
If no initializer is specified for an object, the object is {term}`default-initialised`.


`````{code_example-end}
`````
Initialization using `{}` is called {term}`list initialisation` - this is the best one to chose because it can be used in every context you will encounter.

It is recommended that list initialisation is used for anything more complicated that a simple variable - even though not having the {term}`assignment operator` `=` may be a little disconcerting at first.

Anything more complicated than initialising a simple variable is is better done using {} because {term}`list initialisation` does not permit {term}`narrowing` conversion. 

A narrowing (conversion) occurs when a value is converted from one type to another and the new type is not big enough to represent all possible values of the original type; leading to data loss or undefined behaviors.

List initialisation ensures that:

* An `integer` cannot be converted to a `char`, but `char` to `int is permitted.
* a `double` cannot be converted to a `float`, ut the reverse is permitted 
* A floating-point values are not converted to an integer type.
* An integer value cannot

`````{syntax-start} Initialisation
:class: dropdown
:nonumber:
`````
type myIdentifier = expression;           // copy initialisation
type myIndentifier2 {value}               //
type myIdentifier3 { initialiser list } ; // copy initialisation
type myIndentifier4 = {initialiser list}

`````{syntax-end}
`````

Information on the sizes of the arithmetic types is [here](SizeOfNumericValues)


****
https://www.learncpp.com/cpp-tutorial/variable-assignment-and-initialization/

List-initialization disallows narrowing conversions

One of the primary benefits of list-initialization for new C++ programmers is that “narrowing conversions” are disallowed. This means that if you try to list-initialize a variable using a value that the variable can not safely hold, the compiler is required to produce a diagnostic (compilation error or warning) to notify you. For example:

int main()
{
    // An integer can only hold non-fractional values.
    // Initializing an int with fractional value 4.5 requires the compiler to convert 4.5 to a value an int can hold.
    // Such a conversion is a narrowing conversion, since the fractional part of the value will be lost.

    int w1 { 4.5 }; // compile error: list-init does not allow narrowing conversion

    int w2 = 4.5;   // compiles: w2 copy-initialized to value 4
    int w3 (4.5);   // compiles: w3 direct-initialized to value 4

    return 0;
}
On line 7 of the above program, we’re using a value (4.5) with a fractional component (.5) to list-initialize an integer variable (which can only hold non-fractional values). Because this is a narrowing conversion, the compiler is required to generate a diagnostic in such cases.

Copy-initialization (line 9) and direct-initialization (line 10) both silently drop the .5 and initialize the variable with the value 4 (which probably isn’t what we want). Your compiler may warn you about this (since losing data is rarely desired), but it also may not.

****

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


## Initialiser Semantics

If no initializer is specified for an object, the object is default-initialized. 

If no initializer is specified for a reference, the program is ill-formed.

If the initializer specified for an object is () the object is value-initialized. 

If the initializer specified for a reference is (), the program is ill-formed.

The semantics of initializers are as follows:

If the entity being initialized is a reference, see reference initialization.
Otherwise, the entity being initialized is an object. Given the type of the object as T:
If the initializer is of syntax (1), the object is copy-initialized.



## Auto

The type of simple variable can be deduced fr

When defining a variable, you don’t actually need to state its type explicitly when it can be deduced from the initializer:
```{code-block} c++
auto b = true; // `true` or `false` are recognised as `bool` type
auto ch = 'x'; //  Single quotes are reserved to denote `char` type
auto i = 123; //   Number literal without the decimal point is interpreted to be an `int`No decimal point in a number literalan int
auto d = 1.2; //   a double
auto z = sqrt(y); // z has the type of whatever sqrt(y) returns
```
Warning Be careful – best to always specify type and initialise immediately!

With auto, we use the = syntax because there is no type conversion involved that might cause problems.

We use auto where we don’t hav e a specific reason to mention the type explicitly. 

"Specific reasons" include:
* The definition is in a large scope where we want to make the type clearly visible to readers of our code.
* We want to be explicit about a variable’s range or precision (e.g., double rather than float).

Using auto, we avoid redundancy and writing long type names. 

This is especially important in generic programming where the exact type of an object can be hard for the programmer to know and the type names can be quite long.

There is no advantage to using {} initialization, and one trap, when using auto to get the type determined by the initializer. 

The trap is that if the initializer is a {}-list, we may not want its type deduced. For example:
```{code-block} c++
auto z1{ 99 }; // z1 is an initializer_list<int> //Student’s to find out what it is.
auto z2 = 99; // z2 is an int
```
So prefer = when using auto.

## Empty initialiser

Empty Initialiser List {} is used to indicate that a default value is desired. For example:
```{code-block} c++
int x4{}; // x4 becomes 0
double d4{}; // d4 becomes 0.0
char* p{}; //p becomes nullptr
std::vector<int> v4{}; // v4 becomes the empty vector
std::string s4{}; // s4 becomes ""
```
Most types have a default value. For integral types, the default value is a suitable representation of zero. 

For pointers, the default value is `nullptr`. 

For user-defined types, the default value (if any) is determined by the type’s constructors.

For user-defined types, there can be a distinction between direct initialization (where implicit conversions are allowed) and copy initialization (where they are not).

## missing inialiser

If no initializer is specified, a `global`, `namespace`, `local static`, or `static member` (static objects) is initialized to `{}` of the appropriate type. For example:
```{code-block} c++
int a; // means ‘‘int a{};’’ so that a becomes 0
double d; // means ‘‘double d{};’’ so that d becomes 0.0
```
Local variables and objects created on the free store are not initialized by unless they are of user-defined types with a default constructor. For example:
```{code-block} c++
int x; // x does not have a well-defined value
char buf[1024]; // buf[i] does not have a well-defined value
int* p{ new int }; //*p does not have a well-defined value
char* q{ new char[1024] }; // q[i] does not have a well-defined value
std::string s; // s=="" because of string’s default constructor
std::vector<char> v; // v=={} because of vector’s default constructor
std::string* ps{ new std::string }; // *ps is "" because of string’s default constructor
```
If you want initialization of local variables of built-in type or objects of built-in type created with new, use {}.

## Initialiser Lists
More complicated objects can require more than one value as an initializer. This is primarily handled by initializer
Lists delimited by { and }. For example:
```{code-block} c++
int a[] = { 1, 2 }; // array initializer
struct S { int x; std::string s; };
S s = { 1, "Helios" }; // struct initializer
std::complex<double> z = { 0, pi }; // use constructor
std::vector<double> v = { 0.0, 1.1, 2.2, 3.3 }; // use list constructor
```
In some cases, function-style argument lists can also be used. For example:
```{code-block} c++
std::complex<double> z(0, std::numbers::pi); // use constructor
std::vector<double> v(10, 3.3); // use constructor : v gets 10 elements initialized to 3.3st constructor 
```
To access 'pi' – you need to include numbers and change Visual Studio project properties, c++language standard, select version 20++.

In a declaration, an empty pair of parentheses, (), always means "function". 

So, if you want to be explicit about "use default initialization" you need {}. For example:

```{code-block} c++
std::complex<double> z1(1, 2); // function-style initializer (initialization by constructor)
std::complex<double> f1(); // function declaration
std::complex<double> z2{ 1,2 }; // initialization by constructor to {1,2}
std::complex<double> f2{}; // initialization by constructor to the default value {0,0}
```

Note that initialization using the {} notation does not narrow. 

When using `auto`, a {}-list has its type deduced to `std::initializer_list<T>`. For example:

```{code-block} c++
auto x1{ 1, 2, 3, 4 }; // x1 is an initializer_list<int>
auto x2{ 1.0, 2.25, 3.5 }; // x2 is an initializer_list of<double>
``` 
```{code-block} c++
auto x3{ 1.0, 2 }; // error : cannot deduce the type of 
``` 


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
