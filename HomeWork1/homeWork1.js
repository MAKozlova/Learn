let money = prompt("Ваш бюджет на месяц?"),
    time = prompt('Введите дату в формате YYYY-MM-DD');

// console.log(money);
// console.log(time);

let appData = {
    budget: money,
    timeData: time,
    expensis: {

    },
    optionalExpensis: {

    },
    income: [],
    savings: false
};

// console.log(appData.budget);
// console.log(appData);

// let firstExpItem = prompt("Введите обязательную статью расходов в это месяце"),
//     firstExp = prompt("Во сколько обойдется?"),  
//     secondExpItem = prompt("Введите обязательную статью расходов в это месяце"),
//     secondExp = prompt("Во сколько обойдется?")  

// appData.expensis[firstExpItem] = firstExp;
// appData.expensis[secondExpItem] = secondExp;

let expItem = [],
    expCount = [];

for (let i = 0; i < 2; i++) {
    expItem[i] = prompt("Введите обязательную статью расходов в это месяце");
    expCount[i] = prompt("Во сколько обойдется?");
    appData.expensis[expItem[i]] = expCount[i]; 
}

// console.log(appData.expensis);

let budgetByDay = appData.budget/30;
// console.log(alert('Ваш бюджет на 1 день равен ' + budgetByDay));
alert('Ваш бюджет на 1 день равен ' + budgetByDay);





// console.log(appData.expensis);
