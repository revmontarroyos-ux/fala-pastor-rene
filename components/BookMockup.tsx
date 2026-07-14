export function BookMockup() {
  return (
    <div className="book-float relative mx-auto w-[min(390px,86vw)] py-8" aria-label="Capa ilustrativa do e-book">
      <div className="absolute left-[14%] top-[12%] h-[82%] w-[79%] rotate-[7deg] rounded-r-2xl bg-black/70 blur-2xl" />
      <div className="relative aspect-[3/4.25] overflow-hidden rounded-r-[1.35rem] rounded-l-md border border-[#f3c969]/45 bg-[#180c0b] shadow-[0_34px_80px_rgba(0,0,0,.58)] [transform:perspective(1000px)_rotateY(-10deg)_rotateX(2deg)]">
        <div className="absolute inset-y-0 left-0 w-5 bg-gradient-to-r from-black/70 to-[#5e1219]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(243,201,105,.18),transparent_32%),linear-gradient(160deg,#69151d_0%,#2d0d10_42%,#080706_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[47%] opacity-80">
          <div className="absolute bottom-0 left-[4%] h-[42%] w-[22%] bg-black/75 [clip-path:polygon(35%_0,65%_0,78%_40%,100%_48%,100%_100%,0_100%,0_45%,22%_38%)]" />
          <div className="absolute bottom-0 left-[25%] h-[65%] w-[25%] bg-black/65 [clip-path:polygon(15%_30%,35%_30%,42%_0,58%_0,66%_31%,88%_31%,100%_100%,0_100%)]" />
          <div className="absolute bottom-0 right-[20%] h-[52%] w-[26%] bg-black/70 [clip-path:polygon(0_35%,20%_35%,30%_8%,70%_8%,80%_35%,100%_35%,100%_100%,0_100%)]" />
          <div className="absolute bottom-0 right-0 h-[38%] w-[24%] bg-black/80 [clip-path:polygon(0_35%,24%_35%,38%_0,62%_0,76%_35%,100%_35%,100%_100%,0_100%)]" />
        </div>
        <div className="absolute left-[10%] right-[8%] top-[9%] text-center">
          <p className="text-[.56rem] font-black uppercase tracking-[.35em] text-[#f3c969] sm:text-[.68rem]">12 estudos bíblicos</p>
          <div className="mx-auto my-4 h-px w-16 bg-[#f3c969]/55" />
          <h3 className="display-font text-[clamp(1.7rem,7vw,3.25rem)] leading-[.93] text-[#fff1bd]">Mantendo a Espiritualidade</h3>
          <p className="display-font mt-3 text-[clamp(.95rem,4vw,1.55rem)] italic text-[#f3c969]">em Sodoma e Gomorra</p>
          <p className="mx-auto mt-6 max-w-[17rem] text-[.64rem] font-semibold leading-5 text-[#ddd0c2] sm:text-[.72rem]">Como preservar a fé, a família e a santidade em uma sociedade que normalizou o pecado.</p>
        </div>
        <p className="absolute inset-x-0 bottom-[5%] text-center text-[.62rem] font-black uppercase tracking-[.22em] text-[#ffe6a6]">Renê Montarroios</p>
        <div className="absolute right-0 top-0 h-full w-3 bg-gradient-to-l from-[#f3c969]/25 to-transparent" />
      </div>
      <div className="absolute -bottom-1 left-[8%] h-5 w-[88%] rounded-[50%] bg-black/60 blur-lg" />
    </div>
  );
}
