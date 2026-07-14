export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <header className="noise relative overflow-hidden border-b border-white/8 bg-[radial-gradient(circle_at_20%_10%,rgba(123,25,33,.38),transparent_36rem)] py-20 md:py-28">
      <div className="site-container"><span className="eyebrow">{eyebrow}</span><h1 className="display-font text-balance mt-6 max-w-5xl text-[clamp(2.8rem,7vw,6rem)] leading-[.94] text-[#fff8e8]">{title}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-[#b8aea3]">{description}</p></div>
    </header>
  );
}
