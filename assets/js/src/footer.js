export class Footer {  constructor() {    
  // Sets copyright year
function footerDate() {
  const d = new Date();
  const fullYear = d.getFullYear();
  document.querySelector('#currentYear').innerHTML = fullYear;
}

return footerDate();
}}