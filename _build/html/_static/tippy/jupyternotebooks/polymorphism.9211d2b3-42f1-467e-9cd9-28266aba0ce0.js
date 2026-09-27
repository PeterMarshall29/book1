selector_to_html = {"a[href=\"#polymorphism\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Polymorphism<a class=\"headerlink\" href=\"#polymorphism\" title=\"Permalink to this heading\">#</a></h1><p>Polymorphism makes it possible to write several versions of the same function each in a different class - considered to be one of the main pillars of object-oriented programming.</p><p>Implementation inheritance, or run-time polymorphism, reduces effort in implementation by sharing facilities provided by a base class.</p>", "a[href=\"#binding\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Binding<a class=\"headerlink\" href=\"#binding\" title=\"Permalink to this heading\">#</a></h2><p>Compilers convert your C++ text files into machine language - each line of machine language has it\u2019s a unique sequential address.</p><p>Functions then are identified by a unique address. When the program arrives at a function call, the compiler must add a line of machine language dealing with the call.</p>"}
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
