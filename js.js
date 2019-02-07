// лекция 18
let wrapper = document.querySelector('.wrapper')
let div = document.createElement('div');

    div.classList.add('black');
    console.log(div);

// document.body.appendChild(div);
// wrapper.appendChild(div);

document.body.insertBefore(div, heart[1]);




// в конец
// после элем
// удалить
// заменить
// по отн к родителю



// лекция 17


// console.log("2");

// let box = document.getElementById('box'),
//     btn = document.getElementsByTagName('button'),
//     circle = document.getElementsByClassName('circle'),
//     heart = document.querySelectorAll('.heart'),
//     oneHeart = document.querySelector('.heart');



// console.log(box);
// console.log(btn);
// console.log(btn[0]);
// console.log(circle[2]);
// console.log(heart);
// console.log(oneHeart);

// лекция 16

// function hello() {
//     console.log("Hello world!");
// }

// hello();

// function hi() {
//     console.log("Hello world!");
// }

// hi();

// let arr = [1, 15, 4, 30, 42],
//     i = arr.sort(compareNum);

// function compareNum(a,b) {
//     return a-b;
// }

// console.log(arr);


// лекция 15


// let soldier = {
//     health: 400,
//     armor: 100
// }


// let john = {
//     health: 100
// }

// john.__proto__ = soldier;

// console.log(john);
// console.log(john.armor);

// лекция 13

// let arr = ["first", 2, 3, "four", 5];

// arr.pop();
// arr.push("5");
// arr.shift();
// arr.unshift('1');

// console.log(arr);

// arr.forEach(function(item, i, mass) {
//     console.log(i + ": " + item + " (массив: " + mass + ")");
// } )

// let mass = [1, 3, 4, 6, 7];

// for (let key of mass) {
//     console.log(key);
// }


// let ans = prompt("",""),
//     arr = [];
// arr = ans.split(",");
// console.log(arr);

// let arr = ['adlj', 'adfjkl', 'fjdskl', 'akmvk'],
//     i = arr.join(": ");
// console.log(i);

// let arr = ['adlj', 'adfjkl', 'fjdskl', 'akmvk'],
// let arr = [1, 15, 4],
//     i = arr.sort(compareNum);

// function compareNum(a, b) {
//     return a-b;
// }
// console.log(arr);

// псевдомассивы
// нет методов для массивов



// лекция 12

// let obj = new Object();

// let options = {
//     width: 1024,
//     heigth: 1024,
//     name: "test"
// };

// console.log(options.name);

// options.bool = false;
// options.colors = {
//     border: "black",
//     background: "red"
// }

// delete options.bool;

// console.log(options);

// for (let key in options) {
//     console.log("Свойство " + key + " имеет значение " + options[key]);
// }

// console.log(Object.keys(options).length);




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


