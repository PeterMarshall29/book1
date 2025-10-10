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

# Functions 

Programmers often want to use the same {term}`code-block` repeatedly - in the same program, or across many programmes. 

A code-block can be made reusable by encapsulating it into a function.

At its simplest, a {term}`function` is just a sequence of {term}`statements` collected and given a name - to identify that set of statements.

When a function is 'called' (or 'invoked') its statements are executed as though they had been typed at that same point in the program.

Functions may be identified in code by finding an identifier suffixed by parentheses, which may be empty or contain arguments, e.g. `main()`.

In a declaration, an empty pair of parentheses `()` **always** means "function" - in C++.

***
```{note}
:class: margin
Functional programming is a programming paradigm that constructs programs from only functions.

C++ is a multiparadigm language - we will use a combination of Functional Programming and Object-oriented Programming, and possibly some Generic Programming.
```
Functions offer many benefits to the programmer, including: 

* Making programming more efficient by enabling the reuse of code-blocks.
* Reducing the complexity of the overall program by separating concerns - making it easier to write and understand the program because individual parts are separated and identified by a name.
* Making it easier to test the program - testing reduces to testing functions and their interactions.

Real-world programs use thousands of functions, some even hundreds of thousands of functions. We would never be able to write or understand such programs if their parts (e.g. tasks or computations) were not clearly separated and labelled.

Using a function is advisable, even when it will not be reused, because separating individual tasks/computations, and calling them by name makes programmes easier to follow.
```````{code_example-start} Introduction to Functions
:label: exampleu1
:class: dropdown
:nonumber:
```````
Run this code, which demonstrates a simple function declaration and call.

`````{code-cell} c++
:linenos:
:tags: [remove-output, skip-execution]
#include <iostream> 
#include <string>

void myFirstFunction () {
    std::cout << "Hello, World!" << '\n';
}

int main() {
    myFirstFunction();
    return 0;
}
`````
``````{code_explanation} exampleu1
:label: explanationu1
:class: dropdown

`````{card}
This is the {term}`function-definition`.
```{code-block} c++
void myFirstFunction() {
    std::cout << "Hello, World!" << '\n';
}
```
* The statement(s) inside the curly braces `{}` (a code-block) are the {term}`function-body`.
* The function-{term}`identifier` (name) is ***myFirstFunction*** - which may be user-defined.

The {term}`keyword` before the identifier, specifies the type of the value that will be returned when the function completes its execution.

* `Void` indicates that nothing is returned by this function, and therefore we do not need to use the `return` keyword. 
*  The empty parentheses `()` indicate that this function takes no {term}`arguments`. (Arguments are discussed below....)

The type of this function is `void()`. 

The `return` {term}`keyword` specifies what the function returns at the end of its execution.

If a function definition has declared that a particular type of data (an integer value in case of `main()`) will be returned, then whatever comes after the `return` keyword must evaluate to that type or be a literal of that type.

In the example program above, `myFirstFunction()` has no return type, so when the function completes execution, the program moves on to the next line, which in this case is the return-statement for `main()`, which requires an `int` be returned, hence `return 0;`. 
````{card}
For the `main()` function:

```{code-block} c++
int main() {
    return 0;
}
```
* `int` indicates that `main()` returns an integer, hence we require a {term}`return-statement` i.e. `return 0;`, and the type of `main()` is `int()`.
````
`````
````{card}
This is the function-body - the code that will be executed every time the function is ***called***.
```{code-block} c++
{
    std::cout << "Hello, World!" << '\n';
}
```
If there are nested blocks inside the {term}`function-body`, the outermost block has function {term}`scope`, and inner blocks have only local scope. Variables declared in the outer block are accessible throughout the function, but locally scoped variables are only used in their nested block. The outermost block is sometimes synonymous with function-body - but all the blocks are within the function body.
```` 
````{card}
This is a {term}`function call`: 
```{code-block} c++
myFirstFunction();
```
* To call a function we state its name followed by `()`. 
* If the function takes arguments, their values must be supplied in the parentheses.
```{important}
The function declaration and definition must be placed outside of the main function. 
```
For now, we will place the functions above the main function, but in future all functions should be placed in {term}`header files`, using the `#include` directive to make them available to `main()`.
````
````{note}
:class: dropdown
The statement before the function body, followed by a `;` would be a {term}`function declaration`, which would look like this:
```{code-block} c++
void myFirstFunction ();   // Declaration of myFirstFunction
```
````
Function declarations are used in addition to their definitions to give us more flexibility over where we may put the function definition. A definition is the declaration with the function body.
``````
```````{code_example-end}
```````
***
## Functions with Arguments
When a function is called, values may be ***passed in*** as {term}`arguments` to the function. 

