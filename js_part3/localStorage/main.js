// localStorage.setItem("number", 1);
// console.log(localStorage.getItem("number"));
//
// localStorage.removeItem("number");
//
// localStorage.clear();

window.addEventListener("DOMContentLoaded", function () {
    let checkBox = document.getElementById('rememberMe');
    let change = document.getElementById('change'),
        form = document.getElementsByTagName('form')[0];
    
    if (localStorage.getItem("isChecked") === "true") {
        checkBox.checked = true;
    }

    if (localStorage.getItem("bg") === "changed") {
        form.style.backgroundColor = '#FF4766';
    }

    checkBox.addEventListener('click', function () {
        localStorage.setItem("isChecked", true);
    });

    change.addEventListener('click', function () {
        localStorage.setItem("bg", "changed");
        form.style.backgroundColor = '#FF4766';
    });

    let person = {
        name: 'name',
        age: 30,
        tech: ['mobile', 'tel']
    };

    let serializedPerson = JSON.stringify(person);
    localStorage.setItem("person", serializedPerson);

    console.log(JSON.parse(localStorage.getItem("person")));
});