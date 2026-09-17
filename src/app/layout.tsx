import type { Metadata } from 'next';

import './globals.css';
export const metadata: Metadata={
  metadataBase: new URL('https://mako-landing.hyphen.it.com'),
  title:'MAKO - 오픈 이벤트로 카드뉴스 무한 생성',
  description:'브랜드를 이해하는 AI 마케팅 스튜디오 MAKO에서 오픈 이벤트 기간 동안 카드뉴스를 제한 없이 만들어보세요.',
  openGraph:{
    title:'MAKO - 오픈 이벤트로 카드뉴스 무한 생성',
    description:'MAKO 오픈 이벤트 기간 동안 브랜드다운 카드뉴스를 제한 없이 만들어보세요.',
    url:'https://mako-landing.hyphen.it.com',
    siteName:'MAKO',
    images:[{url:'/mako/card-news-showcase.jpg',width:1200,height:675,alt:'MAKO AI Marketing Studio'}],
    locale:'ko_KR',
    type:'website',
  },
  twitter:{
    card:'summary_large_image',
    title:'MAKO - 오픈 이벤트로 카드뉴스 무한 생성',
    description:'MAKO 오픈 이벤트 기간 동안 브랜드다운 카드뉴스를 제한 없이 만들어보세요.',
    images:['/mako/card-news-showcase.jpg'],
  },
  manifest:'/manifest.webmanifest',
  icons:{icon:'/mako/mako-icon-32.png',apple:'/mako/mako-icon-180.png'},
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ko" className="light"><head><link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous"/><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.css"/><link rel="stylesheet" href="/assets/reference.css"/></head><body>{children}</body></html>}
