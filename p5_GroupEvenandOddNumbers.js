//Todo Problem 5: Group Even and Odd Numbers

// একটা number array দেওয়া থাকবে।
// Even এবং odd number গুলোকে আলাদা আলাদা group করে output দাও।

const numbers = [5,6,7,41,25,65,41,20]

let evenNumber = []
let oddNumber = []

for(let i = 0; i<numbers.length; i++){
    if(numbers[i] % 2 === 0){
        evenNumber.push(numbers[i])
    }
    else{oddNumber.push(numbers[i])}
}

const groupOddEven = {
    even:evenNumber,
    odd:oddNumber
}

console.log(groupOddEven)