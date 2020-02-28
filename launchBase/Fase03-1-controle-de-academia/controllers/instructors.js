const fs = require('fs')
const data = require('../data.json')
const { age, dateBrasil, date, arrayService } = require('../utils')

exports.index = (req,res) => {

  var dataIndex = data.instructors

  for(item of dataIndex){
    if(typeof(item.services) == 'string'){
      item.services = item.services.split(',')
    }    
  }
  
  return res.render('instructors/index', { instructors:dataIndex })
}

// show
exports.show = (req,res) => {
  //req.query.id
  //req.body
  //req.params.id =/:id

  const { id } = req.params

  const foundInstructor = data.instructors.find((instrutor) => instrutor.id == id)

  if(!foundInstructor){
    return res.send('Instructor not found')
  }

  const options = {
    day: "numeric",
    month: "2-digit",
    year: "numeric",
    
};

  const instructor = {
    ...foundInstructor,
    age: age(foundInstructor.birth),
    services: typeof( foundInstructor.services) == 'string' ? foundInstructor.services.split(',') : foundInstructor.services,
    created_at: dateBrasil(new Intl.DateTimeFormat('pt-BR').format(foundInstructor.created_at)),
  }

  return res.render("instructors/show",{ instructor })
}

// create
exports.create = (req,res) => {
  return res.render('instructors/create')
}

// post
exports.post = (req,res) => {

  const keys = Object.keys(req.body)

  for( key of keys){
    if(req.body[key] == ""){
      return res.send('Please, fill all fields')
    }
  }

  let {avatar_url, name, birth, gender, services} = req.body

  const ultId = Number(data.instructors.reduce((valant,valatual) => {
                  return valatual.id
                }))

  const id = (ultId || 0) + 1

  const created_at = Date.now()

  birth = Date.parse(birth)

  data.instructors.push({
    id, 
    name, 
    avatar_url, 
    birth, 
    gender, 
    services, 
    created_at
  })

  fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
    if(err) return res.send('Write file error')

    return res.redirect('/instructors')
  })

  //return res.send(req.body)
}

//update
exports.update = (req, res) => {

  const { id } = req.params

  const foundInstructor = data.instructors.find((instrutor) => instrutor.id == id)

  if(!foundInstructor){
    return res.send('Instructor not found')
  }

  const instructor = {
    ...foundInstructor,
    birth: date(foundInstructor.birth).iso,
  }

  return res.render('instructors/edit', { instructor })
}

//put 
exports.put = (req, res) => {

  const { id } = req.body
  let index = 0

  const foundInstructor = data.instructors.find((instrutor, foundIndex) => {
    if(instrutor.id == id){
      index = foundIndex
      return true
    }
  })

  if(!foundInstructor){
    return res.send('Instructor not found')
  }

  const instructor = {
    ...foundInstructor,
    ...req.body,
    birth: Date.parse(req.body.birth),
    id: Number(req.body.id)
  }

  data.instructors[index] = instructor

  fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
    if(err) return res.send("Write Error")

    return res.redirect(`/instructors/${id}`)
  } )

}

//delete
exports.delete = (req,res) => {
  
  const { id } = req.body

  const filteredInstructors = data.instructors.filter((instructor) => {
    return instructor.id != id
  })

  data.instructors = filteredInstructors

  fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
    if(err) res.send("Write Error")

    return res.redirect('/instructors')
  })
}