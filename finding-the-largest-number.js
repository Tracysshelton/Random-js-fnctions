// If you have an array with many numbers and need to finr the largest of them all, try this function

//set up the function to check for the largest number
function theLargestNumber(arr){
  //set to retrieve the result
  var results = [];
  for (var x in arr) {
    // Set temp largest or the actual largest to test
    var theLargest = 0
    for (var y in arr[x]){
      if (arr[x][y] > theLargest){
        theLargest = arr[x][y];
      }
    }
  results[x] = theLargest
}
  return results;
}
      
  
