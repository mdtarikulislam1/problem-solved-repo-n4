//Todo Problem 4: Check Palindrome
// একটা string দেওয়া থাকবে।
// String টি palindrome কিনা check করো।
// (উল্টা করলেও একই থাকলে palindrome)


const str = 'lol';

const stringOfArray = str.split('')

let reverseArray = []

for(let i = stringOfArray.length - 1; i >= 0; i--){
    reverseArray.push(stringOfArray[i])
}

const joinStr = reverseArray.join('')
if(joinStr === str){
    console.log('palindrome',true)
}else{
    console.log('palindrome',false)
}