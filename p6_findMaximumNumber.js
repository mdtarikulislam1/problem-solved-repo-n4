// 🧠 Problem 6: Find Maximum Number (Without Math.max)
// 👉 একটা number array দেওয়া থাকবে।
// 👉 Array থেকে সবচেয়ে বড় সংখ্যা বের করো।

const numbers = [21,54,21,54,87,120]
let maximumNumber = numbers[0]
for(let i = 0; i<numbers.length; i++){
    if(numbers[i] > maximumNumber){
        maximumNumber = numbers[i]
    }
}
console.log(maximumNumber)