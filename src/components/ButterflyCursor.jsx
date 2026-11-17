import React, { useEffect, useRef } from 'react';

// One wing (upper + lower lobe), drawn for the right side of a 64x64 box with
// the body on x = 32. The left wing reuses it mirrored.
function Wing() {
  return (
    <>
      <path d="M33 31 C 35 19, 47 6, 57 8 C 64 10, 61 22, 52 27 C 46 30, 39 32, 33 33 Z" />
      <path d="M33 34 C 42 34, 52 39, 51 47 C 50 55, 41 54, 37 47 C 35 43, 34 39, 33 36 Z" />
    </>
  );
}

const CLICKABLE = 'a, button, input, textarea, select, label, [role="button"]';

export default function ButterflyCursor() {
  const ref = useRef(null);

  useEffect(() => {
    // Only on devices with a real mouse; touch screens keep their default behaviour.
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const el = ref.current;
    document.documentElement.classList.add('butterfly-cursor-on');

    const move = (e) => {
      el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      el.style.opacity = '1';
    };
    const over = (e) => {
      el.classList.toggle('is-hovering', !!e.target.closest?.(CLICKABLE));
    };
    const hide = () => { el.style.opacity = '0'; };
    const down = () => el.classList.add('is-pressed');
    const up = () => el.classList.remove('is-pressed');

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mouseover', over, { passive: true });
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    document.addEventListener('mouseleave', hide);

    return () => {
      document.documentElement.classList.remove('butterfly-cursor-on');
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      document.removeEventListener('mouseleave', hide);
    };
  }, []);

  return (
    <div ref={ref} className="butterfly-cursor" aria-hidden="true">
      <svg viewBox="0 0 64 64" width="44" height="44" className="butterfly-svg">
        <g className="butterfly-wing">
          <g transform="matrix(-1 0 0 1 64 0)"><Wing /></g>
        </g>
        <g className="butterfly-wing">
          <Wing />
        </g>
        <ellipse cx="32" cy="34" rx="2.2" ry="10" />
        <path d="M31 25 C 29 19, 26 16, 23 15" fill="none" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M33 25 C 35 19, 38 16, 41 15" fill="none" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    </div>
  );
}
