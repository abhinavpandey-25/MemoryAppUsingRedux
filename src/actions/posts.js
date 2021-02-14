import * as api from '../api';
import {CREATE,UPDATE,DELETE,FETCH_ALL,LIKE} from '../constants/actionTypes';
//Action creators
// this async dispatch function is allowed by redux thunk\
export const createPost=(post)=>async(dispatch)=>{
   try{
      const{data}=await api.createPost(post);
      dispatch({type:CREATE,payload:data})
   }
   catch(error){
      console.log(error)
   }
}
export const getPosts=()=>async(dispatch)=>{
   try{
       const {data}=await api.fetchPost();
       //first get the data andd then dispatch the action type n paylod
       dispatch({type:FETCH_ALL,payload:data}) 
    }
   catch(error){
    console.log(error);
   }
}
export const updatePost=(id,updatedPost)=>async(dispatch)=>{
   try{
     console.log(updatedPost);
     console.log(id);
     console.log("heres")
      const {data}=await api.updatePost(id,updatedPost);
     dispatch({type:UPDATE,payload:data})
   }
   catch(error){
      console.log(error)
   }
}
export const deletePost=(id)=>async(dispatch)=>{
   try{
      await api.deletePost(id);
      console.log("delete")
      dispatch({type:DELETE,payload:id})
   }
   catch(error){
      console.log(error)
   }
}
export const likePost=(id)=>async(dispatch)=>{
   try{
      const{data}=await api.likePost(id)
      console.log("like")
      console.log(data);
      dispatch({type:LIKE,payload:data})
      }
   catch(error){
      console.log(error)
   }
}