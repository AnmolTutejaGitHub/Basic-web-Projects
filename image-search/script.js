
// https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12

const API = '4fEo4aP432rpkR6EeKpJMC5an3R1Y20wBguAXNZPTzs';
let pages = 1;
function generate() {
    let keyword = document.querySelector("input").value;
    fetch(`https://api.unsplash.com/search/photos?page=${pages}&per_page=${20}&query=${keyword}&client_id=${API}`).then(
        response => response.json()
    ).then(
        function (data) {
            console.log(data);
            //let parent = document.querySelector(".display");
            for (let i = 0; i < data.results.length; i++) {
                createChild(data.results[i]);
            }
            pages++;
        }
    )
}

function createChild(obj) {
    let parent = document.querySelector(".display");
    let child = document.createElement("div");
    child.innerHTML = `
    <div style="margin-right: 15px; margin-left: 15px; margin-bottom: 15px;">
        <img src="${obj.urls.small}" width="100%" height="230px" style="object-fit: cover;">
    </div>`
    parent.appendChild(child);
}