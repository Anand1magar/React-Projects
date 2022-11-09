const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const number = document.getElementById("number");
const ulElement = document.getElementById("list-items");

let counter = 0;

function incrementer(){

    counter++;
    number.innerText = counter
   
    //Create am element
     const li = document.createElement('li')
     li.innerHTML = "<b>Sentences</b> " + counter

    //  const textNode = document.createTextNode('Sentances' + counter)
    //  const b = document.createElement('b')
    //  b.appendChild(textNode)    
    //  li.appendChild(b);


    // Append that element " append == adding one after another"
    ulElement.appendChild(li)

}

function decrementer(){
    counter--
    number.innerText = counter

}


incrementBtn.addEventListener('click', incrementer)
decrementBtn.addEventListener('click', decrementer)


