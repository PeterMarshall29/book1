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

# Pointers
An {term}`object` in C++ is a region of memory holding a value. Each region of memory can also be identified by its {term}`memory address`.

The value of an object can be accessed using either its identifier, or its address. Reference to an object's address, instead of its value, can make a program more efficient, and access to memory addresses is useful for memory management.

A {term}`pointer1 stores only the memory address of another object - the value of a pointer is the memory address of the (first byte of the) object that the pointer is associated with, not the value of the object pointed at.

A pointer is itself an {term}`object` and therefore has a `type` and must be declared before use. 

`````{code_example-start} Pointers 
:label: examplev0
:class: dropdown
:nonumber:
`````
This program demonstrates the definition and use of a pointer.
````{code-cell} c++
:tags: [remove-output, skip-execution]
#include <iostream>
int main() {
    int* myPointerTo_myInt;
    int myInt = 5;
    myPointerTo_myInt = &myInt;
    std::cout << "The Value of myInt is " << myInt << '\n';
    std::cout << "The memory address of myInt is " << &myInt << '\n';
    std::cout << "The value of myPointerTo_myInt is " << myPointerTo_myInt << '\n';
    std::cout << "The contents (value) of the object (memory location) pointed to by myPointerTo_myInt is ";
    std::cout << *myPointerTo_myInt << '\n'; // separate line is only for readability
    *myPointerTo_myInt = 10;
    std::cout << "The modified contents of the object pointed to by myPointerTo_myInt is ";
    std::cout << *myPointerTo_myInt << '\n'; // separate line is only for readability
    std::cout << "myInt now has the value of: " << myInt; 
    return 0;
}
````

````{code_explanation} examplev0
:label: solutionv0
:class: dropdown
This is the declaration of a pointer.
```{code-block} c++
int* myPointerTo_myInt;
```
The `*` modifies the declaration to indicate that `myPointerTo_myInt` is a pointer to an integer variable i.e. the type of `myPointerTo_myInt` is `pointer to int`.

A pointer **only** contains the memory address of another object.

```{code-block} c++
myPointerTo_myInt = &myInt;
```
This line initialises the value of `myPointerTo_myInt` by copy assignment - the pointer now contains the memory address of `myInt`.

`&myInt` - evaluates to the memory address of `myInt` - i.e. `&myInt` = "memory address of `myInt`".
```{code-block} c++
std::cout << *myPointerTo_myInt << '\n'; 
```
`*myPointerTo_myInt` is the value of the object that the pointer points at, in this case the value of `myInt` - this is called dereferencing.

Note: the use of the `*` is different when attached to an existing pointer in comparison to when used in a declaration.

Dereferencing can also be used to modify the object pointed at - note the value of `myInt` was changed to '10'.
````
`````{code_example-end}
`````
Pointers are used extensively in C++ for three main purposes:
* Allocating new objects on the free store (the heap - dynamic memory managed by programmer).
* Passing functions to other functions.
* Iterating over the elements of arrays and similar data structures.
 
`````{syntax-start} Pointer Syntax
:class: dropdown
:nonumber:
`````
The basic syntax of pointers can be summarised as:
````{code-block} c++
:linenos:
type objectIdentifier = value; // Simple definition
type* pointerToIdentifier; // declaration of a new pointer
pointerToIndentifier = &objectIdentifier;   // assignment of the address of an object to the pointer
type secondObjectIdentifier = *pointerToIdentifier;  // assignment of the value of the object pointed at 
````

`*` has two distinct uses in C++ for pointers.
````{card}
Line 2: Attached postfix/suffix to a type in a pointer declaration, `*` is a {term}`unary` {term}`declarator-operator`, used to introduce the identifier of a pointer.

It is important to note that the declaration specifies that the pointer is to an object of the stated `type` - this type may not be changed, and the pointer may not be associated with any other type.
````
````{card}
Line 4: Attached prefix to an existing pointer's identifier, `*` is the {term}`dereferencing` operator or {term}`indirection` operator. 

The fundamental operation on a pointer is dereferencing, that is, referring to the object pointed to by the pointer. 

{term}`Dereferencing` or {term}`indirection` usually means returning the value of the object associated with the pointer. The prefix unary operator `*` before a pointer's identifier means "contents of" - i.e. the value of the object associated with the pointer. 

[More correctly - the indirection operator returns the identifier of the object pointed at, but since the identifier is immediately evaluated (the value is used) in most instances the above explanation is sufficient; the exception being in creating a reference.]
````
````{card}
Line 3: A prefix `&` is the `address-of` operator, which returns the hexadecimal literal representing the memory address of an object - specifically the address of first byte of the object. 

The prefix `&` operator with an operand (a variable name) is then used to create an expression which initialises the value of the pointer. [An address literal could be used instead]
````
```{note}
:class: dropdown
* A pointer's value is the address of the first byte of the memory location of the object pointed at.
* A pointer points to an object of a specified type.
* A pointer does not know how many elements it points to.
```

***
In declarations, the location of the `*` is often not important. 
```{code-cell} c++
:tags: [remove-output, skip-execution]
#include <iostream>
int main() {
    int myInt = 2025;
    int* test = & myInt;
    int * test1 = &myInt;
    int *test2 =& myInt;
    int* test3 =  test2;
    std::cout << test << '\n' << test1 << '\n' << test2 << '\n' << test3 << '\n';
    return 0;
}
```
For simple declarations attaching the `*` postfix to the type without whitespace may improve readability. 

The exceptions are declaring pointers to functions (covered below), or attempting to declare multiple pointers of the same type in a single declaration.

The prefix `*` for {term}`dereferencing` the pointer may also be separated by a whitespace, but again it is generally better to attach to the variale name.

Note that the value of a pointer can be copy assigned - e.g. `int* test3 =  test2;`

When used in declarations `*`, `&`, and `[]` are "declarator operators".

````{card}
To declare multiple pointers of the same type in a single line, the `*` must be repeated.
```{code-block} c++
int* pointer1, pointer2; //declares one pointer to an integer, and one integer.
int* pointer1, * pointer2: // declares two pointers
````
`````{syntax-end}
`````
## Pointers and Type

