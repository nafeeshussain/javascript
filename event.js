function changeColor()
{
    let h1 = document.getElementById("heading");
    h1.style.color = "red";
}
function defaultColor()
{
    let h1 = document.getElementById("heading");
    h1.style.color = "black";
}
//changeColor();


function displayDate()
{
    document.getElementById("display").innerHTML = Date();
}

function typeText(text){
    document.getElementById("heading").innerHTML = text;
}