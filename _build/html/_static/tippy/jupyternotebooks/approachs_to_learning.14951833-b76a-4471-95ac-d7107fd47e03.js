selector_to_html = {"a[href=\"#the-secret-to-becoming-really-good-at-c-programming\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">The Secret to Becoming Really Good at C++ Programming<a class=\"headerlink\" href=\"#the-secret-to-becoming-really-good-at-c-programming\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#how-to-learn-c\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">How to Learn C++<a class=\"headerlink\" href=\"#how-to-learn-c\" title=\"Permalink to this heading\">#</a></h1><p>There is no big secret to learning C++.</p><p>Computer languages are just complicated sets of instructions. It can be difficult at first to work out what the cppreference website or textbooks are telling you because of the large amount of new vocabulary.</p>", "a[href=\"#growth-mindsets\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Growth Mindsets<a class=\"headerlink\" href=\"#growth-mindsets\" title=\"Permalink to this heading\">#</a></h2><p>Psychologist Carol Dweck developed the theory of the growth and fixed mindsets. People with a growth mindset believe that their abilities, intelligence, and talents can be developed through effort, learning, and persistence. They understand that their brain is akin to a muscled that is strengthened by practice and struggling with new ideas and acivities.</p><p>A fixed mindset believes that you are either good at something or not - this is usually wrong and always self defeating.</p>"}
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
