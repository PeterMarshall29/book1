selector_to_html = {"a[href=\"#arrays-in-c\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Arrays in C++<a class=\"headerlink\" href=\"#arrays-in-c\" title=\"Link to this heading\">#</a></h1><p>C++ also has arrays like swift to an extend,  but c++ arrays must have their size specified in advance \u2013 vector is a more useful type to use usually, but we need to understand the basic arrays also.\nAn array is C++\u2019s fundamental way of representing a sequence of objects in memory. If what you want is a simple fixed-length sequence of objects of a given type in memory, an array is the ideal solution.\nFor every other need, an array has serious problems.\nAn array can be allocated statically, on the stack, and on the free store. For example:\nint a1[10];    // 10 ints in static storage\nvoid f()\n{\nint a2[20];       // 20 ints on the stack\nint* p = new int[40];   // 40 ints on the free store\n// \u2026\n}</p><p>For a type T, T[size] is the type \u2018\u2018array of size elements of type T.\u2019\u2019 The elements are indexed from 0 to size\u22121. For example:\nfloat v[3];   // an array of three floats: v[0], v[1], v[2]\nchar* a[32];  // an array of 32 pointers to char: a[0] \u2026 a[31]\n\u00a0\nYou can access an array using the subscript operator, [ ], or through a pointer (using operator * or operator []). For example:\nvoid f()\n{\nint aa[10];\naa[6] = 9;   // assign to aa\u2019s 7th element\nint x = aa[99]; // undefined behavior\n}\nAccess out of the range of an array is undefined and usually disastrous. In particular, run-time range checking is neither guaranteed nor common.\nThe number of elements of the array, the array bound, must be a constant expression. If you need variable bounds, use a vector . For example:\nvoid f(int n)\n{\nint v1[n];     // error: array size not a constant expression\nvector<int> v2(n); // OK: vector with n int elements\n}</int></p>", "a[href=\"#multidimenstional-arrays\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Multidimenstional Arrays<a class=\"headerlink\" href=\"#multidimenstional-arrays\" title=\"Link to this heading\">#</a></h2><p>int main() {\n// creating 2d and 3d array\nint arr1[2][4];\nint arr2[2][4][8];</p>", "a[href=\"#passing-arrays\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Passing Arrays<a class=\"headerlink\" href=\"#passing-arrays\" title=\"Link to this heading\">#</a></h2><p>Arrays cannot directly be passed by value. Instead, an array is passed as a pointer to its first element. For example:\nvoid comp(double arg[10]) // arg is a double*\n{\nfor (int i = 0; i != 10; ++i)\narg[i] += 99;\n}\nvoid f()\n{\ndouble a1[10];\ndouble a2[5];\ndouble a3[100];\ncomp(a1);\ncomp(a2); // disaster!\ncomp(a3); // uses only the first 10 elements\n};\nThis code looks sane, but it is not. The code compiles, but the call comp(a2) will write beyond the bounds of a2. Also, anyone who guessed that the array was passed by value will be disappointed: the writes to arg[i] are writes directly to the elements of comp()\u2019s argument, rather than to a copy.\nThe function could equivalently have been written as\nvoid comp(double* arg)\n{\nfor (int i = 0; i != 10; ++i)\narg[i] += 99;\n}\nNow the insanity is (hopefully) obvious. When used as a function argument, the first dimension of an array is simply treated as a pointer. Any array bound specified is simply ignored. This implies that if you want to pass a sequence of elements without losing size information, you should not pass a built-in array. Instead, you can place the array inside a class as a member (as is done for std::array) or define a class that acts as a handle (as in std::string or std::vector).</p>"}
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
