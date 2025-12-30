
const str = 'in the day in the day'

const newstr = str.match(/\w+/g)

const countWordFrequency = newstr.reduce((map,item)=>{
 map[item] = (map[item] || 0) + 1
 return map
},{})
console.log(countWordFrequency)


