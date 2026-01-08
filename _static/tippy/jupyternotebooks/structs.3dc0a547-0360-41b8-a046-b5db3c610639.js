selector_to_html = {"a[href=\"#static-members-functions-called-with-stuct-type-name-not-instance-name\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Static members functions \u2013 called with stuct type name not instance name.<a class=\"headerlink\" href=\"#static-members-functions-called-with-stuct-type-name-not-instance-name\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#adding-arithmetic-functions\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Adding arithmetic functions<a class=\"headerlink\" href=\"#adding-arithmetic-functions\" title=\"Permalink to this heading\">#</a></h2><p>These can be written in a neater fashion using <code class=\"docutils literal notranslate\"><span class=\"pre\">this</span></code>, which is a pointer to the instance that the member functions and members belong to.</p>", "a[href=\"#structs-in-c\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Structs in C++<a class=\"headerlink\" href=\"#structs-in-c\" title=\"Permalink to this heading\">#</a></h1><p>Creating a Rational Number Struct.\nStructs is a user-defined type, and a subset of classes.</p><p>Structs are useful for gathering related variables together into a sequence of arbitrary types called the members of the struct.\nWhen a struct is declared a new type is created i.e. declaring a struct called <code class=\"docutils literal notranslate\"><span class=\"pre\">Date</span></code> creates a type called <code class=\"docutils literal notranslate\"><span class=\"pre\">Date</span></code>.\nCreating a new variable of type <code class=\"docutils literal notranslate\"><span class=\"pre\">Date</span></code> creates an instance of the struct.\nThe individual members of each instance of <code class=\"docutils literal notranslate\"><span class=\"pre\">Date</span></code> are then accessed using the instance name attached to the member name by a period <code class=\"docutils literal notranslate\"><span class=\"pre\">.</span></code>.\nStucts, like most types, can be passed into and returned from functions, by value and by reference, or by using a pointer.\nThe members of a struct are held in the order of declaration, so list initialisation is possible.\nNote: <code class=\"docutils literal notranslate\"><span class=\"pre\">size0f()</span></code> does not work the same for stucts, because of memory layout issues with structs that vary between architectures and implementations.\nIt is best to order members in a struct in size order i.e. largest member first e.g. doubles then ints then chars etc.\nA struct is declared as follows:</p>"}
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
