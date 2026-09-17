import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.css';
const pretendard=localFont({src:'../../public/fonts/PretendardVariable.woff2',variable:'--font-pretendard-local',weight:'100 900',display:'swap'});
export const metadata: Metadata={
  metadataBase: new URL('https://mako-landing.hyphen.it.com'),
  title:'MAKO - 오픈 이벤트로 카드뉴스 무한 생성',
  description:'브랜드를 이해하는 AI 마케팅 스튜디오 MAKO에서 오픈 이벤트 기간 동안 카드뉴스를 제한 없이 만들어보세요.',
  openGraph:{
    title:'MAKO - 오픈 이벤트로 카드뉴스 무한 생성',
    description:'MAKO 오픈 이벤트 기간 동안 브랜드다운 카드뉴스를 제한 없이 만들어보세요.',
    url:'https://mako-landing.hyphen.it.com',
    siteName:'MAKO',
    images:[{url:'/mako/card-news-showcase.png',width:1672,height:941,alt:'MAKO AI Marketing Studio'}],
    locale:'ko_KR',
    type:'website',
  },
  twitter:{
    card:'summary_large_image',
    title:'MAKO - 오픈 이벤트로 카드뉴스 무한 생성',
    description:'MAKO 오픈 이벤트 기간 동안 브랜드다운 카드뉴스를 제한 없이 만들어보세요.',
    images:['/mako/card-news-showcase.png'],
  },
  manifest:'/manifest.webmanifest',
  icons:{icon:'/mako/mako-mascot.png',apple:'/mako/mako-mascot.png'},
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ko" className={`light ${pretendard.variable}`}><head><link rel="stylesheet" href="/assets/reference.css"/></head><body>{children}</body></html>}
