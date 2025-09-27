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
Write a function that takes two integer values and returns `true` if their sum is less than 100. Then use the function to write a program that request the integers and prints a statement telling the user if their sum is less than 100 or not.
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
b.	Estimation of pi using the Wallis product.
c.  Generate the Fibonacci sequence to a given number of terms.

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

//factorial
int factorial(int number) {
  if (number == 0 || number == 1) return 1;
  return number * factorial(number - 1);
}
```


// wallis product
#include <iostream>
#include<string>
#include <cmath>
#include <iomanip> 

double wallisProductPi(int terms) {
    double wallisProduct = 1.0;
    for (int i = 1; i <= terms; ++i) {
        double currentTerm = (4.0 * i * i) / (4.0 * i * i - 1);
        wallisProduct *= currentTerm;
    }
    return wallisProduct * 2;
}
int main() {
    int steps;
    std::cout << "Please enter the number of terms in the Wallis Product estimation: ";
    std::cin >> steps;
    double pi = wallisProductPi(steps);
    std::cout << std::fixed << std::setprecision(30);
    std::cout << "Estimated value of π using " << steps << " terms: " << pi << '\n';
    return 0;
}



//Fibonacci
```{code-block} c++
#include <iostream>
int main() {
    int numberOfTerms, firstTerm = 0, secondTerm = 1, nextTerm = 0;
    std::cout << "Please enter the number of terms to print the Fibonacci sequence: \n";
    std::cin >> numberOfTerms;
    std::cout << "The Fibonacci Sequence to " << numberOfTerms << " is : [" << firstTerm << "\t " << secondTerm;

    for (int i = 1; i <= numberOfTerms - 2; ++i) {
        nextTerm = firstTerm + secondTerm;
        std::cout << '\t' << nextTerm;
        firstTerm = secondTerm;
        secondTerm = nextTerm;
    }
    std::cout << " ]";
    return 0;
}
```

````{solution-end}
````
````{exercise-start} 
:label: exerciseex56
:class: dropdown
````
Write a program and function to calculate the sum of only the even values in a matrix.
```{code-cell} c++
:tags: [remove-output, skip-execution]
//Suggestion...
int sumOfEvenValuesInMatrix(std::vector<std::vector<int>> matrix);
```
````{exercise-end}
````

````{solution-start} exerciseex56
:label: solutionex56
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
:label: exerciseex57
:class: dropdown
````
Write a program that takes an integer, the radius of a circle, and calls a function that returns the difference in area between two squares. The larger square being the smallest square that can contain the circle, and the smaller square being the largest square that will fit inside the circle.
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
#include <iostream>
int differenceInAreaOfSquaresAroundCircle(int radius) {
    int innerArea, outerArea, difference;
    innerArea = 2 * radius * radius;
    outerArea = 4 * radius * radius;
    difference = outerArea - innerArea;
    return difference;
}
int main() {
    int radius;
    std::cout << "Please enter the radius of the circle: \n";
    std::cin >> radius;
    std::cout << "The difference between the squares that just touch the circle inside and outside is " << differenceInAreaOfSquaresAroundCircle(radius);
    return 0;
}
```
````{solution-end}
````

````{exercise-start} 
:label: exerciseex58
:class: dropdown
````
Write a program that uses a function call to the type of triangle given the lengths of its sides i.e. Scalene, Isosceles, Equilateral, or 'Not a triangle'.
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
#include <iostream>
#include <vector>
std::string identifyTypeOfTriangle(std::vector<int> myVector) {
	if (myVector.size() == 3)
	{
		if (myVector[0] == myVector[1] && myVector[1] == myVector[2]) return "Equilateral";
		else if (myVector[0] != myVector[1] && myVector[0] != myVector[2] && myVector[1] != myVector[2]) return "Scalene";
		else return "Isosceles";
	}
	return "Not a triangle!";
}
int main() {
	std::vector<int> myVector;
	int temp;
    std::cout << "Please enter the lengths of the sides of your triangle followed by a letter to end the input: \n";
    while (std::cin >> temp) myVector.push_back(temp);
    std::cout << "You have entered lengths that correspond to: " << identifyTypeOfTriangle(myVector);
    return 0;
}
```
````{solution-end}
````

````{exercise-start} 
:label: exerciseex59
:class: dropdown
````
Write a program that calls a function to calculate the arctangent of an appropriately sized number using a Taylor series expansion.
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
// arctan
#include <iostream>
#include<string>
#include <cmath>
double arctan(double number, int steps) {
    double result = 0.0;
    double term = number; 
    for (int i = 0; i < steps; ++i) {
        if (i % 2 == 0) {
            result += term;
        }
        else {
            result -= term;
        }
        term *= (number * number * (2 * number + 1)) / (2 * number + 3);
    }
    return result;
}

int main() {
    double number;
    int steps;
    std::cout << "Please enter a number in the range [-1...1]. ";
    std::cin >> number;
    if (number < -1 || number > 1) {
        std::cerr << "Number must be in the range [-1, 1] for convergence.\n";
        return 1;
    }

    std::cout << "Enter the number of terms in the Taylor series: ";
    std::cin >> steps;

    double result = arctan(number, steps);
    std::cout << "Arctan (" << number << ") ~ " << result << ", including " << steps << " terms.\n";

    return 0;
}
```
````{solution-end}
````

````{exercise-start} 
:label: exerciseex510
:class: dropdown
````
`<regex>``std::regex` is a library in C++ that provides useful tools for working with {term}`regular expressions`. 
`std::regex` represents a regular expression.
You can find information about `<regex>` here.
Write a program that calls a function that uses `std::regex_match` and `std::regex` to check that an input string is a valid colour 'Hex Code'.
Colur Hex codes are a string composed of `#` followed by a 6 digit hexadecimal codes that represent colours.
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
#include <iostream>
#include <regex>
bool checkIsAValidHexCode(std::string myString) {
	std::regex myRegularExpression("#[0-9a-fA-F]{6}");
	return std::regex_match(myString, myRegularExpression);
}
int main() {
	std::string myString;
	bool checkIsValid;
	for (;;) {
		std::cout << "Please input a string and I will tell you if it is a valid Hex-Code: \n ";
		std::cin >> myString;
		if (myString.size() == 7) {
			if (checkIsAValidHexCode(myString)) std::cout << "You entered a valid Hex-Code! \n";
			else std::cout << "That was not a valid Hex-Code! \n";
		}
		else std::cout << "A Hex Code for a colour must have 6 digits - please try again. \n";
	}
    return 0;
}
```
````{solution-end}
````




