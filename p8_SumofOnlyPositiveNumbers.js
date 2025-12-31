// 🧠 Problem 3: Sum of Only Positive Numbers
// 👉 একটা number array দেওয়া থাকবে।
// 👉 শুধু positive number গুলোর যোগফল বের করো।

const numbers = [1,2,3,4,5,6,-7,8]
const totalPositiveNumbers = numbers.reduce((map,item)=>{
   if(item < 0){
    return map - item
   }
    return map
},0)
console.log(totalPositiveNumbers)