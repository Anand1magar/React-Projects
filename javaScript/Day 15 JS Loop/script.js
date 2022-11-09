let evenNumber = [];
let oddNumbers = [];

for(let i = 0; i<20; i++){
 
    if(i % 2 === 0){
        evenNumber.push(i);
    }else{
        oddNumbers.push(i)
    }
}

console.log(evenNumber);
console.log(oddNumbers);