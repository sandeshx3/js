// let myDate = new Date()// date instance/object
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toJSON())
// console.log(typeof myDate)

// let myCreatedDate = new Date(2025,0,7)// month start from the 0
// console.log(myCreatedDate.toDateString())


// let myTimeStamp = Date.now()
// console.log(myTimeStamp)// comes in miliseconds
// console.log(myTimeStamp)// comes in miliseconds
// console.log( Math.floor(Date.now()/1000))// to secc


let newD = new Date
console.log(newD)
newD.toLocaleString('default',{
    weekday:'long',
    timeZoneName:'long'


})