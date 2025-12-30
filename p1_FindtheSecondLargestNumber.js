
//  TODO: Problem 1: Find the Second Largest Number
// একটা number array দেওয়া থাকবে।
// Array থেকে second largest number বের করো।

const numbers = [1,2,54,2,65]

const sortNumber = numbers.sort((a,b)=>b-a)

console.log(sortNumber[1])