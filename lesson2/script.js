

let calc = (a,b) => a + b;

console.log(calc(3,4));
console.log(calc(5,5));

function returnedVar() {
    let a = 50;
    return a;
}

let anotherNum = returnedVar();
console.log(anotherNum);


let str = "test";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.2px";
// console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));