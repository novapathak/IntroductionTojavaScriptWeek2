function isPalindrome(str) {

    let s=0;
    let e=str.length-1;
    while(s<e){
        if(str[s]!=str[e]){
            return false;
        }
        s++;
        e--;
    }
    return true;

    // Your code here
  }
  console.log(isPalindrome("madam"));  // Output: true
  console.log(isPalindrome("hello"));  // Output: false