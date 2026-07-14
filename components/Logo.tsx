import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 no-underline" aria-label="Página inicial">
      <span className="grid size-10 place-items-center rounded-xl border border-[#f3c969]/35 bg-[#4a1014]/50 text-xl shadow-lg">✦</span>
      <span className="leading-tight">
        <strong className="display-font block text-[1.05rem] text-[#ffe6a6]">Fala Pastor Renê</strong>
        <span className="block text-[.64rem] font-bold uppercase tracking-[.2em] text-[#9d9388]">Fé para a vida real</span>
      </span>
    </Link>
  );
}
