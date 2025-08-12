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

# `For` Loops

Conditionally executes a statement repeatedly, where the statement does not need to manage the loop condition.

The management of what controls the loop happens inside the argument to the for command.
The syntax is 
“for (loop variable definition and initialisation; condition to continue the loop; increment to loop variable instruction) { code to execute}”

Without the increment, which is not required, the loop just runs forever but you can also affect the condition that is checked every time from inside the code block.

for (int i = 0; i < 100; ++i) {
std::cout << i << "\t" << i * i << "\n";
}
Be careful not to also increment the loop variable within the execution block, this can also be done and create more options for what happens, but should not generally be done without good purpose.
Single Commands
If you only have one expression for each time through a for loop, you can put it after the for statement, and close with ;
for (int i = 0; i < 100; ++i) std::cout << i << "\t" << square(i) << "\n";


## requires vector
TRY to create and change a vector of zeros.

std::vector<int> vzeros(6) ;
std::vector<int> v = { 1,2,3,4,5 };
vzeros[2] = 5;
for (int i = 0; i < vzeros.size(); ++i) std::cout << vz
eros[i] << i <<"\n";

std::vector<std::string> vEmptyStrings(6);
for (int i = 0; i < vEmptyStrings.capacity(); ++i) std::cout << vEmptyStrings[i]<<", " << i << "\n";


