function myModule() {
    this.hello = function () {
        return "Hello";
    };
    this.bye = function () {
        return "Bye";
    };
}

module.exports = myModule;