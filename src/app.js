const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()
const port = process.env.PORT || 8000

//public path 
// Import css file through this path , you have must include it in your main js file.
const staticPath = path.join(__dirname, "../public")
app.use(express.static(staticPath))


//Add views and partials directory by using templates folder
const templatePath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

// To set the view engine
app.set("view engine", "hbs")
app.set('views', templatePath)
hbs.registerPartials(partialsPath)


app.get("",(req,res) =>{
    res.render('index')
})

app.get("/about",(req,res) =>{
    res.render('about')
})

app.get("/weather",(req,res) =>{
    res.render('weather')
})

app.get("*",(req,res) =>{
    res.render('404',{
        errorMsg : 'Oops! Page Not found'
    })
})

app.listen(port, () =>{
    console.log(`Listening your request on port at ${port}`)
})
