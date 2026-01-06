" use strict"; // treat all js code as newer version
// alert('hello') this is for browser not node js
// documentation: tc39,mdn


// datatypes in js:
//  number,
// bigint for big data reddit,stocks,..
// string=""
// boolean-> yes/no
//  null => standalone value,empty
// undefined: value not yet assigned
// symbol : to find the uniqueness
// these are primitive data type


// object
// 
// console.log(typeof null)//null datatype is object 


/// types of datatypes on the basis of how the data are put into memory and and can be acessed
// 1.primitive(call by value): 7(String,Number,Boolean,null,undefined,Symbol,BigInt)
// 2. Reference/non-primitive type
// reference can be directly allocated into memory
// Array,Object,Functions
 
// const id =Symbol('123')
// const aId = Symbol('123')

// console.log(id===aId)
// BigInt=123444n // n is represent in the last


//++++++++++++++++++++++ memory in js ++++++++++
// stack (primitive type are stored )
// heap (non primitive type are stored)
// a copy value can get from the primitive datatype
// memory original value/reference value can be get from the non primitive datatype



// let myName = 'sandesh'
// let anotherName = myName

// anotherName = 'sachin'

// console.log(myName)
// console.log(anotherName)




let userOne=
{
name:'sandesh', 
email:"abc@mail.com"
}
let userTwo = userOne
userTwo.email=('defA@gmail.com')
console.log(userOne.email)
console.log(userTwo.email)