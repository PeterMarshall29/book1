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
(templates)=
# Templates Functions and Classes.
Templates are used for generalisation and specialisation. 

Templates are used to create generic functions and classes i.e. functions and classes were the return and argument, or parameter, types are not declared in their definitions - this allows the same code logic to be used with different data types.

Templates are one of two main options for "generic" programming. The second option is to use class hierarchies and virtual functions.

Generic programming means writing code that works with a variety of types presented as arguments provided those arguments types meet specific syntactic and semantic requirements. 

It is often that case that the same code logic needs to applied to different data types -  rather than overload the function (writing multiple functions with the same identifier but different parameter/type lists- remember return types cannot differentiate  overloads). 

At compile time a set of non-template functions are generated.

The description of the template function begins with the keyword template, followed by a list of symbolic types in angle brackets. 
```{code-block} cpp
template <typename R, typename T, typename Q>
```
This is the template header. The function can start on the following line or continue after the header.

The identifier `T` is a placeholder for a generic type.  Wherever you would normally place a type name in a function definition, we can now use `T`. If the same type would be specified more than once, then `T` is just repeated. If a second or third type are required, then additional generic type names are required.
`T` is traditional in text books, but an identifier may be used, e.g.
```{code-block} cpp
template <typename FirstType, typename SecondType, typename AnotherType>
```
The actual type required is determined by the compiler and used when the function is called. We can also use T& to pass  by reference etc..
First example code
``````{code_example-start} Function Template Example
:label: exampleAC1
:class: dropdown
:nonumber:
``````
An example of virtual member functions:
`````{code-cell} c++
:linenos:
:tags: [remove-output, skip-execution]
#include <iostream> 

// The template function: 
template<typename T> void myPrinter (T arg) {
    std::cout << arg << '\n';
}

int main() {
    myPrinter('A'); // Calls the template function using a character argument 
    myPrinter(1);  // Calls the template function using an integer argument
    myPrinter("String"); // Calls the template function using a string argument 
    return 0;
}
`````

`````{code_explanation} exampleAC1
:label: explanationAC1
:class: dropdown

`````
Setters are only required if the data members will be altered after initialisation - often classes only have constructors.

An alternative to a getter would be a member function for printing to the terminal, or to file, if those are the only things done with the data.

``````{code_example-end} 
``````
Whenever we call the function, T is determined by the type of the argument passed to the function, and the function is executed with this value of the template parameter.

Note: in older code, using older versions of the standard,  typename is replaced by class.
```{code-block} cpp
:linenos:
template<class T> void myPrinter (T arg) {
    std::cout << arg << '\n';
}
```
There are more complicated and useful ways to use Template functions. 

In the next example, the function  `myPrinter()` now prints the contents of an array, and the function `bubbleSorter()` sorts the array using the **bubble**  method. The crucial detail is that now the `bubbleSorter()` function calls the  `myPrinter()` function.

Bubble Sort is a simple sorting algorithm that repeatedly compares adjacent elements and swaps them if they are in the wrong order. This process continues until the array is sorted.

Example 2
In this example we need to define a function that takes two arguments - but we expect one of those arguments to always be an integer, so we can explicitly define the second template parameter as an `int` - this is often referred to as a non-type template parameter, because what is being specified is a value, rather than a generic type, although it might be more accurate to state that the type is predefined.

Uses a template parameter for the array type and an integer.
``````{code_example-start} Function Template Example
:label: exampleAC2
:class: dropdown
:nonumber:
``````
An example of virtual member functions:
`````{code-cell} c++
:linenos:
:tags: [remove-output, skip-execution]
template<typename T> void myPrinter1(T* arrayName, int n) {
	std::cout << "Type of T is: " << typeid(T).name() << '\n';
	for (int i = 0; i < n; i++) {
		std::cout << arrayName[i] << " ";
	}
	std::cout << '\n';
}
template <typename T, int N> void myPrinter2(T (&arrayName)[N]) {
	std::cout << "Type of T is: " << typeid(T).name() << '\n';
	for (int i = 0; i < N; i++) {
		std::cout << arrayName[i] << " ";
	}
	std::cout << '\n';
}
int main() {
int myArray1[5] = { 1 , 2, 3, 4, 5 };
double myArray2[6] = { 1.2, 2.3, 3.4, 4.5, 5.6, 6.7 };
myPrinter1(myArray1,4);
myPrinter1(myArray2,3);
myPrinter2(myArray1);
myPrinter2(myArray2);
return 0;
}
`````

