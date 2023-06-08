const cards = document.querySelectorAll('.card')

cards.forEach((card) => {
  const borderColor = window.getComputedStyle(card).borderColor

  const growCard = () => {
    card.style.transform = 'scale(1.05)'
    card.style.transition = 'transform 2s ease'
    card.style.backgroundColor = borderColor
    card.style.transition += ', background-color 2s ease'
  }

  const shrinkCard = () => {
    card.style.transform = 'scale(1)'
    card.style.transition = 'transform 2s ease'
    card.style.backgroundColor = 'transparent'
    card.style.transition += ', background-color 2s ease'
  }

  card.addEventListener('mouseover', growCard)
  card.addEventListener('mouseout', shrinkCard)
})