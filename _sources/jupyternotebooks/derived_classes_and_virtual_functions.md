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
(derived classes)=

# Inheritance - Derived Classes

A **derived class** (or sub-class) is a new class that inherits properties from a **base Class**.

Classes are described as base classes (or super-classes) when other classess are derived from them. 

Using derived class creates a hierarchical relationship between a group of classes.  For example we could define the class `Mammal` and the class `Insect` to share properties of the class `Animal`.

The use of derived classes and inheritance is the basis of Object-oriented programming.

A derived class **inherits** the properties of the base class, but then adds more data and functions - derived classes are larger and, although often called subclasses, they have a superset of the data of an instance of the base class.
````{syntax-start} Derived Classes
:label: syntaxAD1
:class: dropdown
:nonumber:
Syntax for a derived class.
````
```{code-block} cpp
:linenos:
class BaseClassName {
};
class DerivedClassName : BaseClassName {
};
```
````{syntax-end}
````
If a single base class is specified, the inheritance model is called **Single Inheritance**. If more than one base class is specified, the inheritance model is called **Multiple inheritance**.

In the following example, the base class is `Person`, and the derived class is `Student`. 



``````{code_example-start} Derived Class Example
:label: exampleAD1
:class: dropdown
:nonumber:
``````
An example of a derived class:
`````{code-cell} c++
:linenos:
:tags: [remove-output, skip-execution]
#include<iostream>
#include<string>
class Person {
protected:
    std::string name{};
    int age{};
public:
    void displayInfo() const {
        std::cout << "Name: " << name << "\nAge: " << age << '\n';
    }
};
class Student : public Person {
private:
    std::string studentID;
public:
    Student(std::string init_name, int init_age, std::string init_studentID) {
        name = init_name; age = init_age, studentID = init_studentID;
    }
    std::string printStudentID() {
        return studentID;
    }
};
int main() {
    Student student{ "Bob", 20, "F123456" }; // Create an instance of Student
    student.displayInfo();
    std::cout << "ID: " << student.printStudentID();
    std::cout << "\n";
    return 0;
}
`````

`````{code_explanation} exampleAD1
:label: explanationAD1
:class: dropdown

Every instance of the derived class `student` also has data members called `name` and `age` that were inherited from `Person`, including the constuctor - i.e. there is no need to create new versions of the inherited members.

Note: there is no constructor, or setter's for the `person` class, so not much can be done with it in this example. 

`````

``````{code_example-end} 
``````
The derived class is able to set and access data members belonging to its base class, because when an instance of a derived class is created, an embedded instance of the base class is also created (hidden withing the derived object, as a subobject).

It is important to note the order of construction and destrucion.

The base class object is constructed first, so that it is fully available for the construction of the derived object - the derived object is then constructed before its constructor body is executed.

At destruction, the destructor of the base class object is called last, after the derived class object has been destroyed.

## Construction of Derived Classes

It is better to use constructors with member list initialisation and to use **constructor chaining**, as shown in this example:

``````{code_example-start} Derived Class Construction
:label: exampleAD2
:class: dropdown
:nonumber:
``````
An example of a derived class:
`````{code-cell} c++
:linenos:
:tags: [remove-output, skip-execution]
#include <iostream>
#include <string>

class Person {
protected:
    std::string name;
    int age;
public:
    Person(std::string init_name, int init_age) : name(init_name), age(init_age) {} // Constructor
    void displayInfo() {
        std::cout << "Name: " << name << "\nAge: " << age << '\n';
    }
};
class Student : public Person {
private:
    std::string studentID;
public:
    // Constructor using base class constructor
    Student( std::string init_name, int init_age, const std::string& init_studentID )
        : Person(init_name, init_age), studentID(init_studentID) {}
    std::string printStudentID() {
        return studentID;
    }
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
`````

`````{code_explanation} exampleAD2
:label: explanationAD2
:class: dropdown

The constructor for derived classes must call the base class's constructor. 

This ensures the base class is constructed before extra data is added to make the instance of your derived class. This requires that there must be a constructor for the base class.

Order of construction is important - Call the base class constructors in order of derivation, i.e. if Class3 is derived from Class2, which is derived from Class1, the Class1 constructor musst be called first, followed by the Class2 constructor and so on.
`````

``````{code_example-end} 
``````



## More on Access Specifiers

The access specifier `protected` indicates that the data members may only used by the class and by classes derived from it. `name` and `age` are protected membere - they are accessible in derived classes but not outside.

`class Student : public Person` - specifies that `Student` publicly inherits from `Person`.

Using the `public` access modifier for the derived class maintains the same access level for inheritable members of the base class. Any accessible members of the base class, i.e.  `public` or `protected` data members or member functions, become private members of the derived class. Since we want to call the member function `dispayInfo()` we need to make the derived class from a public declared base class.

If no access modifier is specified in the derived class declaration, the default is `private` - default is public for `struct`.

Inhertiance is almost always public, protected inheritance is never used, but private inheritance can be useful. 

Private inheritance is used when some of a classes public member functions are to be used for a second class.



<!-- ## Inheriting Constructors

Constructors cannot be virtual - they have different idenifiers in each class.

Derived classes can inherit the base class's constructors if a using directive is declared as follows:

```{code-block} cpp
:linenos:
public:
using Base::Base;
```
 -->



(Virtual Functions)=
## Virtual Functions

**Virtual member functions**, also know **methods** allow the programmer to declare functions in a base class that can be redefined in each derived class. 

Declaring a particular function as `virtual` in the base class allows that function identifier to act as an interface to the definitions of the function in both the base and derived classes. The compiler and linker will guarantee the correct correspondence between objects and the functions applied to them.

