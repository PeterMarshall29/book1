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

# `while` Loops


Its generally better to use for loops in C++, but while loops exist too.


std::string previous = "";
std::string current;
while (std::cin >> current) {
	if (previous == current)
	std::cout << "repeated word : " << current << '\n’;
	previous = current;
}
Notice that the conditional statement for both while and if are in parens.
In this case – the loop condition is the receipt of a valid input. 
Try again but make the variable int’s. What happens if you type letters?
Use Crtl+Z to end a loop. Ctrl+D in linux.

