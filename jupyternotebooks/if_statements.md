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

# If Statements


Try this code:
int x = 0;
int y = 0;
std::cout << "Please enter two integral values: \n";
std::cin >> x >> y;
if (x < y) {
		std::cout << "The maximum value = max(" << x << "," << y << ") is " << y << 		". \n";
		} else {
		std::cout << "The maximum value = max(" << x << "," << y << ") is " << x << 		". \n";
		}	
Code basically works except does not  return the value if two identical values are entered – also behaves oddly if first number is a double – takes part before the decimal point then reports having received the second part as 0 without pause. If second is a double, it rounds or ignores what is after the decimal point. 
This fixes part of the issue – other issues left as an exercise.
if (x < y) {
std::cout << "The maximum value = max(" << x << "," << y << ") is " << y << ". \n";
}
else if (x > y) {
std::cout << "The maximum value = max(" << x << "," << y << ") is " << x << ". \n";
}
else {
std::cout << "The values are identical. \n";
}

