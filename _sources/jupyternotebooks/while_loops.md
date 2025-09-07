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
(while)=
# While Loops
```{note}
:class: margin
{attribution="Yogi Berra" }
> It's déjà vu all over again.
```


```{figure} ../images/programmingloops.svg
:name: my-fig-ref-t1
My figure title.
```
As an example of iteration, consider the first program ever to run on a
stored-program computer (the EDSAC). It was written and run by David Wheeler
in the computer laboratory in Cambridge University, England, on May 6, 1949,
to calculate and print a simple list of squares like this:
It’s generally better to use for-loops in C++, but while-loops exist too.


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
      C --> n["Anchor"]
      n -- Condition False --> E(["Continue to Next Section of Program"])
      D --> F["Increment Loop Variable, or Implement Selection Criteria"]
      F --> C
      n@{ shape: anchor}
      style A fill:#E1BEE7,stroke:#AA00FF
      style B fill:#E1BEE7,stroke:#AA00FF
      style C fill:#E1BEE7,stroke:#AA00FF
      style D fill:#E1BEE7,stroke:#AA00FF
      style E fill:#E1BEE7,stroke:#AA00FF
      style F fill:#E1BEE7,stroke:#AA00FF  
      linkStyle 0 stroke:#AA00FF,fill:none
      linkStyle 1 stroke:#AA00FF,fill:none
      linkStyle 2 stroke:#AA00FF
      linkStyle 3 stroke:#AA00FF,fill:none
      linkStyle 4 stroke:#AA00FF,fill:none
      linkStyle 5 stroke:#AA00FF,fill:none
      linkStyle 6 stroke:#AA00FF,fill:none0FF
    ```
  - ```{mermaid}
    :align: center
    :zoom:
    flowchart TD
      A(["Arrival"]) --> B["Set Loop Counter: Count = 1;"]
      B --> C{"Check Counter &lt; 100"}
      C -- Condition True --> D["Process to be Repeated Every Loop"]
      C --> n["Anchor"]
      n -- Condition False --> E(["Continue fa:fa-code"])
      D --> F["Increment Loop Counter: Count += 1"]
      F --> C
      n@{ shape: anchor}
      style A fill:#E1BEE7,stroke:#AA00FF
      style B fill:#E1BEE7,stroke:#AA00FF
      style C fill:#E1BEE7,stroke:#AA00FF
      style D fill:#E1BEE7,stroke:#AA00FF
      style E fill:#E1BEE7,stroke:#AA00FF
      style F fill:#E1BEE7,stroke:#AA00FF  
      linkStyle 0 stroke:#AA00FF,fill:none
      linkStyle 1 stroke:#AA00FF,fill:none
      linkStyle 2 stroke:#AA00FF
      linkStyle 3 stroke:#AA00FF,fill:none
      linkStyle 4 stroke:#AA00FF,fill:none
      linkStyle 5 stroke:#AA00FF,fill:none
      linkStyle 6 stroke:#AA00FF,fill:none
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
Use {kbd}`Crtl+Z` to end a loop. {kbd}`Ctrl+D` in Linux.

int main()
{
int i = 0; // start from 0
while (i<100) {
cout << i << '\t' << square(i) << '\n';
++i; // increment i (that is, i becomes i+1)
}
}


## Loop Exit


If the condition of an iteration statement is forgotten the loop will run until the program crashes - this can tie up a computer for a very long time.

The iteration condition may also be intentionally omitted, provided there is an alternative method provided to end the loop.

The program can exit an iteration statement by arriving at the keywords, `break`, `return`, `goto`, or `throw`.

### `break`

`break` - cause the program to break out of the nearest enclosing {term}`switch statement` or {term}`iteration statement`. `break` is used if the logical flow may require the program to leave the loop in the middle.

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
