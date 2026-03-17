import CtaSection from "@/components/homepage/cta-section";
import FaqSection from "@/components/homepage/faq-section";
import FeatureSection from "@/components/homepage/feature-section";
import HeroSection from "@/components/homepage/hero-section";

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
