let options = {
    width: 1024,
    height: 1024,
    name: 'test'
};
console.log(options.name);

options.bool = true;
options.colors = {
    border: "black",
    bg: "red"
};

delete options.bool;

console.log(options);

for (let key in options) {
    console.log("Key " + key + " value: " + options[key]);
}

console.log(Object.keys(options).length);

// let arr = ["first", 2, 3, "four", 5];
//
// // arr.pop(); // delete last elem
// //
// // arr.push("5"); // add to end of arr
// //
// // arr.shift(); // delete 1st elem
// //
// // arr.unshift("1"); // add first elem
//
// for (let el in arr) {
//     console.log(el);
// }
//
// arr.forEach(function (item, i, mass) {
//     console.log(i + ": " + item + " (array: " + mass + ")");
// });
//
// let mass = [1,3,4,6,7];
//
// for (let el of mass) { // of = value in arr; in = number of elem in arr
//     console.log(el);
// }

// let ans = prompt("", "");
// let arr = [];
//
// arr = ans.split(",");
//
// console.log(arr);


// let arr = ["a", "b", "c", "d"];
// let str = arr.join(", ");
// console.log(str);

let arr = [1, 15, 4];
let str = arr.sort(compareNum);

function compareNum(a, b) {
    return a- b;
}
console.log(str);

let soldier = {
    health: 400,
    armor: 100
};

let john = {
    health: 100
};

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);

