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

{term}`Initialisation` is the setting of the initial value of a variable at the time of {term}`construction`.

{term}`Definition` is therefore {term}`declaration` combined with initialisation.

Initialisation is different from assignment - the object has no previous value and a {term}`constructor` are only involved in initialisation.

Best practice is to always initialise your variables – the benefits include preventing you from accidentally tyring to use a variable that has been declared but not defined.

```{tip}
:class: margin
Don't declare a variable until you have a value to assign to it.
```
`````{code_example-start}
:label: examplem3
:class: dropdown
`````
Complete and run this program.
````{code-cell} c++
:tags: [remove-output]
int main()
{
    char myChar {'D'};
    int myInt = { 2 };
    std::string myString = "Aargh";
    double myDouble (2.0);
    std::cout << myString << '\t'<< myInt << '\t'<< myChar << '\t'<< myDouble << '\t' << "Star-Wars Pirate?";
    return 0;
}
````
Of these, only the first method of initialisation can be used in every context. 
`````{code_example-end}
`````
Some objects are initialised by default, but this is not always helpful - Global variables are default-initialised to 0 – but you should not use global variables in the first place and '0' can be just as problematic as no value. `string` and `vector` are initialised as empty.

The initial value may be provided in the initialiser section of a declarator or by a new expression. 

Initialisation also takes place during function calls: function parameters and the function return values are both initialized.

N.B. These rules apply to objects, not references.

`````{syntax-start} Initialisation
:class: dropdown
:nonumber:
`````
````{code-block} c++
typeName identifier = expression;                       // copy-initialisation
typeName identifier ( value or expression );            // direct-initialisation 
typeName identifier { value or expression, or list };   // direct-list-initialisation
typeName identifier = { value or expression };          // copy-list-initialisation
````
`````{syntax-end}
`````

## Initialisers
There a different ways to initialise an object.

If an {term}`initialiser` is specified for an object, that initializer determines the initial value of an object.

An initialiser is just the syntax used to initialise the object. There are four syntactic styles for initialisers:

`````{code_example-start}
:label: examplem1
:class: dropdown
`````
````{code-cell} c++
:tags: [remove-output]
#include <iostream>
int main() {
    int myFirstInt { 5 };        // Direct-list-initialisation
    int mySecondInt = { 55.0 };  // Copy-list-initialisation
    int myThirdInt = 555;        // Initialisation 
    int myFourthInt (5555);      // Direct-initialisation 
    std::cout << myFirstInt << '\n' << mySecondInt << '\n' << myThirdInt << '\n' << myFourthInt << '\n';
    
    int a = 9, aa = 99, aaa = 999, aaaa = 9999;
    int myFirstInt2 { a };       // Direct-list-initialisation (initial value in braces)
    int mySecondInt2 = { aa };   // Copy-list-initialisation ('=' initial value in braces)
    int myThirdInt2 = aaa;       // Copy-initialisation  ('=' initial value)
    int myFourthInt2 ( aaaa );   // Direct-initialisation (initial value in parenthesis)
    std::cout << myFirstInt2 << '\n' << mySecondInt2 << '\n' << myThirdInt2 << '\n' << myFourthInt2;
    return 0;
}
````
Some of these terms are used very loosely and synonymously - care is required, particularly around the use of direct and copy.

In list-initialisation, 'direct' and 'copy' refer to the use of direct-initialisation and copy-initialisation type methods.

For most purposes the two list-initialisation methods will produce the same result. used in each case, being direct

Initialisation using a literal value is often called 'direct' initialisation too.
`````{code_example-end}
`````
## List-Initialisation

Initialization using `{}` is called {term}`list-initialisation` - usually the best choice because it can be used in every context you will encounter.

It is recommended that list initialisation is used for anything more complicated that a simple variable - even though not having the {term}`assignment operator` `=` may be a little disconcerting at first.

{term}`list-initialisation` does not permit {term}`narrowing` conversion. A narrowing (conversion) occurs when a value is converted from one type to another and the new type is not big enough to represent all possible values of the original type; leading to data loss or undefined behaviours.

List-initialisation ensures that:

