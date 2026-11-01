import React from 'react';
import { AbsoluteFill, OffthreadVideo, staticFile } from 'remotion';
import { COLORS } from '../config';
import { CaptionBar } from './CaptionBar';

type Props = {
  src: string;
  en: string;
  es?: string;
};

export const PhoneFrame: React.FC<Props> = ({ src, en, es }) => {
  const phoneW = 390;
  const phoneH = 844;
  const scale = 1.95;

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        background: `radial-gradient(ellipse at 50% 28%, ${COLORS.navy2} 0%, ${COLORS.navy} 55%, ${COLORS.navyDeep} 100%)`,
      }}
    >
      <div
        style={{
          width: phoneW * scale,
          height: phoneH * scale,
          borderRadius: 46,
          border: `5px solid ${COLORS.teal2}`,
          boxShadow: `0 0 0 2px ${COLORS.navyDeep}, 0 24px 80px rgba(0,0,0,.55)`,
          overflow: 'hidden',
          background: COLORS.navyDeep,
          position: 'relative',
          marginBottom: 120,
        }}
      >
        <OffthreadVideo
          src={staticFile(src)}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          muted
        />
      </div>
      <CaptionBar en={en} es={es} />
    </AbsoluteFill>
  );
};
