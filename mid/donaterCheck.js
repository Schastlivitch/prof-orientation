//Проверка на подписчика

const donaterCheck = (req, res, next) => {
  const userStatus = req.session?.user?.type;

  if (userStatus) {
    return next();
  }
  return res.redirect("/"); //адрес личного кабинета с кнопкой подписки
};

module.exports = donaterCheck;
