function longestWord(s) {
    
    return s.split(" ").sort((a, b) => b.length - a.length)[0];

}

console.log(longestWord("Hello world"));