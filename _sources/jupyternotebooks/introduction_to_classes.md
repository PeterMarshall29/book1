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
(Classes)=
# Classes in C++

The `class` keyword declares a class or defines an object of class type. A class is a user-defined type, consisting of a set of members, and each class is a new namespace containing its members. 

The most common members are "data members" (variables) and "member functions", followed by operators and some other language features.

An instance of a class is created in the same way as an instance of a `double` or an `int` and new instances of classes are referred to as objects - hence object-oriented programming primarily refers to the use of instances of classes.

Every class is divided into two parts, members are designated as `private` (by default if unspecified) and `public`. The public members provide the class's interface, and the private members provide implementation details.

A `struct` is a `class` where all members are public by default - so you already know a lot about creating and working with classes. The notes used to introduce `struct`s last semester have been added to a page on this web resource.

Member functions can access the data members and are the only functions that can access private data members - all the functionality and behaviour of the new type is defined by its member functions, which includes defining initialization (creation), copy and move, and destruction (cleanup = freeing no longer required memory/storage).

Members are accessed using . (dot) for objects and `->` (arrow) for pointers. Operators, such as `+`, `!`, and `[]`, can be defined for a class.

``````{code_example-start} Basic Class Example
:label: exampleZ1
:class: dropdown
:nonumber:
``````
A standard example of a simple class:
```{code-block} cpp
:linenos:
class Date {
  int day;
  int month;
  int year;
public:
  void init_date(int init_day, int init_month, int init_year); // initialiser
};
```
This is equivalent to:
```{code-block} cpp
:linenos:
class Date {
  public:
    void init_date(int init_day, int init_month, int init_year); // initialiser
  private:
    int day;
    int month;
    int year;
};
```
Try: run this code - uncomment one line at a time.
`````{code-cell} c++
:linenos:
:tags: [remove-output, skip-execution]
#include <iostream>
class Date {
    int day;
    int month;
    int year;
public:
    void init_date(int init_day, int init_month, int init_year); // initialize
    int output_day();
};
void Date::init_date(int init_day, int init_month, int init_year) {
    day = init_day, month = init_month, year = init_year;
};
int Date::output_day() { return day;}

int main() {
    Date today;
    //today.day = 1;
    //today.init_date(01, 01, 2026);
    //std::cout << today.day;
    //std::cout << today.output_day();
    return 0;
}
`````

`````{code_explanation} exampleZ1
:label: explanationZ1
:class: dropdown
The name of the class becomes a new type. Declaring an instance of that type creates an instance of the class, often called an object.

To create an instance of date we need to declare it - to use that instance we need to have initialised it.

Because the data members are default private - there is no way to access them, to initialise, read, or change the values stored. 

The `init_data()` is a member function and can therefore access the private data members - this process is usually handled by a `constructor()`; here we use `init_data()` just as a simple example.

To access private data members must include specific member functions for any type of access - these are collectively called **accessor functions** - see next section.

Note the use of the namespace resolution operator `::` to define the member function outside of the class.

`````

``````{code_example-end} 
``````
## Access Specifiers

Members are private by default - so anything before the private `public` keyword is automatically `private`.

`private`, `public`, and `protected` (covered in later section) are called **access specifiers**.

The key points to remember are that: 
* Private data members may not be initialised by assignment - a constructor or member-initialisation-function is required
* Non-member function may not access private members of a class.
* Private data members may not be access by index notation.

When the `private` keyword is also used, the order of the public and private members does not matter, and it is sometimes useful to lead with the public member functions, just to add emphasis to their role as interface to the class. The 'private' and 'public' keywords may be used more than once each, for a large class this might be helpful, but should generally be avoided because to reduce potential confusion.  

## Accessor Functions

Classes require additional `public` member functions because the data members are `private`.

Initialisation and access cannot be achieved using dot notation to any private members. Just to print out the private members' values requires an additional function to return the value.

Functions written for the purpose of changing (setting) or retrieving (getting) the values of the data members are often called **setters** and **getters**

