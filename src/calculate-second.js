function isEvenIndexElement(element, index) {
    if((index+1)%2 == 0) {
        return true;
    }
}

function getMedian(arr) {
    var len = arr.length;
    if(len%2 != 0) {
      return arr[(len+1)/2];
    }
}

function calculate_median(arr) {
    var filteredArr = arr.filter(isEvenIndexElement);
    console.log(filteredArr);
    return getMedian(filteredArr);
}


  var collection_a = [1, 2, 3, 4, 5, 6];
  var collection_b = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  console.log(calculate_median(collection_a));
  console.log(calculate_median(collection_b));
