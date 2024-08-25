let i = localStorage.length;
//localStorage.clear();
render();


function render() {
    for (let j = 0; j < localStorage.length; j++) {
        let value = localStorage.getItem(`${j}`);
        originalData(value, "Edit");
        console.log(value);
    }

    if (localStorage.length != 0) {
        originalData('', "Add");
        const begin = document.querySelector(".begin");
        begin.remove();
    }

}


function originalData(value, btntxt) {
    let note = document.createElement("div");
    note.innerHTML = `<div class="eachnote">
    <textarea class="note">${value}</textarea>
    <button class="add addbtn" onclick="add()">${btntxt}</button>
</div>`;
    note.style.marginTop = '20px';
    note.classList.add("eachnote");

    let notes = document.querySelector(".notes");
    notes.appendChild(note);
}



function add() {
    let btn = document.querySelectorAll(".addbtn");
    if (btn.length != 0) btn[btn.length - 1].textContent = "Edit";
    else if (btn.length == 0) {  //means begin btn
        const begin = document.querySelector(".begin");
        begin.remove();
    }
    store();
    createNew();
}

function createNew() {
    let note = document.createElement("div");
    note.innerHTML = `<div class="eachnote">
    <textarea class="note"></textarea>
    <button class="add addbtn" onclick="add()">Add</button>
</div>`;
    note.style.marginTop = '20px';
    note.classList.add("eachnote");

    let notes = document.querySelector(".notes");
    notes.appendChild(note);
}

function store() {
    let notes = document.querySelectorAll(".note");
    if (notes.length != 0) localStorage.setItem(`${i++}`, notes[notes.length - 1].value);
    // notes.length!=0 handles begins as it was returning null
}


// what the fuck I am doing ?
// I am creating a note taking app
// on clicking add it adds textAtEnd of noteslist(last note) to the local Storage
// I am maintianing an Index == localstorage.length and adding to localstoarge based on that index 
// i am redering my values creating element for them whenver the broser refreshes based on localstorage