Note that the order of declaration of `output_day` and `day` is irrelevant, because it’s the defined values in the instance that are important.
Try - comment out the init statement and try to print out the value of day.

Accessor functions are often just called `getName()`, where `name` is the private data member being accessed.

``````{code_example-start} Accessing Private Data Members
:label: exampleZ2
:class: dropdown
:nonumber:
``````
Examples of accessor functions.

Try: run this code.
`````{code-cell} c++
:linenos:
:tags: [remove-output, skip-execution]
#include <iostream>
class Date {
    int day;
    int month;
    int year;
public:
    void set_day(int new_day) { day = new_day; }
    void set_month(int new_month) { month = new_month; }
    void set_year(int new_year) { year = new_year; }
    int get_day() { return day; }
    int get_month() { return month; }
    int get_year() { return year; }
};

int main() {
    Date today;
    today.set_day(27);
    today.set_month(02);
    today.set_year(2002);
    std::cout << "The date is: " << today.get_day() << ", " << today.get_month() << ", " << today.get_year() << ". " << '\n';
    return 0;
}
`````

`````{code_explanation} exampleZ2
:label: explanationZ2
:class: dropdown

Setters are only required if the data members will be altered after initialisation - often classes only have constructors.

An alternative to a getter would be a member function for printing to the terminal, or to file, if those are the only things done with the data.

`````

``````{code_example-end} 
``````

## Inline Member Functions

The accessor member functions have been defined in place of the declaration line - which has advantages and disadvantages.

Any member function defined within the class declaration becomes an **inline** member functions. This should only be done with small, frequently used, and rarely modified functions.

**inline** functions are compiled such that their code is repeated at the point of call, rather than code being added for the function call mechanism so that the code runs at the point of call. Depending on what the function does, inlining can improve performance, a compiler could even replace the function with the value it would have obtained if value can be computed at compile time, whereas a normal function would always wait and run during the program execution. Adding `inline` at the beginning of a function definition does nothing else and is ignore if not suitable under the circumstances.

Any member function can be declared as inline by adding the `inline` keyword to its definition outside of the class definition, which retains the separation of declaration and definition that is preferred for classes, separating interface and implementation.
```{code-block} cpp
inline int Date::output_day() { return day; }
```

## Fundamental Member Functions

* Default, copy, and move constructors.
* Copy, and move, assignment operators.
* Destructors.

## Constructors

The correct approach to initialisation of an instance of a class is via a constructor; the alternative is another member function that serves the same purpose, which is pointless for classes and increases the danger of an object being left uninitialised.

When a class has a constructor, all objects of that class will be initialized by a constructor call. If the constructor requires arguments, these arguments must be supplied. Calling the constructor creates the instance of the class.

Constructors are member functions that have the same name as their class and return nothing (including void). The constructor can be defined inside the class declaration or separately.
``````{code_example-start} Constructors
:label: exampleZ3
:class: dropdown
:nonumber:
``````
`````{code-cell} c++
:linenos:
:tags: [remove-output, skip-execution]
#include <iostream>
class Date {
public:
    Date(int init_day, int init_month, int init_year); // Constructor - parameter names can be ommited
    void printDate();
private:
    int day;
    int month;
    int year;
};

Date::Date(int init_day, int init_month, int init_year) {
    day = init_day, month = init_month, year = init_year;
};
void Date::printDate() { 
    std::cout << "The date is: " << day << "/"<< month << "/" << year << '\n'; }

int main() {
    //Date today;//Error - constructor declared - must be used.
    Date today{ 01, 01, 2026 };
    Date birthday = Date{ 27, 2, 1973 };
    Date StStephensDay{ 26, 12, 2026 }; // abbreviated form
    //Date someOnes_birthday; //error : initializer missing
    //Date NewtonMas{ 25, 12 }; // error : third argument missing
    today.printDate();
    birthday.printDate();
    StStephensDay.printDate();
    return 0;
}
`````
`````{code_explanation} exampleZ3
:label: explanationZ3
:class: dropdown

Setters are only required if the data members will be altered after initialisation - often classes only have constructors.

An alternative to a getter would be a member function for printing to the terminal, or to file, if those are the only things done with the data.
`````
``````{code_example-end} 
``````

