const { Router } = require("express");
const router = Router();
const User = require("../database/user");

router.get('/', async (req, res) => {
  const currentUser = await User.findOne({name: req.session?.user?.nick})
  res.render('lk', {currentUser})
})

router.post('/', async (req, res) => {
  console.log(req.body);
  const currentUser = await User.findOneAndUpdate({name: req.session?.user?.nick}, {intrests: req.body.intrests})
  res.sendStatus(200)
})

module.exports = router;
