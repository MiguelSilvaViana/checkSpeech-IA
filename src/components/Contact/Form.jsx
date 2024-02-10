'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

/* animated */
import { motion } from 'framer-motion';

const Form = () => {
  const [phone, setPhone] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isChecked) {
      console.log('Formulário enviado!');
    } else {
      console.log('Por favor, marque o checkbox antes de enviar o formulário.');
    }

    e.target.reset();
  };

  return (
    <>
      <motion.form
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        onSubmit={handleSubmit}
        className='w-full h-full xl:max-w-xl'
      >
        <div className='flex flex-col w-full p-6 rounded-lg bg-rose-900 '>
          <Inputs
            type={'text'}
            name={'Seu Nome'}
            label={'Seu Nome'}
          />

          <Inputs
            type={'email'}
            name={'Seu Email'}
            label={'Seu Email'}
          />

          <PhoneInput
            defaultCountry='br'
            value={phone}
            onChange={(phone) => setPhone(phone)}
            className='mb-10 input z-1'
            required={true}
          />

          <div className='relative z-0 w-full mb-4'>
            <textarea
              rows='4'
              className='text-area peer'
              id='message'
              name='message'
              required
            />
            <label
              htmlFor='message'
              className='left-2 peer-focus:font-medium absolute text-base text-white  duration-300 transform -translate-y-2 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-9'
            >
              Message
            </label>
          </div>
          <div className='relative z-0 w-full mb-4'>
            <input
              type='checkbox'
              id='link-checkbox'
              required
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <label
              htmlFor='link-checkbox'
              className='text-sm text-white ms-2'
            >
              Eu concordo com a{' '}
              <Link
                href='#'
                className='text-gray-400 transition-all hover:underline'
              >
                Política de Privacidade.
              </Link>
            </label>
          </div>

          <div className='flex items-center justify-center w-full'>
            <button
              className={`px-6 py-3 text-white transition-all rounded-lg bg-black/30 hover:scale-110 ${
                !isChecked ? 'cursor-not-allowed' : ''
              }`}
            >
              Enviar
            </button>
          </div>
        </div>
      </motion.form>
    </>
  );
};

const Inputs = ({ label, type, name }) => {
  return (
    <div className='relative z-0 w-full mb-10 group'>
      <input
        type={type}
        name={name}
        id={label}
        className='peer input'
        placeholder=' '
        required
      />
      <label
        htmlFor={label}
        className='label'
      >
        {label}
      </label>
    </div>
  );
};

export default Form;
