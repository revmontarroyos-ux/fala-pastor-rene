import { ArrowRight, Check, CreditCard, FileDown, LockKeyhole } from 'lucide-react';
import { BookMockup } from './BookMockup';
import { Reveal } from './Reveal';
import { siteConfig } from '@/config/site';

const features = [
  'E-book digital em PDF',
  '12 estudos bíblicos',
  'Plano prático de sete dias',
  'Aplicações para família e igreja',
  'Leitura em celular, tablet ou computador',
];

export function OfferSection() {
  return (
    <section id="oferta" className="section-pad relative overflow-hidden bg-[linear-gradient(140deg,#190b0b,#080706_60%)]">
      <div className="absolute right-[-10rem] top-[-10rem] size-[32rem] rounded-full bg-[#7b1921]/25 blur-[110px]" />
      <div className="site-container grid items-center gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <Reveal><div className="max-w-[390px] mx-auto"><BookMockup /></div></Reveal>
        <Reveal delay={.1}>
          <div className="glass-panel gold-border rounded-[2rem] p-7 md:p-11">
            <span className="eyebrow">Oferta de lançamento</span>
            <h2 className="display-font mt-5 text-balance text-[clamp(2.35rem,5vw,4.8rem)] leading-[.98] text-[#fff8e8]">Fortaleça sua fé antes que a pressão chegue</h2>
            <div className="mt-8 flex items-end gap-4">
              <span className="pb-2 text-lg text-[#8f867d] line-through">{siteConfig.oldPrice}</span>
              <strong className="display-font text-5xl text-[#31d17c] md:text-6xl">{siteConfig.price}</strong>
            </div>
            <p className="mt-2 text-sm text-[#a99f94]">Pagamento único. Produto digital.</p>
            <ul className="mt-7 grid gap-3">
              {features.map((feature) => <li key={feature} className="flex items-start gap-3 text-[#d3c9be]"><Check className="mt-0.5 shrink-0 text-[#31d17c]" size={19} /> {feature}</li>)}
            </ul>
            <a href={siteConfig.checkoutUrl} target="_blank" rel="noreferrer" className="primary-button shimmer mt-8 w-full !min-h-16 !text-base">
              Quero meu e-book agora <ArrowRight size={20} />
            </a>
            <div className="mt-5 grid gap-3 text-xs text-[#9f958b] sm:grid-cols-3">
              <span className="flex items-center gap-2"><LockKeyhole size={16} className="text-[#f3c969]" /> Ambiente seguro</span>
              <span className="flex items-center gap-2"><CreditCard size={16} className="text-[#f3c969]" /> Checkout Kiwify</span>
              <span className="flex items-center gap-2"><FileDown size={16} className="text-[#f3c969]" /> Acesso digital</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
