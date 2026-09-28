(function () {
  const btn = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');
  if (btn && menu) {
    btn.addEventListener('click', () => menu.classList.toggle('hidden'));
  }

  document.querySelectorAll('[data-print]').forEach(el => {
    el.addEventListener('click', () => window.print());
  });

  document.querySelectorAll('[data-qty-inc]').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = document.getElementById(btn.dataset.target);
      if (!input) return;
      const val = parseInt(input.value || '0', 10) + 1;
      const max = parseInt(input.max || '99', 10);
      input.value = Math.min(val, max);
    });
  });

  document.querySelectorAll('[data-qty-dec]').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = document.getElementById(btn.dataset.target);
      if (!input) return;
      const val = parseInt(input.value || '0', 10) - 1;
      const min = parseInt(input.min || '1', 10);
      input.value = Math.max(val, min);
    });
  });
})();
