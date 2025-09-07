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
A pointer should always point at an object, so that dereferencing it is valid. When we don’t have an object to point to or if we need to represent the notion of "no object available" (e.g., for an end of a list), we give the pointer the value `nullptr` (the null pointer). There is only one nullptr shared by all pointer types:
 
`Nullptr` is of type `pointer`.
 
A reference is similar to a pointer.

But instead, we put the suffix `&` after the type in the declaration, and do not need the `*` to access the value.

References cannot be redirected; they may only refer to one object.
 

## Pointers and References

A suffix `*` after a type in a declaration/definition indicates you are creating a pointer to a variable of that type.

The prefix `*` before a pointer's identifier means "contents of" – the value is the value of the object associated with the pointer

The prefix `&` before an identified means "address of" – the value is the address of the object in memory, for assignment to a pointer.

When used in declarations `*`, `&`, and `[]` are "declarator operators".

The pointer contains only the address, so &identified is the address in memory of the object named "identifier"


`````{code_example-start} Introduction to Pointer and References
:label: examplev1
:class: dropdown
:nonumber:
`````
Run this code more than once.
````{code-cell} c++
:tags: [remove-output, skip-execution]

int main() {
	std::vector<double> myVector = { 5.9,8,1.1,2.3,4.5,5.6 };
	double* myPointerToV;
	myPointerToV = &myVector[3];
	double temp = *myPointerToV;
	std::cout << myPointerToV << "\n";
	std::cout << temp << "\n";
	return 0;
}
````
````{code_explanation} examplev1
:label: explanationv1
:class: dropdown
For a type `T`, `T*` is the type 'pointer to T'. 

That is, a variable of type `T*` can hold the address of an object of type `T`. 

For example:
```{code-block} c++
char c = 'a'; char* p = &c;
```
`p` holds the address of `c`; `&` is the "address-of" operator. 

The fundamental operation on a pointer is dereferencing, that is, referring to the object pointed to by the pointer. 

This operation is also called indirection. The dereferencing operator is (prefix) unary *. For example:

```{code-block} c++
char c = 'a';
char* p = &c; // p holds the address of c; & is the address-of operator
char c2 = *p; // c2 == 'a'; * is the dereference operator
```
The object pointed to by `p` is `c`, and the value stored in `c` is 'a', so the value of `*p` assigned to `c2` is 'a'.
````
`````{code_example-end}
`````
````{syntax-start} Pointer Syntax
:class: note dropdown
:nonumber:
````
The `*`, meaning "pointer to", is used as a suffix for a `type` name. Unfortunately, pointers to arrays and pointers to functions need a more complicated notation:
```{code-block} c++
int* pi;      // pointer to int
char** ppc;    // pointer to pointer to char
int* ap[15];    // array of 15 pointers to ints
int (*fp)(char*);  // pointer to function taking a char* argument; returns an int
int* f(char*);    // function taking a char* argument; returns a pointer to int
``` 
Note that `==` compares addresses (pointer values) when applied to pointers, and not the values pointed to.

The `*`, meaning "pointer to", is used as a suffix for a `type` name. 

Unfortunately, pointers to arrays and pointers to functions need a more complicated notation:

The location of `*` is not important but cannot be used to create multiple pointers – Try this and see where the errors arise.
```{code-block} c++
int* test = y;
int *test1 = y;
int * test2 = y;
int* test3, test4;
test3 = y;
test4 = y;
int *test5, test6;
test5 = y;
test6 = y;
int * test7, test8;
test7 = y;
test8 = y;
```
````{syntax-end}
````
## Pointer Arithmetic and Arrays

The name of an array is also a pointer to the ﬁrst element in the array. 

Writing `myArray[3]` tells the compiler to return the element that is 3 away from the starting element of `myArray`. 

This explains why arrays are always passed by reference: passing an array is really passing a pointer.

This also explains why array indices start at 0: the ﬁrst element of an array is the element that is 0 away from the start of the array

### Pointer Arithmetic

Pointer arithmetic is a way of using subtraction and addition of pointers to move around between locations in memory, typically between array elements. 

Adding an integer 'n' to a pointer produces a new pointer pointing to 'n' positions further down in memory.

`````{code_example-start} Pointer Arithmetic
:label: examplev2
:class: dropdown
:nonumber:
`````

Take the following code snippet:

```{code-block} c++
long arr[] = {6,0,9,8};
long* ptr = arr;
std::cout << ptr << '\n';
std::cout << *ptr << '\n';
ptr++;
long* ptr2 = arr + 3;
std::cout << ptr << '\n';
std::cout << *ptr << '\n';
std::cout << ptr2 << '\n';
std::cout << *ptr2 << '\n';
```
`````{code_example-end}
`````

### Pointer Expressions and Arithmetic

A limited set of arithmetic operations can be performed on pointers which are:

incremented ( ++ )
decremented ( — )
an integer may be added to a pointer ( + or += )
an integer may be subtracted from a pointer ( – or -= )
difference between two pointers (p1-p2)

(Note: Pointer arithmetic is meaningless unless performed on an array.) 
`````{code_example-start} Pointer Arithmetic
:label: examplev3
:class: dropdown
:nonumber:
`````
```{code-block} c++
include <iostream>       // standard IO
int main() {
		double a = 10.0;
		double& b = a;  // an alias
		std::cout << "a = " << a << std::endl;
		std::cout << "b = " << b << std::endl << std::endl;
		double* pA = &a;
		double* pB = &b;
		b = 6.0;
		std::cout << "*pA = " << *pA << std::endl;
		std::cout << "*pB = " << *pB << std::endl;
		return 1;
	}
```
Notice that changing the alias changes the original

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

The literal `nullptr` represents the null pointer, that is, a pointer that does not point to an object. It can be assigned to any pointer type, but not to other built-in types:

`````{code_example-start} Null Pointer
:label: examplev5
:class: dropdown
:nonumber:
`````

```{code-block} c++
int* pi = nullptr;  double* pd = nullptr;     int i = nullptr;      // error: ‘I’ is not a pointer
int* p = NULL; // using the macro ‘NULL’
```
There is just one `nullptr`, which can be used for every pointer type, rather than a null pointer for each pointer type.

Before `nullptr` was introduced, zero (0) was used as a notation for the null pointer. For example:
```{code-block} c++
int* x= 0; // x gets the value ‘nullptr’
```
No object is allocated with the address '0', and '0' (the all-zeros bit pattern) is the most common representation of 'nullptr'. 

Zero (0) is an `int`. However, the standard conversions allow '0' to be used as a constant of 'pointer' or 'pointer-to-member' type.

It has been popular to define a macro `NULL` to represent the 'null pointer'. For example:
However, there are differences in the definition of NULL in different implementations, for example,
NULL might be 0 or 0L. 

In C, `NULL` is typically `(void*)0`, which makes it illegal in C++:
```{code-block} c++
int* p = NULL; // error: can’t assign a void* to an int*
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
## Pointers into Arrays

In C++, pointers and arrays are closely related. The name of an array can be used as a pointer to its initial element. For example:

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

This is important for many algorithms However, since such a pointer does not in fact point to an element of the array, it may not be used for reading or writing. 

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

Like other C standard-library functions taking pointers to characters, `strlen()` relies on zero to indicate end-of-string; `strlen(p)` returns the number of characters up to and not including the terminating '0'. This is all pretty low-level. 

The standard-library `vector`, `array`, and `string` don’t suffer from this problem. These library types give their number of elements as their `size()` without having to count elements each time.
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


