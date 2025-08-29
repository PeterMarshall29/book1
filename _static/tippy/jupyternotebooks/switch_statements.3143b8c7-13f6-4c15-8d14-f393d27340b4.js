selector_to_html = {"a[href=\"#switch-statements\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Switch Statements<a class=\"headerlink\" href=\"#switch-statements\" title=\"Permalink to this heading\">#</a></h1><p>Commonly used alternative to if. Easier to follow than nested if statements.\nHere the while loop is just to keep it running \u2013 only interested in the switch loop.\nconstexpr double cm_per_inch = 2.54;\ndouble length = 1;\nwhile (true) {\nchar unit = \u2018a\u2019;\nstd::cout &lt;&lt; \u201cPlease type in a length followed by a unit c or i: \\n\u201d;\nstd::cin &gt;&gt; length &gt;&gt; unit;\nswitch (unit) {\ncase \u2018i\u2019:\nstd::cout &lt;&lt; length &lt;&lt; \u201cin==\u201d &lt;&lt; cm_per_inch * length &lt;&lt; \u201ccm.\\n\u201d;\nbreak;\ncase \u2018c\u2019:\nstd::cout &lt;&lt; length &lt;&lt; \u201ccm==\u201d &lt;&lt; length / cm_per_inch &lt;&lt; \u201cin.\\n\u201d;\nbreak;\ndefault:\nstd::cout &lt;&lt; \u201cSorry, I do not know what that unit is\u2026\\n\u201d;\nbreak;\n}\n}\nThe value in parentheses after the switch keyword is compared to the case values. A match to a case causes its code block to execute The syntax requires each case to be terminated by a break. If no case is true, then the default code block is executed.</p><p>You can switch on a string value \u2013 only int,  char, or enumeration type.\nSelection based on a string requires an \u2018if\u2019 statement or a \u2018map\u2019.</p>"}
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
