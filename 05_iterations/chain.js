/// chaining means we can use two three methods directly
const number =[1,3,4,5,6,7,8,8,9]
const newNum = number
                .map((num) => num*10)
                .map((num) => num/10)   /// the value pass here will be the array after first map operation

                .filter((num) => num>5)
console.log(newNum)