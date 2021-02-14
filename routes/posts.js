import express from 'express';
const router=express.Router();
import {getPosts,createPost,updatePost,deletePost,likePost} from '../controllers/posts.js';
//if we are continuoosly making routes and adding the logic also for these routes then our folder 
//structure will become quiet long so we are making the controolers 
// we will get to this route by moving to /posts/ as when imported the we use posts apended
router.get('/',getPosts);
router.post('/',createPost);
router.patch('/:id',updatePost);
router.delete('/:id',deletePost);
router.patch('/:id/likepost',likePost);
export default router;