module.exports = function addStudent(student) {
  const mongoose = require('mongoose')
  const User = require('./models/User')
  mongoose
    .connect('mongodb://localhost/neuefische', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('db connected'))
    .catch(error => console.error(error))

  User.find().then(users => console.log(users))
}
