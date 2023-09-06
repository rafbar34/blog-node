const express = require('express');
const {getPosts,getPost, postsByCategories} = require('../../controllers/postsController');
const router = express.Router();

router.get('/posts', getPosts);
router.get('/posts/:postId', getPost);
router.get('/posts/category/:categoryId', postsByCategories);

module.exports = router;
