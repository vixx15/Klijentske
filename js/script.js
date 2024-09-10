console.log("Hello world")

//HOISTING
console.log(x); // undefined (promenljiva je hoisted, ali ne i vrednost)
var x = 10;
console.log(x); // 10

/*c = 8//Uncaught ReferenceError: c is not defined
let c = 2*/

/*const b = 3
b = 8 //Assignment to constant variable.*/

//Promenljive
var price = 2.8
var isRaining = false

let name = "John";
let greeting = 'Hello';
let template = `Hi, ${name}!`;
console.log(template)
let cena = `Price ${4 * 5}`
console.log(cena)

let person = {
    name: "Alice",
    age: 25
};

console.log(person)
console.log(person.name + " " + person.age)

let colors = ["red", "green", "blue"];
console.log(colors[2])
//let x = null
//let x;

function greet() {
    return "Hello!";
}

const greetArrow = () => "Hello!";
console.log(greetArrow());

let add = (a, b) => a + b;
console.log(add(3, 4));// 7

let multiply = (a, b) => {
    let result = a * b;
    return result;
};
console.log(multiply(3, 4)); // 12

console.log(5 == "5"); // true (jednakost bez tipa)
console.log(5 === "5"); // false (stroga jednakost)

console.log(typeof 123); // "number"
console.log(typeof "Hello"); // "string"
console.log([1, 2, 3] instanceof Array);

let array1 = [1, 2, 3];
let array2 = [...array1, 4, 5, 6];
console.log(array2); // [1, 2, 3, 4, 5, 6]

let [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest); // [2, 3, 4]

console.log("--------IF--------")
var z = 5
if (z == 0) {
    console.log('Nula');
} else if (z > 0) {
    console.log('Pozitivan broj');
} else {
    console.log('Negativan broj');
}

console.log("--------SWITCH--------")
let dan = 5;
switch (dan) {
    case 6:
        danIme = 'Subota';
        break;
    case 7:
        danIme = 'Nedelja';
        break;
    case 1, 2, 3, 4, 5:
        danIme = 'Radni dan';
        break;
    default:
        danIme = 'Nepoznat dan';
}
console.log(danIme); // Output: radni dan

console.log("-------FOR-------")
for (let i = 0; i < 5; i++) {
    console.log(i);
}// Output: 0, 1, 2, 3, 4

console.log("--------WHILE---------")
let m = 0;
while (m < 5) {
  console.log(m);
  m++;
}

console.log("--------DO WHILE---------")
let n = 0;
do {
  console.log(n);
  n++;
} while (n < 5);

//alert("Dijalog!")

/*if (confirm("Da li ste sigurni?")) {
   console.log("Korisnik je kliknuo OK")
} else {
   console.log("Korisnik je kliknuo Cancel")
}*/

/*let ime = prompt("Unesite vaše ime:");
if (ime) {
    console.log("Korisnik se zove "+ ime)
}*/

const arr = [3, 5, 7];
arr.greeting = 'hello';

for (let i in arr) {
   console.log(i);
}
for (let i of arr) {
    console.log(i);
 }
 
