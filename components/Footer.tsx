import Link from 'next/link';
import { Logo } from './Logo';
import { siteConfig } from '@/config/site';

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#050403] py-12">
      <div className="site-container grid gap-9 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div><Logo /><p className="mt-5 max-w-md text-sm leading-7 text-[#948a80]">Conteúdo cristão com linguagem simples, base bíblica e aplicação para a vida real.</p></div>
        <div><h3 className="text-sm font-black uppercase tracking-[.15em] text-[#f3c969]">Navegação</h3><div className="mt-4 grid gap-3 text-sm text-[#aaa095]"><Link href="/sobre">Sobre</Link><Link href="/alicerce-inabalavel">E-book gratuito</Link><Link href="/blog">Blog</Link><Link href="/devocionais">Devocionais</Link></div></div>
        <div><h3 className="text-sm font-black uppercase tracking-[.15em] text-[#f3c969]">Informações</h3><div className="mt-4 grid gap-3 text-sm text-[#aaa095]"><Link href="/contato">Contato</Link><Link href="/politica-de-privacidade">Privacidade</Link><Link href="/termos-de-uso">Termos de uso</Link><a href={siteConfig.checkoutUrl} target="_blank" rel="noreferrer">Comprar e-book</a></div></div>
      </div>
      <div className="site-container mt-10 border-t border-white/8 pt-6 text-xs leading-6 text-[#756c64]">© {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados. Este site não é afiliado ao GitHub, à Kiwify ou às plataformas de anúncios mencionadas.</div>
    </footer>
  );
}
