const accountId = 12345
let accountEmail = 'abc@mail.com'
var accountPassword = '1234'
accountCity = 'kathmandu'
let accountState

// const can't be change accountId = 2 (not allowed other value)
// let variable allow the changes

// to show multiple variable in the tabular form 
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

// there is only way to declare the constant as const
// to declare the variable there are two ways(let,var)
 

// var simply don't know the {}scope
// as js did't work on the scope basis before as if name variable is use by the 10 user it changes for 10 times
// with use of let  this problem was solved
// prefer not to use the var because of issue in block and functional scope


