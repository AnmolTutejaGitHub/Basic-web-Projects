'use strict'
// fucking then 


// modern way of making AJAX call is by using fetch API

// fetch API is a promise based API
const request = fetch('url (api endpint)');
console.long(request); // promise is logged to console 
// request now contains promise

// promise : An object that is used as a placeholder for the furture reult of an asynchronous operation
// promise : a container for a future value

// promise : a value that may not be available yet, but will be resolved in the future

// The lifecycle of promise :
// 1. pending : before the future value is avaliable
//2. settled : fulfilled or rejected 
//  a promise is only setttled once 
// 3. consumed : when we already have a promise eg promise returned from Fetch API


///////////////////////////
// how to use a promise

// country here parameters we gave eg if using weather api need to specify it 
// some apis also require api keys
const requestfunc = function (country) {
    // then method will be called as soon as a promise is fulilled
    // func inside then will be excuted
    fetch(`url/name/${country}`).then(function (response) {
        console.log(response);
        // response.json(); // needed to call json method on the response objects
        // this json function here is only a asyncronous func here 
        // it will return a new promise 
        // so return this response.json and handle this promise too
        return response.json();
    });
};

// clear code with handling above code does not handle json 
// to handle that just use then

const requestfunc2 = function (country) {
    fetch(`url/name/${country}`).then(function (response) {
        console.log(response);
        return response.json();
    }).then(function (data) {
        console.log(data);
    });
};

// using arrow function here
const requestfunc3 = function (country) {
    fetch(`url/name/${country}`).then(response => response.json()).then(data => func(data[0]));
};

// can use index or loop to handle that data[0]
// then method returns whatever is returned from promise 
// parameter we are passing to then is fulfilled value of the promise
// can use recursion to make more calls have base case may be not found
// can use loop to make multiple calls

then(function (data) {
    console.log(data);
    return fetch(); // do it by changing chrcpoints //why return as that promise returned here will be passed to next then
}).then();// this then handles the new promise call notice we use fetch
//but this then return data in jason format so handle that too
// use .then() on it


// in summary :

function Apicall() {
    fetch()// will return peromise object 
    fetch().then(function (response) { // then parameter is function what u want to do once promised is settled
        // parameter to that dnction will be promise object
        console.log(response);
        // now convert this reponse promise into json
        // problem is json is also asyncronous func so return that from this then function to be handled by next then func
        return response.json(); // this will return a new promise
    }).then(function (data) {
        console.log(data);
    })
}


// above dont handle errors we assumed that promised is flfilled 

// handling rejected promises
fetch().then(response => response.json(), err => alert(err));
// has to do with all then chaning
// or simply can handle error in the end of chane by .catch
//.catch(err=>alert(err));
// instead of alert call the func that do dom manipulatuon to handle the error
// can catch error anywhere in the chain


// Async/Await = Async = makes a function return a promise
//                           Await = makes an async function wait for a promise

// Allows you write asynchronous code in a synchronous manner
// Async doesn't have resolve or reject set up as parameters
// Everything after Await is placed in an event queue

