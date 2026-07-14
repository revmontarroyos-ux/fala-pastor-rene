import type { Metadata } from 'next';
import { ArrowRight, BookOpenCheck, Gift, MailCheck } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = { title: 'Alicerce Inabalável — e-book gratuito' };

export default function AlicercePage() {
  return <><PageHero eyebrow="E-book gratuito" title="Alicerce Inabalável" description="Um material introdutório para fortalecer fundamentos da fé e conhecer o trabalho do projeto Fala Pastor Renê." /><section className="section-pad"><div className="site-container grid items-center gap-10 lg:grid-cols-2"><div className="glass-panel gold-border rounded-[2rem] p-8 md:p-11"><Gift size={34} className="text-[#f3c969]" /><h2 className="display-font mt-5 text-4xl text-[#fff1bd]">Receba gratuitamente</h2><p className="mt-5 leading-8 text-[#b8aea3]">O acesso é feito pelo formulário indicado. Você informa seus dados, recebe as orientações e passa a conhecer os próximos materiais do projeto.</p><a href={siteConfig.freeEbookUrl} target="_blank" rel="noreferrer" className="primary-button mt-7">Quero o e-book gratuito <ArrowRight size={19} /></a></div><div className="grid gap-4"><div className="rounded-2xl border border-white/8 bg-white/[.03] p-6"><BookOpenCheck className="text-[#f3c969]" /><h3 className="mt-4 font-extrabold text-[#eee5da]">Conteúdo completo</h3><p className="mt-2 leading-7 text-[#aaa095]">Material gratuito pensado para gerar valor real, não apenas uma amostra vazia.</p></div><div className="rounded-2xl border border-white/8 bg-white/[.03] p-6"><MailCheck className="text-[#f3c969]" /><h3 className="mt-4 font-extrabold text-[#eee5da]">Cadastro organizado</h3><p className="mt-2 leading-7 text-[#aaa095]">O formulário ajuda a registrar o interesse e entregar o acesso de maneira organizada.</p></div></div></div></section></>;
}
