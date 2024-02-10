'use client';

import React from 'react';
import ItemSolution from './ItemSolution';

/* animated */
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';

const index = () => {
  const solutionsData = [
    {
      title: 'Transcrição de Áudio Assíncrono (áudio pré-gravado)',
      description:
        'API de transcrição de voz assíncrona para áudio pré-gravado. Temos uma das melhores engines de reconhecimento de fala do mundo! O recurso speech-to-text assíncrono é um parceiro estratégico para o seu negócio. Esteja você extraindo insights de áudio ou transcrevendo conteúdo em escala.',
    },
    {
      title: 'Análise de sentimento a partir do áudio (áudio pré-gravado)',
      description:
        'API de transcrição de voz assíncrona para áudio pré-gravado. Temos uma das melhores engines de reconhecimento de fala do mundo! O recurso speech-to-text assíncrono é um parceiro estratégico para o seu negócio. Esteja você extraindo insights de áudio ou transcrevendo conteúdo em escala.',
    },
    {
      title: 'Transcrição de Áudio em tempo real (streaming)',
      description:
        'O recurso live-speech-to-text de transcrição ao vivo possibilita o uso de legendas em tempo real para o seu negócio. Nossas legendas garantem que as palestras e treinamentos ao vivo sejam acessíveis e possam ser arquivadas para uso futuro.',
    },
  ];

  const solutionHighlighted = [
    {
      title:
        'Identificação de Idiomas em áudiosIdentificação de Idiomas em áudios',
      description:
        'Obtendo fala e insights a nível global. Nossa solução tem suporte a 52 idiomas.',
    },
  ];

  return (
    <section
      id='solutions'
      className='flex flex-col items-center pt-[6rem] pb-12 -mt-1 px-4 min-h-screen text-white'
    >
      <div className='container h-full px-6 mx-auto sm:px-10 xl:px-0'>
        <div className='flex flex-col items-center justify-center w-full '>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            exit='hidden'
            className='mb-6 text-6xl font-bold tracking-wide neon-text'
          >
            Soluções
          </motion.h2>
          <motion.p
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView={'show'}
            exit='hidden'
            className='max-w-3xl text-justify'
          >
            O CheckSpeech AI oferece soluções avançadas de conversão de fala em
            texto e análise de sentimentos. Comercializado como uma API no
            modelo SAAS, foi treinado em mais de 500.000 horas de áudio
            transcritas por uma variedade de falantes. Oferece precisão e
            flexibilidade para empresas e desenvolvedores integrarem análise de
            fala em seus produtos e serviços, proporcionando eficiência e
            precisão nas interações por voz.
          </motion.p>
        </div>
        <div className='flex flex-col items-center pt-[6rem] pb-12 -mt-1 px-4'>
          <div className='flex flex-col items-start justify-center max-w-screen-lg gap-6 mt-10 transition-all duration-300 ease-in-out md:flex-row'>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className='flex flex-col text-black gap-y-6'
            >
              {solutionsData.map((item, index) => {
                return (
                  <ItemSolution
                    key={index}
                    {...item}
                    title={item.title}
                    description={item.description}
                    variant={item.variant}
                  />
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className={`text-white drop-shadow-lg bg-primary rounded-xl  max-w-lg min-h-[10rem] sticky top-20 left-0`}
            >
              <ItemSolution {...solutionHighlighted[0]} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
