const bcrypt = require("bcrypt");
const { Router } = require("express");
const router = Router();
const User = require("../models/users.models");
const checkAuth = require(""); // Написать файл проверки аутентификации
const saltRounds = 10;

router.get("/", (req, res) => {
  res.render(""); //написать адрес HBS-файла аутентификации
});

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  if (name && email && password) {
    const password = await bcrypt.hash(plainPass, saltRounds);
    const newUser = await User.create({
      name,
      email,
      password,
    });
    req.session.user = {
      id: newUser._id,
    };
    return res.redirect("/");
  }
  return res.redirect("/authentification"); //МБ НЕПРАВИЛЬНЫЙ АДРЕС
});

//АДРЕС
router.get("/login", async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    const currentUser = await User.findOne({ email });
    if (
      !currentUser ||
      !(await bcrypt.compare(password, currentUser.password))
    ) {
      return res.render("login", { error: "Неправильный email или пароль" });
    }
    req.session.user = { id: currentUser._id };
    return res.redirect("/");
  }
  return res.status(418).redirect("/login");
});

//АДРЕС GET
router.get("/signOut", (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.redirect("/");
    res.clearCookie(res.app.get("cookieName"));
    return res.redirect("/");
  });
});

module.exports = router;
