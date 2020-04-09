window.addEventListener('DOMContentLoaded', function () {
    let box = document.querySelector('.box');

    // box.addEventListener('touchstart', function (event) {
    //     event.preventDefault();
    //     console.log("Red box: touchstart");
    //     console.log(event.target);
    //     console.log(event.touches[0].target);
    //     console.log(event.changedTouches);
    //     console.log(event.targetTouches);
    // });

    box.addEventListener('touchmove', function (event) {
        event.preventDefault();
        console.log("Red box: " + event.touches[0].pageX);
    });
    //
    // box.addEventListener('touchend', function (event) {
    //     event.preventDefault();
    //     console.log("Red box: touchend");
    // });
});

// let ans = prompt('Enter your name');

// let reg = /n/g;

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// let pass = prompt("Enter password");

// console.log(pass.replace(/./g, '*'));
// alert("12-34-56".replace(/-/g, ':'));

// let ans = prompt('Enter a number');
//
// let reg = /\d/g;
// console.log(ans.match(reg));

let str = 'My name is R2B2';

console.log(str.match(/\w\d\w\d/i));