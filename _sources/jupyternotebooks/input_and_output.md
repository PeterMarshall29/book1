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

The basic facilities for a user to interact with a program are provided by the `<iostream>` component of the {term}`standard library`.

`<iostream>` contains additional functions that can be used by a program to print information on monitor/screen and to accept input from the user via the keyboard.

Until we can program these interactions, it is difficult to make any progress learning a computing language, because we have no insight into what the program has done.

Type the following code into the empty code window below.

```{tip}
:class: margin
Don't forget to include <iostream> and <string> and to format the `main()` function correctly.
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
int main()
{
	std::cout<<"Please type your surname!\n"; //This is a 'prompt'; a message to the user with instructions.
	std::string surname;    //Declares a variable of type string.
	std::cin >> surname;		//Character input stream, takes input from console when 'return' (aka 'newline') is pressed. 
	std::cout << "Hello, " << surname << "!\n";
	return 0;
}
```

```{code-block} cpp

```
`"Hello, "` is a string-literal. Surname is a named object of type string.

````
````{exercise}
:class: dropdown
TRY putting a space at the end of the user input to cin. 

TRY putting a space in the beginning of the user input to cin.

`cin` stops taking input when it encounters the first whitespace. Code still waits for {kbd}`return`.
````






```{code-cell} c++
:tags: [remove-output, skip-execution]
#include <iostream>
int main(){

std::cout << "Please type your first name followed by your surname!\n"; 
std::string surname; 
std::cin >> surname;
std::cout << "Hello, " << surname << "!\n";

return 0;
}
```

The string input ends when a white space is detected, so TRY

The convention is that the reading of strings is terminated by any whitespace i.e. space, tab, or newline '\t', '\n'.

```{code-cell} c++
:tags: [remove-output, skip-execution]
#include <iostream>
int main(){
int age = 58;
std::cout << "Please type your first name followed by your surname!\n"; 
std::string firstName = "Peter";
std::string surname;       
std::cin >> firstName >> surname; //input before space to first variable and input after space to second variable 
std::cout << "Hello, " << firstName << " " << surname << ", you are " << age << " years old!\n";
return 0;
}
```

Now change to ask for an name followed by an age.

```{code-cell} c++
:tags: [remove-output , raises-exception , skip-execution]
#include <iostream>
int main(){
int age = 58;
std::string firstName = "Peter";
std::cout << "Please type your first name followed by your age!\n"; 
std::string surname; 
std::cin >> firstName >> age; 
std::cout << "Hello, " << firstName << " " << surname << ", you are " << age << " years old!\n";
return 0;
}
```


Respond with a name "whitespace" age. Then try again but type in two names.

A string is not an integer, so is recorded as integral value 0. 

Older C++ version might give a random value such as -96738 . Unfortunately this overwrites an initial value if you have used one.

Handling input format errors is a separate lesson.

## Formating the Ouput






##

4 Ways to convert an integer to a string: 3 more to discuss later.
Add this to header file.

```{code-block} c++
template<class T> std::string to_string(const T& t)
{
std::ostringstream os;
os << t;
return os.str();
}
```
This code creates a generic template for conversion to a string - we will circle back to how it works.

Then replace cout line in the previous code with:

```{code-block} c++
std::cout << "Study " + to_string(c2) + " times harder " + motivator + "!\n";
Try typing two names in a row again. Why does the code fail?
```


Char type is created using single quotes.
Try the following code.
```{code-cell} c++
char a = 'x';
char b = 'y';
int c = a + b;
std::cout << a << b << c;
return 0;
```
```{code-cell} c++
:tags: [remove-output]
Type code here!
```

Change the letter to try to make senses of the output.
Try numbers instead - what is the sum of 1 and 1 anyway?
But a least its half as much as 2 and 2 still, right?

Try this code
```{code-cell} c++
:tags: [remove-output]
#include <iostream>
int main(){
int x = 5;
int y;
if (x == 5);
{ y = 3; }
std::cout << y;
return 0;
}
```




`{...code here...}` identifies a code block, or an in initialiser.
Prints 3 - now change `x` to '4'. The semicolon after the if is a mistake, its like putting {} instead. 
`{}` is called the empty block - sometimes used into code to register that nothing should be done, like when it's the else loop that is really wanted - instead of using `NOT` logic.
The second `{}` does nothing special.

lo

## Formatting Output

The default output for a floating point number is 6 digits. The number is rounded to give the best approximation that can be printed with 6 digits.

This may not be sufficient, if you want to spot a rounding or truncation error.

The actual value stored by the computer will have more digits, so a comparison of one against another may fail.

The format that is printed to the screen can be formatted as follows.

```{code-cell} cpp
:tags: [remove-output]
#include <iostream>
int main(){
std::cout << std::defaultfloat << 12345.987654321 << "  " << std::scientific << 123456789 << "  " << std::fixed << 0.123456789 << '\n';
return 0;
}
```
std::defaultfloat is the what would happen if nothing was set, used when you want to return to the default.

std::scientific formats the number in to scientific notation, and to have 6 digits after the decimal point.

std::fixed keeps the number of digits after the decimal point to 6.

The precision used for these options may also be set.

After including the `<iomanip>` component of the Standard Library,  `<< std::setprecision()` controls the pecision of what follows.

```{code-cell} cpp
:tags: [remove-output]
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
