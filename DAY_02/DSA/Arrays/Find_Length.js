function arrayLength(arr) {

    let count=0;

    for(let i in arr){
        count++;
    }

    return count;
    // Your code here
  }
  console.log(arrayLength([1, 2, 3, 4]));  // Output: 4