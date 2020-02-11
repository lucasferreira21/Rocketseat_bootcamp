const express = require('express')
const nunjucks = require('nunjucks')

const receitas = require('./data')

const server = express()

server.use(express.static('public'))

server.set('view engine','njk')

nunjucks.configure('views',{
  express:server,
  noCache: true,
  autoescape: false
})

server.get('/', (req, res) => {
  return res.render('principal', { receitas: receitas})
})

server.get('/receitas', (req, res) => {
  return res.render('receitas', { receitas: receitas})
})

server.get('/receita/:index', (req, res) => {
  let index = req.params.index

  return res.render('receita', { receita: receitas[index]})
})

server.get('/sobre', (req, res) => {
  return res.render('sobre')
})

server.listen(4444)