const gameBoard = document.querySelector('.board');
const cards = [...document.querySelectorAll('.card')];
const cardsBack = [...document.querySelectorAll('.back')];
const cardsFront = [...document.querySelectorAll('.front')];

const colors = ['#C0BCB5', '#C0BCB5', '#4A6C6F', '#4A6C6F', '#846075', '#846075', '#AF5D63', '#AF5D63', '#ED474A', '#ED474A', '#19535F', '#19535F', '#0B7A75', '#0B7A75', '#D7C9AA', '#D7C9AA', '#7B2D26', '#7B2D26', '#F0F3F5', '#F0F3F5', '#DD7373', '#DD7373', '#3B3561', '#3B3561', '#EAD94C', '#EAD94C', '#51A3A3', '#51A3A3', '#43291F', '#43291F', '#ADAABF', '#ADAABF', '#EBEFBF', '#EBEFBF', '#D8F1A0', '#D8F1A0'];

const randomColor = () => {
    cardsBack.forEach(cardBack => {
        const colorIndex = Math.floor(Math.random() * colors.length);
        cardBack.style.background = `${colors[colorIndex]}`;
        colors.splice(colorIndex, 1);
    })
}
randomColor();

const handleClickEvent = () => cards.forEach(card => card.addEventListener('click', handleClick));

const activeCards = [];
const pairCards = [];
let pairs = 0;

function handleClick(e) {
    if (activeCards.length < 2) {
        this.classList.add('is-active');
        this.removeEventListener('click', handleClick);
        activeCards.push(e.target.style.background);
        pairCards.push(this);
        handleClickEvent();
    }
    checkCards();
    checkForWin();
}

const checkCards = () => {
    if (activeCards.length === 2) {
        cards.forEach(card => card.removeEventListener('click', handleClick));
        if (activeCards[0] === activeCards[1]) {
            pairs++;
            pairCards.forEach(pair => {
                setTimeout(() => {
                    pair.classList.remove('is-active');
                    pair.classList.add('hidden');
                    pair.removeEventListener('click', handleClick);
                    handleClickEvent();
                }, 1000);
            })
        } else if (activeCards[0] !== activeCards[1]) {
            pairCards.forEach(pair => {
                setTimeout(() => {
                    pair.classList.remove('is-active');
                    handleClickEvent();
                }, 1000);
            })
        }
        activeCards.length = 0;
        pairCards.length = 0;
    }
}
handleClickEvent();

const checkForWin = () => {
    if(pairs === cards.length/2) {
        setTimeout(() => {
            gameBoard.classList.add('game-end');
        }, 2000);
    }
}