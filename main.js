let cards = document.querySelectorAll('.card');

cards = [...cards];

cards.forEach((card) => {
    card.addEventListener('click', () => {
        card.classList.add('card__active');
    });
});