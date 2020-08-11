import './styles.css';
import menu from './menu.json';
import itemsTemplate from './template/menu-items.hbs';
console.log(itemsTemplate)

const menuRef = document.querySelector('.js-menu');
const switchThemeRef = document.querySelector('.js-switch-input');
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

if (localStorage.getItem('Theme') === Theme.DARK) {
    document.body.classList.add(Theme.DARK);
    switchThemeRef.checked = true;
  } else {
    document.body.classList.add(Theme.LIGHT);
  }

  const setTheme = event => {
    if (event.target.checked) {
      switchThemeRef.checked = true;
      localStorage.setItem('Theme', Theme.DARK);
      document.body.classList.add(Theme.DARK);
      document.body.classList.remove(Theme.LIGHT);
    } else {
      switchThemeRef.checked = false;
      localStorage.setItem('Theme', Theme.LIGHT);
      document.body.classList.remove(Theme.DARK);
      document.body.classList.add(Theme.LIGHT);
    }
  };
  
  switchThemeRef.addEventListener('change', setTheme);

function generateMenuItems(arr) {
    const items = arr.map(item => itemTemplate(item)).join('');
    menuRef.insertAdjacentHTML('beforeend', items);
  }
  const startCreateMenu = () => {
    generateMenuItems(menu);
  };

  window.addEventListener('load', startCreateMenu);