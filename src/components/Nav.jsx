'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { menuSlide, slide, scale } from '../../variants';
import { Facebook, Github, Instagram, Twitter, Youtube } from './Icons';

const navData = [
  {
    title: 'Soluções',
    href: '#solutions',
  },
  {
    title: 'Clientes',
    href: '#clients',
  },
  {
    title: 'Preços',
    href: '#prices',
  },
  {
    title: 'Contato',
    href: '#contact',
  },
];

const socialsData = [
  {
    icon: <Facebook className='w-8 h-8 text-xs text-white sm:w-10 sm:h-10' />,
    path: 'https://pt-br.facebook.com/',
  },
  {
    icon: <Instagram className='w-8 h-8 text-xs text-white sm:w-10 sm:h-10' />,
    path: 'https://www.instagram.com/',
  },
  {
    icon: <Twitter className='w-8 h-8 text-xs text-white sm:w-10 sm:h-10' />,
    path: 'https://twitter.com/',
  },
  {
    icon: <Youtube className='w-8 h-8 text-xs text-white sm:w-10 sm:h-10' />,
    path: 'https://www.youtube.com/',
  },
  {
    icon: <Github className='w-8 h-8 text-xs text-white sm:w-10 sm:h-10' />,
    path: 'https://github.com/',
  },
];

const Links = ({ data, isActive, setSelectedIndicator }) => {
  const { title, href, index } = data;
  return (
    <motion.div
      className='curved-link'
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial='initial'
      animate='enter'
      exit='exit'
    >
      <motion.div
        variants={scale}
        animate={isActive ? 'open' : 'closed'}
        className='indicator'
      ></motion.div>

      <Link href={href}>{title}</Link>
    </motion.div>
  );
};

const Curve = () => {
  const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${
    window.innerHeight / 2
  } 100 0`;
  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${
    window.innerHeight / 2
  } 100 0`;

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <svg className='animation-curve'>
      <motion.path
        variants={curve}
        initial='initial'
        animate='enter'
        exit='exit'
      ></motion.path>
    </svg>
  );
};

export const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <>
      <div
        onClick={() => setIsActive(!isActive)}
        className={`toggle ${isActive && 'active'} xl:hidden`}
      >
        <span></span>
      </div>

      <AnimatePresence mode='wait'>
        {isActive && (
          <motion.div
            variants={menuSlide}
            initial='initial'
            animate='enter'
            exit='exit'
            className='curverd-menu'
          >
            <div className='body'>
              <div
                onMouseLeave={() => {
                  setSelectedIndicator(pathname);
                }}
                className={'nav'}
              >
                <div className='header'>
                  <p>Navegação</p>
                </div>

                {navData.map((data, index) => {
                  return (
                    <Links
                      key={index}
                      data={{ ...data, index }}
                      isActive={selectedIndicator == data.href}
                      setSelectedIndicator={setSelectedIndicator}
                    ></Links>
                  );
                })}
              </div>

              <div className='footer'>
                {socialsData.map((item, index) => (
                  <Link
                    className='transition-all hover:scale-110'
                    href={item.path}
                    key={index}
                    target='_blank'
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>
            <Curve />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
