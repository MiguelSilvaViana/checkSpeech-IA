import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

/* components */
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: "CheckSpeech AI",
  description: "CheckSpeech AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
