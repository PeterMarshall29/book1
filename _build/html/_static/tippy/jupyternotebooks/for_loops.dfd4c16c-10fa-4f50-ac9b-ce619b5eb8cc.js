selector_to_html = {"a[href=\"glossary.html#term-For-loop\"]": "<dt id=\"term-For-loop\">For-loop</dt><dd><p>Common name for the for-statement.</p></dd>", "a[href=\"#forever\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Forever<a class=\"headerlink\" href=\"#forever\" title=\"Permalink to this heading\">#</a></h2><p>The curious notation for(;;) is a way to specify an infinite loop; you could pronounce it \u201cforever\u201d.\nBehaves the same as while(true)</p>", "a[href=\"#single-commands\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Single Commands<a class=\"headerlink\" href=\"#single-commands\" title=\"Permalink to this heading\">#</a></h2><p>If there is only a single statement i.e. not a whole code block of statements, then the statement can simply be placed after for-statement, and closed with;</p>", "a[href=\"#for-loops\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">For loops<a class=\"headerlink\" href=\"#for-loops\" title=\"Permalink to this heading\">#</a></h1><p>The for-statement conditionally executes a statement, or code block, repeatedly. Also known as the <a class=\"reference internal\" href=\"glossary.html#term-For-loop\"><span class=\"xref std std-term\">for-loop</span></a>.</p>", "a[href=\"#id1\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"headerlink\" href=\"#id1\" title=\"Permalink to this heading\">#</a></h2><p>The loop variable cannot be shadowed. You cannot have another variable with the same name inside declared inside the for-loops code block.</p>", "a[href=\"#requires-vector\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">requires vector<a class=\"headerlink\" href=\"#requires-vector\" title=\"Permalink to this heading\">#</a></h2><p>TRY to create and change a vector of zeros.</p>", "a[href=\"#using-auto\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Using <code class=\"docutils literal notranslate\"><span class=\"pre\">auto</span></code><a class=\"headerlink\" href=\"#using-auto\" title=\"Permalink to this heading\">#</a></h2><p>It is not always obvious what is the right type to use for a controlled variable in a for loop, so\nauto often comes in handy:\nfor (auto p = begin\u00a9; c!=end\u00a9; ++p) {\n// \u2026 use iterator p for elements in container c \u2026\n}</p>", "a[href=\"#alternatives-for-for-statements\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Alternatives for For-statements<a class=\"headerlink\" href=\"#alternatives-for-for-statements\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#inner-workings-and-comparison-to-while-loops\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Inner Workings and Comparison to While Loops<a class=\"headerlink\" href=\"#inner-workings-and-comparison-to-while-loops\" title=\"Permalink to this heading\">#</a></h2><p>A For Loop is equivalent to the following function.</p>", "a[href=\"https://en.cppreference.com/w/cpp/language/for.html\"]": "<p>For-statements</p>"}
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