Each pointer points to an object of a specified `type`, so the pointer is said to be of type `pointer to 'type'`, e.g. a pointer to an `int` has the type `pointer to int`.

Although the pointer value is only a memory location, to ensure security in the type-system, it is not permitted to assign a declared pointer a value of a different type i.e. a pointer to an `int` cannot be assigned the address of a `double` - the compiler will not permit it.

`````{code_example-start} Introduction to Pointers 
:label: examplev1
:class: dropdown
:nonumber:
`````
This code shows examples of pointers to different types.
````{code-cell} c++
:tags: [remove-output, skip-execution]
#include <iostream>
#include <vector>
int main() {
        std::vector<double> myVector = { 5.9,8,1.1,2.3,4.5,5.6 };
        double* myPointerToMyVector;
        myPointerToMyVector = &myVector[3];  //Assigns address of 4th element to the pointer
        double temp = *myPointerToMyVector;
        std::cout << myPointerToMyVector << " - is the address of the object pointed to by the pointer. \n"; //prints the address of myVector
        std::cout << temp << " - is the value held at the memory address pointed at by the poitner. \n";  //prints the value of myVector[3]
        return 0;
}
````

````{code_explanation} examplev1
:label: explanationv1
:class: dropdown
For a type `T`, `T*` is of type 'pointer to object of type T', which is usually shortened to 'pointer to T' e.g. 'pointer to int', or 'pointer to double' etc. 

That is, a variable of type `T*` may only hold the address of an object of type `T`. 
````
`````{code_example-end}
`````

