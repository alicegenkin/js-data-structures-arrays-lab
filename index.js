// Write your solution here!
//const append = ["Milo", "Otis", "Garfield"]
// const prepend = ["Milo", "Otis", "Garfield"]
// const removeLast = ["Milo", "Otis", "Garfield"]
// const removeFirst = ["Milo", "Otis", "Garfield"]
const drivers  = ["Milo", "Otis", "Garfield"]


function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
  return drivers
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
  return drivers
}


function appendDriver(name) {
  const newArray = [...drivers,name]
return newArray
}

function prependDriver(name) {
  const newArray = [name,...drivers]
  return newArray
}

function removeLastDriver() {
let newArray = [...drivers]
newArray.pop()
return newArray

}

function removeFirstDriver() {
  let newArray = [...drivers]
  newArray.shift()
  return newArray

}