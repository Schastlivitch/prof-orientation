const {Schema, model} = require('mongoose')

const videoSchema = new Schema({
  profession: String,
  title: String,
  videoLink: String,
  script: String, //или файл через fs reader???
  rating: {
    type: Number,
    default: 0},
  favourites: {
    type: Number,
    default: 0},
    case: {
      caseVideo: String,
      caseScript: String,
      solutionOfTheUser: String,
      realSolution: String
    }})
const Video = model('Video', videoSchema)
module.exports = Video
