// example 1
const test1 = [
  {first: 'Elie', last:"Schoppik"},
  {first: 'Tim', last:"Garcia", isCatOwner: true},
  {first: 'Matt', last:"Lane"},
  {first: 'Colt', last:"Steele", isCatOwner: true}
]

function filterByValue(objArr, key){
  const result = []
  result.push(objArr.filter(element => element.hasOwnProperty(key)))
  return result
}

// console.log(filterByValue(test1, 'isCatOwner'))

// example 2
/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

find([1,2,3,4,5], 3) // 3
find([1,2,3,4,5], 10) // undefined
*/

// example 2
const example = [1,2,3,4,5]
function find(arr,val){
  if (arr.includes(val)){
    return val
  }
}
// console.log(find(example, 10))
