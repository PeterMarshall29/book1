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

# First C++ program.


Primordial <wiki:gravitational_waves> are hypothesized to arise from <wiki:cosmic_inflation>, a faster-than-light expansion just after the <wiki:big_bang>.


Type the following code into the empty code window below.
Please type the code exactly as shown. 
TIP computers cannot correct your mistakes for you!! 
% {lineno-start=1 emphasize-lines="2,3"}

```{code-block} cpp
:linenos: 
:emphasize-lines: 4
:name: CodeC1
:caption: Hello World program

#include <iostream>
int main()
{
	std :: cout << "Hello, World!\n";
	return 0;
}
```

In {ref}`Code 1<CodeC1>` the highlighted statement is the code that the programmer actually wants implemented - everything else is ...

```{code-cell} cpp
:linenos: 
:emphasize-lines: 4
:name: CodeC2
:caption: Hello World program
:tags: [skip-execution]
#include <iostream>
int main()
{
	std :: cout << "Hello, World!\n";
	return 0;
}
```


In {ref}`Code 1<CodeC2>` the highlighted statement is the code that the programmer actually wants implemented - everything else is ...


```{tip}
To run a code block that has been edited, select the block (mouse click inside it), then simulaneously press {kbd}`Shift` + {kbd}`Enter`. 
```


```{code-cell} c++
:tags: [mytag]
#include <iostream>
int main()
{
	std :: cout << "Hello, World!\n";
	return 0;
}
```

::::{exercise} 
:class: dropdown
:label: ExerciseC1
Add or remove spaces anywhere in your code and run the code again. \
Or try somthing else\
or something other

:::{solution} ExerciseC1 
:class: hint dropdown
:label: SolutionC1

1. answer 1
2. answer 2
- list q
- list b
:::
::::



`````{exercise-start}
:label: ExerciseC4
`````
This code is incorrect. Alter the code so that it runs without error and prints your name.
````{code-cell} cpp
:tags: [remove-output]
include "iostreams"
main(){
cout << "my name is, \n"
return "Peter";
}
#include <iostream>
int main()
{
	std :: cout << "Hello, World!\n";
	return 0;
}
````
````{solution} ExerciseC4
:class: hint dropdown
:label: SolutionC4
```{code} cpp
#include <iostream>
int main()
{
	std :: cout << "Hello, World!\n";
	return 0;
}
```
````
`````{exercise-end}
`````


````{admonition} Exercise
:class: dropdown tip
Add or remove spaces anywhere in your code and run the code again. \
Or try somthing else\
or something other
```{code-cell} cpp
:tags: [remove-output]
include "iostreams"
main(){
cout << "my name is, \n"
return "Peter";
}
```
```{admonition} Solutions 
:class: dropdown hint
1. answer 1
2. answer 2
- list q
- list b
```
````



