import SocialIcons from '@/components/SocialIcons';
import { memo } from 'react';

function Footer(): React.ReactElement {
  const year: number = new Date().getFullYear();

  return (
    <div className='flex flex-col items-center py-2 mt-2 font-light dark:text-white lg:py-3'>
      <SocialIcons />
      <span className='mt-2 text-xs font-light lg:mt-2'>
        &copy; {year} Tolegen Timur
      </span>
    </div>
  );
}

export default memo(Footer);
