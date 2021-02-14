import axios from 'axios';
//this url is when u are fetching from local host but when u deployed ur server
// then just req to your server const url='http://localhost:5000/posts'
const url="https://storememories.herokuapp.com/posts"
export const fetchPost=()=>axios.get(url);
export const createPost=(newPost)=>axios.post(url,newPost)
export const updatePost=(id,updatedPost)=>axios.patch(`${url}/${id}`,updatedPost)
export const deletePost=(id)=>axios.delete(`${url}/${id}`)
export const likePost=(id)=>axios.patch(`${url}/${id}/likepost`)