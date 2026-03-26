import CtaSection from "@/pages/homepage/cta-section";
import FaqSection from "@/pages/homepage/faq-section";
import FeatureSection from "@/pages/homepage/feature-section";
import HeroSection from "@/pages/homepage/hero-section";

function HomePage() {
	return (
		<>
			<HeroSection></HeroSection>
			<FeatureSection></FeatureSection>
			<FaqSection></FaqSection>
			<CtaSection></CtaSection>
		</>
	);
}

export default HomePage;
