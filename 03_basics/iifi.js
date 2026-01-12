// Immediately Invoked Function Expression(IIFE)
 
(function car()  //function defination
{
    console.log(`This is car`);
    
})
(); // function call
// to remove the global scope pollution iifi is used
// after this if another function like this is define then it doesn't know when to terminate the program to terminate it ; is required at last 



(function carTwo()  // named iifi
{
    console.log(`this is car2`)
})
();

( () => {  /// named iifi
    console.log(`this is car3`);
    
})
();


((name) => { //named iifi with parameter 
    console.log(`this is car4 ${name}`);
    
})
('Fortuner')