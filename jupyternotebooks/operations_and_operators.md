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
Each {term}`type` can be operated on by specific operators

Some operators are overloaded - `+` is the addition operator for arithmetic types, but the {term}`concatenation` operator for `string` and `char` types.

Programmers can also overload some operators.

`````{example-start} Example
:label: examplek1
:class: dropdown
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
:class: dropdown
Try moving the declaration of name to after 
```
````{explanation} examplek1
:label: explanationk1
:class: dropdown tip

````
`````{example-end}
`````

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

{term}`Copy Assignment` replace the contents of an object (often a value) with the contents of a second object.

I or a new value. The second object is unaffected

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

`?` construct is called an 'arithmetic if' or a conditional expression. 
The returned value will be a if the condition is true and b if the condition is false.
value of (a >= b) ? a : b is a if a >= b and b otherwise.
That is, if the condition is true, the ternary operator value a if true, otherwise value b.




`````{exercise-start}
:label: exercisek2
:class: dropdown
`````
Complete this code using the ternary operator to print out the name of the enemy that is closest.
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

```{code-block} c++
		(dist2 < dist1) ? std::cout << "City 2 \n" : std::cout << "City 1 \n";
```
````

`````{exercise-end}
`````
## Useful functions

std::max(7,8)
std::abs(a)


## Comparison Operators

Comparison operators are used to form expressions which return a `bool`; i.e. the expression evaluates to either `true` or `false`.

```{list-table}
:header-rows: 1
:name: example_table_3
* - Operator Name
  - Sytax
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

int main()
{
    static_assert(sizeof(unsigned char) < sizeof(int),
        "Cannot compare signed and smaller unsigned properly");
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

```{admonition} New Three-Way Comparison Operator
:class: note dropdown

The three-way comparison operator `<=>` (the spaceship operator) was only recently introduced into C++ to provide a single way of determining whether two objects are either less than, equal to, or greater than each other in a single operation.

`<=>` returns a result that indicates whether the left-hand side is less than, equal to, or greater than the right-hand side. 

For example: (A <=> B) < 0 means a < b. (a <=> b) == 0 means a == b. (a <=> b) > 0 means a > b.
```

## Logical Operators


```{list-table}
:header-rows: 1
:name: example_table_4
* - Operator Name
  - Sytax Keyword
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



## Short Circuiting

Sometimes a logical expression can be correctly evaluated without evaluating all the individual expressions. 

For example, if the condition being checked is: `A && B`.

It is only necessary to check that `B` is true, if `A` is found to be true first. If `A == false`, it does not matter what `B` evaluates to because `A && B == false`.

Similarly, if the condition is `A || B` then if `A` is true, there is not need to check `B` if p is true, then regardless of the status of `B`, `A || B == true` 

These two situation are referred to as short-circuit evaluation, which is useful in computing for two main reasons:

- Computer resources and time can be saved not completely evaluating some very complex expressions.
- Additonal boolean expressions can be used to protect against unsafe conditions.

For example to prevent a condtion throwing a 'division by zero' error, any time a condition involves division by a variable value, it can be logically protected by first checking that the variable is not zero, and short circuiting with logical `&&` or `||`

`(A != 0) && (A + 1/A < 100) (a == 0) || (a + 1/a < 100)

because if a is 0, the first expression (a == 0) is true and the second expression is not
evaluated.






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