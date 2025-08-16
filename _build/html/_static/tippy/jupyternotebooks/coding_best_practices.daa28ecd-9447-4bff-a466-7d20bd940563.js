selector_to_html = {"a[href=\"https://en.wikipedia.org/wiki/Coding_best_practices\"]": "<p><b>Coding best practices</b> or <b>programming best practices</b> are a set of informal, sometimes personal, rules that many software developers, in computer programming follow to improve software quality. Many computer programs require being robust and reliable for long periods of time, so any rules need to facilitate both initial development and subsequent maintenance of source code by people other than the original authors.</p>", "a[href^=\"https://en.wikipedia.org/wiki/Coding_best_practices#\"]": "<p><b>Coding best practices</b> or <b>programming best practices</b> are a set of informal, sometimes personal, rules that many software developers, in computer programming follow to improve software quality. Many computer programs require being robust and reliable for long periods of time, so any rules need to facilitate both initial development and subsequent maintenance of source code by people other than the original authors.</p>", "a[href=\"#expressive-code\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Expressive Code<a class=\"headerlink\" href=\"#expressive-code\" title=\"Link to this heading\">#</a></h2><p>It is tempting to create identifiers using short, even single letter, names - this is a mistake.\nUsing longer identifiers which make the purpose of identified entity clear to anyone reading your code\nModern editors will autocomplete long identifer names - you will not need to keep retying your chosen expressive name.</p>", "a[href=\"#testing\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Testing<a class=\"headerlink\" href=\"#testing\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#commenting\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Commenting<a class=\"headerlink\" href=\"#commenting\" title=\"Link to this heading\">#</a></h2><p>Article on <a class=\"reference external\" href=\"https://en.wikipedia.org/wiki/Coding_best_practices\">coding best practices.</a></p>", "a[href=\"#best-practices-in-coding\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Best Practices in Coding<a class=\"headerlink\" href=\"#best-practices-in-coding\" title=\"Link to this heading\">#</a></h1><p>The aim of any programmer should be to write programs with code that is easy to maintain and easy for other programmers to reuse.</p><p>Badly written code is:</p>"}
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
                placement: 'auto-start', maxWidth: 500, interactive: true, theme: 'material', duration: [200, 100], delay: [200, 500],

            });
        };
    };
    console.log("tippy tips loaded!");
};
