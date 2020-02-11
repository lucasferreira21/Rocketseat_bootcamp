const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

const videos = require('./data')

server.use(express.static('public'))

server.set('view engine','njk')

nunjucks.configure('views',{
  express:server,
  autoescape: false,
  noCache: true
})

server.get('/', (req,res) => {
  const data = {
    avatar_url: "https://avatars3.githubusercontent.com/u/52285062?s=460&v=4",
    name: "Lucas Ferreira",
    role: "Instrutor - Expresso Nepomuceno",
    description: 'Programador full-stack, Fluig, BI e Suporte Sistemas Totvs RM. Colaborador da empresa <a href="http://www.expressonepomuceno.com.br/" target="_blank">Expresso Nepomuceno</a>',
    links: [
      { name: "Github", url:"https://github.com/lucasferreira21" },
      { name: "Twitter", url:"/" },
      { name: "Linkedin", url:"/" },
    ]
  }

  return res.render('about', { about: data })
})

server.get('/portifolio', (req,res) => {
  return res.render('portifolio', {itens: videos})
})

server.get('/video/:id', (req,res) => {

  const id = req.params.id;

  const video = videos.find( (video) => {
    return video.id == id
  })

  /*
  const id = req.query.id

  const video = videos.find( (video) => {
    return video.id == id
  })

  */

  if(!video){
    return res.send('Video not found')
  }
  
  return res.render('video', { item: video })
})

server.listen(3333)