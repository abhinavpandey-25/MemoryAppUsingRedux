import React from 'react';
import poststyle from './styles';
import {Card,CardMedia,CardContent,CardActions,Button,Typography} from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment'
import {useDispatch} from 'react-redux'
import {deletePost,likePost} from '../../../actions/posts'  
const Post=({post,setcurrentId})=>{
    const classes=poststyle()
    const dispatch=useDispatch()
return(
 <Card className={classes.card} style={{margin:"5px"}}>
     <CardMedia className={classes.media } image={post.selectedFile} />
     <div className={classes.overlay}>
         <Typography variant="h6">
             {post.creator}
         </Typography>
         <Typography variant="body2">
             {moment(post.createdAt).fromNow()}
         </Typography>
    </div> 
    <div className={classes.overlay2}>
        <Button style={classes.Button} onClick={()=>{setcurrentId(post._id)}}>
            <MoreHorizIcon fontSize="default" style={{color:'white'}}/>
        </Button>
    </div>
    <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">{post.tags.map((tag)=>`#${tag} `)}</Typography>
    </div>
     <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
    <CardContent>
    <Typography  variant="body2"  color="textSecondary" gutterBottom>{post.message}</Typography>
    </CardContent>
    <CardActions className={classes.cardActions}>
        <Button size="small"><ThumbUpAltIcon fontSize="small" onClick={()=>dispatch(likePost(post._id)) }/>&nbsp;Like &nbsp; {post.likeCount}</Button>
        <Button size="small" color="primary" onClick={()=>dispatch(deletePost(post._id))}><DeleteIcon fontSize="small"/>Delete </Button>
    </CardActions>
 </Card>
)
}
export default Post;