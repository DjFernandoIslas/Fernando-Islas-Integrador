const cardsContainer = document.querySelectorAll('.card')

const updateCategory = (e) => {
    const index = e.currentTarget.getAttribute('data-index');
    if (index !== null) {
      form.category.value = indexToValue(index);
      form.category.dispatchEvent(new Event('change'));
    }
  };
  
  const indexToValue = (index) => {
    switch (index) {
      case '0':
        return 'a';
      case '1':
        return 'b';
      case '2':
        return 'c';
      default:
        return 'none';
    }
  };
  
  // Asignar evento de clic a los contenedores de tarjetas
  cardsContainer.forEach((card) => {
    card.addEventListener('click', updateCategory);
  });