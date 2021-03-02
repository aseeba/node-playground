const fs = require('fs') // files system tools
const { exit } = require('process') // exit

const file = 'tools.json' // Datei in die wir speichern
const tools = process.argv[2] 
const rating = process.argv[3]

fs.readFile(file, { encoding: 'utf-8' }, (err, data) => {
  err && exit(1)
  const tools = err ? [] : JSON.parse(data)
  tools.push({ name: tool, rating })
})

fs.writeFile(file, JSON.stringify(tools), { encoding: 'utf-8' }, err => {
  if (!err) {
      tools.forEach(tool => { 
          console.log(tool.name + '/t' + tool.rating)
  }
    exit(err ? 1 : 0)
})
