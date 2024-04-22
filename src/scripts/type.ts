// function sum(a, b) {
//     return a + b;
// }

// console.log("Result:", sum([], []));

// Переменные
let nameTs: string = "Evgeniy";
let ageTs: number = 22;
let isAdminTs: boolean = true;
let isStudentTs: boolean = false;

let und: undefined = undefined;
und = undefined;

let nullTs: null = null;
nullTs = null;

// Массив
let fruitsTs: string[] = ["apple", "orange", "peech"];
// let fruitsTs2 : Array<string> = ["apple", "orange", "peech"];
const agesTs: number[] = [5, 10, 18];

agesTs.push(22);

let firstAge = agesTs[0]; // number
let firstFruit = fruitsTs[0]; // string

// Объекты
const studentTs: {
  name: string;
  age: number;
  isAdmin: boolean;
} = {
  name: "Student",
  age: 19,
  isAdmin: true,
};

const student2 : {
    name: string;
    age: number;
    isAdmin: boolean;
} =  {
    name: "",
    age: 12,
    isAdmin: false
}

let studentName = studentTs.name; // string

// Интерфейсы
interface Student {
    name: string;
    age: number;
    isAdmin: boolean;
}

const student3 : Student = {
    name: "Evgeniy",
    age: 22,
    isAdmin: true
}

const student4 : Student = {
    name: "Student",
    age: 20,
    isAdmin: true
}

interface University {
    name: string;
    students: Student[];
    addStudent: (student: Student) => void;
}

const university : University = {
    name: "Uni",
    students: [student3],
    addStudent: (student) => {
        university.students.push(student);
    }
}

// Функция
function sum(a : number, b : number) : number {
    return a + b;
}

console.log("Result TS:", sum(5, 10));

function sumStudentsAge(student1 : Student, student2 : Student) : number {
    return student1.age + student2.age;
}

const sumedAge = sumStudentsAge(student3, student4);

function returnOlderStudent(student1 : Student, student2 : Student) : Student {
    if (student1.age > student2.age) {
        return student1;
    } else {
        return student2;
    }
}
