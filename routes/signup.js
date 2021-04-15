const bcrypt = require("bcrypt");
const { Router } = require("express");
const router = Router();
const User = require("../database/user");
// const checkAuth = require(""); // Написать файл проверки аутентификации
const saltRounds = 10;

router.get('/', (req, res) => {
  res.render('signup');
})

// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   if (email && password) {
//     const currentUser = await User.findOne({email});
//     if (
//       !currentUser || 
//       !(await bcrypt.compare(password, currentUser.password))
//     ) {return res.render('login', {error: "Неправильный email или пароль"});
//   }
//   req.session.user = {id: currentUser._id};
//   return res.redirect('/')
//   }
//   return res.status(418).redirect('/login')
// });

module.exports = router;

