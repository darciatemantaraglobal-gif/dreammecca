import React from 'react';

interface SectionDividerProps {
  overlayColor: string; // format: '41,41,81' (rgb tanpa rgba wrapper)
  clipId: string; // WAJIB unik per pemanggilan, misal 'clip-1', 'clip-2', dst
}

export default function SectionDivider({ overlayColor, clipId }: SectionDividerProps) {
  return (
    <div className="w-full h-[44px] md:h-[64px]" style={{ marginTop: '-1px', marginBottom: '-1px', overflow: 'hidden' }}>
      <svg viewBox="0 0 1440 80" width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id={clipId}>
            <path d="M0,0 C400,80 1040,80 1440,0 L1440,80 L0,80 Z" />
          </clipPath>
        </defs>
        <g clipPath={`url(#${clipId})`}>
          <image
            href="/images/patterns/geometric-navy.jpg"
            x="0"
            y="0"
            width="1440"
            height="955"
            preserveAspectRatio="xMidYMin slice"
          />
          <rect width="1440" height="80" fill={`rgba(${overlayColor},0.6)`} />
        </g>
      </svg>
    </div>
  );
}
