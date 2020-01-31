const cards = [...document.querySelectorAll('.card')];
const cardsBack = [...document.querySelectorAll('.back')];

const colors = ['#C0BCB5', '#C0BCB5', '#4A6C6F', '#4A6C6F', '#846075', '#846075', '#AF5D63', '#AF5D63', '#ED474A', '#ED474A', '#19535F', '#19535F', '#0B7A75', '#0B7A75', '#D7C9AA', '#D7C9AA', '#7B2D26', '#7B2D26', '#F0F3F5', '#F0F3F5', '#DD7373', '#DD7373', '#3B3561', '#3B3561', '#EAD94C', '#EAD94C', '#51A3A3', '#51A3A3', '#43291F', '#43291F', '#ADAABF', '#ADAABF', '#EBEFBF', '#EBEFBF', '#D8F1A0', '#D8F1A0'];

const randomColor = () => {
    cardsBack.forEach(cardBack => {
        const colorIndex = Math.floor(Math.random() * colors.length);
        cardBack.style.background = `${colors[colorIndex]}`;
        colors.splice(colorIndex, 1);
    })
}
randomColor();