// let evenNumber = [];
// let oddNumber = [];


// for(let i = 0; i < 20; i++){

//     if(i % 2 == 0){
//         evenNumber.push(i);
        
//     }else {
//         oddNumber.push(i)
//     }
// }
// console.log(oddNumber);



// Skip Number 
//  ======================
let evenNumber = [];
function skipNumber(number){
    
    for(let i=0; i<20; i++){
        if(i % 2 == 0 && i !== number){
            evenNumber.push(i);
        }
    }

    return evenNumber;
}

console.log(skipNumber(10));


let newNumber  =[];
function useContinue(number){
  for (let i = 0; i < 20; i++) {



    if(i === number){
        continue;
        // Note:  If your are inside the loopo and loop body contain  "contineu"
        // the itteration is marked as done  or it skip current itteration or loop,   
    }

    
  }
}

