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
:label: Exerciseaa1
`````
This code is incorrect. Alter the code so that it runs without error and prints your name.
`````{code-block} cpp
:tags: [remove-output]
include "iostreams"
main(){
cout << "my name is, \n"
return "Peter";
}
`````
````{solution} Exerciseaa1 
:class: hint 
:label: Solutionaa1
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

