import { BookMarked, Church, Home, UserRoundCheck } from 'lucide-react';

const items = [
  { icon: UserRoundCheck, label: 'Leitura pessoal' },
  { icon: Home, label: 'Culto familiar' },
  { icon: Church, label: 'EBD e pequenos grupos' },
  { icon: BookMarked, label: 'Aplicação prática' },
];

export function TrustStrip() {
  return (
    <section className="border-y border-white/8 bg-white/[.025]">
      <div className="site-container grid divide-y divide-white/8 md:grid-cols-4 md:divide-x md:divide-y-0">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center justify-center gap-3 px-5 py-5 text-sm font-bold text-[#d2c8bd]">
            <Icon size={19} className="text-[#f3c969]" /> {label}
          </div>
        ))}
      </div>
    </section>
  );
}
