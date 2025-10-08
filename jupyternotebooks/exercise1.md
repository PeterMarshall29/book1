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

# Exercises Week 1

`````{exercise-start} 1A
:label: exerciseex11
:class: dropdown
:nonumber:
`````
Write a program to print the following message in the terminal.

Welcome to Loughborough!                            
//----------------------------------------------                         
This is Computational Physics - Part A.
````{code-cell} cpp
:tags: [remove-output]
Code goes here...
````
`````{exercise-end}
`````
`````{solution-start} exerciseex11
:label: solutionex11
:class: dropdown
`````
This is one possible solution - try to improve on it.
````{code-block}
#include <iostream>
int main() {
  std::cout << "\nWelcome to Loughborough!\n";
  std::cout << "----------------------------------------------\n"; 
  std::cout << "This is Compuational Physics - Part A. "<< std::endl; 
  return 0;
} 
````
`````{solution-end}
`````

````{exercise-start} 1B
:label: exerciseex12
:class: dropdown
:nonumber:
````
Write a program that ask for 4 double precision floating point numbers and returns their total and average.
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
Try changing this code to calculate the average using:

`average = firstNumber + secondNumber + thirdNumber + fourthNumber / 4;`
```{code-block} c++
#include <iostream> 
int main() {
    double firstNumber, secondNumber, thirdNumber, fourthNumber, total, average; 
    std::cout << "Please enter four numbers...\n"; 
    std::cin >> firstNumber >> secondNumber >> thirdNumber >> fourthNumber; 
    total = firstNumber + secondNumber + thirdNumber + fourthNumber; 
    average = total / 4; 
    std::cout << "The total of your four numbers is " << total << " and their average is " << average << '\n'; 
    return 0; 
} 
```
````{solution-end}
````

````{exercise-start} 1C
:label: exerciseex13
:class: dropdown
:nonumber:
````
Write a program to demonstrate the effect of combining integer and double type numbers in a single arithmetic expression.
Try all 5 arithmetic operators and include negative values.
Use `<iomanip>` to control the precision of the outputs to 3 decimal places.
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
This is one possible solution - how can it be improved?
```{code-block} c++
#include <iostream>
#include <iomanip>  
int main() {
    int myFirstInt = 4, mySecondInt = 7; 
    double myFirstDouble = 2.5, mySecondDouble = 9.99;
    std::cout << std::fixed << std::setprecision(3); 
    std::cout << " " << myFirstInt << " + " << mySecondInt << " = " << myFirstInt + mySecondInt << '\n';
    std::cout << " " << myFirstDouble << " + " << mySecondDouble << " = " << myFirstDouble + mySecondDouble << '\n';
    std::cout << " " << myFirstInt << " + " << myFirstDouble << " = " << myFirstInt + myFirstDouble << '\n';
    // and all the others .......
    return 0; 
} 
```
````{solution-end}
````

````{exercise-start} 1D
:label: exerciseex14
:class: dropdown
:nonumber:
````
A common computing task is to swap the values of two variables.
Write a program that asks the user for two variables and then swaps their values.
Print out the variables' values, before and after the swap, in the same order to show the changed values. 
DO NOT just print the variable in reverse order - misses the learning point of this exercise.
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
This is one possible solution - how can it be improved?
```{code-block} c++
#include <iostream>
int main() {
    int myFirstInt, mySecondInt;
    std::cout << "Please type in two integer values... \n";
    std::cin >> myFirstInt >> mySecondInt;
    std::cout << "Your two values were " << myFirstInt << " and " << mySecondInt << ". \n";
    int temp = myFirstInt;
    myFirstInt = mySecondInt;
    mySecondInt = temp;
    std::cout << "Your swapped values are " << myFirstInt << " and " << mySecondInt << ". \n";
    return 0; 
} 
```
````{solution-end}
````

````{exercise-start} 1E
:label: exerciseex15
:class: dropdown
:nonumber:
````
Write a program that asks the user for the lengths of the sides of a triangle and returns the area.

Hint: Use Heron's Formula. Check your answer with a right-angled triangle. Include `<cmath>`.
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
This is one possible solution - how can it be improved?
```{code-block} c++
#include <iostream>
#include <cmath>
int main() {
    double firstSide, secondSide, thirdSide, area, semiPerimeter; 
    std::cout << "Please type in the lengths of the sides of the triangle. \n"; 
    std::cin >> firstSide >> secondSide >> thirdSide; 
    semiPerimeter = (firstSide + secondSide + thirdSide) / 2; 
    area = sqrt(semiPerimeter * (semiPerimeter - firstSide) * (semiPerimeter - secondSide) * (semiPerimeter - thirdSide)); 
    std::cout << "The area of the triangle equals " << area << '\n';
    return 0; 
} 
```
````{solution-end}
````

