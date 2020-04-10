// `${let}`

let name = 'Ivan',
    age = 30,
    mail = 'example@gmaol.com';

document.write(`User ${name} ${age} years ago. His mail is ${mail}`);


// let, const
function makeArr() {
    var items = [];

    for (let i = 0; i < 10; i++) {
        var item = function () {
            console.log(i);
        };
        items.push(item);
    }
    return items;
}

var arr = makeArr();
arr[1]();
arr[3]();
arr[7]();

// () => {}

let fun = () => {
    console.log(this);
};
fun();

let obj = {
    number: 5,
    sayNumber: function () {
        let say = () => {
            console.log(this);
        };
        say();
    }
};

obj.sayNumber();

let btn = document.querySelector('button');
btn.addEventListener('click', function () {
    let show = () => {
        console.log(this);
    };
    show();
});

//параметры по умолчанию

function calcOrDouble(number, basis = 2) {
    // basis = basis || 2; ES5 format
    console.log(number * basis);
}

calcOrDouble(10, 3);
calcOrDouble(6);

// Class

class Rectangle {
    constructor(height, width = 20) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(3);
console.log(square.calcArea());

//Spread

let video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'lifejournal', 'bloger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(a + b + c);
}

let number = [2, 5, 7];

log(...number);