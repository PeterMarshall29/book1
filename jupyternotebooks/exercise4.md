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

# Exercises 4

````{exercise-start} 
:label: exerciseex41
:class: dropdown
````
Write code that produces the following outputs to the terminal. You should use a for-loop. Each consecutive line should display the next value in a:
* count from 0 to 10, in steps of 1.
*	a countdown from 20 to 0 in steps of 0.5.
*	a count up, in steps of 3, from 100 to 121.
*	the multiplication table for 7x.
*	adapt the previous part so that it can produce any multiplication table, for a given number of terms i.e. the 11 times table for 15 terms, so up to 11×15 at the users request.

```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex41
:label: solutionex41
:class: dropdown
````
```{code-block} c++

```
````{solution-end}
````

````{exercise-start} 
:label: exerciseex42
:class: dropdown
````
Use a for-statement to evaluate the equation:
$$
S_3=\sum_(i=0)^\infty \frac{(-1)^(i+1)}{i^2}
$$

Hint: You cannot actually use infinity...
```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex42
:label: solutionex42
:class: dropdown
````
Check the solution works.

What happens if you change n?
```{code-block} c++
#include <iostream>
#include <numbers> //requires C++ 2020 or better
int main() {
	int n = 10000;// n is a large number approximating infinity
	double sum = 0.0, numerator = -1.0, denominator;	
	for (int i = 1; i < n; i++) {
		numerator = -numerator; 
		denominator = i * i; 
		sum = sum + numerator / denominator; 
	}
	std::cout << "Result of summation is " << sum << '\n';
	std::cout << "pi squated over 12 = " << (std::numbers::pi * std::numbers::pi) / 12;
	return 0;
}
```
````{solution-end}
````

````{exercise-start} 
:label: exerciseex43
:class: dropdown
````
Evaluate:

$$
P_3=\prod_(i=1)^\infty \left(1+(x^(2^i)\right )\ ;\ |x|<1
$$

```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex43
:label: solutionex43
:class: dropdown
````
Suggested Solution - try to improve the code.
```{code-block} c++
#include <iostream>
#include <numbers> //requires C++ 2020 or better
int main() {
  int n = 10; // a big enough number to approximate infinity
	double term, x, res, res_a; //declaration of variables
	//variable res is the result of multiplication
	std::cout << "Please input a number x, |x|<1: "; //inviting user to input the x value
	std::cin >> x; //read value of x from keyboard
	res = 1.0 + x; term = x; //calculating res and x^(2^i) for i=0
	for (int i = 1; i < n; i++) {   // note that we start multiplication from 1 since the value for i=0 was calculated before the loop
		term *= term; //calcuation of x^(2^i) on i^th iteration
		//this takes into account that 	//x^(2^i)=x^(2^[i-1])*x^(2^[i-1])
		res *= (1.0 + term); //calculates res on i^th iteration
	}
	res_a = 1.0 / (1.0 - x); //calculation of analytical result
	std::cout << "1 / (1 - x) = " << res_a << std::endl;
	std::cout << "Product is " << res;
	return(0);
}
```
````{solution-end}
````


````{exercise-start} 
:label: exerciseex44
:class: dropdown
````
a.	Write a program that asks the user for a number and then classifies the number as being either: less than 10, between 10 and 100, between 100 and 1000, or greater than 1000.
b.	Modify the last program, to also identify if the number is an integer or not.
c.	Modify the last program to handle input that is not a number correctly.

```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex44
:label: solutionex44
:class: dropdown
````
Solutions to parts a and b only.
```{code-block} c++
#include <iostream>
#include <numbers> //requires C++ 2020 or better
int main() {
	double x;
	int xx;
	std::cout << "Input a number please: ";
	std::cin >> x;
	xx = x;
	if (x < 10.0) {
		std::cout << "x<10" << '\n';
	} else if (x < 100.0) {
		std::cout << "10<=x<100" << '\n';
	} else if (x <= 1000.0) {
		std::cout << "100<=x<=1000" << '\n';
	} else {
		std::cout << "x>1000" << '\n';
	}
	if (x == xx) {
		std::cout << x << " is integer." << '\n';
	} else {
		std::cout << x << " is not an integer." << '\n';
	}
	return 0;
}

```
````{solution-end}
````


````{exercise-start} 
:label: exerciseex45
:class: dropdown
````
Write a program that will take the coefficients for a quadratic equation from the user, and return the number, and type of solutions, and the solutions. 
```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex45
:label: solutionex45
:class: dropdown
````
```{code-block} c++
#include <iostream>
#include <numbers> //requires C++ 2020 or better

int main() {
	double a0, a1, a2, x1, x2, dis;
	std::cout << "Please enter the coefficients for the quadratic term, the linear term and the constant, one at a time. " << '\n';
	std::cin >> a2 >> a1 >> a0;
	std::cout << " Polynomial : " << a2 << " * x^2 + " << a1 << " * x + " << a0 << " = 0 " << '\n';
	if (a2 == 0) {
		if (a1 == 0) {
			if (a0 == 0) std::cout << " Has infinitely many solutions " << '\n';
			else std::cout << " Has no solutions " << '\n';
		}
		else std::cout << " Has 1 solution at x = " << -a0 / a1 << '\n'; //  a linear equation 
	}
	else {
		dis = a1 * a1 - 4. * a2 * a0;
		std::cout << " Discriminant = " << dis << '\n';
		if (dis < 0) {// for complex solutions 
			std::cout << " Has 2 complex solutions at \n x1 = " << -a1 / (2 * a2) << " + " << sqrt(-dis) / 2 / a2 << "i " << "\n x2 = " << -a1 / (2 * a2) << " + " << -sqrt(-dis) / 2 / a2 << "i " << '\n';
		}
		else if (dis == 0) { // for real solutions 
			x1 = (-a1 + sqrt(dis)) / (2 * a2);
			std::cout << " Has identical real solutions at x = " << x1 << '\n' ;
		}else{
			x1 = (-a1 + sqrt(dis)) / (2 * a2);
			x2 = (-a1 - sqrt(dis)) / (2 * a2);
			std::cout << " Has 2 real solutions at \n x1 = " << x1 << "\n x2 = " << x2 << '\n';
		}
	}
	return 0;
}
```
````{solution-end}
````


````{exercise-start} 
:label: exerciseex46
:class: dropdown
````

```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex46
:label: solutionex46
:class: dropdown
````


```{code-block} c++

```
````{solution-end}
````


````{exercise-start} 
:label: exerciseex47
:class: dropdown
````

```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex47
:label: solutionex47
:class: dropdown
````
```{code-block} c++

```
````{solution-end}
````

````{exercise-start} 
:label: exerciseex48
:class: dropdown
````

```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex48
:label: solutionex48
:class: dropdown
````
```{code-block} c++

```
````{solution-end}
````

````{exercise-start} 
:label: exerciseex49
:class: dropdown
````

```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex49
:label: solutionex49
:class: dropdown
````
```{code-block} c++

```
````{solution-end}
````

````{exercise-start} 
:label: exerciseex410
:class: dropdown
````

```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex410
:label: solutionex410
:class: dropdown
````
```{code-block} c++

```
````{solution-end}
````


