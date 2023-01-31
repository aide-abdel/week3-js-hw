// 1- Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.
const maxOfTwoNumbers = (x, y) => {
  return x >= y ? x : y
}

// 2- Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

const maxOfThreeNumbers = (x, y, z) => {
  return (maxOfTwoNumbers(maxOfTwoNumbers(x, y), z))
}


// 3-Define a function, as a function declaration, isCharAVowelthat takes a character as an argument and returns true if it is a vowel, false otherwise.
const isCharAVowel = (x) => {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  if (vowels.includes(x)) {
    return true
  }
  return false
}

// 4- Define a function, as a function expression, sumArraythat takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.

const sumArray = (arr) => {
  let sumArr = 0;
  for (i = 0; i < arr.length; i++) {
    sumArr += arr[i]
  }
  return sumArr
}

// 5- Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.
const multiplyArray = (arr) => {
  let multArr = 1;
  for (i = 0; i < arr.length; i++) {
    multArr *= arr[i]
  }
  return multArr
}

// 6 - Define a function, as a function expression, numArgsthat returns the number of arguments passed to the function when called.
// let numArgsthat = (arr) => {
//   return arr.length
// }
// 7 - Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and returns it.For example, reverseString('rockstar');would return the string "ratskcor".

function reverseString(s) {
  let reverse = []
  let reverseString = ""
  for (let i = 0; i < s.length; i++) {
    reverse[s.length - (i + 1)] = s[i]
  }
  for (let i = 0; i < s.length; i++) {
    reverseString = reverseString.concat(reverse[i])
  }
  return reverseString
}
// 8- Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.
// const longestStringInArray = (arr) => {

// }

// console.log(reverseString('reverse'))
