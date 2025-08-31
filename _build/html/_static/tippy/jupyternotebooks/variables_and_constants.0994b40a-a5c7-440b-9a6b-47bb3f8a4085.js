selector_to_html = {"a[href=\"#variables-and-constants\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Variables and Constants<a class=\"headerlink\" href=\"#variables-and-constants\" title=\"Permalink to this heading\">#</a></h1><p>Declared objects and declared references that are not non-static data members are variables\u200a\ufeff.</p><p>Computers need to store information - they cannot do anythin</p>", "a[href=\"#constants\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Constants<a class=\"headerlink\" href=\"#constants\" title=\"Permalink to this heading\">#</a></h2><p>To create a constant, called a \u2018symbolic constant\u2019 \u2013 i.e. a name representing a constant, we can use either\nconstexpr or const , both of which are modifiers that precede the type.\nc will not be reassignable/modifiable in both cases, but there is a key difference.\nconstexpr double c = 299792458;\nConstant expression must be initialised prior to compilation \u2013 they cannot be assigned during the runtime.\nThis was not available when I was writing my PhD using C++.\nThe alternative is to use a plane constant variable, whose value might only become known at run-time.\nconst double c = 299792458;\nThese do not have to be initialised prior to compilation, making run-time errors more likely. There is no good reason for using const!\nThey can also be applied to functions creating the same rule for the return.</p>"}
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
