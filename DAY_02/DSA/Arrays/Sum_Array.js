function sumArray(arr) {

    let sum=0;

    for(let i of arr){
        sum+=i;
    }

    return sum;

    // Your code here
  }
  console.log(sumArray([1, 2, 3, 4]));  // Output: 10