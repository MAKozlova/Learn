// лекция 12

// let obj = new Object();

let options = {
    width: 1024,
    heigth: 1024,
    name: "test"
};

console.log(options.name);

options.bool = false;
options.colors = {
    border: "black",
    background: "red"
}

delete options.bool;

console.log(options);

for (let key in options) {
    console.log("Свойство " + key + " имеет значение " + options[key]);
}

console.log(Object.keys(options).length);




// лекция 11

// function first() {
//     setTimeout (function() {
//                     console.log(1);
//                 }, 500);
// }


// function second() {
//     console.log(2);
// }

// first();
// second();


// function learnJS(lang, callback) {
//     console.log("Я учу " + lang);
//     callback();
// }

// function done() {
//     console.log("Я прошла 10й урок");
// }

// learnJS("JavaScript", done);






// // 'use strict';
// let num = 23;
// function showMessage() {
//     num = 50;
//     // console.log(num);
//     return (num + 1);
// }
// showMessage();
// // console.log(num);

// let str = "text"
// console.log(str.length)

// console.log(str.toUpperCase());


// let twelve = '12.2px';
// // console.log(Math.round(twelve));

// console.log(parseInt(twelve));
// console.log(parseFloat(twelve));


