const { json } = require("stream/consumers")
const {objectFill,jsonFill} = require("./index")
const targetObj = {
    name: "Rahul",
    class: 12
}

const sourceObj = {
    class: 10,
    role: "Monitor",
    name: "Tushar"
}

const assignedObj = objectFill(targetObj,sourceObj)
console.log(assignedObj)
// { name: 'Tushar', class: 10 }

const fillJson = jsonFill('target.json','source.json','output.json')
console.log(fillJson)
// done...