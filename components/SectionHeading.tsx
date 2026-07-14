export function SectionHeading({ eyebrow, title, description, align = 'center' }: { eyebrow: string; title: string; description?: string; align?: 'center' | 'left' }) {
  const center = align === 'center';
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-3xl`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="display-font text-balance mt-5 text-[clamp(2.15rem,5vw,4.25rem)] leading-[1.02] text-[#fff8e8]">{title}</h2>
      {description && <p className="mt-5 text-balance text-base leading-8 text-[#b8aea3] md:text-lg">{description}</p>}
    </div>
  );
}
