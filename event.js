function changeColor() {
    let h1 = document.getElementById("heading");
    h1.style.color = "red";
}
function defaultColor() {
    let h1 = document.getElementById("heading");
    h1.style.color = "black";
}
//changeColor();


function displayDate() {
    document.getElementById("display").innerHTML = Date();
}

function typeText(text) {
    document.getElementById("heading").innerHTML = text;
}


const cars = ['bmw', 'volvo', 'honda', 'kia'];

cars.map(c => {
    if (c == 'honda') {
        let h = `good car ${c} <br>`;
        document.getElementById('new').innerHTML = h;
    }
    else {
        let n = `bad cars ${c} <br>`;
        document.getElementById('old').innerHTML += n;
    }
});

