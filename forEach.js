/* doubleValues
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

doubleValues([1,2,3]) // [2,4,6]
doubleValues([5,1,2,3,10]) // [10,2,4,6,20]
onlyEvenValues
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

onlyEvenValues([1,2,3]) // [2]
onlyEvenValues([5,1,2,3,10]) // [2,10]
showFirstAndLast
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']
addKeyAndValue
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object

addKeyAndValue(
[
  {name: 'Elie'},
  {name: 'Tim'},
  {name: 'Matt'},
  {name: 'Colt'}
],
  'title',
  'instructor'
)

/*
  [
    {name: 'Elie', title:'instructor'},
    {name: 'Tim', title:'instructor'},
    {name: 'Matt', title:'instructor'},
    {name: 'Colt', title:'instructor'}
  ]

vowelCount
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

vowelCount('Elie') // {e:2,i:1};
vowelCount('Tim') // {i:1};
vowelCount('Matt') // {a:1})
vowelCount('hmmm') // {};
vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1} 
*/

// example 1
const exampleArr = [5, 1, 2, 3, 10];
const doubledArr = [];

exampleArr.forEach(doubleValues);

function doubleValues(elm, idx, arr) {
  doubledArr.push(`${elm * 2}`);
}

// example 2
const onlyEvenValuesArr = [];
exampleArr.forEach(onlyEvenValues);
function onlyEvenValues(e) {
  if (e % 2 === 0) {
    onlyEvenValuesArr.push(e);
  }
}

// example 3
const names = ['colt','matt', 'tim', 'test']
const showFirstAndLast = []
names.forEach(function(name){
  showFirstAndLast.push(`${name[0]}${name[name.length - 1]}`)
})

// example 4
/*addKeyAndValue
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object

addKeyAndValue(
[
  {name: 'Elie'},
  {name: 'Tim'},
  {name: 'Matt'},
  {name: 'Colt'}
],
  'title',
  'instructor'
)
  [
    {name: 'Elie', title:'instructor'},
    {name: 'Tim', title:'instructor'},
    {name: 'Matt', title:'instructor'},
    {name: 'Colt', title:'instructor'}
  ]
*/

const objArr = [
  {name: 'Elie'},
  {name: 'Tim'},
  {name: 'Matt'},
  {name: 'Colt'}
]

// had to look at the solution for this one
function addKeyAndValue(arr, key, value){
  arr.forEach(function(val){
    val[key] = value
  })
  return arr
  }
const result = addKeyAndValue(objArr, 'title', 'instructor')

// example 5
/* Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

vowelCount('Elie') // {e:2,i:1};
vowelCount('Tim') // {i:1};
vowelCount('Matt') // {a:1})
vowelCount('hmmm') // {};
vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1} 
*/

function vowelCount(str){
  const lowerStr = str.toLocaleLowerCase()
  const splitStr = lowerStr.split('') // why do I have to split the string parameter? (I peeked at the solution)
  const vowels = 'aeiou'
  const vowelCountObj = {}
  
  splitStr.forEach(function(char){
    if (vowels.indexOf(char) !== -1){
      if (vowelCountObj[char]){
        vowelCountObj[char] += 1
      } else {
        vowelCountObj[char] = 1
      }
    }
  })
  return vowelCountObj
  }

