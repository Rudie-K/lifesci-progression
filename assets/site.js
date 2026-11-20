// Easier reading toggle, remembered on this device if the browser allows it.
{
  const btn = document.getElementById('reading');
  const apply = on => {
    document.body.classList.toggle('easy', on);
    if (btn) btn.setAttribute('aria-pressed', on ? 'true' : 'false');
  };
  let saved = false;
  try { saved = localStorage.getItem('easyReading') === '1'; } catch (e) {}
  apply(saved);
  if (btn) btn.addEventListener('click', () => {
    const on = !document.body.classList.contains('easy');
    apply(on);
    try { localStorage.setItem('easyReading', on ? '1' : '0'); } catch (e) {}
  });
}
