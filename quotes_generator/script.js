// https://rapidapi.com/juanroldan1989/api/moviequotes/playground/5959b717e4b09f12c1a6d1de
// https://dummyjson.com/docs/quotes
async function api() {

    const by = document.querySelector(".by");
    by.textContent = '';

    fetch('https://dummyjson.com/quotes')
        .then(res => res.json())
        .then(function (data) {
            console.log(data);
            const quotes = document.querySelector(".quotes h1");
            quotes.textContent = data.quotes[Math.floor(Math.random() * 29)].quote;
        });
}


function database() {
    fetch('./database.json')
        .then(res => res.json())
        .then(function (data) {
            console.log(data);
            const quotes = document.querySelector(".quotes h1");
            const keys = Object.keys(data);
            let i = keys[Math.floor(Math.random() * keys.length)];
            quotes.textContent = data[i].quote;

            const by = document.querySelector(".by");
            by.textContent = data[i].Author;
        });
}