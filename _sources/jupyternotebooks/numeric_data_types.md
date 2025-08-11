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

# Numeric Data Types

## Floating Point Literals

By default, a floating-point literal is of type double. Again, a compiler ought to warn about floating-
point literals that are too large to be represented. Here are some floating-point literals:
1.23 .23 0.23 1. 1.0 1.2e10 1.23e−15
Note that a space cannot occur in the middle of a floating-point literal. For example, 65.43 e−21 is not a floating-point literal but rather four separate lexical tokens (causing a syntax error):
65.43 e − 21
If you want a floating-point literal of type float, you can define one using the suffix f or F:
3.14159265f 2.0f 2.997925F 2.9e−3f
If you want a floating-point literal of type long double, you can define one using the suffix l or L:
3.14159265L 2.0L 2.997925L 2.9e−3L

## `Sizeof()`

Some implementation-defined aspects of fundamental types can be found by a simple use of sizeof, and more can be found in <limits>. For example:
//#include <limits>
int main()
{
	std::cout << "size of long " << sizeof(1L) << '\n';
	std::cout << "size of long long " << sizeof(1LL) << '\n';
	std::cout << "largest float == " << std::numeric_limits<float>::max() << '\n';
	std::cout << "char is signed == " << std::numeric_limits<char>::is_signed << '\n';
}
The functions in <limits> (§40.2) are constexpr (§10.4) so that they can be used without run-time overhead and in contexts that require a constant expression.