````{syntax-start} Advanced Pointer Syntax
:class: dropdown
:nonumber:
````
Unfortunately, pointers to arrays and pointers to functions need a more complicated notation:
```{code-block} c++
:linenos:
 int* ptrToInt;                     // Declares a pointer to an int
 char** ptrToPtrToChar;             // Declares a pointer to a pointer to a char
 int* arrayOfPtrs[9];               // Declares an array of 9 pointers to int's
 int (*ptrToArray)[2] = &myArray;   // Declare a pointer to an array of int's
 int (*ptrToMyFunction)(char*);     // Declares a pointer to a function that takes a pointer to a char as its argument and returns an int
 int* myFunction2(char*);           // Declares a function that takes a pointer to a char as its argument and returns a pointer to int.
``` 
Note the requirement for parentheses around the array and function identifiers in lines 4 and 5 - required to identify ownership of the `*` declarator.

***

Note that `==` compares addresses (pointer values) when applied to pointers, and not the values of the objects pointed at by the pointers.

***
Every value of pointer type is one of the following:
* A pointer to an object or function (in which case the pointer is said to point to the object or function).
* A pointer past the end of an object.
* The null pointer value for that type.
* An invalid pointer value.

***
A pointer that points to an object represents the address of the first byte in memory occupied by the object. 

A pointer past the end of an object represents the address of the first byte in memory after the end of the storage occupied by the object.

````{syntax-end}
````
## References

A reference is an {term}`alias` for an existing object or function i.e. a reference cannot be initialised until the referenced entity exists.

References are not objects - therefore, there cannot be arrays of references or pointers to references.

The reference aliases an existing object and is therefore not copy initialised, meaning that changes to the object it references are still accessible through the reference, whereas a copy-initialised variable knows nothing of the copied object after initialisation. Assigning a value to a reference is identical to assigning a value to the referenced object.

References cannot be redirected; they may only refer to one object, i.e. once initialised, a reference cannot be reseated (changed) to refer to another object.

References are initialised in the following situations:

* When a named lvalue reference variable is declared with an initialiser.
* When a named rvalue reference variable is declared with an initialiser.
* In a function call expression, when the function parameter has reference type.
* In the return statement, when the function returns a reference type. 
* When a non-static data member of reference type is initialised using a member initialiser.

`````{code_example-start} References
:label: examplev3
:class: dropdown
:nonumber:
`````
```{code-cell} c++
:tags: [remove-output, skip-execution]
#include <iostream>
int main() {
    double myDouble = 10.0;
    double& myReferenceTo_myDouble = myDouble;  // an alias/reference
    std::cout << "myDouble = " << myDouble << '\n';
    std::cout << "myReferenceTo_myDouble = " << myReferenceTo_myDouble << '\n';
    double* pointerTo_myDouble = &myDouble;
    double* pointerTo_myReferenceTo_myDouble = &myReferenceTo_myDouble;
    myReferenceTo_myDouble = 6.0;
    std::cout << "The contents of the object pointed to by pointerTo_myDouble = " << *pointerTo_myDouble << '\n';
    std::cout << "The contents of the object pointed to by pointerTo_myReferenceTo_myDouble = " << *pointerTo_myReferenceTo_myDouble << '\n';
    return 0;
}
```
Note: changing the value of the alias changes the value of the referenced variable, because the reference is just an alternative name for the same object.
`````{code_example-end}
`````

`````{syntax-start} References
:class: dropdown
:nonumber:
`````
An {term}`lvalue` reference is declared as follows.
````{code-block} c++
type& referenceIdentifier;
````

***
Rvalue references can be used to extend the lifetimes of temporary objects (note, lvalue references to const can extend the lifetimes of temporary objects too, but they are not modifiable through them).

An {term}`rvalue` reference is declared as follows.
````{code-block} c++
type&& referenceIdentifier;
````
***
References to `void` are not permitted.
`````{syntax-end}
`````

