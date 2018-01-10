'use strict'

let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);
favoriteAnimals.splice(1, 0, 'meerkat');
console.log(favoriteAnimals);
console.log("I think that the new value of the array will be['blowfish','meerkat','capricorn', 'giraffe']");
console.log("The array has a length of: " + favoriteAnimals.length);
favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);
let a = favoriteAnimals.indexOf('meerkat');
console.log(a);
console.log("The item you are looking for is at index: " + a);



