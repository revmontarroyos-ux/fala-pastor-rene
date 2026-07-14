'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { SectionHeading } from './SectionHeading';

const faqs = [
  { q: 'O e-book é físico ou digital?', a: 'É um produto digital em formato PDF. Você poderá ler no celular, tablet ou computador.' },
  { q: 'Como receberei o material?', a: 'Após a confirmação do pagamento, o acesso é liberado pela plataforma de checkout. Confira também sua caixa de spam e a área de compras da Kiwify.' },
  { q: 'Qual versão bíblica é utilizada?', a: 'O material foi preparado utilizando a Almeida Corrigida Fiel — ACF.' },
  { q: 'Posso usar os estudos na EBD ou em pequenos grupos?', a: 'Sim. O material pode apoiar aulas e encontros. O arquivo, porém, não deve ser redistribuído, publicado ou revendido sem autorização.' },
  { q: 'Preciso ter conhecimento teológico avançado?', a: 'Não. A linguagem foi pensada para ser clara, bíblica e compreensível, mantendo profundidade sem complicação desnecessária.' },
  { q: 'O pagamento é feito neste site?', a: 'Não. Ao clicar no botão de compra, você será direcionado ao checkout seguro da Kiwify.' },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-pad">
      <div className="site-container max-w-4xl">
        <SectionHeading eyebrow="Dúvidas frequentes" title="Antes de concluir sua compra" />
        <div className="mt-10 grid gap-3">
          {faqs.map((item, i) => {
            const active = open === i;
            return (
              <div key={item.q} className="overflow-hidden rounded-2xl border border-white/8 bg-white/[.03]">
                <button className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left font-extrabold text-[#eee5da] md:px-7" onClick={() => setOpen(active ? null : i)} aria-expanded={active}>
                  {item.q}<ChevronDown size={20} className={`shrink-0 text-[#f3c969] transition ${active ? 'rotate-180' : ''}`} />
                </button>
                <div className={`grid transition-all duration-300 ${active ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden"><p className="px-5 pb-6 leading-7 text-[#aaa095] md:px-7">{item.a}</p></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
