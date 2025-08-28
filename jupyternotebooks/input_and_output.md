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

The `<iostream>` component of the {term}`standard library` allows users to interact with programmes, by providing additional commands for programming the computer to print information on the monitor/screen and accept input via the keyboard.

Before learning to program these basic instructions it is difficult to make any progress learning a computing language, because we have no insight into what the program is doing.

***

Type the following code into the empty code window below, add the missing programme statements, and run the completed code.

```{tip}
:class: margin
Don't forget to include `<iostream>` and `<string>` and to format the `main()` function correctly.
```

```{code-block} cpp
:linenos: 
std::cout<<"Please type your surname!\n";
std::string surname;
std::cin >> surname;
std::cout << "Hello, " << surname << "!\n";
return 0;
```

```{code-cell} c++
:tags: [remove-output]
Type code here!
```

````{admonition} Code Explanation
:class: dropdown

`cin` is the character input stream, pronounced 'see - in'; used to read input from the keyboard.

The input stream waits for the return key, taking any characters types in before {kbd}`return`

`>>` is the input stream operator, also called the "get from" or "extraction" operator - directs where the input goes to - a variable name usually.

```{code-block} c++
:linenos:
#include <iostream>
#include <string>
int main() {
	std::string surname;    //Declares a variable of type string.
  std::cout<<"Please type your surname!\n"; //This is a 'prompt'; a message to the user with instructions.
	std::cin >> surname;		//Character input stream, takes input from console when 'return' (aka 'newline') is pressed. 
	std::cout << "Hello, " << surname << "!\n";
	return 0;
}
```
`"Hello, "` is a string-literal. Surname is a named object of type `string`.
````


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

Any whitespace terminates the reading of the input string i.e. inlcuding space, tab, or newline (`\t`, `\n`).

```
We obviously need to be able to type in several words, at the same time, separate by a {kbd}`space`. 

There are several methods open to us; depending on whether we may want each word recorded as a separate string, or just a long string with spaces..

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
- Try the following code - which should work.

````{code-block} c++
:linenos:
    int age = 58;
    std::string salutation = "Dr";
    std::string surname;
    std::cout << "Please type your surname!\n";
    std::cin >> surname;  
    std::cout << "Hello, " << salutation << " " << surname << ", you are " << age << " years old!\n";
````
- Now change the code to ask the user to input a their salutation, followed by their first name, followed by their surname, followed by their age.
- Try responding with 4 words, rather than 3 words and a number
- Change the existing output line to print `surname * 2` and then try `surname + age`.

````{admonition} Code Explanation
:class: note dropdown

This changed and add code lines should be similar to this.
```{code-block} c++
std::string firstName;
std::cout << "Please type salutation, followed by your first name, followed by your surname, followed by your age\n";
std::cin >> salutation >> firstName >> surname >> age;
std::cout << "Hello, " << salutation << " " << firstName << " " << surname << ", you are " << age << " years old!\n";
```
Attempting to add or multiply a string and integer is not permitted by the {term}`type system`.

If a fourth string is input, when the program expects an integer, a null value is recorded, which unfortunately overwrote the existing value, if ther was one, and is why the program printed '0'.

A professional program would need to be able to catch this input error. Older C++ version might give a random value such as -96738 . 
````
`````

## Formatting Output

The default output for a floating point number is 6 digits. The number is rounded to give the best approximation that can be printed with 6 digits.

This may not be sufficient, if you want to spot a rounding or truncation error.

The actual value stored by the computer will have more digits, so a comparison of one against another may fail.

The format that is printed to the screen can be formatted as follows.

```{code-cell} cpp
:tags: [remove-output]
:linenos:
#include <iostream>
int main(){
std::cout << std::defaultfloat << 12345.987654321 << "  " << std::scientific << 123456789 << "  " << std::fixed << 0.123456789 << '\n';
return 0;
}
```
`std::defaultfloat` is the what would happen if nothing was set, used when you want to return to the default.

`std::scientific` formats the number in to scientific notation, and to have 6 digits after the decimal point.

`std::fixed` keeps the number of digits after the decimal point to 6.

The precision used for these options may also be set.

After including the `<iomanip>` component of the Standard Library,  `<< std::setprecision()` controls the pecision of what follows.

```{code-cell} cpp
:tags: [remove-output]
:linenos:
#include <iostream>
#include <iomanip>
int main(){
std::cout << std::setprecision(64) << sin(acos(-1) / 4) << "  " << sin(std::numbers::pi/4)<< "  " << sqrt(2) / 2 << '\n';
return 0;
}
```



## getline()

An alternative to `cin` is to use getline(), which will ignore whitespace and collecte every character before {kbd}`return` into a single string.

The downside is that you may need to split up the string later. See [<sstream>](https://en.cppreference.com/w/cpp/io/basic_stringstream.html) for further information on how to separate a string.

```{code-cell} c++
:tags: [remove-output , raises-exception , skip-execution]
:linenos:
#include <iostream>
#include <string>
int main() {
	std::string sentence;
	getline(std::cin, sentence);
	std::cout << sentence << std::endl;
	return 0;
}
```
The `getline()` function takes two arguments. The name of input stream and the name of the string to write to.getline(std::cin, sentence); 

`std::endl` inserts a newline character into the the output sequence and is therefore almost the same as `'\n'`.

`endl` additionally flushes the output stream, forces the output to appear in real time; advancd issue. 
