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

# First C++ Program

Type the following code into the empty code window below.
Please type the code exactly as shown. 
TIP computers cannot correct your mistakes for you!! 


```{code-block} cpp
:linenos: 
:emphasize-lines: 4
:name: codea1
:caption: Hello World program

#include <iostream>
int main()
{
	std :: cout << "Hello, World!\n";
	return 0;
}
```

In {ref}`Code 1<codea1>` the highlighted statement is the code that the programmer actually wants implemented - everything else is ...

```{code-cell} cpp
:linenos: 
:emphasize-lines: 4
:name: codea2
:caption: Hello World program
:tags: [skip-execution]
#include <iostream>
int main()
{
	std :: cout << "Hello, World!\n";
	return 0;
}
```
In {ref}`Code 2<codea2>` the highlighted statement is the code that the programmer actually wants implemented - everything else is ...


```{tip}
:class: margin
To run a code block that has been edited, select the block (mouse click inside it), then simulaneously press {kbd}`Shift` + {kbd}`Enter`. 
```


```{code-cell} c++
#include <iostream>
int main()
{
	std :: cout << "Hello, World!\n";
	return 0;
}
```

````{exercise} 
:class: dropdown
:label: exercisea1
Try making the following changes to the above code - note what happens.

1. Remove `std::` from line 3.
2. Replace the angle brackets `<>` in the first line with speechmarks `""`.
2. Change the returned value from 0 to 1.
3. Remove the return line.

Add or remove spaces anywhere in your code and run the code again. \
Or try somthing else\
or something other

```{solution} exercisea1 
:class: hint dropdown
:label: solutiona1

1. `cout` is not part of the c++ core language and comes instead from the **Standard Library**. `std::` denotes the namespace that `cout` belongs to (similar to a folder designation, provided you have included it). 
2. To include components of the standard library angle brackets `<>` are used, but we can also include additional code written by the programmer in header files, which are named in speechmarks `""`.
3. 
4. 
```
````

```{seealso}
:class: margin
More on the structure of the C++ language can be found {doc}`here <../jupyternotebooks/codingtheory1>`
```




`````{exercise-start}
:label: exercisea2
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
````{solution} exercisea2
:class: hint dropdown
:label: solutiona2
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

```{admonition} Solutions 
:class: dropdown hint
1. answer 1
2. answer 2
- list q
- list b
```
````



