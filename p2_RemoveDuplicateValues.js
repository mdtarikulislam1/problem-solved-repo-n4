
// todo Problem 2: Remove Duplicate Values
// একটা number বা string array দেওয়া থাকবে।
// Array থেকে duplicate value গুলো remove করে নতুন array বানাও।

const array = ['torikul','mokaddis','sakibul','torikul']

let removeDuplicate = [...new Set(array)]

console.log(removeDuplicate)