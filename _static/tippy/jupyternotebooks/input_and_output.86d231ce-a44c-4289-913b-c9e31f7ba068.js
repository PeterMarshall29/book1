selector_to_html = {"a[href=\"#formatting-output\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Formatting Output<a class=\"headerlink\" href=\"#formatting-output\" title=\"Permalink to this heading\">#</a></h2><p>The default output for a floating point number is 6 digits. The number is rounded to give the best approximation that can be printed with 6 digits.</p><p>This may not be sufficient, if you want to spot a rounding or truncation error.</p>", "a[href=\"glossary.html#term-Type-System\"]": "<dt id=\"term-Type-System\">Type System</dt><dd><p>The set of rules prescribing how each object may be used according to their types.</p></dd>", "a[href=\"#getline\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">getline()<a class=\"headerlink\" href=\"#getline\" title=\"Permalink to this heading\">#</a></h2><p>An alternative to <code class=\"docutils literal notranslate\"><span class=\"pre\">cin</span></code> is to use getline(), which will ignore whitespace and collecte every character before <kbd class=\"kbd docutils literal notranslate\">return</kbd> into a single string.</p><p>The downside is that you may need to split up the string later. See <a class=\"reference external\" href=\"https://en.cppreference.com/w/cpp/io/basic_stringstream.html\"><sstream></sstream></a> for further information on how to separate a string.</p>", "a[href=\"glossary.html#term-Standard-Library\"]": "<dt id=\"term-Standard-Library\">Standard Library</dt><dd><p>Collecton of facilities available for inclusion into C++ programs</p></dd>", "a[href=\"#input-and-output\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Input and Output<a class=\"headerlink\" href=\"#input-and-output\" title=\"Permalink to this heading\">#</a></h1><p>The <code class=\"docutils literal notranslate\"><span class=\"pre\">&lt;iostream&gt;</span></code> component of the <a class=\"reference internal\" href=\"glossary.html#term-Standard-Library\"><span class=\"xref std std-term\">standard library</span></a> allows users to interact with programmes, by providing additional commands for programming the computer to print information on the monitor/screen and accept input via the keyboard.</p><p>Before learning to program these basic instructions it is difficult to make any progress learning a computing language, because we have no insight into what the program is doing.</p>"}
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
