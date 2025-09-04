selector_to_html = {"a[href=\"#how-to-learn-c\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">How to Learn C++<a class=\"headerlink\" href=\"#how-to-learn-c\" title=\"Permalink to this heading\">#</a></h1><p>Growth mind set bit\u2026</p><p>Practice, Practice, Practice\u2026</p>"}
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
