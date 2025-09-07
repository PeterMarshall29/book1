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

# Input and Output

The `<iostream>` component of the {term}`standard library` provides the tools used to interact with programmes, using the keyboard and computer display for input and output.

These basic functions are vital to learning programming because they enable the programmer to follow the progress of a programme's execution - without some output to the display you will have little insight into what the program is doing.
```{danger}
:class: margin
{attribution="Programmer Humour...?"}
> Knock, knock.
 Race condition!
 Who's there?
```
```{tip}
:class: margin
Don't forget to include `<iostream>` and `<string>` and to format the `main()` function correctly.
```
`````{code_example-start} Basic IOStream Statements
:label: examplec1
:class: dropdown
:nonumber:
`````
Type the following code into the empty code window below, add the missing programme statements, and run the completed code.
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

The input stream waits for the return key, taking any characters typed in before {kbd}`return`

`>>` is the iostream input operator, also called the "extraction" operator - directs where the input goes to - a variable name usually.
```{code-block} c++
:linenos:
#include <iostream>
#include <string>
int main() {
  std::string surname;    //Declares a variable of type string.
  std::cout<<"Please type your surname!\n"; //This is a 'prompt'; a message to the user with instructions.
  std::cin >> surname;    //Character input stream, takes input from console when 'return' (aka 'newline') is pressed. 
  std::cout << "Hello, " << surname << "!\n";
  return 0;
}
```
`"Hello, "` is a string-literal. `Surname` is a named object of type `string`.
````
`````{code_example-end}
`````

````{exercise}
:class: dropdown
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
`cin` stops recording the input when it encounters the first whitespace, following any character (initial whitespace is ignored). Code still waits for {kbd}`return`.

Any whitespace terminates the reading of the input string i.e. including 'space', 'tab', or 'newline' (i.e. `\t`, `\n`).

```
Unsurprisingly we do sometimes need to be able to type in several words at the same time, separated by a {kbd}`space`. 

There are several methods open to us; depending on whether we may want each word recorded as a separate string, or just a long string with many spaces.

Try the following code.
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
The input stream sends everything before the first whitespace to the first variable, if a second `>>`operator is found then the input between the first and second whitespace is sent to the second variable and so on.

The program expects two inputs, so the {kbd}`return` key will only move the cursor to a new line until a second character or string is found.

More advanced methods are available to clean up some issues caused by potential variation in what is typed by the user.
```
````
`````{exercise}
:class: dropdown
Try the following code - which should work.
````{code-block} c++
:linenos:
    int age = 58;
    std::string honorific = "Dr";
    std::string surname;
    std::cout << "Please type your surname!\n";
    std::cin >> surname;  
    std::cout << "Hello, " << honorific << " " << surname << ", you are " << age << " years old!\n";
````
- Now change the code to ask the user to input their honorific, followed by their first name, followed by their surname, followed by their age.
- Try responding with 4 words, rather than 3 words and a number.
- Change the existing output line to print `surname * 2` and then try `surname + age`.

````{admonition} Code Solution and Explanation
:class: note dropdown
The program, with the altered and added code lines, should be similar to this…
```{code-block} c++
std::string firstName;
std::cout << "Please type your honorific, followed by your first name, followed by your surname, followed by your age\n";
std::cin >> honorific >> firstName >> surname >> age;
std::cout << "Hello, " << honorific << " " << firstName << " " << surname << ", you are " << age << " years old!\n";
```
Attempting to add or multiply a string and integer is not permitted by the {term}`type system`.

If a fourth string is input, when the program expects an integer, a null value is recorded, which unfortunately overwrote the existing value, if there was one, and is why the program printed '0'. A professional program would need to be able to catch this input error. Older C++ version might give a random value such as ‘-96738’ . 
````
`````
`````{syntax-start} std::cin
:label: syntaxc1
:class: dropdown
:nonumber: 
`````
`std::cin` is the character input stream, pronounced 'see - in'; used to read input from the keyboard. 

The input stream collects all the entered characters in sequence into an input buffer (temporary storage) until the user hits the {kbd}`return` key.

The data (characters) stored in the buffer are held until extracted.  

`>>` is the {term}`extraction operator`, also called the iostream input operator.  

`>>` extracts the sequence of input characters from the input buffer before the next trailing whitespace character and transfers them to the indicated variable.

Leading whitespace characters, including '\n' and '\t' are discarded from the input buffer.

{term}`Extraction` succeeds if at least one character is extracted from the input buffer. Any unextracted input is left in the input buffer for future extractions. 

