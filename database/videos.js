const {Schema, model} = require('mongoose')

const videoSchema = new Schema({
  profession: { type: Schema.Types.ObjectId,
              ref: 'Profession' },
  title: String,
  videoLink: String,
  script: String, //или файл через fs reader???
  rating: {
    type: Number,
    default: 0},
  favourites: {
    type: Number,
    default: 0},
  case: String
})
const Video = model('Video', videoSchema)
module.exports = Video
