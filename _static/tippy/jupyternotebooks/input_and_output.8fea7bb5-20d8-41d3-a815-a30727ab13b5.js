selector_to_html = {"a[href=\"glossary.html#term-Standard-Library\"]": "<dt id=\"term-Standard-Library\">Standard Library</dt><dd><p>Collecton of facilities available for inclusion into C++ programs</p></dd>", "a[href=\"#formating-the-ouput\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Formating the Ouput<a class=\"headerlink\" href=\"#formating-the-ouput\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#getline\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">getline()<a class=\"headerlink\" href=\"#getline\" title=\"Permalink to this heading\">#</a></h2><p>An alternative to <code class=\"docutils literal notranslate\"><span class=\"pre\">cin</span></code> is to use getline(), which will ignore whitespace and collecte every character before <kbd class=\"kbd docutils literal notranslate\">return</kbd> into a single string.</p><p>The downside is that you may need to split up the string later. See <a class=\"reference external\" href=\"https://en.cppreference.com/w/cpp/io/basic_stringstream.html\"><sstream></sstream></a> for further information on how to separate a string.</p>", "a[href=\"#input-and-output\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Input and Output<a class=\"headerlink\" href=\"#input-and-output\" title=\"Permalink to this heading\">#</a></h1><p>The basic facilities for a user to interact with a program are provided by the <code class=\"docutils literal notranslate\"><span class=\"pre\">&lt;iostream&gt;</span></code> component of the <a class=\"reference internal\" href=\"glossary.html#term-Standard-Library\"><span class=\"xref std std-term\">standard library</span></a>.</p><p><code class=\"docutils literal notranslate\"><span class=\"pre\">&lt;iostream&gt;</span></code> contains additional functions that can be used by a program to print information on monitor/screen and to accept input from the user via the keyboard.</p>", "a[href=\"#id1\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"headerlink\" href=\"#id1\" title=\"Permalink to this heading\">#</a></h2><p>4 Ways to convert an integer to a string: 3 more to discuss later.\nAdd this to header file.</p>", "a[href=\"#formatting-output\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Formatting Output<a class=\"headerlink\" href=\"#formatting-output\" title=\"Permalink to this heading\">#</a></h2><p>The default output for a floating point number is 6 digits. The number is rounded to give the best approximation that can be printed with 6 digits.</p><p>This may not be sufficient, if you want to spot a rounding or truncation error.</p>"}
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
