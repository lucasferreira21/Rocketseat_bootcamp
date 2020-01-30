/*
const nome = 'arlos'
const peso = 84
const altura = 1.88

const imc = (p,a) => p / (a * a)

if(imc(peso, altura)){
  console.log(`${nome} você está acima do peso`)
}else{
  console.log(`${nome} você está acima do peso`)
}
*/

const nome = 'Silvana'
const sexo = 'F'
const idade = 55
const contribuicao = 30

if( (sexo == 'F' && contribuicao >= 30) || (sexo == 'M' && contribuicao >= 35)){
  if( (sexo == 'F' && (contribuicao + idade) >= 85) || (sexo == 'M' && (contribuicao + idade) >= 95)){
    console.log(`${nome}, você pode se aposentar!`)
  }else{
    console.log(`${nome}, você ainda não pode se aposentar!`)
  }
}else{
  console.log(`${nome}, você ainda não pode se aposentar!`)
}