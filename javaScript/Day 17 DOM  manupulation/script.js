const heading = document.querySelector('#hero');

heading.innerHTML = "Anand Magar"
console.log(heading);

const allListItem  = document.querySelectorAll("ul li")

for (let i = 0; i < allListItem.length; i++) {
    const element = allListItem[i];
     element.innerHTML = "Anand Budha Magar"
}


console.log(allListItem);
