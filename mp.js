document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.header');
  const burger = document.getElementById('burgerBtn');
  const nav = document.getElementById('headerMenu');
  
  if (burger && nav) {
      burger.addEventListener('click', function () {
          header.classList.toggle('open');
          burger.setAttribute('aria-expanded', header.classList.contains('open'));
      });
      
      nav.querySelectorAll('a').forEach(function (link) {
          link.addEventListener('click', function () {
              header.classList.remove('open');
              burger.setAttribute('aria-expanded', 'false');
          });
      });
  }
  
  document.addEventListener('click', function (e) {
      if (!header.classList.contains('open')) return;
      
      const clickedInside = e.target.closest('.main-nav') || e.target.closest('#burgerBtn');
      if (!clickedInside) {
          header.classList.remove('open');
          if (burger) burger.setAttribute('aria-expanded', 'false');
      }
  });
  
  document.querySelectorAll('.actions button').forEach(function (btn) {
      btn.addEventListener('click', function () {
          const isActive = this.classList.toggle('active');
          this.setAttribute('aria-pressed', isActive);
          
          if (this.classList.contains('first')) {
              this.textContent = isActive ? '✓ Сохранено' : 'Сохранить';
          } else if (this.classList.contains('second')) {
              this.textContent = isActive ? '✓ Вы подписаны' : 'Подписаться';
          }
      });
  });
});