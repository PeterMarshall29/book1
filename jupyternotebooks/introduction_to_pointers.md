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

Access to a memory address is useful for memory management, and reference to an object's address instead of its value can make a program more efficient.

The value of an object can be accessed by either its identifier, or by its address.

A {term}`pointer stores only the memory address of another object - the value of a pointer is the memory address of the (first byte of the) object that the pointer is associated with, not the value of the object pointed at.

A pointer is itself an {term}`object`, that has a `type` and must be declared before use. 


`````{code_example-start} Pointers 
:label: examplev0
:class: dropdown
:nonumber:
`````
This code demonstrates the definition and use of a pointer.
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
    std::cout << "The contents (value) of the object (memory location) pointed to by myPointerTo_myInt is " << *myPointerTo_myInt << '\n';
    return 0;
}
````
````{code_explanation} examplev0
:label: solutionv0
:class: dropdown
This is the declaraton of a pointer.
```{code-block} c++
int* myPointerTo_myInt;
```
A pointer only contains a memory address of another object.

`&myInt` The prefix unary ampersand creates an expression that returns the hexadecimal code for the memory address of `myInt` - i.e. `&myInt` = address of `myInt`.

```{code-block} c++
myPointerTo_myInt = &myInt;
```
Initialises the value of `myPointerTo_myInt` by copy assignment - the pointer now contains the memory address of `myInt`.
```{code-block} c++
std::cout << "The contents (value) of the object (memory location) pointed to by myPointerTo_myInt is " << *myPointerTo_myInt << '\n';
```
`*myPointerTo_myInt` is the value of the object that the pointer points at, in this case the value of `myInt` - this is called dereferencing.
````
`````{code_example-end}
`````

 
`````{syntax-start} Pointer Syntax
:class: dropdown
:nonumber:
`````
The basic syntax of pointers can be summarised as:
````{code-block} c++
:linenos:
type objectIdentifier = value; // Simple definition
type* pointersIdentifier; // declaration of a new pointer
pointersIndentifier = &objectIdentifier;   // assignment of the address of an object to the pointer
type secondObjectIdentifier = *pointerToIdentifier;  // assignment of the value of the object pointed at 
````

`*` has two distinct uses in C++ for pointers.

Line 2: Attached postfix/suffix to a type in a pointer declaration, `*` is a {term}`unary` {term}`declarator-operator`, used to introduce the identifier of a pointer.

It is important to note that the declaration specifies that the pointer is only to an object of the stated `type`.

Line 4: Attached prefix to an existing pointer's identifier, `*` is the {term}`dereferencing` operator or {term}`indirection` operator. 

The fundamental operation on a pointer is dereferencing, that is, referring to the object pointed to by the pointer. 

{term}`Dereferencing` or {term}`indirection` usually means returning the value of the object that the pointer points at. The prefix unary operator `*` before a pointer's identifier means "contents of" - i.e. the value of the object associated with the pointer. 

[More correctly - the indirection operator returns the identifier of the object pointed at, but since the identifier is immediately evaluated (the value is used) in most instances the above explanation is sufficient. The exception being in creating a reference]

Line 3: A prefix `&` is the `address-of` operator, which returns the hexadecimal literal representing the memory address of an object - specifically the address of first byte of the object. 

The prefix `&` operator is then used to initialise the value of a pointer. [An address literal could be used instead]

```{note}
* A pointer's value is the address of the first byte of the memory location of the object pointed at.
* A pointer points to an object of a specified type.
* A pointer does not know how many elements it points to.
```

***
The location of `*` is not important but cannot be used to create multiple pointers – Try this and see where the errors arise.
```{code-cell} c++
:tags: [remove-output, skip-execution]
#include <iostream>
int main() {
    int myInt = 2025;
    int* test = & myInt;
    int * test1 = &myInt;
    int *test2 =& myInt;
    int* test3 =  test2;
    std::cout << test << '\t' << test1 << '\t' << test2 << '\t' << test3 << '\n';
    return 0;
}
```
Its best to attach the `*` postfix to the type in the declaration - and keep the prefix `*` for {term}`dereferencing` the pointer.

Note that the value of a pointer can be copy assigned - `int* test3 =  test2;`

When used in declarations `*`, `&`, and `[]` are "declarator operators".

`````{syntax-end}
`````
## Pointers and Type

Each pointer points to an object of a specific type, so the `type` of the pointer is said to have type `pointer to 'type'` e.g. a pointer to an `int` has the type `pointer to int`.

Although the pointer value is only a memory location - it is not permitted to assign a declared pointer a value of a different type.

`````{code_example-start} Introduction to Pointers 
:label: examplev1
:class: dropdown
:nonumber:
`````
This code shows examples of pointers to different types.
````{code-cell} c++
:tags: [remove-output, skip-execution]
??? Add some directives here???
int main() {
        std::vector<double> myVector = { 5.9,8,1.1,2.3,4.5,5.6 };
        double* myPointerToMyVector;
        myPointerToMyVector = &myVector[3];  //Assigns address of 4th element to the pointer
        double temp = *myPointerToMyVector;
        std::cout << myPointerToMyVector << " - is the address of the object pointed to by the pointer. \n"; //prints the address of myVector
        std::cout << temp << " - is the value held at that address pointed at. \n";  //prints the value of myVector[3]
        return 0;
}
````

````{code_explanation} examplev1
:label: explanationv1
:class: dropdown
For a type `T`, `T*` is of type 'pointer to object of type T', which is usually shortened to 'pointer to T' e.g. 'pointer to int', or 'pointer to double' etc.. 

That is, a variable of type `T*` can hold the address of an object of type `T`. 
````
`````{code_example-end}
`````


````{syntax-start} Advanced Pointer Syntax
:class: dropdown
:nonumber:
````
Some more examples of Pointer Syntax
```{code-block} c++
int main() {
    int* ptrToInt;                  // Declares a pointer to (an) int
    char** ptrToPtrToChar;          // Declares a pointer to a pointer to char
    int* arrayOfPtrs[9];            // Declares an array of 9 pointers to int’s
    int (*ptrToMyFunction)(char*);  // Declares a pointer to a function that takes a pointer to a char as its argument and returns an int
    int* myFunction2(char*);        // Declares a function that takes a pointer to a char as its argument and returns a pointer to int.
}
``` 
Note that `==` compares addresses (pointer values) when applied to pointers, and not the values pointed to.

The `*`, meaning "pointer to", is used as a suffix for a `type` name. 

Unfortunately, pointers to arrays and pointers to functions need a more complicated notation:

Every value of pointer type is one of the following:
* A pointer to an object or function (in which case the pointer is said to point to the object or function)
* A pointer past the end of an object
* The null pointer value for that type
* An invalid pointer value

A pointer that points to an object represents the address of the first byte in memory occupied by the object. 

A pointer past the end of an object represents the address of the first byte in memory after the end of the storage occupied by the object.

Note that two pointers that represent the same address may nonetheless have different values.


````{syntax-end}
````
## References

A reference is an alias for an already existing object or function i.e. a reference cannot be initialised until the referred to entity exists.

Reference are not objects - therefore there cannot be arrays of references or pointers to a reference.

The reference aliases an existing object so it is not copy initialised, meaning that changes to the object it references are still accessible through the reference, whereas a copy is unconnected after initialisation.

References cannot be redirected; they may only refer to one object, i.e. once initialized, a reference cannot be reseated (changed) to refer to another object.

References are initialized in the following situations:

* When a named lvalue reference variable is declared with an initializer.
* When a named rvalue reference variable is declared with an initializer.
* In a function call expression, when the function parameter has reference type.
* In the return statement, when the function returns a reference type. 
* When a non-static data member of reference type is initialized using a member initializer.

`````{code_example-start} References
:label: examplev3
:class: dropdown
:nonumber:
`````
```{code-cell} c++
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
	return 1;
}
```
Notice that changing the alias changes the original.
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
Reference to `void` is not permitted.
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
Note: changing either reference changed the original object - in this case both caused concatenation of their strings.
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
Note: the rvalue reference was not updated.
````{code_example-end}
````


## Pointer Arithmetic and Arrays

In C++, pointers and arrays are closely related. 

The name of an array can be used as a pointer to its initial element. 

Writing `myArray[3]` tells the compiler to return the element that is 3 away from the starting element of `myArray`. 

This explains why arrays are always passed by reference: passing an array is really passing a pointer.

This also explains why array indices start at 0: the first element of an array is the element that is 0 away from the start of the array

```{tip}
:class: margin
Pointer arithmetic is meaningless unless performed on an array.
```

### Pointer Arithmetic

Pointer arithmetic is used to move execution of the programme to different elements of an array using subtraction and addition of integers on pointers. 

Adding an integer 'n' to a pointer produces a new pointer which points to the array element that is 'n' positions further along in memory.

`````{code_example-start} Pointer Arithmetic
:label: examplev2
:class: dropdown
:nonumber:
`````
Take the following code snippet:
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
`````{code_example-end}
`````
Pointer arithmetic can be risky:
* Pointing to a non-existent object will crash a program.
* It is possible to point to an unrelated object that happens to be adjacent in memory.

### Pointer Expressions and Arithmetic

A limited set of arithmetic operations can be performed on pointers. Pointers may be:
* Incremented or decremented by 1 (++ or --)
* Be increased or decreased by addition on an integer, literal of variable, (+= or -=)
* Subtracted from each other(ptr1-ptr2)

### Pointers into Arrays
`````{code_example-start} Pointer in Arrays
:label: examplev7
:class: dropdown
:nonumber:
`````

```{code-block} c++
int v[] = { 1, 2, 3, 4 };
int* p1 = v; // pointer to initial element (implicit conversion)
int* p2 = &v[0]; // pointer to initial element
int* p3 = v + 4; // pointer to one-beyond-last element
int* p4 = v + 2; // pointer to other elements
std::cout << v << '\n';
std::cout << p1 << '\n';
std::cout << *p1 << '\n';
std::cout << p3 << '\n';
std::cout << *p3 << '\n';
std::cout << p4 << '\n';
std::cout << *p4 << '\n'; 
```
Taking a pointer to the element one beyond the end of an array is guaranteed to work. 

This is important for many algorithms, however, since such a pointer does not in fact point to an element of the array, it may not be used for reading or writing. 

The result of taking the address of the element before the initial element or beyond one-past-the-last element is undefined and should be avoided. For example:

```{code-block} c++
int* p4 = v - 1; // before the beginning, undefined: don't do it
int* p5 = v + 7; // beyond the end, undefined: don't do it
```
The implicit conversion of an array name to a pointer to the initial element of the array is extensively used in function calls in `C-style` code. For example:
// extern "C" int strlen(const char*);   // from <string.h>

```{code-block} c++
void f() {
	char v[] = "Annemarie";
	char* p = v;  // implicit conversion of char[] to char*
	std::cout <<strlen(p) << '\n';
	std::cout << strlen(v) << '\n';   // implicit conversion of char[] to char*
	//v = p;     // error: cannot assign to array
	 }
