const { Router } = require("express");
const router = Router();
const Video = require('../database/videos');
const User = require('../database/user')
const Profession = require('../database/professions')
const checkAuth = require('../mid/checkauth')

router.get('/:id', checkAuth, async (req, res) => {
  const currentPost = await Video.findOne({_id: req.params.id});
  // const currentUser = await User.findOne({name: req.session?.user?.nick})
  if (!currentPost.likers.includes(req.session?.user?.nick)) {
    currentPost.rating ++
    currentPost.likers.push(req.session?.user?.nick)
    await currentPost.save();
  }

  const prof = await Profession.findOne({name: currentPost.profession})
  res.redirect(`/post/${prof._id}`)
})

module.exports = router;