These values are assigned to {term}`function-parameters` which are {term}`local variables` having function-scope that can only be used within the function. The outcome of the function call changes in response to the supplied values. 

Functions would be less useful if the variables used in their execution could not be modified. Global variables could be used but are generally to be avoided.

``````{code_example-start} Function Parameters and Arguments
:label: exampleu2
:class: dropdown
:nonumber:
``````
Run this code. 
`````{code-cell} c++
:linenos:
:tags: [remove-output, skip-execution]
#include <iostream>

int squareOf(int x) {
    return x * x;
}
int main() {
    for (int i = 0; i < 20; ++i) {
        std::cout << i << "\t" << squareOf(i) << "\n";
        ++i;
    }
    return 0;
}
`````
`````{code_explanation} exampleu2
:label: explanationu2
:class: dropdown
````{card}
The definition of `squareOf()` declares a single parameter named `x` of type `int`. 
```{code-block} c++
int squareOf(int x) {
    return x * x;
}
```
The definition may not be placed inside of another function including `main()`, and must come before the function call unless there is a separated function declaration.

The declaration would be written as follows.
```{code-block} c++
int squareOf(int x);
//or
int squareOf(int);
```
The declaration must have the same name and type, but the parameter names need not be included in the declaration.

The type of `squareOf()` is therefore `int (int)`.
````
````{card}
This is the function call:
```{code-block} c++
squareOf(i);
```
To call any function, its name must be included in a code-statement followed by `()`. The argument listed in the function’s definition specifies the number and type of values that must be included in the parentheses.

For `square()`, a single value integer value, an integer type variable, or an expression that evaluates to an integer must is required. 

Variable must have been initialised before being used as arguments in a function call - only their values are being passed into the function, so they must have values.

Note that the type is required in the definition, but not in the call.
````
````{card}
Parameters declared in the function declaration/definition become local variables of the same name that may be used within the body of the function - having the value that was passed in.
```{code-block} c++
x * x
```
Evaluates to a value that is the square of the values passed in during the call to the function e.g. the call `squareOf(5)` passes the integer value `5` into the function, where it is assigned as the value of the local variable `x`. Then `x * x` evaluates to `25`.
````
````{card}
Wherever a function is called in a program, at the end of its execution the `return` statement initialises a variable of the return type. This is identical to copy initialisation, but the variable is unnamed, and its value is lost if not used immediately. That temporary value is used by the program at the position where the function call was written - effectively replacing the function call with the value that was returned - the same as any expression is evaluated and the value then used.

The `squareOf()` function returns an integer value when it is called and, in the `main()` function, that value is immediately used by the character output stream - i.e. treated as an expression.
````
````{card}
If the return value is needed more than once, then it must be preserved by copy assignment to another variable. For example, we could have written:
```{code-block} c++
int main() {
    int number = 5;
    int returnedValue = squareOf(number);
    std::cout << temp << '\n'; 
    return 0;
}
```
`returnedValue` can then be used until we no longer need it.
````
````{card}
If a return value is not used, it is better practice to declare the return type as `void`. It is also common practice to put `return;` at the end of a void function - though not strictly necessary. 
````
```{admonition} Ways to Exit a Function
:class: note dropdown
There are 4 ways for the program to exit a function.

