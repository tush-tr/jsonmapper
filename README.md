<img src="https://img.shields.io/github/issues/tush-tr/jsonMapper"> <img src="https://img.shields.io/github/forks/tush-tr/jsonMapper"> <img src="https://img.shields.io/github/license/tush-tr/jsonMapper"> <img src="https://img.shields.io/github/stars/tush-tr/jsonMapper"> <a href="https://twitter.com/tush_tr604" target="blank"><img src="https://img.shields.io/twitter/follow/tush_tr604?logo=twitter&style=flat" alt="tush_tr604" /></a> <img src="https://img.shields.io/github/languages/count/tush-tr/jsonMapper">

# JsonMapper
A nodejs library which allows you to assign a json file values with another json file and create a new desired json file.

## Installing the package
```sh
npm install @tush-tr/jsonMapper
```

## Import the package

```js
const {objectFill,jsonFill} = require('@tush-tr/jsonMapper')
```

## Functions

### objectFill

```js
const desiredObj = objectFill(target, source)
```

#### Example:

```js
const {objectFill,jsonFill} = require('@tush-tr/jsonMapper')
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
```

### jsonFill

```js
let assignJson = jsonFill(targetFilePath, sourceFilePath, outputJsonFilePath)
```

#### Example:

```js
const fillJson = jsonFill('target.json','source.json','output.json')
console.log(fillJson)
// done...
```

# Contributing 🍻

I welcome pull requests, bug fixes and issue reports. Before proposing a change, please discuss your change by raising an issue.

# Maintainer 😎

[Tushar Rajpoot](https://twitter.com/tush_tr604)


## License

[MIT license](LICENSE) © Tushar Rajpoot
