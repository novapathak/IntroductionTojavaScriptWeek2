function reverseArray(arr) {

    let reverse=[];

    for(let i of arr){
        reverse.unshift(i);
    }
    return reverse;
    // Your code here
  }
  console.log(reverseArray([1, 2, 3, 4]));  // Output: [4, 3, 2, 1]