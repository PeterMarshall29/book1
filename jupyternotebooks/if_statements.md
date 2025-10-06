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
(if)=
# If Statements
```{note}
:class: margin
{attribution="Yogi Berra" }
> When you get to a fork in the road, take it.
```
The if-statement is used to select between two alternatives - changing what the program does each time it runs depending on the choice made at each if-statement.

At its simplest, an if-statement causes another statement or a code-block to be executed if a condition is true and does nothing if the condition is false. 

The if-statement condition may depend on a choice made by the user of the program, or on a value recorded by a sensor etc.

`````{syntax-start} if-statement Basics
:class: dropdown
:nonumber:
`````
To conditionally execute a single statement:
````{code-block} c++
if (condition) statement_to_execute;
````
To conditionally execute a sequence of statements:
```{code-block} c++
if (condition) { 
  statement1;
  statement2;
  statement3;
  // etc..
  } 
```
Note: if the single statement to be executed is a declaration, it must be introduced in a code-block i.e. inside `{}` - a name declared in an if-statement is local to that statement, so there would need to be other statements in any case.
`````{syntax-end}
`````
`````{code_example-start} Simple if-statement
:label: exampleq1
:class: dropdown
:nonumber:
`````
Try this code:
````{code-cell}  c++
:tags: [remove-output, skip-execution]
#include <iostream>
#include <string>
int main() {
    std::string answer;
    std::cout << "Please enter the answer to the ultimate question of Life, the Universe, and Everything...." << '\n';
    std::cin >> answer;
    if (answer == "42") {
        std::cout << "You are truly wise!";
    }
    return 0;
}
````
````{code_explanation} exampleq1
:label: explanationq1
:class: dropdown
The if-statement is:
```{code-block} c++
if (answer == "42") {}
```
`answer==42` is the condition - which MUST be put in parentheses. 

When the thread of control reaches the if-statement, the condition is evaluated - if the condition evaluates to the Boolean value `1` , or `true` , then the code-block is executed. 

The compiler should not allow you to have a condition that will not evaluate to a `bool` .

In this example, the code-block contains only a single statement and the `{}` are not required, as shown here:
```{code-block} c++
if (answer == "42") std::cout << "You are truly wise!";
```
````
`````{code_example-end}
`````
`````{admonition} if-Statements in Other Languages
:class: dropdown

If statements are found in most programming languages.

Some languages have a separate `elseif` statement - C++ uses nested `if-else` statements instead. 

````{tab} C++
```{code-block} c++
#include <iostream>
int number = 0; 
if (number < 0) {
    cout << "Negative number"; 
} else if (number > 0) { 
  cout << "Positive number"; 
} else { 
  cout << "Zero"; 
}
```
````
````{tab} C#
```{code-block} cs
int number = 0;
if (number < 0) {
  Console.WriteLine("Negative number");
} else if (number > 0) {
  Console.WriteLine("Positive number");
} else {
  Console.WriteLine("Zero");
}
```
````
````{tab} Java
```{code-block} java
int number = 0;
if (number < 0) {
  System.out.println("Negative number");
} else if (number > 0) {
  System.out.println("Positive number");
} else {
  System.out.println("Zero");
}
```
````
````{tab} Javascript
```{code-block} javascript
const number = 0;
if (number < 0) {
  Console.Log("Negative number");
}
else if (number > 0) {
  Console.Log("Positive number");
}
else {
  Console.Log("Zero");
}
```
````
````{tab} Python
```{code-block} python
number = 0
if number < 0:
    print('Negative number')
elif number > 0:
    print('Positive number')
else:
    print('Zero')
```
````
````{tab} Ruby
```{code-block} ruby
number = 0
if number < 0
  puts "Negative number"
elsif number > 0
  puts "Positive number"
else
  puts "Zero"
```
````
````{tab} julia
```{code-block} julia
number = 0
if (number > 0)
    println("Positive")
elseif (number < 0)
    println("Negative number")
else
    println("Zero")
end
```
````
````{tab} ada
```{code-block} ada
if a > 0 then
      Put_Line("yes");
else
      Put_Line("no");
end if;
```
````
`````
if-statements are often paired with else-statements, which are usually referred to as the else-branch of the if-statement. 

`else` provides an alternative statement, or code-block, that will only be executed if the condition is false.

