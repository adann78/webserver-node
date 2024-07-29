const express = require('express')
const app = express()
require('dotenv').config();
const port=process.env.PORT
const hbs=require('hbs')
app.set('view engine', 'hbs') 
hbs.registerPartials(__dirname + '/views/partials');


//Servir contenido estático
app.use(express.static('public'));
/*
app.get('/',  (req, res)=> {
  res.send('Home Page')
})
  */
app.get('/',  (req, res) =>{
  res.render('home',{
    nombre: 'Adan Hernandez',
    titulo: 'Curso de Node'
  });
})

  app.get('/generic',  (req, res) =>{
    res.render('generic')
  })
  app.get('/elements',  (req, res) =>{
    res.render('elements')
  })
app.listen(port, ()=>{
  console.log(`app listening at http://localhost:${port}`)
})