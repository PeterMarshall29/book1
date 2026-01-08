selector_to_html = {"a[href=\"#classes-in-c\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Classes in C++<a class=\"headerlink\" href=\"#classes-in-c\" title=\"Permalink to this heading\">#</a></h1><p>A class is a user-defined type, consisting of a set of members.</p><p>Members are either \u201cdata members\u201d or \u201cmember functions\u201d.</p>", "a[href=\"#default-copying\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Default Copying<a class=\"headerlink\" href=\"#default-copying\" title=\"Permalink to this heading\">#</a></h2><p>By default, objects can be copied. Aclass object can be initialized with a copy of an object of its class. For example:</p>"}
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
