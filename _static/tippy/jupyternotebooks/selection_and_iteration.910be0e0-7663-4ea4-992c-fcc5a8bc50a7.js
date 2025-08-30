selector_to_html = {"a[href=\"#iteration\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Iteration<a class=\"headerlink\" href=\"#iteration\" title=\"Permalink to this heading\">#</a></h2><p>As an example of iteration, consider the first program ever to run on a stored-program computer (the EDSAC).</p><p>It was written and run by David Wheeler in the computer laboratory in Cambridge University, England, on May 6, 1949, to calculate and print a simple list of squares like this:</p>", "a[href=\"#selection-and-iteration\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Selection and Iteration<a class=\"headerlink\" href=\"#selection-and-iteration\" title=\"Permalink to this heading\">#</a></h1><p>Expressions\nC++ C++ language Expressions\nAn expression is a sequence of operators and their operands, that specifies a computation.</p><p>Expression evaluation may produce a result (e.g., evaluation of 2 + 2 produces the result 4) and may generate side-effects (e.g. evaluation of std::printf(\u201c%d\u201d, 4) prints the character \u20184\u2019 on the standard output).</p>", "a[href=\"#selection\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Selection<a class=\"headerlink\" href=\"#selection\" title=\"Permalink to this heading\">#</a></h2>"}
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
