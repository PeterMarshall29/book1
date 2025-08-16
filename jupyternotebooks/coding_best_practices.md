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



## Commenting

```{note}
:class: margin
{attribution="Clean Code, Rob Martin"}
> Every time you write a comment, you should grimace and feel the failure of your ability of expression.
> A long descriptive name is better than a long descriptive comment.
> Redundant comments are just places to collect lies and misinformation.
```

```{note}
:class: margin
{attribution="Norm Schryer"}
> If the comment and code disagree, both are probably wrong.
```

Article on [coding best practices.](https://en.wikipedia.org/wiki/Coding_best_practices)



## Testing
```{note}
:class: margin
{attribution="Bjarne Stroustrup - Creator of C++"}
> Test early and often.
```