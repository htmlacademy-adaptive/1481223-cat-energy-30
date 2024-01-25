/* в этот файл добавляет скрипты*/
document.querySelector('.main-header__container--no-js').classList.remove('main-header__container--no-js');
document.querySelector('.main-footer__iframe-image--no-js').classList.remove('main-footer__iframe-image--no-js');
const buttonToggle = document.querySelector('.button-toggle--no-js');
buttonToggle.classList.remove('button-toggle--no-js');
const headerNav = document.querySelector('.main-header__navigation--no-js');
headerNav.classList.remove('main-header__navigation--no-js');
buttonToggle.addEventListener('click', () => {
  buttonToggle.classList.toggle('button-toggle--close');
  headerNav.classList.toggle('main-header__navigation--show');
});
