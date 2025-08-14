selector_to_html = {"a[href=\"#ternary-operators\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Ternary Operators<a class=\"headerlink\" href=\"#ternary-operators\" title=\"Link to this heading\">#</a></h2><p>Example:\nreturn (a &gt;= b) ? a : b;</p><p>? construct is called an arithmetic if or a conditional expression. The\nvalue of (a &gt;= b) ? a : b is a if a &gt;= b and b otherwise.\nThat is, if the condition is true, the ternary operator value a if true, otherwise value b.\nUseful functions\nstd::max(7,8)\nstd::abs(a)</p>", "a[href=\"#operations-and-operators\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Operations and Operators<a class=\"headerlink\" href=\"#operations-and-operators\" title=\"Link to this heading\">#</a></h1><p>Operations and Operators\nEach type has different operators \u2013 some are overloaded. + is addition for numeric types, but concatenation for string and char</p><p>Try this code</p>"}
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
