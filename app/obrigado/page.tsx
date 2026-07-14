import type { Metadata } from 'next';
import Link from 'next/link';
import { CircleCheckBig } from 'lucide-react';

export const metadata: Metadata = { title: 'Obrigado' };
export default function ObrigadoPage() { return <section className="site-container grid min-h-[72svh] place-items-center py-20 text-center"><div className="max-w-2xl"><CircleCheckBig className="mx-auto text-[#31d17c]" size={64} /><h1 className="display-font mt-6 text-5xl text-[#fff1bd]">Obrigado pela confiança</h1><p className="mt-5 text-lg leading-8 text-[#b8aea3]">Confira o e-mail usado na compra e a sua área de compras na Kiwify. Caso o acesso não apareça, verifique a caixa de spam antes de entrar em contato.</p><Link href="/" className="secondary-button mt-8">Voltar ao início</Link></div></section>; }
