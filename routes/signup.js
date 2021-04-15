const bcrypt = require("bcrypt");
const { Router } = require("express");
const router = Router();
const User = require("../database/user");
// const checkAuth = require(""); // Написать файл проверки аутентификации
const saltRounds = 10;

router.get('/', (req, res) => {
  res.render('signup');
})

router.post('/', async (req, res) => {
  const { login, email, password } = req.body;
  console.log(req.body);
  if (login && email && password) {
    const secretPass = await bcrypt.hash(password, 10);
    try {
      const currentUser = await User.create({
        name: login,
        email,
        password: secretPass,
      });
      if (currentUser) {
        req.session.user = {
          id: currentUser._id,
          nick: currentUser.name,
        };
        return res.redirect('/lk');
      }
    } catch (e) {
      return res.send('Ошибка регистрации')
    }
  }
  return res.status(418).redirect('/signup');
});

module.exports = router;

