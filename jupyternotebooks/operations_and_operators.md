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

# Operations and Operators

## Expressions

An expression is a sequence of operators and their operands, that specifies a computation.

Expression evaluation may produce a result (e.g. evaluation of 2 + 2 produces the result 4) and may generate side-effects (unexpected behaviours). 

Each C++ expression is characterized by two independent properties: A {term}`type` and a {term}`value category`.

## Operations and Operators
Each {term}`type` can only be operated on by specific operators. It would not make sense for every operator to work on all types or in the same way on different types, e.g. multiplication using `*` on two strings would make no sense.

Some operators are **overloaded** - meaning they do work on different types, but not necessarily in the same manner.

For example: `+` is the addition operator for arithmetic types, but the {term}`concatenation` operator for `string` and `char` types.

Programmers can also overload some operators.

`````{code_example-start} Operators
:label: examplek1
:class: dropdown
:nonumber:
`````
Complete and run the following code:
````{code-block} c++
int count;
std::string name;
std::cout << "Please enter a number followed by your surname.\n";
std::cin >> count; 
std::string name;
std::cin >> name;
int c2 = count + 2;
std::string motivator = "Dr." + name;
std::cout << "Study " << c2 << " times harder " << motivator << "!\n";
return 0; 
````
````{code-cell} c++
:tags: [remove-output, skip-execution]
Write code here..
````
```{exercise}
:class: dropdown exercise
:nonumber:
Try moving the declaration of name to after `std::cin >> name;`.
```
We can use concatenation instead of repeating `<<`, however, that would require conversion to `string`.

Try the following code.
```{code-block} c++
std::cout << "Please enter a floating-point number : \n";
double n;
std::cin >> n;
std::cout << "n == " << n
<< "\nn + 1 == " << n + 1
<< "\nthree times n == " << n * 3
<< "\ntwice n == " << n + n
<< "\nhalf of n == " << n / 2
<< "\nsquareroot of n == "
<< sqrt(n)
<< "\n";
```
Note:  The definitions of integer *, /, and % guarantee that for two positive integers `a` and `b` we have `(a / b) * b + (a % b) == a`.

````{exercise-start}
:class: dropdown exercise
:nonumber:
:label: exercisek5
````
Is the modulus truncating or flooring in c++?
```{solution} exercisek5
It is truncating i.e. always rounds towards zero. Flooring is always rounded downwards. Swift is truncated – Python is floored.
```
````{exercise-end}
````
`````{code_example-end}
`````

Check the list of operators on the Learn page.

````{admonition} Incrementing and Decrementing Arithmetic Types
:class: dropdown note
Incrementing or decrementing can be programmed in several ways.

`++count` is identical to `count = count + 1`. `--count` is identical to `count = count - 1`.
````

(assignment operators)=
## Assignment operators

{term}`Assignment`-operators modify the value of an object.

{term}`Copy-Assignment` replaces the contents of an object (often a value) with the contents of a second object. The copied object is unaffected by copy-assignment.

`````{code_example-start} Copy Assignment
:label: examplek4
:class: dropdown
`````
Demonstration of copy-assignment.
```{code-cell} c++
:tags: [remove-output, skip-execution] 
#include <iostream>
int main() {
  int a = 5;
  int b = 10;
  std::cout << a << '\n' << b << '\n';
  a = b;
  std::cout << a << '\n' << b << '\n';
  return 0;
}
```
`````{code_example-end}
`````
`````{syntax-start} Assignment Operators
:nonumber:
:class: dropdown
`````
```{list-table}
:header-rows: 1
:name: example_table_2
* - Operator Name
  - Syntax
  - Effect ( y not mutated )
* - Assignment
  - x = y;
  - Contents of object x now the same as contents of object y
* - Addition Assignment
  - x += y;
  - Value of object x is now the original value of x added to the value of y
* - Subtraction Assignment
  - x -= y;
  - Value of object x is now the result of subtracting the value of y from x
* - Multiplication Assignment
  - x *= y;
  - Value of object x is now the result of multiplying x by y
* - Division Assignment
  - x /= y;
  - Value of object x is now the result of dividing x by y
* - Remainder Assignment
  - x %= y;
  - Value of object x is now the remainder resulting from dividing x by y
```
`````{syntax-end}
`````
## Subscript Operator

`[]` is the subscript operator, which is used to index into arrays and other containers - refer to the later chapters on arrays or vectors.

## The Comma Operator

The most common use of a comma in C++ us as a separator. For example, to declare or define multiple variable of the same type:
````{code-block} C++
int firstInt = 3, secondInt, thirdInt {4};
````
Or to separate parameters in a function declaration or call:
````{code-block} C++
void myFunction (int a, std:string b, bool c) {}
````
The other use of the comma is the {term}`comma operator`, which enables the evaluation of multiple expression at any point in the code where a single expression might normally be located.

