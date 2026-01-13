selector_to_html = {"a[href=\"#virtual-destructors\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Virtual Destructors<a class=\"headerlink\" href=\"#virtual-destructors\" title=\"Permalink to this heading\">#</a></h2><p>Destructors can be virutal - best practice is to make the base destructor virtual in any case involving polymorphism.</p><p>If a virtual function is used anywhere in the class hierarchy a virtual destructor should be added to prevent memory leaks.</p>", "a[href=\"#inheritance-derived-classes\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Inheritance - Derived Classes<a class=\"headerlink\" href=\"#inheritance-derived-classes\" title=\"Permalink to this heading\">#</a></h1><p>A <strong>derived class</strong> (or sub-class) is a new class that inherits properties from a <strong>base Class</strong>.\nClasses are described as base classes (or super-classes) when other classess are derived from them.</p><p>Using derived class creates a hierarchical relationship between a group of classes.  For example we could define the class <code class=\"docutils literal notranslate\"><span class=\"pre\">Mammal</span></code> and the class <code class=\"docutils literal notranslate\"><span class=\"pre\">Insect</span></code> to share properties of the class <code class=\"docutils literal notranslate\"><span class=\"pre\">Animal</span></code>.</p>", "a[href=\"#override\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Override<a class=\"headerlink\" href=\"#override\" title=\"Permalink to this heading\">#</a></h2><p><code class=\"docutils literal notranslate\"><span class=\"pre\">override</span></code> is used to designate a member function that overrides a virtual function in a base class.</p><p><code class=\"docutils literal notranslate\"><span class=\"pre\">override</span></code> is a reserved keyword when used immediately after a member function declaration.</p>", "a[href=\"#virtual-functions\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Virtual Functions<a class=\"headerlink\" href=\"#virtual-functions\" title=\"Permalink to this heading\">#</a></h2><p>Virtual functions  allows the programmer to declare functions in a base class that can be redefined in each derived class.</p><p>Declaring a particular function as virtual in the base class allows that function identifier to act as an interface to the definitions of the function in both the base and derived classes. The compiler and linker will guarantee the correct correspondence between objects and the functions applied to them.</p>", "a[href=\"#inheriting-constructors\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Inheriting Constructors<a class=\"headerlink\" href=\"#inheriting-constructors\" title=\"Permalink to this heading\">#</a></h2><p>Constructors cannot be virtual - they have different days in every class.</p><p>Derived classes can inherit the base class\u2019s constructors if a using directive is declared as follows:</p>"}
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
