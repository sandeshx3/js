////////////////ARROW function ////////////////
// ////// this keyword 
 const user ={
    username:'sam',
    price:999,
    welcomemessage: function(){
        console.log(`${this.username}, welcome to the website`)
    console.log(this)
    }
 }

//  user.welcomemessage()
// console.log(this) // return {} object


/// when the console.log(this) run in the browser the most global object is window
//// but inside the node it return the {}

function one(){
    let username ='brad'
    console.log(this.username)  // this is only can used when there is object we can't use it with function
}
one()


const add = function(){

    let user = 'leo'
    console.log(this.user) // this also returned undefined
}
add()


const two = () =>
{

    let username = 'angelina'
    console.log(this.username)
}
two()


//////// syntax: ()  => {}
    //// const variable name = (parameter1,parameter2) =>{}

/// explict return {}

const sub = (num1,num2) =>
{
    return num1-num2  // {} need this curly braces
}
console.log( sub(1,2))


//////////// Implict return
const sub1= (num1,num2) =>( num1-num2)
console.log(sub1(9,7))

//////// how to return object
/// () is need to wrap the object 
const name =()=> ({username:'sandesh'})
console.log(name())