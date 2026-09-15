import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.css';
const pretendard=localFont({src:'../../public/fonts/PretendardVariable.woff2',variable:'--font-pretendard-local',weight:'100 900',display:'swap'});
export const metadata: Metadata={
  metadataBase: new URL('https://mako.hyphen.it.com'),
  title:'MAKO - 브랜드를 아는 AI 마케팅 스튜디오',
  description:'브랜드와 제품 정보를 바탕으로 카드뉴스와 영상을 만드는 AI 마케팅 스튜디오 MAKO',
  openGraph:{
    title:'MAKO - 브랜드를 아는 AI 마케팅 스튜디오',
    description:'브랜드와 제품 정보를 바탕으로 카드뉴스와 영상을 만드는 AI 마케팅 스튜디오',
    url:'https://mako.hyphen.it.com',
    siteName:'MAKO',
    images:[{url:'/mako/card-news-showcase.png',width:1672,height:941,alt:'MAKO AI Marketing Studio'}],
    locale:'ko_KR',
    type:'website',
  },
  icons:{icon:'/mako/mako-mascot.png',apple:'/mako/mako-mascot.png'},
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ko" className={`light ${pretendard.variable}`}><head><link rel="stylesheet" href="/assets/reference.css"/></head><body>{children}</body></html>}
