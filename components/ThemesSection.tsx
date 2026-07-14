import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const themes = [
  'Vivendo em Sodoma sem pertencer a ela',
  'Quando o pecado deixa de causar vergonha',
  'O perigo de olhar para trás',
  'Protegendo o altar da família',
  'Santidade em tempos de pressão',
  'Quando a verdade incomoda',
  'Escolhas que moldam gerações',
  'Discernimento sem isolamento',
  'Intercessão por uma geração',
  'Juízo, graça e arrependimento',
  'Permanecendo fiel até o fim',
  'Cristo, o refúgio do povo de Deus',
];

export function ThemesSection() {
  return (
    <section id="temas" className="section-pad relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7b1921]/10 blur-[120px]" />
      <div className="site-container relative">
        <Reveal><SectionHeading eyebrow="12 estudos" title="Temas que conectam a narrativa bíblica aos dilemas atuais" description="Os títulos abaixo apresentam os eixos centrais do material. Ajuste-os no código caso o sumário final do seu PDF use nomes diferentes." /></Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {themes.map((theme, i) => (
            <Reveal key={theme} delay={(i % 6) * .04}>
              <div className="group flex h-full gap-4 rounded-2xl border border-white/8 bg-black/20 p-5 transition hover:border-[#f3c969]/30 hover:bg-[#f3c969]/[.035]">
                <span className="display-font grid size-10 shrink-0 place-items-center rounded-xl border border-[#f3c969]/28 text-[#f3c969]">{String(i + 1).padStart(2, '0')}</span>
                <p className="font-bold leading-6 text-[#ddd3c8]">{theme}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
