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

# Iteration

As an example of iteration, consider the first program ever to run on a stored-program computer (the EDSAC). 

It was written and run by David Wheeler in the computer laboratory in Cambridge University, England, on May 6, 1949, to calculate and print a simple list of squares like this:

int i = 0;
while (i < 100) {
std::cout << i << "\t" << i * i << "\n";
++i;
}
Its usually best to use a for loop – even if you want it to run forever – shown later on. If you know how many iterations are required, use a for loop. If you want it to possibly keep running still use a for loop – it cannot be set up without a condition.


