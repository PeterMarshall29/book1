selector_to_html = {"a[href=\"#exercises-1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Exercises 1<a class=\"headerlink\" href=\"#exercises-1\" title=\"Permalink to this heading\">#</a></h1><p>Add practice using comments</p>", "a[href=\"#exercisex11\"]": "<div class=\"exercise dropdown admonition\" id=\"exercisex11\">\n<p class=\"admonition-title\"><span class=\"caption-number\">Exercise 18 </span></p>\n<section id=\"exercise-content\">\n<p>Write a program to print the following message in the terminal.</p>\n<p>Welcome to Loughborough!<br/>\n//\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014-<br/>\nThis is Compuational Physics - Part A.</p>\n<div class=\"cell tag_remove-output docutils container\">\n<div class=\"cell_input docutils container\">\n<div class=\"highlight-C++ notranslate\"><div class=\"highlight\"><pre><span></span><span class=\"n\">Code</span><span class=\"w\"> </span><span class=\"n\">goes</span><span class=\"w\"> </span><span class=\"n\">here</span><span class=\"p\">...</span>\n</pre></div>\n</div>\n</div>\n</div>\n</section>\n</div>"}
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
