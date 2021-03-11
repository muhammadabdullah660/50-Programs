// Uppercase or lowercase alphabet
function upperOrLower() {
    var uLC = document.getElementById("uLC").value;
    if (uLC === "") {
        alert("Enter a single character")
    }
    else if (uLC.match(new RegExp(/^[A-Z]+$/))) {
        document.getElementById("uLCR").innerHTML = `${uLC} is Uppercase`;
    }
    else if (uLC.match(new RegExp(/^[a-z]+$/))) {
        document.getElementById("uLCR").innerHTML = `${uLC} is Lowercase`;
    }
    else {
        document.getElementById("uLCR").innerHTML = `${uLC} is not a character`;
    }
}


// Week Day
function weekDay() {
    var dayNum = document.getElementById("dayNum").value;
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var index = 0;
    if (dayNum.match(new RegExp(/^[1-7]+$/))) {
        if (dayNum == 1) {
            index
        }
        else {
            index = dayNum - 1
        }
        var day = days[index];
        console.log(day);
        document.getElementById("dayNumR").innerHTML = `${day} is the day of week`;
    }
    else {
        alert("Invalid day number")
    }

}


// Number of days in a month
function monthDays() {
    var monthNum = document.getElementById("monthNum").value;
    var months = ["January(31 Days)", "February(28/29 Days)", "March(31 Days)", "April(30 Days)", "May(31 Days)", "June(30 Days)", "July(31 Days)", "August(31 Days)", "September(30 Days)", "October(31 Days)", "November(30 Days)", "December(31 Days)"];
    var index = 0;
    if (monthNum.match(new RegExp(/^[1-12]+$/))) {
        if (monthNum == 1) {
            index
        }
        else {
            index = monthNum - 1
        }
        var month = months[index];
        console.log(month);
        document.getElementById("monthNumR").innerHTML = `${month}`;
    }
    else {
        alert("Invalid day number")
    }

}


// Triangle is valid or not(Angles)
function anglesTri() {
    var angle1 = parseInt(document.getElementById("angle1").value)
    var angle2 = parseInt(document.getElementById("angle2").value)
    var angle3 = parseInt(document.getElementById("angle3").value)
    if (angle1 === "" || angle2 === "" || angle3 === "") {
        alert("Enter angle values")
    }
    else if (angle1 + angle2 + angle3 == 180) {
        document.getElementById("anglesTriR").innerHTML = `${angle1},${angle2} and ${angle3} forms a Triangle`
        console.log(`${angle1},${angle2} and ${angle3} forms a Triangle`);
    }
    else {
        document.getElementById("anglesTriR").innerHTML = `${angle1},${angle2} and ${angle3} do not forms a Triangle`
        console.log(`${angle1},${angle2} and ${angle3} do not forms a Triangle`);
    }
}


// Triangle is valid or not(Sides)
function sidesTri() {
    var side1 = parseInt(document.getElementById("side1").value)
    var side2 = parseInt(document.getElementById("side2").value)
    var side3 = parseInt(document.getElementById("side3").value)
    if (side1 === "" || side1 === "" || side1 === "") {
        alert("Enter values of sides")
    }
    else if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
        document.getElementById("sidesTriR").innerHTML = `${side1},${side2} and ${side3} forms a Triangle`
        console.log(`${side1},${side2} and ${side3} forms a Triangle`);
    }
    else {
        document.getElementById("sidesTriR").innerHTML = `${side1},${side2} and ${side3} do not forms a Triangle`
        console.log(`${side1},${side2} and ${side3} do not forms a Triangle`);
    }
}


// Calculate profit or loss
function pL() {
    var CP = parseFloat(document.getElementById("CP").value)
    var SP = parseFloat(document.getElementById("SP").value)
    if (CP > SP) {
        var loss = CP - SP
        document.getElementById("pLR").innerHTML = `Cost Price is ${CP}<br>Sell Price is ${SP}<br>Loss is ${loss}`
    }
    else if (CP < SP) {
        var profit = SP - CP
        document.getElementById("pLR").innerHTML = `Cost Price is ${CP}<br>Sell Price is ${SP}<br>Profit is ${profit}`
    }
    else if (CP == SP) {
        document.getElementById("pLR").innerHTML = `Cost Price is ${CP}<br>Sell Price is ${SP}<br>Neither Profit Nor Loss`
    }
    else {
        alert("Enter Valid Prices")
    }
}


