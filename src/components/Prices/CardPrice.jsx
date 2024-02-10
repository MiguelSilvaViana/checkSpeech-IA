'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const buttonsType = [
  {
    id: 'monthly',
    title: 'Mensal',
  },
  {
    id: 'yearly',
    title: 'Anual',
  },
];

const pricesData = [
  {
    title: 'Beginner',
    monthlyPrice: 'R$29',
    yearlyPrice: 'R$328',
    functions: [
      'Transcrição de Áudio Assíncrono - 120 minutos (R$0,20 / minuto excedente)',
      'Transcrição de Áudio em tempo real - 90 minutos (R$0,40 / minuto excedente)',
      'Identificação de Idiomas em áudios - 200 minutos (R$0,05 / minuto excedente)',
      'Análise de sentimento a partir do áudio (áudio pré-gravado) - 120 minutos (R$0,40 / minuto excedente)',
    ],
  },
  {
    title: 'Business',
    monthlyPrice: 'R$44',
    yearlyPrice: 'R$499',
    functions: [
      'Transcrição de Áudio Assíncrono - 200 minutos (R$0,15 / minuto excedente)',
      'Transcrição de Áudio em tempo real - 120 minutos (R$0,40 / minuto excedente)',
      'Identificação de Idiomas em áudios - 500 minutos (R$0,03 / minuto excedente)',
      'Análise de sentimento a partir do áudio (áudio pré-gravado) - 200 minutos (R$0,35 / minuto excedente)',
    ],
  },
  {
    title: 'Enterprise',
    monthlyPrice: 'A combinar',
    yearlyPrice: 'A combinar',
    functions: [
      'Transcrição de Áudio Assíncrono  +200 minutos A combinar',
      'Transcrição de Áudio em tempo real  +120 minutos A combinar',
      'Identificação de Idiomas em áudios +500 minutos A combinar',
      'Análise de sentimento a partir do áudio (áudio pré-gravado) - 200 minutos A combinar',
    ],
  },
];

const CardPrice = ({ title, monthlyPrice, yearlyPrice, functions }) => {
  const [planType, setPlanType] = useState('monthly');

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className='flex flex-col items-center justify-center w-full h-full gap-y-10'
      >
        <div className='flex items-center justify-center w-full gap-x-10'>
          {buttonsType.map((button) => (
            <button
              key={button.id}
              onClick={() => setPlanType(button.id)}
              className={`${
                planType === button.id ? '' : 'hover:scale-110'
              } relative rounded-lg px-6 py-3 text-3xl font-medium text-white z-10 transition focus-visible:outline-2`}
              style={{
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              {planType === button.id && (
                <motion.span
                  layoutId='bubble'
                  className='absolute inset-0 rounded-lg bg-rose-700 -z-10'
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              {button.title}
            </button>
          ))}
        </div>

        <div className='flex gap-x-10'>
          {pricesData.map((item, index) => (
            <Card
              {...item}
              key={index}
              planType={planType}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
};

const Card = ({ title, planType, monthlyPrice, yearlyPrice, functions }) => {
  return (
    <div className='flex flex-col flex-wrap max-w-sm px-8 py-10 overflow-hidden bg-white rounded-lg shadow-xl gap-y-4 shadow-black/90'>
      <p className='text-6xl font-bold'>{title}</p>

      {title === 'Enterprise' ? (
        <div>
          <p className='text-4xl font-bold'>
            {yearlyPrice} <span className='text-xl font-normal'></span>
          </p>
        </div>
      ) : (
        <AnimatePresence>
          <div className='relative min-h-[50px]'>
            <motion.div
              key={planType}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className='absolute'
            >
              {planType === 'monthly' ? (
                <p className='text-4xl font-bold'>
                  {monthlyPrice}
                  {''}
                  <span className='text-xl font-normal'>/Mês</span>
                </p>
              ) : (
                <p className='text-4xl font-bold'>
                  {yearlyPrice}
                  {''}
                  <span className='text-xl font-normal'>/Anual</span>
                </p>
              )}
            </motion.div>
          </div>
        </AnimatePresence>
      )}

      <div>
        <ul className='flex flex-col items-center gap-y-3'>
          {functions.map((functionItem, index) => (
            <li
              className='list-disc'
              key={index}
            >
              {functionItem}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default CardPrice;
