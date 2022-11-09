function firstFunction(){
    return "I am the first function"
}


arrowFunction()  // Note: Cannot access 'arrowFunction' before initialization

const arrowFunction = () => {
    return 2
}

// const output = firstFunction();  
// console.log(output);



// Anotehr way
const arrowFun2 = () => 3200;

// Arrow function with argument
const arrowFun3 = (arg) => arg   //passing single argument
console.log(arrowFun3(100));

// Arrow function passing single argument without bracket
const arrowFun4 = arg => arg
console.log(arrowFun4(22));


