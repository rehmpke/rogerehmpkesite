import '../../scss/style.scss';
import contactMe from '../src/contact.js';
import { Footer } from '../src/footer.js';
import evidenceViewer from './evidence-viewer.js';
import lazyload from '../src/lazyload.js';

let footer=new Footer();
footer.footerDate;

document.addEventListener('DOMContentLoaded', function() {
  lazyload();
  contactMe();
  evidenceViewer();
});
