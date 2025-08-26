selector_to_html = {"a[href=\"#if-statements\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">if</span></code> Statements<a class=\"headerlink\" href=\"#if-statements\" title=\"Permalink to this heading\">#</a></h1><p>Try this code:\nint x = 0;\nint y = 0;\nstd::cout &lt;&lt; \u201cPlease enter two integral values: \\n\u201d;\nstd::cin &gt;&gt; x &gt;&gt; y;\nif (x &lt; y) {\nstd::cout &lt;&lt; \u201cThe maximum value = max(\u201d &lt;&lt; x &lt;&lt; \u201c,\u201d &lt;&lt; y &lt;&lt; \u201c) is \u201d &lt;&lt; y &lt;&lt; \t\t\u201c. \\n\u201d;\n} else {\nstd::cout &lt;&lt; \u201cThe maximum value = max(\u201d &lt;&lt; x &lt;&lt; \u201c,\u201d &lt;&lt; y &lt;&lt; \u201c) is \u201d &lt;&lt; x &lt;&lt; \t\t\u201c. \\n\u201d;\n}\t\nCode basically works except does not  return the value if two identical values are entered \u2013 also behaves oddly if first number is a double \u2013 takes part before the decimal point then reports having received the second part as 0 without pause. If second is a double, it rounds or ignores what is after the decimal point.\nThis fixes part of the issue \u2013 other issues left as an exercise.\nif (x &lt; y) {\nstd::cout &lt;&lt; \u201cThe maximum value = max(\u201d &lt;&lt; x &lt;&lt; \u201c,\u201d &lt;&lt; y &lt;&lt; \u201c) is \u201d &lt;&lt; y &lt;&lt; \u201c. \\n\u201d;\n}\nelse if (x &gt; y) {\nstd::cout &lt;&lt; \u201cThe maximum value = max(\u201d &lt;&lt; x &lt;&lt; \u201c,\u201d &lt;&lt; y &lt;&lt; \u201c) is \u201d &lt;&lt; x &lt;&lt; \u201c. \\n\u201d;\n}\nelse {\nstd::cout &lt;&lt; \u201cThe values are identical. \\n\u201d;\n}</p>"}
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
