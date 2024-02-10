import Image from 'next/image';

const AvatarRobotic = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none'>
      <Image
        src='/testes/me.png'
        width={1024}
        height={1024}
        alt='robotic avatar background'
        priority
        className='w-full h-full opacity-70'
      />
    </div>
  );
};

export default AvatarRobotic;
