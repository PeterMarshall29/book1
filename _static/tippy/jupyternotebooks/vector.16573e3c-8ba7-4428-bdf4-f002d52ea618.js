selector_to_html = {"a[href=\"#vectors\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Vectors<a class=\"headerlink\" href=\"#vectors\" title=\"Link to this heading\">#</a></h1><p>A vector is a sequence of elements that can be accessed by their index\nAdd <vector> to header file. #include <vector></vector></vector></p><p>std::vector<int> v = {1,2,3,4,5 };\nstd::cout &lt;&lt; v[0];\n\u00a0\ncout will not print a whole vector \u2013 but you can index in, and then you are only printing a single integer. Try.\nstd::cout &lt;&lt; v;</int></p>", "a[href=\"#traversing-a-vector\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Traversing a Vector<a class=\"headerlink\" href=\"#traversing-a-vector\" title=\"Link to this heading\">#</a></h2><p>The range for any vector is the halfopen sequence [0 : v.size() ) meaning 0 is included, but the last element is v.size()-1 .</p><p>A \u201crange for loop\u201d uses this halfopen sequence .\n\u00a0\nstd::vector<int> v = { 1,2,3,4,5 };\nv[2] = 5;\nfor (int i : v) std::cout &lt;&lt; i &lt;&lt; \u201c\\n\u201d;</int></p>", "a[href=\"#adding-to-a-vector\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Adding to a Vector<a class=\"headerlink\" href=\"#adding-to-a-vector\" title=\"Link to this heading\">#</a></h2><p>A non-existent element cannot be accessed or assigned to in any type of vector or array.\nWe can append an extra element at the end using the push_back() function.</p><p>std::vector<int> v = { 1,2,3,4,5 };\nv.push_back(17);\nfor (int i : v ) std::cout &lt;&lt; i &lt;&lt;\u201c\\n\u201d;</int></p>", "a[href=\"#iteration-with\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Iteration with<a class=\"headerlink\" href=\"#iteration-with\" title=\"Link to this heading\">#</a></h2><p>TRY to create and change a vector of zeros.</p><p>std::vector<int>  vzeros(6) ;\nstd::vector<int>  v = { 1,2,3,4,5 };\nvzeros[2] = 5;\nfor (int i = 0; i &lt; vzeros.size(); ++i) std::cout &lt;&lt; vz\neros[i] &lt;&lt; i &lt;&lt;\u201c\\n\u201d;</int></int></p>"}
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
                placement: 'auto-start', maxWidth: 500, interactive: false, theme: 'material', duration: [200, 100], delay: [200, 500],

            });
        };
    };
    console.log("tippy tips loaded!");
};
