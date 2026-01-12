const programming = ['py','js','r','cpp']
const value=programming.forEach((items)=>{
 console.log(items)
return items // forEach doesn't return values
})
console.log(value)




const myNums = [1,23,4,5,56,6]

// const newNums=myNums.filter((num)=> num >4 ) 
// console.log(newNums)



const newNums=myNums.filter((num)=> {    ///if there is {} scope then value must be return
    
   return num >4 }) 
console.log(newNums)