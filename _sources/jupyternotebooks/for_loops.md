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
The {term}`for-statement` conditionally executes a statement, or code block, repeatedly; also known as the {term}`for-loop`, and is the most frequently used and important iteration control structure in C++.
````{admonition} The Syntax of the For-Statement
```{code-block} c++
for ( loop_variable_declaration_and_initialisation    ; 
      condition_to_continue_the_loop                  ; 
      end_of_iteration_expression ) { code_to_be_executed_every_loop }
```
````
The three statements in parentheses are the arguments of the for-statement and collectively manage its behaviour.  

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

``````{code_example-start} 
:label: examples1
:class: dropdown
``````
Start the live code editor, complete the program, and run this code.
`````{code-block} c++
:linenos: 
:emphasize-lines: 2
:name: codes1
:caption: For Loop Template
for (int i = 0; i < 10; ++i) {
std::cout << i << "\t" << i * i << "\n";
}
`````
The highlighted code statements are repeated as many times as required by the `for-statement`.
`````{code-cell} c++
:tags: [remove-output, skip-execution]
Type code here...
`````
Because the for-statement {term}`loop-variable` has been included in this statement, the value printed to the output stream will be different in every iteration.
`````{code_explanation} examples1
:label: explanations1
:class: dropdown note
````{card}
The syntax for this example shows the most common pattern for a for-statement loop:
```{code-block} c++
for (int i = 0; i < 100; ++i) {
**Code statements to be executed each time the loop runs go here** 
}
```
The 3 semicolon delimited terms in parentheses control the operation of the for-loop.
````
````{card}
```{code-block} c++ 
int i = 0;
```
The first argument is the for-statement initialiser. 

This statement names a loop-variable `i` and initialises it with a value of `0`.

The loop variable is local to the for-statement and can be used in the code-block. No other variable called `i` may be used inside the for-statement code block.
````
````{card}
```{code-block} c++
 i < 100;
```
The second argument is the for-statement condition. 

The for-loop runs until this condition becomes false, repeating the code-block each time.

The condition must be an expression that returns a Boolean, and it must be true on the first loop - or the program exits the loop.

If the condition is empty, it evaluates to `true`, so the loop runs. 
````
````{card}
```{code-block} c++
++i;
```
The third and final argument is the for-statement increment. 

***After*** executing the for-statement's code block, the loop-variable is increased or decreased according to this instruction. The increment/decrement can be by any constant amount. 
````
`````
``````{code_example-end}
``````
`````{code_example-start} 
:label: examples2
:class: dropdown
`````
It is bad practice, and a common mistake, to increment the loop-variable within the execution block; this should only be done for a good reason.

In programming it is always better to separate concerns. In this case it is better to leave control to the loop arguments.

When the loop variable increment instruction appears in both the code-block and the for-statement argument - both increment instructions are implemented in each loop.

The instructions are also implemented in sequence and can result in two different values being used for the loop-variable in a single iteration.

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
`````{code_example-end}
`````


(forever)=
## Forever
The for-statement parentheses may not be empty - the compiler will not permit it. 

The minimum argument to a for-statement is `(;;)`.

`for(;;){}` is a way to specify an infinite loop; sometimes called a ‘for-ever statement’..

````{code_example-start} 
:label: examples3
:class: dropdown
````
```{code-cell} c++
int main()
{
    for (;;) {
        std::cout << "Loop ran once because 'break' was included! \n";
        break;
    }
    return 0;
}
```
````{code_example-end}
````
This code behaves identically to `while(true){}`.
## Single Commands
If there is only a single statement i.e. not a whole code block of statements, then the statement can simply be placed after for-statement, and closed with `;`.
````{code_example-start} 
:label: examples4
:class: dropdown
````
```{code-cell} c++
#include <iostream>
int main() {
  for (int i = 0; i < 10; ++i) std::cout << i << '\t';
  return 0;
}
```
````{code_example-end}
````
## For-statement - Multiple Loop-Variables
The for-statement can only initialise more than one loop-variable, the final expression can affect both, and the condition can take account of both values. For example: 
````{code_example-start} 
:label: examples5
:class: dropdown 
````
```{code-cell} c++

int main()
{
    for (int x = 0, y = 10; x < 5 && y > 5; ++x, --y) std::cout << x << '\t' << y << '\n';
    return 0;
}
```
After each iteration, x is incremented and y decremented by one each. The condition uses the logical `AND` operator `&&` to required two conditions to be true at the same time.
````{code_example-end}
````

## Comparison to While Loops and Functions

`````{code_example-start} 
:label: examples6
:class: dropdown
`````
Run the following code - showing a for-statement, a while-statement, and a recursive function doing the same thing.

````{code-cell} c++
:tags: [remove-output]
#include <iostream>

