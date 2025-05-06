import Hero from '@/components/Hero/Hero';
import FirstQuote from '@/components/Quote/FirstQuote';
import AboutMe from '@/components/about-me/AboutMe';
import SecondQuote from '@/components/Quote/SecondQuote'
import TheEnd from '@/components/TheEnd';
import { Footer } from '@/components/footer';
import LogoCloud from '@/components/LogoCloud/LogoCloud';
// import Newsletter from '@/components/Newsletter/Newsletter';
import { unstable_noStore as noStore } from 'next/cache';
import Projects from '@/components/Projects/Projects';

export const dynamic = 'force-dynamic';
export const revalidate = 3600 * 12; // revalidate every 12 hour

export default function Home() {
  noStore();

  return (
    <main className="bg-transparent">
      <Hero />
      <FirstQuote />
      <AboutMe />
      <LogoCloud/>
      <Projects />
      <SecondQuote />
      <TheEnd />
      <Footer />
    </main>
  );
}
