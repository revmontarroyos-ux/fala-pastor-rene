import { BookHeart, Church, House, UsersRound } from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const audience = [
  { icon: BookHeart, title: 'Leitura pessoal', text: 'Para quem deseja examinar o próprio coração e fortalecer hábitos espirituais.' },
  { icon: House, title: 'Culto familiar', text: 'Para pais, mães e responsáveis que querem conduzir conversas bíblicas em casa.' },
  { icon: Church, title: 'EBD e liderança', text: 'Para professores e líderes que procuram uma sequência organizada de encontros.' },
  { icon: UsersRound, title: 'Pequenos grupos', text: 'Para grupos que desejam conversar sobre fé, cultura, família e santidade.' },
];

export function AudienceSection() {
  return (
    <section className="section-pad border-y border-white/8 bg-[#0d0908]">
      <div className="site-container grid items-start gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <Reveal><SectionHeading align="left" eyebrow="Para quem é" title="Um material para aprender sozinho e crescer em comunidade" description="A estrutura permite adaptar a leitura ao seu ritmo, à sua casa e ao contexto da igreja local." /></Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {audience.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * .06}>
              <div className="h-full rounded-2xl border border-white/8 bg-white/[.03] p-6">
                <Icon size={25} className="text-[#f3c969]" />
                <h3 className="display-font mt-4 text-xl text-[#fff1bd]">{title}</h3>
                <p className="mt-2 leading-7 text-[#aaa095]">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
