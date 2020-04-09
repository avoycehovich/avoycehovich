let money, time;

function start() {
    money = prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-dd", "");

    while (isNaN(money) || money === "" || money == null) {
        money = prompt("Ваш бюджет на месяц?", "");
    }
}

start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", "");
            let b = prompt("Bo сколько обойдется?", "");

            if (typeof(a) === "string" && typeof(a) != null && typeof(b) != null && a !== "" && b !== "") {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Максимальный уровень достатка");
        } else {
            console.log("Что-то пошло не так");
        }
    },
    checkSavings: function () {
        if (appData.savings) {
            let save = +prompt("Какова сумма накоплений?", "");
            let percent = +prompt("Под какой процент?");
            appData.monthIncome = save/100*12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            appData.optionalExpenses[i + 1] = prompt("Статья необязательных расходов?");
        }
    },
    chooseIncome: function () {
        let items = prompt("Что принесет доп доход(Перечислите через ',')", "");
        if (typeof(items) === "string" && items !== "" && items !== null) {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что то еще?", ""));
            appData.income.sort();
            appData.income.forEach(function (item, i, arr) {
                alert("Способы доп. заработка: " + item);
            });
        }
    }
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + appData[key]);
}
