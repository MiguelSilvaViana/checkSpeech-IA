import Image from "next/image";
import Prices from '@/components/Prices';
import Clients from '@/components/Clients';
import Contact from '@/components/Contact';
import Solutions from '@/components/Solutions';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className='h-full min-h-screen bg-black scroll-smooth'>
      <Hero />

      <Solutions />

      <Clients />

      <Prices />

      <Contact />
    </main >
  );
}
