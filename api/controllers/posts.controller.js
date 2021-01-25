const PostModel = require('../models/posts.model')
const { handleError } = require('../utils')

module.exports = {
  createPost,
  getPosts
}

function createPost (req, res) {
  PostModel
    .create({
      title: req.body.title,
      content: req.body.content,
      user_id: res.locals.user._id
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getPosts(req, res) {
  PostModel
    .find()
    .then(posts => {
      res.json(posts)
    })
}
