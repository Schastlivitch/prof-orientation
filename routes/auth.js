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
  const { login, password } = req.body;
  if (login && password) {
    const currentUser = await User.findOne({ name: login });
    if (currentUser) {
      const validation = await bcrypt.compare(password, currentUser.password);
      if (validation) {
        req.session.user = {
          id: currentUser._id,
          nick: currentUser.name,
        };
        return res.redirect("/main");
      }
      return res.redirect("/auth");
    }
    return res.redirect("/signup");
  }
  return res.redirect("/auth");
});

module.exports = router;
