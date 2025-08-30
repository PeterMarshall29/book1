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

Selection and iteration statements are control flow statements - they control the sequential flow of the execution of a programme. 

The {term}`control flow` refers to the order in which all its statements are executed. 

More literally {term}`control flow` refers to the sequential flow of ***control*** through the program - i.e. the current statement has *control* of the processor. 

{term}`Control flow statements` break up the flow of execution, by transferring control of execution to the next statement by deciding between two possible paths. 
***
Without selection statements a program can only run from beginning to end - executing the same statements in the same order every time.

Without iteration statement a program has to end - your phone's program is constantly running because code is repeatedly executed in a loop.
```{note}
:class: margin
'Control Flow' and 'Flow Control' are used almost interchangebly.

Flow control, just refers to controlling the sequential flow of execution.

Both refer to the mechanisms that dictate the order in which statements are executed in a program. 
```
````{admonition} Statements and Expressions

A computer programme is a sequences of statements, which are executed sequentially.

The order of the execution, is determined by the {term}`control flow`
A computer programme is a sequences of statements, which are executed sequentially.

The simplest type of statement is an {term}`expression statement` - an expression followed by a terminator.

Expression are sequences of operators and their operands, that specifies a computation.

When the expression statement is executed, the expression is evaluated, producing a result which will have a {term}`value` and a {term}`type`.

Statements are always terminated by either a semicolon `;` or by a {term}`code block` {...some code here...}, which may be empty or contain statements.

Forgetting to terminate a statement correctly will result in a compile-time error. 

A semicolon is a statement terminator, and by itself a statement, an {term}`empty statement` (null statement). 

An expression statement without an expression is called a {term}`null statement`, which may be used to provide an empty body to a for or while loop, or to carry a label in the end of a compound statement.
Statements always terminate with either a semicolon `;` or with a code block `{...some code here...}.

A code block may be a compound statement, enclosing multiple statements.

Forgetting to terminate a statement correctly will result in a compile-time error. 
````
(selection)=
## Selection

Selection statements conditonally changes the control flow.

A decison is made to follow one of two possible flows, depending on whether a condition is found to be true or false at the time of checking.

In C++ the selections statements are the [if](if)-statement and the [switch](switch)-statement


(iteration)=
## Iteration

As an example of iteration, consider the first program ever to run on a stored-program computer (the EDSAC). 

It was written and run by David Wheeler in the computer laboratory in Cambridge University, England, on May 6, 1949, to calculate and print a simple list of squares like this:

`````{example-start}
:label: examplep1
:class: dropdown
`````
````{code-cell} c++
:tags: [remove-output]
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
````{explanation} examplep1
:label: explanationp1
:class: dropdown
````
`````{example-end}
`````

Iterations statements are the [for](for)-statement, the [while](while)-statement, the do-while-statement, and the range-for statement.

Its usually best to use a for loop – even if you want it to run forever – shown later on. If you know how many iterations are required, use a for loop. If you want it to possibly keep running still use a for loop – it cannot be set up without a condition.

## Jump Statement

Jump Statements unconditionally transfers control to another part of the programme.

The available Jump Statements in C++ are.

- Break statement
- Continue statement
- Return statement with an optional expression
- Return statement using list initialization
- Goto statement

`return` - control transfers to the statement following the funcion call.
`break` - control transfers to the statement after the selection or iteration block.

