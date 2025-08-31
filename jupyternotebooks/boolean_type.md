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

# Boolean Data Type

Generally, you will only need to use bool for logical values, char for characters, int for integer values, and double for floating-point values.

Unless you are pushing the computer to its limits, you don’t need to worry about optimisation quite so much these days, and especially when just starting out.

In c++ the integral and floating-point types are available in a variety of sizes to allow you to optimise the amount of memory storage utilised and therefore the precision and the range available in computation.

Computers usually use bytes characters, words integer values, some entity most suitable for floating-point computation, and addresses for referring to those entities. 

The C++ fundamental types together with pointers and arrays present these machine-level notions to the programmer in a reasonably implementation-independent manner.

A Boolean, `bool`, can have one of the two values true or false. 

A Boolean is used to express the results of logical operations. For example:

```{code-block} c++
void myFunction(int a, int b)
{
bool myBoolean{ a == b };
// ...
}
```
If `a` and `b` have the same value, `myBoolean` becomes `true`; otherwise, `myBoolean` becomes `false`.

A common use of `bool` is as the type of the result of a function that tests some condition (a predicate). For example:
```{code-block} c++
bool is_open(myFile);
bool greater(int a, int b) { return a>b; }
```
By definition, true has the value 1 when converted to an integer and false has the value 0. 

Conversely, integers can be implicitly converted to bool values: nonzero integers convert to `true` and '0' converts to `false`. For example:
```{code-block} c++
bool b1 = 7;  // 7!=0, so b becomes true
bool b2{ 7 };  // error: narrowing 
int i1 = true;  // i1 becomes 1
int i2{ true };  // i2 becomes 1z
```
If you prefer to use the {}-initializer syntax to prevent narrowing, yet still want to convert an `int` to a `bool`, you can be explicit:
```{code-block} c++
void myFunnction(int i)
{
bool myBoolean{i!=0};
};
```
In arithmetic and logical expressions, bools are converted to ints; integer arithmetic and logical operations are performed on the converted values. 

If the result needs to be converted back to bool, a 0 is converted to false and a nonzero value is converted to true. For example:
```{code-block} c++
bool a = true;
bool b = true;
bool x = a + b; // a+b is 2, so x becomes true
bool y = a || b; // a||b is 1, so y becomes true ("||" means "or")
bool z = a-b; // a-b is 0, so z becomes false
```
## Pointers Converting to Booleans

A pointer can be implicitly converted to a `bool`. A non-null pointer converts to `true`; pointers with the value `nullptr` convert to `false`. For example:
```{code-block} c++
void myFunction(int* myPointer)
{
	bool myBoolean1 = myPointer;  // narrows to true or false - not a copy!
	std::cout << myBoolean1 << '\n';
	bool myBoolean2{ myPointer != nullptr };  // explicit test against nullptr
	std::cout << myBoolean1 << '\n';
	if (myPointer) { // identical to p!=nullptr
		std::cout << "not pointing to Null" << '\n';
	}
}
 int main() {
	int temp = 17;
	int* myPointerToTemp = nullptr; // or set to temp
	myFunction(myPointerToTemp);
return 0;
}
```
I prefer `if (p)` over `if (p!=nullptr)` because it more directly expresses the notion "if p is valid" and also because it is shorter. 

The shorter form leaves fewer opportunities for mistakes.


