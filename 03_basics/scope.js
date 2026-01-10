/////SCOPE///////
// let  a =20
// const b = 19
// var v = 9

if(true){
    let  a =20
    const b = 19
    var v = 9 // here var can be acesse outside of this scope

// these varaible have scope under this conditional statement: this is local scope

}
/// global scope//block scope

function one(){
    const username = 'TOm'
    function two(){
    const website = 'youtube'
    console.log(username)

    }
    // console.log(website)// there will be error as we can't acess this
    two()
}
one()
// if there is a nested function then child can acess the parent scope but parent can't acess the child scope


// same thing for the if else conditonal statement


////////////////////++++++++++++
console.log(addone(9))
function addone(num)
{
    return num + 1

}


// console.log(addtwo(4))  /// this will cause error if it is call before the expression as the function is assign into the variable so,it cann't get acessed
const addtwo = function(num){   ///this is said as expression a function assign as variable
    return num + 4
}
console.log(addtwo(4))