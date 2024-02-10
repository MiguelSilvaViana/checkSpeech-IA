import Image from 'next/image';

const CarouselPartners = () => {
  const images = [
    {
      img: '/partners/denmark.svg',
      imgWhite: '/partners/denmarkW.svg',
      alt: 'Denmark',
    },
    {
      img: '/partners/phoenix.svg',
      imgWhite: '/partners/phoenixW.svg',
      alt: 'phoenix',
    },
    {
      img: '/partners/Malta.svg',
      imgWhite: '/partners/MaltaW.svg',
      alt: 'Malta',
    },
    {
      img: '/partners/Tokyo.svg',
      imgWhite: '/partners/TokyoW.svg',
      alt: 'Tokyo',
    },
    {
      img: '/partners/umbrella.svg',
      imgWhite: '/partners/umbrellaW.svg',
      alt: 'umbrella',
    },
    {
      img: '/partners/Vancouver.svg',
      imgWhite: '/partners/VancouverW.svg',
      alt: 'Vancouver',
    },
    {
      img: '/partners/waveless.svg',
      imgWhite: '/partners/wavelessW.svg',
      alt: 'waveless',
    },
  ];

  return (
    <div className='w-full  flex-col flex justify-center items-center  shadow-inner  py-16 h-[300px] sm:h-[380px] xl:h-[450px] bg-gray-100 border-y-[#ddd] shadow-black'>
      <div>
        <h2 className='mb-10 text-5xl font-bold tracking-wide text-black sm:text-6xl'>
          CLIENTES
        </h2>
      </div>
      <div className='m-0 marquee'>
        <div className='marquee--inner'>
          <div className='flex gap-20'>
            {images.map((item, index) => {
              return (
                <div key={index}>
                  <Image
                    src={item.img}
                    width={200}
                    height={200}
                    className='img w-[200px] h-[200px] max-w-[200px] max-h-[200px] object-contain'
                    alt={item.alt}
                  />
                </div>
              );
            })}
          </div>
          <div className='flex gap-20'>
            {images.map((item, index) => {
              return (
                <div key={index}>
                  <Image
                    src={item.img}
                    width={200}
                    height={200}
                    className='img w-[200px] h-[200px] max-w-[200px] max-h-[200px] object-contain'
                    alt={item.alt}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselPartners;
