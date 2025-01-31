function findLargest(arr) {

    let largest=-Infinity;

    for(let i of arr){
        largest=Math.max(largest,i);
    }
    return largest;
    // Your code here
  }
  console.log(findLargest([10, 5, 8, 20]));  // Output: 20