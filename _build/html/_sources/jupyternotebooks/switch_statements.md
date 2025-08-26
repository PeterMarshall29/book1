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

# Switch Statements

Commonly used alternative to if. Easier to follow than nested if statements.
Here the while loop is just to keep it running – only interested in the switch loop.
constexpr double cm_per_inch = 2.54;
double length = 1;
while (true) {
	char unit = 'a’;
	std::cout << "Please type in a length followed by a unit c or i: \n";
	std::cin >> length >> unit;
	switch (unit) {
		case 'i’:
		std::cout << length << "in==" << cm_per_inch * length << "cm.\n";
		break;
		case 'c’:
		std::cout << length << "cm==" << length / cm_per_inch << "in.\n";
		break;
		default:
		std::cout << "Sorry, I do not know what that unit is....\n";
		break;
		}
}
The value in parentheses after the switch keyword is compared to the case values. A match to a case causes its code block to execute The syntax requires each case to be terminated by a break. If no case is true, then the default code block is executed. 


You can switch on a string value – only int,  char, or enumeration type. 
Selection based on a string requires an ‘if’ statement or a ‘map’.

Switch variable must be a constant expression i.e. must be literal value typed at the case line.

A single case can be executed for several case labels. But case labels cannot be used for two cases.

Most compilers do not warn if you forget break – it is required – try it.
Without the breaks -  all the code blocks below the first detected case will also be executed.
Pretty sure the last one does not need a break??

To use multiple labels for the same case.
case '0': case '2': case '4': case '6': case '8':


std::cout << "please enter an expression to be evaluated (only +,-,*,/ for now, ADD an x to show the end of your expression):";
int lhs = 0;
int rhs = 0;
int result;
std::cin >> lhs;
if (!std::cin) throw std::runtime_error("no first operand");
	for (char operation; std::cin >> operation;) { //keeps reading cin until it gets an operator
		if (operation != 'x') std::cin >> rhs;
		if (!std::cin) throw std::runtime_error("no second operand");
 
		switch (operation) {
		case '+':
			result = lhs + rhs;
			break;
		case '-':
			result = lhs - rhs;
			break;
		case '*':
			result = lhs * rhs;
			break;
		case '/':
			result = lhs / rhs;
			break;
		default:
			std::cout << result << '\n';
			return 0;
		}
		lhs = result;
	}
		
	throw std::runtime_error("bad expression");


