function countVowels(str) {

    let ans=0;

    for(let i=0;i<str.length-1;i++){
        if((str[i]=='a' || str[i]=='e' || str[i]=='o' || str[i]=='u' || str[i]=='i')|| 
        (str[i]=='A' || str[i]=='E' || str[i]=='I' || str[i]=='U' || str[i]=='O')){
            ans++;
        }
    }

    return ans;
    // Your code here
  }
  console.log(countVowels("javascript"));  // Output: 3