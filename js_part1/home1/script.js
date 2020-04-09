'use strict'

let money = parseInt(prompt("Ваш бюджет на месяц?"));
let time = prompt("Введите дату в формате YYYY-MM-DD");
console.log(typeof (money));
console.log(time);

let appData = {
    money: money,
    time: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let question = prompt("Введите обязательную статью расходов в этом месяце");
let expense = parseInt(prompt("Во сколько обойдется?"));

appData.expenses = question + ": " + expense;

alert("Бюджет на день = " + appData.money / 30);