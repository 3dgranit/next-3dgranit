import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import Head from "next/head";
const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Мемориальное 3D-моделирование',
  description: '7 лет я занимаюсь 3D-моделингом, из которых 5 лет моделю памятники. За это время я создал 3 уникальных каталога с более, чем 1000 моделей памятников, цоколей, оград, комплексов, столиков и лавочек каждый.\n' +
      '\n' +
      'Десятки изготовителей памятников регулярно заказывают у меня индивидуальные эскизы комплексов.',
  icons: {
    icon: '/favicon.png',
  },

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <Head>
      <link rel="icon" href="/src/app/favicon.png" />
      <link rel="icon" sizes="any" href="/src/app/favicon.png" />
      <meta property="og:image" content="/image-site.png" />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>

    <Script src="https://www.googletagmanager.com/gtag/js?id=G-6Z8CLSWDG6" />
    <Script id="google-analytics">
      {` 
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-6Z8CLSWDG6');
        `}
    </Script>

    <Script
        dangerouslySetInnerHTML={{
          __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      
                ym(82394959, "init", {
                      clickmap:true,
                     trackLinks:true,
                     accurateTrackBounce:true,
                     webvisor:true
                });
              `,
        }}
    />


      <body className={inter.className}>{children}</body>
    </html>
  )
}
