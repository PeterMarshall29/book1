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

# Arrays in C++

All computing languages use containers to collect multiple elements together into a single object, e.g. collecting a list of 5 numbers under a single variable named 'myList'.

An array is the C++ fundamental method for representing a sequence of objects in memory, part of the core language.

For a simple fixed-length sequence of objects, all the same given type in memory, an array is the ideal solution. However, these built-in arrays do no not offer sufficient flexibility and typically programmers prefer to use standard library containers such as `vector`.

Arrays can be constructed from any of the fundamental types, including pointers, classes and enumerations - but not from references or functions.

The number of elements in an array is fixed at declaration, and the values are fixed at initialisation.

Arrays may not be copied, or used to initialise other arrays, or passed into functions as values.

`````{syntax-start} Syntax of C++ Array
:nonumber:
:class: dropdown
`````
An array declaration is any simple declaration whose declarator has the form:
```{code-block}
type arrayName[...number of elements...];
```
The number of elements of an array is called the array bound - which must be an integer literal, or a `const int` expression that evaluates to greater than zero and is not optional in a declaration.

For a type `T`, `T[N]` is of type 'array of N elements of type T'. e.g. int myArray[10], has the type 'array of 10 int's' - often just 'int array'.

Note: The type may not be pointer or reference types. To make an array of pointers parentheses must be used see {ref}`Pointers and Arrays`.

Advanced - an attribute may be added after the square brackets - not covered here.


An array definition may take several forms:
```{code-block}
type arrayName[...number of elements...] = {val1, val2, val3};

type arrayName[] = {val1, val2, val3};
```
The number of elements may only be left blank for list initialisation in the definition.

`````{syntax-end}
`````
`````{code_example-start} Arrays
:class: dropdown
:nonumber:
`````
Creating an array.
````{code-cell} c++
:tags: [remove-output, skip-execution]
:linenos:
#include <iostream>
int main() {
    int myIntArray[] = { 1, 2, 3, 4 };
    char myCharArray[] = { 'a', 'b', 'c', 0 };
    char myCharArray2[2] = { 'a', 'b' };   
    char myCharArray3[3] = { 'a', 'b', 0 };   
    int myIntArray2[8] = { 1, 2, 3, 4 };
    int myIntArray3[] = { 1, 2, 3, 4 , 0, 0, 0, 0 };

    std::cout << myIntArray << '\n';
    std::cout << (myIntArray2 == myIntArray3) << '\n';
}
````
````{code_explanation} Arrays
:class: dropdown

An array can be initialized by a list of values.

When an array is declared without a specific size, but with an initializer list, the size is calculated by counting the elements of the initializer list. 

Consequently, `myIntArray` and `myCharArray` are of type `int[4]` and `char[4]`, respectively. 

If a size is explicitly specified, it is an error to give surplus elements in an initialiser list.

If the initializer supplies too few elements for an array, 0 is used for the rest, therefore `myIntArray2` is equivalent to `myIntArray3`.

An array cannot be sent to the character stream - what is printed is the address of the first element of the array - see pointers.

When two arrays are compared - it is the address of the first element that is compared.

````

````{exercise} Arrays 1
:class: dropdown
:nonumber:
Try adding an extra element to one of the initialisers.

Try comparing element 7 (the last element) of both myIntArray2 and myIntArray3

Add the following to the live code cell above.
```{code-block} c++
std::cout << myIntArray2[7] << '\t' << myIntArray3[7] << '\t' << (myIntArray2[7] == myIntArray3[7]) << '\n';
```
````
````{code_explanation} Accessing_Elements
:class: dropdown

The individual elements of an array are accessed using the subscript operator `[]`.

The element indexes run from '0' to '(number of elements) - 1'.

Access out of the range of an array is undefined and usually disastrous. Run-time range checking is neither guaranteed nor common. 

Comparison of two indexed elements of an array compares the values.

Objects of array type cannot be modified as a whole: even though they are lvalues (e.g. an address of array can be taken), they cannot appear on the left-hand side of an assignment operator.
````
This code will not work.
````{code-cell} c++
:tags: [remove-output, skip-execution]
#include <iostream>
int main() {
    int myArray1[3];
    int myArray2[3];
    int myArray3[] = { 1,2,3 };
    myArray1 = { 4,5,6 };           // No array assignment
    myArray2 = myArray3;            // No array copy    
    int myArray4[] = myArray3;          // no array copy
}
````
````{code_explanation} Modifying_Elements
:class: dropdown
There is no array assignment.

There is no built-in copy operation for arrays, one array cannot therefore be initialised using another array (not even of the same type).

If the array is not initialised, then values can still be added one at a time using their index - which can be done in a loop to add multiple values.

Try this code instead - print out the values of myArray1.
```{code-block} c++
int main() {
    int myArray1[3];
    myArray1[0] = 4 ;
    
    for (int i = 1; i < 3; ++i) {myArray1[i] = i + 4;}
    return 0;
}
```
````

`````{code_example-end}
`````

```{Admonition} Limitations of Arrays
:class: dropdown
The C++ built-in array is an inherently low-level facility that should primarily be used inside the implementation of higher-level, better-behaved, data structures.

When you need assignment to a collection of objects, use a `vector`, an `array`, or a `valarray` instead.

Arrays may not be copied or used to initialise another array.

Arrays may not be used as function arguments because they are implicitly converted to a pointer - the root cause of many common errors.

Arrays cannot be passed by value, there is no array assignment. When you need assignment to a collection of objects, use a `vector`, an `array`, or a `valarray` instead.

An array of characters can be conveniently initialized by a string literal.
 
```
```{note}
:class: dropdown
One of the most widely used kinds of arrays is a zero-terminated array of char, often called a 'C-style string' because this is the way the C language stores strings. 

C++ string literals follow that convention, and some standard-library functions (e.g., `strcpy()` and `strcmp()` )rely on it. 

Often, a `char*` or a `const char*` is assumed to point to a zero-terminated sequence of characters.
```


