
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
