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

# Exercises 5

````{exercise-start} 
:label: exerciseex51
:class: dropdown
````
Correct the following function and add the rest of a program needed to demonstrate a call to the function. 

The function should return the squared value of two integers.
```{code-cell} c++
:tags: [remove-output, skip-execution]
int squed(inta) {
	a * a;
}
```
````{exercise-end}
````

````{solution-start} exerciseex51
:label: solutionex51
:class: dropdown
````
```{code-block} c++
#include <iostream>
int squaredValueOf(int a) {
    return a * a;
}
int main() {
    int userInt;
    std::cout << "Please type in an integer value ..\n";
    std::cin >> userInt;
    std::cout << "The square of " << userInt << " is " << squaredValueOf(userInt)<< "!";
    return 0;
}
```
````{solution-end}
````

````{exercise-start} 
:label: exerciseex52
:class: dropdown
````
Write a function that takes an integer value and returns one more than that value.
Write a program that calls your function and prints both values to the display.
```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex52
:label: solutionex52
:class: dropdown
````
```{code-block} c++
#include <iostream>
int incrementFunction(int number) {
	return ++number;
}
int main () {
  int number;
  std::cout << "Please type in a number.. \n";
  std::cin >> number;
  std::cout << " Your number was: " << number << " and one more is: " << numberincrementFunction(number) << '\n';
  return 0;
}
```
````{solution-end}
````

````{exercise-start} 
:label: exerciseex53
:class: dropdown
````
Write a function that takes two integer values and returns a true is their sum is less than 100..
Write a program that calls your function and prints a statement telling the user if their sum is less than 100 or not.
```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex53
:label: solutionex53
:class: dropdown
````
```{code-block} c++
#include <iostream>
bool sumIsLessThan100(int A, int B) {
	return (A + B < 100) ?  true : false;
}
int main () {
  int A , B;
  std::cout << "Please type in two numbers number, both less than 100.. \n";
  std::cin >> A >> B;
  std::cout << " It is " << sumIsLessThan100(A , B) << " that the sum of " << A << " and " << B << " is less than 100! <<'\n';
  return 0;
}
```
````{solution-end}
````




````{exercise-start} 
:label: exerciseex54
:class: dropdown
````
Write a function that takes in two integers, hours and minutes, and then converts them to a total number of seconds.
Complete the program needed to do this, and include a loop, so that the user can repeat the conversion without restarting the program.
```{code-cell} c++
:tags: [remove-output, skip-execution]
int convertToSeconds(int hours, int minutes) {
	function_body Code goes here....
}
```
````{exercise-end}
````

````{solution-start} exerciseex54
:label: solutionex54
:class: dropdown
````
```{code-block} c++
#include <iostream>
int convertToSeconds(int hours, int minutes) {
    return 3600 * hours + 60 * minutes;
}
int main() {
    int hoursInt;
    int minutesInt;
    for (;;) {
        std::cout << "Please type in a time as a number of hours followed by a number of minutes, or type x to exit.\n";
        if (std::cin >> hoursInt >> minutesInt) {
            std::cout << "The number of seconds in " << hoursInt << " hours and " << minutesInt << " minutes is " << convertToSeconds(hoursInt, minutesInt) << " seconds!";
        }
        else {
            break;
        }
    }
    return 0;
}
```
````{solution-end}
````


````{exercise-start} 
:label: exerciseex55
:class: dropdown
````
Write functions for the following:
a.	Calculation of a factorial using recursion.
b.	Calculation of arctan using the Taylor series expansion.
c.	Estimation of pi using the Wallis product.

```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex55
:label: solutionex55
:class: dropdown
````
```{code-block} c++
int factorial(int number) {
  if (number == 0 || number == 1) return 1;
  return number * factorial(number - 1);
}
```
````{solution-end}
````


````{exercise-start} 
:label: exerciseex56
:class: dropdown
````

```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex56
:label: solutionex56
:class: dropdown
````
```{code-block} c++

```
````{solution-end}
````


````{exercise-start} 
:label: exerciseex57
:class: dropdown
````

```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex57
:label: solutionex57
:class: dropdown
````
```{code-block} c++

```
````{solution-end}
````

````{exercise-start} 
:label: exerciseex58
:class: dropdown
````

```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex58
:label: solutionex58
:class: dropdown
````
```{code-block} c++

```
````{solution-end}
````

````{exercise-start} 
:label: exerciseex59
:class: dropdown
````

```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex59
:label: solutionex59
:class: dropdown
````
```{code-block} c++

```
````{solution-end}
````

````{exercise-start} 
:label: exerciseex510
:class: dropdown
````

```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex510
:label: solutionex510
:class: dropdown
````
```{code-block} c++

```
````{solution-end}
````




