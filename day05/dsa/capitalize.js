function capitalizeWords(s) {
    return s.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
}

console.log(capitalizeWords("capitilazise each word")); 