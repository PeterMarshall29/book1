selector_to_html = {"a[href=\"#the-c-language\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">The C++ Language<a class=\"headerlink\" href=\"#the-c-language\" title=\"Link to this heading\">#</a></h1><p>Start with ideas like syntax\u2026</p><p>All the `C++ language syntax is detailed here: <a class=\"reference external\" href=\"https://en.cppreference.com/w/\">cppreference.com</a></p>"}
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
                placement: 'auto-start', maxWidth: 500, interactive: false, theme: 'light',

            });
        };
    };
    console.log("tippy tips loaded!");
};
