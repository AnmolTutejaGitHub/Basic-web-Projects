function generate() {
    const input = document.querySelector("input");
    const length = Number(document.querySelector("input").value);

    const upper = "ABCDEFGHIJKLNMOPQRSTUVWXYZ";
    const lower = upper.toLowerCase();
    const numbers = "0123456789";

    const prob = "ABCDEFGHIJKLNMOPQRSTUVWXYZ" + lower + numbers;

    let password = "";
    for (let i = 0; i < length; i++) {
        password += prob[Math.floor(Math.random() * prob.length)];
    }

    input.value = password;
}

let temp = "";

function hide() {
    const input = document.querySelector("input");
    //const length = Number(document.querySelector("input").value);
    const length = document.querySelector("input").value.length;

    let output = '*'.repeat(length);
    temp = input.value;
    input.value = output;
    console.log(output);
}

function show() {
    document.querySelector("input").value = temp;
}

function copy() {
    navigator.clipboard.writeText(document.querySelector("input").value);
}