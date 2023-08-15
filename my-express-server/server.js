const express=require("express");

const app=express();

app.get("/",function(req,res){
    // console.log(request);
    res.send("<h1>hello world !</h1>");
});

app.get("/contact",function(req,res){
    res.send("<h2> dont come pls!</h2>");
});

app.get("/about",function(req,res){
    res.send("<h3>i am an nitc student</h3>");
});

app.get("/hobby",function(req,res){
    res.send("<ul><li>guts guns </li> <li>and glory </li></ul>");
});

app.listen((3000),function(){
    console.log("server started");
});