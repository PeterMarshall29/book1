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

# Exercises Week 3 Pointers

````{exercise-start} 5A
:label: exerciseex61
:class: dropdown
:nonumber:
````
Write a program that asks for two integers, assigns the values to two variables, then creates pointers to those variables and adds the intgers by dereferencing their pointers.
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
Write a program that asks for two floating-point numbers, then calls a function by reference to caluate the first number raised to the power of the second number.

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

Use functions and pass pointers to the characters.
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
    char InputCharString[] ="abce";
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
```{code-block} c++
#include <iostream>

```
````{solution-end}
````


````{exercise-start} 5E
:label: exerciseex65
:class: dropdown
:nonumber:
````

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
```{code-block} c++

```
````{solution-end}
````


````{exercise-start} 5F
:label: exerciseex66
:class: dropdown
:nonumber:
````

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
```{code-block} c++

```
````{solution-end}
````


````{exercise-start} 5G
:label: exerciseex67
:class: dropdown
:nonumber:
````

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
```{code-block} c++

```
````{solution-end}
````

````{exercise-start} 5H
:label: exerciseex68
:class: dropdown
:nonumber:
````

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
```{code-block} c++

```
````{solution-end}
````

````{exercise-start} 5I
:label: exerciseex69
:class: dropdown
:nonumber:
````

```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex69
:label: solutionex69
:class: dropdown
````
```{code-block} c++

```
````{solution-end}
````

````{exercise-start} 5J
:label: exerciseex610
:class: dropdown
:nonumber:
````

```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here....
```
````{exercise-end}
````

````{solution-start} exerciseex610
:label: solutionex610
:class: dropdown
````
```{code-block} c++

```
````{solution-end}
````


