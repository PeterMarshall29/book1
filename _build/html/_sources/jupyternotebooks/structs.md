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
(structs)=
# Structs in C++

Structs are user defined types, and a subset of classes.

Structs are useful for gathering related variables together into a sequence of arbitrary types called the members of the struct.

When a struct is declared a new type is created i.e. declaring a `struct` called `Date` creates a type called `Date`.

Creating a new variable of type `Date` creates an instance of the struct.

The individual members of each instance of `Date` are then accessed using the instance name attached to the member name by a period `.`. 

Stucts, like most types, can be passed into and returned from functions, by value and by reference, or by using a pointer.


## Creating and Instantiating a Struct
A struct is declared as follows:

``````{code_example-start} Struct Example 1
:label: exampleY1
:class: dropdown
:nonumber:
``````
Example of a simple struct - RationalNumber.
`````{code-cell} c++
:linenos:
:tags: [remove-output, skip-execution]
#include <iostream>
struct RationalNumber {
    int numerator;
    int denominator;
};
int main() {
        RationalNumber myRationalNumber;
        myRationalNumber.numerator = 3;
        myRationalNumber.denominator = 5;
        std::cout << "My Rational Number = " << myRationalNumber.numerator << " / " << myRationalNumber.denominator << '\n';
        return 0;
}
`````
`````{code_explanation} exampleY1
:label: explanationY1
:class: dropdown
Values can be set manually after the creation of an instance of the struct, because the data members are publicly accessible by default.

`````
``````{code_example-end} 
``````
So far the code is not better that just keeping the two integers. 

## Initialising the Data held by an Instance

The members of a struct are held in the order of declaration, so list initialisation is possible.

Values of a struct may also be initialised using an initialiser list `{}` - do keep the order of parameters the same as the listing.

``````{code_example-start} Struct Example 2
:label: exampleY2
:class: dropdown
:nonumber:
``````
`````{code-cell} c++
:linenos:
:tags: [remove-output, skip-execution]
#include <iostream>
struct RationalNumber {
    int numerator;
    int denominator;
};
int main() {
    RationalNumber myRationalNumber;
    myRationalNumber = { 3, 5};
    std::cout << "My Rational Number = " << myRationalNumber.numerator << " / " << myRationalNumber.denominator << '\n';
    return 0;
}
`````
`````{code_explanation} exampleY2
:label: explanationY2
:class: dropdown
Note: `size0f()` does not work the same for stucts, because of memory layout issues with structs that vary between architectures and implementations.

It is best to order members in a struct in size order i.e. largest member first e.g. `double` then `int` then `char` types etc.
`````
``````{code_example-end} 
``````
## Altering the Value of the Data Members of an Instance



``````{code_example-start} Struct Example 3
:label: exampleY3
:class: dropdown
:nonumber:
``````
`````{code-cell} c++
:linenos:
:tags: [remove-output, skip-execution]
#include <iostream>
struct RationalNumber {
    int numerator;
    int denominator;
};
int main() {
    RationalNumber myRationalNumber;
    myRationalNumber = { 3, 5};
    std::cout << "My Rational Number = " << myRationalNumber.numerator << " / " << myRationalNumber.denominator << '\n';
    myRationalNumber = { 4, 7 };
    std::cout << "My Rational Number = " << myRationalNumber.numerator << " / " << myRationalNumber.denominator << '\n';
    return 0;
}
`````
`````{code_explanation} exampleY3
:label: explanationY3
:class: dropdown
Both the list and the .notation may be used to modify existing values. 

`````

``````{code_example-end} 
``````
## Initialisation by Function

We can create a non-member function to initialise a copy of the struct and to check for invalid entries etc.
``````{code_example-start} Struct Example 4
:label: exampleY4
:class: dropdown
:nonumber:
``````
Intialisaton by non-member function:
`````{code-cell} c++
:linenos:
:tags: [remove-output, skip-execution]
#include <iostream>
void init_RationalNumber(RationalNumber& rationalNumber, int numerator, int denominator) {
    if (denominator != 0) rationalNumber = { numerator, denominator };
    else throw std::invalid_argument("Denominator cannot be zero.");
}

int main() {
    RationalNumber myRationalNumber;
    init_RationalNumber(myRationalNumber, 3, 5);
    std::cout << "My Rational Number = " << myRationalNumber.numerator << " / " << myRationalNumber.denominator << '\n';
    return 0;
}
`````
`````{code_explanation} exampleY4
:label: explanationY4
:class: dropdown

`````
This initialisation function passes a reference to the rational number. 

