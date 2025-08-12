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

# Printing to File

How to write to a file in C++
1.	Add if not already there:
#include <iostream>
#include <fstream> 
2.	In the main function, before any writing and outside of any loops, put the following code.
int main()
{ 
    std::ofstream outputFile("exampleName1.txt")
“outputFile” is the parameter name/reference to your file used in your code and the file is called “exampleName1.txt”
3.	To write a line of data to the file, add inside a loop in the main function:
outputFile << value1 << ", \t" << value2 << "\n";
4.	Repeat the [ << value1 << ", \t" ] for as many values as needed.
5.	Still inside main, but after all writes to the file - Close the file
    outputFile.close();
   return 0;

 [ Optional - Check if the file is open
    if (outFile.is_open()) {
        outputFile << "Hello, World!" << std::endl;
        std::cout << "Data successfully written to the file!" << std::endl;
    } else {
        std::cerr << "Error: Unable to open the file for writing." << std::endl;
    }
    outputFile.clse();
    return 0;
}
]
6.	The file will be found in the repos as usual; see screenAdd image5.pngshot beneath for example.


