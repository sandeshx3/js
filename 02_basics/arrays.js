// ******************************ARRAYS******************
const myArray =[1,3,4,5,6,7,8,9]
const myHeros =['Batman','Superman','Spiderman','Ironman','hulk']

const myArray2 = new Array(1,2,45,56)

console.log(myArray2[2])
 


/////////////**************ARRAYS METHODS */
myArray.push(6)
console.log(myArray)
myArray.pop()
console.log(myArray)
myArray.unshift(9)
console.log(myArray)// 9 will come in 1st and shift all numbers array position

const newArray = myArray.join()
console.log(newArray)
console.log(typeof newArray)// join return the string value 


/////////slices and splices


console.log('A',myArray)
const myn1 = myArray.slice(1,3)// last range is not include [3,4]
console.log(myn1)
console.log('B',myArray)
const myn2 = myArray.splice(1,3)// last range is include [3,4,5]
console.log(myn2)
console.log('C',myArray)// the portion [3,4,5] will remove

const marvel_heros =['ironman','thor','spiderman']
const dc_heros = ['batman','superman','flash']
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])
const newmh = marvel_heros.concat(dc_heros)// a new arry is required to concat 
console.log(marvel_heros)
console.log(newmh)

///////// spread operator //////////////////


const new_heroes = [...marvel_heros,...dc_heros]
console.log(new_heroes)


const number = [1,2,3,[4,5,[7,8]]]
const sep_number = number.flat(Infinity)
console.log(sep_number)// return all the array from array under array

console.log(Array.from('sandesh'))
console.log(Array.isArray('sandesh'))
console.log(Array.from({name:'sandesh'}))// can't convert this into array return this into empty array



let a=1
let b=2
let c=3

console.log(Array.of(a,b,c))