- Executing a `return` statement - `return` can be positioned at more than one point in a function within selection and iteration statements, but only one return-statement can be reached in each function execution.
- {term}`Falling through` - arriving at the end of the function code block and not finding a `return` - usually only acceptable for `void`.
- Throwing an {term}`exception` - this can be handled programmatically.
- By invoking another function that fails to return - does not pass control back to the original function.

The programmer should always ensure there is a `return`, or an `error`, for every logically possible way out of a function.
```
`````
````{exercise-start}
:label: exerciseu2
:class: dropdown admonition
:nonumber:
````
1. Correct the code so that incrementing by two in each loop is controlled solely by the for-statement argument.
2. Instead of using the returned value directly in the `std::out`, assign it to a variable and use that variable in the output stream statement. 
2.  * Try moving the definition of `squareOf()` to below the main function. 
    * Try moving the definition of `squareOf()` to inside the main function.
4. Try changing the function declaration so that it expects a parameter of type `double`.

```{solution} exerciseu2
:class: dropdown
:label: solutionu2
1. Put `i += 2` as the increment argument and delete `++i` in the function-body.
2.  * Adding a new integer declaration before the for-loop, `int temp;`.
    * Copy assign the returned value inside the for-loop, `temp = squareOf(i)`.
    * Replace `squareOf(i)` with `temp` inside the `std::cout` statement.
3. The function could only be placed above `main()` - because a function cannot be used before it has been declared. A separate declaration can be used to avoid this issue.
4. **Integers** can be converted to **doubles** at run-time, so the code works.

```
````{exercise-end}
````
``````{code_example-end}
``````

```{tip}
:class: margin
Declaration: Statement of the functions name and input/output types.

A definition requires the declaration (again) followed by the function-body.

"Declarations are not definitions".
```

****
Functions can have multiple parameters.
```{important}
:class: margin
Remember that the function arguments may only be passed in the same order as in the definition.
```

`````{code_example-start}
:label: exampleu3
:class: dropdown
:nonumber:
`````
Run this code, which demonstrates passing multiple arguments. 
````{code-cell} c++
:linenos:
:tags: [remove-output, skip-execution]
#include <iostream>
#include <string>
std::string myBirthdayGreeting(std::string name, int age) {
    return "Happy Birthday " + name + "! \n You are " + std::to_string(age) + " years old today.";
}

int main()
{
    std::string nameTemp;
    int ageTemp;
    std::cout << "Please type in your first name and age.. \n";
    std::cin >> nameTemp >> ageTemp ;
    std::cout << myBirthdayGreeting(nameTemp, ageTemp) << '\n';
    return 0;
}
````
When a function takes multiple arguments, they must be passed in the same order as in the function definition.

In c++ only the required values are passed in i.e. there is no simple way to include the parameter names to make it easier to keep the order correct.
****
An alternative approach to the same program - slightly more advanced - would be to pass in a reference to the input stream and then use the extraction operator. Passing by reference is covered in a later section.
````{code-cell} c++
:linenos:
:tags: [remove-output, skip-execution]
#include <iostream>
#include <string>
std::string myBirthdayGreeting(std::istream& inputs) {
    std::string name, age;
    inputs >> name >> age ;
    return "Happy Birthday " + name + "! \n You are " + age + " years old today.";
}
int main()
{
    std::cout << "Please type in your first name and age.. \n";
    std::cout << myBirthdayGreeting(std::cin) << '\n';
    return 0;
}
````
`````{code_example-end}
`````

## Default Arguments

Function parameters may be given default values. If a call to the function does not provide a value for a parameter, then the default value is used, otherwise the passed in value is given preference.

Default parameters must appear at the end of the parameter list, because once a parameter has a default value, all following parameters must also have default values i.e. if 5 parameters are required, you can stop passing in values at any point, but not restart - if the program passes 3 values to the function, they must be the first 3 and the last 2 must have default values, the compiler cannot deduce any other patterns of arguments.

