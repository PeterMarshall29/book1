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

# Logical Selection


Expressions
 C++ C++ language Expressions 
An expression is a sequence of operators and their operands, that specifies a computation.

Expression evaluation may produce a result (e.g., evaluation of 2 + 2 produces the result 4) and may generate side-effects (e.g. evaluation of std::printf("%d", 4) prints the character '4' on the standard output).

Each C++ expression is characterized by two independent properties: A type and a value category.

General
value categories (lvalue, rvalue, glvalue, prvalue, xvalue(since C++11)) classify expressions by their values
order of evaluation of arguments and subexpressions specify the order in which intermediate results are obtained
