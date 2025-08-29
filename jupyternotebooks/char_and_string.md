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

# Characters and Strings

## Character Data Types

In C++ there are a range of character sets and character set encodings available. Char variables are represented by 8 bits, which puts a limit on the character set of 256 items.

The basic, and default character type is `char`. There will be no immediate need to look into any others.

A char-type variable can hold a character of the implementation’s character set. 

Char type is created using single quotes `' '` around a character literal. For example: 
```{code-block} cpp
char myCharacter = 'Z';
```
The character set we are using is called ASCII,  (American Standard Code for Information Interchange) that represents 128 characters chosen to match the characters appearing on your keyboard.

`0` is also used as a null pointer constant, and as the {term}`null character`. 

Different countries with different symbol requirements for their keyboards (e.g., æ, þ, and ß) will use different character sets and you must never rely on char values for the execution of a published program.
```{admonition} Additonal Character Types
:class: dropdown
* char: Default character type - used for program text - usually 8 bits.
* signed char: Like char, but for signed character representation - able of holding both positive and negative values.
* wchar_t: Provided to hold characters of a larger character set such as Unicode. The size of wchar_t is implementation-defined and large enough to hold the largest character set supported by the implementation’s locale.
* char16_t: A type for holding 16-bit character sets, such as UTF-16.
* char32_t: A type for holding 32-bit character sets, such as UTF-32.

For more information see the C++ reference [here](https://en.cppreference.com/w/cpp/language/types.html).
```

`````{exercise-start}
`````
:class: dropdown
Try the following code.
````{code-block} c++
char a = 'x';
char b = 'y';
int c = a + b;
std::cout << a << b << c;
return 0;
````
````{code-cell} c++
:tags: [remove-output]
Type code here!
````
Find out what happens when you:
- Captialize the two letters and run the code again.
- Make more changes to try to make senses of the output.
- Try numbers instead - what is the sum of '1' and '1' anyway?
- Check that at least its half as much as '2' and '2' still, right?

````{admonition} Code Explanation
:class: dropdown note

`char` is an integral type - all characters have a corresponding integer value, and arithmetic operations can be applied.

For 8 bit representations like `char`, the integer value run from 0 to 255.

The character '1' has the integer value of 49.

Being next in sequence, the character '2' has the integer value 50.

The values of all `char` characters can be found [here](https://en.cppreference.com/w/cpp/language/ascii.html).

The captials letters have different integer values to their lower case version. This is why names are case sensitive.
````
`````{exercise-end}
`````

## String Type

A `string` is variable of type 'string' which is composed of a series of character literals bracketed by a pair of double quote marks `" "`.

The standard library component `<string>` define strings and the operations and functions that work with string-type variables.



`""` denotes an empty string. Still a string, and distinct from null????



## Formating the Ouput




## Converting `int` to `string`

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

char a = 'x';
char b = 'y';
int c = a + b;
std::cout << a << b << c;
return 0;

Change the letter to try to make senses of the output.
Try numbers instead – what is the sum of 1 and 1 anyway?
But a least its half as much as 2 and 2 still, right?

Try this code
int x = 5;
int y;
if (x == 5);
{ y = 3; }
std::cout << y;
{ …code here…} identifies a code block, or an in initialiser.
Prints 3 – now change x to 4. The semicolon after the if is a mistake, its like putting {} instead. 
{} is called the empty block – sometimes used into code to register that nothing should be done, like when it’s the else loop that is really wanted – instead of using NOT logic.
The second {} does nothing special.