`````{code_explanation} exampleAC2
:label: explanationAC2
:class: dropdown

`````
Setters are only required if the data members will be altered after initialisation - often classes only have constructors.

An alternative to a getter would be a member function for printing to the terminal, or to file, if those are the only things done with the data.

``````{code_example-end} 
``````

``````{code_example-start} Function Template Example
:label: exampleAC3
:class: dropdown
:nonumber:
``````
An example of virtual member functions:
`````{code-cell} c++
:linenos:
:tags: [remove-output, skip-execution]
#include <iostream> 
// This template function prints an array
template<typename T1> void myPrinter2(T1* m, int n) {
    for (int i = 0; i < n; i++) {
        std::cout << m[i] << " ";
    }
    std::cout << '\n';
}
// This template function sorts an array: 
template<typename T2> void bubbleSort(T2* myArray, int n) { 
    myPrinter2(myArray, n);   // Prints the unsorted array
    T2 temp;    // temp variable needed for method, created with template type
    // Standard arrangement for bubble sort, using nest for statements
    for (int i = 1; i <= n - 1; i++) {
        for (int j = 0; j < n - i; j++) {
            if (myArray[j] > myArray[j + 1]) {
                // Swapping the values of the elements
                temp = myArray[j + 1];
                myArray[j + 1] = myArray[j];
                myArray[j] = temp;
            }
        }
    }
    myPrinter2(myArray, n);   // Prints the sorted array: 
}
// The main function of the program: 
int main() {
    int myArray1[5] = { 3,2,8,1,0 };   // A numerical array
    char myArray2[7] = { 'Z','B','Y','A','D','C','X' };    // Sorts the arrays: 
    bubbleSort(myArray1, 5);
    bubbleSort(myArray2, 7);
    return 0;
}
`````

`````{code_explanation} exampleAC3
:label: explanationAC3
:class: dropdown

`````
Setters are only required if the data members will be altered after initialisation - often classes only have constructors.

An alternative to a getter would be a member function for printing to the terminal, or to file, if those are the only things done with the data.

``````{code_example-end} 
``````
We pass simple arrays to functions as pointers to the first element, so everything we say about pointers applies to arrays.

The first argument/parameter is of type T*, i.e. the argument will be a pointer to a an unspecified type that is "hidden" behind T. It is the type of the array/pointer that is generic, the first argument cannot be other than a pointer. 

I have used myArray as the identifier, to remind myself that this template function acts on an array, but the name means nothing special.

In this template example, myArray stands for an array, whose elements are of type T.

## Template Functions with Several Parameters. 

A template function can have several template parameters.
Example 3. 
``````{code_example-start} Function Template Example
:label: exampleAC4
:class: dropdown
:nonumber:
``````
An example of virtual member functions:
`````{code-cell} c++
:linenos:
:tags: [remove-output, skip-execution]
#include <iostream> 
// A template function with two parameters, one function and one argument for that function 
template<typename T1, typename T2> T2 callFunctionWithValue(T2(*aFunction)(T1), T1 argumentForFunction) {
    return aFunction(argumentForFunction);
}

double myFirstFunction(double number) {
    return number * (1 - number);
}
int myFactorialFunction(int number) {
    if (number == 0) {
        return 1;
    }
    else {
        return number * myFactorialFunction(number - 1);
    }
}
char mySecondFunction(int number) {
    return 'A' + number;
}
int main() {
    std::cout << callFunctionWithValue(myFirstFunction, 0.8) << '\n';
    std::cout << callFunctionWithValue(myFactorialFunction, 6) << '\n';
    std::cout << callFunctionWithValue(mySecondFunction, 10) << '\n';
    return 0;
}
`````

