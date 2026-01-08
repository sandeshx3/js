/// objects can be declared as literals and constructers
//// if it is made as constructer it is made as singleton

// singleton:
// Object.create
//// object literals:


const mysymbol = Symbol('key1')

const user = {
    name:'sandesh',
    'lastname':'khadka',// this can't be acessed by . only user['lastname']
    email:'abc@gmail.com',
    [mysymbol]:'mykey1',// symbol datatype represent as 
    location:'kathmandu',
    isLoggedIn:false,
    lastLogIn:['sunday','monday']
}

console.log(user.email);
console.log(user['email'])
console.log(user['lastname'])
console.log(user[mysymbol])//how to acess the symbol


// to freeze the object(can't change)  Object.freeze(user)

// to change user.email='new value'

user.greeting = function (){
console.log('hello js user')
}

user.greeting2 = function(){
console.log(`hello js user: ${this.name}`)
}
console.log(user.greeting())
console.log(user.greeting2())


const tinderUser = new Object()
const tinderUser1 = {}
tinderUser.id = '1234abv'
tinderUser.name = 'sandesh'
tinderUser.isLoggedIn = false
console.log(tinderUser)
console.log(tinderUser1)
 

const customer = {

    email:'abc@mail.com',
    fullname:{
        firstname:"sandesh",
        lastname:'khadka',

    }

}
console.log(customer)


console.log(customer.fullname.firstname)

const obj1 ={1:'a',2:'b'}
const obj2 = { 3:'c',4:'d'}

const obj3 = {obj1,obj2}
console.log(obj3)
const obj4 = Object.assign({},obj1,obj2)// if {}-> target be there then value is assign into the obj1
console.log(obj4)


const obj44 = {...obj1,...obj2}
console.log(obj44)
 

const users = [

    {

        id:1,
        name:'a'

    },
    
    {

        id:2,
        name:'b',

    }
]
// this type of array of object can be occurs
users[1].name
console.log(Object.keys(users))
console.log(Object.keys(tinderUser))// to acess what are the object keys
console.log(Object.values(tinderUser))
console.log(Object.entries(users))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))// to check whether the keys in the object or not



//////////************DE-STRUCTURE */

const course = {
    coursename: 'python',
    price: 999,
    courseInstructor:'sandesh'
}

const {courseInstructor: instructor} = course // the keys can get changed or de-structure by using {}
console.log(instructor)



/// API: the vlaues that api brings  in the past days was in XML now it's in the json format
/// json looks like{}, simply it is an object

//{
// 'name':'sandesh',
//}
//[{},{},{}] json can be also in this format
