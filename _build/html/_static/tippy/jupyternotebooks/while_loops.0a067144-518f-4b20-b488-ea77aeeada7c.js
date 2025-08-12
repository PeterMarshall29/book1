selector_to_html = {"a[href=\"#while-loops\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">while</span></code> Loops<a class=\"headerlink\" href=\"#while-loops\" title=\"Link to this heading\">#</a></h1><p>Its generally better to use for loops in C++, but while loops exist too.</p><p>std::string previous = \u201c\u201d;\nstd::string current;\nwhile (std::cin &gt;&gt; current) {\nif (previous == current)\nstd::cout &lt;&lt; \u201crepeated word : \u201c &lt;&lt; current &lt;&lt; \u2018\\n\u2019;\nprevious = current;\n}\nNotice that the conditional statement for both while and if are in parens.\nIn this case \u2013 the loop condition is the receipt of a valid input.\nTry again but make the variable int\u2019s. What happens if you type letters?\nUse Crtl+Z to end a loop. Ctrl+D in linux.</p>"}
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
                placement: 'auto-start', maxWidth: 500, interactive: false,

            });
        };
    };
    console.log("tippy tips loaded!");
};
