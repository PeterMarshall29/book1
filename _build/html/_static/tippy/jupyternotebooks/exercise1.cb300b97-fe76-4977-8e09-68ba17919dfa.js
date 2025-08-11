selector_to_html = {"a[href=\"#exerciseaa2\"]": "<div class=\"exercise admonition\" id=\"exerciseaa2\">\n<p class=\"admonition-title\"><span class=\"caption-number\">Exercise 3 </span></p>\n<section id=\"exercise-content\">\n<p>This code is incorrect. Alter the code so that it runs without error and prints your name.</p>\n<div class=\"cell tag_remove-output docutils container\">\n<div class=\"cell_input docutils container\">\n<div class=\"highlight-C++ notranslate\"><div class=\"highlight\"><pre><span></span><span class=\"n\">include</span><span class=\"w\"> </span><span class=\"s\">\"iostreams\"</span>\n<span class=\"n\">main</span><span class=\"p\">(){</span>\n<span class=\"n\">cout</span><span class=\"w\"> </span><span class=\"o\">&lt;&lt;</span><span class=\"w\"> </span><span class=\"s\">\"my name is, </span><span class=\"se\">\\n</span><span class=\"s\">\"</span>\n<span class=\"k\">return</span><span class=\"w\"> </span><span class=\"s\">\"Peter\"</span><span class=\"p\">;</span>\n<span class=\"p\">}</span>\n</pre></div>\n</div>\n</div>\n</div>\n<div class=\"solution hint dropdown admonition\" id=\"solutionaa2\">\n<p class=\"admonition-title\">Solution to<a class=\"reference internal\" href=\"#exerciseaa2\"> Exercise 3</a></p>\n<section id=\"solution-content\">\n<div class=\"highlight-cpp notranslate\"><div class=\"highlight\"><pre><span></span><span class=\"cp\">#include</span><span class=\"w\"> </span><span class=\"cpf\">&lt;iostream&gt;</span>\n<span class=\"kt\">int</span><span class=\"w\"> </span><span class=\"nf\">main</span><span class=\"p\">()</span>\n<span class=\"p\">{</span>\n<span class=\"w\">\t</span><span class=\"n\">std</span><span class=\"w\"> </span><span class=\"o\">::</span><span class=\"w\"> </span><span class=\"n\">cout</span><span class=\"w\"> </span><span class=\"o\">&lt;&lt;</span><span class=\"w\"> </span><span class=\"s\">\"Hello, World!</span><span class=\"se\">\\n</span><span class=\"s\">\"</span><span class=\"p\">;</span>\n<span class=\"w\">\t</span><span class=\"k\">return</span><span class=\"w\"> </span><span class=\"mi\">0</span><span class=\"p\">;</span>\n<span class=\"p\">}</span>\n</pre></div>\n</div>\n</section>\n</div>\n</section>\n</div>", "a[href=\"#exercise-1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Exercise 1<a class=\"headerlink\" href=\"#exercise-1\" title=\"Link to this heading\">#</a></h1>"}
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