`````{code_explanation} exampleAC4
:label: explanationAC4
:class: dropdown

`````
Setters are only required if the data members will be altered after initialisation - often classes only have constructors.

An alternative to a getter would be a member function for printing to the terminal, or to file, if those are the only things done with the data.

``````{code_example-end} 
``````
By using a Template function, the types of the signatures of the functions passed to it do not need to be specified.

Note: if only one template parameter had been called – then the types for each instance would need to be the same.

## Overloading Template Functions 
Several template functions may be created with the same identifier. For example we could have a function called myPrinter() that takes one argument in one version but takes two arguments in a second version.
``````{code_example-start} Function Template Example
:label: exampleAC5
:class: dropdown
:nonumber:
``````
An example of virtual member functions:
`````{code-cell} c++
:linenos:
:tags: [remove-output, skip-execution]
#include <iostream> 
// The version of the template function with one argument
template<typename T> void myPrinter(T x) {
	std::cout << "Function takes one argument:\n";
	std::cout << "First argument: " << x << '\n';
}
// The version of the template function with two arguments
template<typename T1, typename T2> void myPrinter(T1 x, T2 y) {
	std::cout << "Function takes two arguments:\n";
	std::cout << "First argument: " << x << '\n';
	std::cout << "Second argument: " << y << '\n';
}

int main() { 
	myPrinter('A');
	myPrinter(123);
	myPrinter("String");
	myPrinter(321, "String");
	myPrinter('B', 456);
	myPrinter('C', 'D');
	return 0;
}
`````

`````{code_explanation} exampleAC5
:label: explanationAC5
:class: dropdown

`````
Setters are only required if the data members will be altered after initialisation - often classes only have constructors.

An alternative to a getter would be a member function for printing to the terminal, or to file, if those are the only things done with the data.

``````{code_example-end} 
``````
Note how the second version has two template parameters.

## Instantiation
When a program containing templates is compiled, a separate version of the template function is created for each concrete type required, which is called template instantiation; each of these are called non-template functions.


## Advice on using Templates
Don't write a program with templates initially - start with a working version that has an overloaded function, i.e. one for each data type, and then replace the specified types with template parameters; this helps you avoid using some inbuild function that does not work, or behaves differently, for all the types you may consider.

Place all template definition in a header file.

Every time the compiler reaches an instance of a template, it assesses both the template and its arguments, in order to determine what code to produce – this ofter requires the program to have a fully defined template everywhere it is used i.e. including member functions and any template functions they call. It is therefore advisable to place all your templates in header files – so they Consequently, template writers tend to place template definitions in header files – not strictly required, but certainly better when the template is required by more than one translation unit. 
Keep templates as simple as possible.
Always test template programmes with all possibly types.
Use template based libraries – e.g. the C++ standard library, for generality, type safety, and performance.

## Problems using templates

The great flexibility and more optimal performance afforded to the programmer by templates do come with some drawbacks. The biggest problem is the poor separation between the inner working of the template (the definition) and the interface (the declaration), which manifests itself in poor error diagnostics, with concomitantly unhelpful error message, that are often produced at a much later point in the compilation process than would be helpful.
1.	If a single generic type parameter is used more than once, then the supplied types much match

