(function () {
  document.querySelectorAll('[data-toggle-password]').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = document.getElementById(btn.dataset.togglePassword);
      if (!input) return;
      input.type = input.type === 'password' ? 'text' : 'password';
      const icon = btn.querySelector('.material-symbols-outlined');
      if (icon) icon.textContent = input.type === 'password' ? 'visibility' : 'visibility_off';
    });
  });
})();
