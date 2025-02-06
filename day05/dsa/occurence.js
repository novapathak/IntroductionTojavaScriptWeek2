function countOccurrences(str, substring) {
    return str.split(substring).length - 1;
}
console.log(countOccurrences("hello hello world", "hello"));