selector_to_html = {"a[href=\"#numeric-data-types\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Numeric Data Types<a class=\"headerlink\" href=\"#numeric-data-types\" title=\"Link to this heading\">#</a></h1><h2>Floating Point Literals<a class=\"headerlink\" href=\"#floating-point-literals\" title=\"Link to this heading\">#</a></h2><p>By default, a floating-point literal is of type double. Again, a compiler ought to warn about floating-\npoint literals that are too large to be represented. Here are some floating-point literals:\n1.23 .23 0.23 1. 1.0 1.2e10 1.23e\u221215\nNote that a space cannot occur in the middle of a floating-point literal. For example, 65.43 e\u221221 is not a floating-point literal but rather four separate lexical tokens (causing a syntax error):\n65.43 e \u2212 21\nIf you want a floating-point literal of type float, you can define one using the suffix f or F:\n3.14159265f 2.0f 2.997925F 2.9e\u22123f\nIf you want a floating-point literal of type long double, you can define one using the suffix l or L:\n3.14159265L 2.0L 2.997925L 2.9e\u22123L</p>", "a[href=\"#sizeof\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">Sizeof()</span></code><a class=\"headerlink\" href=\"#sizeof\" title=\"Link to this heading\">#</a></h2><p>Some implementation-defined aspects of fundamental types can be found by a simple use of sizeof, and more can be found in <limits>. For example:\n//#include <limits>\nint main()\n{\nstd::cout &lt;&lt; \u201csize of long \u201c &lt;&lt; sizeof(1L) &lt;&lt; \u2018\\n\u2019;\nstd::cout &lt;&lt; \u201csize of long long \u201c &lt;&lt; sizeof(1LL) &lt;&lt; \u2018\\n\u2019;\nstd::cout &lt;&lt; \u201clargest float == \u201c &lt;&lt; std::numeric_limits<float>::max() &lt;&lt; \u2018\\n\u2019;\nstd::cout &lt;&lt; \u201cchar is signed == \u201c &lt;&lt; std::numeric_limits<char>::is_signed &lt;&lt; \u2018\\n\u2019;\n}\nThe functions in <limits> (\u00a740.2) are constexpr (\u00a710.4) so that they can be used without run-time overhead and in contexts that require a constant expression.</limits></char></float></limits></limits></p>", "a[href=\"#floating-point-literals\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Floating Point Literals<a class=\"headerlink\" href=\"#floating-point-literals\" title=\"Link to this heading\">#</a></h2><p>By default, a floating-point literal is of type double. Again, a compiler ought to warn about floating-\npoint literals that are too large to be represented. Here are some floating-point literals:\n1.23 .23 0.23 1. 1.0 1.2e10 1.23e\u221215\nNote that a space cannot occur in the middle of a floating-point literal. For example, 65.43 e\u221221 is not a floating-point literal but rather four separate lexical tokens (causing a syntax error):\n65.43 e \u2212 21\nIf you want a floating-point literal of type float, you can define one using the suffix f or F:\n3.14159265f 2.0f 2.997925F 2.9e\u22123f\nIf you want a floating-point literal of type long double, you can define one using the suffix l or L:\n3.14159265L 2.0L 2.997925L 2.9e\u22123L</p>"}
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
