/* let x = 5;
let y = 2;
let z = x * y;

//Arithmetic Operators
let a = 3;
let b = --a;

let xx = 10;
xx **= 5;
 */

/* let  x = 10;
let y = 10;
let personName = "Bilal";

personName = (personName == "Imtiaz") ? "Bad Person" : "Good Person";

console.log(personName);


if(x >= y)
{
    console.log("x equal y");
}
else{
    console.log("x not equal y");
}
 */

/* let text1 = "Imtiaz";
let text2 = "Bilal";

let text3 = "Welcome ";
text3 += text1;
text3 += text2;
 */

/* 
let x = 5 + 5;
let y = 10 + "20";

let z = "Hello" + 5;

console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
 */

//JavaScript Logical Operators
/* let name1 = "Imtiaz";
let name2 = "Nafees";

if(name1 === "Imtiaz" && name2 !== "Bilal")
{
    console.log("True");
}
else{
    console.log("False");
}
 */


let x = (150 + 50) * 3; //600
let y = 150 + 50 * 3; //300

console.log(x);
console.log(y);


const str = ['Imtiaz', 'Bilal', 'Nafees', 'Hassam', 'Idees', 'pamper', 'Rustom']; //indexing array
console.log(str[2]);
str.map(s => {
    if (s === "Imtiaz") {
        console.log(`Welcome ${s}!`);
    }
    else {
        console.log("Welcome guest " + s);
    }
});

const person = { firstName: "Imtiaz", lastName: "Ahmed", age: 32, eyeColor: "red" }

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.eyeColor);


const posts = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
        "userId": 1,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
        "userId": 1,
        "id": 5,
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    }
];
let li = "";
posts.map(post => {
    li += `<li><h2>${post.title}</h2><p>${post.body}</p></li>`;
});
document.getElementById("posts").innerHTML = li;






