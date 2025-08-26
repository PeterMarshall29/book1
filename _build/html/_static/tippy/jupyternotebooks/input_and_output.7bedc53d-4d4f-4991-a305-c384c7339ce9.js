selector_to_html = {"a[href=\"#input-and-output\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Input and Output<a class=\"headerlink\" href=\"#input-and-output\" title=\"Permalink to this heading\">#</a></h1><p>The basic facilities for a user to interact with a program are provided by the <code class=\"docutils literal notranslate\"><span class=\"pre\">&lt;iostream&gt;</span></code> component of the <a class=\"reference internal\" href=\"glossary.html#term-Standard-Library\"><span class=\"xref std std-term\">standard library</span></a>.</p><p><code class=\"docutils literal notranslate\"><span class=\"pre\">&lt;iostream&gt;</span></code> contains the additional functions needed to program the computer to print values to the computer montior/screen and to accept input from the user via the keyboard.</p>", "a[href=\"glossary.html#term-Standard-Library\"]": "<dt id=\"term-Standard-Library\">Standard Library</dt><dd><p>Collecton of facilities available for inclusion into C++ programs</p></dd>"}
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
