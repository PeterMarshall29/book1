selector_to_html = {"a[href=\"#exerciseex52\"]": "<div class=\"exercise dropdown admonition\" id=\"exerciseex52\">\n<p class=\"admonition-title\"><span class=\"caption-number\">Exercise 27 </span></p>\n<section id=\"exercise-content\">\n<p>Write a function that takes two integer values and returns a true is their sum is less than 100\u2026\nWrite a program that calls your function and prints a statement telling the user if their sum is less than 100 or not.</p>\n<div class=\"cell docutils container\">\n<div class=\"cell_input docutils container\">\n<div class=\"highlight-C++ notranslate\"><div class=\"highlight\"><pre><span></span><span class=\"n\">Code</span><span class=\"w\"> </span><span class=\"n\">goes</span><span class=\"w\"> </span><span class=\"n\">here</span><span class=\"p\">....</span>\n</pre></div>\n</div>\n</div>\n<div class=\"cell_output docutils container\">\n<div class=\"output stderr highlight-myst-ansi notranslate\"><div class=\"highlight\"><pre><span></span>C:\\Users\\Peter\\AppData\\Local\\Temp\\tmpf4h_u78c.cpp: In function 'int main()':\nC:\\Users\\Peter\\AppData\\Local\\Temp\\tmpf4h_u78c.cpp:4:1: error: 'Code' was not declared in this scope\n    4 | Code goes here....\n      | ^~~~\n</pre></div>\n</div>\n<div class=\"output stderr highlight-myst-ansi notranslate\"><div class=\"highlight\"><pre><span></span>[C++ kernel] Error: Unable to compile the source code. Return error: 0x1.\n</pre></div>\n</div>\n</div>\n</div>\n</section>\n</div>", "a[href=\"#exercise-5\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Exercise 5<a class=\"headerlink\" href=\"#exercise-5\" title=\"Permalink to this heading\">#</a></h1>", "a[href=\"#exerciseex51\"]": "<div class=\"exercise dropdown admonition\" id=\"exerciseex51\">\n<p class=\"admonition-title\"><span class=\"caption-number\">Exercise 26 </span></p>\n<section id=\"exercise-content\">\n<p>Write a function that takes an integer value and returns one more than that value.\nWrite a program that calls your function and prints both values to the display.</p>\n<div class=\"cell docutils container\">\n<div class=\"cell_input docutils container\">\n<div class=\"highlight-C++ notranslate\"><div class=\"highlight\"><pre><span></span><span class=\"n\">Code</span><span class=\"w\"> </span><span class=\"n\">goes</span><span class=\"w\"> </span><span class=\"n\">here</span><span class=\"p\">....</span>\n</pre></div>\n</div>\n</div>\n<div class=\"cell_output docutils container\">\n<div class=\"output stderr highlight-myst-ansi notranslate\"><div class=\"highlight\"><pre><span></span>C:\\Users\\Peter\\AppData\\Local\\Temp\\tmpvh763t4x.cpp: In function 'int main()':\nC:\\Users\\Peter\\AppData\\Local\\Temp\\tmpvh763t4x.cpp:4:1: error: 'Code' was not declared in this scope\n    4 | Code goes here....\n      | ^~~~\n</pre></div>\n</div>\n<div class=\"output stderr highlight-myst-ansi notranslate\"><div class=\"highlight\"><pre><span></span>[C++ kernel] Error: Unable to compile the source code. Return error: 0x1.\n</pre></div>\n</div>\n</div>\n</div>\n</section>\n</div>"}
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