int main() { f(); }
```
The same value is passed to the standard-library function `strlen()` in both calls. 

The snag is that it is impossible to avoid the implicit conversion. 

In other words, there is no way of declaring a function so that the array v is copied when the function is called. 

Fortunately, there is no implicit or explicit conversion from a pointer to an array. 

The implicit conversion of the array argument to a pointer means that the size of the array is lost to the called function. 

However, the called function must somehow determine the size to perform a meaningful operation. 

Like other C standard-library functions taking pointers to characters, `strlen()` relies on zero to indicate end-of-string; `strlen(p)` returns the number of characters up to and not including the terminating '0'. This is all low-level. 

The standard-library `vector`, `array`, and `string` don’t suffer from this problem. These library types give their number of elements as their `size()` without having to count elements each time.
`````{code_example-end}
`````


## Void

In low-level code, we occasionally need to store or pass along an address of a memory location without knowing what type of object is stored there. 

A `void∗` is used for that purpose; you can read `void∗` as "pointer to an object of unknown type".

Functions using `void*` pointers typically exist at the very lowest level of the system, where real hardware resources are manipulated. 
`````{code_example-start} Void
:label: examplev4
:class: dropdown
:nonumber:
`````
For example:
```{code-block} c++
void* my_alloc(size_t n);   // allocate n bytes from my special heap
```
`````{code_example-end}
`````
Occurrences of `void*` at higher levels of the system should be viewed with great suspicion because they are likely indicators of design errors. 

Where used for optimization, `void*` can be hidden behind a type-safe interface.

Pointers to functions and pointers to members cannot be assigned to `void*`.

## `nullptr`

A pointer should always point at an object, so that dereferencing it is valid. 

If there is no object to point at to or when it is useful to represent the idea that no object is available (e.g., for an end of a list), the pointer may be given the value `nullptr` (the null pointer). 

There is only one `nullptr` shared by all pointer types.
 
`Nullptr` is of type `pointer`.
 
We covered references already - A reference is similar to a pointer, but instead, we put the suffix `&` after the type in the declaration, and do not need the `*` to access the value.

References cannot be redirected; they may only refer to one object.

The literal `nullptr` represents the null pointer, that is, a pointer that does not point to an object. It can be assigned to any pointer type, but not to other built-in types:

`````{code_example-start} Null Pointer
:label: examplev5
:class: dropdown
:nonumber:
`````

```{code-block} c++
int* pi = nullptr;  double* pd = nullptr;     int i = nullptr;      // error: 'I' is not a pointer
int* p = NULL; // using the macro 'NULL'
```
There is just one `nullptr`, which can be used for every pointer type, rather than a null pointer for each pointer type.

Before `nullptr` was introduced, zero (0) was used as a notation for the null pointer. For example:
```{code-block} c++
int* x= 0; // x gets the value 'nullptr'
```
No object is allocated with the address '0', and '0' (the all-zeros bit pattern) is the most common representation of 'nullptr'. 

Zero (0) is an `int`. However, the standard conversions allow '0' to be used as a constant of 'pointer' or 'pointer-to-member' type.

It has been popular to define a macro `NULL` to represent the 'null pointer'. For example:
However, there are differences in the definition of NULL in different implementations, for example,
NULL might be 0 or 0L. 

In C, `NULL` is typically `(void*)0`, which makes it illegal in C++:
```{code-block} c++
int* p = NULL; // error: can't assign a void* to an int*
```
Using `nullptr` makes code more readable than alternatives and avoids potential confusion when a function is overloaded to accept either a pointer or an integer.

**copied form referecne
```{code-block} c++
//std::nullptr_t
//Defined in header <cstddef>
typedef decltype(nullptr) nullptr_t;
// since C++11)
//`std::nullptr_t` is the type of the null pointer literal, `nullptr`. It is a distinct type that is not itself a pointer type or a pointer to member type. All its `prvalues` are null pointer constants.

