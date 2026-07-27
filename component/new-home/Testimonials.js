import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';

/**
 * DESIGN — "The Ticker"
 *
 * This agency's whole pitch is numbers that climb (rankings, ROI,
 * conversion rate — see the services section). So instead of another
 * card wall, testimonials are framed as a live market ticker: each
 * client gets a ticker symbol, a sparkline, a star rating — quotes,
 * literally. It runs as a continuously drifting strip full-bleed
 * across the section (grab it and drag, or just let it scroll),
 * which also happens to solve "compact + scrollable on every screen"
 * for free — a ticker tape is supposed to scroll.
 *
 * Deliberately breaks from the site's light rhythm with a dark,
 * dashboard-style band — a held breath before the next light section.
 */

const testimonials = [
  { id: 1, ticker: 'CJX', name: 'Christine Jackson', handle: 'luminous_statue_35', avatar: 'https://randomuser.me/api/portraits/women/44.jpg', text: "If you're not using testimonials, you're missing out on a golden opportunity to turn visitors into customers.", spark: 'M2,30 C10,29 14,22 22,23 C30,24 32,14 42,12 C52,10 56,18 66,10 C74,4 80,8 90,2' },
  { id: 2, ticker: 'YAG', name: 'Yasmine Garcia', handle: 'pendulous_ukulele_30', avatar: 'https://randomuser.me/api/portraits/women/68.jpg', text: "Golden opportunity to turn visitors and potential buyers into actual, paying customers.", spark: 'M2,26 C10,27 16,30 22,26 C30,20 32,10 42,11 C52,12 54,20 64,16 C74,12 78,4 90,3' },
  { id: 3, ticker: 'SKP', name: 'Sakura Palastri', handle: 'salubrious_producer_83', avatar: 'https://randomuser.me/api/portraits/women/50.jpg', text: "Missing out on a golden opportunity to turn visitors into actual customers, plain and simple.", spark: 'M2,32 C12,31 16,26 24,27 C32,28 34,18 44,16 C54,14 58,20 68,10 C76,2 82,6 90,3' },
  { id: 4, ticker: 'BLL', name: 'Bác Lỡ Lĩnh', handle: 'puckish_cookies_38', avatar: 'https://randomuser.me/api/portraits/men/32.jpg', text: "You're missing out on a golden opportunity to turn visitors into customers without them.", spark: 'M2,28 C10,29 16,32 22,28 C30,23 32,12 42,13 C52,14 54,22 64,18 C74,14 78,6 90,4' },
  { id: 5, ticker: 'IRH', name: 'Ibrahim Mahmud', handle: 'limpid_cupcake_68', avatar: 'https://randomuser.me/api/portraits/men/46.jpg', text: "A golden opportunity to turn visitors and potential buyers into actual customers, finally realized.", spark: 'M2,34 C12,33 16,26 26,27 C34,28 36,18 46,16 C56,14 60,20 70,10 C78,2 84,6 90,3' },
  { id: 6, ticker: 'MGT', name: 'Margaret Taylor', handle: 'amatory_clerk_73', avatar: 'https://randomuser.me/api/portraits/women/26.jpg', text: "Testimonials turned our visitors and potential buyers into actual, loyal customers.", spark: 'M2,30 C10,31 16,34 22,30 C30,25 32,14 42,15 C52,16 54,24 64,20 C74,16 78,6 90,4' },
];

const accents = ['#16C784', '#FF6B4A', '#3355FF', '#8B5CF6'];
const track = [...testimonials, ...testimonials]; // duplicated for a seamless loop
const AUTO_SPEED = 26; // px per second

const TickerCard = ({ item, accent }) => (
  <div className="flex-none w-[300px] select-none rounded-xl border border-white/10 bg-white/[0.03] px-5 py-5 backdrop-blur-sm">
    {/* Symbol + sparkline */}
    <div className="mb-4 flex items-center justify-between">
      <span className="flex items-center gap-1.5 font-mono text-xs font-semibold tracking-wide" style={{ color: accent }}>
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M4 0L8 8H0L4 0Z" fill={accent} /></svg>
        ${item.ticker}
      </span>
      <svg viewBox="0 0 92 36" className="h-4 w-16" fill="none">
        <path d={item.spark} stroke={accent} strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>

    {/* Quote */}
    <p className="mb-5 text-[14px] leading-relaxed text-slate-200" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
      "{item.text}"
    </p>

    {/* Identity + rating */}
    <div className="flex items-center justify-between border-t border-white/10 pt-4">
      <div className="flex items-center gap-2.5 min-w-0">
        <img src={item.avatar} alt={item.name} className="h-7 w-7 shrink-0 rounded-full object-cover grayscale" />
        <div className="min-w-0">
          <p className="truncate text-xs font-semibold text-white">{item.name}</p>
        </div>
      </div>
      <span className="shrink-0 font-mono text-[11px] tracking-wide" style={{ color: accent }}>★★★★★</span>
    </div>
  </div>
);

const Testimonials = () => {
  const trackRef = useRef(null);
  const x = useMotionValue(0);
  const [halfWidth, setHalfWidth] = useState(0);
  const [paused, setPaused] = useState(false);
  const drag = useRef({ active: false, startClientX: 0, startX: 0 });

  useEffect(() => {
    if (trackRef.current) setHalfWidth(trackRef.current.scrollWidth / 2);
  }, []);

  useAnimationFrame((_, delta) => {
    if (paused || drag.current.active || !halfWidth) return;
    let next = x.get() - (AUTO_SPEED * delta) / 1000;
    if (next <= -halfWidth) next += halfWidth;
    if (next > 0) next -= halfWidth;
    x.set(next);
  });

  const wrap = (val) => {
    if (!halfWidth) return val;
    let v = val;
    while (v <= -halfWidth) v += halfWidth;
    while (v > 0) v -= halfWidth;
    return v;
  };

  const onPointerDown = (e) => {
    drag.current = { active: true, startClientX: e.clientX, startX: x.get() };
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e) => {
    if (!drag.current.active) return;
    x.set(wrap(drag.current.startX + (e.clientX - drag.current.startClientX)));
  };
  const endDrag = () => { drag.current.active = false; };

  return (
    <section className="relative overflow-hidden bg-[#0E0F16] py-16 md:py-20">
      {/* Faint chart-grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px)', backgroundSize: '64px 100%' }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center mb-12 md:mb-14">
        {/* <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#16C784] opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#16C784]" />
          </span>
          Live client feedback
        </motion.div> */}
        <motion.h2
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.5 }}
          className="mb-3 text-3xl sm:text-4xl md:text-[2.75rem] font-semibold tracking-tight text-white"
        >
          Our trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">clients</span>
        </motion.h2>
        <motion.p
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-base sm:text-lg leading-relaxed text-slate-400"
        >
          Every engagement gets tracked like a position — here's what's showing on the board.
        </motion.p>
      </div>

      {/* Full-bleed ticker strip */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        viewport={{ once: true, amount: 0.2 }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
        >
          <motion.div ref={trackRef} style={{ x }} className="flex w-max gap-4 px-4">
            {track.map((item, index) => (
              <TickerCard key={`${item.id}-${index}`} item={item} accent={accents[index % accents.length]} />
            ))}
          </motion.div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#0E0F16] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#0E0F16] to-transparent" />
      </motion.div>
    </section>
  );
};

export default Testimonials;