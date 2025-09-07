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

For printing to and reading from a file, the standard library provides `<fstream>`. 

To only read or only write - there are also `<ifstream>` and `<ofstream>` - both in `<fstream>`

Try the following code: make sure you can find the file created and check its contents.

The location of the file can be set by the programmer.

Using Visual Studio, without specifying more than the file name, the file will be found in 

```{code-block} rust 
C://users/YourUserName/source/repos/nameOfYourProject/nameOfYourProject/newFileName.txt
```
`````{example-start}
:label: Exampled1
:class: dropdown
`````
````{code-block} cpp
:linenos:
 
#include <iostream>
#include <string>
#include <fstream> 
int main() {
    
    std::fstream outputFileStream("exampleFileName.txt", std::ios::out);
    //std::ofstream outputFileStream("exampleFileName.txt");
    int value1 = 10;
    std::string value2 = "apples";
    
    outputFileStream << value1 << ", \t" << value2 << "\n";

    // optionally throw error if if the file is not open.
    if (outputFileStream.is_open()) {
        outputFileStream << "Hello, World!" << std::endl;
        std::cout << "Data successfully written to the file!" << std::endl;
    }
    else {
        std::cerr << "Error: Unable to open the file for writing." << std::endl;
    }
    
    outputFileStream.close();
    return 0;
}
````
````{admonition} Code Explanation
:class: note dropdown

`std::fstream streamName("fileName.txt", std::ios::out);` is equivalent to `std::ofstream streamName ("fileName.txt");`

Both create a file-stream named `streamName` and create and open a new file called "fileName.txt" associated with the stream.

`<<` operator inserts formatted information into the file.

`is_open()` is a member function that checks the stream has an associate file.

The `close()` is good practice; ensure the stream is closed and the file is ready. 

If the file stream fails to open, the stream is in the `bad()` state, which may be a result of using a non standard operating system. IOStreams can be in one of 4 states, which can be checked by the program; good(), eof(), and fail(). More details can be found in the [C++ Reference](https://en.cppreference.com/w/cpp/io/basic_fstream.html)

`std::ios::out` is a **stream mode parameter**. There is also an equivalent `std::fstream::out`; since `fstream` inherits from `ios`, and using the parent is preferable because it is used elsewhere too.

```{list-table}
:header-rows: 1
:name: Stream Modes
* - Mode
  - Effect
* - ios_base::app
  - "append" add to the end of the file
* - ios_base::ate
  - "at end" - opens and seeks end of file
* - os_base::in
  - For Reading
* - ios_base::out
  - For writing
* - ios_base::trunc  
  - Truncates the file to 0 length  
```
````
`````{example-end}
`````

## Adding Data to a File

Try changing what was written to the file and running the program again. You should find that the contents of the file have been overwritten.

You will most like want to add information to a file, rather than replace its contents, for that we use a different **stream mode parameters** which control the operation `<<`.

If you replace the stream mode parameter with `std::ios::app` the new data will be appended to after the current data.

```{code-block} cpp
std::fstream outputFileStream("exampleFileName.txt", std::ios::app);
```

## Reading from a File

Reading entire file or one line at a time.

