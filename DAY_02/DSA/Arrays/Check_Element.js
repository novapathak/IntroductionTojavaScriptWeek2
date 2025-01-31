function isElementPresent(arr, num) {

    for(let i of arr){
        if(i==num){
            return true;
        }

    }
    return false;

    // Your code here
  }
  console.log(isElementPresent([1, 2, 3, 4], 3));  // Output: true
  console.log(isElementPresent([1, 2, 3, 4], 5));  // Output: false