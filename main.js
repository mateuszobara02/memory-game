let cards = document.querySelectorAll('.card');

cards = [...cards];

cards.forEach((card) => {
    card.addEventListener('click', () => {
        card.classList.add('card--active');
    });
});

cards.forEach((card) => {
    setTimeout(() => {
        card.classList.add('card--active');
    }, 1400);
})