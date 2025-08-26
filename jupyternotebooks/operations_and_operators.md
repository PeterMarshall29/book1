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

Expression evaluation may produce a result (e.g., evaluation of 2 + 2 produces the result 4) and may generate side-effects (e.g. evaluation of std::printf("%d", 4) prints the character '4' on the standard output).

Each C++ expression is characterized by two independent properties: A type and a value category.





## Operations and Operators
Each type has different operators – some are overloaded. + is addition for numeric types, but concatenation for string and char

Try this code

int count;
std::cout << "Please enter a number followed by your surname.\n";
std::cin >> count;
std::string name;
std::cin >> name;
int c2 = count + 2;
std::string motivator = "Dr." + name;
std::cout << "Study " << c2 << " times harder " << motivator << "!\n";
return 0; 

We can use concatenation instead of repeating << . However, that requires us to use a string conversion.


Try the following code.
std::cout << "Please enter a floating point number : \n";
double n;
std::cin >> n;
std::cout << "n == " << n
<< "\nn + 1 == " << n + 1
<< "\nthree time n == " << n * 3
<< "\ntwice n == " << n + n
<< "\nhalf of n == " << n / 2
<< "\nsquareroot of n == "
<< sqrt(n)
<< "\n";

Note:  The definitions of integer *, /, and % guarantee that for two positive ints a and b we have a/b * b + a%b == a.
Is the modulus truncating or flooring in c++?
It is truncating i.e – always rounds towards zero. Flooring is always rounded downwards. Swift is truncated – python is floored.

Check the list of operators on the Learn page.

Incrementing by 1 can be achieved several ways.

Count = count + 1 can be written as ++count
Count = count + n can be written as count+=n

## Assignment operators

{term}`Assignment` operators modify the value of an object.

{term}`Copy Assignment` replace the contents of an object (often a value) with the contents of a second object, or a new value. The second object is unaffected

```{code-cell} c++
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

```{list-table}
:header-rows: 1
:name: example_table_2
* - Operator Name
  - Sytax
  - Effect (y remains unchanged)
* - Assignment
  - x = y;
  - Contents of object x now the same as contents of object y
* - Addtion Assignment
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





## Ternary Operators

Example:
`return (a >= b) ? a : b;`

`?` construct is called an arithmetic if or a conditional expression. 
The returned value will be a if the condition is true and b if the condition is false.
value of (a >= b) ? a : b is a if a >= b and b otherwise.
That is, if the condition is true, the ternary operator value a if true, otherwise value b.

## Useful functions

std::max(7,8)
std::abs(a)


## Order of evaluation

The order of evaluation of any part of any expression, including the order of evaluation of function arguments, is usually unspecified.

The {term}`compiler` can evaluate operands and other subexpressions in any order, and may choose another order when the same expression is evaluated again.

There is no concept of left-to-right or right-to-left evaluation in C++. 

This is not to be confused with left-to-right and right-to-left associativity of operators: the expression a() + b() + c() is parsed as (a() + b()) + c() due to left-to-right associativity of operator+, but c() may be evaluated first, last, or between a() or b() at runtime:

## Unspecified Behaiours

The behaviour of every part of your code must operate in the way you expect it to, or unexpected outcomes will result.

Unspecified behaviours are those which may vary between implementations, and which the implementation is not required to document.

There are several types of undefined behaviours. Some behaviour vary between implementations, and can be allowed for by checking the documentation for your implementation and conforming to the rules.

The problem with unspecifed behaviours is that each possible behavour is valid, and it can be difficult to know what to expect.


