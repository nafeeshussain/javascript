/* 
Why Functions?
With functions you can reuse code

You can write code that can be used many times.

You can use the same code with different arguments, to produce different results.
*/

let x = Mul(2,4);
document.getElementById("demo").innerHTML = x; //local variable

//function
function Mul(p1, p2){
    //return;
     //document.getElementById("demo").innerHTML = p1 * p2; //local variable
    return p1 * p2;
    }
Mul(2,5);
/* console.log(Mul(2,5));
console.log(Mul(2,3));
console.log(Mul(2,4));
console.log(Mul(2,6));
console.log(Mul(2,66));
console.log(Mul(2,11));
console.log(Mul(2,55));
console.log(Mul(2,22)); */