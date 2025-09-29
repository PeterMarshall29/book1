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

# Header Files

Sometime a pcp.h will be created in the project – this is a precompiled header file.
To create your own header file. Click in headers, new module, header file.
The new file will contain, #pragma once, which is an instruction that this file is only compiled the first time it is used, saving time in future builds.
Now add: 
#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
#include <cmath>
And replace  #include <iostream> with  #include #include "MyHeader.h".


