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

# Glossary

```{glossary}

Assignment
  Modification of the current value of an object using an assignment operator. Simplest case is using the simple assignment operator `=`; i.e. `LHS = RHS;`.

Assignment Operator
  `=`. The simple assignment operator. Used to assign a value to a variable, by {term}`literal-assignment`, {term}`copy-assignment`, or evaluation assignment, and for {term}`initialisation`. [compound-assignment operators](assigment operators).

Algorithm
  Algorithm: A sequence of steps or rules to solve a problem, often implemented using STL (Standard Template Library).

Arguments
  Values passed to a function or template. For templates the arguments are usually types.

ASCII
  American Standard Code for Information Interchange -  a character encoding standard that represents text in computers and other devices. It uses 7 bits to encode 128 characters.

Binary
  [Binary Code](https://en.wikipedia.org/wiki/Binary_code) is a sequence of 1's and 0's. Each one `1` or `0` is called a bit. A computer will read a specific number of bits (e.g. 64) at a time. Different sequences are different instructions to the CPU.   

Binary File
  File containing only binary code.

Camel Case
  [Camel Case](https://en.wikipedia.org/wiki/Camel_case) is one of the naming conventions used to improve the readability of code, whilst avoiding underscores. 

Case Sensitive
  Upper and lower case letters are interpreted as different symbols and different values. If a keyword is all lower case, you must use all lower case. The name `myFunction` is distinct from the name `myfunction`. Adopting a strict convention for naming, such as {term}`camel case` makes it easier to avoid this mistake.      

Casting to Type
  Conversion of one type of data safely to another. A variable cannot change its type, so type casting occurs on assignment to a variable of the correct type.

Char Type
  Type for representing individual characters. Character literals are enclosed by `' '`. Also an integer type - each character has an associate integer value.

Class
  A user-defined data type - a blueprint for creating objects, encapsulating data (attributes) and functions (methods).

Class Members
  Functions that belong to a class.

Code-Block
  Sequence of {term}`statements` enclosed by curly braces `{}`. Also called a {term}`compound statement`.

Comma Operator
  The comma operator allows multiple expressions to be evaluated sequentially, returning the value of the last expression. Used when a single expression is required but multiple operations need to be performed.

Comments
  Comments are text in a computer program that is only intended as a note to the programmer. Comments are useful as in-code documentation. Also used by programmers to hide sections of a programme from the compiler temporarily - useful during development.

Compiler
  The part of a C++ implementation that produces object code from a translation unit. More generally compilers transform source code into other types of code, but most often into native machine code that is interpreted directly by the {term}`CPU`.

Compiled Language
  Programming languages that are converted directly into machine code, creating programmes that can be executed by the computer processor. Alternative is an interpreted language, where the source code is interpreted a line at a time by the interpreter at run time – these programmes run inside larger programmes written in a compiled language including C, JAVA, and C++. 

Compound-Assignment
  Replaces the contents of the LHS object with the result of a binary operation between the previous value of LHS and the value of RHS e.g. `A = A + B`.

Compound Statement
  Sequence of {term}`statements` enclosed by curly braces `{}`. Also called a {term}`code-block`.

Compound Type
  A type that isn't a {term}`scalar` type. Compound types include array types, function types, class (or struct) types, union types, enumerations, references, and pointers to non-static class members.

Concatenation
  Joining of two strings together. Accomplished by the concatenation operator `+`or a built-in function.

Containers
  A Container is an object used to store other objects and to take care of the management of the memory used by the objects it contains.

Control Flow
  The sequential flow of ***control*** through the program - the programmes statement that is being executed at each instant is said to have *control* of the processor. The order in which individual statements, instructions, or function calls of an imperative program are executed, or evaluated. 

Control Flow Statements
  Selection and iteration statements: `if`, `switch`, `for`, `while`

Const
  A keyword that makes a variable or function parameter immutable.

Constant
  A variable or function parameter that is immutable - the value cannot be changed after it has been initialised. Set using the `const` or `constexpr` modifiers at declaration.

Construction
  Creating a new object – also called instantiation, when referring to a class.

Constructor
  A special member function that is automatically called when an object of its class is created. Constructors have the same name as their class and have no return type (not even `void`).

Constructors
  Special member functions that are automatically called when an object of its class is created. Constructors have the same name as their class and have no return type.

Core Language
  The fundamental components of the C++ language not found in the Standard Library. The libraries are constructed from the core language.

Copy-Assignment
  Replacement of the contents of one object with the contents of a second object; the second object is unaffected by the operation. Can also initialise an object. 

Copy Assignment
  Replacement of the contents of one object with the contents of a second object; the second object is unaffected by the operation. Can also initialise an object. 

Copy-initialisation
  Initialising an object from another object using the assignment operator.

CPU
  [Central Processing Unit](https://en.wikipedia.org/wiki/Central_processing_unit) is the electronic circuitry inside a computer that executes the machine code version of computer programmes.

Data Member
  Member of a class that can hold a value.

Declaration
  Declarations introduce names into a C++ program. Each kind of entity is declared differently.

Declarations
  Declarations introduce names into a C++ program. Each kind of entity is declared differently.

Declarator
  The part of a declaration that specifies the name of an entity - may include modifiers.

Declarator-operator
  Operators used to modify the type of a variable, function, or object being declared. e.g. `*` and `&` for pointers, and `[]` for arrays.

Declarator-operators
  Operators used to modify the type of a variable, function, or object being declared. e.g. `*` and `&` for pointers, and `[]` for arrays.

Default-Constructor
  Constructor that be called with not arguments - use to construct an object when no user initialisation is provided.

Default-Initialised
  Type of initialisation that occurs when there is no initialiser. Actual method of default-initialisation depends on the entity.

Default-Initialisation
  When an object of class type is constructed with no initialiser, a default constructer (if available) will initialise the object - often to empty - but possibly to some user-defined default value.

Default Value
  Value assigned when no other values are assigned. Often used to make an initialisation safe.

Definition
  Definitions are declarations that are sufficient to use the entity identified by the name.

Definitions
  Definitions are declarations that are sufficient to use the entity identified by the name.

Dereferencing
  Returning the value of the object associated with a pointer - accomplished by prefixing `*` to the pointer's identifier in an expression.

Directive
  Also known as preprocessor directives - instructions that are processed before compilation of the C++ code begins. Directives start with `#` and must lie at the top of the document. Used for including files, such as libraries, and defining {term}`macros`, and conditional compilation.

