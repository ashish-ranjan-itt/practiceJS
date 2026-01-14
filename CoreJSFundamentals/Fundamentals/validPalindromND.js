function removeSpecialCharecters(str) {
    let noSpecialCharecterWord = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'a' && str[i] <= 'z') {
            noSpecialCharecterWord += str[i];
        }
        else if (str[i] >= '0' && str[i] <= '9') {
            noSpecialCharecterWord += str[i];
        }
    }
    console.log(noSpecialCharecterWord)
    return noSpecialCharecterWord;
}

function removeSpacesFromWord(str) {
    let noSpaceWord = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] == " ") continue;
        else noSpaceWord += str[i]
    }
    console.log(noSpaceWord)
    return noSpaceWord
}

function validatePalindrome(str) {
    const word = str.toLowerCase()
    console.log(word)
    const noSpaceWord = removeSpacesFromWord(word);
    const cleanedWord = removeSpecialCharecters(word);
    console.log(cleanedWord)
    // Your implementation
    let left = 0
    let right = cleanedWord.length - 1;
    while (left < right) {
        if (cleanedWord[left] == cleanedWord[right]) {
            left++;
            right--;
        }
        else return false;
    }
    return true;
}

//For the purpose of user debugging.
console.log(validatePalindrome("A man, a plan, a canal: Panama"));