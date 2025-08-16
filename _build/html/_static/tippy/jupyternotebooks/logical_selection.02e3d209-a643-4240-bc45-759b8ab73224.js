selector_to_html = {"a[href=\"#logical-selection\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Logical Selection<a class=\"headerlink\" href=\"#logical-selection\" title=\"Link to this heading\">#</a></h1><p>Expressions\nC++ C++ language Expressions\nAn expression is a sequence of operators and their operands, that specifies a computation.</p><p>Expression evaluation may produce a result (e.g., evaluation of 2 + 2 produces the result 4) and may generate side-effects (e.g. evaluation of std::printf(\u201c%d\u201d, 4) prints the character \u20184\u2019 on the standard output).</p>"}
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
                placement: 'auto-start', maxWidth: 500, interactive: true, theme: 'material', duration: [200, 100], delay: [200, 500],

            });
        };
    };
    console.log("tippy tips loaded!");
};
