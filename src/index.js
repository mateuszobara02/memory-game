import { newGameButton, createCards } from './scripts/base.js';
import { listenToCards } from './scripts/checkCards.js';

import './styles/main.sass';

function init() {
    createCards();
    listenToCards();
    newGameButton.addEventListener('click', () => location = location);
}

window.addEventListener('DOMContentLoaded', init);