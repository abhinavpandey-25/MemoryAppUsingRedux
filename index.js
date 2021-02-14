import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import postRoutes from './routes/posts.js'
import dotenv from 'dotenv';
const app=express();
dotenv.config();
app.use(bodyParser.json({limit:'20mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'20mb',extended:true}))
app.use(cors());
app.use('/posts',postRoutes);
app.get('/',(req,res)=>{
    res.send("HELLO To MEMORIES API");
})
const PORT=process.env.PORT||5000;
console.log(PORT);
mongoose.connect(process.env.CONNECTION_URL,{useUnifiedTopology:true,useNewUrlParser:true,useFindAndModify:false}).then(()=>{
app.listen(PORT,()=>{ console.log("server started and database connected at 5000 port")   
})
})
