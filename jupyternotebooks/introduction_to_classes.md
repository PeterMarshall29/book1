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

A class is a user-defined type, consisting of a set of members. The most common members are "data members" (variables) and "member functions", followed by operators and some other language features.

Member functions can define the meaning of initialization (creation), copy, move, and cleanup (destruction).
Members are accessed using . (dot) for objects and `->` (arrow) for pointers.
Operators, such as `+`, `!`, and `[]`, can be defined for a class.

A class is a namespace containing its members.

Every class is divide into two parts - the interface and the implementation. The public members provide the class's interface, and the private members provide implementation details.

A struct is a class where members are by default public.

The `class` keyword declares a class or defines an object of class type

An instance of a class is created by 

Instances of classes are referred to as objects - hence object-oriented programming primarily refers to the use of classes.

Basic classes are almost the same as structs that we covered last term.

```{code-block} cpp
:linenos:
class Date {
  int day;
  int month;
  int year;
public:
  void init_date(int dd, int mm, int yy); // initialize
  void add_year(int n); // add n years
  void add_month(int n); // add n months
  void add_day(int n); // add n days
};
```
This is equivalent to:

```{code-block} cpp
:linenos:
class Date {
  public:
    void init_date(int dd, int mm, int yy); // initialize
    void add_year(int number); // add number as years
    void add_month(int number); // add number as months
    void add_day(int number); // add number as days
  private:
    int day;
    int month;
    int year;
};
```
Members are private by default - so anything before the private `public` keyword is autoatically `private`.

`private`, `public`, and `protected` (covered in later section) are called **access specifiers**.

The key points to remember are that: 
* Private data members may not be initialisd by assignment - a constructor or member-initisation-function is required
* Non-member function may not access private members of a class.
* Private data members may not be access by index notation.

When the `private` keyword is also used, the order of the public and private members does not matter, and it is sometimes useful to lead with the public member functions, just to add emphasis to their role as interface to the class. The 'private' and 'public' keywords may be used more than once each, for a large class this might be helpful, but should generally be avoided because to reduce potential confusion.  
```{code-block} cpp
class Date {
public:
    void init_date(int init_day, int init_month, int init_year); // initialize
    //int output_day();
private:
    int day;
    int month;
    int year;
};

void Date::init_date(int init_day, int init_month, int init_year) {
    day = init_day, month = init_month, year = init_year;
};
//int Date::output_day() { return day;}

int main() {
    Date today;
    today.day = 1;
    //today.init_date(01, 01, 2026);
    std::cout << today.day;
    //std::cout << today.output_day();
    return 0;
}
```

Notes: initialisation and access cannot be acheived using dot notation to any private members.
Just to print out the private members - access requires an additional function to return the value.

Note that the order of declaration of `output_day` and `day` is irrelevant, because its the defined values in the instance that are important.
Try - comment out the init statement and try to print out the value of day.

Accessor functions are often just called `getName()`, where `name` is the private data member being accessed.

## Inline Member Functions

The member functions above could have been defined in place of the declaration line - which has advantages and disadvantages.

Any memeber function defined within the class declaration become an **inline** member functions. This should only be done with small, frequently used, and rarely modified functions.

**inline** functions are compiled such that their code is repeated at the point of call, rather than code being added for the function call mechanism so that the code runs at the point of call. Depending on what the function actually does, inlining can improve performance, a compiler could even replace the function with the value it would have obtained provided that value can be computed at compile time, whereas a normal function would always wait and run during the program execution. Adding `inline` at the beginning of a function definition does nothing else, and is ignore if not suitable under the circumstances.

Any member function can be declared as inline by adding the `inline` keyword to its definition outside of the class definition, which retains the separation of declaration and definition that is preferred for classes, separating interface and implementation.

inline int Date::output_day() { return day; }



## Fundamental Member Functions

* Default, copy, and move constructors.
* Copy, and move, assignment operators.
* Destructors.

