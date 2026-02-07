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
# Templates - Functions and Classes
Templates are used for generalisation and specialisation. 

Templates are used to create generic functions and classes i.e. functions and classes were the return and argument, or parameter, types are not declared in their definitions - this allows the same code logic to be used with different data types.

Templates are one of two main options for "generic" programming. The second option is to use class hierarchies and virtual functions.

Generic programming means writing code that works with a variety of types presented as arguments, provided the arguments’ types meet specific syntactic and semantic requirements. 

It is often that case that the same code logic needs to apply to different data types - rather than overload the function (writing multiple functions with the same identifier but different parameter/type lists- remember return types cannot differentiate overloads). 

At compile time a set of non-template functions and classes are generated.

The description of the template function begins with the keyword template, followed by a list of symbolic types in angle brackets. 
```{code-block} cpp
template <typename R, typename T, typename Q>
```
This is the template header. The function can start on the following line or continue after the header.

The identifier `T` is a placeholder for a generic type, which is called a **template parameter**.  Wherever a type name would normally be placed in a function definition, `T` may now be used. 

If the same type would be specified more than once, then `T` is just repeated. If a second or third type are required, then additional generic type names are required.

`T` is traditional in textbooks, and when more template parameters are required, they are traditionally capital letters, but any identifier may be used, for example:

```{code-block} cpp
template <typename FirstType, typename SecondType, typename AnotherType>
```
At compile time, every instance of a template parameter is replaced by a concrete type determined by the compiler, which are then used in the class instances, or when the function is called. 

The process of the compiler generating a class or function from the templates is called **template instantiation**.

`T&` may also be used to pass by reference etc.

If a single generic-type parameter is used more than once, then the supplied types much match.

``````{code_example-start} Function Templates 1
:label: exampleAC1
:class: dropdown
:nonumber:
``````
Template function example:
`````{code-cell} c++
:linenos:
:tags: [remove-output, skip-execution]
#include <iostream> 

// The template function: 
template<typename T> void myPrinter (T arg) {
    std::cout << arg << '\n';
}

int main() {
    myPrinter('A'); // Template function instantiated with char type argument 
    myPrinter(1);  // Template function instantiated with int type argument 
    myPrinter("String"); // Template function instantiated with std::string type argument 
    return 0;
}
`````

`````{code_explanation} exampleAC1
:label: explanationAC1
:class: dropdown
Whenever the `myPrinter()` function is called, `T` is determined by the type of the argument passed to the function, and the function is executed with this value of the template parameter.

Note: in older code, using older versions of the C++ standard,  `typename` is replaced by `class` .
```{code-block} cpp
:linenos:
template<class T> void myPrinter (T arg) {
    std::cout << arg << '\n';
}
```
`````
``````{code_example-end} 
``````

There are many ways to use **Template Functions**. In the next example, the function `myPrinter()` now prints the contents of an array.

``````{code_example-start} Function Templates 2
:label: exampleAC2
:class: dropdown
:nonumber:
``````
Template function using non-type template parameter example:
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

In this example a function has been defined that takes two arguments: a template parameter for the array type and an integer.

Because one of the arguments was expected to always be an integer, it was possible to explicitly define the second template parameter as an `int`. 

An explicitly defined type is often referred to as a **non-type template parameter**, because what is being specified is a value, rather than a generic type, although it might be more accurate to state that the type is predefined.

`````
``````{code_example-end} 
``````
Then we can extend this by adding the function `bubbleSorter()` that sorts the array using the **bubble** method. 

The crucial detail is that now the `bubbleSorter()` function calls the  `myPrinter()` function.

**Bubble Sort** is a simple sorting algorithm that repeatedly compares adjacent elements and swaps them if they are in the wrong order. This process continues until the array is sorted.
``````{code_example-start} Function Templates 3
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

Simple arrays are passed to functions as pointers to the first element, so everything said about pointers applies to arrays.

The first argument/parameter is of type `T*`, i.e. the argument will be a pointer to an unspecified type that is "hidden" behind `T`. 

It is the type of the array/pointer that is generic, the first argument cannot be other than a pointer.

I have used `myArray` as the identifier, to remind myself that this template function acts on an array, but the name is not important otherwise.

In this template example, `myArray` stands for an array, whose elements are of type `T`
`````
``````{code_example-end} 
``````

## Template Functions with Several Type Parameters

A template function can have several template type parameters.

``````{code_example-start} Function Templates 4
:label: exampleAC4
:class: dropdown
:nonumber:
``````
An example template functions with multiple template parameters:
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

By using a Template function, the types of the signatures of the functions passed to it do not need to be specified.

Note: if only one template parameter had been called - then the types for each instance would need to be the same.
`````
``````{code_example-end} 
``````

## Overloading Template Functions 
Several template functions may be created with the same identifier. 

For example, we could have a function called `myPrinter()` that takes one argument in one version but takes two arguments in a second version.
``````{code_example-start} Function Templates 5
:label: exampleAC5
:class: dropdown
:nonumber:
``````
An example of overloading template functions:
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

Note how the second version has two template parameters.
`````
``````{code_example-end} 
``````

## Instantiation
When a program containing templates is compiled, a separate version of the template function is created for each concrete type required, which is called template instantiation; each of these are called non-template functions.

