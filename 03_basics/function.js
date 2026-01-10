// //  FUNCTION //
// function myName(){
//     console.log('sandesh ')

// }

// myName()

// function addNumbers(num1,num2){///function parameters
// console.log(num1+num2)
// let res =num1+num2
// return res
// console.log('this value will never return as no value retrun after the return')
// }
// addNumbers(2,4)//(a,b)-> function arguments
// const result =addNumbers(5,3)
// console.log('Result:',result)
// const res = addNumbers(5,6)
// console.log('Results:',res)


// function loginUser(username){
// if(username==undefined){
//     console.log('Please enter the username:')


// }

//     return `${ username} just logged in`

// }
// console.log(loginUser('sandesh'))
// // console.log(loginUser()) if nothing is passed as argument then the value will return as undefined

// // to assign the default value function loginUser(username='sam'){


// function calculatecartPrice(...num1){
//     return num1
// }
// console.log(calculatecartPrice(200,499,599))
// // ... rest operator/seperate operato.(...) will return array 



// function calculatecartPrice1(val1,val2,...num1){
//     return num1
// }
// console.log(calculatecartPrice1(200,499,599))
// // the first value of calculatecartPrice1(200,499,599)) will assign into val1:200,val2:499 and other value will return as array[599,,,,]


// how to pass the object into the function

const customer_detail={
    user:'Raman',
    price:'$200'
}
function handleObject(anyObject){
console.log(`Username is ${anyObject.user} and price is ${anyObject.price}`)
}

handleObject(customer_detail)


// pass the value through array to function
const myArray = [1,2,3,4,45,5,5]
function returnArrayValues(getArray){
    return getArray[1]
}

console.log(returnArrayValues(myArray))


/////// scope : global scope,local scope