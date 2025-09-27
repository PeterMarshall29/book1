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
Write a program that demonstrates the use of a range for loop to print the elements of a vector.

Use `i` as the loop variable, and compare printing `i` to printing `yourVector[i]` in each iteration.
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
#include <iostream>
int main() {
    std::vector<int> myVector{ 5, 7, 4, 2, 8, 6, 1, 9, 0, 3 };
    for (int i : myVector) {
        std::cout << i << '\t' << myVector[i] << '\n';
    }
    return 0;
}
```
````{solution-end}
````

````{exercise-start} 
:label: exerciseex42
:class: dropdown
````
Write a program that ask the user for 5 integers, initialises a 5 element array with those values and then prints out the value.
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
Simple Solution
```{code-block} c++
#include <iostream>
int main() {
    int myArray[5];
    std::cout << "Please enter 5 integer values for your array. \n";
    std::cin >> myArray[0] >> myArray[1] >> myArray[2] >> myArray[3] >> myArray[4];
    std::cout << "Your array is { " << myArray[0]  << " , " << myArray[1] << " , " << myArray[2] << " , " << myArray[3] << " , " << myArray[4] << " }.";
    return 0;
}
```
This code works, but it would be very annoying for a larger number of elements. It is also inflexible, ideally we would want the user to define the number of elements.

The following code requires the use of for-loops - come back to it later.

```{code-block} c++

#include<iostream>
int main() {
    int myArray[50], numberOfElements;
    std::cout << "How many integers would you like to store in your array?\n";
    std::cin >> numberOfElements;
    std::cout << "Please enter " << numberOfElements << " elements for your Array... \n";
    for (int i = 0; i < numberOfElements; i++) std::cin >> myArray[i];
    std::cout << "The Elements of your Array are: { "<< myArray[0];
    for (int i = 1; i < numberOfElements; i++) std::cout << " , " << myArray[i];
    std::cout << " }.";
    return 0;
}
```
There is no way to make the actual number of elements of an array variable - they must be initialised with a constant expression. But using a larger mostly empty array is occasionally acceptable.
````{solution-end}
````
````{exercise-start} 
:label: exerciseex43
:class: dropdown
````
Write a program to merge two 5 element arrays into a single 10 element array, and neatly print out the answer.
```{code-cell} c++
:tags: [remove-output, skip-execution]
Code goes here..
```
````{exercise-end}
````

````{solution-start} exerciseex43
:label: solutionex43
:class: dropdown
````
```{code-block} c++
#include <iostream>
int main() {
int myFirstArray[5] = { 1, 2, 3, 4, 5};
int mySecondArray[5] = { 6, 7, 8, 9, 10 };
int myMergedArray[10];
for (int i = 0; i < 5; i++) myMergedArray[i] = myFirstArray[i];
for (int i = 5; i < 10; i++) myMergedArray[i] = mySecondArray[i-5];
std::cout << "{ ";
for (int i = 0; i < 10; i++) {
    std::cout << myMergedArray[i] << " ";
}
std::cout << "} ";
return 0;
}
```
````{solution-end}
````

````{exercise-start} 
:label: exerciseex44
:class: dropdown
````
Write a program that asks the user for the number of elements in their array, then the input of those elements.
And then searches that array for a number of the users chosing and tells them the position in the array etc. if the number is found.
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
```{code-block} c++
#include<iostream>
int main() {
    int userArray[10], numberOfElements, searchNumber, searchCounter = 0;
    std::cout << "Please enter the number of elements in your array - maximum is 10: \n";
    std::cin >> numberOfElements;
    std::cout << "Please enter the elements of your array: \n";
    for (int i = 0; i < numberOfElements; i++)  std::cin >> userArray[i];
    std::cout << "Which number for you want to search your array for? \n";
    std::cin >> searchNumber;
    for (int i = 0; i < numberOfElements; i++) {
        if (userArray[i] == searchNumber) {
            std::cout << "The number " << searchNumber << " is element " << i << " of your array. \n";
            searchCounter += 1;
        }
    }
        if (searchCounter == 0) std::cout << "The number " << searchNumber << " was not in your array!\n";
    return 0;
}
```
````{solution-end}
````



````{exercise-start} 
:label: exerciseex45
:class: dropdown
````
Write a program that creates an array of integer elements that are either ones or zeros and then rearranges the array so that all the zeroes come first.
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
int main() {
    int myArray[] = { 0, 1, 1, 0 , 0, 1, 0, 1, 1, 0 }; 
    int numberOfElements = sizeof(myArray) / sizeof(myArray[0]); // Method to determine number of elements using byte size of array comparaed to byte size of type.
    std::cout << "The array is: ";
    for (int i = 0; i < numberOfElements; i++) std::cout << myArray[i] << " "; 
    int numberOfZeros = 0; 
    for (int i = 0; i < numberOfElements; i++) {
        if (myArray[i] == 0)   ++numberOfZeros;
    }
    for (int i = 0; i < numberOfZeros; i++) myArray[i] = 0;
    for (int i = numberOfZeros; i < numberOfElements; i++) myArray[i] = 1;
    std::cout << "\nThe rearranged array is: ";
    for (int i = 0; i < numberOfElements; i++) std::cout << myArray[i] << " ";
    return 0;
}
```
````{solution-end}
````


