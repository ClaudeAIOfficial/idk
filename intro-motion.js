/* Scroll-driven opening sequence reconstructed from the reference recording.
   Hero > mint title reveal > blue stage with smaller title > gallery rise.
   The animation follows scroll distance, so wheel, trackpad and touch
   gestures stay consistent with the Lenis glide. */
(() => {
  "use strict";
  const intro = document.getElementById("rg-intro");
  const firstGallery = document.getElementById("rg-intro-gallery");
  const gallery = document.getElementById("rg-sections");
  const heading = document.getElementById("rg-hero-caption");
  if (!intro || !firstGallery || !gallery || !heading) return;

  // The opening gallery is part of the same scene as the sticky hero.
  // Move it once, preserving the rest of the page and the lightbox.
  const firstSection = gallery.querySelector(":scope > .rg-series");
  if (firstSection) firstGallery.appendChild(firstSection);

  const clamp = (value, lo=0, hi=1) => Math.min(hi, Math.max(lo, value));
  const range = (value, from, to) => clamp((value-from)/(to-from));
  const ease = t => t*t*(3-2*t);
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  let raf = 0;
  const set = (key,value) => intro.style.setProperty(key,value);

  function paint() {
    raf = 0;
    const viewport = Math.max(1, innerHeight);
    const progress = Math.max(0,-intro.getBoundingClientRect().top/viewport);

    if (reduced.matches) {
      set("--intro-title-opacity","0");
      set("--intro-title-shift","0px");
      set("--intro-title-scale","1");
      set("--intro-image-opacity","1");
      set("--intro-image-scale","1");
      set("--intro-darkness","0");
      return;
    }

    // Stage 1. Keep the very first frame clean, then fade the title in.
    const enter = ease(range(progress,.045,.36));
    // Stage 2. The original shrinks the title and carries it toward the
    // top while the blue gallery background replaces the hero photograph.
    const travel = ease(range(progress,.39,1.13));
    // Stage 3. Hold it above the first gallery cards, then let it leave.
    const exit = 1-ease(range(progress,1.46,1.88));
    const opacity = enter*exit;

    set("--intro-title-opacity",opacity.toFixed(4));
    set("--intro-title-shift",(-viewport*.49*travel+28*(1-enter)).toFixed(2)+"px");
    set("--intro-title-scale",(1-.42*travel).toFixed(4));

    const imageFade = 1-ease(range(progress,.34,1.08));
    const blue = ease(range(progress,.27,1.08));
    const zoom = 1 + .045*ease(range(progress,0,1.10));
    set("--intro-image-opacity",imageFade.toFixed(4));
    set("--intro-darkness",blue.toFixed(4));
    set("--intro-image-scale",zoom.toFixed(4));
  }
  function schedule() {
    if (!raf) raf=requestAnimationFrame(paint);
  }
  addEventListener("scroll",schedule,{passive:true});
  addEventListener("resize",schedule,{passive:true});
  if(reduced.addEventListener)reduced.addEventListener("change",schedule);
  paint();

  if(reduced.matches || !("IntersectionObserver" in window))return;
  // Gallery images glide in as they become visible. No snap/teleport.
  const io = new IntersectionObserver(entries => {
    for(const entry of entries) {
      if(!entry.isIntersecting)continue;
      entry.target.classList.remove("intro-unseen");
      entry.target.classList.add("intro-visible");
      io.unobserve(entry.target);
    }
  },{rootMargin:"0px 0px 14% 0px",threshold:.01});
  firstGallery.querySelectorAll(".rg-tile").forEach((tile,i) => {
    tile.classList.add("intro-unseen");
    tile.style.transitionDelay=Math.min((i%3)*90,180)+"ms";
    io.observe(tile);
  });
})();