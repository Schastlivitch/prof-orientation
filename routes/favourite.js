const { Router } = require("express");
const router = Router();

const Profession = require("../database/professions");
const Video = require("../database/videos");
const User = require('../database/user');
const checkAuth = require('../mid/checkauth')

router.get('/:id', checkAuth, async (req, res) => {
  const currentPost = await Video.findOne({_id: req.params.id});
  const currentUser = await User.findOne({name: req.session?.user?.nick})
  if (!currentUser.favoriteVideos.includes(currentPost._id)) {
    currentPost.favourites ++
    currentUser.favoriteVideos.push(currentPost._id)
    await currentPost.save();
    await currentUser.save();
  }

  const prof = await Profession.findOne({name: currentPost.profession})
  res.redirect(`/post/${prof._id}`)
})

module.exports = router;