````{exercise-start} 
:label: exerciseex46
:class: dropdown
````
Write a program that:
* Asks the user to input a series of integer values to be inserted into a new vector
* Stops accepting input when a letter is typed
* Tells the user which values have been repeated an odd number of times. 
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
Try to improve the solution.. perhaps identifying even occurrences and telling the user if there are no duplicates etc.
```{code-block} c++
#include <iostream>
#include <vector>
int main() {
    std::vector<int> myVector;
    std::vector<int> myTracker{0};
    bool checkAlreadyPrinted = false;
    std::cout << "Please enter a sequence of integer values, ensuring that some numbers are duplicated an even or an odd number of times followed by a letter then you are finished. \n";
    int temp;
    while (std::cin >> temp) {
        myVector.push_back(temp);
    }
    std::cout << "Your vector is : ";
    for (int i = 0; i < myVector.size(); i++) std::cout << myVector[i] << " ";
    for (int i = 0; i < myVector.size(); i++) {
        int countDuplicates = 0;
        for (int j = 0; j < myVector.size(); j++) {
            if (myVector[i] == myVector[j]) countDuplicates++;
        }
        if (countDuplicates % 2 != 0) {
            checkAlreadyPrinted = false;
            for (int k = 0; k < myTracker.size(); ++k) {
                if (myVector[i] == myTracker[k]) checkAlreadyPrinted = true;
            }
            if (checkAlreadyPrinted == false) {
                std::cout << "\nThe mumber " << myVector[i] << " ocurs an odd number of times \n";
                myTracker.push_back(myVector[i]);
            }
        }
    }
    return 0; 
}
```
````{solution-end}
````


````{exercise-start} 
:label: exerciseex47
:class: dropdown
````
Write a program that creates a string vector and then removes any strings that contains a numeric digit.

Hint: Use the `std::isdigit()` function, which works on `char` type and comes from the `<cctype>` library.

Hint: Look into the use of `std::erase` - could this be helpful? Think about what happens to the vector - how can you make it work.

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
#include <iostream>   
#include <vector> 
#include <string>
#include <cctype>
bool testForNumeric(std::string userNextString) {
    for (int i = 0; i < userNextString.size(); ++i) {
        if (std::isdigit(userNextString[i])) return true;
        else continue; 
    }
    return false;
}
int main() {
    std::vector<std::string> userStrings;
    std::cout << "Please type in a series of strings, some that contain numbers, space separated and then a '0' to signal the end of your input. \n";
    std::string temp;
    while (std::cin >> temp && temp != "0") userStrings.push_back(temp);

    for (int i = userStrings.size()-1; i >= 0; --i) {
       if (testForNumeric(userStrings[i])) userStrings[i].erase() ;
    }
    std::cout << "The non numeric strings are: \n";
    for (int i = 0; i < userStrings.size(); ++i) std::cout << userStrings[i]<< '\n';
    return 0;
}
```
````{solution-end}
````




````{exercise-start} 
:label: exerciseex410
:class: dropdown
````
The algorithms library provides functions for a variety of purposes.

https://en.cppreference.com/w/cpp/algorithm.html

Investigate the 'sort' function `std::sort()` and write a program that will sort the elements of a vector into order of increasing or decreasing size.

Hint: The `begin()` and `end()` functions from `std::vector` might be useful.

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
#include <algorithm>    
#include <iostream>     
#include <vector> 
int main() {
    std::vector<int> myVector{ 5, 7, 4, 2, 8, 6, 1, 9, 0, 3 };
    for (int i : myVector) {
        std::cout << i << '\t';
    }
    std::cout << '\n';
    std::sort(myVector.begin(), myVector.end());
    for (int i : myVector) {
        std::cout << i << '\t';
    }
    std::cout << '\n';
    myVector = { 5, 7, 4, 2, 8, 6, 1, 9, 0, 3 };
    std::sort(myVector.begin(), myVector.end(), std::greater<int>());
    for (int i : myVector) {
        std::cout << i << '\t';
    }
    std::cout << '\n';
    myVector = { 5, 7, 4, 2, 8, 6, 1, 9, 0, 3 };
    std::sort(myVector.begin(), myVector.end(), [](int a, int b)
        {
            return a > b;
        });
    for (int i : myVector) {
        std::cout << i << '\t';
    }
    return 0;
}
```
````{solution-end}
````

