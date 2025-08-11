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

There are many character sets and character set encodings in use. C++ provides a variety of character types that reflect that – often bewildering – variety:
* char: The default character type, used for program text. A char is used for the implementation’s character set and is usually 8 bits.
* signed char: Like char, but guaranteed to be signed, that is, capable of holding both positive and negative values.
* unsigned char: Like char, but guaranteed to be unsigned.
* wchar_t: Provided to hold characters of a larger character set such as Unicode. The size of wchar_t is implementation-defined and large enough to hold the largest character set supported by the implementation’s locale.
* char16_t: A type for holding 16-bit character sets, such as UTF-16.
* char32_t: A type for holding 32-bit character sets, such as UTF-32.
These are six distinct types (despite the fact that the _t suffix is often used to denote aliases; §6.5). On each implementation, the char type will be identical to that of either signed char or unsigned char, but these three names are still considered separate types. 
A char variable can hold a character of the implementation’s character set. For example:
char ch = 'a';
Almost universally, a char has 8 bits so that it can hold one of 256 different values. Typically, the character set is a variant of ISO-646, for example ASCII, thus providing the characters appearing on your keyboard. Many problems arise from the fact that this set of characters is only partially standardized.

It is safe to assume that the implementation character set includes the decimal digits, the 26 alphabetic characters of English, and some of the basic punctuation characters. It is not safe to assume that:
* There are no more than 127 characters in an 8-bit character set (e.g., some sets provide 255 characters).
* There are no more alphabetic characters than English provides (most European languages provide more, e.g., æ, þ, and ß).
* The alphabetic characters are contiguous (EBCDIC leaves a gap between 'i' and 'j’).
* Every character used to write C++ is available (e.g., some national character sets do not provide {, }, [, ], |, and \).
* Achar fits in 1 byte. There are embedded processors without byte accessing hardware for which a char is 4 bytes. Also, one could reasonably use a 16-bit Unicode encoding for the basic chars.
Whenever possible, we should avoid making assumptions about the representation of objects. This general rule applies even to characters.
Each character has an integer value in the character set used by the implementation. For example, the value of 'b' is 98 in the ASC II character set. Here is a loop that outputs the the integer value of any character you care to input:
void printIntegerValues()
{
for (char inputChar; std::cin >> inputChar; )
std::cout << "the value of '" << inputChar << "' is " << int{ inputChar } << '\n';
}

