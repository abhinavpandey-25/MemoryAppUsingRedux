
import React,{useState,useEffect} from 'react';
import formStyle from './styles';
import {Paper,Typography,TextField,Button} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {createPost} from '../../actions/posts' 
import {updatePost} from '../../actions/posts' 
import FileBase64 from 'react-file-base64';
import {useSelector} from 'react-redux';
const Form=({currentId,setcurrentId})=>{
    const classes=formStyle();
    const post =useSelector((state)=>currentId?state.posts.find((post)=>(post._id===currentId)):null)
    console.log('post')
    console.log(post);
    const dispatch=useDispatch()
    const [postData,setpostData]=useState({
        creator:'',
        title:'',
        message:'',
        tags:'',
        selectedFile:''
    });
    const clear=()=>{
        setcurrentId(null)
        setpostData({
            creator:'',
            title:'',
            message:'',
            tags:'',
            selectedFile:''
        })
    }
    useEffect(()=>{
        if(post){
            setpostData(post)
        }
    },[post])
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(currentId)
        if(currentId){
            console.log("jeja")
            dispatch(updatePost(currentId,postData))       
        }
        else{
            console.log("create")
            dispatch(createPost(postData))
        }
        clear();
    }
return(
   <Paper className={classes.paper}>
       <form autoComplete="off" fullWidth className={classes.form } onSubmit={handleSubmit}>
           <Typography  style={{marginTop:"10px"}} variant="h6">{currentId?'Editing ':'Creating'} a Memory</Typography>
           <TextField  style={{marginTop:"10px"}} name="creator" variant="outlined" label="Creator" fullWidth  value={postData.creator} onChange={(e)=>setpostData({...postData ,creator:e.target.value})}/>
           <TextField style={{marginTop:"10px"}}  name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e)=>setpostData({...postData ,title:e.target.value})}/>
           <TextField style={{marginTop:"10px"}}  name="message" variant="outlined"  label="Message" fullWidth value={postData.message} onChange={(e)=>setpostData({...postData ,message:e.target.value})}/>
           <TextField  style={{marginTop:"10px"}}   name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e)=>setpostData({...postData ,tags:e.target.value.split(',')})}/>
        <div className={classes.fileInput}>
           <FileBase64 type="file" multiple="false" onDone={(e)=>setpostData({...postData,selectedFile:e[0].base64})}/>
        </div>
        <Button className={classes.buttonSubmit} variant="contained" size="large" color="primary" fullWidth type="submit" onSubmit={handleSubmit}>Submit</Button>
        <Button style={{marginTop:"6px"}}  variant="contained" size="large" color="secondary" fullWidth onClick={clear}>Clear</Button>
       </form>
   </Paper>
)
}
export default Form;