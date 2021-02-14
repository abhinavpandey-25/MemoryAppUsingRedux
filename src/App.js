import React,{useEffect,useState} from 'react';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import {useDispatch} from 'react-redux';
import memories from './images/Data Collection, Web Research ,Excel Data Entry ,Typing ,Copy Paste.png'
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core';
import {getPosts} from './actions/posts'
import useStyles from './styles';
import  './index.css';
const App=()=>{
    const classes=useStyles()
    const [currentId,setcurrentId]=useState(null);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getPosts())
    },[currentId,dispatch])
    return (
        <Container maxWidth="lg">
            <AppBar position="static" className={classes.appBar}>
                <Typography variant="h2" align="center" className={classes.heading} >  Memory</Typography>
                <img src={memories} className={classes.image} alt="memories" height="60"/>
                </AppBar>
                <Grow in>
                    <Container>
                        <Grid container  justify="space-between"  alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7} >
                                <Posts setcurrentId={setcurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <Form  currentId={currentId}  setcurrentId={setcurrentId}/>
                        </Grid>
                        </Grid>
                    </Container>
                </Grow>
          
        </Container>
    )
}
//the earlier syntax of using redux is like map state,dispatch to props now use hooks to make it easy 
export default App;