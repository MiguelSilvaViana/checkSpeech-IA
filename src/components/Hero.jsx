'use client';

import React from 'react';
import NeonButton from './NeonButton';
import AvatarRobotic from './AvatarRobotic';

/* animated */
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Hero = () => {
  return (
    <section
      className='hero '
      id='/'
    >
      <div className='container h-full mx-auto py-36'>
        <div className='flex flex-col items-start justify-center h-full '>
          <div className='flex flex-col gap-y-10 xl:pl-10'>
            <motion.h1
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='max-w-[700px] text-4xl text-white'
            >
              CheckSpeech AI: Converta Fala em Texto de Forma Eficiente e
              Precisa
            </motion.h1>

            <motion.p
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='max-w-lg tracking-wide text-justify text-white'
            >
              Transforme falas em textos com facilidade e precisão utilizando a
              poderosa API CheckSpeech AI. Com nossa tecnologia avançada de
              inteligência artificial, você pode extrair informações valiosas a
              partir de áudios, identificar sentimentos e muito mais.
              Experimente agora e descubra como simplificar a conversão de fala
              em texto em qualquer contexto.
            </motion.p>

            <motion.div
              variants={fadeIn('down', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='flex gap-x-10'
            >
              <NeonButton
                text={'Contato'}
                href={'#contact'}
              />
              <NeonButton
                text={'Soluções'}
                href={'#solutions'}
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className='w-[1200px] h-full right-0 bottom-0 absolute'>
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit={'hidden'}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='w-full h-full max-w-[1000px] max-h-[1000px] absolute -bottom-32 xl:-bottom-16  lg:right-[-20%]'
        >
          <AvatarRobotic />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
