function isEvenIndexElement(element, index) {
    return ((index+1)%2 == 0);
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
