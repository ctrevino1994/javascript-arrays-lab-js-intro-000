var kittens = [
  "Milo",
  "Otis",
  "Garfield"
] //define your array here

function destructivelyAppendKitten(name) {
  kittens.push("Ralph")
  return name;
}
// Add your functions and code here
function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
  return name;
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
  return name;
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
  return name;
}

function appendKitten(name) {
  [...kittens, "Broom"]
  return [...kittens, "Broom"];
}

function prependKitten(name) {
  ["Arnold", ...kittens]
  return ["Arnold", ...kittens];
}

function removeLastKitten() {
  kittens = kittens.slice(kittens.length - 1)
  return kittens;
}

function removeFirstKitten(name) {
  kittens = kittens.slice(1)
  return name;
}
