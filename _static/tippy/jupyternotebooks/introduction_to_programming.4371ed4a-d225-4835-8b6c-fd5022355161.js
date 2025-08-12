selector_to_html = {"a[href=\"#coding-algorithms\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Coding Algorithms<a class=\"headerlink\" href=\"#coding-algorithms\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#error-types\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Error Types<a class=\"headerlink\" href=\"#error-types\" title=\"Link to this heading\">#</a></h2><p>There are many types of error, but three classifications to understand at this point are:</p>", "a[href=\"#introduction-to-computer-programming\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Introduction to Computer Programming<a class=\"headerlink\" href=\"#introduction-to-computer-programming\" title=\"Link to this heading\">#</a></h1><p>Start with ideas like syntax\u2026</p>"}
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
