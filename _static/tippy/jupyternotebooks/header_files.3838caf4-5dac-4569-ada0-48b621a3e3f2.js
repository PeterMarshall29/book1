selector_to_html = {"a[href=\"#header-files\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Header Files<a class=\"headerlink\" href=\"#header-files\" title=\"Link to this heading\">#</a></h1><p>Sometime a pcp.h will be created in the project \u2013 this is a precompiled header file.\nTo create your own header file. Click in headers, new module, header file.\nThe new file will contain, #pragma once, which is an instruction that this file is only compiled the first time it is used, saving time in future builds.\nNow add:\n#include <iostream>\n#include <string>\n#include <vector>\n#include <algorithm>\n#include <cmath>\nAnd replace  #include <iostream> with  #include #include \u201cMyHeader.h\u201d.</iostream></cmath></algorithm></vector></string></iostream></p>"}
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
                placement: 'auto-start', maxWidth: 500, interactive: false, theme: 'light',

            });
        };
    };
    console.log("tippy tips loaded!");
};
