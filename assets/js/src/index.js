import '../../scss/style.scss';
import { Footer } from '../src/footer.js';
import lazyload from '../src/lazyload.js';

let footer=new Footer();
footer.footerDate;

document.addEventListener('DOMContentLoaded', function() {
  lazyload();
});