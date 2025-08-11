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

# Vectors


A vector is a sequence of elements that can be accessed by their index
Add <vector> to header file. #include <vector>

std::vector<int> v = {1,2,3,4,5 };
std::cout << v[0];
 
cout will not print a whole vector – but you can index in, and then you are only printing a single integer. Try.
std::cout << v;

Instead, a `for` loop is needed.

std::vector<int> v = {1,2,3,4,5 };
for (int i = 0; i < v.capacity(); ++i) std::cout << v[i] << "\n"; 

or

for (int i = 0; i < v.size(); ++i) std::cout << v[i] << "\n";

## Iteration with 

TRY to create and change a vector of zeros.

std::vector<int>  vzeros(6) ;
std::vector<int>  v = { 1,2,3,4,5 };
vzeros[2] = 5;
for (int i = 0; i < vzeros.size(); ++i) std::cout << vz
eros[i] << i <<"\n";

std::vector<std::string> vEmptyStrings(6);
for (int i = 0; i < vEmptyStrings.capacity(); ++i) std::cout << vEmptyStrings[i]<<", " << i << "\n";


## Traversing a Vector

The range for any vector is the halfopen sequence [0 : v.size() ) meaning 0 is included, but the last element is v.size()-1 .

A “range for loop” uses this halfopen sequence .
 
std::vector<int> v = { 1,2,3,4,5 };
v[2] = 5;
for (int i : v) std::cout << i << "\n";

The loop runs the same number of times as the number of elements, the loop variable becomes that element each time.

## Adding to a Vector

A non-existent element cannot be accessed or assigned to in any type of vector or array.
We can append an extra element at the end using the push_back() function.

std::vector<int> v = { 1,2,3,4,5 };
v.push_back(17);
for (int i : v ) std::cout << i <<"\n";

push_back(17) is another member function – it belongs to std::vector and must be called using the . notation – like methods for swift structures.

C++ also has arrays like  C – but these need to have their size specified in advance – vector is more useful usually – going to cover those in a later week.

***

TRY to read in a possibly large unknown number of data points..

std::vector<double> growingVector;
for (double tempVectorNextValue; std::cin >> tempVectorNextValue;)
	growingVector.push_back(tempVectorNextValue);
 
The second term is the condition for the for loop – std::cin >> works if it is given the correct variable type by the user and therefore returns true , otherwise false and the for loop ends.
Vector has many useful member functions. We can sort out list into ascending order – or otherwise.

std::vector<double> growingVector;
for (double tempVectorNextValue; std::cin >> tempVectorNextValue;)
	growingVector.push_back(tempVectorNextValue);
std::sort(growingVector.begin(),growingVector.end());
for (double i : growingVector) std::cout << i << "\n";
 



