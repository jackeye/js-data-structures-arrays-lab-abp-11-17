// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

let name= "Ralph";
function destructivelyAppendDriver(name) {
    drivers.push(name);
}

let name2 = "Bob";
function destructivelyPrependDriver(name2){
  drivers.unshift(name2);
}

function destructivelyRemoveLastDriver(name){
  drivers.pop("Garfield");
}

function destructivelyRemoveFirstDriver(){
  drivers.shift("Milo");
}

//let name = "broom";
function appendDriver(name){
  return (...drivers, name);
}
