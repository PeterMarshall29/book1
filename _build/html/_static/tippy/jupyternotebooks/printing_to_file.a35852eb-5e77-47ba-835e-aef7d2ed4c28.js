selector_to_html = {"a[href=\"#printing-to-file\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Printing to File<a class=\"headerlink\" href=\"#printing-to-file\" title=\"Permalink to this heading\">#</a></h1><p>How to write to a file in C++</p>"}
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
                placement: 'auto-start', maxWidth: 300, interactive: false, theme: 'transparent', duration: [200, 100], delay: [200, 0],

            });
        };
    };
    console.log("tippy tips loaded!");
};