Directives
  Also known as preprocessor directives - instructions that are processed before compilation of the C++ code begins. Directives start with `#` and must lie at the top of the document. Used for including files (`#include`), such as libraries, and defining {term}`macros`(`#define`), and conditional compilation (`#if`, `#ifdef`, `#ifndef`).

Dynamic Memory
  Memory that is allocated during runtime using `new`; and deallocated using `delete`. A computer's RAM must be large enough to accomodate all the objects created during run-time.

Embedded Programs
  Programs written on computers and then transferred onto an embedded microprocessor in a device to control its function - also called firmware. The embedded program is an integrated part of the device and not directly accessible by the user. 

Empty Statement
  A statement that consists of only a semicolon `;`. It does nothing and is often referred to as a {term}`null statement`. Empty statements are used where the syntax requires a statement but the contents are optionally not required, to provide an empty body to a for or while loop, or to carry a label in the end of a compound statement.

Entity
  The entities of a C++ program are values, objects, references, functions, enumerators, types, class members, templates, template specializations, and namespaces. ECS consists of three main parts:

Entities
  The entities of a C++ program are values, objects, references, functions, enumerators, types, class members, templates, template specializations, and namespaces. ECS consists of three main parts:

Enumeration
  User-defined type consisting of a set of named values.

Enumerations
  User-defined type consisting of a set of named values.

Enumerator
  A name identifying a value of an enumeration. 

