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

# User defined names



There are a list of reserved [Keywords in the C++ language](https://en.cppreference.com/w/cpp/keyword.html).

The reserved keywords may not be used as object names.



# Variables and Constants


We can do nothing of interest with a computer without storing data (information). The places in which data is stored are called “objects”.
The ‘type’ of an object determines what it can store, but also what operations are available to work with that type of data.
The data stored in an object is called the “value” – not just numbers.
The statement that declares a variable and its first value is called a ‘definition’, and assigning the first value at whatever point is called initialisation.
Variable are often given an initial value with the definition
Giving a variable a value at any time is called assignment. 

The compiler will not allow you to put the wrong values into a type.


## Constants

To create a constant, called a ‘symbolic constant’ – i.e. a name representing a constant, we can use either 
constexpr or const , both of which are modifiers that precede the type.
c will not be reassignable/modifiable in both cases, but there is a key difference.
constexpr double c = 299792458;
Constant expression must be initialised prior to compilation – they cannot be assigned during the runtime.
This was not available when I was writing my PhD using C++.
The alternative is to use a plane constant variable, whose value might only become known at run-time.
const double c = 299792458;
These do not have to be initialised prior to compilation, making run-time errors more likely. There is no good reason for using const!
They can also be applied to functions creating the same rule for the return.


