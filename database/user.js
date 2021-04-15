const {Schema, model} = require('mongoose')

const userSchema = new Schema({
  name: { type: String,
          required: true,
          uique: true}, //можно убрать
  email: { type: String,
           required: true,
           uique: true},
  password: { type: String,
              required: true},
  type: String,
  intrests: Array,
  favoriteVideos: Array,
  status: {
    type: String,
    default: 'user'
  }
})
const User = model('User', userSchema)
module.exports = User
