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
(for)=
# For loops
```{note}
:class: margin
{attribution="Zeno of Elea" }
> WHat has been said once can always be repeated.
```
Conditionally execute a statement, or code block, repeatedly.

The code block itself does not usually have anything to do with the condition for continuation of iteration, but does often utilise the loop variable to change what happens on each iteration.

[For-statements](https://en.cppreference.com/w/cpp/language/for.html)


```{list-table}
:header-rows: 1
:name: example_table_3
* - Generic Flowchart
  - Example Flowchart
* - ```{mermaid}
    :align: center
    :zoom:
    flowchart TB
      A(["Start"]) --> B[/"Input/output"/]
      B --> C["Process"]
      C --> D{"Decision"}
      D -- Conditon 1 --> E["Process"]
      D -- Conditon 2 --> F[/"Input/output"/]
      F --> G["Process"]
      G --> D
      E --> H[/"output"/]
      H --> I(["End"])
      A:::Rose
      B:::Rose
      C:::Rose
      D:::Rose
      E:::Rose
      F:::Rose
      G:::Rose
      H:::Rose
      I:::Rose
      classDef Rose stroke-width:1px, stroke-dasharray:none, stroke:#FF5978, fill:#FFDFE5, color:#8E2236
      linkStyle 0 stroke:#AA00FF,fill:none
      linkStyle 1 stroke:#AA00FF,fill:none
      linkStyle 2 stroke:#AA00FF,fill:none
      linkStyle 3 stroke:#AA00FF,fill:none
      linkStyle 4 stroke:#AA00FF,fill:none
      linkStyle 5 stroke:#AA00FF,fill:none
      linkStyle 6 stroke:#AA00FF,fill:none
      linkStyle 7 stroke:#AA00FF,fill:none
      linkStyle 8 stroke:#AA00FF
    ```
  - ```{mermaid}
    :align: center
    :zoom:
    flowchart TB
      A(["Start"]) --> B[/"`Output: 
        Request for Input
          Input from User`"/]
      B --> C["Format Input"]
      C --> D{"'Check Input:
          1. Exist
          2. Correct Format`"}
      D -- Both True --> E["Process Input"]
      D -- Either/both False --> F[/"`Output: 
          1. Inform User of Problem
          2. Request Correct Input
          3. Input from User`"/]
      F --> G["Format Input"]
      G --> D
      E --> H[/"Ouput Result"/]
      H --> I(["End"])
      A:::Rose
      B:::Rose
      C:::Rose
      D:::Rose
      E:::Rose
      F:::Rose
      G:::Rose
      H:::Rose
      I:::Rose
      classDef Rose stroke-width:1px, stroke-dasharray:none, stroke:#FF5978, fill:#FFDFE5, color:#8E2236
      linkStyle 0 stroke:#AA00FF,fill:none
      linkStyle 1 stroke:#AA00FF,fill:none
      linkStyle 2 stroke:#AA00FF,fill:none
      linkStyle 3 stroke:#AA00FF,fill:none
      linkStyle 4 stroke:#AA00FF,fill:none
      linkStyle 5 stroke:#AA00FF,fill:none
      linkStyle 6 stroke:#AA00FF,fill:none
      linkStyle 7 stroke:#AA00FF,fill:none
      linkStyle 8 stroke:#AA00FF
    ```
```


The management of what controls the loop happens inside the argument to the for command.
The syntax is `for (loop variable definition and initialisation; condition to continue the loop; increment to loop variable instruction) { code to execute}`

Without the increment, which is not required, the loop just runs forever but you can also affect the condition that is checked every time from inside the code block.
```{code-block} c++
:linenos: 
:emphasize-lines: 2
:name: codef1
:caption: For Loop Template
for (int i = 0; i < 100; ++i) {
std::cout << i << "\t" << i * i << "\n";
}
```
The highlighted code statements are repeated as many times as required by the `for` statement.


````{admonition} Code Explanation
:class: dropdown

The syntax for a for loop is:
```{code-block} c++
for (int i = 0; i < 100; ++i) {
**Code statements to be executed each time the loop runs go here** 
}
```
The 3 terms in the paranthesis control the operation of the for loop.
```{note}
`int i = 0;` is the for-statement initialiser. 

This statement names a loop variable called 'i' and sets its initial value to 0.
```
```{note}
`i < 100;` is the for-statement condition. 

The for loop runs until this condition become true. The condition must be an expression that returns a boolean.
```
```{note}
`++1` is the for-statement increment. 

**After** executing the for-loops code block, the loop variable is increased or decreased according to this instruction.
```

````

ust equate to that type. In this case we just type a value, but a variable or code that yields the required value is more common.




````{admonition} Tip
:class: dropdown 
Be careful not to also increment the loop variable within the execution block, this can also be done and create more options for what happens, but should not generally be done without good purpose.
```{code-block} c++
int main() {
  for (int x = 0; x<50; ++x) {     // for i in the half-open range 0 to less than 50 `[0:50)` 
    cout << x << '\t';
    ++x;                     // Forces loop variable to be incremented twice on each iteration!!
    }
  return 0;
}
```
````



If the final value of an index needs to be known after exit from a for-loop, the index variable must
be declared outside the for-loop (e.g., see 9.6).
If no initialization is needed, the initializing statement can be empty.




## Single Commands
If there is only a single statement i.e. not a whole code block of statements, then the statement can simply be placed after for-statement, and closed with;

```{code-cell} c++
#include <iostream>
int main() {
  for (int i = 0; i < 10; ++i) std::cout << i << '\t';
  return 0;
}
```

## Alternatives for For-statements
```{code-cell} c++
#include <iostream>
int main() {
    for (int i{0}, j{5}; i < j; ++i, --j) {
      std::cout << i << j << '\n';
    }
    return 0;
}
```    


## Inner Workings and Comparison to While Loops

A For Loop is equivalent to the following function.

```{code-cell} c++
#include <iostream>
int main() {
  for (int i = 0; i <= 10; ++i) std::cout << i << "\t" ;

  int loopVariable = 0;
  int terminatiionValue = 100;
    while (loopVariable != terminatiionValue) { // Check the termination condition
        std::cout << a << "\t" //executer some code;
        ++a; // Increment the loop counter variable
    }

  return 0;
}
```

```{code-cell} c++
#include <iostream>

void loopFunction(int v[], int max) {
    int i = 0; // Declare and intitialised the loop counter variableintroduce loop var iable
    int terminatiionValue = 100;
    while (i !!= terminatiionValue) { // Check the termination condition
        v[i] = i * i; // execute the loop body
        ++i; // Increment the loop counter variable
    }
}

int main() {
    loopfunction([1,2,3,4,5], 20);
    return 0;
}
```
## 
The loop variable cannot be shadowed. You cannot have another variable with the same name inside declared inside the for-loops code block.

```{code-cell} c++
#include <iostream>
int main() {
for (int i = 0;;) {
    long i = 1;   //  invalid in C++
    // ...
  }
}
```


## Using `auto`

It is not always obvious what is the right type to use for a controlled variable in a for loop, so
auto often comes in handy:
for (auto p = begin(c); c!=end(c); ++p) {
// ... use iterator p for elements in container c ...
}

## requires vector
TRY to create and change a vector of zeros.

```{code-cell} c++
#include <iostream>
#include <vector>

int main() {
  std::vector<int> vzeros(6) ;
  std::vector<int> v = { 1,2,3,4,5 };
  vzeros[2] = 5;
    for (int i = 0; i < vzeros.size(); ++i) std::cout << vzeros[i] << i <<"\n";

}


```

```{code-cell} c++
#include <iostream>
#include <vector>

int main() {
  std::vector<std::string> vEmptyStrings(6);
    for (int i = 0; i < vEmptyStrings.capacity(); ++i) std::cout << vEmptyStrings[i]<<", " << i << "\n";
}
```

