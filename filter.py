'''
filterByValue
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

filterByValue(
[
  {first: 'Elie', last:"Schoppik"},
  {first: 'Tim', last:"Garcia", isCatOwner: true},
  {first: 'Matt', last:"Lane"},
  {first: 'Colt', last:"Steele", isCatOwner: true}
],
'isCatOwner'
)

/*
  [
    {first: 'Tim', last:"Garcia", isCatOwner: true},
    {first: 'Colt', last:"Steele", isCatOwner: true}
  ]
'''
testyArr = [
  {'first': 'Elie', 'last':"Schoppik"},
  {'first': 'Tim', 'last':"Garcia", 'isCatOwner': True},
  {'first': 'Matt', 'last':"Lane"},
  {'first': 'Colt', 'last':"Steele", 'isCatOwner': True}
]

theResult = []
def filterByValue(testArr, key):

    for arrItem in testArr:
        if key in arrItem:
            theResult.append(arrItem)

# filter(filterByValue(testyArr, 'isCatOwner'), testyArr)
# print(theResult)


# example 2
'''
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

find([1,2,3,4,5], 3) // 3
find([1,2,3,4,5], 10) // undefined
'''

example = [1,2,3,4,5]
def find(arr, val):
    if val in arr:
        return val
print(find(example, 6))