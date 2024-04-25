// function sum(a, b) {
//     return a + b;
// }
// console.log("Result:", sum([], []));
// Переменные
var nameTs = "Evgeniy";
var ageTs = 22;
var isAdminTs = true;
var isStudentTs = false;
var und = undefined;
und = undefined;
var nullTs = null;
nullTs = null;
// Массив
var fruitsTs = ["apple", "orange", "peech"];
// let fruitsTs2 : Array<string> = ["apple", "orange", "peech"];
var agesTs = [5, 10, 18];
agesTs.push(22);
var firstAge = agesTs[0]; // number
var firstFruit = fruitsTs[0]; // string
// Объекты
var studentTs = {
    name: "Student",
    age: 19,
    isAdmin: true,
};
var student2 = {
    name: "",
    age: 12,
    isAdmin: false
};
var studentName = studentTs.name; // string
var student3 = {
    name: "Evgeniy",
    age: 22,
    isAdmin: true
};
var student4 = {
    name: "Student",
    age: 20,
    isAdmin: true
};
var university = {
    name: "Uni",
    students: [student3],
    addStudent: function (student) {
        university.students.push(student);
    }
};
// Функция
function sum(a, b) {
    return a + b;
}
console.log("Result TS:", sum(5, 10));
function sumStudentsAge(student1, student2) {
    return student1.age + student2.age;
}
var sumedAge = sumStudentsAge(student3, student4);
function returnOlderStudent(student1, student2) {
    if (student1.age > student2.age) {
        return student1;
    }
    else {
        return student2;
    }
}
