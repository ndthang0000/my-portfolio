import type { Metadata } from 'next';
import { Preahvihear } from 'next/font/google';
import './globals.css';

const preahvihear = Preahvihear({
  subsets: ['latin'],
  weight: ['400'],
  style: 'normal',
  variable: '--preahvihear-font',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${preahvihear.className} antialiased`}>{children}</body>
    </html>
  );
}
