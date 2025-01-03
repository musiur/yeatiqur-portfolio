import { Fragment } from 'react';
import HomeHeroSection from './_utils/sections/hero';
import AboutSection from './_utils/sections/about';
import SuccessStoriesSection from './_utils/sections/success-stories';
import VisualSuccessProofSection from './_utils/sections/visual-success-proof';
import BookingSection from './_utils/sections/booking';
import CallToActionSection from './_utils/sections/call-to-action';
import PainPointsSection from './_utils/sections/painpoint';
import ContactSection from './_utils/sections/contact';
import ReviewsSection from './_utils/sections/review';

const HomePage = () => {
  return (
    <Fragment>
      <HomeHeroSection />
      <AboutSection />
      <SuccessStoriesSection />
      <ReviewsSection />
      <PainPointsSection />
      <CallToActionSection />
      <VisualSuccessProofSection />
      <BookingSection />
      <ContactSection />
    </Fragment>
  );
};

export default HomePage;
