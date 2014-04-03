var arithGeo = function(arr) {
    "use strict";
    
    var i,
        result = -1,
        arithTest = true,
        geoTest,
        numbers = arr,
        arithCheck = numbers[1] - numbers[0],
        geoCheck = numbers[1] / numbers[0];

    for (i = 0; i < (numbers.length - 2); i++) {
        if (arithCheck === (numbers[i + 2] - numbers[i + 1])) {
            arithTest = true;
        }
        else {
            arithTest = false;
            break;
        }
    }

    for (i = 0; i < (numbers.length - 2) ; i++) {
        if (geoCheck === (numbers[i + 2] / numbers[i + 1])) {
            geoTest = true;
        }
        else {
            geoTest = false;
            break;
        }
    }

    if (arithTest === true) {
        result = "Arithmetic";
    }
    else if (geoTest === true) {
        result = "Geometric";
    }

    alert("Your array is: " + result);
}

//arithGeo([2, 6, 18, 54, 8]);