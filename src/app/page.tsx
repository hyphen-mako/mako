import HomeExperience from '@/components/HomeExperience';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import PerformanceProbe from '@/components/PerformanceProbe';
import GlobalMascotEffects from '@/components/GlobalMascotEffects';
import MotionProvider from '@/components/MotionProvider';
import WaitlistSection from '@/components/WaitlistSection';
import FaqSection from '@/components/FaqSection';
import InstagramFeed from '@/components/InstagramFeed';

export default function Page() {
  return <MotionProvider>
    <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#0F7DFF] focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold">본문 바로가기</a>
    <SiteHeader />
    <main id="main-content" className="w-full"><HomeExperience /></main>
    <WaitlistSection />
    <FaqSection />
    <InstagramFeed />
    <SiteFooter />
    <GlobalMascotEffects />
    <PerformanceProbe />
  </MotionProvider>;
}
