import { Hero } from '@/components/Hero';
import { TrustStrip } from '@/components/TrustStrip';
import { ProblemSection } from '@/components/ProblemSection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { ThemesSection } from '@/components/ThemesSection';
import { AudienceSection } from '@/components/AudienceSection';
import { AuthorSection } from '@/components/AuthorSection';
import { OfferSection } from '@/components/OfferSection';
import { FaqSection } from '@/components/FaqSection';
import { FinalCta } from '@/components/FinalCta';

export default function HomePage() {
  return <><Hero /><TrustStrip /><ProblemSection /><BenefitsSection /><ThemesSection /><AudienceSection /><AuthorSection /><OfferSection /><FaqSection /><FinalCta /></>;
}
