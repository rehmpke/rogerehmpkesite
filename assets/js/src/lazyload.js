function lazyLoad() {

  const config = {
    rootMargin: '0px 0px 50px 0px',
    threshold: 0
  };
  
  let observer = new IntersectionObserver(function(entries, self) {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        preloadImage(entry.target);
        self.unobserve(entry.target);
      }
    });
  }, config);
  
  const imgs = document.querySelectorAll('[data-src]');
  imgs.forEach(img => {
    observer.observe(img);
  });
  
  function preloadImage(img) {
    const src = img.getAttribute('data-src');
    if (!src) { return; }
    img.src = src;
    img.onload = function() {
      img.removeAttribute('data-src');
    };
  }
  
}
  
export default lazyLoad;