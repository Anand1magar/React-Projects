
const number = document.getElementById('counter')
const incrementBtn = document.getElementById("incrementer")
const decrementBtn = document.getElementById("decrementer")
const ulElement = document.getElementById('list-items')

let counter = 0

function incrementerFun(){
    counter ++
    number.innerText = counter
    const li = document.createElement("li")
    li.setAttribute('data-counter', counter)
    if(counter%2 == 0){
       li.style.background = "red"
       li.style.padding = "10px"
    }else{
        li.style.padding = '10pxs'
        li.style.background = 'yellow'
    }
  
    console.log(li);
    li.innerHTML = "<b> Sentances </b>" + counter
    ulElement.appendChild(li)

   
}

function decrementerFun(){
    const li = ulElement.querySelector('[data-counter="'+counter+'"]')  //css attributes selecctor
    li.remove(),
    // const number = parseInt(li.getAttribute('data-counter'), 10) 
    // if(number % 2 == 0){
    //     li.remove();
    // }
    
    counter --
    number.innerText = counter
}

incrementBtn.addEventListener('click', incrementerFun)
decrementBtn.addEventListener('click', decrementerFun)


