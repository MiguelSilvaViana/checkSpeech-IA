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
      <div className='container h-full px-6 mx-auto py-28 sm:px-0'>
        <div className='flex flex-col items-center justify-center w-full h-full px-6 sm:px-0 gap-y-16'>
          <div>
            <motion.h2
              initial={{ opactity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, delay: 0.4 }}
              viewport={{ once: true }}
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
