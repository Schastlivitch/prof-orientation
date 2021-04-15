const {Schema, model} = require('mongoose')

const professionSchema = new Schema({
  name: String,
  sphere: String,
  image: String
})

const Profession = model('Profession', professionSchema);
module.exports = Profession;


