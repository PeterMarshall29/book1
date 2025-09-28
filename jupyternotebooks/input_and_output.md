---
jupytext:
  formats: md:myst
  text_representation:
    extension: .md
    format_name: myst
kernelspec:
  display_name: C++ 20
  language: c++
  name: cpp23
---

# Input and Output

The `<iostream>` component of the {term}`standard library` provides the tools used to interact with programmes, using the keyboard and computer display for input and output.

These basic functions are vital to learning programming because they enable the programmer to follow the progress of a program's execution - without some output to the display you will have little insight into what the program is doing.
```{danger}
:class: margin
{attribution="Programmer Humour...?"}
> Knock, knock.
 Race condition!
 Who's there?
```
```{tip}
:class: margin
Don't forget to include `<iostream>` and `<string>` and to construct the `main()` function correctly.
```
`````{code_example-start} Basic IOStream Statements
:label: examplec1
:class: dropdown
:nonumber:
`````
Type the following code into the empty code window below, add the missing program statements, and run the completed code.
````{code-block} c++
:linenos: 
std::cout<<"Please type your surname!\n";
std::string surname;
std::cin >> surname;
std::cout << "Hello, " << surname << "!\n";
return 0;
````
````{code-cell} c++
:tags: [remove-output]
Type code here!
````
````{code_explanation} examplec1
:class: dropdown
`cin` is the character input stream, pronounced 'see - in'; used to read input from the keyboard.

The input stream records all the characters entered until the user hits the {kbd}`return` key in a part of the computer memory called the buffer.

`>>` is called the "extraction" operator - used with `std::cin`, it tells the computer what to do with the input - usually to store the value in a variable. 
```{code-block} c++
:linenos:
#include <iostream>
#include <string>
int main() {
  std::string surname;    //Declares a variable of type string.
  std::cout<<"Please type your surname!\n"; //This is a 'prompt'; a message to the user with instructions.
  std::cin >> surname;    //Character input stream, takes input from console until 'return' (aka 'newline') is pressed. 
  std::cout << "Hello, " << surname << "!\n";
  return 0;
}
```
`"Hello, "` is a string-literal. `Surname` is a variable of type `string`.
````
`````{code_example-end}
`````

````{code_example-start} Practice with Standard Input
:class: dropdown
:label: exercisec1
:nonumber:
````
Try the following code. Use the above code box.
```{code-block} c++
:linenos:
std::string fullName;
std::cout << "Please type in your full name!\n"; 
std::cin >> fullName;
std::cout << "Hello, " << fullName << "!\n";
```
```{admonition} Code Explanation
:class: dropdown
Assuming you did put a space between your first name and your family name, then only your first name will have been printed.

`std::cin` records all the characters you entered before hitting {kbd}`return` and stores then in a {term}`buffer`.

Extraction stops at the first whitespace following any character (initial whitespace is ignored) i.e. if a sentence were entered, only the first word would be extracted.

Any whitespace character terminates the extraction including 'space', 'tab', or 'newline' (i.e. `\t`, `\n`).

```
Unsurprisingly we do sometimes need to be able to type in several words at the same time, separated by a {kbd}`space`. There are several methods open to us - depending on whether we want each word recorded as a separate string, or just a long string with many spaces.

Try the following code...
```{code-block} c++
:linenos:
std::string firstName;
std::string surname;
std::cout << "Please type your first name followed by your surname!\n"; 
std::cin >> firstName >> surname;
std::cout << "Hello, " << firstName << " " << surname << "!\n";
```
```{admonition} Code Explanation
:class: dropdown
The extraction operator sends any characters in the input stream buffer before a trailing-whitespace to the first variable - removing those characters from the buffer.

Each subsequent instance of the extraction operator `>>` sends the next (remaining) sequence of characters to the next variable.

The program expects two inputs, so if the {kbd}`return` key is used after only a single string is entered the program will wait for a second input (Visual Studio) or open a new input box (Live Code).

There are several methods available to clean up some issues caused by potential variations in what is typed by a user, which need to be used if your program is going to be used commercially.
```
````{code_example-end}
````

