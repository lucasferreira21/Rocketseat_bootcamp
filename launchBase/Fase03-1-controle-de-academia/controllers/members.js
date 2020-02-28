const fs = require('fs')
const data = require('../data.json')
const { age, dateBrasil, date } = require('../utils')

exports.index = (req,res) => {

  return res.render('members/index', { members:data.members })
}

// show
exports.show = (req,res) => {
  //req.query.id
  //req.body
  //req.params.id =/:id

  const { id } = req.params

  const foundMember = data.members.find((member) => member.id == id)

  if(!foundMember){
    return res.send('Member not found')
  }

  const options = {
    day: "numeric",
    month: "2-digit",
    year: "numeric",
    
};

  const member = {
    ...foundMember,
    blood: foundMember.blood.replace('0','-').replace('1','+'),
    birth: date(foundMember.birth).birthDay,
    created_at: dateBrasil(new Intl.DateTimeFormat('pt-BR').format(foundMember.created_at)),
  }

  return res.render("members/show",{ member })
}

exports.create = (req,res) => {
  return res.render('members/create')
}

// post
exports.post = (req,res) => {

  const keys = Object.keys(req.body)

  for( key of keys){
    if(req.body[key] == ""){
      return res.send('Please, fill all fields')
    }
  }

  let id = 1
  const lastMember = data.members[data.members.length-1]
  
  if(lastMember){
    id = lastMember.id + 1
  }

  const created_at = Date.now()

  birth = Date.parse(req.body.birth)

  data.members.push({
    id, 
    ...req.body,
    birth,
    created_at
  })

  fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
    if(err) return res.send('Write file error')

    return res.redirect('/members')
  })

}

//update
exports.update = (req, res) => {

  const { id } = req.params

  const foundMember = data.members.find((member) => member.id == id)

  if(!foundMember){
    return res.send('Member not found')
  }

  const member = {
    ...foundMember,
    birth: date(foundMember.birth).iso,
  }

  return res.render('members/edit', { member })
}

//put 
exports.put = (req, res) => {

  const { id } = req.body
  let index = 0

  const foundMember = data.members.find((member, foundIndex) => {
    if(member.id == id){
      index = foundIndex
      return true
    }
  })

  if(!foundMember){
    return res.send('Member not found')
  }

  const member = {
    ...foundMember,
    ...req.body,
    birth: Date.parse(req.body.birth),
    id: Number(req.body.id)
  }

  data.members[index] = member

  fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
    if(err) return res.send("Write Error")

    return res.redirect(`/members/${id}`)
  } )

}

//delete
exports.delete = (req,res) => {
  
  const { id } = req.body

  const filteredMembers = data.members.filter((member) => {
    return member.id != id
  })

  data.members = filteredMembers

  fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
    if(err) res.send("Write Error")

    return res.redirect('/members')
  })
}