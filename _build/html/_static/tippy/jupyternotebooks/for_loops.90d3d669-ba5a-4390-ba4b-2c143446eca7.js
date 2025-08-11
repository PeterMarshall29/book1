selector_to_html = {"a[href=\"#for-loops\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">For</span></code> Loops<a class=\"headerlink\" href=\"#for-loops\" title=\"Link to this heading\">#</a></h1><p>The management of what controls the loop happens inside the argument to the for command.\nThe syntax is\n\u201cfor (loop variable definition and initialisation; condition to continue the loop; increment to loop variable instruction) { code to execute}\u201d</p><p>Without the increment, which is not required, the loop just runs forever but you can also affect the condition that is checked every time from inside the code block.</p>", "a[href=\"#requires-vector\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">requires vector<a class=\"headerlink\" href=\"#requires-vector\" title=\"Link to this heading\">#</a></h2><p>TRY to create and change a vector of zeros.</p><p>std::vector<int> vzeros(6) ;\nstd::vector<int> v = { 1,2,3,4,5 };\nvzeros[2] = 5;\nfor (int i = 0; i &lt; vzeros.size(); ++i) std::cout &lt;&lt; vz\neros[i] &lt;&lt; i &lt;&lt;\u201c\\n\u201d;</int></int></p>"}
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
