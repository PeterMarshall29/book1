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


If statements are found in most programming languages.
The C++ patter is if..elif..else.



The if-statement is used to chose between two possible paths..

At its simplest, an if block can change something depending on a condition

The syntax of the if-statement is:

```{code-block} c++
if (condition) { Code block to execute if condtion is true } 
```


`````{example-start}
:label: exampleq1
:class: dropdown
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
````{explanation} exampleq1
:label: explanationq1
:class: dropdown
```{code-block} c++
(answer == '42') 
```
`answer==42` is the condition. The condition must be put in parentheses - if is a function.
is the condition that is to be checked. The code blo
`{ std::cout << "You are trully wise";`
        }
More correctly, the condition is evaluated. It it evaluates to the boolean value `1` then teh code blokIt the conditon is found to be true, then the code block is ecex


The progam works - ied does basically work.


````
`````{example-end}
`````


`````{example-start}
:label: exampleq2
:class: dropdown
`````
Try this code:
````{code-cell}  c++
:tags: [remove-output]
#include <iostream>
int main() {
    int x = 0;
    int y = 0;
    std::cout << "Please enter two integral values: \n";
    std::cin >> x >> y;
    if (x < y) {
        std::cout << "The maximum value = max(" << x << "," << y << ") is " << y << 		". \n";
        } else {
        std::cout << "The maximum value = max(" << x << "," << y << ") is " << x << 		". \n";
        }	
    return 0;
}

````{explanation} exampleq2
:label: explanationq2
:class: dropdown
The progammed does basically work.



s except does not  return the value if two identical values are entered – also behaves oddly if first number is a double – takes part before the decimal point then reports having received the second part as 0 without pause. If second is a double, it rounds or ignores what is after the decimal point. 
This fixes part of the issue – other issues left as an exercise



````
`````{example-end}
`````

```{tip}
Every possible way to exit a selection, iteration, or function must have either a return or an error attached to it.
```




Try this code:
int x = 0;
int y = 0;
std::cout << "Please enter two integral values: \n";
std::cin >> x >> y;
if (x < y) {
		std::cout << "The maximum value = max(" << x << "," << y << ") is " << y << 		". \n";
		} else {
		std::cout << "The maximum value = max(" << x << "," << y << ") is " << x << 		". \n";
		}	
Code basically works except does not  return the value if two identical values are entered – also behaves oddly if first number is a double – takes part before the decimal point then reports having received the second part as 0 without pause. If second is a double, it rounds or ignores what is after the decimal point. 
This fixes part of the issue – other issues left as an exercise.
if (x < y) {
std::cout << "The maximum value = max(" << x << "," << y << ") is " << y << ". \n";
}
else if (x > y) {
std::cout << "The maximum value = max(" << x << "," << y << ") is " << x << ". \n";
}
else {
std::cout << "The values are identical. \n";
}




````{tab} C++
```{code-block} c++
#include <iostream>
int main() {
  std::cout << "Hello, World!" << std::endl;
}
```
````
````{tab} C
```{code-block} c
#include <iostream>
if (a > 0) { 
    puts("yes");
}
else {
    puts("no");
}
```
````


````{tab} Java
```{code-block} java
public class HelloWorldProgram {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}
```
````
````{tab} Javascript
```{code-block} javascript
console.log("Hello, World!");
```
````
````{tab} Python
```{code-block} python
if a > 0: 
    print("yes")
else:
    print("no")
```
````
````{tab} R
```{code-block} r
print("Hello, World!")
```
````
````{tab} julia
```{code-block} julia
"Hello, World!"
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