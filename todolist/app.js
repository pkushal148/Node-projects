const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");

const app=express();

// console.log(date());

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set("view engine","ejs");

let items=["Buy food","cook food","eat food"];
let workItems=[];
app.get("/",function(req,res){
    
    
    let day=date.getDate();
    res.render("list",{listTitle:day,newListItems:items});
});

app.post("/",function(req,res){
    
    let item=req.body.newItem;
    if(req.body.list==="Work")
    {
        workItems.push(item);
        res.redirect("/work");
    }
    else
    {
        items.push(item);
        res.redirect("/");
    }
    
    // res.render("list",{newListItem:item});

})


app.get("/work",function(req,res){
    
    res.render("list",{listTitle:"Work list",newListItems:workItems});
})

app.post("/work",function(req,res){
    
    let item=req.body.newItem;
    // res.render("list",{newListItem:item});
    workItems.push(item);
    res.redirect("/work");
})

app.listen(3000,function(){
    console.log("server listening at port 3000");
});