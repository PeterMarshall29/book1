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
(switch)=
# Switch Statements

An alternative to an if-statement ladder is the switch-statement.

A switch statement is generally easier to read than nested if statements.

````{admonition} The Syntax of a switch-statement:
:class: note dropdown
```{code-block} c++

switch (condition) {
		case first_possible_value_of_condtion :
			statements to execute go here....;
			break;
		case second_possible_value_of_condtion:
			Alternative statements to execute go here...;
			break;
		case third_possible_value_of_condtion:
			Different statements to execute go here...;
			break;
		default:
			std::cout << "Sorry, no case matched the condition value....\n";
			break;
		}

```
````
The switch statement test the value of its condition againt a series of possible alternative values.

The condition may be either be an expression or a simple declaration, which are evaluated to yield a value when control reaches the condition. 

The cases are the possible values that will trigger a decision to swith control flow.

The program checks each case from the top down.

If the case label constant value does not match the value of the condition then the program ignores the corresponding code block, and moves onto the next case. 

If a value matches, the corresponding statements are exectuted, followed by the `break` statement, which causes the program to exit the switch-statement and move onto the next statement after the switch-block.

If no statement match, then either the optional default block is executed, or control passes back. 

The break-statements prevent more than one case being triggered
The break statements are not optional.

The program will be ill-formed if there are more than one default statements in a single switch-statement.
```{mermaid}
:align: center
:zoom:
flowchart LR
    A(["Switch Condition Evaluated"]) --> B{"Case 1 Match"}
    B -- True --> C["Execute Case 1 Statements, then Break"]
    B -- False --> D{"Case 2 Match"}
    D -- True --> E["Execute Case 2 Statements, then Break"]
    D -- False --> F{"Case 3 Match"}
    F -- True --> G["Execute Case 3 Statements, then Break"]
    F -- False --> H["Execute Default Case Statements, then Break"]
    E --> I(["Exit Switch Statement"])
    G --> I
    H --> I
    C --> I
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
    linkStyle 8 stroke:#AA00FF,fill:none
    linkStyle 9 stroke:#AA00FF,fill:none
    linkStyle 10 stroke:#AA00FF,fill:none
```
```{admonition} Switch Rules
:class: dropdown note
???correction needed

- Switch variables must be constant expressions i.e. there must be literal value typed at the case line.

- Switch variables may only be of the types: integral (including `char`), enumeration, or class.

- The swtich case You cannot switch on a string value – selection based on a `string` requires an if-statement or a 'map'.

- A single case can be executed for several case labels. But case labels cannot be used for two cases.

i.e. use multiple labels for the same case: e.g. case '0': case '2': case '4': case '6': case '8': ..then case statements...

- Most compilers do not warn if you forget break – it is required – try it.

- Without the breaks -  all the code blocks below the first detected case will also be executed.
```


`````{example-start}
:label: exampler1
:class: dropdown
`````
````{code-cell}  c++
:tags: [remove-output, skip-execution]
#include <iostream>
int main() {
	constexpr double cm_per_inch = 2.54;
	double length = 1;
	while (true) {
		char unit = 'a';
		std::cout << "Please type in a length followed by a unit symbol, either c or i: \n";
		std::cin >> length >> unit;
		switch (unit) {
		case 'i':
			std::cout << length << "in==" << cm_per_inch * length << "cm.\n";
			break;
		case 'c':
			std::cout << length << "cm==" << length / cm_per_inch << "in.\n";
			break;
		default:
			std::cout << "Sorry, I do not know what that unit is....\n";
			break;
		}
	}
}
````
````{explanation} exampler1
:label: explanationr1
:class: dropdown note
In this example, the while loop is just to keep the program running – we are only interested in the switch loop.

constexpr double cm_per_inch = 2.54 - the conversion factor.

Every time the while loop runs, the user is asked to input a value for 'unit', and then the switch statement runs, using unit as its condition.

There are two cases - switching to their code block if the condtion yield a value of 'i' or 'c'.

The break statements cause the program to exit the switch-statement after completing the successful switch.

If neither 'i' nor 'c' is typed in then the default case is executed.

The value in parentheses after the switch keyword is compared to the case values. A match to a case causes its code block to execute The syntax requires each case to be terminated by a break. If no case is true, then the default code block is executed. 

```{exercise}
:class: dropdown
- Try removing the break statement from the default case. 
- Try removing the second break statements.
- Try removing all first and second break statements.
- Try writing two cases, both with the case label 'c'.

```
````
`````{example-end}
`````

`````{example-start}
:label: exampler2
:class: dropdown
`````
````{code-cell}  c++
:tags: [remove-output, skip-execution]
#include <iostream>
int main() {


std::cout << "please enter an expression to be evaluated (only +,-,*,/ for now, ADD an x to show the end of your expression):";
int lhs = 0;
int rhs = 0;
int result;
std::cin >> lhs;
if (!std::cin) throw std::runtime_error("no first operand");
	for (char operation; std::cin >> operation;) { //keeps reading cin until it gets an operator
		if (operation != 'x') std::cin >> rhs;
		if (!std::cin) throw std::runtime_error("no second operand");
 
		switch (operation) {
		case '+':
			result = lhs + rhs;
			break;
		case '-':
			result = lhs - rhs;
			break;
		case '*':
			result = lhs * rhs;
			break;
		case '/':
			result = lhs / rhs;
			break;
		default:
			std::cout << result << '\n';
			return 0;
		}
		lhs = result;
	}
		
	throw std::runtime_error("bad expression");

````
````{explanation} exampler2
:label: explanationr2
:class: dropdown hint
words
```{exercise}
:class: dropdown
wrds
```
````
`````{example-end}
`````
