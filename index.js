var kittens = ["Milo", "Otis", "Garfield"] //define your array here
var extraKitten = "Oscar";

function destructivelyAppendKitten(extraKitten){
kittens.push(extraKitten)
}

function destructivelyPrependKitten(extraKitten){
  kittens.unshift(extraKitten)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}
// Add your functions and code here