`````{syntax-start} Comma Operator
:class: dropdown
:nonumber:
`````
The syntax of the comma operator.
````{code-block} C++
Expression1 , Expression2;
//equivalently
(Expression1 , Expression2);
````
In a comma expression `Expression1 , Expression2;`, `Expression1` is evaluated, its result is discarded, and its side effects are completed, before evaluation of `Expression2` begins.

The type, value, and value category of the result of the comma expression are exactly the type, value, and value category of the second operand, `Expression2`; If `Expression2` is a temporary expression, the result of the expression is that temporary expression.

The parentheses are only required when there might be confusion with the comma separator.
`````{syntax-end}
`````
The comma operator is particularly dangerous and should be used only when there is no other choice.

`````{code_example-start} Comma Operator
:label: examplek8
:class: dropdown
:nonumber:
`````
In this case the parentheses are clearly required.
````{code-cell} c++
:tags: [remove-output, skip-execution]
#include <iostream>
int main() {
    int myInt = 10;
    std::cout << "myInt = " << (++myInt, myInt *= 2) << '\n';
    return 0;
}
````
`myInt` is incremented and then the new value is passed to the output stream.
````{exercise} Comma Operator
:label: exercisek8
:class: dropdown
:nonumber:
Try removing the parentheses.

Try moving the comma expression without parentheses to another position to show parentheses are not always required.
```{admonition} Explanation
:class: dropdown
Without the parentheses, the second argument is discarded, and the result is the first argument. To only achieve the increment, `++myInt` on its own suffices. 

The parenthesised expression could be replaced with `(myInt + 1) * 2`, which is safer.

The comma expression can by moved to a separate line, `++myInt, myInt *= 2;`, and then only `myInt` need be sent to `std::cout`.

```
````
Comma operators can be chained; the result of the last (rightmost) expression is the result of the whole chain.

Complete and run this code - predict what will happen.
````{code-cell} c++
:tags: [remove-output, skip-execution]
#include <iostream>
int main() {
    int n = 1;
    int m = (++n, std::cout << "n = " << n << '\n', ++n, 2 * n);
    std::cout << "m = " << m;
    return 0;
}
````
What is the value of m at the end? Please check. 
`````{code_example-end}
`````


## Ternary Operators
Example:
`return (a >= b) ? a : b;`

The `?` construct is called an 'arithmetic if' or a conditional expression. 

The returned value will be `a` if the condition is true and `b` if the condition is false. That is, if the condition is true, the ternary operator returns `a` otherwise `b`.



`````{exercise-start} Ternary Operator
:label: exercisek2
:class: dropdown
`````
Complete this code using the ternary operator to print out the name of the 'enemy' that is closest.
````{code-cell} c++
:tags: [remove-output, skip-execution] 
#include <iostream>
#include <string>
int main() {
  while (true) {
    std::string city1;
    std::cout << "Enter the name of city 1...";
    std::cin >> city1; 
    int dist1;
    std::cout << "Enter the distance to city 1 from Glasgow...";
    std::cin >> dist1;
    std::string city2;
    std::cout << "Enter the name of city 1...";
    std::cin >> city2;
    int dist2;
    std::cout << "Enter the distance to city 1 from Glasgow...";
    std::cin >> dist2;
    
  }
  return 0;
}
````

````{solution} exercisek2
:label: solutionk2
:class: dropdown note
Try variations on this code:
```{code-block} c++
    (dist2 < dist1) ? std::cout << "City 2 \n" : std::cout << "City 1 \n";
```
````

`````{exercise-end}
`````

## Comparison Operators

