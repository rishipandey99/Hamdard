(function () {
  function initHamdardHomepage(root) {
    if (!root || root.dataset.hamdardInitialized === 'true') return;
    root.dataset.hamdardInitialized = 'true';

    var hero = root.querySelector('[data-hero]');
    if (!hero) return;
    var slides = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-slide]'));
    var dotsContainer = hero.querySelector('[data-hero-dots]');
    if (slides.length < 2 || !dotsContainer) return;

    var currentIndex = 0;
    var timer = null;
    dotsContainer.innerHTML = '';

    slides.forEach(function (slide, index) {
      var dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'hamdard-hero__dot' + (index === 0 ? ' is-active' : '');
      dot.setAttribute('aria-label', 'Show banner ' + (index + 1));
      dot.setAttribute('aria-pressed', index === 0 ? 'true' : 'false');
      dot.addEventListener('click', function () {
        showSlide(index);
        restartTimer();
      });
      dotsContainer.appendChild(dot);
    });

    function showSlide(index) {
      currentIndex = (index + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle('is-active', slideIndex === currentIndex);
      });
      Array.prototype.forEach.call(dotsContainer.children, function (dot, dotIndex) {
        dot.classList.toggle('is-active', dotIndex === currentIndex);
        dot.setAttribute('aria-pressed', dotIndex === currentIndex ? 'true' : 'false');
      });
    }

    function restartTimer() {
      if (timer) window.clearInterval(timer);
      timer = window.setInterval(function () {
        showSlide(currentIndex + 1);
      }, 5500);
    }

    hero.addEventListener('mouseenter', function () {
      if (timer) window.clearInterval(timer);
    });
    hero.addEventListener('mouseleave', restartTimer);
    restartTimer();
  }

  function initAll() {
    document.querySelectorAll('.hamdard-home').forEach(initHamdardHomepage);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }

  document.addEventListener('shopify:section:load', function (event) {
    initHamdardHomepage(event.target.querySelector('.hamdard-home'));
  });
})();