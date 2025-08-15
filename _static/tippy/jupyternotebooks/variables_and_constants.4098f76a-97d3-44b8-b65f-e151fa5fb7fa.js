selector_to_html = {"a[href=\"#constants\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Constants<a class=\"headerlink\" href=\"#constants\" title=\"Link to this heading\">#</a></h2><p>To create a constant, called a \u2018symbolic constant\u2019 \u2013 i.e. a name representing a constant, we can use either\nconstexpr or const , both of which are modifiers that precede the type.\nc will not be reassignable/modifiable in both cases, but there is a key difference.\nconstexpr double c = 299792458;\nConstant expression must be initialised prior to compilation \u2013 they cannot be assigned during the runtime.\nThis was not available when I was writing my PhD using C++.\nThe alternative is to use a plane constant variable, whose value might only become known at run-time.\nconst double c = 299792458;\nThese do not have to be initialised prior to compilation, making run-time errors more likely. There is no good reason for using const!\nThey can also be applied to functions creating the same rule for the return.</p>", "a[href=\"#user-defined-names\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">User defined names<a class=\"headerlink\" href=\"#user-defined-names\" title=\"Link to this heading\">#</a></h1><p>There are a list of reserved <a class=\"reference external\" href=\"https://en.cppreference.com/w/cpp/keyword.html\">keywords</a>.</p><p>The reserved keywords may not be used as object names.</p>", "a[href=\"#variables-and-constants\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Variables and Constants<a class=\"headerlink\" href=\"#variables-and-constants\" title=\"Link to this heading\">#</a></h1><p>We can do nothing of interest with a computer without storing data (information). The places in which data is stored are called \u201cobjects\u201d.\nThe \u2018type\u2019 of an object determines what it can store, but also what operations are available to work with that type of data.\nThe data stored in an object is called the \u201cvalue\u201d \u2013 not just numbers.\nThe statement that declares a variable and its first value is called a \u2018definition\u2019, and assigning the first value at whatever point is called initialisation.\nVariable are often given an initial value with the definition\nGiving a variable a value at any time is called assignment.</p><p>The compiler will not allow you to put the wrong values into a type.</p>"}
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
                placement: 'auto-start', maxWidth: 500, interactive: false, theme: 'material', duration: [200, 100], delay: [200, 500],

            });
        };
    };
    console.log("tippy tips loaded!");
};
