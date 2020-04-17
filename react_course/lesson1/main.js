// let names = ['Ivan', 'Arkadiy', 'Olesya', 'Vera'];
// let shortNames = names.filter((name) => {
//     return name.length < 5
// });
//
// console.log(shortNames);
//
// let ans = ['Ivan', 'AnnaA', 'HelLo'];
//
// ans = ans.map((item) => {
//     return item.toLowerCase();
// });
//
// console.log(ans);
//
// function fetchData(data, count = 1) {
//     console.log(`Data is: ${data} count = ${count}`);
// }
//
// fetchData('something', 2);
//
// function max(...numbers) {
//     console.log(numbers);
// }
//
// max(3,4,67);
//
// let arr1 = [1,2,5],
//     arr2 = [43, 35 -1];
//
// const res = Math.max(...arr1, ...arr2);
//
// console.log(res);
//
// const avatar = 'Photo';
// const  user = {
//     name: 'default',
//     pass: 'qwerty',
//     rights: 'user'
// };
//
// const admin = {
//     name: 'admin',
//     pass: 'root'
// };
//
// const res1 = Object.assign(user, admin);
// console.log(res1);
//
// const res2 = {...user, ...admin, avatar};
// console.log(res2);
//
// const x = 25, y = 10;
// const coords = {x, y,
// calcSquare() {
//     console.log(this.x * this.y);
// }};
//
// coords.calcSquare();
// console.log(coords);


const user = {
    name: {
        first: 'Sam',
        second: 'Smith'
    },
    pass: 'qwerty',
    rights: 'user'
};

const {name: {first, second}, pass, rights} = user;

console.log(first, second);

function connect({
                     host = 'localhost',
                     port = '3000',
                     user = 'default'
                 } = {}) {
    console.log(`host: ${host} port = ${port}, user: ${user}`);
}

connect({
    port: 2525
});
connect();

const numbers = [[3, 5], [6, 6]];

const [[a,b], [c,d]] = numbers;

console.log(a, b, c, d);

const country = {
    name: 'England',
    population: 2000000,
    gender: {
        male: ['15%', '40%'],
        female: ['16%', '39%']
    }
};

const {gender: {male: [maleUnder18, maleAdult], female: [femaleUnder18, femailAdult]}} = country;

console.log(maleUnder18, femailAdult);