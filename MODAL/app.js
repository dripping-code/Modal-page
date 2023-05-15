// select modal-btn,modal-overlay,close-btn
let modalBtn = document.querySelector('.modal-btn');
let modal = document.querySelector('.modal-overlay');
let closeBtn = document.querySelector('.close-btn');
// listen for click events on modal-btn and close-btn
modalBtn.addEventListener('click', () => {
    modal.classList.add('open-modal');
})
closeBtn.addEventListener('click', () => {
    modal.classList.remove('open-modal');
})
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay


