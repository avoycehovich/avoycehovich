let startBnt = document.getElementById('start');
let budgetValue = document.getElementsByClassName('budget-value')[0];
let dayBudgetValue = document.getElementsByClassName('daybudget-value')[0];
let levelValue = document.getElementsByClassName('level-value')[0];
let expensesValue = document.getElementsByClassName('expenses-value')[0];
let optExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0];
let incomeValue = document.getElementsByClassName('income-value')[0];
let monthSavingValue = document.getElementsByClassName('monthsavings-value')[0];
let yearsSavingValue = document.getElementsByClassName('yearsavings-value')[0];

let expensesItem = document.getElementsByClassName("expenses-item");
let expensesBtn = document.getElementsByTagName('button')[0];
let optExpensesBtn = document.getElementsByTagName('button')[1];
let countBtn = document.getElementsByTagName('button')[2];
let optExpensesItems = document.querySelectorAll('.optionalexpenses-item');
let incomeItem = document.querySelector('.choose-income');
let savings = document.querySelector('#savings');
let sumValue = document.querySelector('.choose-sum');
let percValue = document.querySelector('.choose-percent');
let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');

let money, time;

expensesBtn.disabled = true;
optExpensesBtn.disabled = true;
countBtn.disabled = true;

startBnt.addEventListener('click', function () {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");

    while (isNaN(money) || money === '' || money === null) {
        prompt('Ваш бюджет?', '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    let date = new Date(Date.parse(time));
    yearValue.value = date.getFullYear();
    yearValue.value = date.getFullYear();
    monthValue.value = date.getMonth() + 1;
    dayValue.value = date.getDate();

    expensesBtn.disabled = false;
    optExpensesBtn.disabled = false;
});

expensesBtn.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value;
        let b = expensesItem[++i].value;

        if (typeof(a) === "string" && typeof(a) != null && typeof(b) != null && a !== "" && b !== "") {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i--;
        }
    }
    expensesValue.textContent = sum;
    countBtn.disabled = false;
});

optExpensesBtn.addEventListener('click', function () {
    for (let i = 0; i < optExpensesItems.length; i++) {
        let opt = optExpensesItems[i].value;
        appData.optionalExpenses[i] = opt;
        optExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBtn.addEventListener('click', function () {
    if (appData.budget !== undefined) {
        appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Максимальный уровень достатка";
        } else {
            levelValue.textContent = "Что-то пошло не так";
        }
    } else {
        dayBudgetValue.textContent = 'Произошла ошибка';
    }
});

incomeItem.addEventListener('input', function () {
    let items = incomeItem.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

savings.addEventListener('click', function () {
    if (appData.savings === true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function () {
    if (appData.savings === true) {
        let sum = +sumValue.value,
            perc = +percValue.value;
        appData.monthIncome = sum / 100 / 12 * perc;
        appData.yearIncome = sum / 100 * perc;

        monthSavingValue.textContent = appData.monthIncome.toFixed(1);
        yearsSavingValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percValue.addEventListener('input', function () {
    if (appData.savings === true) {
        let sum = +sumValue.value,
            perc = +percValue.value;
        appData.monthIncome = sum / 100 / 12 * perc;
        appData.yearIncome = sum / 100 * perc;

        monthSavingValue.textContent = appData.monthIncome.toFixed(1);
        yearsSavingValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};