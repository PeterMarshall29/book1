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

``````{code_example-start} Basic Struct Example 1
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

``````{code_example-start} Basic Struct Example 2
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

It is best to order members in a struct in size order i.e. largest member first e.g. doubles then ints then chars etc.
`````
``````{code_example-end} 
``````
Note: `size0f()` does not work the same for stucts, because of memory layout issues with structs that vary between architectures and implementations.

It is best to order members in a struct in size order i.e. largest member first e.g. doubles then ints then chars etc.

Both the list and the .notation may be used to modify existing values. 

First improvement: use a function for initialisation.

``````{code_example-start} Basic Struct Example 2
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
Values can be set manually after the creation of an instance of the struct, because the data members are publicly accessible by default.

`````

``````{code_example-end} 
``````
We can create a helper function to initialise a copy of the struct and to check for invalid entries etc.
``````{code_example-start} Basic Struct Example 2
:label: exampleY4
:class: dropdown
:nonumber:
``````
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
Values can be set manually after the creation of an instance of the struct, because the data members are publicly accessible by default.

`````

``````{code_example-end} 
``````
This initialisation function passes a reference to the rational number. 
Note that a referenced object is not a copy and can therefore be modified.
But there is not yet any explicit connection between the functions and the struct; it is usually better to use a member function.
``````{code_example-start} Basic Struct Example 2
:label: exampleY5
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
Values can be set manually after the creation of an instance of the struct, because the data members are publicly accessible by default.

`````

``````{code_example-end} 
``````
Now `init_` is a member function and must be called using the `.` notation on an instance.
Its better to separate the declaration of the struct from the definitions.

Declaring the init function inside the struct but defining it outside :
``````{code_example-start} Basic Struct Example 2
:label: exampleY6
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
`````{code_explanation} exampleY6
:label: explanationY6
:class: dropdown
Values can be set manually after the creation of an instance of the struct, because the data members are publicly accessible by default.

`````

``````{code_example-end} 
``````

Instead of passing by reference, as struct can be accessed by a pointer.
Structures are often accessed through pointers using the `->` the struct pointer member dereference operator. When p is a pointer, `p->m` is equivalent to `(*p).m` .
``````{code_example-start} Basic Struct Example 2
:label: exampleY7
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
`````{code_explanation} exampleY7
:label: explanationY7
:class: dropdown
Values can be set manually after the creation of an instance of the struct, because the data members are publicly accessible by default.

`````

``````{code_example-end} 
``````
Or using the pointer to the struct itself, 
``````{code_example-start} Basic Struct Example 2
:label: exampleY8
:class: dropdown
:nonumber:
``````
`````{code-cell} c++
:linenos:
:tags: [remove-output, skip-execution]
#include <iostream>
void RationalNumber::init_RationalNumber(RationalNumber* rationalNumber, int numerator, int denominator) {
    if (denominator != 0) *rationalNumber = { numerator , denominator };
    else throw std::invalid_argument("Denominator cannot be zero.");
}
`````
`````{code_explanation} exampleY8
:label: explanationY8
:class: dropdown
Values can be set manually after the creation of an instance of the struct, because the data members are publicly accessible by default.

`````

``````{code_example-end} 
``````
Because a struct is a simple class, one with members that are public by default, a struct can have member functions and constructors.
A constructor is a member function that specifically initialises an instance of a struct or class.
Constructors are member functions with the same name as the struct (or class) that is used for initialisation. Failing to initialise a struct that has a constructor will produce be caught by the compiler.
``````{code_example-start} Basic Struct Example 2
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
`````{code_explanation} exampleY9
:label: explanationY9
:class: dropdown
Values can be set manually after the creation of an instance of the struct, because the data members are publicly accessible by default.

`````

``````{code_example-end} 
``````
Or inside the function 
``````{code_example-start} Basic Struct Example 2
:label: exampleY10
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
};

int main() {
    RationalNumber myRationalNumber{ 3 , 5};
    std::cout << "My Rational Number = " << myRationalNumber.numerator << " / " << myRationalNumber.denominator << '\n';
    return 0;
}
`````
`````{code_explanation} exampleY10
:label: explanationY10
:class: dropdown
Values can be set manually after the creation of an instance of the struct, because the data members are publicly accessible by default.

`````

``````{code_example-end} 
``````
We can also use the standard method of initialisation but be careful not to use the same name for the contructor parameters.
``````{code_example-start} Basic Struct Example 2
:label: exampleY11
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
`````{code_explanation} exampleY11
:label: explanationY11
:class: dropdown
Values can be set manually after the creation of an instance of the struct, because the data members are publicly accessible by default.

`````

``````{code_example-end} 
``````
Or,
``````{code_example-start} Basic Struct Example 2
:label: exampleY12
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
`````{code_explanation} exampleY12
:label: explanationY12
:class: dropdown
Values can be set manually after the creation of an instance of the struct, because the data members are publicly accessible by default.

`````

``````{code_example-end} 
``````


Since it's a member function, the reference to myRationalNumber is redundant

Structs can also be returned, for example, although we do not need to return anything from the init function:
``````{code_example-start} Basic Struct Example 2
:label: exampleY13
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
`````{code_explanation} exampleY13
:label: explanationY13
:class: dropdown
Values can be set manually after the creation of an instance of the struct, because the data members are publicly accessible by default.

`````

``````{code_example-end} 
``````






Technical details.
A struct is a simple class whose members are public by default; a class has private members.

The name of the struct can be used within its own declaration i.e. the name is available after it has been seen by the compiler, not after the declaration has been completed as with most declarations. 
New instances of a struct may not be declared inside the struct however, only pointers to instances.
The name of a struct can be used before definition provided that the name of a member or the size of the struct is no needed to be known. 
Most uses required the definition to be completed first.


Basic operations such as `==` are not available to a struct by default, so these must all be defined by the user for each new struct.

## Adding arithmetic functions
``````{code_example-start} Basic Struct Example 2
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
`````{code_explanation} exampleY14
:label: explanationY14
:class: dropdown
Values can be set manually after the creation of an instance of the struct, because the data members are publicly accessible by default.

`````

``````{code_example-end} 
``````
These can be written in a neater fashion using `this`, which is a pointer to the instance that the member functions and members belong to.
``````{code_example-start} Basic Struct Example 2
:label: exampleY15
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
`````{code_explanation} exampleY15
:label: explanationY15
:class: dropdown
Values can be set manually after the creation of an instance of the struct, because the data members are publicly accessible by default.

`````

``````{code_example-end} 
``````

## Static members functions – called with stuct type name not instance name.

``````{code_example-start} Basic Struct Example 2
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
`````{code_explanation} exampleY16
:label: explanationY16
:class: dropdown
Values can be set manually after the creation of an instance of the struct, because the data members are publicly accessible by default.

`````

``````{code_example-end} 
``````