````{code_example-start} lvalue References
:class: dropdown
:nonumber:
````
Using lvalue references:
```{code-cell} c++
:tags: [remove-output, skip-execution]
:class: dropdown
#include <iostream>
#include <string>
int main()
{
    std::string myString = "Merry";
    std::string& reference1 = myString;
    std::string& reference2 = myString;
    reference1 += " Christmas";         
    reference2 += " FizzyCists!";               
    std::cout << reference1 << '\n'; 
    return 0;
}
```
Note: changing either reference changed the refernced object - in this case, both reassignments caused concatenation of an extra string to the current string held in the referenced object.
````{code_example-end}
````

````{code_example-start} rvalue References
:class: dropdown
:nonumber:
````
Using rvalue references:
```{code-cell} c++
:tags: [remove-output, skip-execution]
:class: dropdown
#include <iostream>
#include <string>
int main()
{
    std::string myString1 = "Hip, ";
    std::string&& reference1 = myString1 + myString1;      // rvalue reference extends lifetime of expression
    reference1 += "Hooray!";                    
    std::cout << reference1 << '\n';

    myString1 = "Whoop, ";
    std::cout << reference1 << '\n';
    return 0;
}
```
Note: the rvalue reference was not updated when the objects used to create it were changed, because an rvalue reference refers to the value of `myString1 + myString1` at the time of initialisation - i.e. it is a persistant copy of the temporary that was created by the evaluation of `myString1 + myString1` at the point of assignment.
````{code_example-end}
````

(Pointers and Arrays)=
## Pointer Arithmetic and Arrays

In C++, pointers and arrays are closely related. 

The name of an array can be used as a pointer to its initial element i.e. anywhere that a program might require a pointer object, the programmer may put the name of an array, because the array will be interpreted as a pointer to its first element. 

Arrays may not be passed by value because there is no copying assigment for arrays - i.e. a function parameter cannot have the array copied to it - arrays can only be passed by reference. 

Arrays are implicitly converted to a pointer to their first element in any context where an array is not expected but a pointer is permitted. This explains why arrays are always passed by reference: passing an array is really passing a pointer.

```{tip}
:class: margin
Pointer arithmetic is meaningless unless performed on an array.
```

### Pointer Arithmetic

Pointer arithmetic is used to move execution of the program to different elements of an array using subtraction and addition of integers on pointers. 

Adding an integer 'n' to a pointer produces a new pointer that points to the array element that is 'n' positions further along in memory.

`````{code_example-start} Pointer Arithmetic
:label: examplev2
:class: dropdown
:nonumber:
`````
Examine the following code that demonstrates Pointer Arithmetic:
````{code-cell} c++
:tags: [remove-output, skip-execution]
#include <iostream>
int main()
{
    int myArray[] = { 3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9 }; 
    int* myPtr = myArray;  //only works because it is an array!!
    std::cout << myPtr << '\n';
    std::cout << *myPtr << '\n';
    ++myPtr;
    std::cout << myPtr << '\n';
    std::cout << *myPtr << '\n';
    --myPtr;
    std::cout << myPtr << '\n';
    std::cout << *myPtr << '\n';
    int* myPtr2 = myArray + 7;
    std::cout << myPtr2 << '\n';
    std::cout << *myPtr2 << '\n';
    myPtr2 -= 7;
    std::cout << myPtr2 << '\n';
    std::cout << *myPtr2 << '\n';
    return 0;
}
````
```{exercise}
:class: dropdown
:nonumber:
Try adding and subtracting more integer values to one of the pointers or to `myArray` - why has `myArray` still been used after a named pointer was constructed to its first element?
```

Pointer arithmetic can be risky:
* Pointing to a non-existent object will crash a program.
* It is possible to point to an unrelated object that happens to be adjacent in memory.
`````{code_example-end}
`````

### Pointer Expressions and Arithmetic