`````{code_example-start} Practice with IOStream
:class: dropdown
:label: examplec22
:nonumber:
`````
Enter the following into the Live Code editor - which should work.
````{code-block} c++
:linenos:
    int age = 58;
    std::string honorific = "Dr";
    std::string surname;
    std::cout << "Please type your surname!\n";
    std::cin >> surname;  
    std::cout << "Hello, " << honorific << " " << surname << ", you are " << age << " years old!\n";
````
````{code-cell} c++
:tags: [remove-output]
Type code here!
````
```{exercise}
:class: dropdown
:nonumber:
- Change the code to ask the user to input their honorific, followed by their first name, followed by their surname, followed by their age.
- Find out what happens if you respond with 4 words, rather than 3 words and a number.
- Change the existing output line to print `surname * 2` and then try `surname + age`.
```
````{code_explanation} examplec22
:class: dropdown
The program, with the altered and added code lines, should be similar to this…
```{code-block} c++
std::string firstName;
std::cout << "Please type your honorific, followed by your first name, followed by your surname, followed by your age\n";
std::cin >> honorific >> firstName >> surname >> age;
std::cout << "Hello, " << honorific << " " << firstName << " " << surname << ", you are " << age << " years old!\n";
```
Attempting to add or multiply a string and integer is not permitted by the {term}`type system`.

If a fourth string is input, when the program expects an integer, a null value is recorded, which unfortunately overwrote the existing value, if there was one, and is why the program printed '0'. 

A professional program would need to be able to catch this type of input error. Older C++ version might give a random value such as ‘-96738’. 
````
`````{code_example-end}
`````
`````{syntax-start} std::cin Summary
:label: syntaxc1
:class: dropdown
:nonumber: 
`````
`std::cin` is the character input stream, pronounced 'see - in'; used to read input from the keyboard. The input stream collects all the entered characters in sequence into an input buffer (temporary storage) until the user hits the {kbd}`return` key. The data (characters) stored in the buffer are held until extracted.  

`>>` is the {term}`extraction operator`, also called the iostream input operator. `>>` extracts the sequence of input characters from the input buffer before the next trailing whitespace character and transfers them to the indicated variable. Leading whitespace characters, including '\n' and '\t' are discarded from the input buffer.

{term}`Extraction` succeeds if at least one character is extracted from the input buffer. Any unextracted input is left in the input buffer for a possible future extraction. 

Unwanted characters may be present in the input buffer and old data already in the input buffer may also be extracted. 

````{code_example-start} Extraction Failure
:label: examplec2
:class: dropdown
:nonumber:
````
Run this code which will work.

````{code-cell} c++
:tags: [remove-ouput, skip-execution]
:class: dropdown
int main()
{
    std::string word = "Peter";
    int number = 1;
    char myChar = 'a';
    std::cout << "Please enter a word followed by a number ..\n";
    std::cin >> word;
    std::cin >> number;
    std::cout << word << std::endl;
    std::cout << number << std::endl;
    return 0;
}
````
- Find out what happens if you enter number followed by a word.
```{code_explanation} examplec2
:class: dropdown
Extraction fails if the input data does not match the type of the variable being extracted.

If you entered an integer literal - `word` takes the number as a string - no problem. 

`number` is reset to zero - overwriting any previous value because the extraction failed - only numeric characters can be extracted to an `int`.

- Reverse the order of `std::cin >> word;` and `std::cin >> number;` - then enter a word followed by a number.

Now entering a string literal causes the extraction to fail and `number` is reset to the value 0. 

But `word` is unchanged with its original value, because when a previous extraction has failed, further extractions do not happen.
```
````{code_example-end}
````

