selector_to_html = {"a[href=\"#computer-programs\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Computer Programs<a class=\"headerlink\" href=\"#computer-programs\" title=\"Link to this heading\">#</a></h2><p>Computer programs are everywhere - not just inside computers.\nYour digital watch, or calculator, are running embedded computer programs.</p><p>A computer program is a set of instructions that tells a computer (and other devices) what to do. Once a device is programmed, the computer code is invisible.</p>", "a[href=\"#error-types\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Error Types<a class=\"headerlink\" href=\"#error-types\" title=\"Link to this heading\">#</a></h2><p>There are many types of error, but three classifications to understand at this point are:</p>", "a[href=\"#flowcharts\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">FlowCharts<a class=\"headerlink\" href=\"#flowcharts\" title=\"Link to this heading\">#</a></h2><p>Flowcharts are very useful diagrams that assist in design of new programs.</p><p>Flow charts are often used to represent algorithms for a program or for a subroutine (methods/functions).</p>", "a[href=\"#coding-algorithms\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Coding Algorithms<a class=\"headerlink\" href=\"#coding-algorithms\" title=\"Link to this heading\">#</a></h2><p>The first step in writing a computer program is understand the task that we want the computer to perform.</p><p>If you are not able to deconstruc the task into a series of instruction that can be followed then you cannot write a program to accomplish that task.</p>", "a[href=\"#introduction-to-computer-programming\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Introduction to Computer Programming<a class=\"headerlink\" href=\"#introduction-to-computer-programming\" title=\"Link to this heading\">#</a></h1><h2>Computer Programs<a class=\"headerlink\" href=\"#computer-programs\" title=\"Link to this heading\">#</a></h2><p>Computer programs are everywhere - not just inside computers.\nYour digital watch, or calculator, are running embedded computer programs.</p><p>A computer program is a set of instructions that tells a computer (and other devices) what to do. Once a device is programmed, the computer code is invisible.</p>", "a[href=\"https://www.mermaidchart.com/play\"]": "<p>Flowchart Design Tool</p>"}
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
                placement: 'auto-start', maxWidth: 500, interactive: true, theme: 'material', duration: [200, 100], delay: [200, 500],

            });
        };
    };
    console.log("tippy tips loaded!");
};
