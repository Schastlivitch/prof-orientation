router.get("/logOut", (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.redirect("/");
    res.clearCookie(res.app.get("cookieName"));
    return res.redirect("/");
  });
});
