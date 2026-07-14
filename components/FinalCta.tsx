import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Reveal } from './Reveal';

export function FinalCta() {
  return (
    <section className="pb-24 pt-6">
      <div className="site-container">
        <Reveal>
          <div className="noise relative overflow-hidden rounded-[2.2rem] border border-[#f3c969]/28 bg-[radial-gradient(circle_at_50%_0%,rgba(243,201,105,.19),transparent_48%),linear-gradient(135deg,#55131a,#170a0a_58%,#090706)] px-6 py-16 text-center md:px-12 md:py-24">
            <p className="text-xs font-black uppercase tracking-[.25em] text-[#f3c969]">Uma decisão simples. Um passo consciente.</p>
            <h2 className="display-font text-balance mx-auto mt-5 max-w-4xl text-[clamp(2.5rem,6vw,5.4rem)] leading-[.95] text-[#fff8e8]">O mundo muda. A Palavra permanece.</h2>
            <p className="text-balance mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#c6bbb0]">Comece hoje uma leitura que pode fortalecer suas convicções e preparar sua família para viver com fidelidade.</p>
            <a href={siteConfig.checkoutUrl} target="_blank" rel="noreferrer" className="primary-button shimmer mt-8">Comprar por {siteConfig.price} <ArrowRight size={20} /></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
