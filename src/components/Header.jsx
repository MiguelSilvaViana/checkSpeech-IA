'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Nav } from './Nav';

import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [active, setActive] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const pathName = usePathname();
  const navData = [
    {
      name: 'Soluções',
      path: '#solutions',
      sectionId: 'solutions',
    },
    {
      name: 'Clientes',
      path: '#clients',
      sectionId: 'clients',
    },
    {
      name: 'Preços',
      path: '#prices',
      sectionId: 'prices',
    },
    {
      name: 'Contato',
      path: '#contact',
      sectionId: 'contact',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleSectionChange = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 300;
        const sectionBottom = sectionTop + section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleSectionChange);

    return () => {
      window.removeEventListener('scroll', handleSectionChange);
    };
  }, []);

  return (
    <header
      className={`fixed z-50 w-full transition-all px-4 text-white  ${
        active ? 'bg-black/90' : 'bg-transparent'
      }`}
    >
      <div className='container px-4 py-3 mx-auto'>
        <div className='flex items-center justify-between w-full h-full'>
          <Link
            href={'/'}
            className='hidden xl:flex'
          >
            <Image
              width={250}
              height={250}
              priority
              src='/logo0.png'
              alt='logo'
              quality={100}
              className=''
            />
          </Link>

          <Link
            href={'/'}
            className='flex xl:hidden'
          >
            <Image
              width={180}
              height={150}
              priority
              src='/logo0.png'
              alt='logo'
              quality={100}
              className=''
            />
          </Link>
          <Nav />
          <nav className='items-center hidden h-full gap-x-6 xl:flex'>
            {navData.map((item, index) => (
              <Link
                className='link'
                href={item.path}
                key={index}
              >
                {active && activeSection === `${item.sectionId}` && (
                  <motion.span
                    layoutId='box'
                    className='absolute inset-0 bg-pink-700 rounded-lg -z-10'
                    transition={{
                      type: 'spring',
                      bounce: 0.2,
                      duration: 0.6,
                    }}
                  />
                )}
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
