const bcrypt = require("bcrypt");
const { Router } = require("express");
const router = Router();
const User = require("../database/user");
const saltRounds = 10;

// Вход - получение формы
router.get("/", (req, res) => {
  res.render("login");
});

// Вход - отправка данных на сервер
router.post("/", async (req, res) => {
  const { login, email, password } = req.body;
  if (login && email && password) {
    const password = await bcrypt.hash(plainPass, saltRounds);
    const newUser = await User.create({
      login,
      email,
      password,
    });
    req.session.user = {
      id: newUser._id,
    };
    return res.redirect("/");
  }
  return res.redirect("/auth");
});

module.exports = router;