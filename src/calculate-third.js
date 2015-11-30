function isEvenIndex(number, index) {
    return (index+1)%2 == 0;
}

function isEven(number) {
    return number%2 == 0;
}

// //one function, one task.
// function isEvenElementWithEvenIndex(element, index) {
//     return ((index+1)%2 == 0) && (element%2 == 0);
// }

function getDigitNumber(number) {
    return number.toString().length;
}

function groupByDigitNumber(groupedArray, nextNumber) {
    var digitNumber = getDigitNumber(nextNumber);
    groupedArray[digitNumber] = groupedArray[digitNumber] || [];
    groupedArray[digitNumber].push(nextNumber);
    return groupedArray;
}

function isNotUndefinedArray(array) {
    return array != undefined;
}

function calculateAverage(numberArray) {
    var sum = 0;
    for(var i=0; i<numberArray.length; i++) {
        sum += numberArray[i];
    }
    return sum/numberArray.length;
}

// //bad function name
// function groupByDigitNumber(previousValue, currentValue) {
//     var digitNumber = getDigitNumber(currentValue);
//     previousValue[digitNumber]==undefined?
//         previousValue[digitNumber] = [currentValue, 1]:
//         previousValue[digitNumber] = [previousValue[digitNumber][0] + currentValue, previousValue[digitNumber][1]+1];
//     return previousValue;
// }

function even_group_calculate_average(arr) {
    var newArray =  arr.filter(isEvenIndex).filter(isEven);
    if(newArray.length==0) {
        return [0];
    }
    else {
        return newArray.reduce(groupByDigitNumber, []).filter(isNotUndefinedArray).map(calculateAverage);
    }
}
