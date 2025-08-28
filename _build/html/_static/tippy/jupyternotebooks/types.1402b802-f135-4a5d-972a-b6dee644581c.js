selector_to_html = {"a[href=\"#determining-the-type-of-a-variable\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Determining the Type of a Variable<a class=\"headerlink\" href=\"#determining-the-type-of-a-variable\" title=\"Permalink to this heading\">#</a></h2><p>It is tremendously useful to be able to check the type of a variable.</p>", "a[href=\"glossary.html#term-Infix-Operator\"]": "<dt id=\"term-Infix-Operator\">Infix Operator</dt><dd><p>Operator that sits between two variables, denoting an operation using both. As opposed to unary, prefix and postfix operators that act on one variable position before or after it.</p></dd>", "a[href=\"#types-in-c\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Types in C++<a class=\"headerlink\" href=\"#types-in-c\" title=\"Permalink to this heading\">#</a></h1><p>The <strong>type</strong> of a variable defines its properties, the rules it must obey, and the set of operators and functions availabe to members of the type.</p><p>For example, <code class=\"docutils literal notranslate\"><span class=\"pre\">+</span></code> behaves differently when used an <a class=\"reference internal\" href=\"glossary.html#term-Infix-Operator\"><span class=\"xref std std-term\">infix operator</span></a> between two integers compared to two strings.</p>", "a[href=\"#casting-to-type\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Casting to Type<a class=\"headerlink\" href=\"#casting-to-type\" title=\"Permalink to this heading\">#</a></h2><p>Although the type of a variable cannot be changed.</p><p>The value of a variable can be copy assigned to another variable that has a differnt type  - not all permutations are permitted.</p>", "a[href=\"#type-system\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Type System<a class=\"headerlink\" href=\"#type-system\" title=\"Permalink to this heading\">#</a></h2><p>The C++ type system keeps track of the size of the memory block, and how to interpret the value in it. The binary code in a memory block could represent the integer value 33 or be the ASCII code for \u2018!\u2019 - the type tells the computer which was intended.</p>"}
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
                placement: 'auto-start', maxWidth: 500, interactive: false, theme: 'material', duration: [200, 100], delay: [200, 0],

            });
        };
    };
    console.log("tippy tips loaded!");
};
