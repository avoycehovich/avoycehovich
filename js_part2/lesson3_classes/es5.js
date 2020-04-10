function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log("Hello " + this.name);
    }
}

User.prototype.exit = function(name) {
  console.log("User " + this.name + ' is leaving');
};

let ivan = new User('Ivan', '1');
let alex = new User('Alex', '2');

console.log(ivan);
console.log(alex);