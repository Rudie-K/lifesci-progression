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

// Workshops drop-down: click or keyboard to open; Escape, outside click or tabbing away closes it.
{
  const btn = document.querySelector('.menu-btn');
  const list = document.getElementById('ws-menu');
  if (btn && list) {
    const setOpen = open => { btn.setAttribute('aria-expanded', open ? 'true' : 'false'); list.hidden = !open; };
    btn.addEventListener('click', () => setOpen(list.hidden));
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && !list.hidden) { setOpen(false); btn.focus(); } });
    document.addEventListener('click', e => { if (!e.target.closest('.menu')) setOpen(false); });
    list.addEventListener('focusout', e => { if (!e.relatedTarget || !e.relatedTarget.closest('.menu')) setOpen(false); });
  }
}
