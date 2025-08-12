selector_to_html = {"a[href=\"#boolean-data-type\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Boolean Data Type<a class=\"headerlink\" href=\"#boolean-data-type\" title=\"Link to this heading\">#</a></h1><p>Generally, you will only need to use bool for logical values, char for characters, int for integer values, and double for floating-point values.\nUnless you are pushing the computer to its limits, you don\u2019t need to worry about optimisation quite so much these days, and especially when just starting out.\nIn c++ the integral and floating-point types are available in a variety of sizes to allow you to optimise the amount of memory storage utilised and therefore the precision and the range available in computation.\nComputers usually use bytes characters, words integer values, some entity most suitable for floating-point computation, and addresses for referring to those entities.\nThe C++ fundamental types together with pointers and arrays present these machine-level notions to the programmer in a reasonably implementation-independent manner.</p><p>A Boolean, bool, can have one of the two values true or false. A Boolean is used to express the results of logical operations. For example:\nvoid myFunction(int a, int b)\n{\nbool myBoolean{ a == b };\n// \u2026\n}\nIf a and b have the same value, myBoolean becomes true; otherwise, b1 becomes false.\nA common use of bool is as the type of the result of a function that tests some condition (a pred- icate). For example:</p>", "a[href=\"#pointers-converting-to-booleans\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Pointers Converting to Booleans<a class=\"headerlink\" href=\"#pointers-converting-to-booleans\" title=\"Link to this heading\">#</a></h2><p>A pointer can be implicitly converted to a bool (\u00a710.5.2.5). A non-null pointer converts to true; pointers with the value nullptr convert to false. For example:\n\u00a0void myFunction(int* myPointer)\n{\nbool myBoolean1 = myPointer;  // narrows to true or false - not a copy!\nstd::cout &lt;&lt; myBoolean1 &lt;&lt; \u2018\\n\u2019;\nbool myBoolean2{ myPointer != nullptr };  // explicit test against nullptr\nstd::cout &lt;&lt; myBoolean1 &lt;&lt; \u2018\\n\u2019;\nif (myPointer) { // identical to p!=nullptr\nstd::cout &lt;&lt; \u201cnot pointing to Null\u201d &lt;&lt; \u2018\\n\u2019;\n}\n}\n\u00a0int main() {\nint temp = 17;\nint* myPointerToTemp = nullptr; // or set to temp\nmyFunction(myPointerToTemp);\n\u00a0\nreturn 0;\n\u00a0\n}\nI prefer if (p) over if (p!=nullptr) because it more directly expresses the notion \u2018\u2018if p is valid\u2019\u2019 and also because it is shorter. The shorter form leaves fewer opportunities for mistakes.</p>"}
skip_classes = ["headerlink", "sd-stretched-link"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(` ${select}`);
        for (const link of links) {
            if (skip_classes.some(c => link.classList.contains(c))) {
                continue;
            }

            tippy(link, {
                content: tip_html,
                allowHTML: true,
                arrow: true,
                placement: 'auto-start', maxWidth: 500, interactive: false, theme: 'light', duration: [200, 100], delay: [200, 500],

            });
        };
    };
    console.log("tippy tips loaded!");
};