````{exercise-start} 1F
:label: exerciseex16
:class: dropdown
:nonumber:
````
Write a program that asks for two characters to be input by the user and returns their ASCII code value and the character with the ASCII code that is the sum of the two characters.
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
These are possible solutions - how can the be improved?
```{code-block} c++
#include <iostream>
int main()
{
    char firstChar;
    char secondChar;
    std::cout << "Enter two characters, space separated. \n";
    std::cin >> firstChar >> secondChar;
    std::cout << "The ASCII values of " << firstChar << " and " << secondChar << " are: " << int(firstChar) << " and " << int(secondChar) << '\n';
    std::cout << "The character with the ASCII value of " << (firstChar+secondChar) << " is " << char(firstChar+secondChar) << '\n';
    return 0;
}
```
or
```{code-block} c++
#include <iostream>
int main()
{
    char firstChar;
    char secondChar;
    std::cout << "Enter two characters, space separated. \n";
    std::cin >> firstChar >> secondChar;
    std::cout << "The ASCII values of " << firstChar << " and " << secondChar << " are: " << +firstChar << " and " << +secondChar << '\n';
    std::cout << "The character with the ASCII value of " << (firstChar + secondChar) << " is " << char(firstChar+secondChar) << '\n';
    return 0;
}
```
````{solution-end}
````
````{exercise-start} 1G - Difficult
:label: exerciseex17
:class: dropdown
:nonumber:
````
Write a program to extract and use the first and last digit of an integer number (needs to have at least 2 digits).

There is more than one way to do this.

Hint: think about the effect of the modulo operation using 10 as the divisor. This can help you get to both the first and last digit.

For the first digit you will also need to think about the order of the number. Use the int(), and you will need to include <cmath> to use pow(), and log10() functions.
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
This is one possible solution - how can it be improved?
````{code-block} c++
#include <iostream> 
#include <cmath>  
int main() { 
    int userNumber, firstDigit, lastDigit,  numberOfDigits, swappedDigitsNumber, temp1, temp2;
    std::cout << "Please enter an integer with at least 3 digits. \n";   
    std::cin >> userNumber; 
    lastDigit = userNumber % 10;
    numberOfDigits = int(log10(userNumber)); 
    firstDigit = userNumber / pow(10, numberOfDigits); 
    // Swap digits and rebuilt number
    temp1 = firstDigit * (pow(10, numberOfDigits)); 
    temp2 = userNumber % temp1; 
    userNumber = temp2 / 10;    
    swappedDigitsNumber = lastDigit * (pow(10, numberOfDigits)) + (userNumber * 10 + firstDigit); 

    std::cout << "The first digit is " << firstDigit << " and the last digit is " << lastDigit << '\n';
    std::cout << "The number with the first and last digts swapped is " << swappedDigitsNumber;
    return 0;
}
````
````{solution-end}
````

````{exercise-start} 1H - Advanced
:label: exerciseex18
:class: dropdown
:nonumber:
````
Write a program to display the current time on the terminal.

You will need to include <ctime>, which will not be covered in this module - see https://en.cppreference.com/w/cpp/chrono/c/ctime for details.

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
This one requires an addition directive to run in Visual Studio.
```{code-block} c++
#define _CRT_SECURE_NO_WARNINGS
#include <cassert>
#include <cstring>
#include <ctime>
#include <iostream>

int main()
{
    std::time_t result = std::time(nullptr);
    std::cout << std::ctime(&result);
    /* also try
    char buffer[32];
    std::strncpy(buffer, std::ctime(&result), 26);
    assert('\n' == buffer[std::strlen(buffer) - 1]);
    std::cout << buffer;
    */
}
```
````{solution-end}
````

````{exercise-start} 1I
:label: exerciseex19
:class: dropdown
:nonumber:
````
Write a program demonstrating the use of the erase(), insert(), and replace() member functions on a string supplied by the user.

Information on these functions can be found, under the section 'modifiers', at https://en.cppreference.com/w/cpp/string/basic_string.html 

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
This is one possible solution, which uses `.erase()`
```{code-block} c++
#include <iostream>
#include <iostream>
int main() {
    std::string userString;
    std::cout << "Enter a word .. \n";  
    std::cin >> userString;
    userString.erase(1,2);
    std::cout << userString;    
    return 0;   
}
```
````{solution-end}
````

````{exercise-start} 1J
:label: exerciseex110
:class: dropdown
:nonumber:
````
The `std::max()` function returns the largest of the two values it is given. i.e. if `a` and `b` are arithmetic variables then `max(a,b)` equals `a` if `a>b`.

Write the shortest possible program that prints the highest of 4 user chosen double precision floating point numbers. 
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
This is one possible solution - how can it be improved?
```{code-block} c++

#include <iostream>
int main() {
    double one, two, three, four;
    std::cout << "Enter 4 doubles please. \n";  
    std::cin >> one >> two >> three >> four;
    std:: cout << "The maximum value entered was " << std::max(std::max(one,two),std::max(three,four));
    return 0;   
}
```
Was my choice of variable names helpful?

Does `max()` work for integers?
````{solution-end}
````


