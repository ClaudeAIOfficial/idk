// Original gallery sequence extracted from the user-supplied HTML snapshot.
const screenshots = [{"name":"Jason_and_Lucia_14_Mobile.17zv0lmevzbgs.jpg","label":"Jason and Lucia 14 Mobile","src":"https://www.rockstargames.com/VI/_next/static/media/Jason_and_Lucia_14_Mobile.17zv0lmevzbgs.jpg","remote":"https://www.rockstargames.com/VI/_next/static/media/Jason_and_Lucia_14_Mobile.17zv0lmevzbgs.jpg","local":false,"fallback":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_25.0f72z-5qgyd-v.jpg"},{"name":"Jason_and_Lucia_15.0m-_zb-mcy2zr.jpg","label":"Jason and Lucia","src":"https://www.rockstargames.com/VI/_next/static/media/Jason_and_Lucia_15.0m-_zb~mcy2zr.jpg","remote":"https://www.rockstargames.com/VI/_next/static/media/Jason_and_Lucia_15.0m-_zb~mcy2zr.jpg","local":false,"fallback":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_20.18c75478u52nf.jpg"},{"name":"Vice_City_15.11tb0mz68edqo.jpg","label":"Vice City","src":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_15.11tb0mz68edqo.jpg","remote":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_15.11tb0mz68edqo.jpg","local":true,"fallback":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_16.16hjjmnxqg9mv.jpg"},{"name":"Vice_City_13.0iq8ff474tsdx.jpg","label":"Vice City","src":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_13.0iq8ff474tsdx.jpg","remote":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_13.0iq8ff474tsdx.jpg","local":true,"fallback":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_23.183sae.altxv3.jpg"},{"name":"Lucia_Caminos_11.0j617-ylicowx.jpg","label":"Lucia Caminos","src":"https://www.rockstargames.com/VI/_next/static/media/Lucia_Caminos_11.0j617-ylicowx.jpg","remote":"https://www.rockstargames.com/VI/_next/static/media/Lucia_Caminos_11.0j617-ylicowx.jpg","local":false,"fallback":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_22.0-9jlb822n-g.jpg"},{"name":"Jason_and_Lucia_16.05-d133mx68ku.jpg","label":"Jason and Lucia","src":"https://www.rockstargames.com/VI/_next/static/media/Jason_and_Lucia_16.05-d133mx68ku.jpg","remote":"https://www.rockstargames.com/VI/_next/static/media/Jason_and_Lucia_16.05-d133mx68ku.jpg","local":false,"fallback":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_18.001ebutl6h-9w.jpg"},{"name":"Jason_Duval_11.019l5gj6-0-0v.jpg","label":"Jason Duval","src":"https://www.rockstargames.com/VI/_next/static/media/Jason_Duval_11.019l5gj6~0~0v.jpg","remote":"https://www.rockstargames.com/VI/_next/static/media/Jason_Duval_11.019l5gj6~0~0v.jpg","local":false,"fallback":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_13.0iq8ff474tsdx.jpg"},{"name":"Port_Gellhorn_07.053ldlg0m.2r..jpg","label":"Port Gellhorn 07.053ldlg0m.2r","src":"https://www.rockstargames.com/VI/_next/static/media/Port_Gellhorn_07.053ldlg0m.2r..jpg","remote":"https://www.rockstargames.com/VI/_next/static/media/Port_Gellhorn_07.053ldlg0m.2r..jpg","local":true,"fallback":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_26.0.bvvu2216_mj.jpg"},{"name":"Vice_City_16.16hjjmnxqg9mv.jpg","label":"Vice City","src":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_16.16hjjmnxqg9mv.jpg","remote":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_16.16hjjmnxqg9mv.jpg","local":true,"fallback":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_24.0r9tor5-x.p75.jpg"},{"name":"Jason_and_Lucia_17.117_b11r13mg5.jpg","label":"Jason and Lucia","src":"https://www.rockstargames.com/VI/_next/static/media/Jason_and_Lucia_17.117_b11r13mg5.jpg","remote":"https://www.rockstargames.com/VI/_next/static/media/Jason_and_Lucia_17.117_b11r13mg5.jpg","local":false,"fallback":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_27.0d2e-w_r93hmh.jpg"},{"name":"Vice_City_17.0er79m2u3nygs.jpg","label":"Vice City","src":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_17.0er79m2u3nygs.jpg","remote":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_17.0er79m2u3nygs.jpg","local":true,"fallback":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_21.0m5vh15h178-e.jpg"},{"name":"Vice_City_18.001ebutl6h-9w.jpg","label":"Vice City","src":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_18.001ebutl6h-9w.jpg","remote":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_18.001ebutl6h-9w.jpg","local":true,"fallback":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_14.0fu8u9jh5hkg7.jpg"},{"name":"Vice_City_20.18c75478u52nf.jpg","label":"Vice City","src":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_20.18c75478u52nf.jpg","remote":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_20.18c75478u52nf.jpg","local":true,"fallback":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_15.11tb0mz68edqo.jpg"},{"name":"Vice_City_19.01ow62.xq.64i.jpg","label":"Vice City 19.01ow62.xq","src":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_19.01ow62.xq.64i.jpg","remote":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_19.01ow62.xq.64i.jpg","local":true,"fallback":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_19.01ow62.xq.64i.jpg"},{"name":"Jason_Duval_12.0zcl2old.t6gf.jpg","label":"Jason Duval 12.0zcl2old","src":"https://www.rockstargames.com/VI/_next/static/media/Jason_Duval_12.0zcl2old.t6gf.jpg","remote":"https://www.rockstargames.com/VI/_next/static/media/Jason_Duval_12.0zcl2old.t6gf.jpg","local":false,"fallback":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_17.0er79m2u3nygs.jpg"},{"name":"Lucia_Caminos_12.0saq9ns-xj03.jpg","label":"Lucia Caminos","src":"https://www.rockstargames.com/VI/_next/static/media/Lucia_Caminos_12.0saq9ns-~xj03.jpg","remote":"https://www.rockstargames.com/VI/_next/static/media/Lucia_Caminos_12.0saq9ns-~xj03.jpg","local":false,"fallback":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_25.0f72z-5qgyd-v.jpg"},{"name":"Vice_City_21.0m5vh15h178-e.jpg","label":"Vice City","src":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_21.0m5vh15h178-e.jpg","remote":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_21.0m5vh15h178-e.jpg","local":true,"fallback":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_20.18c75478u52nf.jpg"},{"name":"Jason_and_Lucia_20.0cd-.c7jr-5g9.jpg","label":"Jason and Lucia 20.0cd-","src":"https://www.rockstargames.com/VI/_next/static/media/Jason_and_Lucia_20.0cd~.c7jr~5g9.jpg","remote":"https://www.rockstargames.com/VI/_next/static/media/Jason_and_Lucia_20.0cd~.c7jr~5g9.jpg","local":false,"fallback":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_16.16hjjmnxqg9mv.jpg"},{"name":"Jason_Duval_13.0xtzlmp0y6mt.jpg","label":"Jason Duval","src":"https://www.rockstargames.com/VI/_next/static/media/Jason_Duval_13.0xtzlmp0y6mt-.jpg","remote":"https://www.rockstargames.com/VI/_next/static/media/Jason_Duval_13.0xtzlmp0y6mt-.jpg","local":false,"fallback":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_23.183sae.altxv3.jpg"},{"name":"Vice_City_22.0-9jlb822n-g.jpg","label":"Vice City","src":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_22.0-9jlb822n-g.jpg","remote":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_22.0--9jlb822n~g.jpg","local":true,"fallback":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_22.0-9jlb822n-g.jpg"},{"name":"Vice_City_23.183sae.altxv3.jpg","label":"Vice City 23.183sae","src":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_23.183sae.altxv3.jpg","remote":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_23.183sae.altxv3.jpg","local":true,"fallback":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_18.001ebutl6h-9w.jpg"},{"name":"Jason_Duval_14.0eczq557_iuqo.jpg","label":"Jason Duval","src":"https://www.rockstargames.com/VI/_next/static/media/Jason_Duval_14.0eczq557_iuqo.jpg","remote":"https://www.rockstargames.com/VI/_next/static/media/Jason_Duval_14.0eczq557_iuqo.jpg","local":false,"fallback":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_13.0iq8ff474tsdx.jpg"},{"name":"Lucia_Caminos_13.08dd3_zn0g59u.jpg","label":"Lucia Caminos","src":"https://www.rockstargames.com/VI/_next/static/media/Lucia_Caminos_13.08dd3_zn0g59u.jpg","remote":"https://www.rockstargames.com/VI/_next/static/media/Lucia_Caminos_13.08dd3_zn0g59u.jpg","local":false,"fallback":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_26.0.bvvu2216_mj.jpg"},{"name":"Jason_and_Lucia_18.0kjv.et7330m_.jpg","label":"Jason and Lucia 18.0kjv","src":"https://www.rockstargames.com/VI/_next/static/media/Jason_and_Lucia_18.0kjv.et7330m_.jpg","remote":"https://www.rockstargames.com/VI/_next/static/media/Jason_and_Lucia_18.0kjv.et7330m_.jpg","local":false,"fallback":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_24.0r9tor5-x.p75.jpg"},{"name":"Jason_Duval_15.0oze53sounjp2.jpg","label":"Jason Duval","src":"https://www.rockstargames.com/VI/_next/static/media/Jason_Duval_15.0oze53sounjp2.jpg","remote":"https://www.rockstargames.com/VI/_next/static/media/Jason_Duval_15.0oze53sounjp2.jpg","local":false,"fallback":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_27.0d2e-w_r93hmh.jpg"},{"name":"Jason_and_Lucia_19.0n_.5s-v-v5je.jpg","label":"Jason and Lucia 19.0n ","src":"https://www.rockstargames.com/VI/_next/static/media/Jason_and_Lucia_19.0n_.5s-v~v5je.jpg","remote":"https://www.rockstargames.com/VI/_next/static/media/Jason_and_Lucia_19.0n_.5s-v~v5je.jpg","local":false,"fallback":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_21.0m5vh15h178-e.jpg"},{"name":"Vice_City_24.0r9tor5-x.p75.jpg","label":"Vice City 24.0r9tor5-x","src":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_24.0r9tor5-x.p75.jpg","remote":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_24.0r9tor5-x.p75.jpg","local":true,"fallback":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_14.0fu8u9jh5hkg7.jpg"},{"name":"Jason_Duval_16.090yj-lyddyrr.jpg","label":"Jason Duval","src":"https://www.rockstargames.com/VI/_next/static/media/Jason_Duval_16.090yj-lyddyrr.jpg","remote":"https://www.rockstargames.com/VI/_next/static/media/Jason_Duval_16.090yj-lyddyrr.jpg","local":false,"fallback":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_15.11tb0mz68edqo.jpg"},{"name":"Leonida_Keys_07.0z9tb69ssp4rq.jpg","label":"Leonida Keys","src":"https://www.rockstargames.com/VI/_next/static/media/Leonida_Keys_07.0z9tb69ssp4rq.jpg","remote":"https://www.rockstargames.com/VI/_next/static/media/Leonida_Keys_07.0z9tb69ssp4rq.jpg","local":false,"fallback":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_19.01ow62.xq.64i.jpg"},{"name":"Vice_City_25.0f72z-5qgyd-v.jpg","label":"Vice City","src":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_25.0f72z-5qgyd-v.jpg","remote":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_25.0f72z-5qgyd~v.jpg","local":true,"fallback":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_17.0er79m2u3nygs.jpg"},{"name":"Jason_Duval_17.0tp7hiuz.e385.jpg","label":"Jason Duval 17.0tp7hiuz","src":"https://www.rockstargames.com/VI/_next/static/media/Jason_Duval_17.0tp7hiuz.e385.jpg","remote":"https://www.rockstargames.com/VI/_next/static/media/Jason_Duval_17.0tp7hiuz.e385.jpg","local":false,"fallback":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_25.0f72z-5qgyd-v.jpg"},{"name":"Lucia_Caminos_14.0.6_io7qeozm6.jpg","label":"Lucia Caminos 14.0","src":"https://www.rockstargames.com/VI/_next/static/media/Lucia_Caminos_14.0.6_io7qeozm6.jpg","remote":"https://www.rockstargames.com/VI/_next/static/media/Lucia_Caminos_14.0.6_io7qeozm6.jpg","local":false,"fallback":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_20.18c75478u52nf.jpg"},{"name":"Grassrivers_07.0txitddjiq5o1.jpg","label":"Grassrivers","src":"https://www.rockstargames.com/VI/_next/static/media/Grassrivers_07.0txitddjiq5o1.jpg","remote":"https://www.rockstargames.com/VI/_next/static/media/Grassrivers_07.0txitddjiq5o1.jpg","local":false,"fallback":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_16.16hjjmnxqg9mv.jpg"},{"name":"Vice_City_26.0.bvvu2216_mj.jpg","label":"Vice City 26.0","src":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_26.0.bvvu2216_mj.jpg","remote":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_26.0.bvvu2216_mj.jpg","local":true,"fallback":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_23.183sae.altxv3.jpg"},{"name":"Jason_Duval_19.0r7a1q04n5.7m.jpg","label":"Jason Duval 19.0r7a1q04n5","src":"https://www.rockstargames.com/VI/_next/static/media/Jason_Duval_19.0r7a1q04n5.7m.jpg","remote":"https://www.rockstargames.com/VI/_next/static/media/Jason_Duval_19.0r7a1q04n5.7m.jpg","local":false,"fallback":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_22.0-9jlb822n-g.jpg"},{"name":"Vice_City_14.0fu8u9jh5hkg7.jpg","label":"Vice City","src":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_14.0fu8u9jh5hkg7.jpg","remote":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_14.0fu8u9jh5hkg7.jpg","local":true,"fallback":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_18.001ebutl6h-9w.jpg"},{"name":"Jason_Duval_18.000.jk1plncsr.jpg","label":"Jason Duval 18.000","src":"https://www.rockstargames.com/VI/_next/static/media/Jason_Duval_18.000.jk1plncsr.jpg","remote":"https://www.rockstargames.com/VI/_next/static/media/Jason_Duval_18.000.jk1plncsr.jpg","local":false,"fallback":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_13.0iq8ff474tsdx.jpg"},{"name":"Grassrivers_08.0x-z0h-he35zo.jpg","label":"Grassrivers","src":"https://www.rockstargames.com/VI/_next/static/media/Grassrivers_08.0x-z0h-he35zo.jpg","remote":"https://www.rockstargames.com/VI/_next/static/media/Grassrivers_08.0x-z0h-he35zo.jpg","local":false,"fallback":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_26.0.bvvu2216_mj.jpg"},{"name":"Vice_City_27.0d2e-w_r93hmh.jpg","label":"Vice City","src":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_27.0d2e-w_r93hmh.jpg","remote":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_27.0d2e~w_r93hmh.jpg","local":true,"fallback":"https://www.rockstargames.com/VI/_next/static/media/Vice_City_24.0r9tor5-x.p75.jpg"}];
const count = screenshots.length;
const grid = document.getElementById('gallery-grid');
const viewer = document.getElementById('viewer');
const viewerImage = document.getElementById('viewer-image');
const viewerCounter = document.getElementById('viewer-counter');
const viewerCaption = document.getElementById('viewer-caption');
const viewerOpen = document.getElementById('viewer-open');
let activeIndex = 0;
let previousFocus = null;
let swipeStart = null;

// Source archive is truncated. Try the original Rockstar asset, then use one of the
// screenshots that survived in the archive. This makes the gallery usable offline.
function imageFallback(img, fallback) {
  img.addEventListener('error', () => {
    if (img.dataset.fallbackDone) return;
    img.dataset.fallbackDone = 'true';
    img.src = fallback;
  });
}
imageFallback(document.getElementById('hero-image'), document.getElementById('hero-image').dataset.fallback);

const tileClasses = ['wide','half','half','half','half','wide','third','third','third','half','half','wide','half','half','third','third','third'];
const sectionLabels = {0:'VICE CITY',6:'AFTER DARK',12:'THE PEOPLE',19:'BEYOND THE CITY',25:'ONLY IN LEONIDA'};
screenshots.forEach((shot, index) => {
  if (sectionLabels[index]) {
    const divider = document.createElement('div');
    divider.className = 'gallery-divider';
    divider.innerHTML = `<span>${String(index + 1).padStart(2, '0')} / ${sectionLabels[index]}</span><span>LEONIDA, USA</span>`;
    grid.append(divider);
  }
  const tile = document.createElement('button');
  tile.type = 'button';
  tile.className = 'gallery-tile ' + tileClasses[index % tileClasses.length] + ' reveal';
  tile.setAttribute('aria-label', `View screenshot ${index+1} of ${count}: ${shot.label}`);
  const img = document.createElement('img');
  img.src = shot.src;
  img.alt = `${shot.label.replace(/ \d+$/, '')} screenshot`;
  img.loading = index < 4 ? 'eager' : 'lazy';
  img.decoding = 'async';
  imageFallback(img, shot.fallback);
  const mark = document.createElement('span');
  mark.className = 'tile-mark';
  mark.textContent = String(index + 1).padStart(2,'0') + ' / ' + String(count).padStart(2,'0');
  const zoom = document.createElement('span');
  zoom.className = 'tile-zoom';zoom.textContent = '↗';
  tile.append(img,mark,zoom);
  tile.addEventListener('click', () => openViewer(index));
  grid.append(tile);
});
document.getElementById('gallery-count').textContent = String(count).padStart(2, '0');

function showViewerImage(index) {
  activeIndex = (index + count) % count;
  const shot = screenshots[activeIndex];
  viewerImage.dataset.fallbackDone = '';
  viewerImage.src = shot.src;
  viewerImage.alt = shot.label + ' screenshot';
  viewerCounter.textContent = String(activeIndex + 1).padStart(2,'0') + ' / ' + String(count).padStart(2,'0');
  viewerCaption.textContent = shot.label.toUpperCase();
  viewerOpen.href = shot.shot.src;
  viewerImage.onerror = () => {
    if (viewerImage.dataset.fallbackDone) return;
    viewerImage.dataset.fallbackDone = 'true';
    viewerImage.src = shot.fallback;
    viewerOpen.href = shot.fallback;
  };
}
function openViewer(index) {
  previousFocus = document.activeElement;
  showViewerImage(index);
  viewer.classList.add('is-visible');viewer.setAttribute('aria-hidden','false');
  document.body.classList.add('is-locked');
  document.getElementById('viewer-close').focus();
}
function closeViewer() {
  viewer.classList.remove('is-visible');viewer.setAttribute('aria-hidden','true');
  document.body.classList.remove('is-locked');
  if (previousFocus) previousFocus.focus();
}
document.getElementById('viewer-close').addEventListener('click',closeViewer);
document.getElementById('viewer-prev').addEventListener('click',()=>showViewerImage(activeIndex-1));
document.getElementById('viewer-next').addEventListener('click',()=>showViewerImage(activeIndex+1));
viewer.addEventListener('click',e=>{if(e.target===viewer)closeViewer()});
viewer.addEventListener('touchstart', e=>{swipeStart=e.touches[0].clientX},{passive:true});
viewer.addEventListener('touchend', e=>{if(swipeStart===null)return;const diff=e.changedTouches[0].clientX-swipeStart;if(Math.abs(diff)>45)showViewerImage(activeIndex+(diff<0?1:-1));swipeStart=null},{passive:true});
document.addEventListener('keydown',e=>{
  if (viewer.classList.contains('is-visible')) {
    if(e.key==='Escape')closeViewer();
    if(e.key==='ArrowRight')showViewerImage(activeIndex+1);
    if(e.key==='ArrowLeft')showViewerImage(activeIndex-1);
    return;
  }
  if(e.key==='Escape')setMenu(false);
});

const menuToggle = document.getElementById('menu-toggle');
const menuPanel = document.getElementById('menu-panel');
const menuShade = document.getElementById('menu-shade');
function setMenu(open) {
  menuToggle.classList.toggle('active',open);
  menuPanel.classList.toggle('is-open',open);
  menuShade.classList.toggle('is-open',open);
  menuToggle.setAttribute('aria-expanded',String(open));
  menuToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');
  menuPanel.inert = !open;
  document.body.classList.toggle('menu-open',open);
}
menuToggle.addEventListener('click',()=>setMenu(!menuPanel.classList.contains('is-open')));
menuShade.addEventListener('click',()=>setMenu(false));
menuPanel.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));

let ticking=false;
function updateScroll() {
  const max=document.documentElement.scrollHeight-innerHeight;
  document.getElementById('scroll-progress').style.transform=`scaleX(${max>0?scrollY/max:0})`;
  document.querySelector('.site-header').classList.toggle('is-scrolled',scrollY>32);
  ticking=false;
}
window.addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(updateScroll);ticking=true;}},{passive:true});
updateScroll();
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add('shown');observer.unobserve(entry.target)}
}),{threshold:0.08,rootMargin:'0px 0px 80px 0px'});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));