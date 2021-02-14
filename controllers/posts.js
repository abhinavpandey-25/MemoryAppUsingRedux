import mongoose from 'mongoose';
import PostMessage from '../model/postMessage.js';
//here inside the controoler ham hr specific route k liye yha function bnynge taki wha difficulty na ho
const getPosts=async(req,res)=>{
    try{
        const postMessages=await PostMessage.find();
        console.log("herewa")
    
        res.status(200).json(postMessages);
    }
    catch(error){
        res.status(404).json({message:error});
    }
}
const deletePost=async(req,res)=>{
    try{
        const id=req.params.id;
        await PostMessage.findByIdAndRemove(id,(err,result)=>{
            if(!err){
                res.json(result);
            }
            else{
                console.log(err)
            }
        })       
    }
    catch(error){
        console.log(error);
    }
}
const updatePost=async(req,res)=>{
    console.log("hereu")
    const _id=req.params.id
    const post=req.body
    console.log(_id);
    console.log(post);
    if(!mongoose.Types.ObjectId.isValid(_id)) return (res.status(404).json("No post with that id exist"))
    const updatedPost=await PostMessage.findByIdAndUpdate(_id,{...post,_id},{new:true});
    res.json(updatedPost);
}
const createPost=async (req,res)=>{
    const post=req.body;
    const newPost=new PostMessage(post);
    try{
       await newPost.save();
        res.status(201).json(newPost);
    }
    catch(error){
        //201 means that server has fullfilled the browser request and has created a new resource
        //409 request conflict with current resource of target source
        res.status(409).json(error)
    }
}
const likePost=async(req,res)=>{
    const {id}=req.params
        const post=await PostMessage.findById(id);
        const updated=await PostMessage.findByIdAndUpdate(id,{likeCount:post.likeCount+1},{new:true})
        res.status(201).json(updated)
    }
export {getPosts,createPost,updatePost,deletePost,likePost}