const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

const togglemodal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', togglemodal);
modalBtnClose.addEventListener('click', togglemodal);