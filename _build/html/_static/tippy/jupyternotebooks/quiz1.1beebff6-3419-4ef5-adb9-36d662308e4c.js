selector_to_html = {"a[href=\"#quizzes\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Quizzes<a class=\"headerlink\" href=\"#quizzes\" title=\"Permalink to this heading\">#</a></h1><h2>Quiz 1<a class=\"headerlink\" href=\"#quiz-1\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#quiz-2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Quiz 2<a class=\"headerlink\" href=\"#quiz-2\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#quiz-1\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Quiz 1<a class=\"headerlink\" href=\"#quiz-1\" title=\"Permalink to this heading\">#</a></h2>"}
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
