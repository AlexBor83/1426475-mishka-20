const mainNav = document.querySelector('.header__mobile'),
  mainNavButton = mainNav.querySelector('.header__toggle');

if (window.innerWidth < 768) {
  mainNav.classList.add('header__mobile--closed');
  mainNavButton.addEventListener('click', () => {
    mainNav.classList.toggle('header__mobile--closed');
    mainNavButton.classList.toggle('header__toggle--closed');
    mainNavButton.classList.toggle('header__toggle--opened');
  });
}
