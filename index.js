var kittens = ["Milo", "Otis", "Garfield"] //define your array here
var extraKittenA = "Broom";
var extraKittenB = "Arnold"
var extraKittenC = "Ralph"

function destructivelyAppendKitten(){
kittens.push(extraKittenC)
}

function destructivelyPrependKitten(){
  kittens.unshift(extraKittenA)
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

function removeLastKitten(){
  return [kittens.slice(kittens.length-1)]
}

function removeFirstKitten(){
  return [kittens.slice(1)]
}
// Add your functions and code here
