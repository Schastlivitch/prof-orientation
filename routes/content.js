const { Router } = require("express");
const router = Router();

const Profession = require("../database/professions");
const Video = require("../database/videos");




router.get("/prof", async (req, res) => {
  console.log('test 123');
  const profCards = await Profession.find();
  console.log(profCards, 'test Egor');
  res.render("prof", {profCards});
});



router.get('/video', async (req, res) => {
  const postCards = await Video.find()
  res.render('video', {postCards})
})

router.get('/video/cases', async (req, res) => {
  let postCards = await Video.find()
  let caseCards = []
  for (let i = 0; i < postCards.length; i ++) {
    caseCards.push(postCards[i].case)
  }
  res.render('allTheCases', {caseCards})
})

router.get('/video/:caseTitle', async (req, res) => {
  let postCards = await Video.find()
  let caseCards = []
  for (let i = 0; i < postCards.length; i ++) {
    caseCards.push(postCards[i].case)
  } 
  let theCase = {}
  for (let i = 0; i < caseCards.length; i++) {
    if (caseCards[i].caseTitle === req.params.caseTitle) {
      theCase = caseCards[i]
    }
  }
  res.render('theOneCase', {theCase})
})

router.get('/random', async(req, res) => {
  let postCards = await Video.find()
  let caseCards = []
  for (let i = 0; i < postCards.length; i ++) {
    caseCards.push(postCards[i].case)
  }
    //рандомный кейс

// router.get(`/:id`, async (req, res) => {
//   // console.log('ya tut', req.params.id.length);
//   // if (req.params.id < 10) {

//     const theProf = await Profession.findById(req.params.id)
//     const thePost = await Video.findOne({profession: theProf.name})
//     // const thePosts = await Video.findAll({{name: theProf.name}}) //когда будет больше, чем по одному видосу на профессию
//     res.render('theOnePost', {thePost})
//     // res.sendStatus(200)
//   // }
// })
// router.get('/video/case:id', (req, res) => {
//   res.render('theOneCase')
// })

module.exports = router;
