'use strict'
function add(x, y, z) {return x+y+z;};
console.log(add(2, 1, 3));
function colorCar(color) {return "a " + color + " car"};
console.log(colorCar("red"));
const myDetails = { 'firstName': 'Diana', 'lastName': 'Ayoub', 'age': 30 };
function myDetailsprint(obj) { console.log(obj)};
myDetailsprint(myDetails);
function vehicleType(a, b) {
    if (b === 1) {
        console.log(a + " car");
    }
    else if (b === 2) {
        console.log(a + " motorbike");
    }
    else {
        console.log("try to call the function again and the seconde parameter 1 or 2");
    }
}
vehicleType("red", 2);
console.log(3 === 3);
function vehicle(a, b, c) {
    if (b === 1) {
        if (c < 1) {
            console.log("a " + a + " new car");
        }
        else {
            console.log("a " + a + " used car")
        }
    }
    else if (b === 2) {
        if (c < 1) {
            console.log("a " + a + " new motorbike");
        }
        else {
            console.log("a " + a + " used motorbike")
        }
    }
    else {
        console.log("try to call the function and the seconde parameter 1 or 2");
    }
}
vehicle("red", 1, 5);
let vehicles = ["motorbike", "caravan", "bike"];
console.log(vehicles[2]);
console.log("after definition the array I can get the third element by asking for number 2 of the arry");


function vehicle(a, b, c) {
    if (b === 1) {
        if (c < 1) {
            console.log("a " + a + " new caravan");
        }
        else {
            console.log("a " + a + " used caravan")
        }
    }
    else if (b === 2) {
        if (c < 1) {
            console.log("a " + a + " new motorbike");
        }
        else {
            console.log("a " + a + " used motorbike")
        }
    }
    else {
        console.log("try to call the function and the seconde parameter 1 or 2");
    }
}
vehicle("green", 1, 0);



let str = "Amazing Joe's Garage, we service ";
for (let i = 0; i < vehicles.length; i++) {
    str = str + vehicles[i] + "s, ";
}
//remove the space from the end of string
str = str.slice(0, -1);
//replace "," by "." in the end of string
str = str.replace(/.$/, ".");
//replace last comma by " and"
str = str.replace("caravans,", "caravans and");
 console.log(str);


console.log("in 11 if I add more vehicle to the list then the code will change");



var A = {};

let teachers = { teacher1:{name:" philip" }, teacher2: {name : "unmesh" }, teacher3: { name:"Jim "} };
teachers["teacher1"]["language"] = "HTML";["teacher2"]["language"] = "Gitbash"; ["teacher3"]["language"] = "Javascript";
console.log(teachers);    

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
console.log('I think that the value of x==y is false , the value of x===y is also false , the value of x==z is true and we can check it now');
console.log(x == y);
console.log(x === y);
console.log(z == y);


let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;
console.log("when o2 changes effects on the value of o3 , but changing o1 does not effect on o3");
console.log("(o3 = o2 , o2 = o3) are not the same because when I put o3  = o2 that means put the value of o2 inside o3 but When I put o2 =o3 that means put the value of o3 in o2");


let bar = 42;
typeof typeof bar;
console.log("I think it returns into string and I will try now (:");
console.log(typeof typeof bar);
