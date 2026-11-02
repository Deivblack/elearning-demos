import React from 'react';
import { AbsoluteFill, Img, OffthreadVideo, interpolate, staticFile, useCurrentFrame } from 'remotion';
import { COLORS, FPS } from '../config';

type Props = {
  en: string;
  es?: string;
  phoneSrc: string;
  startFromSec?: number;
  /** Optional cover still behind phone for atmosphere */
  backdropSrc?: string;
};

/**
 * First-act layout: big lettering + live phone UI of the course (not text-only).
 */
export const CaptionOverPhone: React.FC<Props> = ({
  en,
  es,
  phoneSrc,
  startFromSec = 0,
  backdropSrc,
}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 12], [0, 1], { extrapolateRight: 'clamp' });
  const startFrom = Math.round(startFromSec * FPS);
  const phoneW = 390;
  const phoneH = 844;
  const scale = 1.55;

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(ellipse at 50% 40%, ${COLORS.navy2} 0%, ${COLORS.navy} 55%, ${COLORS.navyDeep} 100%)`,
        opacity,
      }}
    >
      {backdropSrc ? (
        <AbsoluteFill style={{ opacity: 0.22 }}>
          <Img
            src={staticFile(backdropSrc)}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </AbsoluteFill>
      ) : null}

      {/* Captions top */}
      <div
        style={{
          position: 'absolute',
          top: 72,
          left: 48,
          right: 48,
          textAlign: 'center',
          zIndex: 5,
        }}
      >
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: en.length > 42 ? 40 : 48,
            lineHeight: 1.2,
            color: COLORS.white,
            textShadow: '0 4px 24px rgba(0,0,0,.55)',
          }}
        >
          {en}
        </div>
        {es ? (
          <div
            style={{
              marginTop: 14,
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: 26,
              color: COLORS.teal2,
              lineHeight: 1.35,
            }}
          >
            {es}
          </div>
        ) : null}
        <div
          style={{
            marginTop: 22,
            height: 3,
            width: 88,
            marginLeft: 'auto',
            marginRight: 'auto',
            background: COLORS.gold,
            borderRadius: 2,
          }}
        />
      </div>

      {/* Phone under captions */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          bottom: 56,
          transform: 'translateX(-50%)',
          width: phoneW * scale,
          height: phoneH * scale,
          borderRadius: 40,
          border: `5px solid ${COLORS.teal2}`,
          boxShadow: '0 20px 60px rgba(0,0,0,.55)',
          overflow: 'hidden',
          background: COLORS.navyDeep,
          zIndex: 4,
        }}
      >
        <OffthreadVideo
          src={staticFile(phoneSrc)}
          startFrom={startFrom}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          muted
        />
      </div>
    </AbsoluteFill>
  );
};
