//Проверка на админа

const adminCheck = (req, res, next) => {
  const userStatus = req.session?.user?.type;

  if (userStatus) {
    return next();
  }
  return res.redirect("/");
};

module.exports = adminCheck;
