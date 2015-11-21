function isEvenIndexElement(element, index) {
    if((index+1)%2 == 0) {
        return true;
    }
}

function isRepeat(element, index, array) {
    for(var i=0; i<array.length; i++) {
        if(element != array[i] && i!=index) {
            return true;
            break;
        }
        return false;
    }
}

function single_element(arr) {
    return arr.filter(isEvenIndexElement).filter(isRepeat);
}
