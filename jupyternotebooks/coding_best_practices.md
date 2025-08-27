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

# Best Practices in Coding

The aim of any programmer should be to write programs with code that is easy to maintain and easy for other programmers to reuse.

Badly written code is:
* Difficult for others to understand
* Unlikely to be reusable
* Expensive to maintain


```{note}
:class: margin
{attribution="Clean Code, Rob Martin"}
> It is not enough for code to work
```

## Expressive Code

```{note}
:class: margin
{attribution="Clean Code, Rob Martin"}
> You should name a variable using the same care with which you name a first-born child.
> A long descriptive name is better than a short enigmatic name.
```
It is tempting to create identifiers using short, even single letter, names - this is a mistake.
Using longer identifiers which make the purpose of identified entity clear to anyone reading your code
Modern editors will autocomplete long identifer names - you will not need to keep retying your chosen expressive name.

## DRY 

DRY  - Don't repeat yourself! is a fundamental pratice in writing efficient code.

Any lines of code that you know you are going to need more than once, should be encapsulated into a class or a function, which can be called repeatedly.

This save you retyping the code, and makes repairing and maintaining longer programmes much simpler; e.g. you do not have to find the same mistake in 100 places, just in one function.

Dry coding includes {term}`functional programming` and {term}`object-oriented programming` paradigms.

C++ is a multi-paradigm language.

## KISS

Keep it Super Simple!

Avoid the temptation to start coding from the beginning of the problem and working one step at time to the end - this usually produces overly complex programs that are difficult to maintain.

Planning is worth the time and effort. Break the problem down into smaller sections and code each individually.

Lay out your code so that it is easy to read:
* Whitespace is your friend - completely ignore by the compiler.
* Use longer expressive names - modern editors autofill previously used names, you only have to type them out once!
* Use systematic indenting - even when the language does not require it.
* Use comments - early and often

## Commenting

```{note}
{attribution="Clean Code, Rob Martin"}
> Every time you write a comment, you should grimace and feel the failure of your ability of expression.\
> A long descriptive name is better than a long descriptive comment.\
> Redundant comments are just places to collect lies and misinformation.
```

```{note}
:class: margin
{attribution="Norm Schryer"}
> If the comment and code disagree, both are probably wrong.
```

Article on [best practices](https://en.wikipedia.org/wiki/Coding_best_practices) in coding.

## Testing
```{note}
:class: margin
{attribution="Bjarne Stroustrup - Creator of C++"}
> Test early and often.
```
It is a common mistake to type in a lot of code at once without checking your work.
### Sytax Errors

In the early stages of learning coding, the simplest way to test your code is to try to compile it. The compiler will show you all your syntax errors. 

Understanding what has gone wrong is much simpler if you only have a few errors. In the beginning you should recompile every time you have finished a statement, or function.

Otherwise you will face hours unpicking an accumulation of syntax errors that individually would have taken seconds to fix.
### Logic errors

These are not caught by the compiler, so you must test for them yourself.

When the program is only part finished, you can add extra print statement, at different points in your code, so that you can follow the path of the programmes logic as it executes. 

Were the print statements executed in the expecte order? Where any or all of them missing?