* An `integer` cannot be converted to a `char`, but `char` to `int is permitted.
* a `double` cannot be converted to a `float`, but the reverse is permitted 
* A floating-point value cannot be converted to an integer type.
* An integer value cannot
`````{exercise-start}
:label: exercisem1
:class: dropdown
`````
The following code will not run as written. Look at the error messages and try to correct the problem.
````{code-cell} c++
:tags: [remove-output, skip-execution]
#include <iostream>
int main()
{
    int a = 9;
    double b = 7.77;
    int myFirstInt3 { b };       // Direct-list-initialisation
    int mySecondInt3 = { b };    // Copy-list-initialisation
    int myThirdInt3 = b;         // Copy-initialisation 
    int myFourthInt3 (b);        // Direct-initialisation
    std::cout << myFirstInt3 << '\n' << mySecondInt3 << '\n' << myThirdInt3 << '\n' << myFourthInt3;
    return 0;
}
````
````{solution} exercisem1
:class: dropdown
:label: solutionm1
Using `static_cast` forces an explicit conversion, which can be used to bypass the blocked narrowing conversion.

Try replacing `b` with:
```{code-block} c++
#include <iostream>
int main()
{
 static_cast<int>(b)
}
```
````
`````{exercise-end}
`````

## Empty Initialiser List - Value-Initialisation and Zero-Initialisation

If an object is initialised with an empty initialiser list `{}` it is first zero-initialised, and then value-initialised, if possible.

If the variable is a {term}`scalar` (arithmetic, pointer, or enum type) they are only zero-initialised.

Value-initialisation is initialisation to a default value, which is only possible for types that have a default-constructor. (Confusingly not the same as default-initialisation)
`````{code_example-start}
:label: examplem4
:class: dropdown
`````
````{code-cell} c++
:tags: [remove-output]
int myInt{}; // myInt initialised to 0
double myDouble{}; // myDouble initialised as 0.0
char* myPointerToChar{}; // myPointerToChar initialised as `nullptr`
std::vector<int> myVector{}; // myVector initialised as an empty vector
std::string myString{}; // myString initialised as ""
std::cout << myInt << '\t' << myDouble << '\t' << "12"+myString+"34" << '\t' << myVector.capacity() << '\t' << &myPointerToChar  << '\n';
````
```{exercise}
:class: dropdown
Try removing the empty initialiser for each variable type and rerunning the code - start in reverse order.

Explanation - most containers including vector and string have a default
```
`````{code_example-end}
`````

Most types have a default value:

* For integral types, the default value is a suitable representation of zero. 
* For pointers, the default value is `nullptr`. 
* For user-defined types, the default value (if any) is determined by the type's constructors.

For user-defined types, there can be a distinction between direct initialization (where implicit conversions are allowed) and copy initialization (where they are not).

The syntax `Type objectIdentifier()`; does not initialise an object; it declares a function that takes no arguments and returns `Type`. 

References cannot be value-initialised. If the initializer specified for an object is () the object is value-initialized. If the initializer specified for a reference is (), the program is ill-formed.

### Zero-initialization 

Initialisation of variable to the zero value of its type:

* Arithmetic variables: 0 (or 0.0, or 0.0000000000, etc.)
* Char variables: '\0'
* Pointers: `nullptr`.
* Arrays, classes, structs, and unions: all members initialized to a zero value.

Zero-initialisation is:
* The first step in value-initialisation.
* Performed at the start of the execution of every programme for all named variables that have {term}`static duration`.
* Used for arrays that have only a subset of their members initialized.

## Missing Initialisers - Default Initialisation

Default-initialisation refers to the way C++ handles initialisation when no initialiser has been specified.

The manner of default-initialisation depends on the entity. Objects can be default-initialized, but if no initializer is specified for a reference, the program is ill-formed.

The {term}`scalar` variables are simply left uninitialised - uninitialised primitive types have indeterminate values (unpredictable value that may depend on implementation).

However, when no initializer is specified, `global`, `namespace`, `local static`, or `static member` (static objects) are initialized using `{}` of the appropriate type. 

Classes will be initialised by their {term}`default-constructor` if they have one. Containers such as `string` and `vector` are classes, have default-constructors, and are {term}`default-initialised` as 'empty' i.e. `""` for a `string`, and `v.capacity() = 0` for a `vector`.

Global built-in type variables are default initialised to 0 – but you should not use global variables in the first place and '0' can be just as problematic as no value.

Class members would be iinitialised using any specified default values.

For example:

`````{code_example-start}
:label: examplem5
:class: dropdown
`````
When no initializer is specified, a `global`, `namespace`, `local static`, or `static member` (static objects) is initialized to `{}` of the appropriate type. For example:
````{code-cell} C++
:tags: [remove-output, skip-execution]
#include <iostream>
#include <string>
#include <vector>
#include <cassert>
int myGlobalInt{};
std::string myGlobalString{}; // class => default-initialization, the value is ""
int main()
{
    std::string myLocalString{};   // class => default-initialization, the value is ""
    assert(myLocalString == "");
    assert(myGlobalString == "");
    int myLocalInt{};       // scalar => zero-initialization, the value is 0 
    assert(myLocalInt == 0);
    assert(myGlobalInt == 0);
    double f = double();    // scalar => zero-initialization, the value is 0.0
    assert(f == 0.0);
    int* a = new int[10](); // array => value-initialization of each element
    assert(a[9] == 0);      //  the value of each element is 0
    std::vector<int> v(3);  // value-initialization of each element
    assert(v[2] == 0);      // the value of each element is 0
    std::cout << "No asserts! \n";
    delete[] a;
    return 0;
}
````
`assert` aborts the programmes execution and offers a message in the terminal if its user defined condition does not evaluate to `true`.

Useful during programme development - similar to {term}`print debugging`. 

````{exercise} exercisem1
:class: dropdown
Try removing the list-initialiser `{}` from the two `int` and two `string` type variables one at a time.
```{admonition} Code Explanation
:class: dropdown
The global `int` is default initialised, but the local one is left uninitialised because it has no default constructor.

