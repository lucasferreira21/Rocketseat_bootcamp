const express = require('express')
const routes = express.Router()
const teachers = require('./controllers/teachers')
const students = require('./controllers/students')

routes.get('/', (req,res) => {
  return res.redirect('/teachers')
})

// ### TEACHERS ###

routes.get('/teachers',teachers.index)
routes.get('/teachers/:id',teachers.show)

module.exports = routes