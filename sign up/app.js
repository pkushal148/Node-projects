const express=require("express");
const request=require("request");
const bodyParser=require("body-parser");
const https=require("https");

const app=express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
});

app.post("/",function(req,res){
    const f_name=req.body.fname;
    const l_name=req.body.lname;
    const email=req.body.email;
    //console.log(f_name,l_name,email);

    var data={
        members: [
            {
                email_address: email,
                status:"subscribed",
                merge_fields: {
                    FNAME: f_name,
                    LNAME: l_name
                }
            }
        ]
    };

    const jsonData=JSON.stringify(data);

    const url="https://us10.api.mailchimp.com/3.0/lists/c3fc9c5c98";


    const options={
        method:"POST",
        auth:"kushal:3127b33b638173eda92cefe619106ef8-us10"

    }

    const request=https.request(url,options,function(response){

        if(response.statusCode==200)
        {
                res.sendFile(__dirname+"/success.html");
        }
        else
        {
            res.sendFile(__dirname+"/failure.html");
        }
        // response.on("data",function(data){
        //     console.log(JSON.parse(data));
        // })

    })
    request.write(jsonData);
    request.end();
});


app.post("/failure",function(req,res){
    res.redirect("/");

})





app.listen(3000,function(){

    console.log("server is running on port 3000");
});


//API Key
// 3127b33b638173eda92cefe619106ef8-us10

// listid
// c3fc9c5c98