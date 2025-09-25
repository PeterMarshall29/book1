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

Selection and Iteration

````{exercise-start} 
:label: exerciseex31
:class: dropdown
````
Write a program that asks for an integer and tells the user if the number is odd or even.

Write a second program that works for double inputs - this is more complicated, modulo will not work, and you must handle inputs that are not whole numbers.
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
For Intergers.
```{code-block} c++
#include <iostream> 
int main() {
    int number;
    std::cout << "Please input an integer number to check, even or odd? \n";
    std::cin >> number;
    if (number % 2 == 0) std::cout << "Number is Even!";
    else std:: cout << "Number is Odd!";
    return 0;
}
```
Partial solution for doubles.
```{code-block} c++
#include <iostream> 
int main() {
    double number;
    std::cout << "Please input an integer number to check, even or odd? \n";
    std::cin >> number;
    if (std::remainder(number, 2) == 0) std::cout << "Number is Even!";
    else if (std::remainder(number, 2) == 1.0) std::cout << "Number is Odd!";
    else std::cout << "mmmm, you did not enter a whole numeber...its complicated!";
    return 0;
}
```
````{solution-end}
````

`````{exercise-start} 
:label: exercisex32
:class: dropdown
`````
Write a program to calculate and print the sum of the squares of the postive integrers from one to a user inputed value.
`````{exercise-end} 
`````

`````{solution-start} exercisex32
:label: solutionx32
:class: dropdown
`````
Try changing this to a while-loop, or to a for-loop - whichever you did not use.
```{code-block} c++
#include <iostream>
int main() {
    int number, sum = 0;
    std::cout << "Give me a positive integer: ";
    std::cin >> number;
    for (int i = 1; i <= number; ++i) sum += i * i;
    std::cout << "The sum of the squared numbers from 1 to " << number << " is " << sum << '\n';
    return 0;
}
```
`````{solution-end}
`````


````{exercise-start} 
:label: exerciseex33
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

````{solution-start} exerciseex33
:label: solutionex33
:class: dropdown
````
```{code-block} c++

```
````{solution-end}
````

````{exercise-start} 
:label: exerciseex34
:class: dropdown
````
Use a for-statement to evaluate the equation:
```{math}
S_3=\sum_{i=0}^\infty \frac{(-1)^{i+1}}{i^2}
```

Hint: You cannot actually use infinity...
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
:label: exerciseex35
:class: dropdown
````
Evaluate:

```{math}
P_3=\prod_{i=1}^\infty \left(1+x^{2^i}\right )\ ;\ |x|<1
```

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
:label: exerciseex36
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

````{solution-start} exerciseex36
:label: solutionex36
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
:label: exerciseex37
:class: dropdown
````
Write a program that will take the coefficients for a quadratic equation from the user, and return the number, and type of solutions, and the solutions. 
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

`````{exercise-start}
:label: exercisex38
:class: dropdown
`````
Write a program to calculate and print to screen the binomial coefficients for the nth power - i.e. the nth line of Pascal's triangle.
By definition, the binomial coefficients are calculated as
```{math}
C(k,n)= \frac{n!}{k!(n-k)!} 
```
You should know that 
\begin{align}
C(k,n)=C(n-k,n)\\
C(0,n)=1\\
C(1,n)=n\\
C(2,n)=\frac{n(n-1)}{2}\\
C(k+1,n)=C(k,n)\cdot\frac{n-k}{k+1}
\end{align}

`````{exercise-end}
`````


`````{solution-start} exercisex38
:label: solutionx38
:class: dropdown
`````
```{code-block} c++
#include <iostream>
int main() {
    const int n = 10;   // Power - line of Pascal's triangle
    int binomialCoeffs[n + 1];     // array for coefficients
    binomialCoeffs[0] = 1;         // first element of array must be set
    std::cout << binomialCoeffs[0];
    for (int i = 0; i < n; ++i) {   //loop to fill aray
        binomialCoeffs[i + 1] = binomialCoeffs[i] * (n - i) / (i + 1);
        std::cout << " " << binomialCoeffs[i + 1];
    }
    std::cout << '\n';
    return 0;
}
```
`````{solution-end}
`````


````{exercise-start} 
:label: exerciseex39
:class: dropdown
````
Write a program that checks a sequence of user input positive integers and reports if three identical consecutive values are entered.


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
Try using an array or a vector instead of this method - what are the advantages of the other methods?
```{code-block} c++
int main()
{
    int firstNumber , secondNumber , thirdNumber;
    firstNumber = secondNumber = thirdNumber = 0;
    std::cout << "Please input an integer. \n";
    for (;;) {
        if (secondNumber == 0) {
            if (firstNumber == 0) {
                std::cin >> firstNumber;
                std::cout << "first number is " << firstNumber << '\n';
                } else {
                    std::cin >> secondNumber;
                    std::cout << "second number is " << secondNumber << '\n';
                    if (secondNumber != firstNumber) {
                        firstNumber = secondNumber = 0;
                        std::cout << "2 numbers reset \n";
                    }
                }
            } else {
            std::cin >> thirdNumber;
            if (thirdNumber != secondNumber) {
                firstNumber = secondNumber = thirdNumber = 0;
                std::cout << "3 numbers reset \n";
            } else {
                std::cout << " You have entered the number " << thirdNumber << " three times in a row!";
                break;
            }
        }
    }
    return 0;
}
```
````{solution-end}
````

