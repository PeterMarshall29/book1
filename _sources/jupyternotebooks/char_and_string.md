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

The basic, and default character type is `char`. There will be no immediate need to investigate any others.

A char-type variable can hold a character of the implementation's character set. 

Char type is created using single quotes `' '` around a character literal. For example: 
```{code-block} c++
char myCharacter = 'Z';
```
The character set we are using is called ASCII - American Standard Code for Information Interchange; represents 128 characters chosen to match the characters appearing on your keyboard.

`0` is used as a null pointer constant, and as the {term}`null character`. 

Different countries with different symbol requirements for their keyboards (e.g., æ, þ, and ß) will use different character sets and you must never rely on `char` values for the execution of a published program.
```{admonition} Additional Character Types
:class: dropdown 
* char - the default character type - used for program text - usually 8 bits.
* signed char - like char, but for signed character representation - able of holding both positive and negative values.
* wchar_t - provided to hold characters of a larger character set such as Unicode. The size of wchar_t is implementation-defined and large enough to hold the largest character set supported by the implementation's locale.
* char16_t - a type for holding 16-bit character sets, such as UTF-16.
* char32_t - a type for holding 32-bit character sets, such as UTF-32.

For more information see the C++ reference [here](https://en.cppreference.com/w/cpp/language/types.html).
```

`````{exercise-start} Character Type
:class: dropdown
:nonumber:
`````

Try the following code.
````{code-block} c++
char a = 'x';
char b = 'y';
int c = a + b;
std::cout << a << b << c << '\a';
return 0;
````
````{code-cell} c++
:tags: [remove-output]
Type code here!
````
Find out what happens when you:
- Capitalise the two letters and run the code again.
- Make more changes to try to make senses of the output.
- Try numbers instead - what is the sum of '1' and '1' anyway?
- Check that at least its half as much as '2' and '2' still, right?

````{admonition} Code Explanation
:class: dropdown solution

`char` is an integral type - all characters have a corresponding integer value, and arithmetic operations can be applied.

For 8-bit representations like `char`, the integer values run from 0 to 255.

The character '1' has the integer value of 49, and being next in sequence, the character '2' has the integer value 50.

The values of all `char` characters can be found [here](https://en.cppreference.com/w/cpp/language/ascii.html).

The capital letters have different integer values to their lower-case version. This is why names are case sensitive.
````
`````{exercise-end}
`````

## String Type

A string is a variable of type `string` which is composed of a sequence of character literals bracketed by a pair of double quote marks `" "`.

The standard library component `<string>` defines strings and the operations and functions that work with string-type variables.

`""` denotes an empty string, which has the type `const char[1]` - the single character of the empty string is the terminating '\0'.

The empty string therefore holds a value and is not the same as null.

## Converting `int` to `string`

Strings and integers can be printed to the character outputs stream, using separate insertion operations, but integers cannot be concatenated with strings to create a single string.

`````{code_example-start} Conversion to String
:class: dropdown
:nonumber:
`````
This code will not work.
```{code-block} c++
int main() {
    int a = 10;
    std::cout << "Peter " + a;
	return 0;
}
```
There are a few ways to convert an integer to a string - a template can be used.

This code creates a generic template for conversion to a string - we will circle back to how it works - for now, without explanation, if the following code is placed at the beginning of the program (after the #include directives) or in a {term}`header file`, then we gain access to a `to_sting()` function as shown.

```{code-block} c++
template<class T> std::string to_string(const T& input)
{
	std::ostringstream outputStream;
    outputStream << input;
	return outputStream.str();
}

```
If the `std::cout` line in the previous code is replaced with:
```{code-block} c++
std::cout << "Peter " + to_string(a);
```
Or in the code further up this page, the following replacement is made:
```{code-block} c++
std::cout << "Study " + to_string(c2) + " times harder " + motivator + "!\n";
```
Try typing two names in a row again. Why does the code fail now?
`````{code_example-end}
`````
