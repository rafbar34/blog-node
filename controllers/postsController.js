const Posts = require('../models/postsModel');

exports.getPosts = async (req, res, next) => {
  const product = await Posts.getAllPosts();
  res.send(product);
};
exports.getPost = async (req, res, next) => {
  const postId = req.params.postId;
  const product = await Posts.getPostById(postId);
  res.send(product);
};
exports.postsByCategories = async (req, res, next) => {
  const category = req.params.categoryId;
  const product = await Posts.getPostsByCategories(category);
  res.send(product);
};
