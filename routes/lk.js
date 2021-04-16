const { Router } = require("express");
const router = Router();
const User = require("../database/user");
const Video = require('../database/videos');
const Profession = require('../database/professions')


router.get('/', async (req, res) => {
  const currentUser = await User.findOne({name: req.session?.user?.nick})
  let fav = [];
    // favId: []
    for(let post of currentUser.favoriteVideos) {
      const findPost = await Video.findOne({_id: post})
      const prof = await Profession.findOne({name: findPost.profession})
      const vloj = {favName: findPost.title, favId: prof._id}
      console.log(vloj);
      fav.push(vloj)
    }
  console.log(fav);
  let isDonater;
  if (currentUser.status === 'donater') {
    isDonater = false
  } else if (currentUser.status === 'user') {
    isDonater = true
  }
  res.render('lk', {currentUser, fav, isDonater})
})

router.post('/', async (req, res) => {
  const currentUser = await User.findOneAndUpdate({name: req.session?.user?.nick}, {intrests: req.body.intrests})
  res.sendStatus(200)
})

router.get('/upgrade', async (req, res) => {
  const currentUser = await User.findOneAndUpdate({name: req.session?.user?.nick}, {status: 'donater'})
  res.redirect('/lk')
})

module.exports = router;
