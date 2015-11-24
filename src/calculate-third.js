function isEvenElementWithEvenIndex(element, index) {
    return ((index+1)%2 == 0) && (element%2 == 0);
}

function getDigitNumber(number) {
    return number.toString().length;
}

function groupByDigitNumber(previousValue, currentValue) {
    var digitNumber = getDigitNumber(currentValue);
    previousValue[digitNumber]==undefined?
        previousValue[digitNumber] = [currentValue, 1]:
        previousValue[digitNumber] = [previousValue[digitNumber][0] + currentValue, previousValue[digitNumber][1]+1];
    return previousValue;
}

function even_group_calculate_average(arr) {
    var newArray =  arr.filter(isEvenElementWithEvenIndex);
    if(newArray.length==0) {
        return [0];
    }
    else {
        return newArray.reduce(groupByDigitNumber, [])
            .filter(function(element) {
                return element!=undefined
            })
            .map(function(element) {
                return element[0]/element[1];
            });
    }
}
