# Solved another problem in js

## Problem List
- Problem 1: Find the Second Largest Number
- Problem 2: Remove Duplicate Values
- Problem 3: Count Word Frequency
- Problem 4: Check Palindrome
- Problem 5: Group Even and Odd Numbers
- Problem 6: Find Maximum Number (Without Math.max)
- Problem 7: Reverse a String (Logic Based)
- Problem 8: Sum of Only Positive Numbers
- Problem 9: Find Longest Word
- Problem 10: Find Missing Number

# Solution

### Find the Second Largest Number

```javascript
const numbers = [1,2,54,2,65,65]
const removeDuplicate = [...new Set(numbers)]
const sortNumber = removeDuplicate.sort((a,b)=>b-a)
console.log(sortNumber[1])
```

### Remove Duplicate Values

```javascript
const array = ['torikul','mokaddis','sakibul','torikul']
let removeDuplicate = [...new Set(array)]
console.log(removeDuplicate)
```

### Count Word Frequency

```javascript
const str = 'in the day in the day'
const newstr = str.match(/\w+/g)
const countWordFrequency = newstr.reduce((map,item)=>{
 map[item] = (map[item] || 0) + 1
 return map
},{})
console.log(countWordFrequency)
```
### Check Palindrome

```javascript
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
```
### Group Even and Odd Numbers

```javascript
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
```
### Find Maximum Number (Without Math.max)

```javascript
const numbers = [21,54,21,54,87,120]
let maximumNumber = numbers[0]
for(let i = 0; i<numbers.length; i++){
    if(numbers[i] > maximumNumber){
        maximumNumber = numbers[i]
    }
}
console.log(maximumNumber)
```
### Reverse a String (Logic Based)
```javascript
const str = "amiTumi";
const strOfArray = str.split("");

let reverseArray = []

for(let i = strOfArray.length - 1; i >= 0; i--){
    reverseArray.push(strOfArray[i])
}
console.log(reverseArray.join(''))
```
### Sum of Only Positive Numbers

```javascript
const numbers = [1,2,3,4,5,6,-7,8]
const totalPositiveNumbers = numbers.reduce((map,item)=>{
   if(item < 0){
    return map - item
   }
    return map
},0)
console.log(totalPositiveNumbers)
```
### Find Longest Word

```javascript
const str = 'What happen in the dayyyyyy'
const strToArrayInWord = str.match(/\w+/g)
let largeWordInStr =strToArrayInWord[0]
for(let i = 0; i < strToArrayInWord.length; i++){
    if(strToArrayInWord[i].length > largeWordInStr.length){
        largeWordInStr = strToArrayInWord[i]
    }
}
console.log(largeWordInStr)
```
### Find Missing Number

```javascript
const numbers = [1, 2, 3, 5, 6];
for(let i = 0; i<numbers.length; i++){
    let plus = 1+ i
    if(plus !==numbers[i]){
        console.log(plus)
        break
    }
}
```

