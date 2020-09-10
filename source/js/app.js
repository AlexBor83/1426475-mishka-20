const mainNav = document.querySelector('.header__mobile'), // находим блок, который у нас будет скрываться/открываться
  mainNavButton = mainNav.querySelector('.header__toggle'); // находим кнопку открытия/закрытия

if (window.innerWidth < 768) {
  mainNav.classList.add('header__mobile--closed');
  mainNavButton.addEventListener('click', () => { // регистрируем событие клика
    mainNav.classList.toggle('header__mobile--closed');
    mainNavButton.classList.toggle('header__toggle--closed');
    mainNavButton.classList.toggle('header__toggle--opened');
  });
}
