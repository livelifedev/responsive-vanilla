const team = document.querySelector('.grid-team');
team.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    clearActive();
    addActive(e.target.dataset.team);
  }
});

const bio = document.querySelector('.descriptions-team-container');
bio.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    e.currentTarget.classList.add('hidden');
  }
});

// If loading page in mobile view, have bio hidden initially
if (window.matchMedia('(max-width: 991px)').matches) {
  bio.classList.add('hidden');
}

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
  bio.classList.remove('hidden');
}