If there is a separate function declaration - it must contain the default values. The default values are only required in a definition, when there is no separate declaration.

`````{code_example-start}
:label: exampleu4
:class: dropdown
:nonumber:
`````
Consider this code again.

````{code-block} c++
:linenos:
#include <iostream>
#include <string>
std::string myBirthdayGreeting(std::string firstName, std::string lastName, int age = 56) {
    return "Happy Birthday " + firstName + " " + lastName + "! \n You are " + std::to_string(age) + " years old today.";
}
int main()
{
    std::string firstName;
    std::string lastName;
    int age;
    std::cout << "Please type in your first name, last name, and age, space delimited.. \n";
    std::cin >> firstName >> lastName >> age;
    std::cout << myBirthdayGreeting(firstName, lastName) << '\n';
    return 0;
}
````
```{exercise}
:label: exerciseu3
:class: dropdown
:nonumber:
* Try putting `age` back into the function call - what happens?
* Try removing another argument from the function call - what happens?
```
`````{code_example-end}
`````

## Functions Calling Functions

Often functions call other functions. The function that makes the call, is sometimes called the 'caller' and the called function the 'callee'.

When one function calls another - control passes to the second function. When the second function returns, control passes back to the first function, which finishes its execution and returns control to the program.

Within any function body - the statements are executed sequentially. The location of the second function dictates when it will be called.

`````{code_example-start}
:label: exampleu5
:class: dropdown
:nonumber:
`````
Try the following code - it should work
````{code-cell} c++
:tags: [remove-output, skip-execution]
double sumOf(double a, double b) {
    return a + b;
}
double squareOfSumOf(double a, double b) {
    return sumOf(a, b) * sumOf(a, b);
}

int main() {
    double number1;
    double number2;
    std::cout << "Please type in two numbers..\n"; 
    std::cin >> number1 >> number2;
    std::cout << "The square of the sum of the number is " << squareOfSumOf(number1, number2);
    return 0;
}
````
````{exercise}
:label: exerciseu5
:class: dropdown
 Swap the order in which the two functions appear and then run the code again.
```{admonition} Explanation
:class: dropdown note
The `squareOfSumOf()`function cannot call the `sumOf()` function because it has not been declared before it is called.

Keeping the order straight is not sufficient - try the following code in the live editor above.
```
````
`````{code_example-end}
`````
`````{code_example-start}
:label: exampleu6
:class: dropdown
:nonumber:
`````
This code is an old classic describing the evolution of the mutually dependent fox and rabbit populations - an example of mutual recursion.

But it will not run - no matter which function is listed first because the functions call each other.
````{code-cell} c++
:tags: [remove-output, skip-execution]
#include <iostream>
#include <cassert>
int initialNumberOfRabbits;
int initialNumberOfFoxes;

int numberOfRabbits(int day) {
    if (day == 0) return initialNumberOfRabbits;
    return numberOfRabbits(day - 1) + 2 - numberOfFoxes(day - 1) / 5; 
}

int numberOfFoxes(int day) {
    if (day == 0) return initialNumberOfFoxes;
    return numberOfFoxes(day - 1) + numberOfRabbits(day - 1) / 10 - 1; 
}

int main() {
    int day;
    std::cout << "Please enter the initial numbers of rabbits, and foxes, and how many day to run the simulation for...";
    std::cin >> initialNumberOfRabbits >> initialNumberOfFoxes >> day;

    for (int i = 0; i <= day; ++i) {
        assert(numberOfRabbits(i) > 0 && numberOfFoxes(i) > 0);
        std::cout << "After day " << i << ", there are " << numberOfRabbits(i) << " rabbits and " << numberOfFoxes(i) << " foxes." << '\n';
    }

    return 0;
}
````
The solution is to use function declarations.

Add the following after the `#include` directives.

```{code-block} c++
int numberOfRabbits(int day);
int numberOfFoxes(int day);
```
`````{code_example-end}
`````

## Function Declarations and Definitions
Every entity, including functions, must be declared before they may be used. 

