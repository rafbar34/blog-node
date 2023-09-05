const Posts = require('../models/postsModel');

exports.getPosts = async (req, res, next) => {
  const product = await Posts.getAllPosts();
   res.send(JSON.stringify(product));
};
