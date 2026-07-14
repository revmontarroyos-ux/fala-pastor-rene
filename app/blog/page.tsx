import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = { title: 'Blog' };
const posts = [
  ['Como manter a fé quando o pecado virou normal?', 'Uma reflexão introdutória sobre discernimento, convicção e graça.'],
  ['O culto familiar precisa ser complicado?', 'Princípios simples para começar com constância e sem perfeccionismo.'],
  ['Verdade e amor são inimigos?', 'Por que a fidelidade bíblica exige convicção e caridade ao mesmo tempo.'],
];
export default function BlogPage() { return <><PageHero eyebrow="Artigos" title="Leituras para pensar, ensinar e praticar" description="Esta área já está preparada para receber artigos. Os cartões abaixo são modelos editoriais e podem ser substituídos por textos completos." /><section className="section-pad"><div className="site-container grid gap-5 md:grid-cols-3">{posts.map(([title, text], i) => <article key={title} className="rounded-2xl border border-white/8 bg-white/[.03] p-6"><span className="text-xs font-black uppercase tracking-[.18em] text-[#f3c969]">Artigo {String(i+1).padStart(2,'0')}</span><h2 className="display-font mt-4 text-2xl text-[#fff1bd]">{title}</h2><p className="mt-3 leading-7 text-[#aaa095]">{text}</p><p className="mt-6 text-sm font-bold text-[#766e66]">Conteúdo em preparação</p></article>)}</div></section></>; }
