//https://api.imgflip.com/get_memes

function generate() {
    const url = "https://api.imgflip.com/get_memes";
    fetch(url)
        .then(response => response.json())
        .then(function (data) {
            console.log(data);
            const memes = data.data.memes;
            const i = Math.floor(Math.random() * memes.length);
            const meme = memes[i];

            const img = document.querySelector("img");
            const para = document.querySelector("h1");
            para.textContent = meme.name;
            img.src = meme.url;
        })
        .catch(error => console.error('Error:', error));
}

generate();
