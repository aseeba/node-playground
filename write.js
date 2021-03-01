const fs = require('fs') // files system tools
const { exit } = require('process') // exit

const file = 'tools.json' // wie heißt die konstante wo wir rein speichern?
const tools = process.argv[2] // hier tragen wir den process in tools ein

fs.readFile(file, { encoding: 'utf-8' }, (err, data) => {
  err && exit(1)
  const tools = JSON.parse(data)
  tools.push({ name: tool })
})

fs.writeFile(file, JSON.stringify(tools), { encoding: 'utf-8' }, err => {
  exit(err ? 1 : 0)
})
