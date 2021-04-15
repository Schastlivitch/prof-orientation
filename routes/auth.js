const bcrypt = require("bcrypt");
const { Router } = require("express");
const router = Router();
const User = require("../database/user");
// const checkAuth = require(""); // Написать файл проверки аутентификации
const saltRounds = 10;

// Вход - получение формы
router.get("/auth", (req, res) => {
  res.render("login"); //написать адрес HBS-файла аутентификации
});

// Вход - отправка данных на сервер
// router.post("/", async (req, res) => {
//   const { name, email, password } = req.body;
//   if (name && email && password) {
//     const password = await bcrypt.hash(plainPass, saltRounds);
//     const newUser = await User.create({
//       name,
//       email,
//       password,
//     });
//     req.session.user = {
//       id: newUser._id,
//     };
//     return res.redirect("/");
//   }
//   return res.redirect("/authentification"); //МБ НЕПРАВИЛЬНЫЙ АДРЕС
// });

//Регистрация - получение формы

//АДРЕС GET
// router.get("/signOut", (req, res) => {
//   req.session.destroy((err) => {
//     if (err) return res.redirect("/");
//     res.clearCookie(res.app.get("cookieName"));
//     return res.redirect("/");
//   });
// });

module.exports = router;
