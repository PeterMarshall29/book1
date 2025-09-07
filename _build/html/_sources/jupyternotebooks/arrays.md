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

C++ uses simple built-in arrays, discussed on this page - and a separate `<array>` library, not discussed. 

The built-in arrays have values and length fixed at initialisation, and they may not be copied.

An array is the C++ fundamental method for representing a sequence of objects in memory. 

If what you want is a simple fixed-length sequence of objects of a given type in memory, an array is the ideal solution. 

For every other need, an array has serious problems.

````{admonition} Syntax of C++ Array
```{code-block}
type arrayName[...number of elements]
```
````
An array can be allocated statically, on the stack, and on the free store. For example:
```{code-block} c++
int a1[10];    // 10 ints in static storage
void f()
{
int a2[20];       // 20 ints on the stack
int* p = new int[40];   // 40 ints on the free store
// ...
}
```
For a type `T`, `T[size]` is the type "array of size elements of type T". The elements are indexed from 0 to `size−1`. For example:
```{code-block} c++
float v[3];   // an array of three floats: v[0], v[1], v[2]
char* a[32];  // an array of 32 pointers to char: a[0] .. a[31]
```
You can access an array using the subscript operator, `[ ]`, or through a pointer (using operator `*` or operator `[]`). For example:
```{code-block} c++
void f()
{
int aa[10];
aa[6] = 9;   // assign to aa’s 7th element
int x = aa[99]; // undefined behaviour
}
```
Access out of the range of an array is undefined and usually disastrous. Run-time range checking is neither guaranteed nor common. 
The number of elements of the array, the array bound, must be a constant expression. If you need variable bounds, use a vector. For example:

```{code-block} c++
void f(int n)
{
int v1[n];     // error: array size not a constant expression
vector<int> v2(n); // OK: vector with n int elements
}
```


An array can be initialized by a list of values. For example:
```{code-block} c++
int v1[] = { 1, 2, 3, 4 };
char v2[] = { 'a', 'b', 'c', 0 };
```

When an array is declared without a specific size, but with an initializer list, the size is calculated by counting the elements of the initializer list. Consequently, `v1` and `v2` are of type `int[4]` and `char[4]`, respectively. If a size is explicitly specified, it is an error to give surplus elements in an initialiser list. For example:

```{code-block} c++
char v3[2] = { 'a', 'b', 0 };   // error: too many initializers
char v4[3] = { 'a', 'b', 0 };   // OK
```
If the initializer supplies too few elements for an array, 0 is used for the rest. For example:

```{code-block} c++
int v5[8] = { 1, 2, 3, 4 };
// equivalent to
int v5[] = { 1, 2, 3, 4 , 0, 0, 0, 0 };
```
There is no built-in copy operation for arrays. You cannot initialize one array with another (not even of the same type), and there is no array assignment:

```{code-block} c++
int v6[8] = v5; // error : can’t copy an array (cannot assign an int* to an array)
v6 = v5; // error : no array assignment
```

Similarly, you can’t pass arrays by value. When you need assignment to a collection of objects, use a `vector`, an `array`, or a `valarray` instead.
An array of characters can be conveniently initialized by a string literal.

The C++ built-in array is an inherently low-level facility that should primarily be used inside the implementation of higher-level, better-behaved, data structures, such as the standard-library vector or array. 
There is no array assignment, and the name of an array implicitly converts to a pointer to its first element at the slightest provocation. 
Do not use arrays in interfaces (e.g., as function arguments) because the implicit conversion to pointer is the root cause of many common errors in C code and C-style C++ code. 
If you allocate an array on the free store, be sure to delete[] its pointer once only and only after its last us. 

One of the most widely used kinds of arrays is a zero-terminated array of char. That’s the way C stores strings, so a zero-terminated array of char is often called a C-style string. C++ string literals follow that convention, and some standard-library functions (e.g., `strcpy()` and `strcmp()` )rely on it. Often, a `char*` or a `const char*` is assumed to point to a zero-terminated sequence of characters.

## Passing Arrays
Arrays cannot directly be passed by value. Instead, an array is passed as a pointer to its first element. For example:
```{code-block} c++
void comp(double arg[10]) // arg is a double*
{
	for (int i = 0; i != 10; ++i)
		arg[i] += 99;
}
void f()
{
	double a1[10];
	double a2[5];
	double a3[100];
	comp(a1);
	comp(a2); // disaster!
comp(a3); // uses only the first 10 elements
};
```
This code looks sane, but it is not. The code compiles, but the call comp(a2) will write beyond the bounds of a2. Also, anyone who guessed that the array was passed by value will be disappointed: the writes to `arg[i]` are writes directly to the elements of `comp()`’s argument, rather than to a copy.
The function could equivalently have been written as
```{code-block} c++
void comp(double* arg)
{
	for (int i = 0; i != 10; ++i)
		arg[i] += 99;
}
```
Now the insanity is (hopefully) obvious. When used as a function argument, the first dimension of an array is simply treated as a pointer. Any array bound specified is simply ignored. This implies that if you want to pass a sequence of elements without losing size information, you should not pass a built-in array. Instead, you can place the array inside a class as a member (as is done for `std::array`) or define a class that acts as a handle (as in `std::string` or `std::vector`).

## Multidimensional Arrays

```{code-block} c++
int main() {
    // creating 2d and 3d array
    int arr1[2][4];
    int arr2[2][4][8];

    // using sizeof() operator to get the size of the above
    // arrays
    std::cout << "Size of array arr1: " << sizeof(arr1)
        << " bytes" << std::endl;
    std::cout << "Size of array arr2: " << sizeof(arr2)
        << " bytes";

    return 0;
}
```
1. Initialize 2D array using the Initializer list

We can initialize a 2D array using an initializer list in two ways. Below is the first method of initializing a 2D array using an initializer list.

First Method: The below array has 2 rows and 4 columns. The elements are filled in a way that the first 4 elements are placed in the first row, and the next 4 elements in the second row.
```{code-block} c++
int myArray[2][4] = { 0, 1, 2, 3, 4, 5, 6, 7 };
```
Second Method: The below way is the cleaner way to initialize a 2D array the nested list represents the elements in a row and the number of elements inside it is equal to the number of columns in a 2D array. The number of nested lists represents the number of columns.
```{code-block} c++
int myArray2[2][4] = { {0, 1, 2, 3}, {4, 5, 6, 7} };
```
2. Initialization of 2D array using Loops
We can also initialize 2D array using loops. To initialize a 2D array we must use two nested loops, and the number of nested loops are equal to the dimension. For example, to initialize a 3D array we must use three nested loops. Let’s see an example.

Example: In the below example we have initializes the 2D array with 1. The outer loop is used to track rows `i=0` means the first row because of 0 indexing similarly `j=0` means the first column and combining this `x [0][0]` represents the first cell of the 2D array.
```{code-block} c++
int myArray3[2][4];
 for (int i = 0; i < 2; i++) {
     for (int j = 0; j < 4; j++) {
         x[i][j] = 1;
     }
 }
```