A {term}`function declaration` has the same form as the {term}`function-definition` up to the closing parenthesis, but then the declaration is terminated by a semicolon, not by the function body.

Function declarations dictate the attributes of a function, before it is defined, so function calls found by the compiler before the definition can be checked to ensure their argument-types and return-types match requirements.

A function definition requires the code body also - 'Declarations are not definitions'.
`````{code_example-start}
:label: exampleu7
:class: dropdown
:nonumber:
`````
```{code-block} c++
int myFunction(int); // is a declaration
//This is the corresponding definition.
int myFunction(int x) {
    std::cout << "Hello Class!";
    return x;
} 
```
`````{code_example-end}
`````
```{important}
An entity may be declared more than once - but a definition cannot be repeated, or the code will not compile.

A second declaration may not have a different type-pattern to the first for a given identifier.
```
If a function declaration is made before `main()` the function definition can be put after `main()`.

Most importantly declarations make it possible for functions to call each other, without worrying about the order they were defined in. Useful for organizing code and handling mutual function calls. 

Reason: Two functions may be called in each other's definition, but they cannot both be defined first. 

The solution is to declare both functions before defining either one. Since the declaration does not refer to the other function, because the function call happens in the body of the function, the problem disappears.

Having been apprised of the name and type of the function, the program can look for the definition. The declaration is just an interface; providing a description to which the definition must conform.
````{exercise-start}
:label: exerciseu4
:class: dropdown
:nonumber:
````
Try removing the parameter names from the declaration in a previous example.
````{exercise-end}
````
Function declarations and definitions may appear in any scope - for example, a function declared in a class is a member function of that class.

Parameter names are not formally necessary in the declaration, and in fact are ignored by the compiler - they are only required in the corresponding definition.
```{code-block} c++
int myFunction(int);
```
So this is an acceptable declaration.

However, the safest way to ensure your declaration and definition type patterns and name spellings match, is to cut & paste from one to other. It also helps the reader to understand a program.

If the parameter type in the declaration is not named in the definition, then it cannot be used in the function, and does not have to be passed in. 

````{note}
:class: margin dropdown
```{code-block} c++
extern int myFunction(int);
```
The `extern` keyword means the `myFunction()` declaration is not a definition - rarely used.
````

````{syntax-start} Functions: Declaration, Definition, and Call
:label: syntaxu1
:class: dropdown 
:nonumber:
````
Declaration Syntax: `returnType functionIdentifier ( parameter-list );`

Definition Syntax: `returnType functionIdentifier ( parameter-list ) {function-body}`

The parameter list is comma delimited, stating the type and the placeholder’s name, separated by a space, for each required input argument.

Call Syntax: `functionIdentifier (argument-list)`.

The argument list includes only the values, comma delimited - arguments must be supplied in the same order in the function call as in the parameter list in the function declaration.

***

The type of a function is given as `returnType (parameterTypes (comma delimited))`

The same function identifier can be used for two functions provided they are of different types - called function overloading.

```{code-block} c++
void myFunction();
int myFunction(int a, int b);
```
These are the declaration of two different functions. The program will identify which one is required by a function call based on the types of the arguments supplied.

````{syntax-end}
````
## Function Return Types

A function may return a value of any type (the type must be in scope). 

A function may not return:
* Another function
* A built-in array

Instead, a function can return pointers to either type.

````{admonition} Advanced - Trailing Return Types
:class: note dropdown
Instead of declaring the return type at the beginning of the function declaration/definition, it may be placed after the input parameters, called a 'trailing return type'.

The trailing return type is preceded by the `->` operator and are useful in function templates when the type of the return value depends on template parameters.
```{code-block} c++
template<typename Lhs, typename Rhs>
auto Add(const Lhs& lhs, const Rhs& rhs) -> decltype(lhs + rhs)
{
    return lhs + rhs;
}
int main() {
    auto variable1 = Add(3.14, 2.718); // variable1 is a double
    auto variable2 = Add(std::string{ "Hello, " }, std::string{ "World!" }); // variable2 is a std::string
    return 0;
}
```
Auto acts as placeholder when used in conjunction with a trailing return type (the leading-type keyword may not be missing) but it does not deduce the type in this case.
````
## Functions with multiple Returned Values