`````{syntax-start} if-statement Basics
:class: dropdown
:nonumber:
`````
To conditionally execute one of two possible statements:
````{code-block} c++
if (condition) statement_to_execute_if_condition_is_true;
else statement_to_execute_if_condition_is_false;
````
To conditionally execute one of two code-blocks:
````{code-block} c++
if (condition) { 
  ..code-block_if_condition_true..
} else {
  ..code-block_if_condition_false..
}
````
`````{syntax-end}
`````
`````{code_example-start} if-else-statement
:label: exampleq2
:class: dropdown
:nonumber:
`````
Try this code:
````{code-cell} c++
:tags: [remove-output, skip-execution]
#include <iostream>
int main() {
    if (true) std::cout << "True!";
    else std::cout << "False!";
    return 0;
}
````
- Try swapping the condition to `false` , and then to `1` and to `0` .

Try the next code:
````{code-cell}  c++
:tags: [remove-output, skip-execution]
#include <iostream>
int main() {
    int x;
    int y;
    std::cout << "Please enter two integral values: \n";
    std::cin >> x >> y;
    if (x < y) {
        std::cout << "The higher value between " << x << " and " << y << " is " << y << ". \n";
        } else {
        std::cout << "The higher value between " << x << " and " << y << " is " << x << ". \n";
        }	
    return 0;
}
````
````{code_explanation} exampleq2
:label: explanationq2
:class: dropdown
The programme does works to an extent... but there are issues. 

- Try entering a pair of identical values.

Clearly this is not what we want - there are three possible outcomes, so we need more than two options from the selection statement. 

The solution is to use nested `if-else` statements (an if-else ladder) (next section) - or to use a `switch` statement instead (next chapter).

- Try entering two numbers where one is a floating-point number - try putting the float both first and second - what is the difference?

The first `int` takes the number before the decimal point, but then the non-integer character causes an issue for the second variable. 

Try adding a line with `std::cin.ignore(100, ' ')` or `std::cin.ignore(100, '\n')` to resolve this issue (first one if you enter two numbers, space separated - second one if you hit return after each number) - these statements cause the buffer to be cleared until the next space or newline, or 100 characters, whichever comes first - empty parentheses causes only a single character to be discarded.
````
`````{code_example-end}
`````

`if-else` statements can be nested creating an `if-else-if` ladder.

`````{syntax-start} if-else-if Ladder
:class: dropdown
:nonumber:
`````
Single statement version follows previous pattern of dropping the `{}` ...
```{code-block} c++
if (condition1) {
  ..code-block_if_first_condition_true..
} else if (condition2) {
  ..code-block_if_second_condition_true..
} else {
  ..code-block_if_ALL_conditions_false..
}
```
The ladder can continue with additional `else if` branches but there can only be one `else` branch.

Only one of the `else if` statements will be executed - once a condition evaluates as true, the other if-statements are behind the next else-statement and are therefore not considered.
`````{syntax-end}
`````
``````{code_example-start} if-else-if Ladder
:class: dropdown
:nonumber:
``````
Try this code... a couple of corrections are required - see the error message for details.
`````{code-cell} c++
:tags: [remove-output, skip-execution]
#include <iostream>
int main() {
    int yourScore;
    std::cout << "Please enter the percentage you scored (0-100): \n ";
    std::cin >> yourScore;
    if (yourScore < 0 || yourScore > 100) std::cout << "Invalid input - Please enter a percentage between 0 and 100." << '\n';
    else if (yourScore >= 70) std::cout << "Grade: A" << '\n';
    else if (yourScore >= 60) std::cout << "Grade: B" << '\n';
    else if (yourScore >= 50) std::cout << "Grade: C" << '\n';
    else if (yourScore >= 40) std:: cout << "Grade: D" << '\n';
    else cout << "Grade: F" << '\n';
    return 0;
}
`````
`````{exercise-start} if-else-if
:class: dropdown
:label: exerciseq2
:nonumber:
`````
Is there a way to have the program give you a second chance if your first input is invalid?
````{solution} exerciseq2
:class: dropdown
Substitute the following lines:
```{code-block} c++
if (yourScore < 0 || yourScore > 100) {
    std::cout << "Invalid input - Please enter a percentage between 0 and 100." << '\n';
    std::cin >> yourScore;
}
if (yourScore >= 70) std::cout << "Grade: A" << '\n';
```
Try replacing the second `if` statement with an `else if` . Can you explain how this has affected the execution.

How could you ensure that more invalid entries are not a problem?
````
`````{exercise-end}
`````
``````{code_example-end}
``````

## Compound Conditions

Compound conditions are constructed using Boolean operators to combine the Boolean result of multiple expression using comparison operations.

