selector_to_html = {"a[href=\"#for-statement-multiple-loop-variables\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">For-statement - Multiple Loop-Variables<a class=\"headerlink\" href=\"#for-statement-multiple-loop-variables\" title=\"Permalink to this heading\">#</a></h2><p>The for-statement can only initialise more than one loop-variable, the final expression can affect both, and the condition can take account of both values. For example:</p>", "a[href=\"#forever\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Forever<a class=\"headerlink\" href=\"#forever\" title=\"Permalink to this heading\">#</a></h2><p>The minimum argument, permitted by a compiler for the a for-statement is <code class=\"docutils literal notranslate\"><span class=\"pre\">(;;)</span></code>.\n<code class=\"docutils literal notranslate\"><span class=\"pre\">for(;;){}</span></code> is a way to specify an infinite loop; sometimes called a for-ever statement\u2026\nFor example:</p>", "a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"headerlink\" href=\"#id2\" title=\"Permalink to this heading\">#</a></h2><p><a class=\"reference external\" href=\"https://en.cppreference.com/w/cpp/language/for.html\">For-statements</a></p>", "a[href=\"#single-commands\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Single Commands<a class=\"headerlink\" href=\"#single-commands\" title=\"Permalink to this heading\">#</a></h2><p>If there is only a single statement i.e. not a whole code block of statements, then the statement can simply be placed after for-statement, and closed with;</p>", "a[href=\"#for-loops\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">For loops<a class=\"headerlink\" href=\"#for-loops\" title=\"Permalink to this heading\">#</a></h1><p>The <span class=\"xref std std-term\">for-statement</span> conditionally executes a statement, or code block, repeatedly; also known as the <a class=\"reference internal\" href=\"glossary.html#term-For-loop\"><span class=\"xref std std-term\">for-loop</span></a>, and is the most frequently used and important iteration control structure in C++.</p>", "a[href=\"glossary.html#term-For-loop\"]": "<dt id=\"term-For-loop\">For-loop</dt><dd><p>Common name for the for-statement.</p></dd>", "a[href=\"#inner-workings-and-comparison-to-while-loops\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Inner Workings and Comparison to While Loops<a class=\"headerlink\" href=\"#inner-workings-and-comparison-to-while-loops\" title=\"Permalink to this heading\">#</a></h2><p>A For Loop is equivalent to the following function.</p>", "a[href=\"https://en.cppreference.com/w/cpp/language/for.html\"]": "<p>For-statements</p>"}
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
