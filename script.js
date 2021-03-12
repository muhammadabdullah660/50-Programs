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
    var blankSpc = blankSpcStr.replace(/ /g, "")
    console.log(blankSpc);
    document.getElementById("blankSpcR").innerHTML = `${blankSpcStr} after removing all blank spaces is :- <br> ${blankSpc}`
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


// Triangle is equilateral, isosceles or scalene triangle?
function triangleCheck() {
    var side1 = parseFloat(document.getElementById("1side").value);
    var side2 = parseFloat(document.getElementById("2side").value);
    var side3 = parseFloat(document.getElementById("3side").value)
    if (side1, side2, side3 > 0) {
        if (side1 == side2 && side2 == side3) {
            console.log(`Triangle with sides ${side1},${side2},${side3} is Equilateral`);
            document.getElementById("triangleCheckR").innerHTML = `Triangle with sides ${side1} , ${side2} , ${side3} is Equilateral`;
        }
        else if (side1 == side2 || side1 == side3 || side2 == side3) {
            console.log(`Triangle with sides ${side1},${side2},${side3} is Isosceles`);
            document.getElementById("triangleCheckR").innerHTML = `Triangle with sides ${side1} , ${side2} , ${side3} is Isosceles`;
        }
        else {
            console.log(`Triangle with sides ${side1},${side2},${side3} is Scalene`);
            document.getElementById("triangleCheckR").innerHTML = `Triangle with sides ${side1} , ${side2} , ${side3} is Scalene`;
        }
    }
    else {
        alert("Enter numeric values of sides")
    }
}


// Sum of all odd numbers between 1 to n 
function oddSum() {
    var oddSumLimit = document.getElementById("oddSumLimit").value;
    var sum = 0
    if (oddSumLimit == "") {
        alert("Enter Numeric Values greater than 0")
    } else {
        for (let i = 1; i <= parseFloat(oddSumLimit); i++) {
            if (i % 2 !== 0) {
                sum = sum + i
            }
        }
        document.getElementById("oddSumR").innerHTML = `The sum of odd numbers upto ${oddSumLimit} is ${sum}`
        console.log(`The sum of odd numbers upto ${oddSumLimit} is ${sum}`);
    }
}


// Sum of all even numbers between 1 to n 
function evenSum() {
    var evenSumLimit = document.getElementById("evenSumLimit").value;
    var sum = 0
    if (evenSumLimit == "") {
        alert("Enter Numeric Values greater than 0")
    } else {
        for (let i = 1; i <= parseFloat(evenSumLimit); i++) {
            if (i % 2 === 0) {
                sum = sum + i
            }
        }
        document.getElementById("evenSumR").innerHTML = `The sum of even numbers upto ${evenSumLimit} is ${sum}`
        console.log(`The sum of even numbers upto ${evenSumLimit} is ${sum}`);
    }
}


// Sum of all natural numbers between 1 to n
function naturalSum() {
    var natNumLimit = document.getElementById("natNumLimit").value;
    var sum = 0
    if (natNumLimit == "") {
        alert("Enter Numeric Values greater than 0")
    } else {
        for (let i = 1; i <= parseFloat(natNumLimit); i++) {
            sum = sum + i
        }
        document.getElementById("naturalSumR").innerHTML = `The sum of natural numbers upto ${natNumLimit} is ${sum}`
        console.log(`The sum of natural numbers upto ${natNumLimit} is ${sum}`);
    }
}

// Calculate sum of digits of a number
function sumDigitAll() {
    var sum = 0
    var sumDigitInput = document.getElementById("sumDigitInput").value;
    if (sumDigitInput == "" || sumDigitInput < 0) {
        alert("Enter Numeric Values greater than 0")
    }
    else {
        for (let i = 0; i < sumDigitInput.length; i++) {
            sum = sum + parseFloat(sumDigitInput.charAt(i))
        }
        document.getElementById("sumDigitAllR").innerHTML = `Sum of digits of ${sumDigitInput} is ${sum}`
        console.log(`Sum of digits of ${sumDigitInput} is ${sum}`);
    }
}

// Calculate product of digits of a number
function productDigitAll() {
    var product = 1
    var productDigitInput = document.getElementById("productDigitInput").value;
    if (productDigitInput == "" || productDigitInput < 0) {
        alert("Enter Numeric Values greater than 0")
    }
    else {
        for (let i = 0; i < productDigitInput.length; i++) {
            product = product * parseFloat(productDigitInput.charAt(i))
        }
        document.getElementById("productDigitAllR").innerHTML = `Product of digits of ${productDigitInput} is ${product}`
        console.log(`Product of digits of ${productDigitInput} is ${product}`);
    }
}


// Remove first occurrence of a character from string
function removeFOccChar() {
    var removeFChar = document.getElementById("removeFChar").value;
    var removeFStr = document.getElementById("removeFStr").value;
    if ((/[a-zA-Z]/).test(removeFChar, removeFStr)) {
        if (removeFStr.search(removeFChar) !== -1) {
            var index = removeFStr.search(removeFChar);
            var newStr = removeFStr.slice(0, index) + removeFStr.slice(index + 1)
            document.getElementById("removeFOccCharR").innerHTML = `"${removeFStr}" after removing first occurrence of "${removeFChar}" is :- <br>"${newStr}"`
            console.log(`${removeFStr} after removing first occurrence of ${removeFChar} is ${newStr}`);
        }
        else {
            document.getElementById("removeFOccCharR").innerHTML = `Character not found`
            console.log(`Character not found`)
        }
    }
    else {
        alert(`Invalid Input`)
    }
}


