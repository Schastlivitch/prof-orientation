const { Router } = require("express");
const router = Router();

const Profession = require("../database/professions");
const Video = require("../database/videos");


router.get("/prof", async (req, res) => {
  const profCards = await Profession.find();
  res.render("prof", {profCards});
});

router.get(`/:id`, async (req, res) => {
  const theProf = await Profession.findById(req.params.id)
  const thePost = await Video.findOne({profession: theProf.name})
  // const thePosts = await Video.findAll({{name: theProf.name}}) //когда будет больше, чем по одному видосу на профессию
  res.render('theOnePost', {thePost})
  // res.sendStatus(200)
})


router.get('/video', async (req, res) => {
  const postCards = await Video.find()
  res.render('video', {postCards})
})

router.get('/video/case:id', (req, res) => {
  res.render('theOneCase')
})

module.exports = router;
