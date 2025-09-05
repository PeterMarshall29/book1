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

# Arithmetic Data Types

There are a lot of numeric data types but to start learning C++ we really only need two of them.

The default integer type use for integers and the double type for numbers with decimal points including those in scientific notation.

## Integer Types

`int` is the keyword for the default {term}`integer type`. 

There are a set of other integer types: `int` may be preceded by one or two modifiers - `signed`, `unsigned`, `short`, `long`, `long long`. 

The modifiers may also be used on their own, and `int` is implied; but `signed` and `unsigned` may also precede `char`, and `long` may precede `double`.

An integer literal is just the number itself as opposed to an `int` which is a variable of type `int` having an integer value.

Integer literals must not be written with a decimal point i.e. do not write the number seven as 7.0, this will be interpreted as a floating-point number.

## Floating-Point Literals
`Float` and `double` are both used for {term}`floating-point numbers` - "double" denoting double precision (meaning twice as many bits are used to represent the double values in binary code).

Examples of how floating-point literal may be typed: `3.14`, `.14`, `-3.`, `2.99e8`, `6.63e−34`.

Floating point numbers are expressed to different levels of precision; `float` for single precision (32-bit), `double` for double precision(64-bit), and `long double for extended precision (80-bit).

A floating-point literal is of interpreted to be of type `double` by default, but to reduce memory usage using a `float` or when larger values are required using `long double`, the suffix f, or l may be added.

A floating-point literal of type `float` is defined by adding the postfix 'f' (or 'F') to the number:  `2.997925F`.

A `long double` is defined by adding the postfix 'l' (or 'L'): `5.55e207L`.

## Scientific Notation
Scientific notation is formatted using a lower, or upper, case `e` between the mantissa and the index **no whitespace** is permitted.
`````{card}
````{admonition} Scientific Notation Example
$2.99e8 = 2.99 \times 10^{8}$
````
`````
The syntax does not permit any whitespace in a floating-point literal. 

For example, 2.998 e8 is not a floating-point literal, and would be interpreted as three separate lexical tokens and cause a syntax error at compile time.

(SizeOfNumericValues)=
## Max Size of Numeric Values
The maximum value that can be stored by each {term}`numeric data type` depends on number of bits used by the computer architecture. 

Most computers use 64 bits, meaning that 64 bits are used to represent addresses in memory, allowing larger numbers to be stored.

A 64-bit architecture means that processors can load and store 64-bit floating-point numbers.

Integer values do not follow a 
On a 64-bit system: `int` uses 32 bits: `short` uses 16 bits, and `long` uses 64 bits.
````{admonition} Size of Arithmetic Types
:class: margin note
```{list-table}
:header-rows: 1
:name: Numeric Types on a 64-bit architecture
* - Type
  - Max Numeric Value
* - short
  - 32767
* - Int
  - 2147483647
* - long
   - 9,223,372,036,854,775,807
* - Float
  - 3.40282e+38
* - Double  
  - 1.797e308
* - long Double  
  - 1.18973e+4932 
```
````
## Checking the Size Limits of Numeric Type of Your C++ Implementation

`sizeof()` returns the number of bytes used to store values of that type.

The `<limits>` component of the {term}`Standard Library` has some useful function such as `max()`, `lowest()`, and `min()`, which will return the largest value that can be stored in that type.

`````{code_example-start}
:label: exampleh1
:class: dropdown
`````
````{code-cell}
:tags: [remove-output, skip-execution]
#include <iostream>
#include <limits>
int main() {
  std::cout << "size of long (int) " << sizeof(long) << " Bytes" << '\n';
std::cout << "size of long long " << sizeof(long long) << " Bytes" << '\n';
std::cout << "size of long long " << sizeof(1ll) << " Bytes" << '\n';
std::cout << "largest int == " << std::numeric_limits<int>::max() << '\n';
std::cout << "largest float == " << std::numeric_limits<float>::max() << '\n';
std::cout << "largest double == " << std::numeric_limits<double>::max() << '\n';
std::cout << "largest long double == " << std::numeric_limits<long double>::max() << '\n';
std::cout << "char is signed == " << std::numeric_limits<char>::is_signed << '\n';
  return 0;
}
````
````{code_explanation} exampleh1
:label: explanationh1
:class: dropdown
Note: `Min()` is the smallest positive value. `Lowest()` is the most negative value, where applicable.
````
`````{code_example-end}
`````

## Useful Constants

By including `<numbers> you can access useful values, such as `pi`, and `e`.

Accessed as `std::numbers::pi`.

## Calculations

It is often the case that a program will make decisions based on whether two values are identical.

A little care must be taken when dealing with floating point numbers. In some languages alternative methods to calculate the same number will yield different values.

`````{code_example-start}
:class: dropdown
`````
````{code-cell} c++
:tags: [remove-output]
int main() {
  std::cout << std::setprecision(20) << sin(acos(-1) / 4) << '\t' << sin(std::numbers::pi/4)<< '\t' << sqrt(2) / 2 << '\n';
  if (sin(acos(-1) / 4) == sqrt(2) / 2) {
    std::cout << "Good - Exactly equal!";
  } else {
    std::cout << "Aarghh - Only nearly equal!";
  }
  return 0;
}
````
`````{code_example-end}
`````
## Decimal, Hexadecimal, Octal, and Binary.

Integer literals may also represent numbers in octal or hexadecimal

Octal literals start with a 0 followed by the digits of the octal number, so the octal number '55' would be written `055`. Note that the octal '0' remains just `0`.

Octal is base 8. the units run from 1-7. The value 21 in octal is 15 in decimal.

Hexadecimal letters start 0x, so the hexadecimal value '3f' would be `0x3f`

Hexadecimal is base 16, the units are 1,2,3,4,5,6,7,8,9,A,B,C,D,E,F. The value in decimal of the hexadecimal number 3f is 63.

### Formatting Octal and Hexadecimal Outputs

Integer values can be output in octal, or hexadecimal as follows:
`````{code_example-start}
:class: dropdown
`````
````{code-cell} cpp
:tags: [remove-output]
int main() {
  std::cout << 100 << '\t' << std::hex << 100 << '\t' << std::oct << 100 << '\t' << std::dec << 100;
  return 0;
}
````
`<< std::hex` and `<< std::oct` are instructions to the output stream to convert and display the next integer values in octal or hexadecimal. 
`std::dec` restores to decimal, the instruction affects all subsequent integers until changed.

`````{code_example-end}
`````

## Void Type

`void` is also a type - but it has an empty set of values. 

It is an incomplete type that cannot be completed (consequently, objects of type void are disallowed). There are no arrays of void, nor references to void. 

However, pointers to void and functions returning type void are permitted.



