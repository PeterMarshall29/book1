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

# Selection and Iteration
```{note}
:class: margin
'Control Flow' and 'Flow Control' are used almost interchangeably.

Flow control refers to controlling the sequential flow of execution.

Both refer to the mechanisms that dictate the order in which statements are executed in a program. 
```
Selection and iteration statements are control flow statements - they control the sequential flow of the execution of a program. 

{term}`Control flow` refers to the order in which the program's statements are executed. 

````{admonition} Statements and Expressions
:class: dropdown
A computer program is a sequence of statements, which are executed sequentially.

Each statement is an instruction to the computer to do something. The simplest and most common type of statement is the {term}`expression statement` i.e. an expression followed by a terminator. 

Expressions are sequences of operators and their operands, that specifies a computation. When expression statements are executed, the expression is evaluated. Evaluation produces a result which will have a {term}`value` and a {term}`type`.

Statements are always terminated by either a semicolon `;` or by a {term}`code-block` {...some code here...}, which may be empty or contain statements. Forgetting to terminate a statement correctly will result in a compile-time error. 

The semicolon is a statement terminator, and by itself a statement called the {term}`empty statement` (null statement). The lone semicolon can be thought of as an expression statement without an expression, which does nothing, but is useful when a statement is required in the syntax, but the programmer does not need or want the program to do anything - see the [forever](forever) loop. The null statement could also provide an empty body to a 'for' or 'while' loop, or to carry a label in the end of a compound statement.

````

More literally {term}`control flow` refers to the sequential flow of **control** through the program - the current statement is said to have *control* of the processor - control is then passed to the next statement in the programmed sequence. 

{term}`Control flow statements` alter the flow of execution, by conditional choosing the next statement to be executed from two options. Nesting control flow statement allows complicated decisions between many possible paths. 
***
Without selection statements: a program can only run from beginning to end - executing the same statements in the same order every time.

Without iteration statements:
- All statement would only be executed once - a mechanism to repeat statements shortens the length of a program.
- A program must end - your phone's program is constantly running because code is repeatedly executed in a loop.



(selection)=
## Selection

Selection statements conditionally change the control flow - a decision is made to follow one of two possible flows, depending on whether a condition is found to be true or false at the time of checking.

In C++ the selections statements are the [if](if)-statement and the [switch](switch)-statement.


(iteration)=
## Iteration

Computer programmes often do the same thing over and over - iteration statements are used to instruct the computer to repeatedly execute the same statements a finite number of times, or until a testable condition changes.

Iteration statements in C++ are the [for](for)-statement, the [while](while)-statement, the do-while-statement, and the range-for statement.

For-statements repeat a code-block a finite number of times in most programming languages. In C++ the for-statement has additional flexibility and is preferred over the other options. 

Range-for statements repeat the code-block once for each element in an array - a simpler version of the for-statement.

While-statements repeat the code-block until a testable condition changes.

Do-while-statements differ from while-statements by always executing the code-block once before testing the iteration condition for the first time.

The first program ever to run on a stored-program computer (the EDSAC), included iteration. Written by David Wheeler and run in the computer laboratory at Cambridge University, England, on May 6, 1949, to calculate and print a simple list of squares. 
`````{code_example-start} Iteration Example
:label: examplep1
:class: dropdown
:nonumber:
`````
This is the c++ equivalent of Wheeler's program.
````{code-cell} c++
:tags: [remove-output, skip-execution]
#include <iostream>
int main() {
  int i = 0;
  while (i < 100) {
    std::cout << i << "\t" << i * i << "\n";
    ++i;
  }
  return 0;
}
````
````{code_explanation} examplep1
:label: explanationp1
:class: dropdown

The while loop repeats the output statement until the value of `i` exceeds 99.

`(i < 100)` is the condition (or loop-condition), that must be true if the loop is to run. The first time the condition is false, the program moves past the loop and continues with the next statements.

The increment assignment `++1` cause the value of `i` to change every loop, which:

1. Is used to print an increased value on every iteration.
2. Makes it possible for the loop to end - if `i` were not changed, the condition would remain true forever.
````
`````{code_example-end}
`````
## Conditions

Selection and iteration are controlled by evaluation of a Boolean (logical) condition. The condition must evaluate to either true or false.

There are several ways to create a condition for the selection and iteration statements:

- The condition can be set manually be inserting a Boolean literal - `0` , `1` , `false` , or `true` .
- Any expression that contains a comparison operator is evaluated to `bool` .
- Wherever the program expects a condition (i.e. in parentheses next to the keywords `if` , `while` , etc.) the compiler will try to convert what it finds to a Boolean.

``````{code_example-start} Comparison Operations
:class: dropdown
:nonumber:
``````
Try the following and add some more comparisons.
`````{code-cell} c++
:tags: [remove-output, skip-execution]
#include <iostream>
int main() {
    int int1 = 4;
    int int2 = 5;
    std::cout << (int1 == int2) << '\n' << (int1 != int2) << '\n' << (int1 <= int2) << '\n' << (int1 > int2);
    return 0;
}
`````
The 1's and 0's represent Boolean `true` and `false` .

`````{exercise-start} 
:class: dropdown
:label: exercisep1
:nonumber:
`````
Use the `<typeinfo>` library to confirm the comparison expressions are evaluated to `bool` …
````{solution} exercisep1
:class: dropdown
Add the following:
```{code-block} c++
#include <typeinfo>
std::cout << typeid(int1 == int2).name()  << '\n' ; // and so on..
```
````
`````{exercise-end}
`````
``````{code_example-end}
``````


## Jump Statement

Jump-statements unconditionally transfer control to another part of the program.

The available jump-statements in C++ are:

- Break statement.
- Continue statement.
- Return statement with an optional expression.
- Return statement using list initialization.
- Goto statement.

`return` - control transfers to the statement following the function call.
`break` - control transfers to the statement after the selection or iteration block.

