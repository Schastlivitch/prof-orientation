//Стартовая страничка
const Profession = require('../database/professions')
const Video = require('../database/videos')

const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/main", (req, res) => {
  res.render("main");
});

router.get("/prof", async (req, res) => {
  const profCards = await Profession.find();
  res.render("prof", {profCards});
});

router.get('/video', async (req, res) => {
  const videoCards = await Video.find()
  res.render('video', {videoCards})
})

module.exports = router;