// Remove last occurrence of a character from string
function removeLOccChar() {
    var removeLChar = document.getElementById("removeLChar").value;
    var removeLStr = document.getElementById("removeLStr").value;
    if ((/[a-zA-Z]/).test(removeLChar, removeLStr)) {
        if (removeLStr.search(removeLChar) !== -1) {
            var index = removeLStr.lastIndexOf(removeLChar);
            var newStr = removeLStr.slice(0, index) + removeLStr.slice(index + 1)
            document.getElementById("removeLOccCharR").innerHTML = `"${removeLStr}" after removing last occurrence of "${removeLChar}" is :- <br>"${newStr}"`
            console.log(`${removeLStr} after removing last occurrence of ${removeLChar} is ${newStr}`);
        }
        else {
            document.getElementById("removeFOccCharR").innerHTML = `Character not found`
            console.log(`Character not found`)
        }
    }
    else {
        alert(`Invalid Input`)
    }
}

// Replace first occurrence of a character with another in a string
function firstOcurrReplace() {
    var repFstr = document.getElementById("repFstr").value;
    var repFChar1 = document.getElementById("repFChar1").value;
    var repFChar2 = document.getElementById("repFChar2").value;
    console.log(repFstr);
    console.log(repFChar1);
    console.log(repFChar2);
    if (repFChar1, repFstr, repFChar2) {
        if (repFstr.search(repFChar1) !== -1) {
            newStr = repFstr.replace(repFChar1, repFChar2)
            document.getElementById("firstOcurrReplaceR").innerHTML = `"${repFstr}" after replacing first occurrence of "${repFChar1}" with "${repFChar2} is :- <br>"${newStr}"`
            console.log(`${repFstr} after replacing first occurrence of ${repFChar1} with "${repFChar2} is :- ${newStr}`);
        }
        else {
            document.getElementById("firstOcurrReplaceR").innerHTML = `Character not found`
            console.log(`Character not found`);
        }
    }
    else {
        alert(`Invalid Input`);
    }
}


// Replace last occurrence of a character with another in a string
function lastOcurrReplace() {
    var repLstr = document.getElementById("repLstr").value;
    var repLChar1 = document.getElementById("repLChar1").value;
    var repLChar2 = document.getElementById("repLChar2").value;
    console.log(repLChar1);
    console.log(repLChar2);
    console.log(repLstr);
    if (repLChar1, repLstr, repLChar2) {
        if (repLstr.search(repLChar1) !== -1) {
            for (let i = 0; i < repLstr.length; i++) {
                if (repLstr.charAt(i) == repLChar1) {
                    index = repLstr.lastIndexOf(repLstr.charAt(i))
                    var newStr = repLstr.split("")
                    newStr.splice(index, 1, repLChar2)
                    var finalStr = newStr.join("")
                    document.getElementById("lastOcurrReplaceR").innerHTML = `"${repLstr}" after replacing last occurrence of "${repLChar1}" with "${repLChar2}" is :- <br>"${finalStr}"`
                    console.log(`"${repLstr}" after replacing last occurrence of "${repLChar1}" with "${repLChar2}" is :- "${finalStr}"`);
                }
            }
        }
        else {
            document.getElementById("lastOcurrReplaceR").innerHTML = `Character not found`
            console.log(`Character not found`);
        }
    }
    else {
        alert(`Invalid Input`)
    }
}


// Find all roots of a quadratic equation
function roots() {
    var root1, root2;
    var a = parseFloat(document.getElementById("a").value)
    var b = parseFloat(document.getElementById("b").value)
    var c = parseFloat(document.getElementById("c").value)
    let discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        document.getElementById("rootsR").innerHTML = `The roots of quadratic equation are ${root1} and ${root2}`
        console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
    }
    else if (discriminant == 0) {
        root1 = root2 = -b / (2 * a);
        document.getElementById("rootsR").innerHTML = `The roots of quadratic equation are ${root1} and ${root2}`
        console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
    }
    else if (discriminant < 0) {
        let realPart = (-b / (2 * a)).toFixed(2);
        let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
        document.getElementById("rootsR").innerHTML = `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
        console.log(`The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`);
    }
    else {
        alert("Invalid Input")
    }
}


// Reverse of an array
function reverseArray() {
    var inputArray = [];
    var outputArray = []
    var reverseNum = document.getElementById("reverseNum").value;
    if (numUnique < 0) {
        alert("Invalid Input")
    }
    else {
        for (var i = 0; i < reverseNum; i++) {
            inputArray[i] = prompt(`Array element` + (i + 1));
        }
        console.log(inputArray);
    }
    outputArray = inputArray.reverse()
    console.log(outputArray);
    document.getElementById("reverseArrayR").innerHTML = `Reversed Array = ${outputArray}`
}


// // Count occurrences of a word in a given string
// function countWordOcc() {
//     var cOWS = document.getElementById("cOWS").value;
//     var cOWC = document.getElementById("cOWC").value;
//     console.log("User given String", cOWS);
//     var val = cOWS.lastIndexOf(new RegExp(`${cOWC}`,"g"));
//     if (val == -1) {
//        var value = 0;
//         console.log(`No.of ${cOWC} in string is 0`);
//     }
//     else {
//          value = (cOWS.match(new RegExp(`${cOWC}`, "g"))).length;
//         console.log(`No.of ${cOWC} in string is ${value}`);
//     }
// }