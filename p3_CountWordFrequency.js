// Problem 3: Count Word Frequency

// একটা string দেওয়া থাকবে।
// String এর ভেতরে প্রতিটা word কয়বার এসেছে সেটা count করে output দাও।


const str = 'in the day in the day'

const newstr = str.match(/\w+/g)

console.log(newstr)

const countWordFrequency = newstr.reduce((map,item)=>{
 map[item] = (map[item] || 0) + 1
 return map
},{})
console.log(countWordFrequency)