The string does have a default constructor.
```
````

Constant variables must be declared together with an initializer. If they're scalar types they cause a compiler error, and if they're class types that have a default-constructor they cause a warning:

````{admonition} Effect of Missing Initialiser - Examples
:class: dropdown
Global and Static Variables
```{code-block} c++
`int eRest;` is equivalent to `int eRest{};`, and `eRest` is initialised to '0'.
`double U;` is equialent to `double U{};` so that `U` becomes '0.0'.
```
Local variables and objects created on the {term}`free store` are not initialised by unless they are of user-defined types with a default constructor. For example:
```{code-block} c++
int myInt; // myIntx does not have a well-defined value
char myBuffer[1024]; // myBuffer[i] does not have a well-defined value
int* myPointer{ new int }; // myPointer does not have a well-defined value
char* myOtherPointer{ new char[1024] }; // myOtherPointer[i] does not have a well-defined value
std::string myString; // myString == "" because of string's default constructor
std::vector<char> myVector; // v == {} because of vector's default constructor
std::string* myStringPointer{ new std::string }; // *myStringPointer is "" because of string's default constructor
std::cout << myInt << '\t'<< myBuffer[4] << '\t'<< &myPointer << '\t'<< myOtherPointer[8] << '\n';
return 0;
```
If you want initialization of local variables of built-in type or objects of built-in type created with `new`, use `{}`.
````
`````{code_example-end}
`````

## Initialiser Lists
More complicated objects can require more than one value as an initializer. This is primarily handled by initializer lists delimited by `{` and `}`. For example:
`````{code_example-start}
:label: examplem6
:class: dropdown
`````
````{code-cell} c++
:tags: [remove-output]
Try code here....
````
```{code-block} c++
#include <complex>
#include <numbers>
#include <vector>
#include <string>
int main()
{
    int myArray[] = { 1, 2 }; // array initializer
    struct MyStruct { int myInt; std::string myString; };
    MyStruct myStruct = { 1, "Helios" }; // struct initializer
    std::complex<double> myComplexNumber = { 0, std::numbers::pi }; // use constructor
    std::vector<double> myVector = { 0.0, 1.1, 2.2, 3.3 }; // use list constructor
}
```
In some cases, function-style argument lists can also be used. For example:
```{code-block} c++
std::vector<double> myVectrov(10, 3.3); // use constructor : v gets 10 elements initialized to 3.3
```
In a declaration, an empty pair of parentheses, (), always means "function". Therefore, if you want to be explicitly require "default initialization" you must use`{}`. 
```{code-block} c++
std::complex<double> z1(1, 2); // function-style initializer (initialization by constructor)
std::complex<double> f1(); // function declaration
std::complex<double> z2{ 1,2 }; // initialization by constructor to {1,2}
std::complex<double> f2{}; // initialization by constructor to the default value {0,0}
```
`````{code_example-end}
`````
## Auto
When defining a variable, it is not always necessary to explicitly state its type - although it is almost always better to do so.

In some cases, the ‘type’ might not be known ahead of time - the type can be deduced from the initializer using `auto`.

`````{code_example-start}
:label: examplem7
:class: dropdown
`````
````{code-cell} C++
:tags: [remove-output]
Try code here...
````
```{code-block} c++
auto a = true; // `true` or `false` are recognised as `bool` type
auto b = 'Y'; //  Single quotes are reserved to denote `char` type
auto c = 123; //   Number literal without the decimal point is interpreted to be an `int`
auto d = 1.2; //   a double - default for floating-point number
auto e = sqrt(f); // e has the type of whatever sqrt(f) returns
```
```{danger}
Be careful!! It is always wise to specify type and initialise immediately!

The type system is there for good reason.
```
When using `auto`, {term}`copy-initialisation` is acceptable because there can be no type conversion to cause unexpected issues; and in the case of initialiser-lists using `{}` list-initialization is actually problematic. 

The problem is trap is that if the initializer is a {}-list, we may not want its type deduced. For example:
```{code-block} c++
auto z1{ 99 }; // z1 is an initialiser_list<int> 
auto z2 = 99; // z2 is an int
```
`````{code_example-end}
`````
