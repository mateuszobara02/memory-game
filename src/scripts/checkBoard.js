import { cards, popup, resultAttempts, resultMinutes, resultSeconds, timerStart } from './base.js';
import { pairs, attempts } from './checkCards.js'

export const checkForWin = () => {
    if(pairs === cards.length/2) {
        const timerEnd = Date.now();
        const totalTime = timerEnd - timerStart;
        const seconds = Math.floor((totalTime/1000) % 60);
        const minutes = Math.floor((totalTime/60000) % 60);

        resultSeconds.innerHTML = `${seconds} sec`;
        resultMinutes.innerHTML = `${minutes} min`;

        setTimeout(() => {
            popup.classList.add('popup--visible');
        }, 2000);
        resultAttempts.innerHTML = attempts;
    }
}