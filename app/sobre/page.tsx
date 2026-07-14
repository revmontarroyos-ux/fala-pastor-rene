import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = { title: 'Sobre o projeto' };

export default function SobrePage() {
  return <><PageHero eyebrow="Sobre" title="Fé bíblica para os dilemas da vida real" description="O Fala Pastor Renê é um projeto de conteúdo cristão voltado à formação espiritual, à família e à aplicação prática das Escrituras." /><article className="prose-page site-container max-w-4xl section-pad"><h2>Propósito</h2><p>Comunicar verdades bíblicas com clareza, reverência e utilidade. O projeto procura evitar dois extremos: uma mensagem rasa que apenas motiva e uma linguagem tão técnica que afasta quem precisa de direção.</p><h2>Quem escreve</h2><p>{siteConfig.author} atua na educação e desenvolve materiais de estudo, reflexão e discipulado. Nesta página, substitua este texto por uma apresentação biográfica revisada antes da publicação definitiva.</p><h2>Compromissos editoriais</h2><ul><li>Referências bíblicas apresentadas de maneira verificável.</li><li>Linguagem simples, sem banalizar o conteúdo.</li><li>Aplicações responsáveis para família, igreja e vida pessoal.</li><li>Correção de informações quando houver erro identificado.</li></ul></article></>;
}
