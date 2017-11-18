// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

let name= "Ralph";
function destructivelyAppendDriver(name) {
    drivers.push(name);
}

let name = "Bob";
function destructivelyPrependDriver(name){
  drivers.unshift(name);
}


