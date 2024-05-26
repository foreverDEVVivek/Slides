const express=require("express")
let path=require('path');

//express stuff
const app=express();
app.use('/static',express.static('static'))
app.use(express.urlencoded())

//pug stuff
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'));

// console.log(__dirname)
// console.log(path.join(__dirname,"/html-website-templates/Animated"))



app.get('/',(req,res)=>{
    // res.send('<h1 style="text-align: center" >....Testing....</h1>')
    res.status(200).render('index.pug')
})

app.get('/upgrade',(req,res)=>{
    // res.send('<h1 style="text-align: center" >....Testing....</h1>')
    res.status(200).render('upgrade.pug')
})

app.get('/help',(req,res)=>{
    // res.send('<h1 style="text-align: center" >....Testing....</h1>')
    res.status(200).render('help.pug')
})


app.get('/explore',(req,res)=>{
    // res.send('<h1 style="text-align: center" >....Testing....</h1>')
    res.status(200).render('explore.pug')
})



app.listen(80,()=>{
    console.log("Successfully Launched...")
})