Escape Sequence
  Used in programming languages to represent special characters within a string or character literal. They are identified by the prefix backslash `\`. Examples are `\n`, `\t`, and `\\` to represent 'newline', 'tab' - and to identify that a backslash is just a back slash literal.

Escape Sequences
  Used in programming languages to represent special characters within a string or character literal. They are identified by the prefix backslash `\`. Examples are `\n`, `\t`, and `\\` to represent 'newline', 'tab' - and to identify that a backslash is just a back slash literal.

Exception
  The `std::exception` class provides methods for dealing with errors throw `throw` expressions. Includes `std::bad_alloc` thrown when memory allocation fails, `std::bad_cast` thrown when a dynamic_cast fails during runtime, `std::bad_typeid` thrown when attempting to use typeid on a null pointer to a polymorphic type, `std::bad_exception` used to handle unexpected exceptions in a program, `std::logic_error` represents errors that can be detected before runtime, `std::invalid_argument` thrown when an invalid argument is passed to a function, `std::domain_error` thrown when a mathematically invalid domain is used, `std::length_error` thrown when an operation exceeds the maximum allowable size, `std::out_of_range`thrown when an argument is outside the expected range.

Executable File
  `.exe` or other file types that contain machine code computer programmes that run directly on the computers processor.

Expression
  A combination of literals or variables with operators that produce a value or may designate objects or functions. Simplest example would be an arithmetic statement.

Expression-assignment
  Replaces the LHS object with the result of the evaluation of the expression stated on RHS.

Expression Statement
  An expression followed by a semicolon.

Expression Statements
  An expression followed by a semicolon.

Extraction
  Transfer of data out of a stream into a variable.

Extraction Operator
  `>>`

Falling Through
  When a program reaches the end of code block and just continues onto the next statements. Will be an error for a function if a return is expected but permitted for `void`.

Floating-Point Numbers
  Numbers with a decimal point. Represented in code by the addition of `.0` to whole numbers.

Floating-Point Number Types
  Float, Double, and Long Double. Floating-point literals are interpreted as `double` type unless the letter f or l is added as a suffix.

Flow Control
  Control of the sequential flow of execution.

For-Statement
  Iteration statement - controls the repeated execution of code block while a condition is true. May use a loop variable and can run a final statement that may increment the loop variable.

For-loop
  Common name for the for-statement.

Free store
  {term}`memory` allocated by `new`; also called {term}`dynamic memory`. Dynamic memory is an amount of memory of indeterminate size used up during execution of a program as new objects are created. Often standard library facilities, such as `vector`, can be used to avoid explicit use of free store.

Function
  A named sequence of statements that can be invoked/called by a program, optionally using arguments supplied by the function call, to optional return a value to the program. The type of the function includes the number and types of argument and the type of the value returned. Functions are useful because they are reusable, making code more efficient to write and execute.

Functions
  A named sequence of statements that can be invoked/called by a program, optionally using arguments supplied by the function call, to optional return a value to the program. The type of the function includes the number and types of argument and the type of the value returned. Functions are useful because they are reusable, making code more efficient to write and execute.

Function-Argument
  The values passed into a function. The function declaration specifies the number and type of the required arguments, which must match when the function is called.

Function-Arguments
  The values passed into a function. The function declaration specifies the number and type of the required arguments, which must match when the function is called.

Function-Body
  Sequence of statement to be executed when the function is called.

Function-Call
  A function is 'called' or 'invoked' by a statement of the function name followed by the values to be passed to the function in parenthesis. Any value returned by the function can be used by {term}`copy-assignment`.

Function Call
  A function is 'called' or 'invoked' by a statement of the function name followed by the values to be passed to the function in parenthesis. Any value returned by the function can be used by {term}`copy-assignment`.

Function Declaration
  Statement of the name, types of any arguments and the return type of a function.

Function-Declaration
  Statement of the name, types of any arguments and the return type of a function.

Function-Definition
  Function declaration that include the {term}`function-body`.

Function-Identifier
  Identifier of a function - may be user-defined.

Function-Parameter
  Placeholders in the function declaration for the arguments that will be passed in. The parameter is the local variable name within the function associated with its argument value.

Functional Programming
  Programming paradigm that constructed programs using functions. A declarative model of programming emphasizing "what to do" rather than "how to do it."

Function Prototype
  Function Declaration

Function-type
  Combination of the return type and arguments' types. e.g. `int(double, string, int)`.

Fundamental Types
  Types provide by the core language.

Global Scope
  Variables declared outside of all functions or classes have global scope. Global variables are accessible throughout the program, unless shadowed by a local variable with the same name. Global variables are best avoided unless necessary because they may result in unintended consequences in execution.

Header Files
  Header files in C++ are essential for organizing and managing code in large projects. They contain declarations of functions, classes, variables, and other identifiers, that inform the compiler about the existence and type of these elements without providing their actual implementation. This separation allows multiple source files to share the same declarations, ensuring consistency and reducing errors, and include them wherever needed, reducing redundancy and improving code maintainability.

Heap
  (the-) is a region of memory used for dynamic memory allocation. Unlike the stack, the heap is managed manually by the programmer or automatically by a garbage collector.

Identifier
  The {term}`name` given to any {term}`entity` that may have a used defined name.

Indirection
  Returning the value of the object associated with a pointer - accomplished by prefixing `*` to the pointer's identifier in an expression.

Immutable
  Fixed, constant, not permitted to change after initialisation.

Infix Operator
  Operator that sits between two variables, denoting an operation using both. As opposed to unary, prefix and postfix, operators that act on one variable positioned before or after it.

Insertion Operator
  `>>` - used with input streams to assign data to variables.

Instruction Set Architecture
  Specifies the format of machine code used by the programmable interface of a {term}`CPU`. The 'instructions' are patterns of bits, each of which is unique to a specific task.   

int
  Keyword for the Integer type.

Initialisation
  Setting the initial value of an object. Definition results when initialisation is added to a declaration. Initialization is different from assignment because the object had no previous value and initialization is done by {term}`constructors`.

Initialiser
  The syntax used to initialise a new variable.

initialiser List
  A comma-delimited list of expressions enclosed in curly braces; used to initialize a struct or an array.

Integer type
  Type for integer values (whole numbers - all both positive and negative and zero). Maybe preceded by one or two modifiers - `signed`, `unsigned`, `short`, `long, `long long`. The modifiers may be used on their own, and int is implied; but `signed` and `unsigned` may also precede `char.

Iteration
  Iteration

Iteration Statement
  Iterations statements include the `for`-statement, the `while`-statement and the `do`-statement; used to repeat the execution of a block of code until a condition is met or changes.

Iteration Statements
  Iterations statements include the `for`-statement, the `while`-statement and the `do`-statement; used to repeat the execution of a block of code until a condition is met or changes.

Keyword
  An identifier used by the C++ language standard. Keywords are reserved; they may not be declared as an identifier by a programmer. [Keywords in the C++ language](https://en.cppreference.com/w/cpp/keywords.html).

Keywords
  An identifier used by the C++ language standard. Keywords are reserved; they may not be declared as an identifier by a programmer. [Keywords in the C++ language](https://en.cppreference.com/w/cpp/keywords.html).

Linkage
  The process of merging code from separately compiled translation units into a program or part of a program. 

Linker
  The part of the C++ implementation that merges the code generated from separately compiled translation units into a program. or part of a program

List-Initialisation
  Initialization using `{}`; e.g. int myInt {initial value or expression to produce the initial value}

Literal
  A fixed value written directly into a program. e.g. the number '1', generally found on the RHS of assignment operations. The notation used for Boolean types, character types, string types, numeric types etc., e.g. the work `true` is a Boolean literal when used appropriately.

Literals
  Literals are the tokens of a C++ program that represent constant values embedded in the source code.

Literal-assignment
  Uses a literal for the RHS in assigment expression.

Local Variables
  Variable declared within the current scope.

Loop-Variable
  Variable declared within the for-statement argument. May be used as a local variable and cannot be shadowed.

lvalue
  An expression whose evaluation determines the identity of an object or function. The name of the object or function - basically, the left hand side of an assignment operation or the name before the {}.

Machine Code
  Computer programs encoded and structured to run directly on a computer’s hardware. The different {term}`CPU` architectures, x86, ARM, Apple Silicon, have different programmable interfaces and require different machine code specified by an {term}`instruction set architecture`. 

Macro
  A macro is a fragment of code which has been given a name. Whenever the name is used, it is replaced by the contents of the macro. There are two kinds of macros. They differ mostly in what they look like when they are used. Object-like macros resemble data objects when used, function-like macros resemble function calls.

Macros
  Macros are preprocessor directives used for code substitution. A macro is a fragment of code which has been given a name. Whenever the name is used, it is replaced by the contents of the macro. There are two kinds of macros. They differ mostly in what they look like when they are used. Object-like macros resemble data objects when used, function-like macros resemble function calls.

Member
  Types, variables and constants, and functions declared within the scope of, and therefore belonging to, a class.

Memory Address
  A computer memory address is a unique identifier assigned to a specific location in a computer's memory, allowing the CPU and other hardware components to access and manipulate stored data efficiently. Memory addresses are typically represented as an array of hexadecimal values of a fixed length.

Memory
  Computer memory stores information, such as data and programs, for immediate use in the computer. The term memory is often synonymous with RAM (Random Access Memory), or primary storage.

Memory Management
  Methods of allocating and freeing memory. In C++ memory is either static, allocated on the stack, or allocated on the free store. When people talk about memory management, they usually think of free store or even specifically about garbage collection. Memory can often be effectively managed through standard library containers, such as vector or string, or through general resource management techniques.

Modulo
  [Modulo](https://en.wikipedia.org/wiki/Modulo) operation that returns the remainder after dividing the LHS number by the RHS number. In C++ this operation only applies to `int` type and is truncating, meaning the quotient, whether positive or negative, is rounded towards before the remainder is determined. Other languages used 'floored' or 'rounded', and for every new language you will need to determine which is applied, because different results are produced.

Modulo Operator
  `%` Infix operator for modulo operations that returns the remainder after dividing the LHS number by the RHS number. In C++ this operation only applies to `int` type and is truncating, meaning the quotient, whether positive or negative, is rounded towards before the remainder is determined. Other languages used 'floored' or 'rounded', and for every new language you will need to determine which is applied, because different results are produced. 

Move-assignment
  Replaces the contents of the LHS object a with the contents of RHS object, avoiding copying if possible (RHS may be modified). For non-class types, copy and move assignment are indistinguishable and are referred to as direct assignment.

Name
  An identifier. (A minority of names are not identifiers - advanced). 

Named Object
  A variable.

Namespace
  Entities declared inside a namespace block are placed in a namespace scope, which prevents them from being mistaken for identically-named entities in other scopes. Entities declared outside a namespace are in the global namespace. Users may define namespaces. 

Namespaces
  Namespaces are used to organise programs in more manageable sections by providing a method for preventing name conflicts in large projects.  

Narrowing
  A narrowing (conversion) occurs when a value is converted from one type to another and the new type is not big enough to represent all possible values of the original type; leading to data loss or undefined behaviours.

New
  Keyword in C++ used to dynamically allocate memory on the heap for objects or variables during runtime. `new` allocates the required amount of memory on the heap; and calls a constructor (if there is one) to initialise the newly allocated object/memory.

Numeric Data Type
  The data types for numeric values - each represents a different type of number to different levels of precision. Includes `int`, `float`, `double`. Some data types require additional specifiers, see the [C++ Reference – Data Types](https://en.cppreference.com/w/cpp/language/types.html)

Null
  The integer constant zero.

Null Character
  The null character is a control character represented by escape sequence '\0' that has an integer value of 0. May be used to signify the end of a string in C-style strings (character arrays). '\0' is a character literal with a value of 0. Can also represent the `nullptr` for comparison expressions. The null character is stored as a byte (8 bits) with all bits set to zero.

Null Statement
  The {term}`Empty statement`: valid in C++ and can be used in certain scenarios where a statement is syntactically required but no action is needed.

Object
  - A contiguous region of memory holding a value of some type. Objects can be allocated in {term}`static memory`, on the {term}`stack`, on the {term}`free store`. 
  - A named or unnamed variable of some type; an object of a type with a constructor is not considered an object before the constructor has completed and is no longer considered an object once a destructor has started executing for it. 
  - An instance of a class containing data (variable and constants) and methods (functions). 

Objects
  - A contiguous region of memory holding a value of some type. Objects can be allocated in {term}`static memory`, on the {term}`stack`, on the {term}`free store`. 
  - A named or unnamed variable of some type; an object of a type with a constructor is not considered an object before the constructor has completed and is no longer considered an object once a destructor has started executing for it. 
  - An instance of a class containing data (variable and constants) and methods (functions). 

Object file
  The file produced by a compiler - the result of compiling a source file.

Object files
  The file produced by a compiler - the result of compiling a source file

Object-oriented programming
  Programming paradigm that encapsulates related data and functions into objects. An imperative model, focusing on "how to do" tasks step-by-step.

Operator
  Symbol used to denote an arithmetic, or logical operaton/computation on one or more values or variables, and to instruct the program to perform that operation. Used as part of an expression.

Operators
  Symbols used to denote an arithmetic, or logical operaton/computation on one or more values or variables, and to instruct the program to perform that operation. Used as part of an expression. 

Operands
  Literals or variables operated on by operators in an expression.

Overloading
  Adding multiple definitions to a single operator (or function name). The different definitions apply to different types. For functions the type pattern of its parameters must be unique.

Pass-by-Reference
  Passing a reference to a variable as the argument of a function call. Allows the modification of that variable by the function.

Pass-by-Value
  Passing a variable name into a function, which results in a local copy of the variable being created for the used of the function, preserving the original.

Passing by Constant Reference
  Passing by reference by declaring the function parameter `const` to prevent modification of the variable by the functions execution.

Passed by reference
  Passing a reference to a variable as the argument of a function call. Allows the modification of that variable by the function.

Passed by Value
  Passing a variable name into a function, which results in a local copy of the variable being created for the used of the function, preserving the original.

Passing by Reference
  If a function parameter type is declared to be a reference to a type, then a reference to a variable can be passed instead of the variable itself. This saves the memory overhead needed to create the local copy of the passed in value, and allows the function to operate on the original value instead. Also called call-by-reference, as opposed to call-by-value when the actual value is passed in.

POD Type 
  POD = "Plain Old Data". A class or a struct that do not include any constructor, destructor or virtual functions - they only have int, char, double, bool, etc. as data members.

Pointer
  A named object (variable) that stores the memory address of another object.

Print Debugging
  Using strategically position print statements to follow the control flow of a programme’s execution. The print statements may just include an index to identify which statement produced it, or more detailed error/exception outputs.

Programming Paradigm
  Model of how to structure and implement computer programs.

Programming Paradigms
  Different approaches to writing computer programs. The most common paradigms are: Procedural, Functional, and Object-oriented programming.

Reference
  The memory address of an object.

References
  The memory address of an object.

Reserved Characters
  Some characters cannot be freely used because they have special meaning in the syntax. Some may be overloaded. Examples: `#`, `\`, arithmetic operators, comparison operators, punctuation symbols. 