## Explicit Type Specification

The type used by a template function or class can be specified explicitly by including the type in angle brackets after the function name or class type name. 

``````{code_example-start} Function Templates 6
:label: exampleAC6
:class: dropdown
:nonumber:
``````
For example, the three calls to `myPrinter` in example 1 above could be written as:
`````{code-block} c++
myPrinter<char>('A'); // Calls the template function using a character argument 
myPrinter<int>(1);  // Calls the template function using an integer argument
myPrinter<std::string>("String"); // Calls the template function using a string argument 
`````
`````{code_explanation} exampleAC6
:label: explanationAC6
:class: dropdown
This would be unnecessary in this simple example; the compiler can deduce the correct types from the arguments supplied.

Explicit Type specification is only required for Classes, or when there may be ambiguity.

`````
``````{code_example-end} 
``````

## Advice on using Templates
It is not advisable to start by writing a program with templates initially.

It is usually quicker to work with a working version of the program that has an overloaded function, i.e. one for each data type, and then replace the specified types with template parameters; this helps you avoid using some inbuild function that does not work, or behaves differently, for all the types you may consider.

Place all template definition in a header file. Every time the compiler reaches an instance of a template, it assesses both the template and its arguments, to determine what code to produce - this often requires the program to have a fully defined template everywhere it is used i.e. including member functions and any template functions they call. 

Keep templates as simple as possible.

Always test template programmes with all possibly types.

Use template-based libraries e.g. the C++ standard library, for generality, type safety, and performance.

## Practice
``````{exercise-start} Templates Exercise 1
:label: exerciseAC6
:class: dropdown
:nonumber:
``````
Create a family of functions to compare two values of `char`, `int`, `float`, and `double` types, and then return the larger value. Then replace the family of functions with a single template function.

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

int main() {
std::cout << "The greater of 'a' and 'B': " << greater('a', 'B') << '\n';
std::cout << "The greater of -1 and 1: " << greater(-1, 1) << '\n';
std::cout << "The greater of 3.14 and sqrt(10): " << greater(3.14, sqrt(10)) << '\n';
std::cout << "The greater of 9.100f and 9.11f: " << greater(9.100f , 9.11f) << '\n';
return 0;
}
`````

`````{solution} exerciseAC6
:class: dropdown
:label: solutionAC6
````{code-block} cpp
:linenos:
template<typename T> T greater (T first, T second) {
    if (first > second) {
        return first;
    }
    return second;
}
````
`````
````{admonition} Explicit type determination.
:class: dropdown
A call to `greater()` will throw an error if the two values submitted as arguments have different types. This can be avoided by telling the compiler to explicitly convert the two types as follows:
```{code-block} cpp
:linenos:
int main() {
std::cout << "The greater of 1.2f and 4 : " << greater<double>(1.0f, 4) << '\n';
return 0;
}
```

Obviously, this will have limited usefulness - the type in angle brackets tells the compiler to produce the concrete version of the function that uses two doubles.

Explicit type determination only works if the supplied values can by converted during the call.
````
``````{exercise-end} 
``````
``````{exercise-start} Templates Exercise 2
:label: exerciseAC7
:class: dropdown
:nonumber:
``````
Write a generic function that will swap two values passed by reference.
`````{code-cell} c++
:linenos:
:tags: [remove-output, skip-execution]
#include <iostream>
#include <string>

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
`````{solution} exerciseAC7
:class: dropdown
:label: solutionAC7
````{code-block} cpp
:linenos:
template <typename T> void mySwapFunction(T& first, T& second) {
    T temp = first;
    first = second;
    second = temp;
}

````
`````

``````{exercise-end} 
``````

## Class Templates

A class template is a construct that generates a class at compile time based on arguments the user supplies for the template parameters.

The key difference to function templates is that each instance of a class template must have explicit type specification.

``````{code_example-start} Function Templates 8
:label: exampleAC8
:class: dropdown
:nonumber:
``````
An example of overloading template functions:
`````{code-cell} c++
:linenos:
:tags: [remove-output, skip-execution]
#include <iostream> 
template <typename T>
class MyGenericArrayClass {
private:
    T* pointerToMyArray;
    int length;
public:
    MyGenericArrayClass(int initLength) : length(initLength) {
        pointerToMyArray = new T[length](); 
    }
    ~MyGenericArrayClass() {
        delete[] pointerToMyArray;
    }
    T& operator[](int index) {
        return pointerToMyArray[index];
    }
    int getLength() {
        return length;
    }
};

int main() {
    MyGenericArrayClass<int> intArray(10);
    intArray[0] = 12;
    intArray[4] = 36;
    std::cout << "Int Array elements: ";
    for (int i = 0; i < intArray.getLength(); ++i) {
        std::cout << intArray[i] << " ";
    }
    std::cout << '\n'; 
    MyGenericArrayClass<double> doubleArray(5);
    doubleArray[1] = 3.14;
    std::cout << "Double Array element at index 1: " << doubleArray[1] << '\n';
    return 0;
}
`````

`````{code_explanation} exampleAC8
:label: explanationAC8
:class: dropdown
Try removing the `<int>` or `<double>`.

`````
``````{code_example-end} 
``````
