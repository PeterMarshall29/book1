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
(for)=
# For loops
```{note}
:class: margin
{attribution="Zeno of Elea" }
> What has been said once can always be repeated.
```
The {term}`for-statement` conditionally executes a statement, or a code-block, repeatedly. Also known as the {term}`for-loop`, it is the most frequently used and most important iteration control structure in C++.
`````{syntax-start} for-statement
:class: dropdown
:nonumber:
`````
Syntax of the for-statement:
```{code-block} c++
for ( initial_expression ; conditional_expression ; end_of_iteration_expression ) { 
     code_to_be_executed_every_loop 
}
```
The three statements in parentheses are the arguments of the for-statement and collectively manage its behaviour.  

A single statement to be executed each loop can be terminated by a semicolon i.e. no `{}` are needed.


```{list-table}
:header-rows: 1
:name: example_table_3
* - Generic Flowchart
  - Example Flowchart
* - ```{mermaid}
    :align: center
    :zoom:
    flowchart TB
      A(["Start"]) --> B[/"Input/output"/]
      B --> C["Process"]
      C --> D{"Decision"}
      D -- Condition 1 --> E["Process"]
      D -- Condition 2 --> F[/"Input/output"/]
      F --> G["Process"]
      G --> D
      E --> H[/"output"/]
      H --> I(["End"])
      A:::Rose
      B:::Rose
      C:::Rose
      D:::Rose
      E:::Rose
      F:::Rose
      G:::Rose
      H:::Rose
      I:::Rose
      classDef Rose stroke-width:1px, stroke-dasharray:none, stroke:#FF5978, fill:#FFDFE5, color:#8E2236
      linkStyle 0 stroke:#AA00FF,fill:none
      linkStyle 1 stroke:#AA00FF,fill:none
      linkStyle 2 stroke:#AA00FF,fill:none
      linkStyle 3 stroke:#AA00FF,fill:none
      linkStyle 4 stroke:#AA00FF,fill:none
      linkStyle 5 stroke:#AA00FF,fill:none
      linkStyle 6 stroke:#AA00FF,fill:none
      linkStyle 7 stroke:#AA00FF,fill:none
      linkStyle 8 stroke:#AA00FF
    ```
  - ```{mermaid}
    :align: center
    :zoom:
    flowchart TB
      A(["Start"]) --> B[/"`Output: 
        Request for Input
          Input from User`"/]
      B --> C["Format Input"]
      C --> D{"'Check Input:
          1. Exist
          2. Correct Format`"}
      D -- Both True --> E["Process Input"]
      D -- Either/both False --> F[/"`Output: 
          1. Inform User of Problem
          2. Request Correct Input
          3. Input from User`"/]
      F --> G["Format Input"]
      G --> D
      E --> H[/"Output Result"/]
      H --> I(["End"])
      A:::Class_01
      B:::Class_01
      C:::Class_01
      D:::Class_01
      E:::Class_01
      F:::Class_01
      G:::Class_01
      H:::Class_01
      I:::Class_01
      classDef Class_01 fill:#AA00FF, stroke:#2962FF, color:#000000
      linkStyle 0 stroke:#AA00FF,fill:none
      linkStyle 1 stroke:#AA00FF,fill:none
      linkStyle 2 stroke:#AA00FF,fill:none
      linkStyle 3 stroke:#AA00FF,fill:none
      linkStyle 4 stroke:#AA00FF,fill:none
      linkStyle 5 stroke:#AA00FF,fill:none
      linkStyle 6 stroke:#AA00FF,fill:none
      linkStyle 7 stroke:#AA00FF,fill:none
      linkStyle 8 stroke:#AA00FF
    ```
```
`````{syntax-end}
`````
``````{code_example-start} The for-statement
:label: examples1
:class: dropdown
:nonumber:
``````
Start the live code editor, complete the code, and run the finished program...
`````{code-block} c++
:linenos: 
:emphasize-lines: 2
:name: codes1
:caption: Simple for-statement Example
for (int i = 0; i < 10; ++i) {
std::cout << i << "\t" << i * i << "\n";
}
`````
The highlighted code statement will be executed repeatedly - the number of iterations depends on the loop-variable and the loop-condition.
`````{code-cell} c++
:tags: [remove-output, skip-execution]
Type code here...
`````

`````{code_explanation} examples1
:label: explanations1
:class: dropdown 
````{card}
This example shows the most common syntax pattern used in a for-statement:
```{code-block} c++
for (int i = 0; i < 100; ++i) {
**Code statements to be executed each time the loop runs go here** 
}
```
The 3 terms in parentheses, semicolon delimited, control the operation of the for-loop.
````
````{card}
```{code-block} c++ 
int i = 0;
```
The first argument is the **for-statement initialiser**, which declares the name of a {term}`loop-variable` `i` and initialises it with value `0`.

Loop-variables are local to their for-statement and can be used in the code-block, but no other variable called `i` may be used inside the for-statement's code-block unless they are accessed using `::`

The loop-variable is not required to be an integer, and it does not have to be used to control the loop.
````
````{card}
```{code-block} c++
 i < 100;
```
The second argument is the **for-statement condition**. 

The condition is tested before every iteration - if the condition is true the code-block is executed - the first time the condition evaluates to false, the program exits the for-loop and continues to the next statements.

The condition must be an expression that returns a Boolean, and it must be true on the first loop - or the program exits the for-statement immediately.

If the condition is empty, it evaluates to `true` and the loop runs. 


````
````{card}
```{code-block} c++
++i;
```
The third argument, in this example, is the **for-statement increment**.

***After*** executing the for-statement's code block, the loop-variable is increased or decreased according to this instruction. 
`````
``````{code_example-end}
``````
`````{code_example-start} The for-loop
:label: examples2
:class: dropdown
:nonumber:
`````
It is bad practice, and a common mistake, to increment the loop-variable within the execution block; this should only be done for a good reason.

In programming it is always better to separate concerns - in this case it is better to leave control to the for-loop arguments.

When the loop variable increment instruction appears in both the code-block and the for-statement argument - both increment instructions are implemented in each loop. The instructions are also implemented in sequence and can result in two different values being used for the loop-variable at different points within a single iteration.

````{code-cell} c++
:tags: [remove-output, skip-execution]
int main() {
  for (int x = 0; x<50; ++x) {  // for i in the half-open range 0 to less than 50 `[0:50)` 
    cout << x << '\t';
    ++x;                     // Forces loop variable to be incremented twice on each iteration!!
    }
  return 0;
}
````
Use of an integer loop-variable with unit increment is the most common scenario, but the size of the increment may be variable i.e. `i+=n` and the loop-variable can be of non-integer type.
````{code-cell}  c++
:tags: [remove-output, skip-execution]
int main() {
    double n = .01;
    for (double i = 0.0; i < 10; i+=n) {
        std::cout << i << "\t" << i * i << "\n";
        ++n;
    }
    return 0;
}
````
Note: Some languages require integer types for loop-variables.
`````{code_example-end}
`````
If the for-statement executes a single statement on each iteration, that statement can simply be placed after the for-statement, and terminated by a semi-colon `;` .
````{code_example-start} Single line for-statements
:label: examples4
:class: dropdown
:nonumber:
````
```{code-cell} c++
:tags: [remove-output, skip-execution]
#include <iostream>
int main() {
  for (int i = 0; i < 10; ++i) std::cout << i << '\t';
  return 0;
}
```
````{code_example-end}
````

(forever)=
## Forever
The for-statement parentheses may not be empty - the compiler will not permit it. 

The minimum argument to a for-statement is `(;;)` .

`for(;;){}` is one way to specify an infinite loop; sometimes called a ‘for-ever statement’…

````{code_example-start} Forever
:label: examples3
:class: dropdown
:nonumber:
````
```{code-cell} c++
:tags: [remove-output, skip-execution]
int main()
{
    for (;;) {
        std::cout << "Loop ran once because 'break' was included! \n";
        break;
    }
    return 0;
}
```
```{exercise} Visual Studio Exercise
:class: dropdown
:nonumber:
Only if you are already familiar with Visual Studio - otherwise please leave until week 4.

Copy this code into Visual Studio and remove the `break` statement - find out what happens. 

Typing {kbd}`ctrl` and {kbd}`c` simultaneously will stop execution in the terminal.

Please do not try this in the 'Live Code' window.
```
````{code_example-end}
````
This code behaves identically to `while(true){}` .

## For-statement - Multiple Loop-Variables
The for-statement can initialise more than one loop-variable, which may all be used in the loop-condition, and included in the final expression e.g. multiple variables are incremented. 
````{code_example-start} Multiple Loop Variables
:label: examples5
:class: dropdown 
:nonumber:
````
```{code-cell} c++
:tags: [remove-output, skip-execution]
#include <iostream>
int main()
{
    for (int x = 0, y = 10; x < 5 && y > 5; ++x, --y) std::cout << x << '\t' << y << '\n';
    return 0;
}
```
After each iteration, the final expression increments x and decrements y by one each. The condition uses the logical ‘AND’ operator `&&` to require two conditions to be true at the same time in order for the loop to continue.
```{exercise} Multiple Loop-Variables
:class: dropdown
:nonumber:
The condition in this example can be simplified but still produce the same output - work out how.
```
````{code_example-end}
````


## Comparison to While Loops and Functions

`````{code_example-start} Loops
:label: examples6
:class: dropdown
:nonumber:
`````
Run the following code, which demonstrate the same task being completed by a for-statement, a while-statement, and a recursive function call.

````{code-cell} c++
:tags: [remove-output]
#include <iostream>

void loopFunction(int loopVariable, int exitValue) {
    if (loopVariable <= exitValue) {    // Checks loop condition
        std::cout << loopVariable << '\t';
        loopFunction(++loopVariable, exitValue); // Function calls itself = recursion
    }
}
int main() {
    for (int loopVariable = 0; loopVariable <= 10; ++loopVariable) std::cout << loopVariable << '\t';
    std::cout << '\n';
    int loopVariable = 0;
    int exitValue = 10;
    while (loopVariable <= exitValue) { // Check the termination condition
        std::cout << loopVariable << '\t'; // Execute code block
        ++loopVariable; // Increment the loop-variable
    }
    std::cout << '\n';
    loopFunction(0, 10); // Calls function
    return 0;
}
````
`````{code_example-end}
`````
## For-Statements - More on the Syntax
``````{syntax-start}  For-Statements
:label: examples11
:class: dropdown 
:nonumber: 
``````
Extending the syntax rules for the `for-statement` .
****
````{card} First Argument - Initial Expression
The initial expression/statement is often called the loop-initialiser because it usually declares a loop-variable and initialises its value.

However, the initial expression can be any expression that must be executed exactly once before the iterations begin.

More than one loop-variable can be initialised in the initialisation statement. 

If no loop-variable is required, an {term}`empty statement` may be used i.e. just the `;` .
````
````{card} The Loop-Variable
Loop-variables are often used to control the number of iterations and are therefore also called the loop-counter and other similar names.

A loop-variable is local to its for-statement - they can be used in the associated code-block but cannot be shadowed (i.e. you may not declare another variable called `i` inside the code-block).


```{code-block} c++
int main() {
    for (int i = 0 ; ; ) {
        double i = 1;   //  Invalid in C++
    }
    return 0; 
}
```
Variables called `i` from other namespaces, including the global namespace, may be used on the loop via the {term}`Scope Resolution Operator` - `::` .

If the final value of the loop-variable is required after execution of the for-statement ends - the loop-variable must be declared before, and outside of, the for-statement. Its value can still be re-assigned in the initial statement, so that it always starts at the same value etc.

````
````{card} Conditional Expression
The for-statement condition is an expression which is evaluated at the start of each iteration – the code block is only executed if the condition evaluates to true. The condition must therefore always yield a `Bool` or be implicitly convertible to an integral type. 

The condition is not optional but may be an empty statement, i.e. just the second `;`. 

An `empty condition` evaluates to `true` causing the code-block to repeat forever, unless a `break` statement is encountered.

Instead of a conditional expression using a comparison operator, the condition may be a simple declaration e.g. declaring and initialising a new variable, or an assignment expression - provide the value assigned is not zero or null. 

There are some other {term}`truthy expressions` that evaluate to true or false when the context requires a Boolean i.e. when they are placed where the program expects a Boolean. Some objects unexpectedly evaluate to true e.g. `std::cout` evaluates to true unless the operation fails - it has a good/bad state that is checkable.

````
````{card} Final Expression
The third argument can by any statement that is required to run once after the code-block is executed in each iteration. 

The most common example is an increment statement - used to change the loop-variable and ensure that the loop ends.

```{code-block} c++
int main() {
    for (int i = 0; i < 1; std::cout << "Loop goes back to check condition and ends!") {
        std::cout << "Loop ran once \n";
        ++i;
    }
    return 0;
}
```

````
````{Card}  Code-Block
The code-block usually has no effect on the loop condition (best practice) but it does often utilise the loop variable to change what happens during successive iterations.
The code-block could of course be a single statement.
````
````{card} Exiting the for-loop, or Ending the Current Iteration
Inside the code-block: 
-	`break` causes the program to exit the for-statement and continue with the statements following it.
-	`continue` causes the program to skip to the next iteration of the for-loop AFTER first executing the final expression.

Both `break` and `continue` would normally be found inside a selection statement nested inside the loop.

An empty condition statement evaluates to true. Therefore, the code block repeats forever, unless there is a `break` statement.
````
Full information on [for-statements](https://en.cppreference.com/w/cpp/language/for.html) can be found in the C++ reference.
``````{syntax-end}
``````

`````{code_example-start} Unconventional Arguments
:class: dropdown
:nonumber:
:label: examples12
`````
Try this code...
````{code-cell} c++
:tags: [remove-output, skip-execution]
int main() {
    int n = 0;
    for (std::cout << "Begin Loop \n";  std::cout << "Iteration";  std::cout << ++n << '\n') {
        if (n > 3) { 
            std::cout << "... Ended by Break! \n";
            break;
        }
    }
    return 0;
}
````
````{code_explanation} examples12
:class: dropdown
In this example, the first argument only outputs "begin loop".

Since std::cout returns a reference to the output stream, which evaluates to true, the loop continues unless explicitly terminated i.e. by `break` .

The final statement includes an increment expression inside an output steam statement.
````
`````{code_example-end}
`````


## Iteration over the Elements of a `vector`
```{warning}
The next sections requires that you have read the chapter on [vectors](vectors) - please return to this page later.
```
`std::cout` does not allow you to print out all the values of an array or a vector simply by calling their identifier. Individual elements can be printed by index.

As a result, the for-statement is often used to traverse an array or vector and print the values of all their elements.

````{code_example-start} Printing a Vector
:label: examples8
:class: dropdown
:nonumber:
````
This example also shows how to create a vector of 6 integer value '0' elements, and how to modify one of the elements.

The vector called `myVectorOfZeros(6)` demonstrates a useful way to specify the length of a vector before its values are actually assigned.

The key point of the example is the for-statement.
```{code-cell} c++
:tags: [remove-output, skip-execution]
#include <iostream>
#include <vector>
int main() {
    std::vector<int> myVectorOfZeros(6);
    std::vector<int> myVector = { 1, 2, 3, 4, 5, 6 };
    myVectorOfZeros[2] = 5;
    for (int i = 0; i < myVectorOfZeros.size(); ++i) std::cout << i << '\t' << myVectorOfZeros[i] << '\t' << myVector[i] << '\n';
    return 0;
}
```
And for a vector of strings:

```{code-cell} c++
:tags: [remove-output, skip-execution]
#include <iostream>
#include <vector>
int main() {
    std::vector<std::string> myVectorOfEmptyStrings(6);
    for (int i = 0; i < myVectorOfEmptyStrings.capacity(); ++i) std::cout << i << '\t' << myVectorOfEmptyStrings[i]+"?" << '\n';
    return 0;
}
```
````{code_example-end}
````
(range-for)=
## Range-For: Traversing a Vector

A variant of the for-statement is the range-based for-statement or range-for loop, which is used to iterate over a range.

A range is defined as anything that you can iterate through e.g. arrays or containers like std::vector that have member functions `begin()` and `end()`. 

The range-for loop repeats once for each element in an array or vector. In each iteration, the loop-variable represents the value of the next element in the array or vector.

A loop-variable is again declared in the first argument to a range-for-statement, which is again local to the for-statement, and whose name cannot be re-declared or shadowed. 

The range of the indexes of any vector is the half-open sequence [0 : vectorName.size() ) i.e. '0' is included, but the last element is `vectorName.size()-1` .

`````{syntax-start} range-for
:class: dropdown
:nonumber:
`````
A variant of the for-statement is the range-based for-statement or range-for loop.
````{code-block} c++
for (init-statement; item-declaration  : range-intialiser) {}
// or more commonly 
for ( item-declaration  : range-intialiser) {}

````
The init-statement was only added in C++20 and will not work in all compilers - the second version without the init-statement is the only one discussed.

The item-declaration must be a simple declaration with the following restrictions:
- Only one declarator, which has no initialiser.
- The declaration specifier sequence can only contain type specifiers and `constexpr` , and it cannot define a class or enumeration.

The range-initialiser is either:
- An expression that evaluates to an array or vector, including just an identifier.
- An initialiser list, i.e. values enclosed by `{}` .

More advanced: In the item declaration using `auto` and a reference, e.g. `&i` is always preferable. Using a reference avoid copying, but declaration of `constexpr` is then required to prevent modification.

`````{syntax-end}
`````

`````{code_example-start} Range-For Loops
:label: examples10
:class: dropdown
:nonumber:
`````
````{code-cell} c++
:tags: [remove-output, skip-execution]
#include <iostream>
#include <vector>
int main() {
    std::vector<int> myVector = { 10, 20, 30, 40, 50 };
    myVector[2] = 5;
    for (int i : myVector) {
        if (i == 10) std::cout << typeid(i).name() << '\n';
        std::cout << i << '\n';
    }
    return 0;
}
````
The number of iterations equals the number of elements in the vector. 

The loop-variable takes the value of the nth element during the nth iteration.

````{exercise}
:class: dropdown
:nonumber:
Find out what happens if:
- The loop-variable `i` is used as the index for `myVector` .
- The comparison is `i == 0` .
- Try using this range-for in the above code.
```{code-block} c++
    for (auto &i : myVector) {
        if (i == 10) std::cout << typeid(i).name() << '\n';
        std::cout << i << '\n';
    }
```
````

`````{code_example-end}
`````

## Using `auto`

The correct type to use for the loop-variable of a for-statement may not always be obvious, so using `auto` is often helpful:

````{code_example-start} Auto
:label: examples7
:class: dropdown
:nonumber:
`````
This example also demonstrates the use of iterators to traverse a vector.
````{code-cell} c++
:tags: [remove-output, skip-execution]
#include <iostream>
#include <typeinfo>
#include <vector>
#include <string>
int main() {
    std::vector<std::string> myVector = {"Around", "the ", "rugged", "rock", "the", "ragged", "rascal", "ran"};
    for (auto itr = begin(myVector); itr != end(myVector); ++itr) {
        if (itr == begin(myVector)) std::cout << typeid(itr).name() << '\n';
        std::cout <<  *itr << '\n';
    }
    
    return 0;
}
````
````{code_explanation} examples7
:class: dropdown
`itr` is given type `iterator` because the `begin()` returns an iterator.

{term}`Iterators` are similar to pointers - covered in week 3. Adding '1' to an iterator causes it to refer to the next element of the vector.

`*itr` gives the value of the element that `itr` references.
````
````{code_example-end}
`````
