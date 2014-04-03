var letterCountI = function (sen) {
    "use strict";

    var words = sen.toLowerCase().split(" "),  //makes array of words
        dupCounter,
        dups = [],
        allDups = [];

    for (var i = 0; i < words.length; i++) { //loops through words 
        dups = [];
        for (var j = 0; j < words[i].length; j++) { //loops through the letters in each word
            dupCounter = 1;
            for (var h = (j + 1) ; h < words[i].length; h++) {
                if (words[i][j] === words[i][h]) {
                    dupCounter += 1;
                }
            }
            dups.push(dupCounter);
        }
        allDups[i] = dups.sort(function (a, b) { return a - b }).pop();
    }
    var largest = 0;
    var largestIndex = 0;
    for (i = 0; i < allDups.length; i++) {
        if (allDups[i] > largest) {
            largest = allDups[i];
            largestIndex = i;
        }
    }
    alert("The most duplicate letters are in the word " + words[largestIndex]);
}

letterCountI("qqqqqqqqqqq one tttt two");