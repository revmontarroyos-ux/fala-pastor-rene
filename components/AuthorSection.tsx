import Link from 'next/link';
import { Quote } from 'lucide-react';
import { Reveal } from './Reveal';
import { siteConfig } from '@/config/site';

export function AuthorSection() {
  return (
    <section className="section-pad">
      <div className="site-container">
        <Reveal>
          <div className="glass-panel gold-border relative overflow-hidden rounded-[2rem] p-7 md:p-12">
            <div className="absolute -right-12 -top-12 size-56 rounded-full bg-[#f3c969]/8 blur-3xl" />
            <div className="grid items-center gap-9 md:grid-cols-[220px_1fr]">
              <div className="relative mx-auto grid aspect-square w-full max-w-[210px] place-items-center rounded-full border border-[#f3c969]/30 bg-[radial-gradient(circle_at_40%_30%,#7b1921,#160b0a_70%)] text-center shadow-2xl">
                <span className="display-font text-6xl text-[#f3c969]">R</span>
                <span className="absolute bottom-7 text-[.62rem] font-black uppercase tracking-[.22em] text-[#d9cdbf]">Fala Pastor Renê</span>
              </div>
              <div>
                <Quote className="text-[#f3c969]" size={34} />
                <h2 className="display-font mt-4 text-3xl text-[#fff1bd] md:text-5xl">Uma mensagem bíblica para gente real</h2>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-[#c4b9ae]">{siteConfig.author} dedica-se a comunicar verdades bíblicas em linguagem simples, pastoral e aplicável. O projeto Fala Pastor Renê nasce para aproximar a Palavra das dúvidas, pressões e decisões da vida cotidiana.</p>
                <Link href="/sobre" className="secondary-button mt-7">Conheça o projeto</Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
