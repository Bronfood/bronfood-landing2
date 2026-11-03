import React from 'react';
import Hero from '../../components/Hero/Hero';
import ProcessSection from '../../components/ProcessSection/ProcessSection';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';
import StepsSection from '../../components/StepsSection/StepsSection';
import PricingSection from '../../components/PricingSection/PricingSection';
import ProgramSection from '../../components/ProgramSection/ProgramSection';
import AudienceSection from '../../components/AudienceSection/AudienceSection';
import FaqSection from '../../components/FaqSection/FaqSection';
import FinalCtaSection from '../../components/FinalCtaSection/FinalCtaSection';
import ContactsSection from '../../components/ContactsSection/ContactsSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProcessSection />
      <FeaturesSection />
      <StepsSection />
      <PricingSection />
      <ProgramSection />
      <AudienceSection />
      <FaqSection />
      <FinalCtaSection />
      <ContactsSection />
    </>
  );
}