Extraction fails if the input data does not match the type of the variable to which it is being extracted.

If a previous extraction has failed, `std::cin` will not be able to function until it is cleared using `std::cin.clear()` - this removes an error flag that prevents `std::cin` continuing. 

* If there is no input because the extraction has previously failed and `std::cin` cannot function the indicated variables are left unmodified.

* However, a failed extraction due to invalid input will leave the variable indicated reset to null.
````{code_example} std::cin.fail()
:class: dropdown
:nonumber:
``std::cin.fail()` checks for previous failed extractions - the following code before ` std::cin >> word;` 

```{code-block} c++
if ( std::cin.fail() ) std::cin.clear();   
```
````
Sometimes, unwanted characters remain in the input buffer, causing issues with subsequent input operations.

Use `std::cin.ignore()` to clear the buffer.
`````{syntax-end}
`````

## Newline - `std::endl` vs `'\n'`
`std::endl` inserts a newline character into the output sequence and is therefore almost the same as `'\n'`.

It is better to use `'\n'` to output a newline. Using `std::endl` is often inefficient because `endl` additionally flushes the output stream - it forces the output to appear in real time (advanced concept).

It is seldom necessary for a program to include additional commands for flushing the input buffer, which may not be needed or useful and slow down the execution of the program - buffer flushing is a slow process, that can end up being repeated many times.
## Formatting Numeric Output

The default output for a floating-point number is 6 digits. The number is rounded to give the best approximation that can be printed with 6 digits, but this may not be sufficient to enable you to spot rounding or truncation errors. The value stored by the computer will have more digits, so comparisons may fail. 

`````{code_example-start} Formatting Numeric Output
:label: Examplec4
:class: dropdown
:nonumber:
`````
The format that is printed to the screen can be formatted as follows.
````{code-cell} c++
:tags: [remove-output]
:linenos:
#include <iostream>
int main(){
  std::cout << 1234.56789 << '\n';
  std::cout << std::scientific << 1234.5789e11 << '\n';
  std::cout << std::fixed << 1234.567898765 << '\n';
  std::cout <<  std::defaultfloat << 1234.567898765 << '\n';
  std::cout << std::scientific << 12345.9876543e21 << '\n';
  return 0;
}
````
`std::scientific` formats a number is scientific notation to have 6 digits after the decimal point.

`std::fixed` sets the number of digits after the decimal point to 6.
`std::defaultfloat` is what would happen if nothing was set - only needed when you want the program to return to the default setting.

***

The precision used for these options may also be set.

After including the `<iomanip>` component of the Standard Library,  `<< std::setprecision()` controls the precision of what follows - maximum value is 19.

````{code-cell} cpp
:tags: [remove-output]
:linenos:
#include <iostream>
#include <iomanip>
int main(){
std::cout << std::setprecision(18) << sin(acos(-1) / 4) << "  " << sin(std::numbers::pi/4)<< "  " << sqrt(2) / 2 << '\n';
return 0;
}
````
Notice that the three values are not the same - comparing different pairs would be problematic.

- Add the output from the first code cell to this one - note the final digits - something to keep in mind.
- Does `std::default` override `std::setprecions()`?
`````{code_example-end}
`````

## The `getline()` function

An alternative to `std::cin` is to use `getline()`, which will ignore whitespace and collect every character before {kbd}`return` into a single string.

The downside is that you may need to split up the string later. See [sstream](https://en.cppreference.com/w/cpp/io/basic_stringstream.html) for further information on how to separate a string.
`````{code_example-start} getline() Function
:label: Examplec3
:class: dropdown
:nonumber:
`````
````{code-cell} c++
:tags: [remove-output , raises-exception , skip-execution]
:linenos:
#include <iostream>
#include <string>
int main() {
    std::string sentence;
    std::cout << "Please type in a sentence... \n";
    std::getline(std::cin, sentence);
    std::cout << sentence << std::endl;
    return 0;
}
````
The `getline()` function takes two arguments - The name of the input stream and the name of the string to write to, i.e. `getline(stream, variable);`. 
`````{code_example-end}
`````

## Using std::cout with <vector>

If indexing into a vector is inconvenient, another option is to overload the insertion operator `<<` using a template to accommodate the variety of types accepted by `vector`.

This is most likely beyond the scope of this module, but to demonstrate the possibility....

`````{code_example-start} Using std::cout with std::vector
:label: examplec6
:class: dropdown
:nonumber:
`````
````{code-cell} c++
:tags: [remove-output, skip-execution]
#include <iostream>
#include <vector>
template<typename T>
std::ostream& operator<<(std::ostream& ostreamValue, const std::vector<T>& myVector) {
    for (const auto& elements : myVector)
        ostreamValue << elements << ' ';
    return ostreamValue;
}
int main() {
    std::vector<int> myVector = {1,2,3,4,5,6};
    std::cout << myVector << '\n';
    return 0;
}
````
`````{code_example-end}
`````

## Print debugging

A good reason that `std::cout` is taught before other IO methods is its simplicity - no, really! `std::cout` automatically formats the printed text based on the variable's type, and allows a quick and simple output immediately, when we just want to get started or for {term}`print debugging`, by obviating any additional issues formatting different stings. 


## printf()

`printf()` is used to print formatted output - this section can safely be left until later. `printf()` requires `<cstdio>`.

`````{code_example-start} printf()
:label: examplec5a
:class: dropdown
:nonumber:
`````
Try these examples...
````{code-cell} c++
:tags: [remove-output, skip-execution]
#include <cstdio>
int main() {
char ch = 'A';
int num = 100;
float pi = 3.14159;
printf("Character: %c\n", ch);
printf("Decimal: %d\n", num);
printf("Hexadecimal: %x\n", num);
printf("Floating point: %.2f\n", pi);
printf ("Preceding with zeros: %010d \n", 1977);
printf ("floats: %4.2f %+.0e %E \n", 3.1416, 3.1416, 3.1416);
printf ("%s \n", "A string");
return 0;
}
````
Every instance of a format specifier in the string is replaced with one of the variables or literals listed after the string in the order they appear.

````{syntax-start} Format Specifiers
:class: dropdown
:nonumber:
````
The format specifier is a sequence starting with `%` and ending with the 'specifier' character shown in the table below.

The full sequence is :

```{code-block} c++
%[flags][width][.precision][length]specifier_character
```
```{list-table}
:header-rows: 1
:name: <cmath>
* - Specifier
  - Description
* - %d 
  - Integer (decimal)
* - %f 
  - Floating-point number
* - %s 
  - String
* - %c 
  - Character
* - %x, %X 
  - Hexadecimal lower/upper
* - %e 
  - Scientific Notation
* - %g 
  - Shortest representation %e/%f
```
````{syntax-end}
````

`````{code_example-end}
`````
## New Print() - only in  C++23

There are several alternatives to `std::cout` in C++. In C++23 a new `print()` was introduced.

Note: we are using C++20.

`````{code_example-start} print()
:label: examplec5
:class: dropdown
:nonumber:
`````
Try this code in Visual Studio - the Live Code editor does not have C++23.
````{code-block} c++
#include <print>
int main() {
    std::print("{2} {1}{0}!\n", 23, "C++", "Hello");  
    return 0;
}
````
````{code_explanation} examplec5
:label: explanationc5
:class: dropdown

The first argument is the string to be printed.

The numbers in the curly braces `{}` refer to the position of the subeseqent arguments in order, starting with the first argument after the string, which has index '0'.

The printed string will have those arguments inserted in the indicated corresponding position; e.g. {1} is replaced by the second argument following the string.

Arguments can be used repeatedly and in any order.

````
Prints, `Hello C++23!`
`````{code_example-end}
`````

