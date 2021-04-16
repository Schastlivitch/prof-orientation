const bcrypt = require("bcrypt");
const { Router } = require("express");
const router = Router();
const User = require("../database/user");
const saltRounds = 10;

// Вход - получение формы
router.get("/", (req, res) => {
  let proverka = req.query.wrongpass
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
      return res.render("wrongpass");
    }
    return res.render("wronglogin");
  }
  return res.render("emptyinput");
});

module.exports = router;
