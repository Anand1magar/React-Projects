const arr = [2, 3, 4, 6, 7, 8, 9]


const friends = [
    {
        name: 'x',
        age: 22

    },

    {
        name: 'y',
        age: 12
    },

    {
     name: 'z',
     age: 11
    }
]

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
}


const newMappedArraya = arr.map(function(element)   
{
    console.log(element);
    return "I am anand magar"
    
})
console.log(newMappedArraya);


const mapedArraya =  arr.map(element => {
    console.log(element);
    
})

// we cam make arrya in one line also
const maparrayOneLine = arr.map(element => element ** 2)

const filterArrya = arr.filter(element => element > 5) // If condition true 

const findX = friends.find(friend => friend.name === 'x')

arr.forEach(element => {
    console.log("This is forEeachMethod");
    console.log(element);
})


// console.log("for each method");
// console.log(forEachMethod);
// console.log(maparrayOneLine, filterArrya);

// console.log("This is find method");
// console.log(findX);   