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

# `while` Loops


Its generally better to use for loops in C++, but while loops exist too.


```{list-table}
:header-rows: 1
:name: example_table_4
* - Generic While Loop
  - Example While Loop
* - ```{mermaid}
    :align: center
    :zoom:
    flowchart TD
      A(["Program Flow Approaches the While Loop"]) --> B["Set Loop Variable"]
      B --> C{"Check Termination Condition"}
      C -- Condition True --> D["Processes to be Repeated Every Loop"]
      C --> n1["Anchor"]
      n1 -- Condition False --> E(["Continue to Next Section of Program"])
      D --> F["Increment Loop Variable, or Implement Selection Criteria"]
      F --> C
      A:::Rose
      B:::Rose
      C:::Rose
      D:::Rose
      E:::Rose
      F:::Rose
      n1:::Rose
      classDef Rose stroke-width:1px, stroke-dasharray:none, stroke:#FF5978, fill:#FFDFE5, color:#8E2236
      linkStyle 0 stroke:#AA00FF,fill:none
      linkStyle 1 stroke:#AA00FF,fill:none
      linkStyle 2 stroke:#AA00FF,fill:none
      linkStyle 3 stroke:#AA00FF,fill:none
      linkStyle 4 stroke:#AA00FF,fill:none
      linkStyle 5 stroke:#AA00FF,fill:none
      linkStyle 6 stroke:#AA00FF,fill:none
      linkStyle 7 stroke:#AA00FF
    ```
  - ```{mermaid}
    :align: center
    :zoom:
    flowchart TD
      A(["Arrival"]) --> B["Set Loop Counter: Count = 1;"]
      B --> C{"Check Counter &lt; 100"}
      C -- Condition True --> D["Process to be Repeated Every Loop"]
      C --> n1["Anchor"]
      n1 -- Condition False --> E(["Continue fa:fa-code"])
      D --> F["Increment Loop Counter: Count += 1"]
      F --> C
    ```
```



std::string previous = "";
std::string current;
while (std::cin >> current) {
	if (previous == current)
	std::cout << "repeated word : " << current << '\n’;
	previous = current;
}
Notice that the conditional statement for both while and if are in parens.
In this case – the loop condition is the receipt of a valid input. 
Try again but make the variable int’s. What happens if you type letters?
Use Crtl+Z to end a loop. Ctrl+D in linux.




## Loop Exit


If the condition of an iteration statement is forgotten the loop will run until the program crashes - this can tie up a computer for a very long time.

The iteration condition may also be intentially omitted, provided there is an alternaive method provided to end the loop.

The program can exit an interation statemnet by arriving at the keywords, `break`, `return`, `goto`, or `throw`.

### `break`

`break` - cause the program to break out of the nearest enclosing {term}`switch statement` or {term}`iteration statement` . `break` is used if the logical flow may require the program to leave the loop in the middle.

The `break` is usually found as an option in a selection-statement within the loop.

It is usually better to exit loops via the loop exit condition unless the logic requires extra variables an complexity. 

```{code-cell} c++
#include <iostream>
#include <vector>
int main() {
  std::vector<int> collectedValues = {};   //creates an empty vector.
  for (int i = 0; i < 100; ++i) {          // contorls a loop that adds an element to the vector each time.
    if (collectedValues.size() == 20) {         //size() - member function - most C++ containers - returns number of elements.
      std::cout << '\n' << "The loop terminated when i =" << i << ". First element was 0!";    // Prints out only if vector has 20 elements.
      break;                                                   // Exits the loop when vector has 20 elements. 
     }  
    collectedValues.push_back(i);  //push_back() - a member function - appends its argument at end of vector.
    std::cout << i << "\t";                                   // Prints the value of the loop variable.
  }
  return 0;
}
```

An alternative is to use `continue` which result in the next iteration starting immediately jumping over any remaining code statements in the current loop.

### `continue`

```{code-cell} c++
#include <iostream>
int main() {
  for (int i = 0; i < 21; ++i) {
    if (i % 5 == 0) continue;  // if is exactly divisible by 5, skip printing the value of i.
    std::cout << i << "\t";
  }
  return 0;
}
```
### Goto
`goto` statements are best avoided in most programming languages. Code has a simpler structure, and is more easily obtained without the use of `goto`. 
