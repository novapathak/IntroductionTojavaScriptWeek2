function countVowels(str){
    const reg=/[aeiou]/gi;
    Var count=str.match(reg);
    console.log(count);
}
console.log(countVowels("javascript"));