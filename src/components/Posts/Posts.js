import React from 'react';
import Post from './Post/Post'
import postsStyle from './styles'
import {Grid,CircularProgress} from '@material-ui/core'
//to fetch the data directly from store instead of using the 
//connect we will use useselector
import {useSelector} from 'react-redux'
const Posts=({setcurrentId})=>{
    const posts=useSelector((state)=>state.posts)
    const classes=postsStyle();
    console.log(posts)
return(
    posts.length===0?<CircularProgress/>:
    <Grid className={classes.mainContainer} spacing={3} >
        {posts.map((post)=>(
            <Grid key={post._id} item xs={12} sm={6}>
                <Post  post={post} setcurrentId={setcurrentId}/>
            </Grid>
        ))}
    </Grid>  
)
}
export default Posts