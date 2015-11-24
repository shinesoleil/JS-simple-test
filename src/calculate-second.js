function isEvenIndexElement(element, index) {
    return ((index+1)%2 == 0);
}

function getMedian(arr) {
    var len = arr.length;
    if(len%2==0) {
        return (arr[len/2-1]+arr[len/2])/2;
    }
    else {
        return arr[(len-1)/2];
    }
}

function calculate_median(arr) {
    var filteredArr = arr.filter(isEvenIndexElement);
    return getMedian(filteredArr);
}