A limited set of arithmetic operations can be performed on pointers. Pointers may be:
* Incremented or decremented by 1 using `++` or `--`.
* Be increased or decreased by addition on an integer, literal of variable, using `+=` or `-=` or the equivalent extended expressions.
* Subtracted from each other e.g. `ptr1-ptr2`

### Pointers into Arrays
`````{code_example-start} Pointer in Arrays
:label: examplev7
:class: dropdown
:nonumber:
`````
Run this code:
````{code-cell} c++
:tags: [remove-output, skip-execution]
#include <iostream>
int main() {
    int myArray[] = { 1, 2, 3, 4 };
    int* ptrTo_myArray = myArray; // pointer to initial element (implicit conversion)
    int* ptrTo_myArray2 = &myArray[0]; // pointer to initial element
    int* ptrTo_myArray3 = myArray + 4; // pointer to one-beyond-last element
    int* ptrTo_myArray4 = myArray + 2; // pointer to other elements
    std::cout << myArray << '\n';
    std::cout << ptrTo_myArray << '\n';
    std::cout << *ptrTo_myArray << '\n';
    std::cout << ptrTo_myArray2 << '\n';
    std::cout << *ptrTo_myArray2 << '\n';
    std::cout << ptrTo_myArray3 << '\n';
    std::cout << *ptrTo_myArray3 << '\n';
    std::cout << ptrTo_myArray4 << '\n';
    std::cout << *ptrTo_myArray4 << '\n';
}
````

````{code_explanation} examplev7
:label: explanationv7
:class: dropdown
Attempting to print an array to the output stream results in printing only the address of the first element.

It is worth noting how similar the memory addresses are - this is to be expected but is not guaranteed and easily missed. Check the final (rightmost) digits first when comparing memory addresses, the initial digits are likely to be very similar across elements of an array.

Taking a pointer to the element one beyond the end of an array is guaranteed to work, and is necessary for many algorithms, however, since such a pointer does not in fact point to an element of the array, it may not be used for reading or writing. 

```{exercise}
:class: dropdown
:nonumber:
Try adding `5` and then `6`, and then subtracting `1` to `myArray` in the assignment to `ptrTo_myArray3`.
```
The result of taking the address of the element before the initial element or beyond one-past-the-last element is undefined and should be avoided.
````
`````{code_example-end}
`````

## Nullptr

A pointer should always point at an object, otherwise dereferencing is not valid.

If there is no object to point at, or if it is useful to represent the idea that no object is available (e.g., for the end of a list), the pointer may be given the value `nullptr`. 

The literal `nullptr` represents the null pointer - and can be assigned to any named pointer which does not point at an object. `nullptr` can only be assigned to pointers - a syntax error occurs otherwise. There is only one `nullptr` shared by all pointer types, and therefore `Nullptr` is of type `pointer`. `nullptr` has a memory address consisting of all-zeros (hexadecimal code or bit pattern) that is not used for any other object.

`````{code_example-start} The Null Pointer
:label: examplev5
:class: dropdown
:nonumber:
`````
Using `nullptr`:
````{code-cell} c++
:tags: [remove-output, skip-execution]
#include <iostream>
#include <string>
int main() {
    int* ptrToInt = 0;  
    double* ptrToDouble = nullptr;   // intialises the new pointer to the 
    std::string* ptrToString = nullptr;
    int* ptrToInt2 = NULL; 
    std::cout << ptrToInt << '\t' << ptrToDouble << '\t' << ptrToString << '\t' << ptrToInt2 << '\n';
    return 0;
}
````
````{code_explanation} examplev5
:label: explanationv5
:class: dropdown
There is just one `nullptr`, which can be used for every pointer type, rather than a null pointer for each pointer type. `Nullptr` is of type `pointer`. 

