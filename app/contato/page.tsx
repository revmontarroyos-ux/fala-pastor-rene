import type { Metadata } from 'next';
import { Mail, MessageCircle } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = { title: 'Contato' };
export default function ContatoPage() { return <><PageHero eyebrow="Contato" title="Fale com o projeto" description="Use os canais abaixo para dúvidas sobre materiais, convites, correções ou parcerias." /><section className="section-pad"><div className="site-container grid gap-5 md:grid-cols-2"><a href={`mailto:${siteConfig.contactEmail}`} className="glass-panel rounded-2xl p-7 no-underline"><Mail className="text-[#f3c969]" /><h2 className="display-font mt-4 text-2xl text-[#fff1bd]">E-mail</h2><p className="mt-2 text-[#aaa095]">{siteConfig.contactEmail}</p></a><a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" className="glass-panel rounded-2xl p-7 no-underline"><MessageCircle className="text-[#f3c969]" /><h2 className="display-font mt-4 text-2xl text-[#fff1bd]">Instagram</h2><p className="mt-2 text-[#aaa095]">Atualize o usuário no arquivo de configuração.</p></a></div></section></>; }
