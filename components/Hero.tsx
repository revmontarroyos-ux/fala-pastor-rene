import { ArrowRight, BookOpen, ShieldCheck, Smartphone } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { BookMockup } from './BookMockup';
import { OfferCountdown } from './OfferCountdown';
import { Reveal } from './Reveal';

export function Hero() {
  return (
    <section className="noise hero-radial relative isolate min-h-[calc(100svh-4.5rem)] overflow-hidden">
      <div className="absolute -left-24 top-24 size-80 rounded-full bg-[#7b1921]/20 blur-[90px]" />
      <div className="absolute right-[-6rem] top-[-5rem] size-[28rem] rounded-full border border-[#f3c969]/10" />
      <div className="site-container grid min-h-[calc(100svh-4.5rem)] items-center gap-10 py-16 lg:grid-cols-[1.08fr_.92fr] lg:py-20">
        <Reveal>
          <div className="max-w-3xl">
            <span className="eyebrow"><BookOpen size={15} /> E-book cristão • 12 estudos</span>
            <h1 className="display-font text-balance mt-7 text-[clamp(3rem,7vw,6.45rem)] leading-[.91] tracking-[-.045em] text-[#fff8e8]">
              Como permanecer <span className="gold-text">fiel</span> quando o pecado virou normal?
            </h1>
            <p className="mt-7 max-w-2xl text-balance text-lg leading-8 text-[#c6bcb2] md:text-xl">
              Um caminho bíblico e prático para preservar a fé, proteger a família e cultivar santidade sem fugir da realidade.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={siteConfig.checkoutUrl} target="_blank" rel="noreferrer" className="primary-button shimmer">
                Quero o e-book por {siteConfig.price} <ArrowRight size={19} />
              </a>
              <a href="#conteudo" className="secondary-button">Conhecer o conteúdo</a>
            </div>
            <OfferCountdown />
            <div className="mt-8 grid max-w-2xl gap-3 text-sm text-[#b8aea3] sm:grid-cols-3">
              <div className="flex items-center gap-2"><ShieldCheck className="text-[#f3c969]" size={18} /> Checkout Kiwify</div>
              <div className="flex items-center gap-2"><Smartphone className="text-[#f3c969]" size={18} /> PDF para celular</div>
              <div className="flex items-center gap-2"><BookOpen className="text-[#f3c969]" size={18} /> Bíblia ACF</div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.12} className="lg:pl-7">
          <BookMockup />
        </Reveal>
      </div>
    </section>
  );
}
