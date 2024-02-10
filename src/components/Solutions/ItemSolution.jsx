import React from 'react';

const ItemSolution = ({ description, title, customClass }) => {
  return (
    <div
      className={`drop-shadow-lg ${customClass} p-4 rounded-xl border-4 border-white  max-w-lg text-white`}
    >
      <h3 className='mb-2 font-black uppercase'>{title}</h3>
      <p className='text-sm'>{description}</p>
    </div>
  );
};

export default ItemSolution;
