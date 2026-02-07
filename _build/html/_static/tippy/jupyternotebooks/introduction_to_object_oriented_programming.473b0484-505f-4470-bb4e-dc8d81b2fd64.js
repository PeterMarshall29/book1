selector_to_html = {"a[href=\"glossary.html#term-Encapsulation\"]": "<dt id=\"term-Encapsulation\">Encapsulation</dt><dd><p>The enforcement of abstraction by mechanisms that prevent access to implementation details of an object, or a group of objects, except through a well-defined <a class=\"reference internal\" href=\"#term-Interface\"><span class=\"xref std std-term\">interface</span></a>. C++ enforces encapsulation of private and protected members of a class provided that users do not violate the type system using casts.</p></dd>", "a[href=\"#creating-an-interface-file\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Creating an Interface file<a class=\"headerlink\" href=\"#creating-an-interface-file\" title=\"Permalink to this heading\">#</a></h2><p>The interface file may be included in multiple compilation files, which will cause a compiler error unless handled correctly.</p><p>To avoid this problem the interface file containing the class definition should contain the following preprocessor directives.</p>", "a[href=\"#oop\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">OOP<a class=\"headerlink\" href=\"#oop\" title=\"Permalink to this heading\">#</a></h1><p>Programs are written to solve specific problems, and for all but the simplest tasks, we can take different approaches, each potentially offering benefits over the others.</p><p>Before the implementation of the basic syntactic statements, we can take different approaches to the overall design of any program.</p>", "a[href=\"#encapsulation\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Encapsulation<a class=\"headerlink\" href=\"#encapsulation\" title=\"Permalink to this heading\">#</a></h3><p>The purpose of separate compilations is to allow <a class=\"reference internal\" href=\"glossary.html#term-Encapsulation\"><span class=\"xref std std-term\">encapsulation</span></a>, which is the separation of the design of the class from the use of the class.</p><p>Encapsulation is the process of wrapping data and the methods into a single unit, usually a class, for the purpose of preventing that data being accessed by external code i.e. code outside the encapsulation (the class).</p>", "a[href=\"#file-management-best-practice-in-oop\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">File Management - Best Practice in OOP<a class=\"headerlink\" href=\"#file-management-best-practice-in-oop\" title=\"Permalink to this heading\">#</a></h2><p>Best practice for writing an object-oriented program in C++ is to split your code into three sections, and to place each section in a separate file:</p>"}
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
