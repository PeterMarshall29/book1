selector_to_html = {"a[href=\"#types-in-c\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Types in C++<a class=\"headerlink\" href=\"#types-in-c\" title=\"Permalink to this heading\">#</a></h1><p>Copied\nC++ is a <strong>strongly-typed language</strong>. Once a variable type is set, for example when a number is cast as a <strong>double</strong>, the type cannot be changed, and the numeric value cannot be converted to an integer which means that when you say a variable is an integer, it stays an integer. This is unlike weakly-typed languages like Javascript/ECMAScript, where variables can change types.</p><p>The two reasons for this are efficiency and safety. If you allow variable\u2019s types to change, you must keep track of what type a variable currently is, which has a cost. Keeping types fixed eliminates that cost. As for safety, consider this: in Javascript, if variable a equals 1 and variable b equals 2, and both are integers, then \u201ca + b\u201d gives 3\u2026 if both are text strings, \u201ca + b\u201d gives 12\u2026 but what do you get if one is an integer and one is a string? You could make up rules to answer the question, but that just makes things more complicated. It is safer to require programmers to explicitly say whether they want to add two integers or two strings. Type safety is a very important feature of C++, that makes your code efficient and easy to predict how it will behave.</p>", "a[href=\"#type-system\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Type System<a class=\"headerlink\" href=\"#type-system\" title=\"Permalink to this heading\">#</a></h2><p>The C++ type system keeps track of the size of the memory block, and how to interpret the value in it. The binary code in a memory block could represent the integer value 33 or be the ASCII code for \u2018!\u2019 - the type tells the computer which was intended.</p>"}
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
