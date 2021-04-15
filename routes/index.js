//Стартовая страничка
const Profession = require("../database/professions");
const Video = require("../database/videos");
const checkAuth = require("../mid/checkauth");
const donaterCheck = require("../mid/donaterCheck");
const adminCheck = require("../mid/adminCheck");

const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/main", checkAuth, (req, res) => {
  res.render("main");
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
