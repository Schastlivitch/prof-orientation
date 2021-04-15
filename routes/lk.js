const { Router } = require("express");
const router = Router();
const User = require("../database/user");
const Video = require('../database/videos');
const Profession = require('../database/professions')


router.get('/', async (req, res) => {
  const currentUser = await User.findOne({name: req.session?.user?.nick})
  const fav = [];
    // favId: []
  currentUser.favoriteVideos.map( async (post) => {
    const findPost = await Video.findOne({_id: post})
    const prof = await Profession.findOne({name: findPost.profession})
    fav.push({favName: findPost.title, favId: prof._id})
    // favId.push(prof._id)
  })
  res.render('lk', {currentUser, fav})
})

router.post('/', async (req, res) => {
  console.log(req.body);
  const currentUser = await User.findOneAndUpdate({name: req.session?.user?.nick}, {intrests: req.body.intrests})
  res.sendStatus(200)
})

router.get('/upgrade', async (req, res) => {
  const currentUser = await User.findOneAndUpdate({name: req.session?.user?.nick}, {status: 'donater'})
  res.redirect('/lk')
})

module.exports = router;
