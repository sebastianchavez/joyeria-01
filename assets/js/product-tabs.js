(function () {
  const buttons = document.querySelectorAll('.tab-btn');
  if (!buttons.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      buttons.forEach(b => {
        b.classList.remove('border-primary', 'text-primary');
        b.classList.add('border-transparent');
      });
      btn.classList.add('border-primary', 'text-primary');
      btn.classList.remove('border-transparent');
      document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
      const target = document.getElementById('tab-' + tab);
      if (target) target.classList.remove('hidden');
    });
  });
})();
