// ==========================================================================
// Guillermo Bosca — Portfolio
// Shared behaviour: mobile nav toggle, autoplay preview media on cards.
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Mobile nav toggle ---- */
  const toggle = document.querySelector('.nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('nav-open');
    });
  }

  /* ---- Card preview autoplay ----
     Each .card can optionally carry a <video data-hover-src="..."> inside
     .card-media. It loads and starts playing as soon as the page is ready,
     and fades in over the cover image once it is actually playing. If no
     data-hover-src is set, the card just shows the cover image. */
  document.querySelectorAll('.card').forEach((card) => {
    const video = card.querySelector('video[data-hover-src]');
    if (!video || !video.dataset.hoverSrc) return;

    video.addEventListener('playing', () => video.classList.add('is-playing'));
    video.src = video.dataset.hoverSrc;
    video.play().catch(() => {});
  });

});