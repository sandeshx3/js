const num = [1,2,3,4]

const myTotal = num.reduce( function (acc,currval){
    console.log(`acc:${acc} and currval:${currval}`)
    return acc + currval
},0 )
console.log(myTotal)


///////////arrow function implementation

const total = num.reduce(  (acc,currval) =>  acc+currval,0)
console.log(total);



const course =[

    {
        c_name:'py',
        c_price:4999
    
    },

    
    {
        c_name:'js',
        c_price:6999
    
    },
    
    {
        c_name:'data science',
        c_price:7599
    
    },
]

const priceToPay = course.reduce((acc,items) => acc+items.c_price,0 )
console.log(priceToPay)