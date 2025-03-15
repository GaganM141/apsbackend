const express=require("express");
const cors=require("cors");
/*const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/gagan")
.then(()=>{console.log("mango connected");})
.catch(()=>{console.log("db not connected");})
//schema, model, save(insert)
const userS=new mongoose.Schema({username:{
    type:String
}})
const user=mongoose.model("user",userS)
/** 
 * mongoose is an api to connect to mongodb database.
 * cors allows 3000 or other port numbers to access other port numbers like 5013.
 * don't use cors in production because it allows all ports to access your server(allows 
 even attackers) */
const app=express();
app.use(express.json());
app.use(cors());

app.post("/user",(req,res)=>{
    const username=req.body.username;
   /* const userDetails=new user({username:username})
    userDetails.save()
    .then(()=>{res.send("successfully saved")})
    .catch(()=>{res.send("could not save")}) */
    res.send(username);
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
/* dought1 : insted of downloading express and vite every time can't we download it once and use it in all projects?
 ans1:u can use doker or uplode to github and use whenever needed. 
  what use other then cors? 
  cors is the most secure one.
  cors is handled by syber security team not by developers.
  method1: we can allow specific ip address
  method2: we can use proxy*/
  // then is used to wait until promise.