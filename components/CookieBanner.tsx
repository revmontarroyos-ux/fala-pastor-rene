'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  useEffect(() => setVisible(localStorage.getItem('fpr-cookie-consent') !== 'accepted'), []);
  if (!visible) return null;
  return (
    <aside className="fixed bottom-4 left-1/2 z-[80] w-[min(720px,calc(100%-1.5rem))] -translate-x-1/2 rounded-2xl border border-white/12 bg-[#120e0c]/95 p-4 shadow-2xl backdrop-blur-xl md:flex md:items-center md:gap-5" aria-label="Aviso de cookies">
      <p className="flex-1 text-sm leading-6 text-[#c1b7ac]">Este site pode usar cookies de medição quando os identificadores de Analytics ou Pixel forem configurados. Consulte a política de privacidade.</p>
      <div className="mt-3 flex gap-2 md:mt-0">
        <Link href="/politica-de-privacidade" className="secondary-button !min-h-10 !px-3 !py-2 text-xs">Política</Link>
        <button className="primary-button !min-h-10 !px-3 !py-2 text-xs" onClick={() => { localStorage.setItem('fpr-cookie-consent', 'accepted'); setVisible(false); }}>Entendi</button>
      </div>
    </aside>
  );
}
