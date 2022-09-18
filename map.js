/*
map
doubleValuesWithMap
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

doubleValuesWithMap([1,2,3]) // [2,4,6]
doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
function doubleValuesWithMap(arr) {}

valTimesIndex
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

valTimesIndex([1,2,3]) // [0,2,6]
valTimesIndex([1,-2,-3]) // [0,-2,-6]
extractKey
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

extractKey(
  [
    {name: 'Elie'},
    {name: 'Tim'},
    {name: 'Matt'},
    {name: 'Colt'}
  ],
  'name'
)

  // ['Elie', 'Tim', Matt', 'Colt']
extractFullName
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of “first” and the value of a key with the name of “last” in each object, concatenated together with a space.


extractFullName([
  {first: 'Elie', last:"Schoppik"},
  {first: 'Tim', last:"Garcia"},
  {first: 'Matt', last:"Lane"},
  {first: 'Colt', last:"Steele"}
])

  // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/




/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

doubleValuesWithMap([1,2,3]) // [2,4,6]
doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/


const example = [1, -2, 3]
function doubleValuesWithMap(arr) {
  return arr.map(function(elm){
    return elm * 2
  })
}
// console.log(doubleValuesWithMap(example))

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

valTimesIndex([1,2,3]) // [0,2,6]
valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr){
  return arr.map(function(elm, ind){
    return elm * ind
  })
}
// console.log(valTimesIndex(example))

/*
extractKey
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

extractKey(
  [
    {name: 'Elie'},
    {name: 'Tim'},
    {name: 'Matt'},
    {name: 'Colt'}
  ],
  'name'
)

  // ['Elie', 'Tim', Matt', 'Colt']
 */

  const names = [
    {name: 'Elie'},
    {name: 'Tim'},
    {name: 'Matt'},
    {name: 'Colt'}
  ]

  function extractKey(arr, theKey){
    return arr.map(function(elm){
      return elm[theKey]
    })
  }

  // console.log(extractKey(names, 'name'))


/*
  extractFullName
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a 
name of “first” and the value of a key with the name of “last” in each object, concatenated together with a space.

extractFullName([
  {first: 'Elie', last:"Schoppik"},
  {first: 'Tim', last:"Garcia"},
  {first: 'Matt', last:"Lane"},
  {first: 'Colt', last:"Steele"}
])

  // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

const nombres = [
  {first: 'Elie', last:"Schoppik"},
  {first: 'Tim', last:"Garcia"},
  {first: 'Matt', last:"Lane"},
  {first: 'Colt', last:"Steele"}
]

function extractFullName(arr){
  return arr.map(function(elm){
    return elm[`${'first'}`] + ' ' + elm[`${'last'}`]
  })
}
console.log(extractFullName(nombres))