## Member Initialiser Lists

The preferred way to write a constructor is to include a {term}`member initialiser list`, which initialise class data members before the body of the constructor is evaluated. The body of the constructor then has the advantage of access to initialised data members.
```{code-block} cpp
Date::Date(int init_day, int init_month, int init_year) : day(init_day), month(init_month), year(init_year) {}
```

There are some situations where the constructor must have a **member initialiser list**.

* Initialisation of non-static `const` data members.
* Initialisation of reference type data members.
* Initialisation of member objects that do not have a default constructor, i.e. when one class has members that are instances of another class.
* Initialisation of base class members.

A non-essential use of the member initialiser list is when you really want to use the same identifier for the parameter's names as the data member's names - using different names keeps the code simpler.
``````{code_example-start} Member Initialiser Lists
:label: exampleZ4
:class: dropdown
:nonumber:
``````
`````{code-cell} c++
:linenos:
:tags: [remove-output, skip-execution]
#include<iostream>
class Date {
public:
    Date(int day, int month, int year); // Constructor - parameter names can be omitted
    int output_day();
private:
    int day;
    int month;
    int year;
};

Date::Date(int day, int month, int year) :
    day(day), month(month), year(year) {}

int Date::output_day() { return day; }

int main() {
    Date today{ 01, 01, 2026 };
    std::cout << today.output_day();
    return 0;
}

`````
`````{code_explanation} exampleZ4
:label: explanationZ4
:class: dropdown

An alternative would be to use the `this` pointer. `this` is a pointer to the instance to which the accessed member functions and data members belong.

```{code-block} cpp
:linenos:
Date::Date(int day, int month, int year) {
    this->day = day, this->month = month, (*this).year = year;
};
```
Recall `this->` is identical to `(*this).` - the parens are required syntactically because the asterisk is overloaded.

Note: repeated identifiers gets confusing!
`````
``````{code_example-end} 
``````

## Default Constructors

A Default constructor usually has no parameters. Compilers generate default constructors that take no arguments but only when no other constructor has been declared. 

Once any constructor is declared, an implicit default constructor is no longer produced by the compiler. 

If you have declared only a constructor that takes parameters, code that attempts to call a default constructor causes the compiler to produce an error message. An explicit default constructor can be added - an overload of the constructor. 

The compiler-generated default constructor performs simple member-wise default initialization of the object, but default initialisation may leave members with an indeterminate state.

It is bad practice to have a default constructor for data members without default values - construction would leave members uninitialised and lead to unexpected results.

```{code-block} cpp
:linenos:
Date(); // Default Constructor Declaration - no parameter list
Date::Date() : day(2), month(1), year(2001) {} //Default Constructor Definition with Default Values
```
## Implicit Default Constructors

If no constructors are declared then the compiler will create an implicit inline default constructor, which will produce garbage if there are no default values available i.e. data members initialised in unpredictable states.

If the implicit default constructor is relied upon, then the data member should be initialised inside the class definition, either to a value, or zero-initialised by an empty initialiser list. See the notes on initialisation from week 1.

``````{code_example-start} Implicit Default Constructors
:label: exampleZ5
:class: dropdown
:nonumber:
``````
`````{code-cell} c++
:linenos:
:tags: [remove-output, skip-execution]
#include<iostream>

`````

Try the following 3 codes. The first two are acceptable...

```{code-block} cpp
:linenos:
class Date {
public:
    int get_day() { return day; };
private:
    int day = 1;
    int month = 1;
    int year = 2000;
};

int main() {
    Date today;
    std::cout << today.get_day();
    return 0;
}
```
or 
```{code-block} cpp
:linenos:
class Date {
public:
    int get_day() { return day; };
private:
    int day {};
    int month {};
    int year {};
};

int main() {
    Date today;
    std::cout << today.get_day();
    return 0;
}
```
But this one produces garbage..
```{code-block} cpp
:linenos:
class Date {
public:
    int get_day() { return day; };
private:
    int day;
    int month;
    int year;
};
int main() {
    Date today;
    std::cout << today.get_day();
    return 0;
}
```
`````{code_explanation} exampleZ5
:label: explanationZ5
:class: dropdown
`````
Always initialise if you rely on implicit default construction!

