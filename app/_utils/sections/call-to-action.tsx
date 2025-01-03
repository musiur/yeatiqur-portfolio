import * as Button from '@/components/ui/button';
import { RiCalendar2Fill } from '@remixicon/react';

const CallToActionSection = () => {
  return (
    <div className='container mx-auto mt-20'>
      <h2 className='text-center'>Your Success Starts Here!</h2>
      <p className='text-center'>
        Don&apos;t miss this chance to meet in person and create a winning
        strategy.
      </p>
      <Button.Root asChild>
        <a href='https://thesociomatic.com/#calendly' target='_blank'>
          <Button.Icon as={RiCalendar2Fill} />
          Book Your Free Meeting Today!
        </a>
      </Button.Root>
    </div>
  );
};

export default CallToActionSection;
