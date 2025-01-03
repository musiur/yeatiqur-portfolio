import * as Button from '@/components/ui/button';
import { RiCalendar2Fill } from '@remixicon/react';

export default function HomeHeroSection() {
  return (
    <div className='container mx-auto flex-1 px-5'>
      <div className='mt-48 flex flex-col items-center space-y-4'>
        <h1 className='max-w-3xl text-balance text-center text-title-h3 text-text-strong-950'>
          Transform Your Business with{' '}
          <span className='text-blue-600 dark:text-blue-400'>
            Proven Success
          </span>{' '}
          Strategies in Dubai!
        </h1>
        <p className='text-center'>
          Meet Yeatiq, a trusted expert with 700+ successful projects and 500+
          glowing reviews, ready to help your business grow.
        </p>
        <div className='flex gap-4 pt-12'>
          <Button.Root asChild>
            <a href='https://thesociomatic.com/#calendly' target='_blank'>
              <Button.Icon as={RiCalendar2Fill} />
              Book Your Free Strategy Session Now!
            </a>
          </Button.Root>
        </div>
      </div>
    </div>
  );
}
