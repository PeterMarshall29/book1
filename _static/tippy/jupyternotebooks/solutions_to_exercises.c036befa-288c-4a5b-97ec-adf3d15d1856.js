selector_to_html = {"a[href=\"#solutions-to-exercises\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Solutions to Exercises<a class=\"headerlink\" href=\"#solutions-to-exercises\" title=\"Permalink to this heading\">#</a></h1>", "a[href=\"exercise1.html#exercisex1_1\"]": "<div class=\"exercise admonition\" id=\"exercisex1_1\">\n<p class=\"admonition-title\"><span class=\"caption-number\">Exercise 7 </span></p>\n<section id=\"exercise-content\">\n<p>This code is incorrect. Alter the code so that it runs without error and prints your name.</p>\n<div class=\"cell tag_remove-output docutils container\">\n<div class=\"cell_input docutils container\">\n<div class=\"highlight-C++ notranslate\"><div class=\"highlight\"><pre><span></span><span class=\"n\">include</span><span class=\"w\"> </span><span class=\"s\">\"iostreams\"</span>\n<span class=\"n\">main</span><span class=\"p\">(){</span>\n<span class=\"n\">cout</span><span class=\"w\"> </span><span class=\"o\">&lt;&lt;</span><span class=\"w\"> </span><span class=\"s\">\"my name is, </span><span class=\"se\">\\n</span><span class=\"s\">\"</span>\n<span class=\"k\">return</span><span class=\"w\"> </span><span class=\"s\">\"Peter\"</span><span class=\"p\">;</span>\n<span class=\"p\">}</span>\n</pre></div>\n</div>\n</div>\n</div>\n</section>\n</div>", "a[href=\"exercise2.html#exerciseex2_1\"]": "<div class=\"exercise dropdown admonition\" id=\"exerciseex2_1\">\n<p class=\"admonition-title\"><span class=\"caption-number\">Exercise 14 </span></p>\n<section id=\"exercise-content\">\n<p>Write a program that asks user for a mass, and replies with the energy equivalent of that amount.</p>\n</section>\n</div>"}
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
