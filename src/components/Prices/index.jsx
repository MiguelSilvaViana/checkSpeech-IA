'use client';
import React, { useState } from 'react';
import CardPrice from './CardPrice';

/* animated */
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';
const index = () => {
  return (
    <section
      className='bg-gradient-to-br from-black via-black/80 to-rose-900 section'
      id='prices'
    >
      <div className='container h-full py-20 mx-auto'>
        <div className='flex flex-col items-center justify-center w-full h-full gap-y-16'>
          <div>
            <motion.h2
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              exit='hidden'
              animate='show'
              className='text-6xl font-bold tracking-wide text-white neon-text'
            >
              Preços
            </motion.h2>
          </div>
          <CardPrice />
        </div>
      </div>
    </section>
  );
};

export default index;