More than one value of more than one type can be returned from a function. 

There are several ways to program a function for multiple returns.

1. Using classes or structs - the values are encapsulated into a single object to be returned - the class or struct definition must be visible to the caller.
2. Using a {term}`tuple` - see `<tuple>` and `std::tuple`. Can be extended by also using a {term}`structured binding`.
3. Using pass be reference - defining parameters to use pass-by-reference so that the function can modify or initialize the values of objects that the caller provides.

## Pass-by-Reference and Pass-by-Constant-Reference

Calling a function by including variables in parentheses as arguments, to populate the functions parameter list, is called pass-by-value.

It is often better not to pass a value directly into a function. When a value is passed into a function, a new copy of that value is created in the memory - a local copy for the use of the function. Passing in a long array of large numbers, or a very large image, will use up both resources and time unnecessarily. 

The alternative approach is to only pass in a reference to the variable - called {term}`pass-by-reference`.

A {term}`reference` is the {term}`memory address` of a named object. 

Programs run faster when function parameters are {term}`passed by reference`.

````{syntax-start} Finding the Address of a Variable.
:label: syntaxu3
:class: dropdown
:nonumber:
````
We can view the memory address of any variable by prefixing an ampersand `&` to its identifier.
```{code-cell} c++
:tags: [remove-output, skip-execution]
#include <iostream>
int main() {
    int number;
    std::cout << &number;
    return 0;
}
```
````{syntax-end}
````
***
To declare that a parameter will by passed by reference, its type is declared with a postfixed ampersand `&`.

{term}`Passing by reference` poses one risk - the original object is not affected by a function call when {term}`passed by value`, because a local copy is generated - however, passing a reference to a variable gives the function direct access to that variable, which the function can then modify.

To prevent the function altering the named object that is referenced, the parameter must be listed as {term}`constant`, by adding the modifier `const` keyword before the type, space separated. This is called {term}`passing by constant reference`.
`````{code_example-start} Passing by Constant Reference
:label: exampleu8
:class: dropdown
:nonumber:
`````
````{code-cell} c++
:tags: [remove-output, skip-execution]
#include <iostream>
#inlcude <vector>
void myPrinter(const std::vector<double>& vectorLocal)
{
    std::cout << "{";
    for (int i = 0; i < vectorLocal.size(); ++i) {
        std::cout << vectorLocal[i];
        if (i != vectorLocal.size() - 1) std::cout << ",";
    }
    std::cout << "}\n";
}
int main() {
    std::vector<double> myVector = { 5.9,8,1.1,2.3,4.5,5.6 };
    myPrinter(myVector);
    return 0;
}
````
`````{code_example-end}
`````
When we do want to modify a variable that is used by a function, passing by reference is one of two ways for a function to modify a variable outside of the functions scope.
`````{code_example-start} Passing by Reference
:label: exampleu9
:class: dropdown
:nonumber:
`````
Pass by reference allows us to modify the original values.

Method 1 - Modifying a Local Variable – which is a reference to the external value.

````{code-cell} c++
:tags: [remove-output, skip-execution]
#include <iostream>
#include <vector>
void myPrinter(std::vector<double>& localVector)
{
    std::cout << "{";
    for (int i = 0; i < localVector.size(); ++i) {
        std::cout << localVector[i];
        if (i != localVector.size() - 1) std::cout << ",";
    }
    std::cout << "}\n";
}

void myPrinter2(std::vector<double>& localVector)
{
    std::cout << "{";
    for (int i = 0; i < localVector.size(); ++i) {
        localVector[i] = localVector[i] + 1;
        std::cout << localVector[i];
        if (i != localVector.size() - 1) std::cout << ",";
    }
    std::cout << "}\n";
}

