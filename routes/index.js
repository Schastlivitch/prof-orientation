//Стартовая страничка
const Profession = require('../database/professions')

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

module.exports = router;
