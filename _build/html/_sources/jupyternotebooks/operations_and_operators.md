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

# Operations and Operators

Operations and Operators
Each type has different operators – some are overloaded. + is addition for numeric types, but concatenation for string and char

Try this code

int count;
std::cout << "Please enter a number followed by your surname.\n";
std::cin >> count;
std::string name;
std::cin >> name;
int c2 = count + 2;
std::string motivator = "Dr." + name;
std::cout << "Study " << c2 << " times harder " << motivator << "!\n";
return 0; 

We can use concatenation instead of repeating << . However, that requires us to use a string conversion.


Try the following code.
std::cout << "Please enter a floating point number : \n";
double n;
std::cin >> n;
std::cout << "n == " << n
<< "\nn + 1 == " << n + 1
<< "\nthree time n == " << n * 3
<< "\ntwice n == " << n + n
<< "\nhalf of n == " << n / 2
<< "\nsquareroot of n == "
<< sqrt(n)
<< "\n";

Note:  The definitions of integer *, /, and % guarantee that for two positive ints a and b we have a/b * b + a%b == a.
Is the modulus truncating or flooring in c++?
It is truncating i.e – always rounds towards zero. Flooring is always rounded downwards. Swift is truncated – python is floored.

Check the list of operators on the Learn page.

Incrementing by 1 can be achieved several ways.

Count = count + 1 can be written as ++count
Count = count + n can be written as count+=n

## Ternary Operators
Example:
return (a >= b) ? a : b;

? construct is called an arithmetic if or a conditional expression. The
value of (a >= b) ? a : b is a if a >= b and b otherwise.
That is, if the condition is true, the ternary operator value a if true, otherwise value b.
Useful functions
std::max(7,8)
std::abs(a)


