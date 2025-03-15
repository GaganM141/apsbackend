const express=require("express");
const cors=require("cors");
const app=express();
app.use(express.json());
app.use(cors());

app.post("/user",(req,res)=>{
    const username=req.body.username;
  
    res.send(username);
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
