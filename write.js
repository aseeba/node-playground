const fs = require('fs')
const { exit } = require('process')

const file = 'tools.json'
const tool = process.argv[2]

fs.promises
  .readFile(file, { encoding: 'utf-8' })
  .then(addToolToJSON)
  .then(onWriteSuccess)
  .catch(onError)

//example from fetch:
// fetch(url)
// .then(res => res.json())
// .then(data => console.log(data))

function addToolToJSON(data) {
  const tools = JSON.parse(data)
  tools.push({ name: tool })
  return fs.promises.writeFile(file, JSON.stringify(tools), {
    encoding: 'utf-8',
  })
}

function onWriteSuccess() {
  exit(0)
}

function onError(error) {
  console.error(error)
}

// old style with nested callbacks:
// fs.readFile(file, { encoding: 'utf-8' }, (err, data) => {
//   err && exit(1)
//   const tools = JSON.parse(data)
//   tools.push({ name: tool })

//   fs.writeFile(file, JSON.stringify(tools), { encoding: 'utf-8' }, err => {
//     exit(err ? 1 : 0)
//   })
// })
