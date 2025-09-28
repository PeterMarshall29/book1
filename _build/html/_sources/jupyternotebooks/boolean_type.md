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

````{admonition} George Boole
:class: margin
George Boole defined an algebraic system of logic in 1847 in "The Mathematical Analysis of Logic".
````

````{admonition} Boolean Algebra
:class: dropdown
A branch of algebra used to describe logical operations - with the following distinguishing features: 

- Boolean variables may only have the value `true` or `false` - called truth values - which are generally represented by `1` and `0`.

- Boolean variables are operands for Boolean operators (`and`, `or`, `not`, and others) - normal algebraic rules do not apply.

In 1937 Shannon proved that the behaviour of certain types of electrical circuit was logically equivalent to Boolean algebra.
````
Computers operate using Boolean logic i.e. the electronic circuits are a physical manifestation of two-value Boolean logic. 

Boolean operations required that the computer circuits can be in one of two distinct states, representing `true` or `false`. This is achieved in various ways, the simplest being that the voltage in a wire is either zero volts or a positive value above a threshold voltage (current systems are under 2V).

Two-state Boolean logic is not the only possibility, but it is the simplest to implement. Using 4 states would offer some advantages, but currently it’s simpler to use 2 wires to get 4 possible states.

In programming a Boolean `bool` is a fundamental 'integer' data type. Each `bool` may hold only the integer values `1` or `0`, which represent `true` and `false` respectively. 

Booleans are used in conditional statements to determine the control flow depending on whether a conditional expression evaluates to true or false.

`````{code_example-start} The Boolean Type
:label: examplel1
:class: dropdown
:nonumber:
`````
A simple demonstration of a Boolean is:

````{code-cell} c++
:tags: [remove-output, skip-execution]
#include <iostream>
    int main() {
    int a = 5;
    int b = 6;
    bool myBoolean{ a == b };
    std::cout << myBoolean;
    return 0;
}
````
A common use of `bool` is as the type of the result of a function that tests some condition (a predicate). 

We should also add more user interaction - useful even in short codes because it helps you keep track of your logic.
````{code-cell} c++
:tags: [remove-output, skip-execution]
#include <iostream>
void myFunction(int a, int b) {
    bool myBoolean{ a == b };
    std::cout << myBoolean;
}
int main() {
    int a, b;
    std::cout << "Please input two numbers \n";
    std::cin >> a >> b;
    myFunction(a, b);
    return 0;
}
````
If `a` and `b` have the same value, `myBoolean` becomes `true`; otherwise, `myBoolean` becomes `false`.

'1' or '0' is printed to the terminal.

We can add some more formatting to the output.
````{code-cell} c++
:tags: [remove-output, skip-execution]
#include <iostream>
bool myFunction(int a, int b) {
    bool myBoolean{ a == b };
    return myBoolean;
}
int main() {
    int a, b;
    std::cout << "Please input two numbers \n";
    std::cin >> a >> b;
    if (myFunction(a, b)) {
        std::cout << "The numbers match!";
    }
    else {
        std::cout << "The numbers are different!";
    }
    return 0;
}
````
It is often not necessary to create a Boolean variable - temporary Booleans are more common.

The evaluation of any comparison expression returns a `bool`. `a == b`, `a != b`, `a <= b` etc. - all generate a temporary Boolean - which is an object without a name.

The last code can therefore have the function simplified by replacing the entire function body with only:  
```{code-block} c++
return a == b ;
``` 
Check that this substitution works...

`````{code_example-end}
`````
`````{code_example-start} More About the Boolean Type
:label: examplel2
:class: dropdown
:nonumber:
`````
`true` has the value `1` when converted to an integer and `false` has the value `0`. 

Conversely, integers can be implicitly converted to bool values: nonzero integers convert to `true` and '0' converts to `false`. 

Try this code in a live editor.
```{code-block} c++
:linenos:
#include <iostream>
int main() {
    bool myBool1 = 7;  
    bool myBool2{ 7 };  
    int myInt1 = true;  
    int myInt2{ true };  
    std::cout << myBool1 << '\t' << myInt1 << '\t' << myInt2 << '\n';
    return 0;
}
```
This code will not compile until you comment out line 4. Conversion of an integer to a Boolean is an example of narrowing, which is barred when using an initialiser list `{}`.

At line 3: `7 != 0` is evaluated and `myBool1` becomes `true`.

The conversion from Boolean to integer is not a narrowing conversion, integers are bigger than Booleans, so this is permitted using `{}`.

***
In arithmetic and logical expressions, `bool`s are converted to `int`s - integer arithmetic and logical operations are performed on the converted values. 

If the result needs to be converted back to bool, a 0 is converted to false and a nonzero value is converted to true - for example:
```{code-block} c++
#include <iostream>
int main() {
    bool myBool1 = true;
    bool myBool2 = true;
    bool myBool3 = myBool1 + myBool2; 
    bool myBool4 = myBool1 || myBool2; // a||b is 1, so y becomes true ("||" means "or")
    bool myBool5 = myBool1 - myBool2; // a-b is 0, so z becomes false
    std::cout << myBool1 << '\t' << myBool2 << '\t' << myBool3 << '\t' << myBool4 << '\t' << myBool5 << '\n';
}
```
Line 5: `true` + `true` = `2`, conversion to integers before addition, then '>0' converts to `true`.

Line 6: If either or both are true, the logical `or`, `||`, evaluates to `true`.

Line 7: Arithmetic evaluation to integer '0', converted to `false`.

`````{code_example-end}
`````

## Pointers and Booleans

A pointer can be implicitly converted to a `bool`. A non-null pointer converts to `true` - pointers with the value `nullptr` convert to `false`. 

`````{code_example-start} Pointers and Booleans
:label: examplel6
:class: dropdown
:nonumber:
`````
Examples of Pointers used as Booleans
````{code-cell} c++
:tags: [remove-output, skip-execution]
#include <iostream>
void myFunction(int* myPointer) {
    bool myBoolean1 = myPointer;            // Narrowing conversion to a Boolean - not a copy!
    std::cout << myBoolean1 << '\n';
    bool myBoolean2 {myPointer != nullptr}; // Initialised with the Boolean result of a comparison expression
    std::cout << myBoolean1 << '\n';
    if (myPointer) {
        std::cout << "Pointing to an Object" << '\n';
    } else { std::cout << "Pointing to the nullptr" << '\n'; }
}
int main() {
    int tempInt = 17;
    int* myPointerToTempInt = &tempInt;     
    myFunction(myPointerToTempInt);
    
    myPointerToTempInt = nullptr; 
    myFunction(myPointerToTempInt);
    return 0;
}
````
````{code_explanation} examplel6
:label: explanationl6
:class: dropdown
Note that `==` compares addresses (pointer values) when applied to pointers, and not the values pointed to.

`if (myPointer)` is equivalent to `if (myPointer != nullptr)`. The compiler knows a Boolean is required and implicitly converts the pointer obviating the comparison expression. 

It is usually better to use shorter code - less chance of a mistake - and in this case we have a clear expression of testing whether the pointer is valid, i.e. it points at an actual object.
````
`````{code_example-end}
`````



