'use client';
import Form from './Form';

/* animated */
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';

const index = () => {
  return (
    <section
      className=' section'
      id='contact'
    >
      <div className='container h-full py-20 mx-auto'>
        <div className='relative flex flex-col items-center justify-center w-full h-full min-h-screen px-6 mx-auto sm:px-10 xl:px-0 gap-y-10'>
          <div>
            <motion.h2
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              exit='hidden'
              animate='show'
              className='text-6xl font-bold tracking-wide text-white neon-text'
            >
              Contato
            </motion.h2>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default index;