Resource files
  Non code files, such as image files, required by the program.

Return-statement
  Statement that causes a function call to end, returning control to the program that made the call, possibly sending a value back to the caller.

rvalue
  The expression appearing on the right hand side of an assignment operator or in the {} for list initialisaiton. rvalues are not always on the LHS, but if the same expression could be used on LHS, its probably an rvalue.

Scalar
  A type that holds a single value of a defined range. Scalars include arithmetic types (integral or floating-point values), enumeration type members, pointer types, pointer-to-member types, and std::nullptr_t. Fundamental types are typically scalar types.

Scope
  The context in which a variable, function, or class is defined. May be global, namespace, class, function, block/local. 

Scope Resolution Operator
  `::` -  links an entity to its container; like a folder reference. The container defines the scope of the entity.

Shadowing
  For variables with the same name, the inner most scope is dominant, i.e. a local variable is used in preference to a global variable with the same name

Stack
  - {term}`memory` used to hold {term}`local variables` for a {term}`function`
  - standard library first-in-last-out sequence.

Standard Library
  Collection of facilities (classes and functions) available for inclusion into C++ programs – separated into namespaces.

Standard Library Facilities
  The individual components of the Standard Library, made available using the `#include <>` directive.

Standard Library Facility
  The individual components of the Standard Library, made available using the `#include <>` directive.

