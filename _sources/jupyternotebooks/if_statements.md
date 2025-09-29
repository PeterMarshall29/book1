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
The if-statement is used to choose between two possible paths.

At its simplest, an if block can change something depending on a condition

The syntax of the if-statement is:

```{code-block} c++
if (condition) { Code-block to execute if condition is true } 
```



`````{admonition} If-Statements in Other Languages
:class: note dropdown

If statements are found in most programming languages.
The C++ patter is if..elif..else.

Some languages have an 'elseif' or similar - C++ uses nested `if-else` statements. 

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



`````{code_example-start} The If-statement
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
:class: dropdown note
```{code-block} c++
if (answer == "42") {}
```
`answer==42` is the condition. The condition must be put in parentheses - `if` is a function.
is the condition that is to be checked. The code blo
`{ std::cout << "You are trully wise";}`
More correctly, the condition is evaluated. If it evaluates to the Boolean value `1`, or `true`, then the code block is executed.

The program does basically work.
````
`````{code_example-end}
`````


`````{code_example-start} if-statement
:label: exampleq2
:class: dropdown
:nonumber:
`````
Try this code:
````{code-cell}  c++
:tags: [remove-output, skip-execution]
#include <iostream>
int main() {
    int x = 0;
    int y = 0;
    std::cout << "Please enter two integral values: \n";
    std::cin >> x >> y;
    if (x < y) {
        std::cout << "The maximum value = max(" << x << "," << y << ") is " << y << ". \n";
        } else {
        std::cout << "The maximum value = max(" << x << "," << y << ") is " << x << ". \n";
        }	
    return 0;
}
````
````{code_explanation} exampleq2
:label: explanationq2
:class: dropdown
The programme does basically work.



s except does not return the value if two identical values are entered – also behaves oddly if first number is a double – takes part before the decimal point then reports having received the second part as 0 without pause. If second is a double, it rounds or ignores what is after the decimal point. 
This fixes part of the issue – other issues left as an exercise



````
`````{code_example-end}
`````

```{tip}
Every possible way to exit a selection, iteration, or function must have either a return or an error attached to it.
```




