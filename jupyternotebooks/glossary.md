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
  DEf

Algorithm
  Algorithm: A sequence of steps or rules to solve a problem, often implemented using STL (Standard Template Library).

Arguments
  Values passed to a function or template. For templates the arguments are usually types.

ASCII
  American Standard Code for Information Interchange -  a character encoding standard that represents text in computers and other devices. It uses 7 bits to encode 128 characters.

Binary
  [Binary Code](https://en.wikipedia.org/wiki/Binary_code) is a sequence of 1's and 0's. Each one `1` or `0` is called a bit. A computer will read a specific number of bits (e.g. 64) at a time. Differnt sequences are differnt instructions to the CPU.   

Binary File
  File containing only binary code.

Camel Case
  [Camel Case](https://en.wikipedia.org/wiki/Camel_case) is one of the naming conventions used to improve the readability of code, whilst avoiding underscores. 

Case Sensitive
  Upper and lower case letters are iterprete as different symbols. If a keyword is all lower case, you must use all lower case. The name `myFunction` is distinct from the name `myfunction`. Adopting a strict convention for naming, such as {term}`camel case` makes it easier to avoid this mistake.      

Casting to Type
  def

Char Type
  Type for representing individual characters. Character literals are enclosed by `' '`. Also an integer type - each character has an associate integer value.

Class
  more basic    ;A blueprint for creating objects, encapsulating data (attributes) and functions (methods).

Code Block
  Sequence of {term}`statements` inclosed by curly braces `{}`. Also called a {term}`compound statement`.

Comments
  Comments are text in a computer program that is only intended as a note to the progammer. Comments are useful as in-code documentation, and also allow part of program to be hidden from the compiler temporarily during development.

Compiler
  The part of a C++ implementation that produces object code from a translation unit. More generally compilers transform source code into other types of code, but most often into native machine code that is interpreted directly by the {term}`CPU`.

Compiled Language
  def

Compound Statement
  Sequence of {term}`statements` inclosed by curly braces `{}`. Also called a {term}`code block`.

Concatenation
  Joining of two strings together.

Const
  Const: A keyword that makes a variable or function parameter immutable.

Constant
  A variable or function parameter that is immutable - the value cannot be changed after it has been initialised.

Core Language
  def

Copy Assignment
  Replacement of the contents of one object with the contents of a second object; the second object is unaffected by the operation. Can also intitialise an object.

CPU
  [Central Processing Unit](https://en.wikipedia.org/wiki/Central_processing_unit) is the electronic circuitry inside a computer that executes the machine code version of computer programmes.

Data Member
  Member of a class that can hold a value.

Declaration
  Declarations introduce names into a C++ program. Each kind of entity is declared differently.

Declarations
  Declarations introduce names into a C++ program. Each kind of entity is declared differently.

Definition
  Definitions are declarations that are sufficient to use the entity identified by the name.

Definitions
  Definitions are declarations that are sufficient to use the entity identified by the name.

Dynamic Memory
  Memory that is allocated during runtime using `new`; and deallocated using `delete`.

Embedded Programs
  Programs written on computers and then transferred onto an embedded microprocessor in a device to control its function - also called firmware. The embedded program is an integrated part of the device and not directly accessible by the user. 

Entity
  The entities of a C++ program are values, objects, references, functions, enumerators, types, class members, templates, template specializations, and namespaces. ECS consists of three main parts:

Entities
  The entities of a C++ program are values, objects, references, functions, enumerators, types, class members, templates, template specializations, and namespaces. ECS consists of three main parts:

Escape Sequences
  Used in programming languages to represent special characters within a string or character literal. They are identified by the prefix backslash `\`. Examples are `\n`, `\t`, and `\\` to represent 'newline', 'tab' - and to identify that a backslash is just a back slash literal.

Exception
  def

Executable File
  def

Expression
  A series of operators and names the produce a value, or may designate objects or functions. Simplest example would be an arithmetic statement.

Expression Statements
  An expression followed by a semicolon.

Falling Through
  When a program reaches the end of code block and just continues onto the next statements. Will be an error for a function if a return is expected, but permitted for `void`.

Floating-Point Numbers
  Numbers with a decimal point. Represented in code by the addition of `.0` to whole numbers.

Floating-Point Number Types
  Float, Double, and Long Double. Floatig point literals are interpreted as `double` type unless the letter f or l is added as a suffix.

Free store
  {term}`memory` allocated by `new`; also called dynamic memory. Often standard library facilities, such as `vector`, can be used to avoid explicit use of free store.

Function
  A named sequence of statements that can be invoked/called by a program, optionally using arguments supplied by the function call, to optionall return a value to the program. The type of the function includes the number and types of argument and the type of the value returned. Functions are useful because they are reusable, making code more efficient to write and execute.

Function Argument
  The values passed into a function. The function declaration specifies the number and type of the required arguments, which must match when the function is called.

Function Arguments
  The values passed into a function. The function declaration specifies the number and type of the required arguments, which must match when the function is called.

Function Body
  Sequence of statement to be executed when the function is called.

Function Call
  A function is 'called' or 'invoked' by a statement of the function name followed by the values to be passed to the function in parenthesis. Any value returned by the function can be used by {term}`copy assignment`.

Function Declaration
  Statement of the name, types of any arguments and the return type of a function.

Function Definition
  Function declarartion that include the {term}`function body`.

Function Parameter
  Placeholders in the function declaration for the arguments that will be passed in. The parameter is the local variable name within the function associated with its argument value.

Functional Programming
  Programming paradigm that constructed programs using functions. A declarative model of programming emphasizing "what to do" rather than "how to do it."

Global Scope
  Variables declared outside of all functions or classes have global scope. Global variables are accessible throughout the program, unless shadowed by a local variable with the same name. Global variables are best avoided unless necessary because they may result in unintended consequences in execution.

Header Files
  DEF

Heap
  def

Identifier
  The {term}`name` given to any {term}`entity` that may have a used defined name.

Infix Operator
  Operator that sits between two variables, denoting an operation using both. As opposed to unary, prefix and postfix operators that act on one variable position before or after it.

Instruction Set Architecture
  Specifies the format of machine code used by the programmable interface of a {term}`CPU`. The 'instuctions' are patterns of bits, each of which is unique to a specific task.   

int
  Key word for the Integer type.

Integer type
  Type for integer values (whole numbers - all both positive and negative and zero). Maybe preceded by one or two modifiers - `signed`, `unsigned`, `short`, `long, `long long`. The modifiers may be used on their own, and int is implied; but `signed` and `unsigned` may also precede `char.

Iteration
  Iteration

Iteration Statement
  terations statements include the `for`-statement, the `while`-statement and the `do`-statement; used to repeat the execution of a block of code until a condition is met or changes.

Iteration Statements
  Iterations statements include the `for`-statement, the `while`-statement and the `do`-statement; used to repeat the execution of a block of code until a condition is met or changes.

Keyword
  An identifier used by the C++ language standard. Keywords are reserved; they may not be declared as an identifier by a programmer. [Keywords in the C++ language](https://en.cppreference.com/w/cpp/keywords.html).

Linkage
  The process of merging code from separately compiled translation units into a program or part of a program. 

Linker
  The part of the C++ implementation that merges the code generated from separately compiled translation units into a program. or part of a program

Literal
  A fixed value written directly into a program. e.g. the number '1', generally found on the RHS of assignment operations. The notation used for boolean types, character types, string types, numeric types etc., e.g. the work `true` is a boolean literal when used appropriately.

Literals
  Literals are the tokens of a C++ program that represent constant values embedded in the source code.

Local Variables
  Definition

Machine Code
  Computer programs encoded and structured to run directly on a computers hardware. The different {term}`CPU` architectures, x86, ARM, Apple Silicon, have differnt programmable interfaces and require different machine code specified by an {term}`instruction set architecture`. 

Member
  Types, variables and constants, and functions declared within the scope of, and therefore belonging to, a class.

Memory Address
  A reference to a specific location in the computer's memory. 

Memory
  Definition needed

Memory Management
  Methods of allocating and freeing memory. In C++ memory is either static, allocated on the stack, or allocated on the free store. When people talk about memory management, they usually think of free store or even specifically about garbage collection. Memory can often be effectively managed through standard library containers, such as vector or string, or through general resource management techniques.

Modulo
  [Modulo](https://en.wikipedia.org/wiki/Modulo) operation returns the remainder after dividing the lhs number by the rhs number. In C++ this operation only applies to `int` type and is truncating, meaning the quotient, whether positive or negative, is rounded towards before the remainder is determine. Other langugages used 'floored' or 'rounded', and for every new language you will need to determine which is applied, because different results are produced.

Modulo Operator
  `%` Infix operator for modulo operationsthat  returns the remainder after dividing the lhs number by the rhs number. In C++ this operation only applies to `int` type and is truncating, meaning the quotient, whether positive or negative, is rounded towards before the remainder is determine. Other langugages used 'floored' or 'rounded', and for every new language you will need to determine which is applied, because different results are produced. 

Name
  An identifier. (A minority of names are not identifiers - advanced). 

Numeric Data Type
  The data types for numeric values - each represents a different type of number to different levels of precision. Includes `int`, `float`, `double`. Some data types require additional specficiers, see the [C++ Reference - Data Types](https://en.cppreference.com/w/cpp/language/types.html)

Null
  The integer constant zero.

Null Character
  The null character is a control character represented by escape sequence '\0' that has an integer value of 0. May be used to signify the end of a string in C-style strings (character arrays). '\0' is a character literal with a value of 0. Can also reprsent the `nullptr` for comparison expressions. The null character is stored as a byte (8 bits) with all bits set to zero.

Objects
  - A contiguous region of memory holding a value of some type. Objects can be allocated in {term}`static memory`, on the {term}`stack`, on on the {term}`free store`. 
  - A named or unnamed variable of some type; an object of a type with a constructor is not considered an object before the constructor has completed and is no longer considered an object once a destructor has started executing for it. Objects can be allocated in static memory, on the stack, on on the free store.
  - An instance of a class containing data (variable and constants) and methods (functions). 

Object file
  The file produced by a compiler - the result of compiling a source file.

Object files
  The file produced by a compiler - the result of compiling a source file

Object-oriented programming
  Programming paradigm that encapsulates related data and functions into objects. An imperative model, focusing on "how to do" tasks step-by-step.

Overloading
  Additing multiple defintions to the operators and functions of the same name but different parameters - each instance acts on objects of different type.

Passing by Constant Reference
  def

Passing by Reference
  If a function parameter type is declared to be a reference to a type, then a reference to a variable can be passed instead of the variable itself. This saves the memory overhead needed to create the local copy of the passed in value, and allows the function to operate on the orginal value instead. Also called call-by-reference, as opposed to call-by-value when the actual value is passed in.

Programming Paradigm
  Model of how to structure and implement computer programs.

Programming Paradigms
  Different approaches to writing computer programs. Most common paradigms are: Procedural, Functional, and Object-oriented programming.

Reference
  def

Resource files
  Non code files, such as image files, required by the program.

Scope
  def

Scope Resolution Operator
  `::` -  links an entity to its container; like a folder reference.

Shadowing
  For variables with the same name, the inner most scope is dominant, i.e. a local variable is used in preference to a global variable with the same name

Stack
  - {term}`memory` used to hold {term}`local variables` for a {term}`function`
  - standard library first-in-last-out sequence.

Standard Library
  Collecton of facilities available for inclusion into C++ programs

Standard Library Facilities
  The individual components of the Standard Library, made available using the `#include <>` syntax.

Standard Library Facility
  The individual components of the Standard Library, made available using the `#include <>` syntax.

Statements
  Statements are fragments of the C++ program that are executed in sequence, or that are used to control the execution flow. The body of any function is a sequence of statements, which may include declaration statements, {term}`expression statements`, and return statemends. Other statements include if-statements, while-statements, do-statements, and switch-statements. Simple statements end with a semicolon, but iteration and selection statements are terminated by `}` ended their code block.

Static
  Keyword
  - Used to declare a class member static; the member functions and pes a variable or function belong to the class rather than an instance of the class (an object). Also means there is no pointer to a member function.
  - Specifies a local variable should be allocated to static memory

String
  def

String Data Type
  Data consisting of a sequence of characters, bracketed by `""`.

Static Memory
  Memory allocated by the {term}`linker`

Switch Statement
  Def

Syntax
  The set of gramatical rules specifying how the text of a program must be composed. For example, specifying the form of a declaration or the form of a for-statement.

Template
  A blueprint for generic and reusable code for functions and classes

Translation unit
  Part of a program that can be separately compiled. Individual source, or header, files.

Translation units
  Part of a program that can be separately compiled. Individual source, or header, files.

Type
 A type defines the proper use of a name or an expression.

Type Casting
  Assigning a value of a different type to an object of a new type. Casting/conversion can be implicit or explicit.

Type Checking
  The compiler checks every expression to ensure all objects are used correctly in accodance with their type. 

Type Conversion
  Alternative name for type casting. 

Type Safety
  The property that an object can be accessed only according to its definition. C++ is higly type safe, but a programmer can still violate type safety by explicit casting, by using an uninitialized variable, by using a pointer that doesn't point to an object, by accessing beyond the end of an array, and by misusing a union. Type safety must be preserved for a program to be correct and maintainable.

Type System
  The set of rules prescribing how each object may be used according to their types.

Variable
  A variable is an object or a reference that is not a non-static data member, that is introduced by a declaration - a named object in a scope.

```