````{exercise-start} 
:label: exerciseex310
:class: dropdown
````
Physicists often need to convert quanitites in one unit into another.
Write a program that asks the user to input, a temperature, the current unit, and the desired unit, and then provides the converted value.
Your program should include the Celsius, Kelvin, Fahrenheit, and Rankine temperature scales.
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
#include <iostream> 
int main() {
    double originalTemp;
    char originalUnit;
    char conversionUnit;
    while (true) {
        std::cout << "Please input the original temperature followed by it unit, and the unit for the the temperature conversion. \n";
        std::cout << " Please use the symbols K, C, F, and R for the temperature scales\n";
        std::cin >> originalTemp >> originalUnit >> conversionUnit;
        switch (originalUnit) {
        case 'K': case 'k':
            switch (conversionUnit) {
            case 'K': case 'k':
                std::cout << " The value is unchanged. You entered the same unit.";
                break;
            case 'C': case 'c':
                std::cout << " The converted temperature is " << (originalTemp - 273.15) << " Celsius.\n";
                break;
            case 'F': case 'f':
                std::cout << "The converted temperature is " << (((9.0 / 5) * originalTemp) - 459.67) << " Fahrenheit.\n";
                break;
            case 'R': case 'r':
                std::cout << "The converted temperature is " << ((9.0 / 5) * originalTemp) << " Rankine.\n";
                break;
            default:
                std::cout << " I don't recognise that unit, please try again.\n";
                break;
            }
            break;
        case 'C': case 'c':
            switch (conversionUnit) {
            case 'K': case 'k':
                std::cout << "The converted temperature is " << (originalTemp + 273.15) << " Kelvin.\n";
                break;
            case 'C': case 'c':
                std::cout << " The value is unchanged. You entered the same unit.\n";
                break;
            case 'F': case 'f':
                std::cout << "The converted temperature is " << (((9.0 / 5) * (originalTemp + 273.15)) - 459.67) << " Fahrenheit.\n";
                break;
            case 'R': case 'r':
                std::cout << "The converted temperature is " << ((9.0 / 5) * (originalTemp + 273.15)) << " Rankine.\n";
                break;
            default:
                std::cout << " I don't recognise that unit, please try again.\n";
                break;
            }
            break;
        case 'F': case 'f':
            switch (conversionUnit) {
            case 'K': case 'k':
                std::cout << "The converted temperature is " << ((5.0 / 9) * (originalTemp + 459.67)) << " Kelvin.\n";
                break;
            case 'C': case 'c':
                std::cout << " The converted temperature is " << (((5.0 / 9) * (originalTemp + 459.67)) - 273.15) << " Celsius.\n";
                break;
            case 'F': case 'f':
                std::cout << " The value is unchanged. You entered the same unit.\n";
                break;
            case 'R': case 'r':
                std::cout << "The converted temperature is " << (originalTemp + 459.67) << " Rankine.\n";
                break;
            default:
                std::cout << " I don't recognise that unit, please try again.\n";
                break;
            }
            break;
        case 'R': case 'r':
            switch (conversionUnit) {
            case 'K': case 'k':
                std::cout << "The converted temperature is " << ((5.0 / 9) * originalTemp) << " Kelvin.\n";
                break;
            case 'C': case 'c':
                std::cout << " The converted temperature is " << (((5.0 / 9) * originalTemp) + 273.15) << " Celsius.\n";
                break;
            case 'F': case 'f':
                std::cout << "The converted temperature is " << (originalTemp - 459.67) << " Fahrenheit.\n";
                break;
            case 'R': case 'r':
                std::cout << " The value is unchanged. You entered the same unit.\n";
                break;
            default:
                std::cout << " I don't recognise that unit, please try again.\n";
                break;
            }
            break;
        default:
            std::cout << " I don't recognise that unit, please try again.\n";
            break;
        }
    }
    return 0;
}
```
````{solution-end}
````


 
````{exercise-start} 
:label: exerciseex311
:class: dropdown
````
Write a program that checks if a user entered number is a prime number and reports the answer.
```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex311
:label: solutionex311
:class: dropdown
````
```{code-block} c++
#include <iostream> 

int main() {
    int userNumber;
    bool isPrime = true; 
    std::cout << "Please enter a number. \n"; 
    std::cin >> userNumber;
    for (int i = 2; i <= userNumber - 1; i++) {
        if (userNumber % i == 0) {
            std::cout << "The number " << userNumber << " is not a prime number! \n";
            isPrime = false;
            break;
        }
    }
    if (isPrime == true) std::cout << "The number " << userNumber << " is a prime number! \n";
    
}
```
````{solution-end}
````

<!-- ````{exercise-start} 
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
```` -->