````{code_example} Allocation of Arrays
:nonumber:
:class: dropdown
An array can be allocated statically, on the stack, and on the free store. For example:
```{code-block} c++
int myArray[10];    // 10 ints in static storage
void f()
{
int myArray2[20];       // 20 ints on the stack
int* ptrToArray = new int[40];   // 40 ints on the free store
}
```
````
## Array-to-pointer decay
There is an implicit conversion from lvalues and rvalues of array type to rvalues of pointer type: it constructs a pointer to the first element of an array. 

This conversion is used whenever arrays appear in context where arrays are not expected, but a pointer is accepted.

When array-to-pointer decay is applied, a multidimensional array is converted to a pointer to its first element; array-to-pointer decay is applied only once.

## Passing Arrays
Arrays cannot be passed by value i.e. they may not be used as arguments in a function call. 

Instead, an array is passed as a pointer to its first element.

`````{code_example-start} Arrays
:class: dropdown
:nonumber:
`````
Example of passing a pointer to an array
```{code-block} c++
void myFunction(double array[10]) {  // array is a double*
    for (int i = 0; i != 10; ++i) array[i] += 99;
}

int main() {
    double array1[10];
    double array2[7];
    double array3[20];
    myFunction(array1);
    myFunction(array2); 
    myFunction(array3); 
    return 0;
}
```
This code compiles and runs but contains logic errors. 

The call `myFunction(array2)` will write beyond the bounds of array2 and the call `myFunction(array3)` will only use the first 10 elements. 

It may seem like we passed array1,2,3 by value to the function, but in fact a pointer to the first element is what has been passed in.

The function could equivalently have been written as
```{code-block} c++
void myFunction(double* array) {
    for (int i = 0; i != 10; ++i) array[i] += 99;
}
```
When used as a function argument, the first dimension of an array is simply treated as a pointer - Any array bound specified is ignored. 

If you want to pass a sequence of elements without losing size information, you should not pass a built-in array. Instead, you can place the array inside a class as a member (as is done for `std::array`) or define a class that acts as a handle (as in `std::string` or `std::vector`).

`````{code_example-end}
`````

## Multidimensional Arrays

Multidimensional Arrays can also be created - A 2D array is an array of arrays.

````{syntax-start} Multidimensional Arrays
:class: dropdown
:nonumber:
````
Syntax for declaration of higher dimensional arrays.
```{code-block} c++
type arrayIdentifier[numberOfArrays][numberOfElementsInEachArray];

type arrayIdentifier[numberOfArraysOfArrays][numberOfArrays][numberOfElementsInEachArray];
```
This is not limited to 3D.

Although not strictly accurate, for 2D - the first index is often treated as the number of rows and the second number as the number of columns in a matrix arrangement.
````{syntax-end}
````
`````{code_example-start} Multidimensional Arrays
:class: dropdown
:nonumber:
`````
Example of declaring and using multidimensional arrays.
````{code-cell} c++
:tags: [remove-output, skip-execution]
#include <iostream>
int main() {
    int my2DAarray[2][4];
    int my3DArray[2][4][8];
    std::cout << "Size of my2DAarray: " << sizeof(my2DAarray) << " bytes" << '\n';
    std::cout << "Size of my3DArray: " << sizeof(my3DArray) << " bytes";
    return 0;
}
````
There are two methods for initialising a 2D array using initialiser lists.

Method 1: Put all the values for the elements in a single initialiser.  
```{code-block} c++
int myArray[2][4] = { 0, 1, 2, 3, 4, 5, 6, 7 };
```
The total number of elements is 8 - 2 arrays of 4 elements each (2 rows and 4 columns). The elements are added sequentially until they fill the first array and then move onto the next array (or one row at time i.e. the first 4 elements are placed in the first row etc.).

Method 2: Nested initialiser. 
```{code-block} c++
int myArray2[2][4] = { {0, 1, 2, 3}, {4, 5, 6, 7} };
```
Generally considered a better way to initialise a 2D array - each nested list represents the elements of a single array and the number of nested lists represents the number of columns.

***
Multidimensional Arrays can also be populated using the subscript operator - for two dimensional, both subscripts must be specified.

This is exemplified in the following code example which shows initialisation of a 2D array using a pair of nested for-loops.

````{code-cell} c++
:tags: [remove-output, skip-execution]
#include <iostream>
int main() {
    int myArray[2][4];
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 4; j++) {
            myArray[i][j] = j + 4 * i;
        }
    }
    for (int i = 0; i < 2; i++) {
        std::cout << "{ \t";
        for (int j = 0; j < 4; j++) {
            std::cout << myArray[i][j] << '\t';
        }
        std::cout << " } \n";
    }

    return 0;
}
````
3D requires 3 nested loops etc.
`````{code_example-end}
`````
## Empty Arrays - Advanced

The size of an array cannot be changed after it is declared. 

In cases where the size of the array is not determined until run time, but you need a placeholder to avoid uninitialized pointers.

````{code_example-start} Empty Arrays
:class: dropdown
:nonumber:
````
Working with empty arrays.
```{code-block} c++
int* myArray = new int[0];      // Create empty array
delete[] myArray;               // Only delete when pointer is no longer required
myArray = new int[..size..];    // Create required version
````
If you allocate an array on the free store, be sure to delete[] its pointer once only and only after its last use.

Accessing elements of an array with zero size is undefined and must be avoided.

There are also instances where an array might be needed to satisfy a requirement - this avoids the `nullptr`, since an empty array still has a valid pointer.
````{code_example-end}
````
