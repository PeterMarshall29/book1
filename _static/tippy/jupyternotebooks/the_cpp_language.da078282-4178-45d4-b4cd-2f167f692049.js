selector_to_html = {"a[href=\"glossary.html#term-Declaration\"]": "<dt id=\"term-Declaration\">Declaration</dt><dd><p>Declarations introduce names into a C++ program. Each kind of entity is declared differently.</p></dd>", "a[href=\"#the-c-language\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">The C++ Language<a class=\"headerlink\" href=\"#the-c-language\" title=\"Link to this heading\">#</a></h1><p>Introduction to the basic structure of computer program written in the C++ language.</p><p>There are simpler programming languages to learn, but once have learned to code in C++ subsequent programming languages are much easier to pick up</p>", "a[href=\"glossary.html#term-Objects\"]": "<dt id=\"term-Objects\">Objects</dt><dd></dd>", "a[href=\"https://en.cppreference.com/w/cpp/language/history.html\"]": "<p>Description of the evolution of C++ language</p>", "a[href=\"https://en.cppreference.com/w/\"]": "<p>The Official C++ Standard Reference Documentation</p>"}
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
