//to String

// 1)
console.log(typeof String(4));

// 2)
console.log(typeof ("asdf" + 5));

console.log("https://vk.com/catalog/" + 5);

// to NUmber
// 1)
console.log(typeof Number("5"));
// 2)
console.log(typeof (+'5'));
// 3)
console.log(parseInt("15px"));

let ans = +prompt("Hello?", "");

// to boolean

// 0, '', null, undefined, NaN - FALSE

// 1)
let switcher = null;
if (switcher) {
    console.log("Working...")
}

switcher = 1;

if (switcher) {
    console.log("Working...")
}

// 2)
console.log(typeof Boolean("123"));

// 3)
console.log(typeof (!!"5"));

let x = 5;
alert( x++ );

console.log([ ] + false - null + true);

let y = 1;
let x1 = y = 2;
alert(x1);

console.log([ ] + 1 + 2);

alert( "1"[0] );

let a = [1, 2, 3];
let b = [1, 2, 3];
console.log(a == b);

alert( +"Infinity" );

console.log(2 && 1 && null && 0 && undefined );