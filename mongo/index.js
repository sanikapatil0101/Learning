const express = require ("express");

const {UserModel,TodoModel} =require("./db");

const app = express();

const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://sanika:patil%400101@cluster0.lhcoi2u.mongodb.net/todo")

app.use(express.json());

const jwt =require("jsonwebtoken");

const JWT_TOKEN ="sanika1234"

app.post("/signup",async function(req,res){
    const email =req.body.email;
    const password =req.body.password;
    const name=req.body.name;

    await UserModel.create({
        email:email,        
        password:password,
        name:name
    })

    res.json({
        message:"YOu are logged in!"
    })

});

app.post("/signin",async function(req,res){
    const email =req.body.email;
    const password =req.body.password;

    const user= await UserModel.findOne({
        email:email,
        password:password
    })

    console.log(user)

    if (user){
        const token =jwt.sign({
            id:user._id.toString()
        },JWT_TOKEN)
        res.json({
           token:token
        })
    }
    else{
        res.json({
            message:"Error"
        })
    }

});

app.post("/todo", auth, async function (req, res) {
  const userId = req.userId;
  const { title, done } = req.body;

  const todo = await TodoModel.create({
    title,
    done,
    userId
  });

  res.json({ message: "Todo created", todo });
});


app.get("/todos", auth, async function (req, res) {
  const userId = req.userId;
  const todos = await TodoModel.find({ userId });
  res.json({ todos });
});

function auth(req,res,next){
    const token = req.headers.token
    const decodeData =jwt.verify(token,JWT_TOKEN)

    if(decodeData){
        req.userId = decodeData.id;
        next();
    }
    else{
        res.status(403).json({
            message:"incorrect"
        })
    }

}

app.listen(3000);