// Search all occurrences of a character
function searchOccur() {
    var sOS = document.getElementById("sOS").value;
    var sOC = document.getElementById("sOC").value;
    var arrS = []
    if (sOS == "" || sOC == "") {
        alert("Enter String Values")
    }
    else {
        let occurrenceS = sOS.indexOf(sOC);
        if (occurrenceS == -1) {
            console.log(`${sOC} does not occur in ${sOS}`);
            document.getElementById("searchOccurR").innerHTML = `${sOC} does not occur in ${sOS}`;
        }
        else {
            for (let index = 0; index < sOS.length; index++) {
                occurrenceS = sOS.indexOf(sOC, index);
                arrS.push(occurrenceS);
            }
            if (arrS.slice(-1) == -1) {
                arrS = arrS.slice(0, -1)
            }
            else {
                arrS = arrS
            }
            arrS = [...new Set(arrS)]
            document.getElementById("searchOccurR").innerHTML = `${sOC} occurs at following indexes in ${sOS} :<br>${arrS}`
            console.log(arrS);
        }
    }
}


// Count occurrences of a character
function countOccur() {
    var cOS = document.getElementById("cOS").value;
    var cOC = document.getElementById("cOC").value;
    if (cOC == "" || cOC == "") {
        alert("Enter String Values")
    }
    else {
        let occurrenceC = cOS.indexOf(cOC);
        if (occurrenceC == -1) {
            console.log(`${cOS} does not occur in ${cOC}`);
            document.getElementById("countOccurR").innerHTML = `${cOS} does not occur in ${cOC}`;
            console.log(occurrenceC);

        }
        else {
            occurrenceC = cOS.match(new RegExp(`${cOC}`, "g")).length
            document.getElementById("countOccurR").innerHTML = `${cOC} occurs ${occurrenceC} times in ${cOS}`
            console.log(`${cOC} occurs ${occurrenceC} times in ${cOS}`);
        }
    }
}


// Multiplication table of any number
function table() {
    var tableNum = parseFloat(document.getElementById("tableNum").value);
    var tableRange = parseFloat(document.getElementById("tableRange").value);
    if (tableNum == "" || tableRange == "") {
        alert("Enter a valid number")
    }
    else {
        document.getElementById("tableNumR").innerHTML = `The table of ${tableNum} upto ${tableRange} is : <br>`
        console.log(`The table of ${tableNum} upto ${tableRange} is :`);
        for (let index = 0; index <= tableRange; index++) {
            tableR = tableNum * index
            console.log(tableR);
            document.getElementById("tableNumR").innerHTML += tableR + "<br>"
        }
    }
}


// Count number of digits in a number
function digitCount() {
    var digitNum = document.getElementById("digitNum").value;
    numMatch = digitNum.match(new RegExp(/^[0-9]+$/))
    if (digitNum == "") {
        alert("Enter Valid Number")
    }
    else {
        var digit = digitNum.length
        if (numMatch) {
            console.log(digit);
        }
        else {
            digit = digit - 1
            console.log(digit);
        }
        console.log(`Number of digits in ${digitNum} is ${digit}`);
        document.getElementById("digitCountR").innerHTML = `Number of digits in ${digitNum} is ${digit}`
    }
}


// First and last digit of a number
function firstAndLast() {
    var fALNum = document.getElementById("fALNum").value;
    var lastdigit = fALNum.charAt(fALNum.length - 1)
    var firstdigit = fALNum.charAt(0)
    if (fALNum == "") {
        alert("Enter a Valid Number")
    }
    else if (firstdigit == ".") {
        firstdigit = 0
        document.getElementById("fALR").innerHTML = `First digit = ${firstdigit} and Last Digit = ${lastdigit}`
        console.log(`First digit = ${firstdigit} and Last Digit = ${lastdigit}`);
    }
}


// Swap first and last digits of a number
function firstAndLastSwap() {
    var fALSNum = document.getElementById("fALSNum").value;
    var newNum
    var lastIndex = fALSNum.length - 1
    // var userDigitF = fALSNum.charAt(0)
    // var userDigitL = fALSNum.charAt(fALSNum.length - 1)
    var firstdigit = fALSNum.charAt(fALSNum.length - 1)
    var lastdigit = fALSNum.charAt(0)
    if (fALSNum == "") {
        alert("Enter a Valid Number")
    }
    else if (lastdigit == ".") {
        lastdigit = 0
        newNum = `${firstdigit} .  ${lastdigit}`
    }
    if (fALSNum >= 0 && fALSNum <= 9) {
        lastdigit = 0
        newNum = firstdigit + fALSNum.slice(1, lastIndex) + "0"
    } else {
        newNum = firstdigit + fALSNum.slice(1, lastIndex) + lastdigit
    }
    console.log(newNum);
    //  fALSNumR= fALSNum.replace(new RegExp(`${userDigitL}`,"g"),lastdigit)
    //  fALSNumR= fALSNum.replace(new RegExp(`${userDigitF}`,"g"),firstdigit)
    // console.log(fALSNumR);
    document.getElementById("fALSR").innerHTML = `After swapping :- First digit = ${firstdigit} and Last Digit = ${lastdigit} <br> Number = ${newNum}`
    console.log(`First digit = ${firstdigit} and Last Digit = ${lastdigit}`);
}


