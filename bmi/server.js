const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
    res.sendFile(__dirname+"/bmi.html");
});

app.post("/",function(req,res){

    var h=Number(req.body.h);
    var w= Number(req.body.w);

    var r=h/w;
    res.send("the result is "+r);
})


app.listen("3000",function(){
    console.log("server started at 3000");
});