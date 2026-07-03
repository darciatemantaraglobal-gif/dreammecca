import React from 'react';

export default function SectionDivider({ color }: { color: string }) {
  return (
    <div className="w-full overflow-hidden leading-none relative" style={{ marginBottom: '-1px' }}>
      <svg viewBox="0 0 1440 80" className="w-full h-[44px] md:h-[64px]" preserveAspectRatio="none">
        <path d="M0,0 C400,80 1040,80 1440,0 L1440,80 L0,80 Z" fill={color} />
      </svg>
    </div>
  );
}