Before `nullptr` was introduced, zero (0) was used as a notation for the null pointer; now assignment to integer literal zero gives a pointer the value `nullptr`. This is not obvious using Live Code, but if you try running the code in Visual Studio - rather than four zeros, you will find that `0000000000000000` is printed four times, each being the memory address of the `nullptr`.

No object is allocated with at memory address '0000000000000000', which is the most common representation of 'nullptr'. 

Zero (0) is an `int`. However, the standard conversions allow '0' to be used as a constant of 'pointer' or 'pointer-to-member' type.

It is best not to use `NULL` because it is an {term}`implementation` defined {term}`macro` and there may be difference in implementation, e.g. NULL might be 0 or 0L. 

Using `nullptr` makes code more readable than alternatives and avoids potential confusion when a function is overloaded to accept either a pointer or an integer.
````
***

````{code-cell} c++
:tags: [remove-output, skip-execution]
#include <iostream>
int main() {
    int* ptrToInt;
    std::cout <<  ptrToInt << '\n';
    std::cout << *ptrToInt << '\n';
    return 0;
}
````
```{exercise}
:class: dropdown
:nonumber:
What happens if we use an unitialised pointer? Most compilers will prevent this, but run the above code in the Live Code Editor..

Run the code several times - note the changing memory address.

Try changing the code to double* and std::string* - what happens?

Dereferencing an unitialised pointer is an {term}`undefined behaviour`.
```
***
````{code-cell} c++
:tags: [remove-output, skip-execution]
#include <iostream>
int main() {
    int* ptrToInt2 = nullptr;
    std::cout << ptrToInt2 << '\n';
    *ptrToInt2 = 10;
    std::cout << *ptrToInt2;
    return 0;
}
````
Dereferencing the `nullptr` is also an undefined behaviour - `nullptr` does not point to a valid memory location.

It is best to always check a pointer is not the `nullptr`. For example, as follows:

````{code-cell} c++
:tags: [remove-output, skip-execution]
#include <iostream>
int main() {
    int myInt = 5;
    int* myPointer = &myInt;    // change to = nullptr
    if (myPointer != nullptr) {
        std::cout << *myPointer;
    } else {
        std::cout << "Pointer is null!";
    }
    return 0;
}
````




`````{code_example-end}
`````
## Pointers and Booleans

A pointer can be implicitly converted to a `bool`. 

A non-null pointer converts to true; pointers with the value `nullptr` convert to `false`. 

`````{code_example-start} Pointers and Booleans
:label: examplev6
:class: dropdown
:nonumber:
`````
Examples of Pointers used as Booleans
````{code-cell} c++
:tags: [remove-output, skip-execution]
#include <iostream>
void myFunction(int* myPointer) {
    bool myBoolean1 = myPointer;            // Narrowing conversion to a Boolean - not a copy!
    std::cout << myBoolean1 << '\n';
    bool myBoolean2 {myPointer != nullptr}; // Initialised with the Boolean result of a comparison expression
    std::cout << myBoolean1 << '\n';
    if (myPointer) {
        std::cout << "Pointing to an Object" << '\n';
    } else { std::cout << "Pointing to the nullptr" << '\n'; }
}
int main() {
    int tempInt = 17;
    int* myPointerToTempInt = &tempInt;     
    myFunction(myPointerToTempInt);
    
    myPointerToTempInt = nullptr; 
    myFunction(myPointerToTempInt);
    return 0;
}
````
````{code_explanation} examplev6
:label: explanationv6
:class: dropdown
Note: when used on pointers, `==` and the other comparison operators compare their memory addresses, which are the values of the pointers - i.e. the value of the objects the point at are not being compared.

`if (myPointer)` is equivalent to `if (myPointer != nullptr)`. The compiler knows a Boolean is required and implicitly converts the pointer; obviating the comparison expression. 

It is usually better to use shorter code - fewer opportunities to make mistakes - and in this case we have a clear expression for tesing the validity of the pointer i.e. does it point at an actual object.
````
`````{code_example-end}
`````

