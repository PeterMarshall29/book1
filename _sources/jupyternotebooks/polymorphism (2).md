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
(Polymorphism)=
# Polymorphism 



## Inheritance - Derived Classes

A **derived class** (or sub-class) is a new class that inherits properties from a **base Class**.
Classes are described as base classes (or super-classes) when other classess are derived from them. 

Using derived class creates a hierarchical relationship between a group of classes.  For example we could define the class `Mammal` and the class `Insect` to share properties of the class `Animal`.

The use of derived classes and inheritance is the basis of Object-oriented programming.

A derived class **inherits** the properties of the base class, but then adds more data and functions - derived classes are larger and although often call subclasses they have a superset of the data of an instance of the base class.

Syntax for a derived class.

```{code-block} cpp
:linenos:
class BaseClassName {

}
class DerivedClassName : BaseClassName
```
If a single base class is specified, the inheritance model is Single inheritance. If more than one base class is specified, the inheritance model is called Multiple inheritance.


In the following example, the base class is Person, and the derived class is Student. Note that Student automatically has access to the members of Person, including the constuctor - there is no need to create new versions of these members.

```{code-block} cpp
:linenos:
#include <iostream>
#include <string>

class Person {
protected:
    std::string name;
    int age;
public:
    Person(const std::string& init_name, int init_age) : name(init_name), age(init_age) {} // Constructor
    void displayInfo() const {
        std::cout << "Name: " << name << "\nAge: " << age << '\n';
    }
};
class Student : public Person {
private:
    std::string studentID;
public:
    // Constructor using base class constructor
    Student(const std::string& init_name, int init_age, const std::string& init_studentID)
        : Person(init_name, init_age), studentID(init_studentID) {}
    std::string printStudentID() { return studentID; }
};

int main() {
    Person person("Alice", 21);  //Create instance of Person
    person.displayInfo();
    std::cout << "\n";

    Student student("Bob", 20, "F123456"); // Create an instance of Student
    student.displayInfo();
    std::cout << "ID: " << student.printStudentID();
    std::cout << "\n";
    return 0;
}
```
The access specifier `protected` indicates that the data members may only used by the class and by classes derived from it.

Using the `public` access modifier for the derived class maintains the same access level for inheritable members of the base class. Any accessible members of the base class, i.e.  `public` or `protected` data members or member functions, become private members of the derived class. Since we want to call the member function `dispayInfo()` we need to make the derived class from a public declared base class.

If no access modifier is specified in the derived class declaration, the default is `private`; default is public for `struct`.


Inheritance Syntax:
class Student : public Person means Student publicly inherits from Person.

Protected Members:
name and age are protected so they are accessible in derived classes but not outside.

Constructor Chaining:
The derived class constructor calls the base class constructor using : Person(name, age).

Method Overriding:
displayInfo() is declared virtual in the base class and overridden in the derived class.

Polymorphism:
Using a Person* pointer to a Student object calls the overridden method.

## Inheriting Constructors

Derived classes can inherit the base class's constructors if a using directive is declared as follows:

```{code-block} cpp
:linenos:
public:
using Base::Base;
```




(Virtual Functions)=
## Virtual Functions

Virtual functions  allows the programmer to declare functions in a base class that can be redefined in each derived class. 

Declaring a particular function as virtual in the base class allows that function identifier to act as an interface to the definitions of the function in both the base and derived classes. The compiler and linker will guarantee the correct correspondence between objects and the functions applied to them.

A function in a derived class with the same identifier and argument type list as one in the base class is said to override the base class version that would otherwise be inherited. The virutal base function can be overrided with a different return type in the derived version.

The only constraint on a virtual function being an interface to its variants defined in derived classes is that is that argument types cannot differ from those of the base declaration, and only minor changes are allowed for the return type.

A virtual member function is also know as a **method**.

The virtual member function must be defined in the class it is first declared in - see pure virtual functions and abstract classes.

When a derived class does not need a particular virtual function it does not need to provide a definition even though the function 

```{code-block} cpp
:linenos:

```



## Override

`override` is used to designate a member function that override a virtual function in a base class.

`override` is a reserved keyword when used immediately after a member function declaration.



