(function () {
  const container = document.getElementById('rating');
  if (!container) return;

  const stars = container.querySelectorAll('.star-btn');
  const label = document.getElementById('ratingText');
  const ratingLabels = ['', 'Muy malo', 'Malo', 'Regular', 'Bueno', 'Excelente'];
  let current = 0;

  stars.forEach((star, idx) => {
    star.addEventListener('mouseenter', () => {
      stars.forEach((s, i) => s.classList.toggle('text-primary', i <= idx));
    });
    star.addEventListener('click', () => {
      current = idx + 1;
      stars.forEach((s, i) => {
        s.classList.toggle('text-primary', i < current);
        s.classList.toggle('text-border-light', i >= current);
        s.classList.add('active');
      });
      if (label) label.textContent = current + '/5 · ' + ratingLabels[current];
    });
  });

  container.addEventListener('mouseleave', () => {
    stars.forEach((s, i) => {
      s.classList.toggle('text-primary', i < current);
      s.classList.toggle('text-border-light', i >= current);
    });
  });
})();
