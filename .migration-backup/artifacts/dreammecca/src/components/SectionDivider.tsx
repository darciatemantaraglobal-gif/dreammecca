import React from 'react';

interface SectionDividerProps {
  overlayColor: string;
}

export default function SectionDivider({ overlayColor }: SectionDividerProps) {
  return (
    <div
      className="w-full h-[44px] md:h-[64px]"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(${overlayColor},0.55), rgba(${overlayColor},0.65)), url("/images/patterns/geometric-navy.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        WebkitMaskImage: 'url("/images/patterns/curve-mask.svg")',
        maskImage: 'url("/images/patterns/curve-mask.svg")',
        WebkitMaskSize: '100% 100%',
        maskSize: '100% 100%',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
      }}
    />
  );
}