## Constructors

The correct approach to initialisation of an instance of a class is via a constuctor; the other option is member function that serves the same purpose, which is pointless for classes and increase the danger of an object being left unitialised.

When a class has a constructor, all objects of that class will be initialized by a constructor call. If the constructor requires arguments, these arguments must be supplied. Calling the constructor creates the instance of the class.

Constructors are member functions that have the same name as their class, and return nothing (including void). The constructor can be defined inside the class declaration or separately.

```{code-block} cpp
:linenos:
class Date {
public:
    Date (int init_day, int init_month, int init_year); // Constructor - parameter names can be ommited
    int output_day();
private:
    int day;
    int month;
    int year;
};

Date::Date(int init_day, int init_month, int init_year) {
    day = init_day, month = init_month, year = init_year;
};
int Date::output_day() { return day; }

int main() {  
    //Date today;//Error - constructor declared - must be used.
    Date today{ 01, 01, 2026 };
    Date birthday = Date{ 27, 2, 1973 };
    Date StStephensDay{ 26, 12, 2026 }; // abbreviated form
    //Date someOnes_birthday; //error : initializer missing
    //Date NewtonMas{ 25, 12 }; // error : third argument missing
    std::cout << today.output_day();
    return 0;
}
```
## Member Intialiser Lists

The preferred way to write a contstuctor is to add include a `term`{member intialiser list}, which initialise class data members before the body of the constuctor is evaluated.
```{code-block} cpp
:linenos:
Date::Date(int init_day, int init_month, int init_year) :
    day(init_day), month(init_month), year(init_year) {}
```
The body of the constructor then has the advantage of access to initalised data members.

There are some situations where the constructor must have a **member initialiser list**.

* Initialisation of non-static const data members
* Initialisation of reference type data members
* Initialisation of member objects that do not have a default constructor, i.e. when one class has members that are instances of another class.
* Initialisation of base class memebers

A non-essentials use of the member initialiser list is when you really really want to use the same identifier for the parameter's names as the data member's names.


```{code-block} cpp
:linenos:
class Date {
public:
    Date(int day, int month, int year); // Constructor - parameter names can be ommited
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
```

An alternative would be use to use the `this` pointer.

```{code-block} cpp
:linenos:
Date::Date(int day, int month, int year) {
    this->day = day, this->month = month, (*this).year = year;
};
```
Note: repeated identifiers gets confusing!

## Default Constructors


A Default constructor usually has no parameters. Compilers generate default constructors that take no arguments but only when no other constuctor has been declared. 

Once any constructor is declared, an implicit default constuctor is no longer produced by the compiler and if the user defined constructoryou have not declared any other constructor. 

If you have declared only a constructor that takes parameters, code that attempts to call a default constructor causes the compiler to produce an error message. An explicit default constuctor can be added - overload of constructor. 

The compiler-generated default constructor performs simple member-wise default initialization of the objectl, but default initialization member with an indeterminate state.

It is bad practice to have a default constuctor for data members without default values - constuction would leave members uninitialised and lead to unexpected results.

```{code-block} cpp
:linenos:
Date(); // Default Constructor Declaration - no parameter list
Date::Date() : day(2), month(1), year(2001) {} //Default Constructor Definition with Default Values
```
## Implicit Default Constructors

If no constructors are declared then the compiler will create an implicit inline default constructor, which will produce garbage if there are no default values available i.e. data members initialised in unpredictable states.

If the implicit default constructor is relied upon, then the data member should be initialised inside the class definition.

```{code-block} cpp
:linenos:
class Date {
public:
    int output_day();
private:
    int day = 1;
    int month = 1;
    int year = 2000;
};
int Date::output_day() { return day; }

int main() {
    Date today;
    std::cout << today.output_day();
    return 0;
}
```

