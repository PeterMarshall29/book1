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

## Intger Types

`int` is the keyword for the default {term}`integer type`. 

There are a set of other integer types: `int` may be preceded by one or two modifiers - `signed`, `unsigned`, `short`, `long, `long long`. 

The modifiers may also be used on their own, and `int` is implied; but `signed` and `unsigned` may also precede `char, and `long` may precede `double`.

An integer literal is just the number itself as opposed to an `int` which is a variable of type `int` having an integer value.

Integer literals must not be written with a decimal point i.e. do not write the number seven as 7.0, this will be interpreted as a floating-point number.

## Floating-Point Literals
`Float` and `double` are both used for {term}`floating-point numbers` - "double" denoting double precision (meaning twice as many bits are used to represent the double values in binary code).

Examples of how floating-point literal may be typed: `3.14`, `.14`, `-3.`, `2.99e8`, `6.63e−34`.

Floating point numbers are expressed to different levels of precision; `float` for single precision (32-bit), `double` for double precision(64-bit), and `long double for extended precision (80-bit).

A floating-point literal is of interpreted to be of type `double` by default, but to reduce memory usuage using a `float` or when larger values are required using `long double`, the suffix f, or l may be added.

A floating-point literal of type `float` is defined by adding the postfix 'f' (or 'F') to the number:  `2.997925F`.

A `long double` is defined by adding the postfix 'l' (or 'L'): `5.55e207L`.

## Scientific Notation

Scientific notation is formated using a lower or upper case `e` between the significant and the index WITHOUT ANY SPACES!!   

The syntax does not permit any whitespace in a floating point literal. 

For example, 2.998 e8 is not a floating-point literal, and would be intpreted as three separate lexical tokens and cause a syntax error at compile time.

## Max Size of Numeric Values
The maximum value that can be storde by each {term}`numeric data type` depends on number of bits used by the computer architecture. 

Most computers use 64 bits, meaning that 64 bits are used to represent addresses in memory, allowing larger numbers to be stored.

A 64 bit architecture means that processors are able to load and store 64 bit floating point numbers.

Integer values do not follow a 
On a 64 bits system: `int` uses 32 bits: `short` uses 16 bits, and `long` uses 64 bits.

```{list-table}
:header-rows: 1
:name: Maximum size of Numeric Types on a 64 bit architecture
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

## Checking the Size Limits of Numeric Type of Your C++ Implemetation

`sizeof()` returns the number of bytes used to store values of that type.

The `<limits>` component of the {term}`Standard Library` has some useful function such as max(), lowest(), and min(), which will return the largest value that can be stored in that type.

```{code-cell}
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
```
Note: Min() is the smallest positive value. Lowest() is the most negative value, where applicable.

## Useful Constants

By including `<numbers> you can access useful values, such as `pi`, and `e`.

Accessed as `std::numbers::pi`.

## Calculations

It is often the case that a program will make a decision based on whether or not two values are identical.

A litte care must be taken when dealing with floating point numbers. In some languages alternaive methods to calculate the same number will yield differnt values.

```{code-cell} c++
int main() {
	std::cout << std::setprecision(20) << sin(acos(-1) / 4) << '\t' << sin(std::numbers::pi/4)<< '\t' << sqrt(2) / 2 << '\n';
	if (sin(acos(-1) / 4) == sqrt(2) / 2) {
		std::cout << "Good - Exactly equal!";
	} else {
		std::cout << "Aarghh - Only nearly equal!";
	}
	return 0;
}
```

## Decimal, Hexidecimal, Octal, and Binary.

Integer literals may also represent numbers in octal or hexidecimal

Octal literals start with a 0 followed by the digits of the octal number, so the octal number '55' would be written `055`. Note that the octal '0' remains just `0`.

Octal is base 8. the units run from 1-7. The value 21 in octal is 15 in decimal.

Hexidecimal letters start 0x, so the hexideciamal value '3f' woudl be `0x3f`

Hexidecimal is base 16, the units are 1,2,3,4,5,6,7,8,9,A,B,C,D,E,F. The value in decimal of the hexidecimal number 3f is 63.


### Formatiing Octal and Hexidecimal Output

Integer values can be output in octal or hexidecimal as follows:

```{code-cell} cpp
int main() {
	std::cout << 100 << '\t' << std::hex << 100 << '\t' << std::oct << 100 << '\t' << std::dec << 100;
	return 0;
}
```
`<< std::hex` and `<< std::oct` are instructions to the output stream to convert and display the next integer values in octal or hexidecimal. 
`std::dec` restores to decimal, the intruction affects all subsequent integers until changed.




## Void Type

`void` is also a type - but it has an empty set of values. 

It is an incomplete type that cannot be completed (consequently, objects of type void are disallowed). There are no arrays of void, nor references to void. 

However, pointers to void and functions returning type void are permitted.

