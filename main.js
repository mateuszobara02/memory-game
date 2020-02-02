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

let attempts = 0;

const timerStart = Date.now();

function handleClick(e) {
    if (activeCards.length < 2) {
        this.classList.add('is-active');
        activeCards.push(e.target.style.background);
        pairCards.push(this);
        handleClickEvent();
    }
    checkCards();
    checkForWin();
    this.removeEventListener('click', handleClick);
}

const checkCards = () => {
    if (activeCards.length === 2) {
        cards.forEach(card => card.removeEventListener('click', handleClick));
        if (activeCards[0] === activeCards[1]) {
            pairs++;
            attempts++;
            pairCards.forEach(pair => {
                setTimeout(() => {
                    pair.classList.remove('is-active');
                    pair.classList.add('hidden');
                    pair.removeEventListener('click', handleClick);
                    handleClickEvent();
                }, 1000);
            })
        } else if (activeCards[0] !== activeCards[1]) {
            attempts++;
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

const numberOfAttempts = document.querySelector('.attempts-number');

const timeSeconds = document.querySelector('.time-sec');
const timeMinutes = document.querySelector('.time-min');

const checkForWin = () => {
    if(pairs === cards.length/2) {
        const timerEnd = Date.now();
        const totalTime = timerEnd - timerStart;
        const seconds = Math.floor((totalTime/1000) % 60);
        const minutes = Math.floor((totalTime/60000) % 60);

        timeSeconds.innerHTML = `${seconds} sec`;
        timeMinutes.innerHTML = `${minutes} min`;

        setTimeout(() => {
            gameBoard.classList.add('game-end');
        }, 2000);
        numberOfAttempts.innerHTML = attempts;
    }
}

const newGameButton = document.querySelector('.play-next');

newGameButton.addEventListener('click', () => location = location);