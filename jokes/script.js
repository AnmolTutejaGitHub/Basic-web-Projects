// https://v2.jokeapi.dev/joke/[Category/-ies]

let result = {};


function generate() {
    category = 'Dark';
    options = document.querySelectorAll("option");
    for (let i = 0; i < options.length; i++) {
        if (options[i].selected) {
            category = options[i].value;
            break;
        }
    }

    console.log(category);
    fetch(`https://v2.jokeapi.dev/joke/${category}`).then(response => response.json()).then(function (data) {
        result = data;
        console.log(result);
        const paragraph = document.querySelector('.para');
        if (result.type === 'twopart') {
            paragraph.textContent = `${result.setup} ${result.delivery}`;
        } else {
            paragraph.textContent = result.joke;
        }
    })
}