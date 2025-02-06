function removeDuplicates(s) {
    return [...new Set(s)].join("");
}
console.log(removeDuplicates("abcda"));