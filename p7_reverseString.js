//  🧠 Problem 7: Reverse a String (Logic Based)
//  👉 একটা string দেওয়া থাকবে।
//  👉 String টাকে উল্টে দাও।

const str = "amiTumi";
const strOfArray = str.split("");

let reverseArray = []

for(let i = strOfArray.length - 1; i >= 0; i--){
    reverseArray.push(strOfArray[i])
}
console.log(reverseArray.join(''))