Statements
  Statements are fragments of the C++ program that are executed in sequence, or that are used to control the execution flow. The body of any function is a sequence of statements, which may include declaration statements, {term}`expression statements`, and return statements. Other statements include if-statements, while-statements, do-statements, and switch-statements. Simple statements end with a semicolon, but iteration and selection statements are terminated by `}` ended their code block.

Static
  Keyword
  - Used to declare a class member static; specifies that member functions and variables belong to the class rather than an instance of the class (an object). Also means there is no pointer to a member function.
  - Specifies a local variable should be allocated to static memory

Static Duration
  Lifetime of the programme's execution - duration of static variables - all global variables.

Static Memory
  Memory allocated by the {term}`linker`

String
  Sequence of characters collected into a single variable. `string` is one of the `container` types in C++.

String Data Type
  Data consisting of a sequence of characters, bracketed by `""`.

Structured Binding
  Structured bindings allow you to decompose structured objects like tuples, arrays, or maps into individual variables for cleaner and more readable code.

Switch Statement
  A selection control structure. Executes one of several possible code-blocks by checking an expression against a list of possible cases. Hierarchical, `if-else-if` ladder, lower cases are only checked if higher cases do not match. Default code-block optionally executed if no cases match.

Syntax
  The set of grammatical rules specifying how the text of a program must be composed. For example, specifying the form of a declaration or the form of a for-statement.

