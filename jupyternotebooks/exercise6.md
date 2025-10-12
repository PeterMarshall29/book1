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

# Exercises Week 3 Pointers and Functions

````{exercise-start} 5A
:label: exerciseex61
:class: dropdown
:nonumber:
````
Write a program that asks for two integers, assigns the values to two variables, then creates pointers to those variables and adds the integers by dereferencing their pointers.
```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex61
:label: solutionex61
:class: dropdown
````
A possible solution - try to improve or modify it.
```{code-block} c++
#include <iostream>
int main() {
    int number1, number2, result;
    int * pointerToNumber1, * pointerToNumber2;
    std::cout << "Please type in two numbers to be added, space separated \n";
    std::cin >> number1 >> number2;
    pointerToNumber1 = &number1;  
    pointerToNumber2 = &number2;  
    result = *pointerToNumber1 + *pointerToNumber2;
    std::cout << "The sum of the entered numbers is : " <<  result;  

    return 0;
}
```
````{solution-end}
````

````{exercise-start} 5B
:label: exerciseex62
:class: dropdown
:nonumber:
````
Write a program that asks for two floating-point numbers and then calls a function by reference to calculate the first number raised to the power of the second number.

Hint: Include `<cmath>` and use `pow()`.
```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex62
:label: solutionex62
:class: dropdown
````
A possible solution - try to improve or modify it.
```{code-block} c++
#include <iostream>
double powerOf(double* number1, double* number2);
double powerOf(double* number1, double* number2) {
    return pow(*number1, *number2);
}
int main() {
    double number1, number2, result;
    std::cout << "Please type in a number and a power to raise that number to: \n";
    std::cin >> number1 >> number2;
    result = powerOf(&number1, &number2);
    std::cout << "The sum of the entered numbers is : " <<  result; 
    return 0;
}
```
````{solution-end}
````

````{exercise-start} 5C
:label: exerciseex63
:class: dropdown
:nonumber:
````
Write a program to print all the permutations of the character array "abcd".

You should use functions and pass pointers to the characters.
```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex63
:label: solutionex63
:class: dropdown
````
A possible solution - try to improve or modify it.

A char array cannot be passed into a function, but the attempt produces a pointer to its first element, which is what is then used with some pointer arithmetic.
```{code-block} c++
#include <iostream>

void changePosition(char* char1, char* char2){
    char tmp;
    tmp = *char1;
    *char1 = *char2;
    *char2 = tmp;
}

void charPermutations(char* inputCharacterString, int startNumber, int endNumber) {
    int i;
    if (startNumber == endNumber)
        std::cout << inputCharacterString << '\n';
    else
    {
        for (i = startNumber; i <= endNumber; i++)         {
            changePosition((inputCharacterString + startNumber), (inputCharacterString + i)); 
            charPermutations(inputCharacterString, startNumber + 1, endNumber); 
            changePosition((inputCharacterString + startNumber), (inputCharacterString + i)); 
        }
    }
}

int main() {
    std::cout << "Please type in a word \n";
    char InputCharString[] ="abcd";
    /*for (int i = 0; i < strlen(InputCharString); ++i) {
        std::cin >> InputCharString[i];
    }*/
    int n = strlen(InputCharString);
    std::cout << " The permutations of the string are : \n";
    charPermutations(InputCharString, 0, n - 1); 
    std::cout << "\n\n";
    return 0;
}
```
For a std::string a reference to the first character must be passed into the pointer for this code to work.
```{code-block} c++
#include <string>
#include <iostream>

void changePosition(char* char1, char* char2){
    char tmp;
    tmp = *char1;
    *char1 = *char2;
    *char2 = tmp;
}
void charPermutations(char* inputCharacterString, int startNumber, int endNumber) {
    int i;
    if (startNumber == endNumber)
        std::cout << inputCharacterString << '\n';
    else
    {
        for (i = startNumber; i <= endNumber; i++)         {
            changePosition((inputCharacterString + startNumber), (inputCharacterString + i)); 
            charPermutations(inputCharacterString, startNumber + 1, endNumber); 
            changePosition((inputCharacterString + startNumber), (inputCharacterString + i)); 
        }
    }
}
int main() {
    std::cout << "Please type in a word \n";
    std::string inputString;
    std::cin >> inputString;
    /*for (int i = 0; i < strlen(InputCharString); ++i) {
        std::cin >> InputCharString[i];
    }*/
    int n = size(inputString);
    std::cout << " The permutations of the letters in " << inputString << "are: \n";
    charPermutations(&inputString[0], 0, n - 1);
    std::cout << "\n\n";
    return 0;
}
```
````{solution-end}
````


````{exercise-start} 5D
:label: exerciseex64
:class: dropdown
:nonumber:
````
Write three functions that return the square of, the cube of, and half of a floating-point number.

Write a single function that will print to the character stream the value returned by any of the above functions.

Write a program that asks the user for a floating point number and uses the single printer function to print the square of, the cube of, and half of the user's floating-point number.
```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex64
:label: solutionex64
:class: dropdown
````
A possible solution - try to improve or modify it.
```{code-block} c++
#include <iostream>
double cubeOf(double);
double squareOf(double);
double halfOf(double);
void myPrinter(double, double(*)(double));

double cubeOf(double userDouble) {
    return userDouble * userDouble * userDouble;
}
double squareOf(double userDouble) {
    return userDouble * userDouble;
}
double halfOf(double userDouble) {
    return userDouble * 0.5;
}
    
void myPrinter(double userDouble, double(*passedInFunction)(double)) {
    std::cout << passedInFunction(userDouble) << '\n';
}
int main(){
    double number;
    std::cout << "Please type in a number: ";
    std::cin >> number;
    std::cout << "\nHalf the value is ";
    myPrinter(number, halfOf);
    std::cout << "\nThe value squared is ";
    myPrinter(number, squareOf);
    std::cout << "\nThe value cubed is ";
    myPrinter(number, cubeOf);
    return 0;
}
```
````{solution-end}
````


