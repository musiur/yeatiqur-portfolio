import * as Button from '@/components/ui/button';
import { RiCalendar2Fill } from '@remixicon/react';

const BookingSection = () => {
  return (
    <div className='container mx-auto mt-20'>
      <h2 className='text-center'>
        Let&apos;s Meet and Make Your Business Thrive!
      </h2>
      <p className='text-center'>
        This is a no-commitment, free strategy session where we&apos;ll discuss
        your business goals and challenges. Limited slots available—book now to
        secure your spot!
      </p>
      <Button.Root asChild>
        <a href='https://thesociomatic.com/#calendly' target='_blank'>
          <Button.Icon as={RiCalendar2Fill} />
          Book Your Free Strategy Session Now!
        </a>
      </Button.Root>
    </div>
  );
};

export default BookingSection;