Note that a referenced object is not a copy and can therefore be modified.

But there is not yet any explicit connection between the functions and the struct; it is usually better to use a member function.

This is not generally how structs are initialised.
``````{code_example-end} 
``````

``````{code_example-start} Struct Example 5
:label: exampleY5
:class: dropdown
:nonumber:
``````
Using a member function for initalisation:
`````{code-cell} c++
:linenos:
:tags: [remove-output, skip-execution]
#include <iostream>
struct RationalNumber {
    int numerator;
    int denominator;

    void init_RationalNumber(RationalNumber& rationalNumber, int numerator, int denominator) {
        if (denominator != 0) rationalNumber = { numerator, denominator };
        else throw std::invalid_argument("Denominator cannot be zero.");
    }
};

int main() {
    RationalNumber myRationalNumber;
    myRationalNumber.init_RationalNumber(myRationalNumber, 3, 5);
    std::cout << "My Rational Number = " << myRationalNumber.numerator << " / " << myRationalNumber.denominator << '\n';
    return 0;
}
`````
`````{code_explanation} exampleY5
:label: explanationY5
:class: dropdown
Now `init_` is a member function and must be called using the `.` notation on an instance.

Its better to separate the declaration of the struct from the definitions.

`````
``````{code_example-end} 
``````

``````{code_example-start} Struct Example 6
:label: exampleY6
:class: dropdown
:nonumber:
``````
Declaring the init function inside the struct but defining it outside :
`````{code-cell} c++
:linenos:
:tags: [remove-output, skip-execution]
#include <iostream>
struct RationalNumber {
    int numerator;
    int denominator;

    void init_RationalNumber(RationalNumber&, int, int);
};

void RationalNumber::init_RationalNumber(RationalNumber& rationalNumber, int numerator, int denominator) {
    if (denominator != 0)  rationalNumber = { numerator, denominator };
    else throw std::invalid_argument("Denominator cannot be zero.");
}

int main() {
    RationalNumber myRationalNumber;
    myRationalNumber.init_RationalNumber(myRationalNumber, 3, 5);
    std::cout << "My Rational Number = " << myRationalNumber.numerator << " / " << myRationalNumber.denominator << '\n';
    return 0;
}
`````

``````{code_example-end} 
``````
## Accessing Structs by Pointer

Instead of passing by reference, as struct can be accessed by a pointer.

Structures are often accessed through pointers using the `->` the struct pointer member dereference operator. 

When `p` is a pointer, `p->m` is equivalent to `(*p).m` .

``````{code_example-start} Struct Example 7
:label: exampleY7
:class: dropdown
:nonumber:
``````
Using pointer member dereferencing operator `->`:
`````{code-cell} c++
:linenos:
:tags: [remove-output, skip-execution]
#include <iostream>
struct RationalNumber {
    int numerator;
    int denominator;

    void init_RationalNumber(RationalNumber*, int, int);
};

void RationalNumber::init_RationalNumber(RationalNumber* rationalNumber, int numerator, int denominator) {
    if (denominator != 0) {
        rationalNumber->numerator = numerator;
        rationalNumber->denominator = denominator;
    }
    else throw std::invalid_argument("Denominator cannot be zero.");
}

int main() {
    RationalNumber myRationalNumber;
    myRationalNumber.init_RationalNumber(&myRationalNumber, 3, 5);
    std::cout << "My Rational Number = " << myRationalNumber.numerator << " / " << myRationalNumber.denominator << '\n';
    return 0;
}
`````

``````{code_example-end} 
``````

``````{code_example-start} Struct Example 8
:label: exampleY8
:class: dropdown
:nonumber:
``````
Or using the pointer to the struct itself:
`````{code-cell} c++
:linenos:
:tags: [remove-output, skip-execution]
#include <iostream>
void RationalNumber::init_RationalNumber(RationalNumber* rationalNumber, int numerator, int denominator) {
    if (denominator != 0) *rationalNumber = { numerator , denominator };
    else throw std::invalid_argument("Denominator cannot be zero.");
}
`````

``````{code_example-end} 
``````
## Constructors

The best method is initialisation it to use a constructor.

A constructor is a member function that specifically initialises an instance of a struct or class.

