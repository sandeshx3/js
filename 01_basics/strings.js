// const name = 'sandesh'
// const repoCount = 5
// console.log(name+ repoCount)
// console.log(`hello my name is ${name} and my repo count is ${repoCount}`) // this is better way to write

const gameName = new String ("edge_of_xfc")
// console.log(gameName.__proto__)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2)) 

// there are multiple Strings
// methods for manipulation

// for slicing,substring the string

// const newString = gameName.substring(0,4)// negative value can be used in the slice only not substring

// console.log(newString)

// const newStringOne = '   sandesh  '
// console.log(newStringOne)
// console.log(newStringOne.trim())//remove unnecessary spacing for white space

const url = 'https://sandesh.com/sandesh%20khadka'
console.log(url.replace('%20','-'))
console.log(url.includes("newe"));


console.log(gameName.split('_')) //split based on '_'
