const idIngredientes = document.querySelector("#ingredients")
const idIngredientesDescr = document.querySelector("#ingredients_description")

const idPreparo = document.querySelector("#preparation")
const idPreparoDescri = document.querySelector("#preparation_description")

const idInformacoes =  document.querySelector("#information")
const idInformacoesDescr =  document.querySelector("#information_description")

idIngredientes.value = 1

idIngredientes.addEventListener('click', () => {
  esconder(idIngredientes,idIngredientesDescr)
})

idPreparo.value = 1

idPreparo.addEventListener('click', () => {
  esconder(idPreparo,idPreparoDescri)
})

idInformacoes.value = 1

idInformacoes.addEventListener('click', () => {
  esconder(idInformacoes,idInformacoesDescr)
})

function esconder(id, idDesc){
  if(id.value){
    id.value = 0
    id.innerText = "ESCONDER"
    idDesc.classList.add('esconder')
  }else{
    id.value = 1
    id.innerText = "MOSTRAR"
    idDesc.classList.remove('esconder')
  }
}

/*

idInformacoes.value = 0

idInformacoes
*/

/*
const modalOverlay = document.querySelector('.modal-overlay')

const modalImage = document.querySelector('#modalImage')
const modalTitle = document.querySelector('#modalTitle')
const modalAutor = document.querySelector('#modalAutor')

const modalClose = document.querySelector('#modalClose')

const itens = document.querySelectorAll('.item')

for(let item of itens){

  item.addEventListener('click',() => {
    let img = item.querySelector('img').src
    let title = item.querySelector('h2').innerText
    let autor = item.querySelector('p').innerText

    modalImage.src = img
    modalTitle.innerText = title
    modalAutor.innerText = autor

    modal('active')
  })
}

modalClose.addEventListener('click', () => modal('disabled'))

const modal = (type) => {
  if(type == 'active'){
    modalOverlay.classList.add('active')
  }
  else if(type == 'disabled'){
    modalOverlay.classList.remove('active')
  }
}
*/