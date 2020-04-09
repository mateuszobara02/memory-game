export const popup = document.querySelector('.popup');
export const cards = [...document.querySelectorAll('.card')];
export const cardsBack = [...document.querySelectorAll('.card__back')];
export const newGameButton = document.querySelector('.popup__button');

export const resultAttempts = document.querySelector('.result__attempts');
export const resultSeconds = document.querySelector('.result__seconds');
export const resultMinutes = document.querySelector('.result__minutes');

export const timerStart = Date.now();

export function createCards() {
    const images = [];

    const createImageArray = () => {
        for (let i = 1; i <= 18; i++) {
            images.push(i, i);
        }
    }
    createImageArray();

    const addRandomImageIndex = () => {
        cardsBack.forEach(cardBack => {
            const imageIndex = Math.floor(Math.random() * images.length);
            cardBack.style.backgroundImage = `url(img/${images[imageIndex]}.jpg)`;
            images.splice(imageIndex, 1);
        })
    }
    addRandomImageIndex();
}