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
Members are accessed using . (dot) for objects and `−>` (arrow) for pointers.
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




```
## Fundamental Member Functions

* Default, copy, and move constructors.
* Copy, and move, assignment operators.
* Destructors.

## Contructors

The correct approach to initialisation of an instance of a class is via a constuctor; the other option is member function that serves the same purpose, which is pointless for classes and increase the danger of an object being left unitialised.

When a class has a constructor, all objects of that class will be initialized by a constructor call. If the constructor requires arguments, these arguments must be supplied:

Constructors are member functions that have the same name as their class. The contstructor can be defined inside the class declaration or separately.

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

An alternative woudl be use to use the `this` pointer.

```{code-block} cpp
:linenos:
Date::Date(int day, int month, int year) {
    this->day = day, this->month = month, (*this).year = year;
};
```
Note: repeated identifiers gets confusing!

## Default Constructors

A Default constructor usually has no parameters.
```{code-block} cpp
:linenos:
Date() {}; // Default Constructor Declaration - no parameter list
```
It is bad practice to have a default constuctor for data members without default values - constuction would leave membersr uninitialised and lead to unexpected results.

If no constructors are declared then the compiler will create an implicit inline default constructor, which again will produce garbage if there are no default values available.

## Default Member Values

Class declarations may include intialisation of data members (non-static only), the values are then defaul values for an instances of the class.


```{code-block} cpp
:linenos:

```
Notes: values assigned by a constructor overwrite any default values i.e. values included in the declaration are replaced.


## Checking for valid Initialsiation values

```{code-block} cpp
:linenos:

```



```{code-block} cpp
:linenos:

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



## Default Copying
By default, objects can be copied. Aclass object can be initialized with a copy of an object of its class. For example: 
```{code-block} cpp
Date d1 = my_birthday; // initialization by copy
Date d2{ my_birthday }; // initialization by copy
```
The copy of a class object contains a copy of each member - If that default is not the behaviour wanted for a class X, a more 
appropriate behaviour can be provided. 
Similarly, class objects can be copied by assignment. For example:
void f(Date& d)
{
  d = my_birthday;
}
Again, the default semantics is a member-wise copy. Alternatively, for a class X, the user can define an appropriate assignment operator .