A function in a derived class with the same identifier and argument type list as one in the base class is said to **override** the base class version that would otherwise be inherited. The virutal base function can be overrided with a different return type in the derived version.

The only constraint on a virtual function being an interface to its variants defined in derived classes is that is that argument types cannot differ from those of the base declaration, and only minor changes are allowed for the return type.

The virtual member function must be defined in the class it is first declared in - see pure {term}`virtual functions` and {term}`abstract classes`.

When a derived class does not need a particular virtual function it does not need to provide a definition even though the function is listed as virtual and available

``````{code_example-start} Virtual Member Functions Example
:label: exampleAD3
:class: dropdown
:nonumber:
``````
An example of virtual member functions:
`````{code-cell} c++
:linenos:
:tags: [remove-output, skip-execution]
#include <iostream>
#include <string>

class Person {
protected:
    std::string name;
    int age;
public:
    Person(std::string init_name, int init_age) : name(init_name), age(init_age) {} 
   
    virtual void displayInfo() {
        std::cout << "Name: " << name << "\nAge: " << age << '\n';
    }
};
class Student : public Person {
private:
    std::string studentID;
public:
    Student( std::string init_name, int init_age, const std::string& init_id)
        : Person(init_name, init_age), studentID(init_id) {}
    virtual void displayInfo() {
        std::cout << "Student Name: " << name << "\nAge: " << age << "\nStudent ID: " << studentID << '\n';
    }
};

int main() {
    Person person("Alice", 21);  //Create instance of Person
    person.displayInfo();
    std::cout << "\n";
    Student student("Bob", 20, "F123456"); // Create an instance of Student
    student.displayInfo();
    std::cout << "\n";
    return 0;
}
`````
`````{code_explanation} exampleAD3
:label: explanationAD3
:class: dropdown

Every instance of the derived class `Student` also has the data members called `name` and `age` that were inherited from the base class `Person`.

Note: there is no constructor, or setter's for the person class, so not much can be done with it. 

`````

``````{code_example-end} 
``````


ADD example showing why vitual is needed - works without it but works differently for pointers and referecnes see https://learn.microsoft.com/en-us/cpp/cpp/virtual-functions?view=msvc-170

## Constructor Chaining

A useful tec

Student( std::string init_name, int init_age, const std::string& init_id)
        : Person(init_name, init_age), studentID(init_id) {}



If the base class is abstract, then constructor chaining is the only option.        

## Override

`override` is used to designate a member function that overrides a virtual function in a base class.

`override` is a reserved keyword when used immediately after a member function declaration.


## Virtual Destructors

Destructors can be virtual - it is considered best practice is to make the base destructor virtual in any case involving polymorphism.

If a virtual function is used anywhere in the class hierarchy a virtual destructor should be added to prevent memory leaks.

In the `Person:Student` example above, the data members of any instances of `person or `Student` are created on the `term`{heap}.

If polymorphism is involved, then the polymorphic variable, a pointer, is stored on the `term`{stack} and must be deleted. When the `delete` operator is used on a pointer to an object, the objects destructor is called. However. if the ppinterr is to an instance of `Student`, this is still a pointer to `Person`, so the `delete` operator tries to destroy an non-existent instance of `Person`, and the `Student` object is untouched - a memory leak has occurred (unwanted student object still taking up space in memory).

Making the base class destructor `virtual` ensures this issue is handled correctly.

```{code-block} cpp
:linenos:
virtual ~Person(){}
```



## Abstract Classes

Abstraction is the hiding of the details of a programmes implementation from the programme's user, who can only see the essential details required for the interface.

In C++ abstraction is achieved using {Term}`abstract classes` - which are classes that cannot be instantiated i.e. you cannot create on named instance of the abstract class. 

Abstract classes are useful for representing general concepts from which more specific classes may be derived - they are typically base classes for other classes and contain at least one pure virtual function. A pure virtual function is a virtual function that is declared using the pure specifier `= 0`.

An abstract class is created by declaring at least one {term}`pure virtual member function` which is done by assigning `=0` to a function declaration.

``````{code_example-start} Virtual Member Functions Example
:label: exampleAD4
:class: dropdown
:nonumber:
``````
Example of creating an abstract class:
```{code-block} cpp
:linenos:
class Person {
protected:
    std::string name;
    int age;
public:
    Person(std::string init_name, int init_age) : name(init_name), age(init_age) {} 
    virtual void displayInfo() = 0;
};
```
Person can not longer be instantiated.

Try altering the code in the previous example.

If the derived class uses the virtual member function `displayInfo()` - the method must be redclared, and a definition provided in the usual manner.
``````{code_example-end}
``````

Although you may not create an an object of the abstract class type, it is still possible to use pointers and references to abstract class types.

You create an abstract class by declaring at least one pure virtual member function. That's a virtual function declared by using the pure specifier (= 0) syntax. Classes derived from the abstract class must implement the pure virtual function or they, too, are abstract classes.

Consider the example presented in Virtual functions. The intent of class Account is to provide general functionality, but objects of type Account are too general to be useful. That means Account is a good candidate for an abstract class:



## Encapsulation

Encapsulation
Encapsulation is defined as the process of wrapping data and the methods into a single unit, typically a class. It is like a protective shield that prevents the data from being accessed by the code outside the shield.

Technically, in encapsulation the variables or the data in a class is hidden from any other class and can be accessed only through any member function of the class in which they are declared.
In encapsulation, the data in a class is hidden from other classes, which is similar to what data-hiding does.
Encapsulation can be achieved by declaring all the variables in a class as private and writing public methods in the class to set and get the values of the variables.