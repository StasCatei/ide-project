const dropdownBtn = document.querySelector('.dropdown-btn');
let dropdownDescription = document.querySelector('.dropdown-description');

if (dropdownBtn) {
  dropdownBtn.addEventListener('click', () => {
    dropdownBtn.classList.toggle('is-active');
    dropdownDescription.classList.toggle('is-active');
  });
}