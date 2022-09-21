const p = document.querySelector("p");

const dogs = [
    { name: "Snickers", age: 2 },
    { name: "hugo", age: 8 },
];

function makeGreen() {
    p.style.color = "#BADA55";
    p.style.fontSize = "50px";
}

// Regular
console.log("Hello, world!");

// Interpolated
let profession = "a developer";

// Method 1: Use %s
console.log("Hello, I am %s", profession);

// Method 2: Use ES6 template strings
console.log(`Hello, I am ${profession}`);

// Styled
console.log("%c This is a styled text", "font-size: 1.5rem; background: red; font-weight: bold; font-style: italic; padding-right: 1rem");

// warning!
console.warn("Warning");

// Error :|
console.error("Oh no! 404 not found");

// Info
console.info("Clear log by using console.clear() method or Ctrl+L shortcut");

// Testing
console.assert(p.classList.contains("some-class"), "Class doesn't exist");

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog =>{
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}. They are ${dog.age} years old`);
    console.log(`${dog.name} age (dog years): ${dog.age * 7}`);
    console.groupEnd(`${dog.name}`);
});

// counting
console.count("HTML");
console.count("JavaScript");
console.count("HTML");
console.count("JavaScript");
console.count("HTML");
console.count("HTML");
console.count("JavaScript");

// timing
console.time("Fetch data timer");

fetch("https://api.github.com/users/itslouisgs")
    .then(response => response.json())
    .then(data => {
        console.timeEnd('Fetch data timer');

        // table
        console.table(data);
    });

console.table(dogs, ["name"]);