Constructors are member functions with the same name as the struct (or class) that is used for initialisation. 

Failing to initialise a struct that has a constructor will produce be caught by the compiler.
``````{code_example-start} Struct Example 9 Constructors
:label: exampleY9
:class: dropdown
:nonumber:
``````
`````{code-cell} c++
:linenos:
:tags: [remove-output, skip-execution]
#include <iostream>
struct RationalNumber {
    int numerator;
    int denominator;

    RationalNumber(int numerator, int denominator);
};

RationalNumber::RationalNumber(int numerator, int denominator) : numerator{numerator}, denominator{denominator} {};

int main() {
    RationalNumber myRationalNumber{ 3 , 5};
    std::cout << "My Rational Number = " << myRationalNumber.numerator << " / " << myRationalNumber.denominator << '\n';
    return 0;
}
`````
Or inside the function 

`````{code-cell} c++
:linenos:
:tags: [remove-output, skip-execution]
#include <iostream>
struct RationalNumber {
    int numerator;
    int denominator;

    RationalNumber(int numerator, int denominator) : numerator{ numerator }, denominator{ denominator } {};
};

int main() {
    RationalNumber myRationalNumber{ 3 , 5};
    std::cout << "My Rational Number = " << myRationalNumber.numerator << " / " << myRationalNumber.denominator << '\n';
    return 0;
}
`````

We can also use the standard method of initialisation, but be careful not to use the same name for the contructor parameters.

`````{code-cell} c++
:linenos:
:tags: [remove-output, skip-execution]
#include <iostream>
struct RationalNumber {
    int numerator;
    int denominator;

    RationalNumber(int numerator1, int denominator1) {
        numerator = numerator1; denominator = denominator1;
    }
};
int main() {
    RationalNumber myRationalNumber{ 3 , 5};
    std::cout << "My Rational Number = " << myRationalNumber.numerator << " / " << myRationalNumber.denominator << '\n';
    return 0;
}
`````
Or,

`````{code-cell} c++
:linenos:
:tags: [remove-output, skip-execution]
#include <iostream>
struct RationalNumber {
    int numerator;
    int denominator;

    RationalNumber(int numerator1, int denominator1);
};
RationalNumber::RationalNumber(int numerator1, int denominator1) {
    numerator = numerator1; denominator = denominator1;
}
int main() {
    RationalNumber myRationalNumber{ 3 , 5};
    std::cout << "My Rational Number = " << myRationalNumber.numerator << " / " << myRationalNumber.denominator << '\n';
    return 0;
}
`````
Structs can also be returned, for example, although we do not need to return anything from the init function:

`````{code-cell} c++
:linenos:
:tags: [remove-output, skip-execution]
#include <iostream>
struct RationalNumber {
    int numerator;
    int denominator;
};
RationalNumber init_RationalNumber(RationalNumber& rationalNumber, int numerator, int denominator) {
    if (denominator != 0) return rationalNumber = { numerator, denominator };
    else throw std::invalid_argument("Denominator cannot be zero.");
}
int main() {
    RationalNumber myRationalNumber;
    RationalNumber mySecondRationalNumber;
    mySecondRationalNumber = init_RationalNumber(myRationalNumber, 3, 5);
    std::cout << "My Rational Number = " << myRationalNumber.numerator << " / " << myRationalNumber.denominator << '\n';
    std::cout << "My Rational Number = " << mySecondRationalNumber.numerator << " / " << mySecondRationalNumber.denominator << '\n';
    return 0;
}
`````
``````{code_example-end} 
``````






## Technical Details
A struct is a simple class whose members are public by default; a class has private members.

The name of the struct can be used within its own declaration i.e. the name is available after it has been seen by the compiler, not after the declaration has been completed as with most declarations. 

New instances of a struct may not be declared inside the struct however, only pointers to instances.

The name of a struct can be used before definition provided that the name of a member or the size of the struct is no needed to be known. 

Most uses required the definition to be completed first.


## Adding arithmetic functions

Basic operations such as `==` are not available to a struct by default, so these must all be defined by the user for each new struct.

