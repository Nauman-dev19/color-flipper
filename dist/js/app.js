import { colorFlipper } from '../../src/script/color-flipper.js';
const heroHeading = document.querySelector(`#hero-header`);
heroHeading.textContent = `Hexcolor Name #ffffff`;
const changeBtn = document.querySelector(`#changeBtn`);
colorFlipper(heroHeading, changeBtn);
console.log('hello');
