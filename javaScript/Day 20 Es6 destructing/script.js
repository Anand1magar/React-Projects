
const KEYNAME = "keyname"


const obj1 = {
    name: "anand",
    KEYNAME,
}

const obj2 = {
    name: 'mager',    //overriding the name property value 
    age: 22
}

const obj3 = {
    ...obj1,
    ...obj2
}

console.log(obj3);