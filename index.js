var kittens = ["Milo", "Otis", "Garfield"] //define your array here
var extraKittenA = "Broom";
var extraKittenB = "Arnold"

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

function appendKitten(){
  return (kittens.concat(extraKittenA))
}

function prependKitten(){
  return [extraKittenB, ...kittens]
}
// Add your functions and code here