//`sizeof(std::nullptr_t)` is equal to `sizeof(void*)`.
```
`````{code_example-end}
`````
## Pointers and Booleans

Note that `==` compares addresses (pointer values) when applied to pointers, and not the values pointed to.

 A pointer can be implicitly converted to a `bool`. A non-null pointer converts to true; pointers with the value `nullptr `convert to `false`. 

`````{code_example-start} Pointers and Booleans
:label: examplev6
:class: dropdown
:nonumber:
`````
```{code-block} c++
void myFunction(int* myPointer)
{
	bool myBoolean1 = myPointer;       // narrows to true or false - not a copy!
	std::cout << myBoolean1 << '\n';
	bool myBoolean2{ myPointer != nullptr };  // explicit test against nullptr
	std::cout << myBoolean1 << '\n';
	if (myPointer) {
		// identical to p!=nullptr
		std::cout << "not pointing to Null" << '\n';
	}
}
int main() {
	int temp = 17;
	int* myPointerToTemp = nullptr; // or set to temp
	myFunction(myPointerToTemp);
 
return 0;
}
```
I prefer `if (p)` over `if (p != nullptr)` because it more directly expresses the notion ‘if p is valid’ and because it is shorter. The shorter form leaves fewer opportunities for mistakes.
`````{code_example-end}
`````


## Pointers to Functions
Like a (data) object, the code generated for a function body is placed in memory somewhere and therefore has a unique address associated with it and therefore we can also define a pointer to a function in a similar manner to a pointer to an object.  There are some differences however:

A pointer to function does not allow the code to be modified. 

The pointer obtained by taking the address of a function can be used to call the function. 
`````{code_example-start} Introduction to Pointer and References
:label: examplev8
:class: dropdown
:nonumber:
`````
```{code-block} c++
void error(std::string s) { std::cout << s; }
void (*efct)(std::string); // pointer to
 function taking a string argument and returning nothing
