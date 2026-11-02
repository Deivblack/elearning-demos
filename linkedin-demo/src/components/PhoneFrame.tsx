import React from 'react';
import { AbsoluteFill, OffthreadVideo, staticFile } from 'remotion';
import { COLORS, FPS } from '../config';
import { CaptionBar } from './CaptionBar';

type Props = {
  src: string;
  en?: string;
  es?: string;
  /** Skip into the clip (seconds) so we never restart at welcome. */
  startFromSec?: number;
  /** Optional smaller phone for split layouts. */
  scale?: number;
  showCaption?: boolean;
  marginBottom?: number;
};

export const PhoneFrame: React.FC<Props> = ({
  src,
  en,
  es,
  startFromSec = 0,
  scale = 1.95,
  showCaption = true,
  marginBottom = 120,
}) => {
  const phoneW = 390;
  const phoneH = 844;
  const startFrom = Math.round(startFromSec * FPS);

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
          marginBottom: showCaption ? marginBottom : 0,
        }}
      >
        <OffthreadVideo
          src={staticFile(src)}
          startFrom={startFrom}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          muted
        />
      </div>
      {showCaption && en ? <CaptionBar en={en} es={es} /> : null}
    </AbsoluteFill>
  );
};
