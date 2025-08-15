selector_to_html = {"a[href=\"#glossary\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Glossary<a class=\"headerlink\" href=\"#glossary\" title=\"Link to this heading\">#</a></h1><p class=\"glossary\">term Declaration</p><p>:Declarations introduce names into a C++ program. Each kind of entity is declared differently.</p>"}
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
