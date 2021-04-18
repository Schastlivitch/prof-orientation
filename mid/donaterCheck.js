//Проверка на подписчика
const User = require('../database/user')

const donaterCheck = async (req, res, next) => {
  const currentUser = await User.findOne({name: req.session?.user?.nick})
  if (currentUser && currentUser.status === 'donater') {
    return next();
  }
  return res.redirect("/lk"); //адрес личного кабинета с кнопкой подписки
};

module.exports = donaterCheck;
