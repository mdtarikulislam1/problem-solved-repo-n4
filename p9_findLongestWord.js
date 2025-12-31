// 🧠 Problem 4: Find Longest Word
// 👉 একটা sentence দেওয়া থাকবে।
// 👉 Sentence থেকে সবচেয়ে বড় word টা বের করো।

const str = 'What happen in the dayyyyyy'

const strToArrayInWord = str.match(/\w+/g)
let largeWordInStr =strToArrayInWord[0]

for(let i = 0; i < strToArrayInWord.length; i++){
    if(strToArrayInWord[i].length > largeWordInStr.length){
        largeWordInStr = strToArrayInWord[i]
    }
}

console.log(largeWordInStr)