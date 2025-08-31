selector_to_html = {"a[href=\"#multi-dimensional-vectors\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Multi-dimensional Vectors<a class=\"headerlink\" href=\"#multi-dimensional-vectors\" title=\"Permalink to this heading\">#</a></h2><p>We can define a vector of vectors.</p>", "a[href=\"#vectors\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Vectors<a class=\"headerlink\" href=\"#vectors\" title=\"Permalink to this heading\">#</a></h1><p>There are several way to store multiple values in a single variable. <vector>, <array>, and built-in arrays.</array></vector></p><p>The <vector> library provides the most flexible method.</vector></p>", "a[href=\"#accessing-or-modifying-the-elements-of-a-vector\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Accessing or Modifying the Elements of a <code class=\"docutils literal notranslate\"><span class=\"pre\">vector</span></code><a class=\"headerlink\" href=\"#accessing-or-modifying-the-elements-of-a-vector\" title=\"Permalink to this heading\">#</a></h2><p>To access or modify a vector\u2019s elements we use the index notation, or the at() function.</p>", "a[href=\"#adding-to-a-vector\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Adding to a Vector<a class=\"headerlink\" href=\"#adding-to-a-vector\" title=\"Permalink to this heading\">#</a></h2><p>A non-existent element cannot be accessed or assigned to in any type of vector or array.</p>", "a[href=\"#check-if-a-vector-is-empty\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Check if a Vector is Empty<a class=\"headerlink\" href=\"#check-if-a-vector-is-empty\" title=\"Permalink to this heading\">#</a></h2><p>Another useful member function checks whether a vector is empty or not.</p><p>The <code class=\"docutils literal notranslate\"><span class=\"pre\">empty()</span></code> function returns 1 (true) if the vector is empty and 0 (false) if it contains one or more elements:</p>"}
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
