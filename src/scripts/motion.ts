import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

export function initMotion() {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });
  if (!reduced) {
    const lenis = new Lenis({ lerp: 0.12, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    (window as any).__lenis = lenis;
    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => {
      const id = a.getAttribute('href')!; if (id.length < 2) return;
      const t = document.querySelector(id); if (!t) return;
      e.preventDefault(); lenis.scrollTo(t as HTMLElement, { offset: -90 });
    }));
  }
  const els = gsap.utils.toArray<HTMLElement>('[data-reveal]');
  if (reduced) { els.forEach((e) => gsap.set(e, { opacity: 1, y: 0 })); return; }
  els.forEach((el) => {
    const d = parseFloat(el.dataset.reveal || '0') || 0;
    gsap.to(el, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out', delay: d, scrollTrigger: { trigger: el, start: 'top 92%', once: true } });
  });
  // safety sweep: never leave content hidden on fast scroll / anchor jumps
  const sweep = () => els.forEach((el) => { if (el.getBoundingClientRect().top < innerHeight && getComputedStyle(el).opacity === '0') gsap.to(el, { opacity: 1, y: 0, duration: 0.5 }); });
  let t: number; addEventListener('scroll', () => { clearTimeout(t); t = window.setTimeout(sweep, 180); }, { passive: true });
  const h0 = document.body.scrollHeight;
  document.fonts?.ready.then(() => { if (document.body.scrollHeight !== h0) ScrollTrigger.refresh(); });
  gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
    const end = parseFloat(el.dataset.count!); const pre = el.dataset.prefix || ''; const suf = el.dataset.suffix || ''; const o = { v: 0 };
    gsap.to(o, { v: end, duration: 1.4, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true }, onUpdate: () => { el.textContent = pre + Math.round(o.v).toLocaleString('en-GB') + suf; } });
  });
}
