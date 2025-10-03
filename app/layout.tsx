import './globals.scss';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';


export const metadata: Metadata = {
  title: 'TestWork96',
  description: 'Тестовое задание',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
