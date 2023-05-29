'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const showModal = document.querySelectorAll('.show-modal');

function closeModalFunc() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

function openModalFunc() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', openModalFunc);
}

closeModal.addEventListener('click', closeModalFunc);
overlay.addEventListener('click', closeModalFunc);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModalFunc();
  }
});
