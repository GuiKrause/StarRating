const stars = document.querySelectorAll('.stars i')
stars.forEach((element, index1) => {
  element.addEventListener('click', () => {
    stars.forEach((element, index2) => {
      index1 >= index2 ? element.classList.add('active') : element.classList.remove('active')
    })
  })
})