void loopFunction(int loopVariable, int exitValue) {
    if (loopVariable <= exitValue) {    //checks loop condition
        std::cout << loopVariable << '\t';
        loopFunction(++loopVariable, exitValue); //function calls itself
    }
}
int main() {
    for (int loopVariable = 0; loopVariable <= 10; ++loopVariable) std::cout << loopVariable << '\t';
    std::cout << '\n';
    int loopVariable = 0;
    int exitValue = 10;
    while (loopVariable <= exitValue) { // Check the termination condition
        std::cout << loopVariable << '\t'; //execute code block
        ++loopVariable; // Increment the loop-variable
    }
    std::cout << '\n';
    loopFunction(0, 10); //Call function - recursion
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
Extending the syntax rules for the `for-statement`.
****
````{card} Initialisation Statement
The initialisation statement creates a new variable and initialises its value – this variable is used to control the loop and later the execution of the code in the code block, and is called the `loop-variable`, or loop-counter, and similar terms.
The initialisation statement is only executed once, before the iterations, if any, begin.
More than one loop-variable can be initialised in the initialisation statement, and if no initialisation is required it may be left as a null statement, i.e. just the `;`. 
````
````{card} The Loop-Variable
The loop variable is local to the for-statement, can be used in the code-block, but cannot be shadowed (you may not declare another variable called `i` inside the code-block).
The loop variable cannot be shadowed - another variable with the same name cannot be declared inside the for-statement’s code block. For example:
```{code-block} c++
int main() {
    for (int i = 0 ; ; ) {
        double i = 1;   //  invalid in C++
    }
    return 0; 
}
```
If the final value of the loop-variable is needed by the program, then the loop-variable must be
declared before the for-statement.  
````
````{card} Condition
The condition is an expression which is evaluated at the start of each iteration – the code block is only executed if the condition evaluates to true. 
The condition must therefore always yield a `Bool`. 
The condition is not optional but may be empty, i.e. just the second `;`. 
An `empty condition` evaluates to `true`; causing the code- block to repeat forever, unless there is a `break` statement.
````
````{card} Increment Expression
The third argument is usually an expression that increment/decrements the loop-variable; however it can be any statement that is required to run once after the code block in each iteration. 
The increment statement controls change to the loop-variable that is implemented following each execution of the code-block.
Without the increment, the loop could run forever; however, the condition can also be changed from within the code-block.
````
````{Card}  Code-Block
The code-block usually has no effect on the loop condition (best practice) but it does often utilise the loop variable to change what happens on each iteration.
The code-block could of course be a single statement.
````
````{card} Break out of Loop, or out of Current Increment
Inside the code-block: 
•	`break` causes the programme to exit the for-statement and continue with the next statement following it.
•	`continue` causes the loop to skip to the next iteration
Both would normally be placed inside a selection statement nested inside the loop.
An empty statement evaluates to true. Therefore, the code block repeats forever, unless there is a `break` statement.
````
````{card} Additional Options
The initialisation statement can also be any other statement that will only be executed once.
Instead of a conditional expression, the condition may be a simple declaration if it yields a `bool`. For example:
```{code-block} c++
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
```
In the above code, the initialisation statement only outputs "begin loop".
The condition is a declaration, if `std::cout << "Iteration"` succeeds, it returns `true`, and the loop continues.
The final statement includes an increment expression inside an output steam statement.

The third statement can be any statement that is required to run once after the code block in each iteration. For example:
```{code-block} c++
int main()
{
    for (int i = 0; i < 1; std::cout << "Loop goes back to check condition") {
        std::cout << "Loop ran once \n";
        ++i;
    }
    return 0;
}
```
````
Full information on [For-statements](https://en.cppreference.com/w/cpp/language/for.html) ca be found in the C++ reference.
``````{syntax-end}
``````
## Using `auto`

It is not always obvious what is the right type to use for a controlled variable in a for-statement, so `auto` often comes in handy:

````{code_example} 
:label: examples7
:class: dropdown

for (auto p = begin(c); c!=end(c); ++p) {
// ... use iterator p for elements in container c ...
}
````
## Iteration with `vector`
```{warning}
The next sections require you to have read the chapter on [vectors](vectors).
```
````{code_example-start} 
:label: examples8
:class: dropdown
````
TRY to create and change a vector of zeros.
```{code-cell} c++
#include <iostream>
#include <vector>
int main() {
  std::vector<int> vzeros(6) ;
  std::vector<int> v = { 1,2,3,4,5 };
  vzeros[2] = 5;
    for (int i = 0; i < vzeros.size(); ++i) std::cout << vzeros[i] << i <<"\t";

}
```
````{code_example-end}
````
````{code_example-start} 
:label: examples9
:class: dropdown
````
```{code-cell} c++
#include <iostream>
#include <vector>

int main() {
  std::vector<std::string> vEmptyStrings(6);
    for (int i = 0; i < vEmptyStrings.capacity(); ++i) std::cout << vEmptyStrings[i]<<", " << i << "\t";
}
```
````{code_example-end}
````
(range-for)=
## Range-For: Traversing a Vector

The range for any vector is the half-open sequence [0 : vectorName.size() ) meaning 0 is included, but the last element is `vectorName.size()-1` .

A `range-for` loop uses this half-open sequence.
````{code_example-start} 
:label: examples10
:class: dropdown
````
```{code-cell} c++
:tags: [remove-output, skip-execution]
std::vector<int> myVector = { 1, 2, 3, 4, 5 };
myVector[2] = 5;
for (int i : myVector) std::cout << i << "\n";
```
The number of iterations equals the number of elements in the vector. 
The loop-variable takes the value of the nth element during the nth iteration.
````{code_example-end}
````
