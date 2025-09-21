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
(while)=
# While Loops
```{note}
:class: margin
{attribution="Yogi Berra" }
> It's déjà vu all over again.
```
A `while` statement will repeatedly execute a sequence of code statements until a condition becomes false.

For the while-statement, the condition is checked before each execution. 

C++ also has a `do-while` statement, which only differs by not checking the condition until after execution of the loop body - guaranteeing the first execution occurs, even if the condition is false.

It is usually recommended to prefer for-statements in C++.

```{figure} ../images/programmingloops.svg
:name: my-fig-ref-t1
Iteration Methods
```
`````{syntax-start} While Statements
:class: dropdown
:nonumber:
`````
Syntax of While Loop.
````{code-block} c++
while (conditional expression) {
  code to be repeatedly executed here...
}
````
```{Warning}
Programmers must ensure there is a logical way for the program to exit every while loop.
```
`````{syntax-end}
`````





```{list-table}
:header-rows: 1
:name: example_table_4
* - Generic While Loop
  - Example While Loop
* - ```{figure} ../images/WhileLoopGeneral.svg
    :name: my-fig-ref-t1
    Iteration Methods
    ```
  - ```{figure} ../images/WhileLoopExample.svg
    :name: my-fig-ref-t1
    Iteration Methods
    ```
```
`````{code_example-start} While Statements
:class: dropdown
:nonumber:
`````
A simple while-loop example:

````{code-cell} c++
:tags: [remove-output,skip-execution]
#include <iostream>
int main() {
    int myInt = 1;
    while (myInt != 11) {
        std::cout << myInt << '\t';
        ++myInt;
    }
    return 0;
}
````
If the condition depends on a variable value, there must be way for that value to change, or the loop runs forever. In this case `myInt` is increments on each execution.

There condtion can be anything which evaluates to true - includeing just using the keyword `true`.

````{code-cell} c++
:tags: [remove-output,skip-execution]
#include <iostream>
#include <string>
int main() {
    std::string previousWord = "";
    std::string currentWord;
    while (std::cin >> currentWord) {
        if (previousWord == currentWord) std::cout << "Repeated word : " << currentWord << '\n';
        previousWord = currentWord;
    }
    return 0;
}
````
In this case, the loop condition is the receipt of a valid input. 

Try again but make the variable int's. What happens if you type letters?

Remember that the conditional expressions must be in parens in C++ - as shown here for both `while` and `if`.

`````{code_example-end} 
`````

## Loop Exit

If the condition of an iteration statement is forgotten the loop will run until the program crashes - this can tie up a computer for a very long time.

Use {kbd}`Crtl+Z` to end a loop. {kbd}`Ctrl+D` in Linux.

The iteration condition may also be intentionally omitted, but an alternative method to end the loop is required.

The program can exit an iteration statement by arriving at the keywords, `break`, `return`, `goto`, or `throw`.

### `break`

`break` - causes the program to break out of the nearest enclosing {term}`switch statement` or {term}`iteration statement`. `break` is used if the logical flow may require the program to leave the loop in the middle.

The `break` is usually found as an option in a selection-statement within the loop.

It is usually better to exit loops via the loop exit condition unless the logic requires extra variables an complexity. 

`````{code_example-start} Break
:class: dropdown
:nonumber:
`````
Example of using break to exit a loop.
```{code-cell} c++
#include <iostream>
#include <vector>
int main() {
  std::vector<int> collectedValues = {};   //creates an empty vector.
  for (int i = 0; i < 100; ++i) {          // contorls a loop that adds an element to the vector each time.
    if (collectedValues.size() == 20) {         //size() - member function - most C++ containers - returns number of elements.
      std::cout << '\n' << "The loop terminated when i =" << i << ". First element was 0!";    // Prints out only if vector has 20 elements.
      break;                                                   // Exits the loop when vector has 20 elements. 
     }  
    collectedValues.push_back(i);  //push_back() - a member function - appends its argument at end of vector.
    std::cout << i << "\t";                                   // Prints the value of the loop variable.
  }
  return 0;
}
```
`````{code_example-end} 
`````
An alternative is to use `continue` which result in the next iteration starting immediately jumping over any remaining code statements in the current loop.

### `continue`
`````{code_example-start} Continue
:class: dropdown
:nonumber:
`````
Example of using continue to skip one iteration of a loop.
```{code-cell} c++
#include <iostream>
int main() {
  for (int i = 0; i < 21; ++i) {
    if (i % 5 == 0) continue;  // if is exactly divisible by 5, skip printing the value of i.
    std::cout << i << "\t";
  }
  return 0;
}
```
`````{code_example-end} 
`````
### Goto
`goto` statements are best avoided in most programming languages. Code has a simpler structure, and is more easily obtained without the use of `goto`.
