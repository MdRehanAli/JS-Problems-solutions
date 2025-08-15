function onlyCharacter(str) {
    // You have to write your code here
    if (typeof (str) !== 'string') {
        return "Invalid";
    }
    const removeSpaces = str.split(" ").join("");
    const upperCase = removeSpaces.toUpperCase();
    return upperCase;
}

console.log(onlyCharacter(true))