## Pointers to Functions

Functions are also stored in memory and therefore have a unique address allowing us to define a pointer to a function in a similar manner to a pointer to an object. 

A pointer to function can be initialised with the address of a non-member function or a static member function. 

The pointer defined by assigning the address of a function can be used to call the function. 

Unlike functions, or references to functions, pointers to functions are objects and thus can be stored in arrays, copied, assigned, etc.

`````{syntax-start} Pointers to Functions
:nonumber:
:class: dropdown
`````
Declaring and Initialising a pointer to a function
```{code-block} c++
// Declaration:
returnType (*ptrToFunctionIdentifier)(List of type and name of parameters);
// Initialisation:
ptrToFunction = &exitingFunction;
//or equivalently,
ptrToFunction = exitingFunction;
```
Calling a function using a pointer:
```{code-block} c++
(*ptrToFunction)(arguments);
// or equivalently,
ptrToFunction(arguments);
```
`````{syntax-end}
`````
`````{code_example-start} Pointers to Functions
:label: examplev8
:class: dropdown
:nonumber:
`````
This code uses a pointer to a function to call the function.
````{code-cell} c++
:tags: [remove-output, skip-execution]
void messagePrinter(std::string s) {
    std::cout << s;
}
void (*ptrToMessagePrinter)(std::string); 

int main() {
    ptrToMessagePrinter = &messagePrinter;
    ptrToMessagePrinter("Warning!");
    return 0;
}
````
When a pointer is used in a function call, the compiler works out that it is a pointer, so dereferencing a pointer to function using `∗` is optional, i.e. `ptrToMessagePrinter("Warning!");` is the same as `(*ptrToMessagePrinter)("Warning!");`. 

Using `&` to get the address of a function is also optional; i.e. `ptrToMessagePrinter = messagePrinter;` would also work.

Pointers to functions have argument types declared just like the functions themselves. 

In pointer assignments, the complete function type must match exactly. 
`````{code_example-end}
`````
## New and Delete

The {term}`new` operator is used to allocate memory space on the {term}`free store`.
`````{code_example-start} New and Delete
:label: examplev9
:class: dropdown
:nonumber:
`````
Examples of using the `new` and `delete` keywords:
```{code-block} c++
int* pointerToInt = new int; // allocates dynamic memory for a single int - int determines size of memory
int* pointerToArrayOfInts = new int[5]; // Allocates an array of 5 `int` types
double* pointerToDouble = new double; // allocate one double
double* pointerToArrayOfDoubles = new double[number]; // allocates an array of 'number' of doubles
```
`````{code_example-end} 
`````

## Void* - Advanced Topic

In low-level code, it is sometimes necessary to store or pass along an address of a memory location without knowing the type of the object stored. 

`void*` is used for that purpose. `void*` is a 'pointer to an object of unknown type'.

Functions using `void*` pointers typically exist at the very lowest level of the system, where real hardware resources are manipulated. 
`````{code_example-start} Void
:label: examplev4
:class: dropdown
:nonumber:
`````
For example:
```{code-block} c++
void* myAlloc(size_t number);    // Allocate 'number' of bytes on the heap
```
Occurrences of `void*` at higher levels are likely to be design errors that need investigation. 

`void*` can be hidden behind a type-safe interface, when used for optimisation.

Pointers to functions and pointers to members cannot be assigned to `void*`.
`````{code_example-end}
`````

## This - Advanced Topic

`this` is only useful when dealing with classes, when it becomes a shorthand way of referring to the innermost enclosing class. 

The keyword `this` is used as an expression ({term}`prvalue`), being a built-in pointer, and the associated value can be accessed using `*this`.

`This` may only be used within:
* The body of an implicit object member function - a member initialiser list, and lambda expression body.
* The declaration of an implicit object member function.
* A default member-initialiser.
* The capture list of a lambda expression.


