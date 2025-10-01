const express = require('express');

const app=express();

app.use(express.json());

function isvalid(req,res,next){
    const n=Number(req.query.n);
    if(n>=14){
        next();
    }
    else{
        res.send("you are not eligible");
    }
}

app.use(isvalid);

app.get('/ride1',function(req,res){
    res.send("completed ride 1");
})

app.get('/ride2',function(req,res){
    res.send("completed ride 2");
})

app.listen(3000);