// Sum of first and last digit of a number
function firstAndLastSum() {
    let sum;
    var fALSum = document.getElementById("fALSum").value;
    var lastdigit = parseFloat(fALSum.charAt(fALSum.length - 1))
    var firstdigit = (fALSum.charAt(0))
    if (fALSum == "") {
        alert("Enter a Valid Number")
    }
    if (firstdigit == ".") {
        firstdigit = '0'
        firstdigit = parseFloat(firstdigit)
    }
    firstdigit = parseFloat(firstdigit)
    sum = firstdigit + lastdigit
    document.getElementById("fALSumR").innerHTML = `First digit = ${firstdigit} and Last Digit = ${lastdigit} <br> Sum = ${sum}`
    console.log(`First digit = ${firstdigit} and Last Digit = ${lastdigit}`);
    console.log(`Sum = ${sum}`);
}


// Remove all extra blank spaces from given string
function blankSpaces() {
    var blankSpcStr = document.getElementById("blankSpcStr").value;
    var blankSpc = blankSpcStr.split(" ")
    console.log(blankSpc.toString());
    document.getElementById("blankSpcR").innerHTML = `${blankSpc}`
}

// Trim leading white spaces
function trimLeading() {
    var userLeading = document.getElementById("userLeading").value;
    var leadingStr = userLeading.trimLeft()
    if (userLeading == "") {
        alert("Enter a string value")
    }
    else if (leadingStr == userLeading) {
        console.log(`${userLeading} does not contain any Leading spaces`);
        document.getElementById("trimLeadingR").innerHTML = `${userLeading} does not contain any Leading spaces`;
    }
    else {
        console.log(`String before trim lead  = "${userLeading}"  Required string = "${leadingStr}"`);
        alert(`String before trim lead = "${userLeading}"  Required string = "${leadingStr}"`)
    }
}


// Trim trailing white spaces
function trimTrailing() {
    var userTrailing = document.getElementById("userTrailing").value;
    var trailingStr = userTrailing.trimRight()
    if (userTrailing == "") {
        alert("Enter a string value")
    }
    else if (trailingStr == userTrailing) {
        console.log(`${userTrailing} does not contain any Leading spaces`);
        document.getElementById("trimTrailingR").innerHTML = `${userTrailing} does not contain any Leading spaces`;
    }
    else {
        console.log(`String before trim trail  = "${userTrailing}"  Required string = "${trailingStr}"`);
        alert(`String before trim trail = "${userTrailing}"  Required string = "${trailingStr}"`)
    }
}


// Trim both leading and trailing white spaces
function bothTrailing() {
    var userTL = document.getElementById("userTL").value;
    var trimStr = userTL.trim()
    if (userTL == "") {
        alert("Enter a string value")
    }
    else if (trimStr == userTL) {
        console.log(`${userTL} does not contain any Leading spaces`);
        document.getElementById("trimTrailingR").innerHTML = `${userTL} does not contain any Leading spaces`;
    }
    else {
        console.log(`String before trim  = "${userTL}"  Required string = "${trimStr}"`);
        alert(`String before trim  = "${userTL}"  Required string = "${trimStr}"`)
    }
}
// Merge two array to third array
function mergeArray() {
    var inputArray1 = [];
    var mergeNum1 = document.getElementById("mergeNum1").value;
    var inputArray2 = [];
    var mergeNum2 = document.getElementById("mergeNum2").value;

    if (mergeNum1 < 0 || mergeNum2 < 0) {
        alert("Invalid Input")
    }
    else {
        for (var i = 0; i < mergeNum1; i++) {
            inputArray1[i] = prompt(`Array 1 element` + (i + 1));
        }
        for (var i = 0; i < mergeNum2; i++) {
            inputArray2[i] = prompt(`Array 2 element` + (i + 1));
        }
        console.log(inputArray1);
        console.log(inputArray2);
    }
    mergeOutput = inputArray1.concat(inputArray2)
    document.getElementById("mergeArrayR").innerHTML = `Array 1 = [${inputArray1}]<br> Array 2 = [${inputArray2}] <br> Merged Array = [${mergeOutput}]`
    console.log(`Array 1 = [${inputArray1}] Array 2 = [${inputArray2}] Merged Array = [${mergeOutput}]`);
}


