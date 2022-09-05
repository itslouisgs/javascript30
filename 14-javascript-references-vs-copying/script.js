// start with strings, numbers and booleans
let name = "Louic";
let age = 20;
let isAdult = true;

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.
const players2 = players;

// You might think we can just do something like this:

// however what happens when we update that array?
players2.push("Louis");

// now here is the problem!

// oh no - we have edited the original array too!
console.log(players, players2);

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const players3 = players.slice();

// one way

// or create a new array and concat the old one in
const players4 = [].concat(players);

// or use the new ES6 Spread
const players5 = [...players];
const players6 = Array.from(players);

// now when we update it, the original one isn't changed
players5.push("Ryland");
console.log(players, players5);

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: "Wes Bos",
  age: 80,
};

// and think we make a copy:
const developer = person;
developer.name = "Louis";
developer.age = 20;

console.log(person, developer);

// how do we take a copy instead?
const me = Object.assign({}, person, {
  profession: "developer",
  age: 20,
});

// We will hopefully soon see the object ...spread
const me2 = { ...person };
console.log(me, me2);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const someone = {
  name: "Someone",
  age: 25,
  socials: {
    facebook: "facebook.com",
    twitter: "twitter.com",
  },
};

console.log(someone);

const someone2 = Object.assign({}, someone);
const someoneStringified = JSON.stringify(someone);
const someoneParsed = JSON.parse(someoneStringified);

console.log(someone2, someoneStringified, someoneParsed);
