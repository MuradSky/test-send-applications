import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import '@/styles/global.scss';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Script from 'next/script';

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Junior PayTech Forum 2025",
  description: "Более 6 месяцев участники программы работали над концепциями финансовых сервисов, которые призваны улучшить и упростить жизнь граждан. До финала конференции Junior PayTech Forum дошли сильнейшие ребята из разных городов России. Они презентуют свои проекты широкой аудитории и поборются за участие в суперфинале.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <Script
          src="https://api-maps.yandex.ru/v3/?apikey=bb2c5d5a-8c33-4acf-a86d-9f9d3040ce3a&lang=ru_RU"
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${montserrat.variable}`}>
        <div className="container">
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
