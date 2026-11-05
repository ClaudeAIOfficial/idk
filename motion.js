/* Momentum scrolling and scroll-driven motion for the launch gallery.
   The original Rockstar HTML uses Lenis. We use the same engine when available,
   with a tiny native fallback if the CDN cannot load. */
(() => {
  "use strict";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reduceMotion.matches) return;
  const root = document.documentElement;
  const body = document.body;
  const gallery = document.querySelector(".rg-main");
  if (!gallery) return;

  let lenis = null;
  let fallback = null;
  const blocked = () => body.classList.contains("is-locked") || body.classList.contains("menu-open");

  if (typeof window.Lenis === "function") {
    lenis = new window.Lenis({
      duration: 1.32,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.94,
      touchMultiplier: 1,
      syncTouch: false,
      gestureOrientation: "vertical",
      anchors: true,
      autoRaf: true
    });
    root.classList.add("glide-active");
  } else if (window.matchMedia("(pointer: fine)").matches) {
    // Stay usable even if the Lenis CDN is unavailable.
    let current = window.scrollY, target = current, raf = 0, last = 0, writing = false;
    const limit = () => Math.max(0, root.scrollHeight - window.innerHeight);
    function tick(time) {
      const elapsed = last ? Math.min(time - last, 45) : 16.67;
      last = time;
      const delta = target - current;
      const alpha = 1 - Math.exp(-elapsed / 180);
      current += delta * alpha;
      if (Math.abs(delta) < 0.45) current = target;
      writing = true;
      window.scrollTo({top: current, behavior: "instant"});
      writing = false;
      if (Math.abs(target - current) > 0.45) raf = requestAnimationFrame(tick);
      else { raf = 0; last = 0; }
    }
    function scrollTo(y) {
      target = Math.max(0, Math.min(limit(), y));
      if (!raf) raf = requestAnimationFrame(tick);
    }
    window.addEventListener("wheel", event => {
      if (blocked() || event.defaultPrevented || event.ctrlKey || event.metaKey) return;
      if (event.target.closest("input,textarea,select,[contenteditable],.viewer,.menu-panel,[data-native-scroll]")) return;
      if (event.deltaX && Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
      if (!event.cancelable) return;
      event.preventDefault();
      const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? innerHeight : 1;
      scrollTo(target + event.deltaY * unit * 0.94);
    }, {passive: false});
    window.addEventListener("scroll", () => {
      if (writing || raf) return;
      current = target = window.scrollY;
    }, {passive: true});
    window.addEventListener("resize", () => {
      target = Math.min(target, limit());
      current = window.scrollY;
    }, {passive: true});
    for (const link of document.querySelectorAll('a[href^="#"]')) {
      link.addEventListener("click", event => {
        const selector = link.getAttribute("href");
        if (!selector || selector === "#") return;
        const el = document.getElementById(selector.slice(1));
        if (!el) return;
        event.preventDefault();
        history.pushState(null, "", selector);
        scrollTo(el.getBoundingClientRect().top + window.scrollY);
      });
    }
    fallback = {stop() {if(raf) cancelAnimationFrame(raf); raf=0; last=0; current=target=window.scrollY;}, start() {current=target=window.scrollY;}};
    root.classList.add("glide-active");
  }

  // Pause momentum while lightbox or menu has scroll lock.
  if (lenis || fallback) {
    const controller = lenis || fallback;
    const syncLock = () => {if (blocked()) controller.stop(); else controller.start();};
    new MutationObserver(syncLock).observe(body, {attributes: true, attributeFilter: ["class"]});
    syncLock();
  }

  // Subtle viewport-linked movement inside gallery frames, rather than
  // entry-only transitions. Keep image edges covered throughout the glide.
  if (!window.matchMedia("(pointer: fine)").matches) return;
  const active = new Set();
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      const picture = entry.target.querySelector("img");
      if (!picture) continue;
      if (entry.isIntersecting) active.add(picture);
      else active.delete(picture);
    }
    schedule();
  }, {rootMargin: "20% 0px", threshold: 0});
  gallery.querySelectorAll(".rg-tile").forEach(tile => observer.observe(tile));
  let nextFrame = 0;
  function schedule() {
    if (!nextFrame) nextFrame = requestAnimationFrame(update);
  }
  function update() {
    nextFrame = 0;
    const half = innerHeight / 2;
    for (const img of active) {
      const rect = img.parentElement.getBoundingClientRect();
      const distance = rect.top + rect.height / 2 - half;
      const edgeSafe = Math.min(42, rect.height * 0.039);
      const travel = Math.min(edgeSafe, Math.max(-edgeSafe, -distance * 0.055));
      img.style.setProperty("--rg-parallax", travel.toFixed(2) + "px");
    }
  }
  window.addEventListener("scroll", schedule, {passive: true});
  window.addEventListener("resize", schedule, {passive: true});
  if (lenis) lenis.on("scroll", schedule);
  schedule();
})();