import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.css';
const pretendard=localFont({src:'../../public/fonts/PretendardVariable.woff2',variable:'--font-pretendard-local',weight:'100 900',display:'swap'});
export const metadata: Metadata={title:'픽케어(PiCKCARE) - 나만의 반려동물 맞춤형 케어 서비스',description:'1분 만에 찾는 나만의 반려동물 맞춤형 정보, 필요한 제품과 서비스까지 픽케어에서 한 번에 찾아보세요',icons:{icon:'/favicon.ico'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ko" className={`light ${pretendard.variable}`}><head><link rel="stylesheet" href="/assets/reference.css"/></head><body>{children}</body></html>}
