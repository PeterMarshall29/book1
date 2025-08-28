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

# Types in C++

The **type** of a variable defines its properties, the rules it must obey, and the set of operators and functions availabe to members of the type.

For example, `+` behaves differently when used an {term}`infix operator` between two integers compared to two strings.

It would also not make much sence to be able to add string-type to double-type variables, so the type system helps by preventing this.








C++ is a **strongly-typed language**. 

Once a variable type is set, for example when a number is cast as a **double**, the type cannot be changed, and the numeric value cannot be converted to an integer which means that when you say a variable is an integer, it stays an integer. This is unlike weakly-typed languages like Javascript/ECMAScript, where variables can change types.


#include <iostream>, <string>
#include <fstream> 



int main() {
	std::cout << "Please type your first name followed by your age..\n";
	std::string firstName;
	int age;
	std::cin >> firstName >> age; //input before space to first variable and input after space to second variable 
	std::cout << "Hello, " << firstName  << ", you are " << age << " years old!\n";
	return 0;
}

Try changing the output line to print a single value:
- firstName + age
- firstname * 2






The two reasons for this are efficiency and safety. If you allow variable’s types to change, you must keep track of what type a variable currently is, which has a cost. Keeping types fixed eliminates that cost. As for safety, consider this: in Javascript, if variable a equals 1 and variable b equals 2, and both are integers, then “a + b” gives 3... if both are text strings, “a + b” gives 12... but what do you get if one is an integer and one is a string? You could make up rules to answer the question, but that just makes things more complicated. It is safer to require programmers to explicitly say whether they want to add two integers or two strings. Type safety is a very important feature of C++, that makes your code efficient and easy to predict how it will behave.

There are several fundamental types in C++ – the exact number depends on the version. Here are some of the more basic ones:
end of copied


## Type System

The C++ type system keeps track of the size of the memory block, and how to interpret the value in it. The binary code in a memory block could represent the integer value 33 or be the ASCII code for '!' - the type tells the computer which was intended.


## Casting to Type

Although the type of a variable cannot be changed.

The value of a variable can be copy assigned to another variable that has a differnt type  - not all permutations are permitted.

Casting to type, means conversion from the original type to the type of the variable that the value is being assigned.

This is often useful, even necessary when working with numeric types.


When a new entity is declared it is given its type - called 'casting to type'

C++ is a **strongly-typed language**. Once a type is set, it cannot be changed.

 variable type is set, for example when a number is cast as a **double**, the type cannot be changed, and the numeric value cannot be converted to an integer which means that when you say a variable is an integer, it stays an integer. This is unlike weakly-typed languages like Javascript/ECMAScript, where variables can change types.

The two reasons for this are efficiency and safety. If you allow variable’s types to change, you must keep track of what type a variable currently is, which has a cost. Keeping types fixed eliminates that cost. As for safety, consider this: in Javascript, if variable a equals 1 and variable b equals 2, and both are integers, then “a + b” gives 3... if both are text strings, “a + b” gives 12... but what do you get if one is an integer and one is a string? You could make up rules to answer the question, but that just makes things more complicated. It is safer to require programmers to explicitly say whether they want to add two integers or two strings. Type safety is a very important feature of C++, that makes your code efficient and easy to predict how it will behave.

There are several fundamental types in C++ – the exact number depends on the version. Here are some of the more basic ones:
end of copied


## Determining the Type of a Variable

It is tremendously useful to be able to check the type of a variable.


```{code-cell} c++
:tags: [remove-output]
#include <iostream>
#include <string>
#include <typeinfo>

int main() {
    int myInt = 99;
    char myChar = 'P';
    double myDouble = 3.14;
    std::string myString = "when's lunch?";
    bool myBool = true;
    std::cout << typeid(myInt).name()  << '\t' << typeid(myBool).name() << '\t' << typeid(myDouble).name() << '\t' << typeid(myChar).name() << '\t' << typeid(myString).name() << '\n';
    return 0;
}

```

This produces more easily understood values for the primitive types. 


````{exercise}
Use typid on a function.
```{hint}
Only use the functions name - no parentheses!
```
```{admonition} Code Explanation
On a function such as: 
```{code-block} cpp
int myFunction(int x, double y) {
    return 2;
}
```
`typeid(square).name()` returns `int --cdecl(int, double)`.

The function type is `int (int, double)`.

`__cdecl` refers to the calling convention of a function, different compilers may handle this differently - not important now.
```
````

