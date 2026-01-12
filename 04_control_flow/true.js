const userEmail = 'sandesh@.ai'

if(userEmail){
    console.log(`got user email`);///
    }
else{
    console(`don't have user email`)
}

/// if useremail have value then it's truly value if there is no value then it's falsy value


/// falsy value

// false,0,-0, BigInt 0n ,''null,undefined,NaN

/// truthly value
///"0",'false','  ',[],{},function(){} white space pani truthly ho


/// nullish colascing operator(??): null undefined


let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 /// 10 will be o/p
val1 = undefined ?? 20
console.log(val1)



/// Terniary Operator
const iceTea = 200
iceTea <= 180 ? console.log('less than 180'): console.log('greater than 180')