The compiler defined default constuctor should be called without empty parens; otherwise the compiler will expect the default contructor to have been overloaded and throw an error.
A user define 
```{code-block} cpp
:linenos:
Date date1(); //Error - sometimes
Date date2; //ok default values used
Date date3{}; ok default values used
```

To prevent the compilier generating a default constructor we can define it as **deleted**.
```{code-block} cpp
:linenos:
Date() = delete;
```




## Static Data Members

When a date member is declared as `static` there is a single copy of that member, which is shared by all instances of that class i.e. change it once, change it everywhere!

Static member declarations cannot contain an initialiser i.e. a default value cannot be assigned in the declaration.

Static data members can have a values assigned using the scope resolution operator
```{code-block} cpp
:linenos:
class Date {
public:
    void init_date(int init_day, int init_month, int init_year); // initialize
    int output_day();
    static int day;
private:
    int month;
    int year;
};

void Date::init_date(int init_day, int init_month, int init_year) {
    day = init_day, month = init_month, year = init_year;
};
int Date::output_day() { return day; }

int Date::day = 1;

int main() {
    Date today{};
    std::cout << today.day;
    return 0;
}
```

## Copy Constructors

## Default Copying
By default, objects can be copied. A class object can be initialized with a copy of an object of its class. For example: 
```{code-block} cpp
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
Again, the default semantics is a member-wise copy. Alternatively, for a class X, the user can define an appropriate assignment operator .

## Special Member Functions

There are certain member functions, catled the **special member functions** that a user defined class may require but which the user does not always need to explicitly define themselves, which include:

* The default constructor
* The destructor
* The copy constructor
* The copy assignment operator
* The move constructor
* The move assignment operator

If you define a class but do not explicitly define some required member functions, the compiler will implicitly declares and defines default version of these special members for you, but only if an implementation of the special member function is required by your class. 

You can explicitly declare a default special member function by using the = default keyword. This causes the compiler to define the function only if needed, in the same way as if the function was not declared at all.

In some cases, the compiler may generate deleted special member functions, which are not defined and therefore not callable. This can happen in cases where a call to a particular special member function on a class doesn't make sense, given other properties of the class. To explicitly prevent automatic generation of a special member function, you can declare it as deleted by using the = delete keyword.

T
The default copy and move construction and assignment operations perform member-wise bit-pattern copies or moves of non-static data members. Move operations are only generated when no destructor or move or copy operations are declared. A default copy constructor is only generated when no copy constructor is declared. It is implicitly deleted if a move operation is declared. A default copy assignment operator is generated only when no copy assignment operator is explicitly declared. It is implicitly deleted if a move operation is declared.

## Destructors

For larger programs, especially those using resources such as files that burden the system memory, it is important to keep track of memory utilisation and to clean up unneeded allocations.

After the `main()` returns, all the allocated memory is freed up. Generally we do not need to write a destructor - the compiler generated default destructor is fine.

A destructor is a special member function that cleans up any resources allocated to a class instance when it is no longer required, i.e. when the instantiated object goes out of scope. Every instance of the same class is terminated by a separate call to the class destructor.

The destructor takes the name of the class preceded by the tild `~` symbol.

```{code-block} cpp
:linenos:
~MyClassName();
```

Like a constructor, a destructor cannot have a return value (not even void) because it returns nothing. the compiler.  

A destructor can take no arguments, and therefore cannot be overloaded.  

Destructors are only called by the system, so there is no syntax for a destructor call.

The default destructor performs member-wise destruction of the object. It is virtual only if a base class destructor is virtual.



## Using Classes

Classes can be used as objects inside other classes i.e. the member list of one class can have a named instance of another class. An instance of the new class is then storing data within an instance of the other class.

In this way the new class is a superet of the data stored in the class it contains - we could take the view that the construct represented by the new class is also a version of the construct represented by the contained class with some added information.

A more useful way to relate two classes is via inheritance - see next chapter.

Classes instance can also be passed into functions.


## Functor

A functor is a class designed to mimic a function, because classes are more easily passed into other functions.