````{exercise-start} 5E
:label: exerciseex65
:class: dropdown
:nonumber:
````
Write a program that asks the user to input two floating point numbers followed by an arithmetic operator (+, -, *, /).

The program should have four separate functions to compute the basic arithmetic operations on a pair of floating-point numbers and a fifth function that will be called from `main()` that selects which arithmetic function to use based on the users choice of operator i.e. the function called by `main()` should have the details of which arithmetic function is to be called passed into it.

Print a suitable response back to the user, providing the result.

```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex65
:label: solutionex65
:class: dropdown
````
A possible solution - try to improve or modify it.
```{code-block} c++
double add(double, double);
double multiply(double, double);
double divide(double, double);
double subtract(double, double);
double calculate(double, double, double(*)(double, double));

double add(double userDouble1, double userDouble2) {
    return userDouble1 + userDouble2;
}
double subtract(double userDouble1, double userDouble2) {
    return userDouble1 - userDouble2;
}
double multiply(double userDouble1, double userDouble2) {
    return userDouble1 * userDouble2;
}
double divide(double userDouble1, double userDouble2) {
    return userDouble1 / userDouble2;
}
    
double calculate(double userDouble1, double userDouble2, double(*passedInFunction)(double, double)) {
    return passedInFunction(userDouble1, userDouble2);
}
int main(){
    double number2;
    double number1;
    char operation;
    std::cout << "Please type in two floating point numbers separated followed by an arithmetic operator - space separated: ";
    std::cin >> number1 >> number2 >> operation;

    switch (operation) {
    case '+':
        std::cout << '\n' << number1 << " plus " << number2 << " equals " << calculate(number1, number2, add);
        break;
    case '-':
        std::cout << '\n' << number1 << " minus " << number2 << " equals " << calculate(number1, number2, subtract);
        break;
    case '*':
        std::cout << '\n' << number1 << " times " << number2 << " equals " << calculate(number1, number2, multiply);
        break;
    case '/':
        std::cout << '\n' << number1 << " divided by " << number2 << " equals " << calculate(number1, number2, divide);
        break;
    default:
        std::cout << "\nSomething went wrong!";
    }
    return 0;
}

```
````{solution-end}
````


````{exercise-start} 5F
:label: exerciseex66
:class: dropdown
:nonumber:
````
Consider this example of recursion - without running any code, try to determine the following:

1. What happens for the following function calls:
* `myFunction(4);`
* `myFunction(7);`
* `myFunction(12);`

2. If `number - 1` were replaced with `number + 1` what would be the result of the last 3 function calls be?

3. What would happen if another `std::cout` statement was placed before the function call? 

```{code-block} c++
void myFunction(int number) {
    if ((1 <= number) && (number <= 8)) {
        myFunction(number - 1);
        std::cout << number;
    } else std::cout << '\n';
}
```

```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex66
:label: solutionex66
:class: dropdown
````
No answer provided – please write a program to call the provided function and check your answers.

````{solution-end}
````


````{exercise-start} 5G
:label: exerciseex67
:class: dropdown
:nonumber:
````
Write a program that asks the user to type in a sentence and then calls a function that prints the sentence in reverse using recursion.

Hint: Use `std::getline()` to get the sentence. Then consider using the `subtr()` function from `<string>` - you will need to look than one up!
```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex67
:label: solutionex67
:class: dropdown
````
A possible solution - try to improve or modify it.
```{code-block} c++
#include <iostream>
#include <string>
void reverseString(std::string inputString) {
    if (inputString.size() == 0) return;
    reverseString(inputString.substr(1));
    std::cout << inputString[0];
}
int main() {
    std::string myString;
    std::cout << "Please type in a sentence: \n";
    std::getline(std::cin, myString);
    reverseString(myString);
    return 0;
}
```
````{solution-end}
````

````{exercise-start} 5H
:label: exerciseex68
:class: dropdown
:nonumber:
````
Without running this code - determine what the output will be. 

If you were happy with this program, please visit https://www.ioccc.org/ for lots more examples and hours of fun!!

```{code-block} c++
void obfuscatedArithmetic(int& one, int two, int& three) {
    ++one;
    --two;
    three += one;
}
int main() {
    int one = 4;
    int three = 10;
    int two = 7;
    obfuscatedArithmetic(three, one, two);
    std::cout << one << " " << two << " " << three << '\n';
    return 0;
}
```
```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex68
:label: solutionex68
:class: dropdown
````
No answer supplied - run the code to find out if you are correct.

Was this code helpfully written - or was the intent of the programmer obfuscated?
```{code-block} c++

```
````{solution-end}
````
