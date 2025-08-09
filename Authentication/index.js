// const express= require("express");

// const app = express();

// app.use(express.json());
// const user =[];

// function getToken() {
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let token = '';
//     for (let i = 0; i < 32; i++) {
//         token += characters.charAt(Math.floor(Math.random() * characters.length));
//     }
//     return token;
// }

// app.post("/signup",function(req,res){
//     const username=req.body.username;
//     const pw=req.body.pw;
//     user.push({
//         "username":username,
//         "pw":pw
//     })
//     console.log(user);

//     res.json({
//         message:"Signup succesfully!"
//     })
// })

// app.post("/signin",function(req,res){
//     const username=req.body.username;
//     const pw=req.body.pw;

//     let founduser=null;

//     for(let i=0;i<user.length;i++){
//         if(user[i].username == username && user[i].pw==pw){
//             founduser=user[i];
//         }
//     }

//     if(founduser){
//         const token = getToken();
//         founduser.token=token;
//         console.log(user);
//         res.json({
//             message:"Signin succesfully Done!",
//             token:token
//         })

//     }
//     else{
//         res.status(403),send({
//             meassage:"Invalid username or password"
//         })
//     }
// })

// app.get("/me",function(req,res){

//     const token =req.headers['token'];

//     let userfound =null;

//     for(let i=0;i<user.length;i++){
//         if(user[i].token === token){
//             userfound=user[i];
//             break;
//         }
//     }

//     if(userfound){
//         res.json({
//             username:userfound.username,
//             pw:userfound.pw
//         })
//     }
//     else{
//         res.json({
//             message:"invalid token"
//         })
//     }


// })


// app.listen(3000);

const express= require("express");
const jwt = require("jsonwebtoken")
const JWT_SECRET = "randomsanikapatil" 

const app = express();

app.use(express.json());
const user =[];

app.post("/signup",function(req,res){
    const username=req.body.username;
    const pw=req.body.pw;
    user.push({
        "username":username,
        "pw":pw
    })
    console.log(user);

    res.json({
        message:"Signup succesfully!"
    })
})

app.post("/signin",function(req,res){
    const username=req.body.username;
    const pw=req.body.pw;

    let founduser=null;

    for(let i=0;i<user.length;i++){
        if(user[i].username == username && user[i].pw==pw){
            founduser=user[i];
        }
    }

    if(founduser){
        const token = jwt.sign({
            username:username
        },JWT_SECRET)
        // founduser.token=token;
        console.log(user);
        res.json({
            message:"Signin succesfully Done!",
            token:token
        })

    }
    else{
        res.status(403),send({
            meassage:"Invalid username or password"
        })
    }
})

app.get("/me",function(req,res){

    const token =req.headers.token;
    const decodeinfo = jwt.verify(token,JWT_SECRET)
    const username = decodeinfo.username;   

    let userfound =null;

    for(let i=0;i<user.length;i++){
        if(user[i].username == username){
            userfound=user[i];
            break;
        }
    }

    if(userfound){
        res.json({
            username:userfound.username,
            pw:userfound.pw
        })
    }
    else{
        res.json({
            message:"invalid token"
        })
    }


})


app.listen(3000);