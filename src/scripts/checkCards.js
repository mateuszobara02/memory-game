import { cards } from './base.js';
import { checkForWin } from './checkBoard.js';

export const listenToCards = () => cards.forEach(card => card.addEventListener('click', cardClick));

const activeCards = [];
const pairCards = [];

export let pairs = 0;
export let attempts = 0;

export function cardClick (e) {
    if (activeCards.length < 2) {
        this.classList.add('card--is-active');
        activeCards.push(e.target.style.backgroundImage);
        pairCards.push(this);
        listenToCards();
    }
    checkCards();
    checkForWin();
    this.removeEventListener('click', cardClick);
}

export function checkCards() {
    if (activeCards.length === 2) {
        cards.forEach(card => card.removeEventListener('click', cardClick));
        if (activeCards[0] === activeCards[1]) {
            pairs++;
            attempts++;
            pairCards.forEach(pair => {
                setTimeout(() => {
                    pair.classList.remove('card--is-active');
                    pair.classList.add('card--is-hidden');
                    listenToCards();
                }, 1000);
            })
        } else if (activeCards[0] !== activeCards[1]) {
            attempts++;
            pairCards.forEach(pair => {
                setTimeout(() => {
                    pair.classList.remove('card--is-active');
                    listenToCards();
                }, 1000);
            })
        }
        activeCards.length = 0;
        pairCards.length = 0;
    }
}