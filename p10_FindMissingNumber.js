// 🧠 Problem 1: Find Missing Number
// Task:
// একটা array দেওয়া থাকবে যেখানে সংখ্যা গুলো 1 থেকে N পর্যন্ত থাকার কথা, কিন্তু একটা সংখ্যা missing।

const numbers = [1, 2, 3, 5, 6];
for(let i = 0; i<numbers.length; i++){
    let plus = 1+ i
    if(plus !==numbers[i]){
        console.log(plus)
        break
    }
}
