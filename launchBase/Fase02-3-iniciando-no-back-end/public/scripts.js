const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for(let card of cards){
  let videoId = card.id

  card.addEventListener("click", () => {
    const videoId = card.getAttribute("id");
    window.location.href = `/video/${videoId}`
  })
}

/* Antigo com Modal

const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for(let card of cards){
  let videoId = card.id

  card.addEventListener("click", () => {
    modalOverlay.classList.add('active')
    modalOverlay.querySelector('iframe').src = `https://www.youtube.com/embed/${videoId}`
  })
}

document.querySelector('.close-modal').addEventListener('click', () => {
  modalOverlay.classList.remove('active')
  modalOverlay.querySelector('iframe').src = ""
})


*/