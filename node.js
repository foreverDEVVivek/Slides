const express=require("express")
let path=require('path');
const url=require('url')
const querystring=require('querystring')

//express stuff
const app=express();
app.use('/static',express.static('static'))
app.use(express.urlencoded())

//pug stuff
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'));

// console.log(__dirname)
// console.log(path.join(__dirname,"/html-website-templates/Animated"))

// prompt("hello")
app.get('/',(req,res)=>{
    res.setHeader('Permissions-Policy', 'geolocation=(self), microphone=(), camera=()');
    // res.send('<h1 style="text-align: center" >....Testing....</h1>')
    res.status(200).render('index.pug')
    // userEmail=req.params.userEmail;
    // userPassword=req.params.userPassword;
    // confirmPassword=req.params.confirmPassword;
    const parsedUrl = url.parse(req.url);
  // Parse the query string
  const queryParams = querystring.parse(parsedUrl.query);

  // Extract data
  const userEmail = queryParams.userEmail;
  const userPassword = queryParams.userPassword;
  const confirmPassword = queryParams.confirmPassword;

  // Process data (for demonstration, just logging it)

})
app.get('/external',(req,res)=>{
    res.status(400).render('external.pug')
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