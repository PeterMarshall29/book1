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
(VisualStudio)=
# C++ in Visual Studio

Visual Studio is a comprehensive Integrated Development Environment (IDE) developed by Microsoft - we will be using the community edition for much of this module.

VS is designed to facilitate the entire software development lifecycle, from writing and editing code to debugging, building, and deploying applications.

A key benefit of an IDE, especially to new programmers, is the **syntax error highlighting** which warns you of issues that will prevent compilation.

Others benefits are built-in debugging tools, a GUI file management system, and version control. 

VS support development in many programming languages, including C++, C#, JavaScript, TypeScript, Python.

Other IDE's are available, such as Xcode on MacOS. Xcode may be used for your project work on this module, but will not be supported.
```{important}
:class: margin
Please note: VS and VS Code are different programmes.
```
## Creating your first project in Visual Studio.
Select Create a new project.

Under All Languages, choose c++.
```{figure} ../images/image1.png
:name: my-fig-ref
Starting a New Project.
```
Select “empty project”.
Keep the work project at the start – to distinguish form others options and then give the project a title that includes your name and today’s date.

ProjectWeek1WorkName03FEB25
```{figure} ../images/image2.png
:name: my-fig-ref2
Selecting the Correct Project Type.
```
Right-click on Source Files and choose “Add” and then “New Module”.
Copy the path shown for later.
Select “c++ File(.CPP), give it a _sensible name_, and hit {kbd}`Add`.


Keep a note of where it is being saved – you will need to upload this oneDrive later.

Run the code by hitting the hollow green triangle at the top. If that works, then change to release and run again.
Find the .exe in the file system now and make sure it works. Find the text document in the project folders that has the address of the executable. 
Basic window terminal - Type help for a command list. Cd and dir are the important ones just now.
cd source\\repos\\Project10\\x64\\Release
Type project name.
Open a shell – the type of shell determines what to do next.
Then type .\ followed by the address, e.g. .\\source\repos\Project7\Project7\x64\Debug\Project7.exe. 
Or just .\ followed by name if you have navigated there already.
Open the terminal and go to the correct location.
If you just click on application, it may flash up, but not stay open.



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



