// arr => arr

function splitArray(arr){ // arr: [10, 20] /// arr:[10] => [10]

  const midPoint = Math.floor(arr.length / 2);
  const firstHalf = arr.slice(0, midPoint);
  const secondHalf = arr.slice(midPoint);

  if (arr.length === 1){
      return arr;
  } else {
      return mergeArray(
          splitArray(firstHalf),
          splitArray(secondHalf)
      )
  }
}

function mergeArray(a, b){
  // arr, arr => arr
  //// ([10], [20]) => [10, 20]
  /// [[27, 38], [3, 43]] => [3, 27, 38, 43]
  let result = [];

  if(a[0]>b[0]){
      result.push(b[0]);
      result.push(a[0]);
  } else {
      result.push(a[0]);
      result.push(b[0]);
  }

  console.log(result)
  return result;
}

// arr, arr => arr
// [10],[20] => [10, 20]

function mergeSort(arr){
  // if(something length){
  //     return mergeArray(arr)
  // }else{
  //     return arr;
  // }

  return mergeArray(
      splitArray()
  )

}
