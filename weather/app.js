const express=require("express");
const https=require("https");
const bodyParser=require("body-parser");

const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){

    res.sendFile(__dirname+"/index.html");
    
    //res.send("server is up and running");
})

app.post("/",function(req,res){
    //console.log(req.body.cityName);
    const query=req.body.cityName;
    const apikey="75737cf81556c04c1257849138f52e0c";
    const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apikey+"&units=metric";

    https.get(url,function(response){
        //console.log(response.statusCode);

        response.on("data",function(data){
            const w_data=JSON.parse(data);
            const temp=w_data.main.temp;
            const desc=w_data.weather[0].description;
            const icon=w_data.weather[0].icon;
            const imgURL="http://openweathermap.org/img/wn/"+icon+"@2x.png";
            res.write("<h1>the temperature in "+query+" is "+temp+" degree celsius</h1>");
            res.write("<p>the weather is currently "+desc+" </p>");
            res.write("<img src="+imgURL+" >");
            res.send();
        })

    })

})




app.listen(3000,function(){
    console.log("app listening at 3000");
})