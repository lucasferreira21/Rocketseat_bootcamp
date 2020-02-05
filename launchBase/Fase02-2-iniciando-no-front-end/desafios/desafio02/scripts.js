const modalOverlay = document.querySelector('.modal-overlay') 
const modal = document.querySelector('.modal') 
const modalContent = document.querySelector('.modal-content') 
const cards = document.querySelectorAll('.card')
const maxModal = document.querySelector('.maximizar-modal')
const minModal = document.querySelector('.minimizar-modal')
const frame = document.querySelector('iframe')

minModal.hidden = true

for(let card of cards){
  let linkId = card.id

  card.addEventListener('click', () => {
    modalOverlay.classList.add('active')
    frame.src = `https://rocketseat.com.br/${linkId}`
  })
}

document.querySelector('.close-modal').addEventListener('click', () =>{
  modalOverlay.classList.remove('active')
  modal.classList.remove('maximizar')
  modalContent.classList.remove('maximizar')
  frame.classList.remove('maximizar')
  minModal.hidden = true
  maxModal.hidden = false
  frame.src = ""
})

minModal.addEventListener('click', () => {
  maxModal.hidden = false
  minModal.hidden = true
  modal.classList.remove('maximizar')
  modalContent.classList.remove('maximizar')
  frame.classList.remove('maximizar')
  
})

maxModal.addEventListener('click', () => {
  minModal.hidden = false
  maxModal.hidden = true
  modal.classList.add('maximizar')
  modalContent.classList.add('maximizar')
  frame.classList.add('maximizar')
})