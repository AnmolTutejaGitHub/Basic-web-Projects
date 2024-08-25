// syncronous code : code is executed line by line maintaining the order of execution
// Asyncronous javascript (it dont wait does) is not blocking

alert("hello");
// func() this func will not be executed unless OK is pressed on alter this is syncronous javascript

// asyncronous code :
const p = document.querySelector('.p');

setTimeout(function () { //settimeout is asyncronous
    p.textContent = "My name is Anmol";
}, 5000);

p.style.color = 'red'; //exeurtion will not wait for asyc funs and continue executing 

img.src = './'; //this is asyncronous not event listener 
img.addEventListner('load', function () {
    img.classList.add('fade in');
}); //this will run after the image loads
// this is asyncronous code


// AJAX : Asyncronous javaScript and XML
// Allows to communicate with remove web servers in asyncromous way
// with AJAX calls we can request data from web servers dynamically

// XML is data format which is used to send data on the web . It is not used today , other data format is JSON



