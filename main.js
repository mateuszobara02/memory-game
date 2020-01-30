const cards = [...document.querySelectorAll('.card')];

cards.forEach((card) => {
    card.addEventListener('click', (e) => {
        e.target.classList.add('is-active');
    })
})