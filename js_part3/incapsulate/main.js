//1 create анонимная самовызывающаяся функция

let num = 1;

(function () {
    let num = 2;
    console.log(num);

    return console.log(num + 3);
}());

console.log(num);

//Использование объектного интерфейса

// let user = (function () {
//     let private = function () {
//         console.log("Private");
//     };
//     return {
//         sayHello: function () {
//             console.log('Hello');
//         }
//     }
// }());
//
// console.log(user);
// console.log(user.sayHello());

// 3

let user = (function () {
    let private = function () {
        console.log("Private");
    };
    let  sayHello = function () {
        console.log('Hello');
    };
    return {
        sayHello: sayHello
    }
}());

console.log(user);
console.log(user.sayHello());