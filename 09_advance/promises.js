// simply promise is the event that happen in the future
// const promiseOne = new Promise( function(resolve,reject ){
// // do an async task 
// // db calls,cryptograrphy,N/W call 

// setTimeout(function(){
//     console.log("Async task is completed")

//     resolve()
// },2000)

// })


// // consume the promises
 

// promiseOne.then(function(){
//     console.log('promise consumed');
    
// })



// new Promise( function(resolve,reject ){

// setTimeout(function(){
//     console.log("Async task 2 is completed")

//     resolve()
// },2000)
// }).then(function(){

// console.log('Asyn 2 resolved')

// })




// const promiseThree = new Promise (function(resolve,reject){
// setTimeout(function(){
// resolve({
//     username:'sam',
//     email:'sam9@xmail.com'
        
//     })
// },2000)

// })

// promiseThree.then(function(user){
//     console.log(user)
// })




// const promiseFour = new Promise(function(resolve,reject){
// setTimeout(function(){

// let error = true
// if(!error){
// resolve({
//     username:'sam',
//     email:'sam9@xmail.com'
        
//     })}
//     else{
//         reject('Error,something wrong')
//     }
// },2000)

// })

//  promiseFour.then((user) => {
//     console.log(user)
//     return user.username
// }).then((user)=> {
//     console.log(username);
    
// }).catch( function(error){
//     console.log(error)

// })
// .finally(()=> console.log('the promise is either resolve or rejected'))



// const promiseFive = new Promise(function(resolve,reject){

//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({
//                 username:'sam',
//                 password:123
//             })
//         }
//         else
//          {
//             reject('ERROR')

//         }
        


//     },1000)
// })


// async function consumePromiseFive()
// {
//     try{
//    const response =  await promiseFive
//    console.log(response)
// }
// catch(error){
//     console.log(error);
    
// }

// }


// consumePromiseFive()
  

// async function getAllUsers(){
//     try{
//     const response = await fetch('https://api.github.com/users/sandeshx3')

//    const data =  await response.json()
//    console.log(data)
//     }
//     catch(error){

//         console.log("err",error);
        
//     }
// }

// getAllUsers()




fetch('https://api.github.com/users/sandeshx3')
.then((response)=>{
    return response.json()
})


.then((data) => {
    console.log(data)
})


.catch((error)=> 
console.log(error)
)