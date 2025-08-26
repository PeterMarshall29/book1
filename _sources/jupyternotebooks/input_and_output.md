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

`<iostream>` contains the additional functions needed to program the computer to print values to the computer montior/screen and to accept input from the user via the keyboard.

Until we can program these interactions, it is difficult to make any progress learning a computing language, because 

Type the following code into the empty code window below.

```{tip}
:class: margin
Don't forget to include <iostream> and <string> and to format the main() function correctly.
```

```{code-block} cpp
:linenos: 
std::cout<<"Please type your surname!\n";
std::string surname;
//std::cin >> surname;
//std::cout << "Hello, " << surname << "!\n";
return 0;
```

```{code-cell} c++
:tags: [remove-output]
Type code here!
```




````{admonition} Code Explanation
:class: dropdown

`cin` is the character input stream, pronounced 'see - in'. Used to read input from the keyboard.

`>>` is the input stream operator, also called the "get from" or "extraction" operator - directs where the input goes to, a variable name usually.

```{code-block} c++
int main()
{
	std::cout<<"Please type your surname!\n"; // This is a 'prompt'; a message to the user with instructions.
	std::string surname;       //This declares a variable of type string.
	//std::cin >> surname;		//character input stream, takes input from console when 'return' (aka 'newline') is pressed. 
	//std::cout << "Hello, " << surname << "!\n";
	return 0;
}
```

```{code-block} cpp

```
`"Hello, "` is a string-literal. Surname is a named object of type string.

````
````{exercise}
:class: dropdown
TRY putting a space at the end of the user input to cin. Only part before space is taken up.
TRY putting a space in the beginning of the user input to cin.

````






Now try: 
```{code-cell} c++
:tags: [remove-output]
#include <iostream>
int main(){
int age = 58;
std::string firstName = "Peter";
float shoeSize = 10.5;
double c = 3.0e-8;
char example = 'p';
return 0;
}
```

Notice the single quotes for a char type, and one option for scientific notation.
Float is smaller than double - depends on bits of system - double precision floating point number.
Int has many qualifiers - Int can be dropped and the qualifier used on its own.

Variable Names cannot start with a number, contain a whitespace or special symbols - only letters, numbers and underscore are permitted.
Names are case sensitive - keep leading capitals for classes.
Never start with an underscore - it will work, but that pattern is reserved for implementation and system entities, so you risk clashing with something with the same name you did not expect.
Lastly keywords are protected and cannot be reused.


```{code-cell} c++
:tags: [remove-output]
#include <iostream>
int main(){

std::cout << "Please type your first name followed by your surname!\n"; 
std::string surname; 
//std::cin >> surname;
//std::cout << "Hello, " << surname << "!\n";

return 0;
}
```

The string input ends when a white space is detected, so TRY

The convention is that the reading of strings is terminated by any whitespace i.e. space, tab, or newline '\t', '\n'.

```{code-cell} c++
:tags: [remove-output]
#include <iostream>
int main(){
int age = 58;
std::cout << "Please type your first name followed by your surname!\n"; 
std::string firstName = "Peter";
std::string surname;       
//std::cin >> firstName >> surname; //input before space to first variable and input after space to second variable 
//std::cout << "Hello, " << firstName << " " << surname << ", you are " << age << " years old!\n";
return 0;
}
```

Now change to ask for an name followed by an age.

```{code-cell} c++
:tags: [remove-output , raises-exception]
#include <iostream>
int main(){
int age = 58;
std::string firstName = "Peter";
std::cout << "Please type your first name followed by your age!\n"; 
std::string surname; 
//std::cin >> firstName >> age; 
//std::cout << "Hello, " << firstName << " " << surname << ", you are " << age << " years old!\n";
return 0;
}
```


Respond with a name "whitespace" age. Then try again but type in two names.

A string is not an integer, so is recorded as integral value 0. 

Older C++ version might give a random value such as -96738 . Unfortunately this overwrites an initial value if you have used one.

Handling input format errors is a separate lesson.

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