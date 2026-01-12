// [{},{},{}] array of object

const arr = [1,2,3,4,5,6]
for(const num of arr){
//     console.log(num);
}



const greetings = 'hello!'
for(const greet of greetings){
    console.log(`Each characteris: ${greet}`);
    
}


// Maps 
// no duplicate value

const map = new Map()
map.set("IN",'india')
map.set('NP','nepal')
map.set('uk','united kingdom')
console.log(map)


for(const [key,value] of map){
    console.log(key, ":",value )
}

const myObject={
    "car1":'BMW',
    "car2":'Mercedes'
}
// for (const [key,value] of myObject)/// this loop will not run the object
// {
//     console.log(key , ':',value)
// }
/// for in is required
for(const key in myObject)
    {
        console.log(`${key} is ${myObject[key]}`)
    }

const programming = ['py','js','r','cpp']
for(const key in programming){
    console.log(programming[key])
}

// maps is not iterable for in loop

// with  function

programming.forEach(function(value){
    console.log(value)
})


/// with arrow function

programming.forEach((items) =>{
    console.log(items);
    
})


function number(items){

    console.log(items)

}
programming.forEach(number) // refernce is given

////////////////////////////////////


programming.forEach((items,index,arr) => {
    console.log(items,index,arr)
})

/////////////////////////
const pLanguage =[
{
    lname:'java',
    lfilename:'java'
},
{
    lname:'python',
    lfilename:'py'
},
{
    lname:'javascript',
    lfilename:'js'
}


]

pLanguage.forEach( (items) =>{
    console.log(items.lname,'.',items.lfilename)
})