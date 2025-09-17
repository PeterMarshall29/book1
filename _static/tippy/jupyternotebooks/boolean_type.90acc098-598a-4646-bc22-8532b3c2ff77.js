selector_to_html = {"a[href=\"#pointers-converting-to-booleans\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Pointers Converting to Booleans<a class=\"headerlink\" href=\"#pointers-converting-to-booleans\" title=\"Permalink to this heading\">#</a></h2><p>A pointer can be implicitly converted to a <code class=\"docutils literal notranslate\"><span class=\"pre\">bool</span></code>. A non-null pointer converts to <code class=\"docutils literal notranslate\"><span class=\"pre\">true</span></code>; pointers with the value <code class=\"docutils literal notranslate\"><span class=\"pre\">nullptr</span></code> convert to <code class=\"docutils literal notranslate\"><span class=\"pre\">false</span></code>. For example:</p>", "a[href=\"#boolean-data-type\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Boolean Data Type<a class=\"headerlink\" href=\"#boolean-data-type\" title=\"Permalink to this heading\">#</a></h1><p>Generally, you will only need to use bool for logical values, char for characters, int for integer values, and double for floating-point values.</p><p>Unless you are pushing the computer to its limits, you don\u2019t need to worry about optimisation quite so much these days, and especially when just starting out.</p>"}
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
