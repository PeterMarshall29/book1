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

An ‘object’ is a region of memory with a ‘type’ that specifies what kind of information can be placed in it.
A ‘named object’ is called a variable.
A variable is declared by stating its ‘type’ followed by its ‘name’ followed by ‘;’.
Try this code
int main()
{
	std::cout<<"Please type your surname!\n";
	std::string surname;
	std::cin >> surname;
	std::cout << "Hello, " << surname << "!\n";
	return 0;
}

>> “Get from” or “read from” operator, directs where the input goes to, a variable name usually.
cin for character input stream.
"Hello, " is a string literal. Surname is a string, an object of type string.

int main()
{
	std::cout<<"Please type your surname!\n"; // This is a 'prompt'; a message to the user with instructions.
	std::string surname;       //This declares a variable of type string.
	std::cin >> surname;		//character input stream, takes input from console when 'return' (aka ‘newline’) is pressed. 
	std::cout << "Hello, " << surname << "!\n";
	return 0;
}

TRY putting a space at the end of the user input to cin. Only part before space is taken up.
TRY putting a space in the beginning of the user input to cin.

