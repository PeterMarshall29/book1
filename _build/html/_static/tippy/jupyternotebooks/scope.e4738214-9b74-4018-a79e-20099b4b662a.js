selector_to_html = {"a[href=\"#shadowing\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Shadowing<a class=\"headerlink\" href=\"#shadowing\" title=\"Permalink to this heading\">#</a></h2><p>It is usually possible to use the same name more than once, provided each declaration has different scope.</p><p>An exception is the loop variable in a <code class=\"docutils literal notranslate\"><span class=\"pre\">for</span></code> loop. Another type with the s</p>", "a[href=\"#scope\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Scope<a class=\"headerlink\" href=\"#scope\" title=\"Permalink to this heading\">#</a></h1><p>Different distinguishable parts of a programs structure are called scopes.</p><p>The location of a declaration introduces the name into the scope at that location.</p>", "a[href=\"#declaration-good-practice\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Declaration Good Practice<a class=\"headerlink\" href=\"#declaration-good-practice\" title=\"Permalink to this heading\">#</a></h2><p>Before the <code class=\"docutils literal notranslate\"><span class=\"pre\">main()</span></code> function put:</p>", "a[href=\"#scoping-rules-and-exceptions\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Scoping Rules and Exceptions<a class=\"headerlink\" href=\"#scoping-rules-and-exceptions\" title=\"Permalink to this heading\">#</a></h2><p>A variable with <a class=\"reference internal\" href=\"glossary.html#term-Global-Scope\"><span class=\"xref std std-term\">global scope</span></a>  Variables declared outside of all functions or classes have global scope. Global variables are accessible throughout the program, unless shadowed by a local variable with the same name. Global variables are best avoided unless necessary because they may result in unintended consequences in execution.</p><p>You need to keep in mind the following rules:</p>", "a[href=\"glossary.html#term-Global-Scope\"]": "<dt id=\"term-Global-Scope\">Global Scope</dt><dd><p>Variables declared outside of all functions or classes have global scope. Global variables are accessible throughout the program, unless shadowed by a local variable with the same name. Global variables are best avoided unless necessary because they may result in unintended consequences in execution.</p></dd>", "a[href=\"#id1\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Scope<a class=\"headerlink\" href=\"#id1\" title=\"Permalink to this heading\">#</a></h2><p>A named object is declared \u201cin scope\u201d. A \u201cscope\u201d is a region of program text, e.g. inside a single function. The object is only valid within that region of the program unless it is defined to have \u201cglobal scope\u201d.\nThe main purpose of a scope is to keep names \u201clocal\u201d, so that they won\u2019t interfere with names declared elsewhere; i.e. same names can be used in different local scopes.</p><p>Try to always use indenting to reinforce scoping changes.\n\u00a0\n\u00a0\nThere are several kinds of scopes that we use to control where our names can\nbe used:\n\u2022 The global scope: the area of text outside any other scope\n\u2022 A namespace scope: a named scope nested in the global scope or in another namespace\n\u2022 A class scope: the area of text within a class\n\u2022 A local scope: between { \u2026 } braces of a block or in a function argument list\n\u2022 A statement scope: e.g., in a for-statement</p>", "a[href=\"glossary.html#term-Shadowing\"]": "<dt id=\"term-Shadowing\">Shadowing</dt><dd><p>For variables with the same name, the inner most scope is dominant, i.e. a local variable is used in preference to a global variable with the same name</p></dd>"}
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
