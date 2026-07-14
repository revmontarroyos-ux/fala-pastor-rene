'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Logo } from './Logo';
import { siteConfig } from '@/config/site';

const links = [
  { href: '/#conteudo', label: 'O e-book' },
  { href: '/#temas', label: 'Temas' },
  { href: '/alicerce-inabalavel', label: 'E-book gratuito' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#080706]/82 backdrop-blur-xl">
      <div className="site-container flex min-h-18 items-center justify-between gap-5">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-bold text-[#c4bbb1] no-underline transition hover:text-[#ffe6a6]">
              {link.label}
            </Link>
          ))}
          <a href={siteConfig.checkoutUrl} className="primary-button !min-h-10 !rounded-xl !px-4 !py-2" target="_blank" rel="noreferrer">
            Comprar por {siteConfig.price}
          </a>
        </nav>
        <button className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/5 lg:hidden" onClick={() => setOpen(!open)} aria-label="Abrir menu" aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="site-container border-t border-white/8 py-4 lg:hidden" aria-label="Navegação móvel">
          <div className="grid gap-1">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm font-bold text-[#d7cec4] no-underline hover:bg-white/5">
                {link.label}
              </Link>
            ))}
            <a href={siteConfig.checkoutUrl} className="primary-button mt-2" target="_blank" rel="noreferrer">Comprar por {siteConfig.price}</a>
          </div>
        </nav>
      )}
    </header>
  );
}
