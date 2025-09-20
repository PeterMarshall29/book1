selector_to_html = {"a[href=\"#empty-arrays-advanced\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Empty Arrays - Advanced<a class=\"headerlink\" href=\"#empty-arrays-advanced\" title=\"Permalink to this heading\">#</a></h2><p>The size of an array cannot be changed after it is declared.</p><p>In cases where the size of the array is not determined until run time, but you need a placeholder to avoid uninitialized pointers.</p>", "a[href=\"#passing-arrays\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Passing Arrays<a class=\"headerlink\" href=\"#passing-arrays\" title=\"Permalink to this heading\">#</a></h2><p>Arrays cannot passed by value i.e. they may not be used as arguments in a function call. Instead, an array is passed as a pointer to its first element. For example:</p>", "a[href=\"#multidimensional-arrays\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Multidimensional Arrays<a class=\"headerlink\" href=\"#multidimensional-arrays\" title=\"Permalink to this heading\">#</a></h2><p>Multidimensional Arrays can also be created - A 2D array is an array of arrays.</p>", "a[href=\"#arrays-in-c\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Arrays in C++<a class=\"headerlink\" href=\"#arrays-in-c\" title=\"Permalink to this heading\">#</a></h1><p>All computing langugaes use containers to collect multiple elements together into a single object, e.g. collecting a list of 5 numbers under a single variable named \u2018myList\u2019.</p><p>An array is the C++ fundamental method for representing a sequence of objects in memory, part of the core language.</p>", "a[href=\"#array-to-pointer-decay\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Array-to-pointer decay<a class=\"headerlink\" href=\"#array-to-pointer-decay\" title=\"Permalink to this heading\">#</a></h2><p>There is an implicit conversion from lvalues and rvalues of array type to rvalues of pointer type: it constructs a pointer to the first element of an array. This conversion is used whenever arrays appear in context where arrays are not expected, but pointers are:</p><p>when array-to-pointer decay is applied, a multidimensional array is converted to a pointer to its first element (e.g., a pointer to its first row or to its first plane): array-to-pointer decay is applied only once.</p>"}
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
