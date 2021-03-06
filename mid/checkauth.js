// Проверка на вход

const checkAuth = (req, res, next) => {
  const userId = req.session?.user?.id;

  if (userId) {
    return next();
  }
  return res.redirect("/auth");
};

module.exports = checkAuth;
