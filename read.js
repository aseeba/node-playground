const fs = require('fs') // file system

module.exports = function read(path) {
  fs.promises
    .readFile(path, { encoding: 'utf-8' })
    .then(data => console.log(data.split('\n').length))
    .catch(err => console.log('ERROR', err))

  // old style with callback instead of Promise:
  // fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
  //   if (err) {
  //     console.log('ERROR', err)
  //   } else {
  //     console.log(data.split('\n').length)
  //   }
  // })
}
