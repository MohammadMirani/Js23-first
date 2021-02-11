const express = require('express');
const app = express();
const path = require('path')
const fs = require('fs');
const { json } = require('express');

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'))
})

// document.getElementById("but1").click(console.log(1))



// app.get('/ejs', (req, res) => {
//     fs.readFile(path.join(__dirname, "public/data.json"), function (err, data) {
//         if (err) return res.status(400).send("Something went Wrong!!")
//         console.log(data);

//         res.render('index.ejs',{
//                 firstName: "Mohammad",
//                 lastName: "Mirani",
//                 skills: ['js', 'html', 'css']
//             }
//         )
//     })
// })

// app.get('/ejs',(req,res)=>{
//     fs.readFile(path.join(__dirname,"public/data.json",'utf8',function(err,data){
//         if(err) return res.status(400).send("Something went wrong!!!")
//         // console.log(data);
//         res.render('index.ejs',JSON.parse(data))
//     }))
// })

app.get('/ejs', (req, res) => {

    fs.readFile(path.join(__dirname, "public/data.json"), "utf8", function(err, data) {
        if (err) return res.status(400).send("Something went wrong!!!")
        
        res.render('index.ejs', JSON.parse(data))
    })

});



app.get('/home', (req, res) => {
    res.render('pages/home')
})

app.get('/about', (req, res) => {
    res.render('pages/about')
})


app.listen(5005)