Template
  A blueprint for generic and reusable code for functions and classes

Templates
  A blueprint for generic and reusable code for functions and classes

Terminator
  `;` or {} - which close statements.

Translation unit
  Part of a program that can be separately compiled. Individual source, or header, files.

Translation units
  Part of a program that can be separately compiled. Individual source, or header, files.

Tuple
  A container that allows grouping of multiple values of potentially different types into a single object.

Type
 A type defines the proper use of a name or an expression.

Types
  A type defines the proper use of a name or an expression.

Type Casting
  Assigning a value of a different type to an object of a new type. Casting/conversion can be implicit or explicit.

Type Checking
  The compiler checks every expression to ensure all objects are used correctly in accordance with their type. 

Type Conversion
  Alternative name for type casting. 

Type Safety
  The property that an object can be accessed only according to its definition. C++ is highly type safe, but a programmer can still violate type safety by explicit casting, by using an uninitialized variable, by using a pointer that doesn't point to an object, by accessing beyond the end of an array, and by misusing a union. Type safety must be preserved for a program to be correct and maintainable.

Type System
  The set of rules prescribing how each object may be used according to their types.

Unary
  Describing an operator that operates on a single operand, such as the negation operator. Unary operators are further classified as prefix and postfix. The alternative is an {term}`infix operator`.

Variable
  A variable is an object or a reference that is not a non-static data member, that is introduced by a declaration - a named object in a scope.

Variables
  A variable is an object or a reference that is not a non-static data member, that is introduced by a declaration - a named object in a scope.

Value
  The literal stored in a variable. Other usages, see {term}`Value Categories`. 

Values
  Literals stored in a variable. Other usages, see {term}`Value Categories`. 

Value Categories
  Each C++ expression (an operator with its operands, a literal, a variable name, etc.) is characterized by two independent properties: a type and a [value category](https://en.cppreference.com/w/cpp/language/value_category.html). The include lvalues and rvalues.

Void
  Used to declare a function returns nothing. Cannot be used to declare a variable as having no type. Used to declare a pointer is of universal type i.e. void* pointer to a name thats type is not defined yet.def

Void*
  A pointer's type - if void*, the pointer can point to any variable that's not declared with the const or volatile keyword. A void* pointer can't be dereferenced unless it's cast to another type. A void* pointer can be converted into any other type of data pointer. Avoid pointer can point to a free function (a function that's not a member of a class), or to a static member function, but not to a non-static member function.
```

