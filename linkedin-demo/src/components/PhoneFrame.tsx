import React from 'react';
import { AbsoluteFill, OffthreadVideo, Img, staticFile } from 'remotion';
import { COLORS } from '../config';

type Props = {
  src: string;
  kind?: 'video' | 'image';
  caption?: string;
};

export const PhoneFrame: React.FC<Props> = ({ src, kind = 'video', caption }) => {
  const phoneW = 390;
  const phoneH = 844;
  const scale = 2.1;

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        background: `radial-gradient(ellipse at 50% 30%, ${COLORS.navy2} 0%, ${COLORS.navy} 55%, ${COLORS.navyDeep} 100%)`,
      }}
    >
      <div
        style={{
          width: phoneW * scale,
          height: phoneH * scale,
          borderRadius: 48,
          border: `6px solid ${COLORS.teal2}`,
          boxShadow: `0 0 0 2px ${COLORS.navyDeep}, 0 24px 80px rgba(0,0,0,.55)`,
          overflow: 'hidden',
          background: COLORS.navyDeep,
          position: 'relative',
        }}
      >
        {kind === 'video' ? (
          <OffthreadVideo
            src={staticFile(src)}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <Img
            src={staticFile(src)}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        )}
      </div>
      {caption ? (
        <div
          style={{
            position: 'absolute',
            bottom: 120,
            left: 48,
            right: 48,
            textAlign: 'center',
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 700,
            fontSize: 42,
            color: COLORS.white,
            textShadow: '0 2px 16px rgba(0,0,0,.6)',
          }}
        >
          {caption}
        </div>
      ) : null}
    </AbsoluteFill>
  );
};
