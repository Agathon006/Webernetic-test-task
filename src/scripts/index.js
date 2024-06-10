'use strict';

const tryButton = document.querySelector('#try-button');
const popUpMessage = document.querySelector('#pop-up-message');

tryButton.addEventListener('click', () => {
    popUpMessage.classList.remove('not-visible');
})

popUpMessage.addEventListener('click', (e) => {
    if (e.target.hasAttribute('data-close')) {
        popUpMessage.classList.add('not-visible');
    }
})