void f();
void f()
{
    efct = &error; // efct points to error
    efct("error"); // call error through efct
}
void error(std::string s) {
std::cout << s;
}
void (*ptrToError)(std::string);

void main() {
ptrToError = &error;
ptrToError("Warning!");
}
```
The compiler will discover that `efct` is a pointer and call the function pointed to. 

That is, dereferencing a pointer to function using ∗ is optional. 

Similarly, using `&` to get the address of a function is optional:

```{code-block} c++
void error(std::string s) { std::cout << s; }
void (*f1)(std::string) = &error; // OK: same as = error
void (*f2)(std::string) = error; // OK: same as = &error
void g()
{
    f1("Nasa"); //OK: same as (*f1)("Nasa")
    (*f1)("Apollo"); // OK: as f1("Apollo")
}
```
Pointers to functions have argument types declared just like the functions themselves. 

In pointer assignments, the complete function type must match exactly. 

For example: 
```{code-block} c++
void (*pf) (std::string); // pointer to void(std::string)
void f1 (std::string); // void(string)
int f2 (std::string); // int(string)
void f3 (int*); //void(int*)
void f()
{
pf = &f1; // OK
pf = &f2; // error : bad return type
pf = &f3; // error : bad argument type
pf("Hera"); // OK
pf(1); //error : bad argument type
int i = pf("Zeus"); // error : void assigned to int
}
```
`````{code_example-end}
`````
## `new`

The {term}`new` operator is used to allocate memory space on the {term}`free store`.
```{code-block} c++
int* pointerToInt = new int; // allocates dynamic memory for a single int - int determines size of memory
int* pointerToArrayOfInts = new int[5]; // Allocates an array of 5 `int` types
double* pointerToDouble = new double; // allocate one double
double* pointerToArrayOfDoubles = new double[number]; // allocates an array of 'number' of doubles
```
