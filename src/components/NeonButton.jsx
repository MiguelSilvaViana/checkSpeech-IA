import React from 'react';
import Link from 'next/link';

const NeonButton = ({ text, href }) => {
  return (
    <div>
      <div className='relative z-[9999] neon rounded border-none text-white'>
        <Link
          href={`${href}`}
          // target='_blank'
          className='relative text-xs'
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {text}
        </Link>
      </div>
    </div>
  );
};

export default NeonButton;