Making template parameters more specific i.e. less generic, to increase safety.
C++14 provides a mechanism for vastly improved checking of template inter faces. For example, in C++11 we write template class vector { // . . . }; // for all types T We cannot precisely state what is expected of an argument type T. The standard says what these requirements are, but only in English, rather than in code that the compiler can understand. We call a set of requirements on a template argument a concept. A template argument must meet the requirements, the concepts, of the template to which it is applied. For example, a vector requires that its elements can be copied or moved, can have their address taken, and be default constructed (if needed). In other words, an element must meet a set of requirements, which we could call Element. In C++14, we can make that explicit: template requires Element() class vector { // . . . }; // for all types T // such that T is an Elemen

## Practice
``````{code_example-start} Practice Example 1
:label: exampleAC6
:class: dropdown
:nonumber:
``````
Create a family of functions to compare two values, of char, int, float, and double types, and then return the larger value. Then replace the family of functions with a single template function.
`````{code-cell} c++
:linenos:
:tags: [remove-output, skip-execution]
#include <iostream>
char greater (char first, char second) {
	if (first > second) {
		return first;
	}
	return second;
}
int greater(int first, int second) {
	if (first > second) {
		return first;
	}
	return second;
}
float greater(float first, float second) {
	if (first > second) {
		return first;
	}
	return second;
}
double greater(double first, double second) {
	if (first > second) {
		return first;
	}
	return second;
}
int main() {
std::cout << "The greater of 'a' and 'B': " << greater('a', 'B') << '\n';
std::cout << "The greater of -1 and 1: " << greater(-1, 1) << '\n';
std::cout << "The greater of 3.14 and sqrt(10): " << greater(3.14, sqrt(10)) << '\n';
std::cout << "The greater of 9.100f and 9.11f: " << greater(9.100f , 9.11f) << '\n';
return 0;
}
`````

`````{code_explanation} exampleAC6
:label: explanationAC6
:class: dropdown

`````
Setters are only required if the data members will be altered after initialisation - often classes only have constructors.

An alternative to a getter would be a member function for printing to the terminal, or to file, if those are the only things done with the data.

``````{code_example-end} 
``````
```{code-block} cpp
:linenos:
template<typename T> T greater (T first, T second) {
	if (first > second) {
		return first;
	}
	return second;
}
```
Explicit type determination.
A call to greater() will through an error if the two values submitted as arguments have different types. This can be avoided by telling the compiler to explicitly convert the two types as follows:
```{code-block} cpp
:linenos:
int main() {
std::cout << "The greater of 1.2f and 4 : " << greater<double>(1.0f, 4) << '\n';
return 0;
}
```
Obviously this will have limited usefulness – the type in angle brackets tells the compiler to produce the concrete version of the function that uses two doubles – this only works if the supplied values can by converted during the call.



``````{code_example-start} Practice Example 2
:label: exampleAC7
:class: dropdown
:nonumber:
``````
Write a generic function that will swap two values passed by reference.
`````{code-cell} c++
:linenos:
:tags: [remove-output, skip-execution]
#include <iostream>
#include <string>

template <typename T> void mySwapFunction(T& first, T& second) {
	T temp = first;
	first = second;
	second = temp;
}
int main() {
	int myFirstInteger = 10;
	int mySecondInteger = 13;
	double myFirstDouble = 22.22;
	double mySecondDouble = 44.44;
	std::string myFirstString = " fish ";
	std::string mySecondString = " fingers ";
	std::cout << "After swapping " << myFirstInteger << " and " << mySecondInteger << ", ";
	mySwapFunction(myFirstInteger, mySecondInteger);
	std::cout << "we get: " << myFirstInteger << " and " << mySecondInteger << ". \n";
	std::cout << "After swapping " << myFirstDouble << " and " << mySecondDouble << ", ";
	mySwapFunction(myFirstDouble, mySecondDouble);
	std::cout << "we get: " << myFirstDouble << " and " << mySecondDouble << ". \n";
	std::cout << "After swapping " << myFirstString << " and " << mySecondString << ", ";
	mySwapFunction(myFirstString, mySecondString);
	std::cout << "we get: " << myFirstString << " and " << mySecondString << ". \n";
	return 0;
}
`````

`````{code_explanation} exampleAC7
:label: explanationAC72
:class: dropdown

`````
Setters are only required if the data members will be altered after initialisation - often classes only have constructors.

An alternative to a getter would be a member function for printing to the terminal, or to file, if those are the only things done with the data.

``````{code_example-end} 
``````

## Class Templates

Copied from micosoft
A class template can inherit all the constructors from a type argument if that type specifies a base class:

```{code-block} cpp
:linenos:
template< typename T >
class DerivedClass : T {
    using T::T;   // declare the constructors from T
    // ...
};
```
A deriving class can't inherit from multiple base classes if those base classes have constructors that have an identical signature.


