const { Mongoose } = require('mongoose')

const userSchema = new Mongoose.userSchema({
  name: String,
  role: String,
})

const user = mongoose.model('User', userSchema)
