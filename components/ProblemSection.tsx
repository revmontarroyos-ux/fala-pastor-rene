import { AlertTriangle, Compass, Flame, Users } from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const pains = [
  { icon: AlertTriangle, title: 'A verdade foi relativizada', text: 'Aquilo que antes causava temor hoje é tratado como algo comum, inevitável ou até admirável.' },
  { icon: Users, title: 'A família está sob pressão', text: 'Pais e responsáveis enfrentam mensagens conflitantes, telas, influências e valores que disputam o coração dos filhos.' },
  { icon: Flame, title: 'A fé pode esfriar', text: 'A repetição do pecado ao redor pode anestesiar a consciência e tornar a vida devocional superficial.' },
  { icon: Compass, title: 'Falta direção prática', text: 'Não basta condenar a cultura. É preciso saber como viver com sabedoria, coragem, amor e fidelidade.' },
];

export function ProblemSection() {
  return (
    <section id="conteudo" className="section-pad relative">
      <div className="site-container">
        <Reveal><SectionHeading eyebrow="O desafio" title="Viver no mundo sem deixar que o mundo viva dentro de nós" description="Este material parte de uma pergunta urgente: como manter uma espiritualidade sólida quando o ambiente ao redor normaliza aquilo que a Palavra de Deus chama de pecado?" /></Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {pains.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * .06}>
              <article className="glass-panel h-full rounded-2xl p-6 md:p-8">
                <div className="grid size-12 place-items-center rounded-xl bg-[#f3c969]/10 text-[#f3c969]"><Icon size={24} /></div>
                <h3 className="display-font mt-5 text-2xl text-[#fff1bd]">{title}</h3>
                <p className="mt-3 leading-7 text-[#b8aea3]">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