``````{code_example-start} Struct Example 10
:label: exampleY14
:class: dropdown
:nonumber:
``````
`````{code-cell} c++
:linenos:
:tags: [remove-output, skip-execution]
#include <iostream>
struct RationalNumber {
    int numerator;
    int denominator;

    RationalNumber(int numerator, int denominator) : numerator{ numerator }, denominator{ denominator } {};

    RationalNumber add(RationalNumber lhs, RationalNumber rhs);
    RationalNumber multiply(RationalNumber lhs, RationalNumber rhs);
};

RationalNumber RationalNumber::add(RationalNumber lhs, RationalNumber rhs) {
    return RationalNumber{ lhs.numerator * rhs.denominator + rhs.numerator * lhs.denominator,lhs.denominator * rhs.denominator };
}
RationalNumber RationalNumber::multiply(RationalNumber lhs, RationalNumber rhs) {
    return RationalNumber(lhs.numerator * rhs.numerator, lhs.denominator * rhs.denominator);
}

int main() {
    RationalNumber myFirstRationalNumber{ 1 , 2};
    RationalNumber mySecondRationalNumber{ 1 , 3 };
    RationalNumber product = product.multiply(myFirstRationalNumber, mySecondRationalNumber);
    RationalNumber sum = sum.add(myFirstRationalNumber, mySecondRationalNumber);
    std::cout << "My Rational Number = " << product.numerator << " / " << product.denominator << '\n';
    std::cout << "My Rational Number = " << sum.numerator << " / " << sum.denominator << '\n';
    return 0;
}
`````

These can be written in a neater fashion using `this`, which is a pointer to the instance that the member functions and members belong to.

`````{code-cell} c++
:linenos:
:tags: [remove-output, skip-execution]
#include <iostream>
struct RationalNumber {
    int numerator;
    int denominator;

    RationalNumber(int numerator, int denominator) : numerator{ numerator }, denominator{ denominator } {};

    RationalNumber add(RationalNumber rhs);
    RationalNumber multiply(RationalNumber rhs);
};
RationalNumber RationalNumber::add(RationalNumber rhs) {
    return RationalNumber{ this->numerator * rhs.denominator + rhs.numerator * this->denominator, this->denominator * rhs.denominator };
}
RationalNumber RationalNumber::multiply(RationalNumber rhs) {
    return RationalNumber(this->numerator * rhs.numerator, this->denominator * rhs.denominator);
}

int main() {
    RationalNumber myFirstRationalNumber{ 1 , 2};
    RationalNumber mySecondRationalNumber{ 1 , 3 };
    RationalNumber product = myFirstRationalNumber.multiply(mySecondRationalNumber);
    RationalNumber sum = myFirstRationalNumber.add(mySecondRationalNumber);
    std::cout << "My Rational Number = " << product.numerator << " / " << product.denominator << '\n';
    std::cout << "My Rational Number = " << sum.numerator << " / " << sum.denominator << '\n';
    return 0;
}
`````

``````{code_example-end} 
``````

## Static Members Functions

Static member functions are called with struct type name, not instance name.

``````{code_example-start} Struct Example 11
:label: exampleY16
:class: dropdown
:nonumber:
``````
`````{code-cell} c++
:linenos:
:tags: [remove-output, skip-execution]
#include <iostream>
struct RationalNumber {
    int numerator;
    int denominator;

    RationalNumber(int numerator, int denominator) : numerator{ numerator }, denominator{ denominator } {};

    static RationalNumber add(RationalNumber lhs, RationalNumber rhs);
    static RationalNumber multiply(RationalNumber lhs, RationalNumber rhs);
};

RationalNumber RationalNumber::add(RationalNumber lhs, RationalNumber rhs) {
    return RationalNumber{ lhs.numerator * rhs.denominator + rhs.numerator * lhs.denominator,lhs.denominator * rhs.denominator };
}
RationalNumber RationalNumber::multiply(RationalNumber lhs, RationalNumber rhs) {
    return RationalNumber(lhs.numerator * rhs.numerator, lhs.denominator * rhs.denominator);
}

int main() {
    RationalNumber myFirstRationalNumber{ 1 , 2 };
    RationalNumber mySecondRationalNumber{ 1 , 3 };
    RationalNumber product = RationalNumber::multiply(myFirstRationalNumber, mySecondRationalNumber);
    RationalNumber sum = RationalNumber::add(myFirstRationalNumber, mySecondRationalNumber);
    std::cout << "My Rational Number = " << product.numerator << " / " << product.denominator << '\n';
    std::cout << "My Rational Number = " << sum.numerator << " / " << sum.denominator << '\n';
    return 0;
}
`````

``````{code_example-end} 
``````









