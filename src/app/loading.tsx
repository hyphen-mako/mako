import Image from 'next/image';

export default function Loading() {
  return <div className="flex flex-col items-center justify-center gap-10 h-[calc(100dvh-96.5px)] tablet:h-[calc(100dvh-80px)] desktop:h-[calc(100dvh-80px)] w-full pb-20">
    <Image src="/assets/reference/media/loading-crop.91c4276b.gif" alt="loading" width={134} height={79} unoptimized preload />
  </div>;
}
