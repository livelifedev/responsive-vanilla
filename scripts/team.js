const team = document.querySelector('.grid-team');
team.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    clearActive();
    addActive(e.target.dataset.team);
  }
});

function clearActive() {
  document
    .querySelectorAll('.item-team')
    .forEach((e) => e.classList.remove('active-team'));

  document
    .querySelectorAll('.description-team')
    .forEach((e) => e.classList.add('hidden'));
}

function addActive(id) {
  document.getElementById(id).classList.add('active-team');
  document.getElementById('box-' + id).classList.remove('hidden');
}