Comparison operators are used to form expressions which return a `bool` i.e. the expression evaluates to either `true` or `false`.
`````{syntax-start} Comparison Operators
:nonumber:
:class: dropdown
`````
Comparison expressions and operators:
```{list-table}
:header-rows: 1
:name: example_table_3
* - Operator Name
  - Syntax
  - Returned Boolean Value
* - Is equal to 
  - A == B
  - True only for equality of A and B
* - Not equal to
  - A != B
  - True only when A does not equal B
* - Less than
  - A < B
  - True when A is lower than B
* - Greater than
  - A > B
  - True when A is greater than B
* - Less than or equal to
  - A <= B
  - True if A is either less than B or equal to B
* - Greater than or equal to
  - A >= B
  - True is B is either less than or equal to A 
```
`````{syntax-end}
`````
`````{code_example-start} Comparison Operators
:nonumber:
:class: dropdown
`````
Example of using Comparison Operators and the Ternary Operator
````{code-cell} c++
:tags: [remove-output, skip-execution]
#include <iostream>
int main()
{
    static_assert(sizeof(unsigned char) < sizeof(int), "Cannot compare signed and smaller unsigned properly");
    int a = -1;
    int b = 1;
    unsigned int c = 1;
    unsigned char d = 1;

    std::cout << std::boolalpha
        << "Comparing two signed values:\n"
        " -1 == 1 ? " << (a == b) << "\n"
        " -1 <  1 ? " << (a < b) << "\n"
        " -1 >  1 ? " << (a > b) << "\n"
        "Comparing signed and unsigned:\n"
        // may issue different-signedness warning:
        " -1 == 1 ? " << (a == c) << "\n"
        // may issue different-signedness warning:
        " -1 <  1 ? " << (a < c) << "\n"
        // may issue different-signedness warning:
        " -1 >  1 ? " << (a > c) << "\n"
        "Comparing signed and smaller unsigned:\n"
        " -1 == 1 ? " << (a == d) << "\n"
        " -1 <  1 ? " << (a < d) << "\n"
        " -1 >  1 ? " << (a > d) << '\n';
}
````
`````{code_example-end}
`````
```{admonition} New Three-Way Comparison Operator
:class: note dropdown

The three-way comparison operator `<=>` (the spaceship operator) was only recently introduced into C++ to provide a single way of determining whether two objects are either less than, equal to, or greater than each other in a single operation.

`<=>` returns a result that indicates whether the left-hand side is less than, equal to, or greater than the right-hand side. For example: 
`(A <=> B) < 0` means `a < b`, `(a <=> b) == 0` means `a == b`, and `(a <=> b) > 0` means `a > b`.
```

## Boolean (Logical) Operators

`````{syntax-start} Boolean Operators
:nonumber:
:class: dropdown
`````
Operators used in Boolean (Logical) expressions.
```{list-table}
:header-rows: 1
:name: example_table_4
* - Operator Name
  - Syntax Keyword
  - Syntax Symbol
  - Effect (y remains unchanged)
* - Logical Negation
  - `not A`
  - `!A`
  - Returns `true` only if `A` returned `false`.
* - Logical And
  - `A and B`
  - `A && B`
  - Returns `true`, only if both `A` and `B` are `true`.
* - Logical Or (Inclusive)
  - `A or B`
  - `A || B`
  - Returns `true`, if either one, or both, of `A` and `B` are `true`. i.e. only returns `false` if both were `false`.
```
`````{syntax-end}
`````
## Short Circuiting

It may be possible to correctly evaluate a compound logical expression without evaluating all the individual expressions. 

For example, if the condition being checked is: `A && B`. It is only necessary to check that `B` is true when `A` has first been found to be true. If `A == false`, it does not matter what `B` evaluates to because `A && B == false`.

Similarly, if the condition is `A || B` then when `A` has evaluated as true, there is no need to check `B`. When `A` is true, then regardless of the status of `B`, `A || B == true`. 

These two situations are referred to as short-circuit evaluation, which is useful in computing for two main reasons:

- Computer resources and time can be saved not completely evaluating some very complex expressions.
- Additional Boolean expressions can be used to protect against unsafe conditions.

`````{code_example-start} Short Circuit Evaluation
:nonumber:
:class: dropdown
`````
For example, to prevent a condition throwing a 'division by zero' error, any time a condition involves division by a variable value, it can be logically protected by first checking that the variable is not zero, and short circuiting with logical `&&` or `||`, for example:
```{code-block} c++
(A != 0) && (A + 1/A < 100) (a == 0) || (a + 1/a < 100)
```
If `a` is 0, the first expression `(a == 0)` is `true` and the second expression is not evaluated.
`````{code_example-end}
`````
## Order of evaluation

The order of evaluation of any part of any expression, including the order of evaluation of function arguments, is usually unspecified. The {term}`compiler` can evaluate operands and other subexpressions in any order and may choose another order when the same expression is evaluated again.

There is no concept of left-to-right or right-to-left evaluation in C++. This is not to be confused with left-to-right and right-to-left associativity of operators: 

The expression `a() + b() + c()` is parsed as `(a() + b()) + c()` due to left-to-right associativity of operator `+`, but `c()` may be evaluated first, last, or between `a()` or `b()` at runtime.

This becomes a problem when values changed depending on what is evaluated first.

## Unspecified Behaviours

The behaviour of every part of your code must operate in the way you expect it to, or unexpected outcomes will result. 

Unspecified behaviours are those which may vary between implementations, and which the implementation is not required to document. There are several types of undefined behaviours. Some behaviour varies between implementations and can be allowed for by checking the documentation for your implementation and conforming to the rules.

The problem with unspecified behaviours is that each possible behaviour is valid, and it can be difficult to know what to expect.

