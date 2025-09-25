selector_to_html = {"a[href=\"#string-type\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">String Type<a class=\"headerlink\" href=\"#string-type\" title=\"Permalink to this heading\">#</a></h2><p>A <code class=\"docutils literal notranslate\"><span class=\"pre\">string</span></code> is variable of type \u2018string\u2019 which is composed of a series of character literals bracketed by a pair of double quote marks <code class=\"docutils literal notranslate\"><span class=\"pre\">\"</span> <span class=\"pre\">\"</span></code>.</p><p>The standard library component <code class=\"docutils literal notranslate\"><span class=\"pre\">&lt;string&gt;</span></code> define strings and the operations and functions that work with string-type variables.</p>", "a[href=\"#converting-int-to-string\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Converting <code class=\"docutils literal notranslate\"><span class=\"pre\">int</span></code> to <code class=\"docutils literal notranslate\"><span class=\"pre\">string</span></code><a class=\"headerlink\" href=\"#converting-int-to-string\" title=\"Permalink to this heading\">#</a></h2><p>Strings and integers can be printed to the character outputs stream, using separate insertion operations, but integers cannot be concatenated with strings to create a single string.</p>", "a[href=\"#formating-the-ouput\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Formating the Ouput<a class=\"headerlink\" href=\"#formating-the-ouput\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#character-data-types\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Character Data Types<a class=\"headerlink\" href=\"#character-data-types\" title=\"Permalink to this heading\">#</a></h2><p>In C++ there are a range of character sets and character set encodings available. Char variables are represented by 8 bits, which puts a limit on the character set of 256 items.</p><p>The basic, and default character type is <code class=\"docutils literal notranslate\"><span class=\"pre\">char</span></code>. There will be no immediate need to investigate any others.</p>", "a[href=\"#characters-and-strings\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Characters and Strings<a class=\"headerlink\" href=\"#characters-and-strings\" title=\"Permalink to this heading\">#</a></h1><h2>Character Data Types<a class=\"headerlink\" href=\"#character-data-types\" title=\"Permalink to this heading\">#</a></h2><p>In C++ there are a range of character sets and character set encodings available. Char variables are represented by 8 bits, which puts a limit on the character set of 256 items.</p><p>The basic, and default character type is <code class=\"docutils literal notranslate\"><span class=\"pre\">char</span></code>. There will be no immediate need to investigate any others.</p>", "a[href=\"glossary.html#term-Null-Character\"]": "<dt id=\"term-Null-Character\">Null Character</dt><dd><p>The null character is a control character represented by escape sequence \u2018\\0\u2019 that has an integer value of 0. May be used to signify the end of a string in C-style strings (character arrays). \u2018\\0\u2019 is a character literal with a value of 0. Can also represent the <code class=\"docutils literal notranslate\"><span class=\"pre\">nullptr</span></code> for comparison expressions. The null character is stored as a byte (8 bits) with all bits set to zero.</p></dd>"}
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
