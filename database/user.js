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
  intrests: Array,
  favoriteVideos: Array
})
const User = model('User', userSchema)
module.exports = User
