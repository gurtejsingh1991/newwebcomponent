const express=require('express');
const path=require("path");
const app= express();
const port=80;

app.use('/static',express.static('static'))

app.set('view engine','pug')

app.set('views',path.join(__dirname,'views'))

app.get("/rj",(req,res)=>{
    res.status(200).render('rj',{title:'hey harry',message:'this is my pug file. i have no idea'})
});

app.get("/",(req,res)=>{
    
    res.status(200).send("<h1>Homepage</h1>")
});

app.post("/facility",(req,res)=>{
    res.send("we will give you facility");
});
app.post("/contact",(req,res)=>{
    res.send("this is contact us page")
});
app.post("/about",(req,res)=>{
    res.send("its a about us page")
});
app.get("/this",(req,res)=>{
    res.status(404).send("<h1>404 not found</h1>")
})



app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});