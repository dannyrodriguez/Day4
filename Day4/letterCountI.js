var letterCountI = function (sen) {
    "use strict";

    var words = sen.toLowerCase().split(" "),  //makes array of words
        dupCounter,
        dups = [],
        allDups = [],
        largest = 0,
        largestIndex = 0,
        i,
        j,
        h;

    for (i = 0; i < words.length; i++) { //loops through words 
        dups = [];
        for (j = 0; j < words[i].length; j++) { //loops through the letters in each word
            dupCounter = 1;
            for (h = (j + 1) ; h < words[i].length; h++) { //checks all leters after letter j for duplicates
                if (words[i][j] === words[i][h]) {
                    dupCounter += 1;
                }
            }
            dups.push(dupCounter);
        }
        allDups[i] = dups.sort(function (a, b) { return a - b }).pop();
    }
    
    for (i = 0; i < allDups.length; i++) {
        if (allDups[i] > largest) {
            largest = allDups[i];
            largestIndex = i;
        }
    }
    if (words[largestIndex] === 1) {
        return -1;
    }
    else {
        return (words[largestIndex]);
    }
    alert("The most duplicate letters are in the word " + words[largestIndex]);
}

//letterCountI("aa bbb cccc");