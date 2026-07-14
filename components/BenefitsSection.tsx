import { BookOpen, Blocks, HeartHandshake, Lamp, ShieldCheck, Sparkles } from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const benefits = [
  { icon: BookOpen, title: 'Base bíblica acessível', text: 'Reflexões organizadas com linguagem clara e referências na Almeida Corrigida Fiel.' },
  { icon: Blocks, title: 'Fé com estrutura', text: 'Princípios que ajudam a fortalecer convicções antes que a pressão cultural chegue.' },
  { icon: ShieldCheck, title: 'Proteção da família', text: 'Aplicações para conversas, culto doméstico, educação espiritual e decisões cotidianas.' },
  { icon: Lamp, title: 'Uso versátil', text: 'Material para leitura pessoal, Escola Bíblica Dominical, pequenos grupos e discipulado.' },
  { icon: HeartHandshake, title: 'Verdade com graça', text: 'Fidelidade bíblica sem arrogância, hostilidade ou isolamento das pessoas.' },
  { icon: Sparkles, title: 'Prática, não apenas teoria', text: 'Perguntas, aplicações e um plano de sete dias para transformar leitura em ação.' },
];

export function BenefitsSection() {
  return (
    <section className="section-pad bg-[#100b09]">
      <div className="site-container">
        <Reveal><SectionHeading eyebrow="A proposta" title="Uma espiritualidade firme, lúcida e aplicável" description="O e-book não foi pensado para alimentar medo, mas para formar discernimento, maturidade e perseverança em Cristo." /></Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * .045}>
              <article className="chapter-card h-full rounded-2xl border border-white/8 bg-white/[.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#f3c969]/35">
                <Icon className="relative z-10 text-[#f3c969]" size={27} />
                <h3 className="display-font relative z-10 mt-5 text-xl text-[#fff1bd]">{title}</h3>
                <p className="relative z-10 mt-3 leading-7 text-[#aaa095]">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
