let cards = document.querySelectorAll('.card');

cards = [...cards];

cards.forEach((cards) => {
    cards.addEventListener('click', () => {
        cards.classList.add('active');
    })
});