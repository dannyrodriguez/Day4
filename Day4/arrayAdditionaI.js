var combine = function (a) {
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

    for (i = 0; i < a.length; i++) {
        fn(i, a, [], all);
    }
    all.push(a);
    return all;
}

var arrAddition = function (arr) {
    var numbers = arr,
        largestNum = numbers.sort(function (a, b) { return a - b }).pop(),
        sumNums = 0,
        i,
        j,
        result = false,
        combinations = combine(numbers);


    for (i = 0; i < combinations.length; i++) {
        sumNums = 0; 
        for (j = 0; j < combinations[i].length; j++){
            sumNums += combinations[i][j];
            
        }
        if (sumNums === largestNum) {
            result = true;
            break;
        }
        
    }
    alert(result);
}
arrAddition([5, 7, 16, 1, 2])