'use client';

import { useEffect, useState } from 'react';
import { siteConfig } from '@/config/site';

export function OfferCountdown() {
  const [label, setLabel] = useState('');

  useEffect(() => {
    if (!siteConfig.offerEndsAt) return;
    const end = new Date(siteConfig.offerEndsAt).getTime();
    const update = () => {
      const distance = end - Date.now();
      if (distance <= 0) return setLabel('Oferta encerrada');
      const days = Math.floor(distance / 86_400_000);
      const hours = Math.floor((distance % 86_400_000) / 3_600_000);
      const minutes = Math.floor((distance % 3_600_000) / 60_000);
      setLabel(`Oferta termina em ${days}d ${hours}h ${minutes}min`);
    };
    update();
    const timer = window.setInterval(update, 30_000);
    return () => window.clearInterval(timer);
  }, []);

  if (!siteConfig.offerEndsAt || !label) return null;
  return <p className="mt-4 inline-flex rounded-lg border border-[#f3c969]/25 bg-[#f3c969]/7 px-3 py-2 text-xs font-extrabold uppercase tracking-[.12em] text-[#ffe6a6]">⏳ {label}</p>;
}
