export default function evidenceViewer() {
  const figures = document.querySelectorAll('.case-study-evidence');
  if (!figures.length || typeof HTMLDialogElement === 'undefined') return;
  const dialog = document.createElement('dialog');
  dialog.className = 'evidence-viewer';
  dialog.setAttribute('aria-label', 'Enlarged project screenshot');
  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'evidence-viewer__close';
  close.textContent = 'Close image';
  const image = document.createElement('img');
  const caption = document.createElement('p');
  dialog.append(close, image, caption);
  document.body.append(dialog);
  let trigger;
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => { if (trigger) trigger.focus(); });
  figures.forEach(figure => {
    const source = figure.querySelector('img');
    if (!source) return;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'evidence-enlarge';
    button.textContent = 'Enlarge screenshot';
    button.setAttribute('aria-haspopup', 'dialog');
    button.addEventListener('click', () => {
      trigger = button;
      image.src = source.currentSrc || source.src;
      image.alt = source.alt;
      caption.textContent = figure.querySelector('figcaption')?.textContent.trim() || '';
      dialog.showModal();
      close.focus();
    });
    figure.append(button);
  });
}
