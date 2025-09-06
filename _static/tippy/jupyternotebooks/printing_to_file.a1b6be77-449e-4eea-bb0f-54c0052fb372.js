selector_to_html = {"a[href=\"#reading-from-a-file\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Reading from a File<a class=\"headerlink\" href=\"#reading-from-a-file\" title=\"Permalink to this heading\">#</a></h2><p>Reading entire file or one line at a time.</p>", "a[href=\"#adding-data-to-a-file\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Adding Data to a File<a class=\"headerlink\" href=\"#adding-data-to-a-file\" title=\"Permalink to this heading\">#</a></h2><p>Try changing what was written to the file and running the program again. You should find that the contents of the file have been overwitten.</p><p>You will most like want to add information to a file, rather than replace its contents, for that we use a different <strong>stream mode paramaters</strong> which control the operation <code class=\"docutils literal notranslate\"><span class=\"pre\">&lt;&lt;</span></code>.</p>", "a[href=\"#printing-to-file\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Printing to File<a class=\"headerlink\" href=\"#printing-to-file\" title=\"Permalink to this heading\">#</a></h1><p>For printing to and reading from a file, the standard library provides <code class=\"docutils literal notranslate\"><span class=\"pre\">&lt;fstream&gt;</span></code>.</p><p>To only read or only write - there are also <code class=\"docutils literal notranslate\"><span class=\"pre\">&lt;ifstream&gt;</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">&lt;ofstream&gt;</span></code> - both in <code class=\"docutils literal notranslate\"><span class=\"pre\">&lt;fstream&gt;</span></code></p>"}
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