Any characters that are not extracted are left in the input buffer for a possible future extraction.

Unwanted characters may be present in the input buffer.  (Any data already in the input buffer may also be extracted). 

````{code_example-start}
:label: examplec2
:class: dropdown
````
This code will work - try reversing the order of the extraction.
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
```{code_explanation} examplec2
:class: dropdown
Extraction fails if the input data does not match the type of the variable being extracted.

If you type in a string literal - `number` is reset to the value 0.

`word` is unchanged, because an extraction had previously failed.

Only numeric characters can be extracted to an `int`.

```
````{code_example-end}
````

Extraction fails if the input data does not match the type of the variable being extracted.

If a previous extraction has failed, `std::cin` will not be able to function until it is cleared.

If there is no input because the extraction had previously failed extraction, then indicated variables are left unmodified.

However, a failed extraction due to invalid input will leave the variable indicated reset to null.
````{exercise}
:class: dropdown
Try adding the following code before ` std::cin >> word;` 
```{code-block} c++
if (std::cin.fail())
{
    std::cin.clear();
}   
```
`std::cin.clear()` resets the error flags on `std::cin`, and therefore the second extraction becomes possible.
````

Sometimes, unwanted characters remain in the input buffer, causing issues with subsequent input operations.

Use `std::cin.ignore()` to clear the buffer
`````{syntax-end}
`````

## Newline - `std::endl` vs `'\n'`
`std::endl` inserts a newline character into the output sequence and is therefore almost the same as `'\n'`.

It is better to use `'\n'` to output a newline.

Using `std::endl` is often inefficient because `endl` additionally flushes the output stream - it forces the output to appear in real time; advanced issue.

It is seldom necessary for a program to include additional commands for flushing the input buffer, which not be needed or useful, and which also slows down the execution of the program needlessly - buffer flushing is a slow process - that may be repeated many times.
## Formatting Output

The default output for a floating-point number is 6 digits. The number is rounded to give the best approximation that can be printed with 6 digits.

This may not be sufficient, if you want to spot a rounding or truncation error.

The actual value stored by the computer will have more digits, so a comparison of one against another may fail.

`````{code_example-start}
:label: Examplec4
:class: dropdown
`````
:class: dropdown
The format that is printed to the screen can be formatted as follows.
````{code-cell} c++
:tags: [remove-output]
:linenos:
#include <iostream>
int main(){
std::cout << std::defaultfloat << 12345.987654321 << "  " << std::scientific << 123456789 << "  " << std::fixed << 0.123456789 << '\n';
return 0;
}
````
`std::defaultfloat` is what would happen if nothing was set, used when you want to return to the default.

`std::scientific` formats the number into scientific notation, and to have 6 digits after the decimal point.

`std::fixed` keeps the number of digits after the decimal point to 6.

The precision used for these options may also be set.

After including the `<iomanip>` component of the Standard Library,  `<< std::setprecision()` controls the precision of what follows.

````{code-cell} cpp
:tags: [remove-output]
:linenos:
#include <iostream>
#include <iomanip>
int main(){
std::cout << std::setprecision(64) << sin(acos(-1) / 4) << "  " << sin(std::numbers::pi/4)<< "  " << sqrt(2) / 2 << '\n';
return 0;
}
````
`````{code_example-end}
`````

## The `getline()` function

An alternative to `cin` is to use `getline()`, which will ignore whitespace and collect every character before {kbd}`return` into a single string.

The downside is that you may need to split up the string later. See [<sstream>](https://en.cppreference.com/w/cpp/io/basic_stringstream.html) for further information on how to separate a string.
`````{code_example-start}
:label: Examplec3
:class: dropdown
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

## Using `std::cout` with `<vector>`

If indexing into a vector is inconvenient, another option is to overload the insertion operator `<<` using a template to accommodate the variety of types accepted by `vector`.

This is most likely beyond the scope of this module, but to demonstrate the possibility....

`````{code_example-start}
:label: examplec6
:class: dropdown
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

A good reason that `std::cout` is taught before other IO methods is its simplicity - no, really! - 
`std::cout` automatically formats the printed text based on the variable's type.

It allows a quick and simple output immediately, when we need to get started or with {term}`print debugging`, by obviating any additional issues formatting different stings. 


## printf()



## New Print() - only in  C++23

There are several alternatives to `std::cout` in C++.

In C++23 (we will probably be using C++20) a new `print()` was introduced/

`````{code_example-start}
:label: examplec5
:class: dropdown
`````
````{code-cell} c++
:tags: [remove-output, skip-execution]
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
