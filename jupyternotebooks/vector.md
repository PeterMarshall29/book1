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
In C++, there are a variety of objects that can be used to store multiple values of the same type in a single variable including `<vector>` , `<array>` , and simple arrays.

The `<vector>` library provides the most flexible method - a `std::vector` is a sequence of elements that can be accessed by their index using `[]` , the {term}`subscript operator`.

```{note}
:class: margin
`std::vector` is superior because the number of elements is variable - the number of elements in `<array>` must be known at compile time.

Using a `std:array` is better than a simple array because it carries the value of the number of its size (so you can use with standard-library algorithms), and it can be copied (for assignment and initialization), and most importantly there are no surprise conversions to pointers. 
```

```{tip}
:class: margin
Add <vector> to header file using `#include <vector>` .
```

````{syntax-start} std::vector
:class: dropdown
:nonumber:
````
`std::vector` is provided by the `<vector>` standard library facility.
```{code-block} c++
#include <vector> 
//Declarations
std::vector<element_type> myVectorName; // Declaration
// Definitions
std::vector<element_type> myVectorName = { element_1, element2, element3, element4 };
std::vector<element_type> myVectorName { element_1, element2, element3, element4 };
std::vector<element_type> myVectorName(number_of_elements); // Definition of vector with specific number of null elements
std::vector<element_type> myVectorName(number_of_elements, value_of_elements); // Definition of a vector with specific number of elements each with same initial value
```
````{syntax-end}
````

``````{code_example-start} Vector Basics
:label: examplen1
:class: dropdown
:nonumber:
``````
Try this code - construct the supporting program.
`````{code-cell} c++
:tags: [remove-output, skip-execution]
std::vector<int> myFirstVector = { 1, 2, 3, 4, 5 };
std::cout << myFirstVector;
````` 
`````{code_explanation} examplen1
:class: dropdown 
This code will not compile - one of the first issues encountered when learning C++ is that the character output stream `std::cout` cannot print a whole vector or array.

There is a simple solution - shown below - but we can start by only printing single elements of the vector using the element's index.

````{admonition} Indexing into a Vector
:class: dropdown note
To access or modify an individual element of a vector we use the element's index i.e. same as an array.

Indices run from '0' to `(number_of_elements - 1)` :
```{code-block} c++
vectorName[..element_index_here]
```
```{important}
In computing, most index values start at 0!
```
````
- Try changing the ouptut line to:

```{code-block} c++
std::cout << myFirstVector[0];
```
- What happens if you replace 0, with 5? Find out!
`````
``````{code_example-end}
``````

To output all the values of a vector we need to use an iteration statement.

``````{code_example-start} Printing a Vector
:label: examplen11
:class: dropdown
:nonumber:
``````
Add the following statements to the previous example:
```{code-block} c++
for (int i = 0; i < myFirstVector.capacity(); ++i) std::cout << myFirstVector[i] << "\n"; 
```
Or:
```{code-block} c++
for (int i = 0; i < myFirstVector.size(); ++i) std::cout << myFirstVector[i] << "\n";
```
`capacity()` is a member function of the class `std::vector` and therefore must be addressed using the `.` notation on an instance of `std::vector` e.g. `myFirstVector.capacity()` .

The for-statements stops when the loop-variable integer value is one less than `.capacity()` because the indices run from '0'.

``````{code_example-end}
``````
## Accessing or Modifying the Elements of a `vector`

```{important}
Only existing elements of a vector can be accesses or modified. Trying to assign a value to a non-exiting element fails and throws a catastrophic error.
```
The {term}`subscript operator` and the element's index is used to access or modify the values contained in a vector.

A useful alternative is the `at()` member function.

`````{syntax-start} Access and Modify Elements of a Vector
:class: dropdown
:nonumber:
`````

To change the nth element, there are two options.
```{code-block} c++
yourVectorName[n] = ..newValueHere.. ;
// or
yourVectorName.at(n) = ..newValueHere.. ;
```
The `.at()` function lets you know if an error occurs - slightly more useful than simple indexing.

`````{syntax-end}
`````

`````{exercise-start} Vector - Checking Progress
:label: examplen3
:class: dropdown
:nonumber:
`````
- Write a program that creates a vector of strings in the code box.
- Add the supporting code to print the vector elements to the screen.

````{code-cell} c++
:tags: [remove-output, skip-execution]
Your code here...
````

`````{exercise-end}
`````
## Adding to a Vector

A non-existent element cannot be accessed or be created by assignment in C++.

```{tip}
:class: margin
Assigning a value to a non-existent element will throw an error.

In some languages a new element would be created by the assignment and any intermediate non-existing values would be created and filled with zeros - not in C++!
```
New elements may only be added to a vector at the index/position immediately after the last existing element.

To append an extra element at the end of the vector the `push_back()` function is used.

``````{code_example-start} Modifying Vectors - push_back()
:label: examplen2
:class: dropdown
:nonumber:
``````
Try this code - construct the supporting program.
`````{code-cell} c++
:tags: [remove-output, skip-execution]
:linenos:
:emphasize-lines: 3
std::vector<int> mySecondVector = { 1, 2, 3, 4, 5 };
mySecondVector.push_back(17);
for (int i : mySecondVector ) std::cout << i <<"\n";
````` 
`````{code_explanation} examplen2
:class: dropdown
`push_back()` is another member function – it belongs to `std::vector` and must be called using the `.` notation.

Line 3 is a range-for-statement, explained [here](range-for).

