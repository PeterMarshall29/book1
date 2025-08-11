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

# C++ Data Types

## Types and Declarations
For the compiler to make sense of the C++ code you have written, every named object must have a type, and be declared before use, and the types declared must have associate methods that match those used.

variable1 = variable2 + myFunction(variable3);

Only works if the named variable exist and of a type that is assignable and where the operator ‘+’ has meaning. 
‘=‘  is the assignment operator. Works for most but not simple arrays.
‘+’ is the addition operator for most numeric types and the concatenation operator for string type, but does nothing for char or bool types.

## Fundamental Types in C++

The fundamental types in c++ correspond to the most common basic storage units of a computer and the most common ways of using them to hold data; these are available from the core language:
The boolean type: bool.
The character types: char, wchar_t.
The integer types: int, long long; quite a few of them…
The floating-point types: double,long double.
void a type used to signify the absence of information.
The Boolean, character, and integer types are collectively called integral types. 
The integral and floating-point types are collectively called arithmetic types.

Other ‘built-in’ types, are constructed using declarator operators:
The pointer types : int*.
The simple array type: char[].
The reference type: double& and vector<int>&&.

User-defined types, must be defined before use by the user:
Structure types.
Class types. 
Enumeration types: enum and enum class.

## Introductory
Try to fix this code:

std::int age = 52;
std::string firstName = 12.0;
std::float = 12.5;

Strings are covered by the standard library, which is divided into those components needed

int float double char;
Are all in the core language and do not require a library file to be included.

Now try: 

int age = 58;
std::string firstName = "Peter";
float shoeSize = 10.5;
double c = 3.0e-8;
char example = 'p’;

Notice the single quotes for a char type, and one option for scientific notation.
Float is smaller than double – depends on bits of system – double precision floating point number.
Int has many qualifiers – Int can be dropped and the qualifier used on its own.

Variable Names cannot start with a number, contain a whitespace or special symbols – only letters, numbers and underscore are permitted.
Names are case sensitive – keep leading capitals for classes.
Never start with an underscore – it will work, but that pattern is reserved for implementation and system entities, so you risk clashing with something with the same name you did not expect.
Lastly keywords are protected and cannot be reused.

std::cout << "Please type your first name followed by your surname!\n"; 
std::string surname; 
std::cin >> surname;
std::cout << "Hello, " << surname << "!\n";
return 0;

The string input ends when a white space is detected, so TRY
The convention is that the reading of strings is terminated by any whitespace i.e. space, tab, or newline '\t', '\n'.

int age = 58;
std::cout << "Please type your first name followed by your surname!\n"; 
std::string firstName = "Peter";
std::string surname;       
std::cin >> firstName >> surname; //input before space to first variable and input after space to second variable 
std::cout << "Hello, " << firstName << " " << surname << ", you are " << age << " years old!\n";
return 0;

Now change to ask for an name followed by an age.
int age = 58;
std::string firstName = "Peter";
std::cout << "Please type your first name followed by your age!\n"; 
std::string surname; 
std::cin >> firstName >> age; 
std::cout << "Hello, " << firstName << " " << surname << ", you are " << age << " years old!\n";
return 0;
Respond with a name ‘whitespace’ age. Then try again but type in two names.
A string is not an integer – so is recorded as integral value 0. Older C++ version might give a random value such as -96738…. Unfortunately this overwrites an initial value if you have used one.
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



## Scope
A named object is declared “in scope”. A “scope” is a region of program text, e.g. inside a single function. The object is only valid within that region of the program unless it is defined to have “global scope”.
The main purpose of a scope is to keep names “local”, so that they won’t interfere with names declared elsewhere; i.e. same names can be used in different local scopes.

Try to always use indenting to reinforce scoping changes.
 
 
There are several kinds of scopes that we use to control where our names can
be used:
• The global scope: the area of text outside any other scope
• A namespace scope: a named scope nested in the global scope or in another namespace
• A class scope: the area of text within a class
• A local scope: between { . . . } braces of a block or in a function argument list
• A statement scope: e.g., in a for-statement

## Scoping Problems
You need to keep in mind the following rules:
A local variable will be used in preference to a global variable of the same name.
Variables cannot be accessed outside of their scope, loop variable, function parameters only exist inside their scope. Class and struct variables can be accessed by indexing in.
Make global variable have long detailed names.
Do not use global variables if possible, its hard to keep track of which functions may be altering their values.
The quality of a program is often said to be inversely proportional to the number of global variables as the index of an exponential – keep it to one or two at most.
 
Blocks: Blocks within functions (nested blocks) or other block have their own scope
Functions: Local or nested functions
Classes: Classes can have member classes; classes within another class, also called nested classes.
Local classes are those declared with in functions – best avoided – function is too long if it benefits from the use of a class.
A member definition can be outside its class, provided it is declared inside the class.

Inside: Void f(); // declaration
Outside: Void MyClassName::f() {} // the definition.

## Namespace
Namespace is a language feature exclusively used to express scoping.
Creating a namespace allows you to write sperate parts of a longer program without fear that the names used will not have been used elsewhere.
 
The standard library facilities are defined in namespace std, so to use them, you need an explicit qualification, a using declaration, or a using directive:

std::string s; // explicit qualification

using std::vector; // using declaration
vector<int>v(7);

using namespace std; // using directive
map<string, double> m; 
 
A member can be declared within a namespace definition and defined later using the namespacename :: member-name notation. Members of a namespace must be introduced using this notation:

namespace namespace−name {
	// declaration and definitions
}
namespace Parser {
	double expr(bool); // declaration
	double term(bool);
	double prim(bool);
}
double val = Parser::expr(1); // use
double Parser::expr(bool b) // definition
{
	// ...
}
 
std::string s;
//using std::vector;
using namespace std;
namespace Peter {
double piper(bool);
double pepper(bool) { return 5.0; }
}

double Peter::piper(bool) {
return 4.0;
}

