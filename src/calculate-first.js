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

var collection_a = [1, 2, 3, 2, 5, 6, 21, 43, 12, 5];
var collection_b = [11, 11, 22, 11, 33, 11];
console.log(single_element(collection_a));
console.log(single_element(collection_b));
