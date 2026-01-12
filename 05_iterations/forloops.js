// for loop 

for( let index = 0 ; index < 10; index ++){
    const element = index;
    // console.log(element);
    
}
// cntrl+d to select multiple duplicate value



for( let i =0 ; i<=10 ; i ++)
{
    // console.log(`outer loop value ${i}`);
    
    for( let j=0; j<=10 ; j++)
    {
        // console.log(`inner loop value ${j}`);
        // console.log(i+'*'+j+ '=' +i*j)
        

    }
}

let myArray = ['superman','batman','flash']
for (let index=0; index<myArray.length; index++)
{
    const element=myArray[index]
    // console.log(element)

}

for (let index=0; index<=10; index++)
{
    if(index == 5){
        console.log(" 5 detected");
        break
        
    }
    console.log(`value of i is ${index}`)
}


for (let index=0; index<=10; index++)
{
    if(index == 5){
        console.log(" 5 detected");
        continue
        
    }
    console.log(`value of i is ${index}`)
}