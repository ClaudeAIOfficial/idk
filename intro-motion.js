/* Match the original Rockstar gallery's scroll-revealed intro.
   Keep the first frame image-only, reveal title as scrolling begins,
   darken the fixed background, then float the first collage over it. */
(() => {
  "use strict";
  const intro = document.getElementById("rg-intro");
  const target = document.getElementById("rg-intro-gallery");
  const gallery = document.getElementById("rg-sections");
  const title = document.getElementById("rg-hero-caption");
  if (!intro || !target || !gallery || !title) return;
  const firstSection = gallery.querySelector(":scope > .rg-series");
  if (firstSection) target.appendChild(firstSection);

  const clamp = (n, a=0, b=1) => Math.max(a, Math.min(b, n));
  const ramp = (value, start, end) => clamp((value - start) / (end - start));
  const smooth = n => n * n * (3 - 2 * n);
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");

  let queued = false;
  function render() {
    queued = false;
    const bounds = intro.getBoundingClientRect();
    const viewport = Math.max(1, window.innerHeight);
    // Progress is measured in viewport heights, independent of wheel speed.
    const progress = Math.max(0, -bounds.top / viewport);

    if (reduceMotion.matches) {
      intro.style.setProperty("--intro-title-opacity", 0);
      intro.style.setProperty("--intro-title-shift", "0px");
      intro.style.setProperty("--intro-darkness", 0);
      intro.style.setProperty("--intro-image-opacity", 1);
      return;
    }

    const reveal = smooth(ramp(progress, .10, .44));
    const release = 1 - smooth(ramp(progress, 1.18, 1.64));
    const titleOpacity = reveal * release;

    // The image vanishes into the same midnight-blue gallery background.
    const dark = smooth(ramp(progress, .23, 1.20));
    const imageOpacity = 1 - smooth(ramp(progress, .55, 1.52));
    const titleTravel = smooth(ramp(progress, .50, 1.47)) * -viewport * .36;
    const imageZoom = 1 + smooth(ramp(progress, 0, 1.4)) * .075;

    intro.style.setProperty("--intro-title-opacity", titleOpacity.toFixed(4));
    intro.style.setProperty("--intro-title-shift", (35 * (1 - reveal) + titleTravel).toFixed(2) + "px");
    intro.style.setProperty("--intro-darkness", dark.toFixed(4));
    intro.style.setProperty("--intro-image-opacity", imageOpacity.toFixed(4));
    intro.style.setProperty("--intro-image-scale", imageZoom.toFixed(4));
  }
  function schedule() {
    if (!queued) {
      queued = true;
      requestAnimationFrame(render);
    }
  }
  window.addEventListener("scroll", schedule, {passive: true});
  window.addEventListener("resize", schedule, {passive: true});
  if (reduceMotion.addEventListener) reduceMotion.addEventListener("change", schedule);
  render();

  // Match the soft rise of the first gallery tiles, without replaying
  // the transition every time the user scrolls back to them.
  if (reduceMotion.matches || !("IntersectionObserver" in window)) return;
  const tiles = target.querySelectorAll(".rg-tile");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("intro-unseen");
        entry.target.classList.add("intro-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {rootMargin: "0px 0px 8% 0px", threshold: .02});
  tiles.forEach((tile,i) => {
    tile.classList.add("intro-unseen");
    tile.style.transitionDelay = Math.min(180, (i % 2) * 100) + "ms";
    observer.observe(tile);
  });
})();