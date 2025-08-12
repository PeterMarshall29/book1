selector_to_html = {"a[href=\"#character-data-types\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Character Data Types<a class=\"headerlink\" href=\"#character-data-types\" title=\"Link to this heading\">#</a></h2><p>There are many character sets and character set encodings in use. C++ provides a variety of character types that reflect that \u2013 often bewildering \u2013 variety:</p>", "a[href=\"#characters-and-strings\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Characters and Strings<a class=\"headerlink\" href=\"#characters-and-strings\" title=\"Link to this heading\">#</a></h1><h2>Character Data Types<a class=\"headerlink\" href=\"#character-data-types\" title=\"Link to this heading\">#</a></h2><p>There are many character sets and character set encodings in use. C++ provides a variety of character types that reflect that \u2013 often bewildering \u2013 variety:</p>"}
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