// Delete all duplicate elements from an array
function duplicateArray() {
    var inputArray = [];
    var dupNum = document.getElementById("dupNum").value;
    if (dupNum < 0) {
        alert("Invalid Input")
    }
    else {
        for (var i = 0; i < dupNum; i++) {
            inputArray[i] = prompt(`Array element` + (i + 1));
        }
        console.log(inputArray);
    }
    inputArray = [...new Set(inputArray)]
    document.getElementById("duplicateArrayR").innerHTML = `Array after deleting duplicate elements :- <br> [${inputArray}]`
    console.log(`Array after deleting duplicate elements :- [${inputArray}]`);
}

// Number of duplicate elements in an array
function duplicateNum() {
    var inputArray = [];
    var numDup = document.getElementById("numDup").value;
    if (numDup < 0) {
        alert("Invalid Input")
    }
    else {
        for (var i = 0; i < numDup; i++) {
            inputArray[i] = prompt(`Array element` + (i + 1));
        }
        console.log(inputArray);
    }
    var outputArray = [...new Set(inputArray)].length
    if (outputArray == inputArray.length) {
        outputArray = 0
    }
    else {
        outputArray = (outputArray - inputArray.length) * (-1)
    }

    document.getElementById("duplicateNumR").innerHTML = `Number of duplicate elements in given array is :- <br> ${outputArray}`
    console.log(`Number of duplicate elements in given array is :- ${outputArray}`);
}


// Print all unique elements in the array
function uniqueElement() {
    var inputArray = [];
    var numUnique = document.getElementById("numUnique").value;
    if (numUnique < 0) {
        alert("Invalid Input")
    }
    else {
        for (var i = 0; i < numUnique; i++) {
            inputArray[i] = prompt(`Array element` + (i + 1));
        }
        console.log(inputArray);
    }
    uniqueArray = [...new Set(inputArray)]
    document.getElementById("uniqueElementR").innerHTML = `Unique Elements of [${inputArray}] are :- <br> ${uniqueArray}`
    console.log(`Unique Elements of [${inputArray}] are ${uniqueArray}`);
}
// Last occurrence of a character
function stringLastOcc() {
    var locS = document.getElementById("locS").value;
    var locC = document.getElementById("locC").value;
    if (locS == "" || locC == "") {
        alert("Enter String Values")
    }
    else {
        let occurrenceL = locS.lastIndexOf(locC);
        if (occurrenceL == -1) {
            console.log(`${locC} does not occurs in ${locS}`);
            document.getElementById("locR").innerHTML = `${locC} does not occurs in ${locS}`;
        }
        else {
            console.log(`${locC} occurs at ${occurrenceL} index in ${locS}`);
            document.getElementById("locR").innerHTML = `${locC} occurs at ${occurrenceL} index in ${locS}`;
        }
    }
}
// First occurrence of a character 
function stringFirstOcc() {
    var focS = document.getElementById("focS").value;
    var focC = document.getElementById("focC").value;
    if (focS == "" || focC == "") {
        alert("Enter String Values")
    }
    else {
        let occurrenceF = focS.indexOf(focC);
        if (occurrenceF == -1) {
            console.log(`${focC} does not occur in ${focS}`);
            document.getElementById("focR").innerHTML = `${focC} does not occur in ${focS}`;
        }
        else {
            console.log(`${focC} occurs at ${occurrenceF} index in ${focS}`);
            document.getElementById("focR").innerHTML = `${focC} occurs at ${occurrenceF} index in ${focS}`;
        }
    }
}
// Total number of words in a string.
function numOfWords() {
    var strNum = document.getElementById("strNum").value;
    var countWord = 1;
    if (strNum == "") {
        alert("Enter String value")
    }
    for (let i = 0; i < strNum.length; i++) {
        if (strNum.charAt(i) == " ") {
            countWord = countWord + 1
        }
    }
    console.log(`Total number of words in a string are ${countWord}`);
    document.getElementById("strNumR").innerHTML = `Total number of words in a string are ${countWord}`
}
// Total number of vowels and consonants in a string.
function vowelConsonantNum() {
    var vowCons = document.getElementById("vowCons").value;
    var vowelNum = 0;
    var consonantNum = 0;
    if (vowCons == "") {
        alert("Enter a string value ");
    }
    else if (vowCons.match(/[a-z]/g)) {
        for (let i = 0; i < vowCons.length; i++) {
            if (vowCons[i].match(/[aeiou]/)) {
                vowelNum++;
            } else if (vowCons[i].match(/[a-z]/)) {
                consonantNum++;
            }
        }
    }
    console.log(`Total number of consonants in given string = ${consonantNum} and Total number of vowels in given string = ${vowelNum}`);
    document.getElementById("vowConsR").innerHTML = `Total number of consonants in given string = ${consonantNum} and Total number of vowels in given string = ${vowelNum}`
}