``````{code_example-end} 
``````

A user defined constructor can also be called with the values in parens:
```{code-block} cpp
Date today ( 01, 01, 2026 );  //acceptable - best to use initialiser list
```

However, a compiler defined default constructor should be called without empty parens; otherwise, the compiler will expect the default constructor to have been overloaded and throw an error.

```{code-block} cpp
:linenos:
Date date1(); // Error - sometimes
Date date2;   // OK
Date date3{}; // OK , but unnecessary
```

A default constructor can be added when user-defined constructors are declared as follows.
```{code-block} cpp
:linenos:
Date() = default;
Date(int init_day, int init_month, int init_year) : day(init_day), month(init_month), year(init_year) {}
```
An instance of `Date` can then be instantiated without an initialiser list - but the values will be garbage unless the data members had default values.

Just for future reference because it is rarely useful - you can also prevent the compiler generating a default constructor by defining it as **deleted**.
```{code-block}  cpp
Date() = delete;
```



## Static Data Members

When a date member is declared as `static` there is a single copy of that member, which is shared by all instances of that class i.e. change it once, change it everywhere!

Static member declarations cannot contain an initialiser i.e. a default value cannot be assigned in the declaration.

Static data members can have values assigned using the scope resolution operator, or by instantiation using a constructor or member function etc..

``````{code_example-start} Static Data Members
:label: exampleZ6
:class: dropdown
:nonumber:
``````
`````{code-cell} c++
:linenos:
:tags: [remove-output, skip-execution]
#include <iostream>
class Date {
public:
    void init_date(int init_day, int init_month, int init_year); // initialize
    int get_day();
    void set_day(int);
    static int day;
private:
    int month;
    int year;
};

void Date::init_date(int init_day, int init_month, int init_year) {
    day = init_day, month = init_month, year = init_year;
};
int Date::get_day() { return day; }

void Date::set_day(int init_day) { day = init_day; }

int Date::day = 1;

int main() {
    Date today;
    Date tomorrow;
    std::cout << today.day << '\n';
    std::cout << tomorrow.day << '\n';
    today.set_day(3);
    std::cout << today.day << '\n';
    std::cout << tomorrow.day << '\n';
    Date yesterday;
    yesterday.init_date(5, 5, 5);
    std::cout << yesterday.day << '\n';
    std::cout << tomorrow.day << '\n';
    return 0;
}
`````
`````{code_explanation} exampleZ6
:label: explanationZ6
:class: dropdown
`````
If `day` were not a static data member - each instance of `Date` would have a separate copy of `day` whose values would be unconnected.

Static data members must be public.

``````{code_example-end} 
``````

## Special Member Functions

There are certain member functions, called the **special member functions** that a user defined class may require but which the user does not always need to explicitly define themselves, which include:

* The default constructor
* The destructor
* The copy constructor
* The copy assignment operator
* The move constructor
* The move assignment operator

If you define a class but do not explicitly define some required member functions, the compiler will implicitly declare and define default version of these special members for you, but only if an implementation of the special member function is required by your class. 

You can explicitly declare a default special member function by using the = default keyword. This causes the compiler to define the function only if needed, in the same way as if the function was not declared at all.

## Default Copying
By default, objects can be copied. A class object can be initialized with a copy of an object of its class. For example: 
```{code-block}  cpp
:linenos:
Date date1 = my_birthday; // initialization by copy
Date date2{ my_birthday }; // initialization by copy
```
The copy of a class object contains a copy of each member - If that default is not the behaviour wanted for a class X, a more 
appropriate behaviour can be provided. 

Similarly, class objects can be copied by assignment. For example:
```{code-block} cpp
:linenos:
void f(Date& d) {
  date = my_birthday;
}
```
Again, the default semantics is a member-wise copy. Alternatively, for a class X, the user can define an appropriate assignment operator.

