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

# Exercises 1

Add practice using comments


`````{exercise-start}
:label: exercisex1_1
`````
This code is incorrect. Alter the code so that it runs without error and prints your name.
````{code-cell} cpp
:tags: [remove-output]
include "iostreams"
main(){
cout << "my name is, \n"
return "Peter";
}
````

`````{exercise-end}
`````


`````{exercise-start}
:label: exercisex1_2
`````
Write a program to calculate and print to screen the binomial coefficients
By definition, the binomial coefficients are calculated as
$$
C(k,n)= \frac{n!}{k!(n-k)!} 
$$
You should know that 
$$
C(k,n)=C(n-k,n)\\
C(0,n)=1\\
C(1,n)=n\\
C(2,n)=\frac{n(n-1)}{2}
C(k+1,n)=C(k,n)\cdot\frac{n-k}{k+1}
$$

`````{exercise-end}
`````


`````{solution-start} exercisex1_2
:label: solutionx1_2
`````
int main() {
    const int n = 10;   // constant array size 
    int bnm[n + 1];     // array of integers 
    int k = 0;          //  loop control variable: 
    bnm[0] = 1;         // The first element of array
    std::cout << bnm[0]; 
                        // While loop to fill array
while(k<n){ 
    bnm[k+1]=bnm[k]*(n-k)/(k+1); 
    std::cout<<" "<<bnm[k+1]; 
    k++; } 
    std::cout << '\n'; 
    return 0; 
}


`````{solution-end}
`````


`````{exercise-start} 
:label: exercisex1_3
`````
Write a program to calculate and print the sum of the squares of the postive integrers from one to a user inputted value.

`````{exercise-end} 
`````


`````{solution-start} exercisex1_3
:label: solutionx1_3
`````
#include <iostream>
int main() {
    int number, sum = 0;
    std::cout << "Give me a positive integer: ";
    std::cin >> number;
    for (int i = 1; i <= number; ++i) sum += i * i;
    std::cout << "The sum of the squared numbers from 1 to " << number << " is " << sum << '\n';
    return 0;
}

`````{solution-end}
`````


`````{exercise-start} 
:label: exercisex1_4
`````
Rewrite the program to calculate and print the sum of the squares of the postive integrers from one to a user inputted value.
But now use the for-statement arguments to make the code block unnecessary.

`````{exercise-end} 
`````


`````{solution-start} exercisex1_4
:label: solutionx1_4
`````
#include <iostream>
int main() { 
    int number, sum; 
    std::cout << "Give me a positve integer: ";
    std::cin >> number; 
    for (int i = 1, sum = 0; i <= number ; sum += i * i,  ++i); 
    std::cout << "The sum of the squares of the numbers from 1 to " << number << " is " << sum << `\n`; 
    return 0; 
}

`````{solution-end}
`````

````{exercise-start} 
:label: exerciseex11
:class: dropdown
````

```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex11
:label: solutionex11
:class: dropdown
````
```{code-block} c++

```
````{solution-end}
````

````{exercise-start} 
:label: exerciseex12
:class: dropdown
````

```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex12
:label: solutionex12
:class: dropdown
````
```{code-block} c++

```
````{solution-end}
````

````{exercise-start} 
:label: exerciseex13
:class: dropdown
````

```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex13
:label: solutionex13
:class: dropdown
````
```{code-block} c++

```
````{solution-end}
````


````{exercise-start} 
:label: exerciseex14
:class: dropdown
````

```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex14
:label: solutionex14
:class: dropdown
````
```{code-block} c++
#include <iostream>

```
````{solution-end}
````


````{exercise-start} 
:label: exerciseex15
:class: dropdown
````

```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex15
:label: solutionex15
:class: dropdown
````
```{code-block} c++

```
````{solution-end}
````


````{exercise-start} 
:label: exerciseex16
:class: dropdown
````

```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex16
:label: solutionex16
:class: dropdown
````
```{code-block} c++

```
````{solution-end}
````


````{exercise-start} 
:label: exerciseex17
:class: dropdown
````

```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex17
:label: solutionex17
:class: dropdown
````
```{code-block} c++

```
````{solution-end}
````

````{exercise-start} 
:label: exerciseex18
:class: dropdown
````

```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex18
:label: solutionex18
:class: dropdown
````
```{code-block} c++

```
````{solution-end}
````

````{exercise-start} 
:label: exerciseex19
:class: dropdown
````

```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex19
:label: solutionex19
:class: dropdown
````
```{code-block} c++

```
````{solution-end}
````

````{exercise-start} 
:label: exerciseex110
:class: dropdown
````

```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex110
:label: solutionex110
:class: dropdown
````
```{code-block} c++

```
````{solution-end}
````

