// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];


function destructivelyAppendDriver(name) {
    drivers.push(name);
}


function destructivelyPrependDriver(name){
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
  return [...drivers, name];
}

//let name2 = "Arnold";
function prependDriver(name){
  return [name, ...drivers];
}

function removeLastDriver(){
  return drivers.slice(1);
}

function removeLastDriver () {
  return drivers.slice(0, drivers.length - 1);
}