## Destructors

For larger programs, especially those using resources such as files that burden the system memory, it is important to keep track of memory utilisation and to clean up unneeded allocations.

A destructor is a special member function that cleans up any resources allocated to a class instance when no longer required, i.e. when the instantiated object goes out of scope. Every instance of the same class is terminated by a separate call to the class destructor.

After the `main()` returns, all the allocated memory is freed up. Generally, we do not need to write a destructor - the compiler generated default destructor is fine.

The destructor takes the name of the class preceded by the tild `~` symbol.

```{code-block} cpp
:linenos:
~MyClassName(){};
```
There is little point in writing your own destructor, unless you utilise the body of the destructor for something useful - otherwise let the compiler construct the default destructor for you.

``````{code_example-start} Destructors
:label: exampleZ7
:class: dropdown
:nonumber:
``````
`````{code-cell} c++
:linenos:
:tags: [remove-output, skip-execution]
#include <iostream>
class Date {
    int day;
    int month;
    int year;
    
public:
    Date(int init_day, int init_month, int init_year) : day(init_day), month(init_month), year(init_year) {}
    ~Date() { std::cout << "One instance of Date was cleaned up..!" << '\n'; };
};

int main() {
    Date today{1,2,2003};
    Date tomorrow{ 2,3,2004 };
    return 0;
}
`````
``````{code_example-end}
``````
Like a constructor, a destructor cannot have a return value (not even void) because it returns nothing.

A destructor can take no arguments and therefore cannot be overloaded.  

Destructors are usually only called by the system but can be called explicitly on an instance.

For `virtual` member functions, adding a destructor become important - see next page.

The default destructor performs member-wise destruction of the object. It is virtual only if a base class destructor is virtual.

## Using Classes

Classes can be used as objects inside other classes i.e. the member list of one class can have a named instance of another class. An instance of the new class is then storing data within an instance of the other class.

In this way the new class is a superset of the data stored in the class it contains - we could take the view that the construct represented by the new class is also a version of the construct represented by the contained class with some added information.

A more useful way to relate two classes is via inheritance - see next chapter.

Classes instance can also be passed into functions.

## Function Objects - Functors

A function object, or functor, is any type that implements `operator()`, which overloads the function call operator `()`. C++ provides many built-in function objects, and you will have a called a function object without realising it.

A functor is a class designed to mimic a function i.e. it can be called like a function or function pointer, allowing objects of a class to be called like functions, but still having the advantages of a class. 

Function objects provide some advantages over regular functions. 

- A function object can be used wherever an object can be used i.e. it can be passed to a function as an argument or returned from a function.
- A function object can have a state i.e. it can hold information from one call to another.
- Inheritance applies - new function objects can be derived from existing ones.
- Being types function objects can be used as a template parameter.

Function objects allow us to write code that takes nontrivial operations as parameters; in many cases, it is essential that function objects can hold data needed to perform their operation.

```{code-block} cpp
:linenos:
return_type operator()(parameter_list) {
    // function body
}
```
The function object is called using the name of an instance of the class followed by `(argument list)`.

``````{code_example-start} Function Objects
:label: exampleZ8
:class: dropdown
:nonumber:
``````
`````{code-cell} c++
:linenos:
:tags: [remove-output, skip-execution]
#include <iostream>
#include<string>
class Date {
    int day;
    int month;
    int year;
public:
    Date(int init_day, int init_month, int init_year) : day(init_day), month(init_month), year(init_year) {}
    int operator () (std::string choice) {
        if (choice == "day") return day;
        else if (choice == "month") return month;
        else if (choice == "year") return year;
    }
};

void myPrinter(Date functor, std::string argument) {
    std::cout << functor(argument) << '\n';
}

int main() {
    Date today{1,2,2003};
    std::cout << today("day") << '\n';
    Date tomorrow{ 2,3,2004 };
    myPrinter(tomorrow, "month");
    
    return 0;
}
`````
``````{code_example-end}
``````

