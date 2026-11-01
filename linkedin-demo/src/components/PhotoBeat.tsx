import React from 'react';
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from 'remotion';
import { COLORS } from '../config';
import { CaptionBar } from './CaptionBar';

type Props = {
  src: string;
  en: string;
  es?: string;
  fit?: 'cover' | 'contain';
};

export const PhotoBeat: React.FC<Props> = ({ src, en, es, fit = 'cover' }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 10], [0, 1], { extrapolateRight: 'clamp' });
  const scale = interpolate(frame, [0, 45], [1.06, 1], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.navyDeep, opacity }}>
      <AbsoluteFill
        style={{
          transform: `scale(${scale})`,
        }}
      >
        <Img
          src={staticFile(src)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: fit,
            objectPosition: 'center',
          }}
        />
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          background:
            'linear-gradient(180deg, rgba(6,15,30,.25) 0%, rgba(6,15,30,.15) 45%, rgba(6,15,30,.82) 100%)',
        }}
      />
      <CaptionBar en={en} es={es} />
    </AbsoluteFill>
  );
};
