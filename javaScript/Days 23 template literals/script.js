const person = {
    name: "Anand Magar",
    age: 12
}

const name =  'My name is \
anand , use back slis to create in next  line'

//Injecting properties dynamically, i have to concatinate that like '+person.name+'
//NOTE: It will looks quickly ugly when you try to concaticate them more
const aboutMe = 'My name is '+person.name+' I am '+person.age+' years old'

const aboutMeLatest = `My name is ${person.name} and my age is ${person.age}`

console.log(aboutMe);

