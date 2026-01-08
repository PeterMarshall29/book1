selector_to_html = {"a[href=\"#classes-in-c\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Classes in C++<a class=\"headerlink\" href=\"#classes-in-c\" title=\"Permalink to this heading\">#</a></h1><p>A class is a user-defined type, consisting of a set of members. The most common members are \u201cdata members\u201d (variables) and \u201cmember functions\u201d, followed by operators and some other language features.</p><p>Member functions can define the meaning of initialization (creation), copy, move, and cleanup (destruction).\nMembers are accessed using . (dot) for objects and <code class=\"docutils literal notranslate\"><span class=\"pre\">\u2212&gt;</span></code> (arrow) for pointers.\nOperators, such as <code class=\"docutils literal notranslate\"><span class=\"pre\">+</span></code>, <code class=\"docutils literal notranslate\"><span class=\"pre\">!</span></code>, and <code class=\"docutils literal notranslate\"><span class=\"pre\">[]</span></code>, can be defined for a class.</p>", "a[href=\"#checking-for-valid-initialsiation-values\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Checking for valid Initialsiation values<a class=\"headerlink\" href=\"#checking-for-valid-initialsiation-values\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#default-member-values\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Default Member Values<a class=\"headerlink\" href=\"#default-member-values\" title=\"Permalink to this heading\">#</a></h2><p>Class declarations may include intialisation of data members (non-static only), the values are then defaul values for an instances of the class.</p>", "a[href=\"#static-data-members\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Static Data Members<a class=\"headerlink\" href=\"#static-data-members\" title=\"Permalink to this heading\">#</a></h2><p>When a date member is declared as <code class=\"docutils literal notranslate\"><span class=\"pre\">static</span></code> there is a single copy of that member, which is shared by all instances of that class i.e. change it once, change it everywhere!</p><p>Static member declarations cannot contain an initialiser i.e. a default value cannot be assigned in the declaration.</p>", "a[href=\"#default-constructors\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Default Constructors<a class=\"headerlink\" href=\"#default-constructors\" title=\"Permalink to this heading\">#</a></h2><p>A Default constructor usually has no parameters.</p>", "a[href=\"#member-intialiser-lists\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Member Intialiser Lists<a class=\"headerlink\" href=\"#member-intialiser-lists\" title=\"Permalink to this heading\">#</a></h2><p>The preferred way to write a contstuctor is to add include a <code class=\"docutils literal notranslate\"><span class=\"pre\">term</span></code>{member intialiser list}, which initialise class data members before the body of the constuctor is evaluated.</p>", "a[href=\"#default-copying\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Default Copying<a class=\"headerlink\" href=\"#default-copying\" title=\"Permalink to this heading\">#</a></h2><p>By default, objects can be copied. Aclass object can be initialized with a copy of an object of its class. For example:</p>"}
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
