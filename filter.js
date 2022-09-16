// example 1
const test1 = [
  { first: "Elie", last: "Schoppik" },
  { first: "Tim", last: "Garcia", isCatOwner: true },
  { first: "Matt", last: "Lane" },
  { first: "Colt", last: "Steele", isCatOwner: true },
];

function filterByValue(objArr, key) {
  const result = [];
  result.push(objArr.filter((element) => element.hasOwnProperty(key)));
  return result;
}

// console.log(filterByValue(test1, 'isCatOwner'))

// example 2
/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

find([1,2,3,4,5], 3) // 3
find([1,2,3,4,5], 10) // undefined
*/

// example 2
const example = [1, 2, 3, 4, 5];
function find(arr, val) {
  if (arr.includes(val)) {
    return val;
  }
}
// console.log(find(example, 10))

// example 3
/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

findInObj(
  [
    {first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia", isCatOwner: true},
    {first: 'att', last:"Lane"},
    {first: 'Colt', last:"Steele", isCatOwner: true}
  ],
  'isCatOwner',
  true
)

// {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, val) {
  return arr.filter(function(thing){
    return thing[key] === val
  })
  [0] // what is this syntax?
  
}

console.log(findInObj(test1, 'isCatOwner', true))

// const bruh = {
//   fart: 'nice', 
//   poo: 'tight', 
//   ayy: 'noice',
//   suh: 'dude'
// }

// // console.log(bruh.fart)