More than one element may not be added by `push_back()`. 
````{exercise}
:class: dropdown
:nonumber:
Try adding the following to your previous example code:
```{code-block} c++
mySecondVector.push_back({6, 7, 8, 9 , 10}); 
```
````
Instead we must use the `insert()` member function.
`````
``````{code_example-end}
``````
``````{code_example-start} Modifying Vectors - insert()
:label: examplen12
:class: dropdown
:nonumber:
``````
The `insert()` member function is used to insert a range of additional elements into a `std::vector`.
````{syntax} insert() for std::vector
:class: dropdown
:nonumber:
The syntax for `insert()` is:
```{code-block} c++
//To add a list of literals:
vectorIdentifier.insert(vectorIdentifier_iterator() , {list of values, comma separated});
//To add another vector's contents.
vectorIdentifier.insert(vectorIdentifier_iterator() , otherVectorIndentifier.begin(), otherVectorIdentifier.end());
```
````
{term}`Iterators` are similar to pointers (covered in week 3) and are used to indicate the position of an element in an array or vector - a pointer can be used anywhere an iterator is required. 

Calling a member function such as `.begin()` or `.end()` on an instance of a container, such as `std::vector`, returns an iterator.

`begin()` returns an iterator to the first element.

`end()`returns an iterator to one-after-the-last element - the definition of the end of a range.

The `insert()` function's first argument is an iterator to an a position in the vector that is being extended, the extra elements are inserted before this position.

To put the extra elements at:
* the beginning of `myVector`  - use `myVector.begin()`.
* the end of `myVector` - use `myVector.end()` i.e. inserts before one-after-the-end.

The syntax required varies depending on what is being added to the vector. To insert:
* A set of literal values as the new elements, the second argument can simply be the `{}` enclosed, comma-separated values.
* Another vector's elements - a second and third argument are required - being iterators to the first and one-past-the-last element.

For example:
````{code-cell} c++
:tags: [remove-output,skip-execution]
#include <iostream>
#include <vector>
int main() {
    std::vector<int> myVector1{ 1, 2, 3, 4 };
    std::vector<int> myVector2{ 5, 6, 7, 8 };
    myVector1.insert(myVector1.end(), myVector2.begin(), myVector2.end());
    for (int i = 0; i < myVector1.capacity(); ++i) {
        std::cout << myVector1[i] << '\t';
    }
    std::cout << '\n';
    myVector1 = { 1, 2, 3, 4 };
    myVector1.insert(myVector1.begin(), { -3, -2, -1, 0 });
    for (int i = 0; i < myVector1.capacity(); ++i) {
        std::cout << myVector1[i] << '\n';
    }
    return 0;
}
````
````{exercise}
:class: dropdown
:nonumber:
The element (position) indicated by an iterator may be modified by addition/subtraction of an integer value to/from the iterator (also true for pointers).

Find out what happens if you change the code above to:
```{code-block} c++
myVector1.insert(myVector1.end()-2, myVector2.begin()+1, myVector2.end()-1);
```
````
There are more useful member functions for [vector](https://en.cppreference.com/w/cpp/container/vector.html) described in the C++ Reference pages.
``````{code_example-end}
``````

`````{code_example-start} 
:label: exercisen11
:class: dropdown
:nonumber:
`````
Try this code - it will continue to read in an unspecified number of data points until a letter is typed... 
````{code-cell} c++
:tags: [remove-output, skip-execution]
std::vector<double> growingVector;
for (double tempVectorNextValue; std::cin >> tempVectorNextValue;)
	growingVector.push_back(tempVectorNextValue);
````
````{admonition} Code Explanation
:class: dropdown
Accepting a number of elements that is not known at compile time is one of the advantages of `std::vector` .

The second argument to this for-statement, the loop-condition is `std::cin >>` .

This only works if the extraction operation finds the correct variable type in the buffer i.e. the user correctly entered another number - strictly this does not evaluate to true, but the state of `std::cin` is checked and returns true if there have been no errors, which is contextually sufficient for a loop-condition.

`std::cin` fails when a letter is entered - the loop-condition evaluates as false and the for-loop ends.
````
`````{code_example-end}
`````

## Useful Functions

``````{code_example-start} Useful Function
:label: examplen5
:class: dropdown
:nonumber:
``````
Vector has other useful member functions, including `begin()` and `end()` , which return a random access {term}`iterator` to the first and last elements respectively - basically these are equivalent to indexing that location using the subscript operator with the correct index. 

Iterators are similar to pointers - arithmetic values can be used with iterators to traverse the elements i.e. `myVector.end() - 1` gives the value of the second last element.

Other useful member functions for vector are [listed](https://en.cppreference.com/w/cpp/container/vector.html) in the C++ Reference.

The `<algorithm>` library has more functions that are useful for vectors. For example: `std::sort` allows us to sort the elements of our vector into ascending order – or otherwise.

`````{exercise}
:class: dropdown
:nonumber:

Try adding the following code to the previous example...

````{code-block} c++
std::sort(growingVector.begin(),growingVector.end());
for (double i : growingVector) std::cout << i << "\n";
````
- Modify this code so that the first and last elements are not sorted.
`````
The `empty()` function is another useful member function, which checks whether a vector is empty or not - returns 1 (true) if the vector is empty and 0 (false) if it contains one or more elements.
``````{code_example-end}
``````


## Multi-dimensional Vectors

We can define a vector of vectors.

`````{code_example-start} Multidimensional Vectors
:label: examplen4
:class: dropdown
:nonumber:
`````
Try this example - the usual program components must be added....
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
`````{code_example-end}
`````
