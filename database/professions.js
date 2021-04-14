const {Schema, model} = require('mongoose')

const professionSchema = new Schema({
  name: String,
  sphere: String
})

const Profession = model('Profession', professionSchema);
module.exports = Profession;


