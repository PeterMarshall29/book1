selector_to_html = {"a[href=\"#input-and-output\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Input and Output<a class=\"headerlink\" href=\"#input-and-output\" title=\"Link to this heading\">#</a></h1><p>An \u2018object\u2019 is a region of memory with a \u2018type\u2019 that specifies what kind of information can be placed in it.\nA \u2018named object\u2019 is called a variable.\nA variable is declared by stating its \u2018type\u2019 followed by its \u2018name\u2019 followed by \u2018;\u2019.\nTry this code\nint main()\n{\nstd::cout&lt;&lt;\u201cPlease type your surname!\\n\u201d;\nstd::string surname;\nstd::cin &gt;&gt; surname;\nstd::cout &lt;&lt; \u201cHello, \u201c &lt;&lt; surname &lt;&lt; \u201c!\\n\u201d;\nreturn 0;\n}</p>"}
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
                placement: 'auto-start', maxWidth: 500, interactive: false, theme: 'light', duration: [200, 100], delay: [200, 500],

            });
        };
    };
    console.log("tippy tips loaded!");
};