`&&` is the logical `and` and evaluates `true` when **all** the expressions are `true` .

`||` is the logical `or` and evaluates `true` if **any** of the expressions are `true` . 

`&&` and `||` are infix operators and `!` is a prefix operator.

`!` is the logical `not` which changes the evaluation of any Boolean expression from `true` to `false` and vice versa.

Alternatively: `and` can be used for `&&` , `or` can be used for `||` , and `not` can used for `!` .

More complicated conditions can be created by chaining these operators - parentheses may be required to get the desired result.

NOTE: `||` is the 'inclusive or'. The 'exclusive or' would only be true if one, and only one, of the expressions are true. This can be achieved using a compound condition of the form `((a || b) && !(a && b))` .

``````{syntax-start} Compound Conditions
:class: dropdown
:nonumber:
``````
Syntax of Compound Conditions:
```{code-block} c++
// 'and'
( (exprssion1) && (expression2)  && (expression3) )
// 'or'
( (exprssion1) || (expression2)  || (expression3) )
// example of further combination of 'and' with 'or'
( (exprssion1) && ( (expression2)  || (expression3) ) )
```
Further combinations can be created by applying the logical `not` to any of these expressions.

The operators are evaluated based on precedence:

`!` has the highest precedence, then `&&` has higher precedence than `||` .

Parentheses `()` can be used to explicitly define the order of evaluation.


``````{syntax-end}
``````
`````{code_example-start} Compound Conditions
:class: dropdown
:nonumber:
`````
Try the following code...
````{code-cell} c++
:tags: [remove-output,skip-execution]
#include <iostream>
int main() {
    int firstNumber, secondNumber, thirdNumber;
    std::cout << "Please enter three different integers, in order of increasing size: \n";
    std::cin >> firstNumber >> secondNumber >> thirdNumber;
    if (firstNumber < secondNumber && secondNumber < thirdNumber) std::cout << "Congratualations, you follow instructions as well as a computer!";
    else std::cout << "Computer says NO!";
    return 0;
}
````
- Try replacing `&&` with `and` .
- Create a new program to demonstrate the use of `||`, `or`, and a combination of `or` with `and` - test the code properly.
`````{code_example-end}
`````

## Options for the If-Condition

The condition can be an expression or a declaration - the only requirement being that they evaluate to Boolean `true` or `false` .

If-statements can be used as a test of the validity of a value.

`````{code_example-start} Conditions for if-statements
:class: dropdown
:nonumber:
`````
The condition can simply be a variable - provided it can be implicitly converted to a Boolean.
````{code-cell} c++
:tags: [remove-output, skip-execution]
#include <iostream>
int main() {
    int myInt = 5;
    if (myInt) {
        std::cout << myInt << " is a non zero integer!";
    } else {
        std::cout << myInt << " is zero!";
    }
    return 0;
}
````
`if (myInt)` is basically the same as `if (myInt != 0)` - but the compiler is implicitly converting the integer directly to a Boolean because that is the required type of expression for a condition.

`````{exercise-start} if-statement conditions
:class: dropdown
:nonumber:
:label: exerciseq1
`````
Find out what happens if:
- The value of `myInt` is changed to `0`, then to a negative number.
- Would this work with a `double` ?
- Replace the integer with a `string`, then with a `char`, does this work?
- Replace the integer with a pointer (pointers are covered in week 3).
````{solution} exerciseq1
:class: dropdown
- All non-zero integers are converted to `true` ; only `0` is converted to `false` .
- `string` type should not be allowed by the compiler - they cannot be converted to a Boolean. `Char` converts to `int` ,  which converts to `Bool` , however `0` does not convert to the integer zero!
- A pointer to `nullptr` is converted to `false` , a pointer to a valid object is converted to `true` .

`if (myPtrToMyInt)` is equivalent to `if (myPtrToMyInt != nullptr)` .
```{code-block} c++
int main() {
    int myInt = 5;
    int* ptrToMyInt = &myInt;  //replace with, = nullptr;
    if (ptrToMyInt) {
        std::cout << ptrToMyInt << " is the address of a valid object, of value: " << *ptrToMyInt;
    } else {
        std::cout << ptrToMyInt << " is the null pointer!";
    }
    return 0;
}
```
````

The condition can also contain a declaration; useful for restricting the scope of a variable. Variables declared in conditions are accessible to all the branches of the ladder. Only a single variable can be declared and initialised in a condition.
`````{exercise-end}
`````
`````{code_example-end}
`````
