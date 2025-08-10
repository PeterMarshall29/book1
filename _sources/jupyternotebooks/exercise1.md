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

# Exercises 1

`````{exercise-start}
:label: exerciseaa2
`````
This code is incorrect. Alter the code so that it runs without error and prints your name.
````{code-cell} cpp
:tags: [remove-output]
include "iostreams"
main(){
cout << "my name is, \n"
return "Peter";
}
````
````{solution} exerciseaa2
:class: hint dropdown
:label: solutionaa2
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

