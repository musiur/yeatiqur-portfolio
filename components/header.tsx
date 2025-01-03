import Link from 'next/link';
import dynamic from 'next/dynamic';
import BrandLogo from './brand-logo';

const DynamicThemeSwitch = dynamic(() => import('./theme-switch'), {
  ssr: false,
});

export default function Header() {
  return (
    <div className='border-b border-stroke-soft-200'>
      <header className='mx-auto flex h-14 max-w-5xl items-center justify-between px-5'>
        <Link
          href='/'
          className='flex items-center gap-2 text-label-md text-text-strong-950'
        >
          <BrandLogo className='h-8 w-8' />
          Yeatiqur Rahman
        </Link>

        <DynamicThemeSwitch />
      </header>
    </div>
  );
}
