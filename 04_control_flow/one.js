// if
const isUserLoggedIn = true
if (isUserLoggedIn){
    console.log(`this code is executable`);
    

}
if(2 == '2'){
    console.log(`executable`)

}

/// for strict  type checking ,(check the datatypes) ===
//// operators >,<,>=,<=,==,!=,===,!==


score = 200
if(score> 100){
    const power = 'fly'
    console.log(`user power:${score},can ${power}`);
    
}



const userLoggedIn = true
const debitCard = true 
const loggedInFromGoggle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard)
{
    console.log('allow to buy the course')
}

if(loggedInFromEmail || loggedInFromGoggle)
{
    console.log(`user logged in`)
}