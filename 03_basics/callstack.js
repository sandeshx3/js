/// call stack: how function are execute under the memory
/// javascript execution context
/// {} first global execution context is made which is refer with this variable, node,browser diffrent enviroment have own execution context 
/// in browser this value is window
//// global ec happen everytime in the thread
// js is single thread


//// global execution context 
//// function execution context 
//// eval execution context



///// first memory creation phase: allocation of memory
///// execution phase: 

/// let var1=10
/// let var2=2
// function addNumbers(num1,num2){///function parameters
// let res =num1+num2
// return res
// console.log('this value will never return as no value retrun after the return')
// }
/// let res2 = addNumbers(val1,val2)
//let res1= addNumbers(2,4)/


// phase1:first at all global execution run everytime is allocated with this
/// return res2
///phase2: memory phase : variable are collected 
        //// val1=undefined 
        ///// val2= undefined
        ////// addNumbers = defination
        //// res1 =undefined
        //// res2= undefined
/// phase 3: execution phase     
        ////// val1=10
        ///// val2= 5
        ///// addNumbers
        

        ////// for function call the execution context is made(new variable enviroment+ execution thread)
        ////// again memory and execution phase is requied
            ///(new vairable enviroment+ execution thread)
                 ///a. Memory phase:
                       /// val1=undefined
                       /// val2= undefined
                       /// total= undefined
                ///b. Execution phase
                       /// num1=10
                       ///num2=2
                       ///total=12   
                       
                       //// after execution now this execution context get deleted

                       /// same for the next line

                    
//// how call stack look alike
//// global execution is push first then 