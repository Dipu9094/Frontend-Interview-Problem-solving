for (let i = 1; i <= 5; i++) {
    console.log(i);
}

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5);

const fruits = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits) {
    console.log(fruit);
}

const person = { name: "Alice", age: 25, city: "New York" };
for (let key in person) {
    console.log(key, ":", person[key]);
}

const numbers = [1, 2, 3, 4];
numbers.forEach((num) => console.log(num * 2));
