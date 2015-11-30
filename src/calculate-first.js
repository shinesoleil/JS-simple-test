function isEvenIndex(number, index) {
    return (index+1)%2 == 0;
}

function isNotRepeatedNumber(number, index, array) {
    return array.indexOf(number) == array.lastIndexOf(number);

    // for(var i=0; i<array.length; i++) {
    //     if(number == array[i] && i!=index) {
    //         return false;
    //         break;
    //     }
    //     return true;
    // }
}

function single_element(arr) {
    return arr.filter(isEvenIndex).filter(isNotRepeatedNumber);
}
