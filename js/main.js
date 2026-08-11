// ==========================================================================
// Guillermo Bosca — Portfolio
// Shared behaviour: mobile nav toggle, hover-to-play preview media on cards.
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Mobile nav toggle ---- */
  const toggle = document.querySelector('.nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('nav-open');
    });
  }

  /* ---- Card hover preview ----
     Each .card can optionally carry a <video data-hover-src="..."> inside
     .card-media. On hover/focus it fades in and plays; on leave it pauses
     and resets. If no data-hover-src is set, the card just does the plain
     zoom (handled purely in CSS) — nothing to wire up here. */
  document.querySelectorAll('.card').forEach((card) => {
    const video = card.querySelector('video[data-hover-src]');
    if (!video) return;

    let loaded = false;
    const load = () => {
      if (loaded) return;
      video.src = video.dataset.hoverSrc;
      loaded = true;
    };
    const play = () => { load(); video.play().catch(() => {}); };
    const stop = () => { video.pause(); video.currentTime = 0; };

    card.addEventListener('mouseenter', play);
    card.addEventListener('focus', play);
    card.addEventListener('mouseleave', stop);
    card.addEventListener('blur', stop);
  });

});
