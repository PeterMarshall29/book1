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
(vectors)=
# Vectors
There are several ways to store multiple values in a single variable. <vector>, <array>, and built-in arrays.

The <vector> library provides the most flexible method.

```{note}
:class: margin
<vector> is superior because the number of elements is variable - the number of elements in <array> must be known at compile time.
<array> is better than built-in array because it carries the value of number of its size (so you can use with standard-library algorithms), and it can be copied (using = or initialization), and most importantly there are not surprise conversions to pointers. Use built-in arrays when you want 
```
A `vector` is a sequence of elements that can be accessed by their index.
```{tip}
:class: margin
Add <vector> to header file using `#include <vector>`.
```

````{admonition} The Syntax of Vector
```{code-block} c++
#include <vector> 
//Declarations
std::vector<...elements_type...> myVectorName; // Declaration
// Definitions
std::vector<...elements_type...> myVectorName = { element_1, element2, element3, element4 };
std::vector<...elements_type...> myVectorName { element_1, element2, element3, element4  };
std::vector<...elements_type...> myVectorName(...number_of_elements...); // Definition of number of null elements
std::vector<...elements_type...> myVectorName(...number_of_elements..., ...value_of_all_elements); // Definition of number of elements each with same initial value
```
````

``````{code_example-start}
:label: examplen1
:class: dropdown
``````
Try this code - construct the supporting program.
`````{code-cell} c++
:tags: [remove-output, skip-execution]
std::vector<int> myFirstVector = {1,2,3,4,5 };
std::cout << myFirstVector;
````` 
`````{code_explanation} examplen1
:class: dropdown hint
This code will not work - the character output stream `cout` cannot print a whole vector.

To print one element of the vector, we can use its index.

````{admonition} Indexing into a Vector
:class: dropdown
To access or modify an individual element of a vector we use the elements index:
```{code-block} c++
vectorName[..element_index_here]
```
```{important}
In computing, most index values start from 0!
```
````
Try changing the ouptut line to:

```{code-block} c++
std::cout << myFirstVector[0];
```
What happens if you replace 0, with 5? Find out!

To output all the values of a vector we need to use an iteration statement

Try this code
```{code-block} c++
for (int i = 0; i < myFirstVector.capacity(); ++i) std::cout << myFirstVector[i] << "\n"; 
```
Or:
```{code-block} c++
for (int i = 0; i < myFirstVector.size(); ++i) std::cout << myFirstVector[i] << "\n";
```
`capacity()` is a member function of the class `vector` and therefore must be addressed using the `.` notation on an instance of `vector`.
`````
``````{code_example-end}
``````

## Adding to a Vector

A non-existent element cannot be accessed or assigned to in any type of vector or array.

```{tip}
:class: margin
Assigning a value to a non-existent element will throw an error.
In some languages the new element would be created and intermediate values filled with zeros - not in C++!
```
New elements my only be added immediately after the last existing element of a vector.

To append an extra element, at the end, the `push_back()` function is used.

`````{code_example-start}
:label: examplen2
:class: dropdown
`````
Try this code - construct the supporting program.
````{code-cell} c++
:tags: [remove-output, skip-execution]
:linenos:
:emphasize-lines: 3
std::vector<int> mySecondVector = { 1, 2, 3, 4, 5 };
mySecondVector.push_back(17);
for (int i : mySecondVector ) std::cout << i <<"\n";
```` 
````{code_explanation} examplen2

`push_back()` is another member function – it belongs to std::vector and must be called using the `.` notation.

Line 3 is a range-for-statement, explained [here](range-for).

More than element may be added by `push_back()` by using a list.

Try adding:
```{code-block} c++
mySecondVector.push_back({6, 7, 8, 9 , 10}); 
```
````
`````{code_example-end}
`````

`````{exercise-start}
:label: exercisen1
:class: dropdown
`````
TRY to read in a possibly large unknown number of data points..
````{code-cell} c++
:tags: [remove-output, skip-execution]
std::vector<double> growingVector;
for (double tempVectorNextValue; std::cin >> tempVectorNextValue;)
	growingVector.push_back(tempVectorNextValue);
````
````{admonition} Code Explanation
The second term is the condition for the `for-statement loop` – std::cin >>.

This works if it is given the correct variable type by the user and therefore returns true, otherwise false and the `for` loop ends.

Vector has many useful member functions. 

We can sort out list into ascending order – or otherwise.

Try adding the following code.

````{code-block} c++
std::vector<double> growingVector;
std::sort(growingVector.begin(),growingVector.end());
for (double i : growingVector) std::cout << i << "\n";
````
`````{exercise-end}
`````
Other useful member functions for vector are listed [here](https://en.cppreference.com/w/cpp/container/vector.html)

## Accessing or Modifying the Elements of a `vector`

```{important}
An element of a vector can only be accesses or modified if it already exists.
```
To access or modify a vector's elements we use the index notation, or the at() function.

`````{example-start}
:label: examplen3
:class: dropdown
`````
Create a vector in the code box - and the supporting code to print the vector elements to the screen.
````{code-cell} c++
:tags: [remove-output, skip-execution]
Your code here...
````
To change the nth element, there are two options.
```{code-block} c++
yourVectorName[n] = ..newValueHere.. ;
// or
yourVectorName.at(n) = ..newValueHere.. ;
```
The .at() function lets you know if an error occurs - slightly more useful than simple indexing.

`````{example-end}
`````

## Multi-dimensional Vectors

We can define a vector of vectors.

````{code-cell} c++
:tags: [remove-output, skip-execution]
std::vector<std::vector<int>> my2DVector;

my2DVector.push_back({1, 2, 3});
my2DVector.push_back({4, 5});
my2DVector.push_back({6, 7, 8, 9});

// Print the vector of vectors
for (const auto& row : my2DVector) {
for (int val : row) {
std::cout << val << " ";
}
std::cout << std::endl;
}
````
## Check if a Vector is Empty

Another useful member function checks whether a vector is empty or not.

The `empty()` function returns 1 (true) if the vector is empty and 0 (false) if it contains one or more elements:
