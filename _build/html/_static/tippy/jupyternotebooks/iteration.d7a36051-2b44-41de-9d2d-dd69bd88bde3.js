selector_to_html = {"a[href=\"#iteration\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Iteration<a class=\"headerlink\" href=\"#iteration\" title=\"Link to this heading\">#</a></h1><p>As an example of iteration, consider the first program ever to run on a stored-program computer (the EDSAC).</p><p>It was written and run by David Wheeler in the computer laboratory in Cambridge University, England, on May 6, 1949, to calculate and print a simple list of squares like this:</p>"}
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
                placement: 'auto-start', maxWidth: 500, interactive: false,

            });
        };
    };
    console.log("tippy tips loaded!");
};
