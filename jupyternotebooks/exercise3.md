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

# Exercises 3

````{exercise-start} 
:label: exerciseex31
:class: dropdown
````

```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex31
:label: solutionex31
:class: dropdown
````
```{code-block} c++

```
````{solution-end}
````

````{exercise-start} 
:label: exerciseex32
:class: dropdown
````

```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex32
:label: solutionex32
:class: dropdown
````
```{code-block} c++

```
````{solution-end}
````

````{exercise-start} 
:label: exerciseex33
:class: dropdown
````
Write a program and function to calculate the sum of only the even values in a matrix.
```{code-cell} c++
:tags: [remove-output, skip-execution]
int sumOfEvenValuesInMatrix(std::vector<std::vector<int>> matrix) {
}
```
````{exercise-end}
````

````{solution-start} exerciseex33
:label: solutionex33
:class: dropdown
````
The `.size()` member function returns the number of vectors in a 2D vector and the number of elements when used on a single subscripted 2D vector.
```{code-block} c++
#include <iostream>
int sumOfEvenValuesInMatrix(std::vector<std::vector<int>> matrix) {
    int sumOfEvenValues = 0;
    for (int i = 0; i < matrix.size(); ++i) {
        for (int j = 0; j < matrix[i].size(); ++j) { 
            if (matrix[i][j] % 2 == 0) sumOfEvenValues += matrix[i][j];
        }
    }
    return sumOfEvenValues;
}
int main() {
    std::vector<std::vector<int>> matrix = {{0,0,0},{0,0,0},{0,0,0}};
    std::cout << "Please input 9 values for a 3x3 matrix, starting from top left value, working left to right for each row, top row down. \n";
    for (int i = 0; i < 3; ++i) {
        for (int j = 0; j < 3; ++j) {
            std::cin >> matrix[i][j];
        }
    }
    std::cout << "\nThe sum of the even values is " << sumOfEvenValuesInMatrix(matrix) << "!";
    return 0;
}
```
````{solution-end}
````


````{exercise-start} 
:label: exerciseex34
:class: dropdown
````

```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex34
:label: solutionex34
:class: dropdown
````
```{code-block} c++
#include <iostream>

```
````{solution-end}
````


````{exercise-start} 
:label: exerciseex35
:class: dropdown
````

```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex35
:label: solutionex35
:class: dropdown
````
```{code-block} c++

```
````{solution-end}
````


````{exercise-start} 
:label: exerciseex36
:class: dropdown
````

```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex36
:label: solutionex36
:class: dropdown
````
```{code-block} c++

```
````{solution-end}
````


````{exercise-start} 
:label: exerciseex37
:class: dropdown
````

```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex37
:label: solutionex37
:class: dropdown
````
```{code-block} c++

```
````{solution-end}
````

````{exercise-start} 
:label: exerciseex38
:class: dropdown
````

```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex38
:label: solutionex38
:class: dropdown
````
```{code-block} c++

```
````{solution-end}
````

````{exercise-start} 
:label: exerciseex39
:class: dropdown
````

```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex39
:label: solutionex39
:class: dropdown
````
```{code-block} c++

```
````{solution-end}
````

````{exercise-start} 
:label: exerciseex310
:class: dropdown
````

```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex310
:label: solutionex310
:class: dropdown
````
```{code-block} c++

```
````{solution-end}
````


