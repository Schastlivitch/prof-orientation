//Стартовая страничка
const Profession = require("../database/professions");
const Video = require("../database/videos");
const User = require('../database/user')
const checkAuth = require("../mid/checkauth");
const donaterCheck = require("../mid/donaterCheck");
const adminCheck = require("../mid/adminCheck");

const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/main", checkAuth, async (req, res) => {
  const currentUser = await User.findOne({name: req.session?.user?.nick})
  const currentUserInterests = currentUser.intrests
  const professions = await Profession.find()
  console.log(currentUserInterests);
  const interestProf = [];
  currentUserInterests.map((intrest) => {
    professions.map((prof) => {
      if (prof.sphere === intrest) {
        interestProf.push(prof)
      }
    })
  })
  console.log(interestProf);

  res.render("main", {interestProf});
});

router.get("/prof", async (req, res) => {
  const profCards = await Profession.find();
  res.render("prof", { profCards });
});

router.get(
  "/video",
  // adminCheck,
  donaterCheck,
  checkAuth,
  async (req, res) => {
    const videoCards = await Video.find();
    res.render("video", { videoCards });
  }
);

module.exports = router;
