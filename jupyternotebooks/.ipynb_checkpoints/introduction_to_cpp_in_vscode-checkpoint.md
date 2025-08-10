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

# C++ in Visual Studio
## Creating your first project in Visual Studio.
Select Create a new project.

Under All Languages, choose c++.
```{figure} ../images/image1.png
:name: my-fig-ref
My figure title.
```
Select “empty project”.
Keep the work project at the start – to distinguish form others options and then give the project a title that includes your name and today’s date.

ProjectWeek1WorkName03FEB25
```{figure} ../images/image2.png
:name: my-fig-ref2
My figure title.
```
Right-click on Source Files and choose “Add” and then “New Module”.
Copy the path shown for later.
Select “c++ File(.CPP), give it a _sensible name_, and hit {kbd}`Add`.


Keep a note of where it is being saved – you will need to upload this oneDrive later.




## Source and Header Files
Header files with a .h, .hpp or .hxx extension,  are sources files that containing entity declarations and/or definitions that need to be visible to multiple translation units (see below). 
Each file with the extension .c, .cpp or .cxx defines a translation unit. 
The C and C++ compilers only compile a single file at a time. 
Source files may include header files, which are substituted in place for the #include statement and other directives by the preprocessor, resulting in a single "file" which is then fed to the compiler. 
The source file must contain all type and all object declarations that are referenced, which is the meaning of the undeclared reference compiler error. 
Note that it only requires complete declarations to succeed; definitions are handled at a later stage in the build process.


## Resource Files
Resource files are things like pictures, bitmaps, mp.
Resource files are platform specific. 
In the case of Microsoft Windows and Microsoft Visual Studio, they define non-code resources such as cursors, icons, bitmap images, string tables and so forth that can be included in the output binary executable. 
A resource script, extension .rc, declares the type, name and location (filename) of the resources to include. 
An optional resource header provides a mnemonic mapping of the resource name to numeric identifiers for use within your program header and source files. The resource compiler, RC.exe, is run to build a resource file from resource script and physical resources (bitmap files, icon files, etc). This resource file has the extension .res.



