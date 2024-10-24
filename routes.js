const express = require('express')
const app = require('./config/config.js')
const hbs = require('express-handlebars')
const { multer } = require('multer')
const path = require('path')

app.use(express.static(path.join(__dirname + '/logo')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.engine('handlebars', hbs.engine())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname + '/views'))

app.get('/', async(req, res)=>{
  res.render('home')
})