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

# Solutions to Exercises

````{solution} exercisex1_1
:class: hint dropdown
:label: solutionx1_1
```{code} cpp
#include <iostream>
int main()
{
	std :: cout << "Hello, World!\n";
	return 0;
}
```
````

`````{solution-start} exerciseex2_1
:label: solutionex2_1
:class: dropdown
`````
#include <iostream> 
#include <cmath> 
int main() {
    constexpr double SPEED_OF_LIGHT = 2.9979e8;
    double mass;
    std::cout << "Please input a mass (in kilograms): \n";
    std::cin >> mass;
    double energy = mass * pow(SPEED_OF_LIGHT, 2);
    std::cout << mass << " Kilograms of matter are eqivalent to " << energy << " joules of energy. \n";
    return 0;
}
`````{solution-end}
`````

