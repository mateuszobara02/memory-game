const gameBoard = document.querySelector('.board');
const cards = [...document.querySelectorAll('.card')];
const cardsBack = [...document.querySelectorAll('.back')];
const cardsFront = [...document.querySelectorAll('.front')];

const images = ["1", "1", "2", "2", "3", "3", "4", "4", "5", "5", "6", "6", "7", "7", "8", "8", "9", "9", "10", "10", "11", "11", "12", "12", "13", "13", "14", "14", "15", "15", "16", "16", "17", "17", "18", "18"];

const randomImage = () => {
    cardsBack.forEach(cardBack => {
        const imageIndex = Math.floor(Math.random() * images.length);
        cardBack.style.backgroundImage = `url(img/${images[imageIndex]}.jpg)`;
        images.splice(imageIndex, 1);
    })
}
randomImage();

const handleClickEvent = () => cards.forEach(card => card.addEventListener('click', handleClick));

const activeCards = [];
const pairCards = [];
let pairs = 0;

let attempts = 0;

const timerStart = Date.now();

function handleClick(e) {
    if (activeCards.length < 2) {
        this.classList.add('is-active');
        activeCards.push(e.target.style.backgroundImage);
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