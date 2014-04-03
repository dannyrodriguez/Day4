var combine = function(a) {
    "use strict";

    var all = [],
        i,
        fn = function (n, src, got, all) {
            var j;

            if (n === 0) {
                if (got.length > 0) {
                    all[all.length] = got;
                }
                return;
            }
            for (j = 0; j < src.length; j++) {
                fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
            }
            return;
        }

    for (i=0; i < a.length; i++) {
        fn(i, a, [], all);
    }
    all.push(a);
    return all;
}