int main() {
    std::vector<double> myVector = { 5.9,8,1.1,2.3,4.5,5.6 };
    myPrinter(myVector);
    myPrinter2(myVector);
    myPrinter(myVector);
    return 0;
}
````
Notice that the program modifies the local variable (called `localVector`) - because this is reference, not a copy, the variable referred to is being modified.
***

Otherwise, the original variable would only be accessible by a function if the variable is global, which means declaring it before the main function, otherwise the `myPrint()` functions could not alter it, only its copy. If a variable is global there is no real reason to pass it into a function.

Method 2 – Modifying a Global Variable

````{code-cell} c++
:tags: [remove-output, skip-execution]
#include <iostream>
#include <vector>
std::vector<double> myVector = { 5.9,8,1.1,2.3,4.5,5.6 };
void myPrinter(std::vector<double> vectorLocal)
{
    std::cout << "{";
    for (int i = 0; i < vectorLocal.size(); ++i) {
        std::cout << vectorLocal[i];
        if (i != vectorLocal.size() - 1) std::cout << ",";
    }
    std::cout << "}\n";
}

void myPrinter2(std::vector<double> vectorLocal)
{
    std::cout << "{";
    for (int i = 0; i < vectorLocal.size(); ++i) {
        myVector[i] = myVector[i] + 1;
        std::cout << vectorLocal[i];

        if (i != vectorLocal.size() - 1) std::cout << ",";
    }
    std::cout << "}\n";
}
int main() {
    myPrinter(myVector);
    myPrinter2(myVector);
    myPrinter(myVector);
    return 0;
}
````
`myPrinter()` prints out the elements of a vector.

`myPrinter2()` adds one to each element of the global vector but prints the terms of a local copy of the original vector.

It does not matter whether `myVector[i] = myVector[i] + 1;` is before or after the print statement, because it is not used for printing - usually the position of an increment statement does matter!

The second call to the `myPrinter()` prints the modified Global vector.

This is not helpful, because now you have a global variable.

`````{code_example-end}
`````

<!-- ## constexpr Functions -->

## Recursion
{term}`Recursion` is a programming technique where a function calls itself to solve a smaller instance of the same problem. 

Recursion is used when the problem can be broken down into a series of similar steps, with a small variation each step - such as required to calculate a factorial (see problem 4E) or to generate the Fibonacci sequence.

There are two main components to a recursive function:

* The termination condition: The condition under which the recursion stops. Without a base case, the recursion will continue indefinitely, causing a stack overflow, and breaking things... 

* The recursive step: The part of the function-body where the function calls itself using a smaller, or simpler argument based on the current parameter value.

## Function Signature
Every function has a signature, which consists of its name and its parameter-type-list. 

The signature also contains the enclosing namespace, unless it is a member function, when its signature contains the class of which the function is a member instead of the enclosing namespace. 

## Return Type Deduction
If the `decl-specifier-seq` of the function declaration contains the keyword `auto` the return type will be deduced by the compiler from the type of the variable used in the return statement. 

`````{code_example-start} Return Type Deduction
:label: exampleu10
:class: dropdown
:nonumber:
`````
Return type deduction:
````{code-block} c++
int x = 1;
auto f() { return x; }        // return type is int
const auto& f() { return x; } // return type is const int&
````

`````{code_example-end}
````` 
## Function Templates

A function template is similar to a class template; it generates concrete functions based on the template arguments. 

In many cases, the template can infer the type arguments and therefore it isn't necessary to explicitly specify them.
`````{code_example-start} Function Templates
:label: exampleu11
:class: dropdown
:nonumber:
`````
Example of using a Function Template.
````{code-block} c++
template<typename Lhs, typename Rhs>
auto addEntities(const Lhs& lhs, const Rhs& rhs)
{
    return lhs + rhs;
}
auto a = addEntities(3.13, 2.895); // a is a double
auto b = addEntities(string{ "Hello" }, string{ " World" }); // b is a std::string
````
`````{code_example-end} 
`````







