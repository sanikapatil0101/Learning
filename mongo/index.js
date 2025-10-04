const express = require ("express");
const bcrypt = require("bcrypt");
const {UserModel,TodoModel} =require("./db");
const cors=require("cors")
const app = express();
const z=require("zod");

const mongoose = require("mongoose")


async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://sanika:patil%400101@cluster0.lhcoi2u.mongodb.net/todo",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}


connectDB();

app.use(express.json());
app.use(cors());

const jwt =require("jsonwebtoken");

const JWT_TOKEN ="sanika1234"

app.post("/signup",async function(req,res){

  const requirebody = z.object({
    email:z.string().min(3).max(30).email(),
    password:z.string().min(5).max(50),
    name:z.string().min(3).max(50)
  })

  const parsedData = requirebody.safeParse(req.body);
  if(!parsedData.success){
    res.json({
      message:"Invalid Input",
      error: parsedData.error
    })
    return

  }
    const email =req.body.email;
    const password =req.body.password;
    const name=req.body.name;

    let errr = false;

    try{const hashPassword = await bcrypt.hash(password,5)
    console.log("pw:",hashPassword)

    await UserModel.create({
        email:email,        
        password:hashPassword,
        name:name
    })}
    catch(e){
      res.json("Error")
       errr = false;
    }

    if(!errr){res.json({
        message:"YOu are logged in!"
    })
}
});

app.post("/signin",async function(req,res){
    const email =req.body.email;
    const password =req.body.password;

    const user= await UserModel.findOne({
        email:email,
        // password:password
    })

    if(!user){
      res.status(403).json({

        message:"User does not exist "
      })
      return
    }

    console.log(user)

    const pwMatch = bcrypt.compare(password,user.password);

    if (pwMatch){
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