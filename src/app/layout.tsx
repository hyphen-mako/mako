import type { Metadata } from 'next';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import './globals.css';

const inlineCss = [
  readFileSync(join(process.cwd(), 'public/pretendard-subset.css'), 'utf8'),
  readFileSync(join(process.cwd(), 'public/assets/reference.css'), 'utf8'),
].join('\n');
const verification: Metadata['verification'] = {
  other: {'naver-site-verification': '3d2740c852943618ecb75ae6ed595c85530bf150'},
};
if (process.env.GOOGLE_SITE_VERIFICATION) verification.google = process.env.GOOGLE_SITE_VERIFICATION;

export const viewport = {themeColor:'#0F7DFF'};

export const metadata: Metadata={
  metadataBase: new URL('https://mako-landing.hyphen.it.com'),
  verification,
  title:{
    default:'MAKO - 브랜드를 아는 AI 마케팅 스튜디오 | 카드뉴스 무한 생성 이벤트',
    template:'%s | MAKO',
  },
  description:'브랜드를 이해하는 AI 마케팅 스튜디오 MAKO. 카드뉴스와 영상 콘텐츠를 브랜드 톤에 맞춰 AI가 자동 제작합니다. 오픈 이벤트 기간 웨이트리스트 등록 시 카드뉴스 무한 생성.',
  keywords:['MAKO','마코','AI 마케팅','AI 마케팅 스튜디오','카드뉴스','카드뉴스 만들기','AI 카드뉴스','카드뉴스 자동 생성','마케팅 자동화','숏폼 영상 제작','AI 콘텐츠 제작','인스타그램 카드뉴스','브랜드 마케팅','마케팅 AI','웨이트리스트'],
  authors:[{name:'MAKO'}],
  creator:'MAKO',
  publisher:'MAKO',
  category:'technology',
  alternates:{canonical:'/',languages:{'ko-KR':'/','x-default':'/'}},
  other:{'geo.region':'KR','geo.placename':'Seoul','content-language':'ko'},
  robots:{
    index:true,
    follow:true,
    googleBot:{index:true,follow:true,'max-image-preview':'large','max-snippet':-1,'max-video-preview':-1},
  },
  openGraph:{
    title:'MAKO - 브랜드를 아는 AI 마케팅 스튜디오 | 카드뉴스 무한 생성 이벤트',
    description:'브랜드 톤에 맞는 카드뉴스와 영상을 AI가 만듭니다. 웨이트리스트 등록 시 오픈 이벤트 기간 카드뉴스 무한 생성.',
    url:'https://mako-landing.hyphen.it.com',
    siteName:'MAKO',
    images:[{url:'/mako/card-news-showcase.jpg',width:1200,height:675,alt:'MAKO AI 마케팅 스튜디오 - 카드뉴스 제작 예시'}],
    locale:'ko_KR',
    type:'website',
  },
  twitter:{
    card:'summary_large_image',
    title:'MAKO - 브랜드를 아는 AI 마케팅 스튜디오',
    description:'오픈 이벤트 기간 웨이트리스트 등록 시 카드뉴스 무한 생성. 브랜드 톤에 맞는 카드뉴스·영상을 AI가 만듭니다.',
    images:['/mako/card-news-showcase.jpg'],
  },
  manifest:'/manifest.webmanifest',
  icons:{icon:'/mako/mako-icon-32.png',apple:'/mako/mako-icon-180.png'},
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ko" className="light"><head><link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous"/><link rel="preload" href="/mako/mako-mascot.webp" as="image" fetchPriority="high"/><style dangerouslySetInnerHTML={{__html:inlineCss}}/></head><body>{children}</body></html>}
