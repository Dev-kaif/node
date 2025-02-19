import express from 'express';

const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.json({message:'You are on Shoes app'})
})

app.listen(8080)