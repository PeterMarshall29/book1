selector_to_html = {"a[href=\"#exercisex1_4\"]": "<div class=\"exercise admonition\" id=\"exercisex1_4\">\n<p class=\"admonition-title\"><span class=\"caption-number\">Exercise 10 </span></p>\n<section id=\"exercise-content\">\n<p>Rewrite the program to calculate and print the sum of the squares of the postive integrers from one to a user inputted value.\nBut now use the for-statement arguments to make the code block unnecessary.</p>\n</section>\n</div>", "a[href=\"#exercisex1_3\"]": "<div class=\"exercise admonition\" id=\"exercisex1_3\">\n<p class=\"admonition-title\"><span class=\"caption-number\">Exercise 9 </span></p>\n<section id=\"exercise-content\">\n<p>Write a program to calculate and print the sum of the squares of the postive integrers from one to a user inputted value.</p>\n</section>\n</div>", "a[href=\"#exercise-1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Exercise 1<a class=\"headerlink\" href=\"#exercise-1\" title=\"Permalink to this heading\">#</a></h1><p>Add practice using comments</p>", "a[href=\"#exercisex1_2\"]": "<div class=\"exercise admonition\" id=\"exercisex1_2\">\n<p class=\"admonition-title\"><span class=\"caption-number\">Exercise 8 </span></p>\n<section id=\"exercise-content\">\n<p>Write a program to calculate and print to screen the binomial coefficients\nBy definition, the binomial coefficients are calculated as\n$<span class=\"math notranslate nohighlight\">\\(\nC(k,n)= \\frac{n!}{k!(n-k)!} \n\\)</span><span class=\"math notranslate nohighlight\">\\(\nYou should know that \n\\)</span><span class=\"math notranslate nohighlight\">\\(\nC(k,n)=C(n-k,n)\\\\\nC(0,n)=1\\\\\nC(1,n)=n\\\\\nC(2,n)=\\frac{n(n-1)}{2}\nC(k+1,n)=C(k,n)\\cdot\\frac{n-k}{k+1}\n\\)</span>$</p>\n</section>\n</div>"}
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
