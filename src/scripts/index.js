// Переменные
let name = "Evgeniy";
let age = 22;
let isAdmin = true;
let isStudent = false;

// Константа
const myFirstName = "Evgeniy"; // --- предпочтительно

const student = {
    name: "Student",
    age: 19,
    isAdmin: true
};

console.log(student.name);

// Массивы
const fruits = ["apple", "orange", "peech"];
const ages = [5, 10, 18];

console.log("Array length: " + fruits.length);
console.log("First fruit: " + fruits[0]);

// Операторы
const mathScore = 80;
const russianScore = 60;
const biologyScore = 90;

const average = (mathScore + russianScore + biologyScore) / 3;

console.log(average);

// Условия

// >=
// <=
// >
// <
// ==
// !=

// ===
// !==

if (student.age >= 18) {
    console.log("Студент совершеннолетний!")
} else {
    console.log("Студент не совершеннолетний!!!")
}

if (student.age != 18) {
    console.log("Студенту не 18 лет!") 
}

console.log(18 === "18");

const datOfTheWeek = "Wednesday";

switch (datOfTheWeek) {
    case "Monday":
        console.log("Сегодня первый рабочий день!");
        break;
    case "Friday":
        console.log("Сегодня последний рабочий день!")
        break;
    default:
        console.log("Обычный день!")
        break;
}

// Циклы

for (let i = 5; i <= student.age; i++) {
    console.log("Age: " + i);
}

let whileAge = 15;
while (whileAge > 0) {
    console.log("Age: " + whileAge);

    whileAge = whileAge - 1;
};

// Функции

function y(x) {
    return x + 2;
};

const value = y(8);

console.log(value);

function printStudentName(name){
    console.log(name);
};

printStudentName(student.name);

// Стрелочные функции
const printStudentName2 = (name) => {
    console.log(name);
};

printStudentName2(student.name);

// Коллбэки
function functionWithCallback(anotherFunction) {
    console.log("Сейчас выполнится другая функция!!!");

    anotherFunction();
};

functionWithCallback(() => {
    console.log("Я другая функция");
});

// Date
const date = new Date();

console.log("Дата: " + date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear());
