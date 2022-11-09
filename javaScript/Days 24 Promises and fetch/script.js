
const promiseObject = fetch('./data.json')
// fech is am API form the browser which return you an promise object 
//Promise is an object which deliver you an value  sometime in future

// as soon this "responce" has the data .then will run 
promiseObject.then(responce => {
   const promiseObject2 = responce.json() 
   //.json() help to parse the json data  and return the promisis 
   promiseObject2.then(data => {
    console.log(data);
   })
return 123
   
}).then(finalValue => {
   console.log(finalValue);
})

//NOTE:  every .then call always return promisis  

